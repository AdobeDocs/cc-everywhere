/**
 * AI Widget Module
 * Integrates with Claude or ChatGPT for work pattern analysis
 */

const AIWidget = {
    provider: 'none',
    apiKey: '',
    conversationHistory: [],

    init() {
        const settings = Storage.getSettings();
        this.provider = settings.aiProvider || 'none';
        this.apiKey = settings.aiApiKey || '';
    },

    setProvider(provider, apiKey) {
        this.provider = provider;
        this.apiKey = apiKey;
        Storage.updateSetting('aiProvider', provider);
        Storage.updateSetting('aiApiKey', apiKey);
    },

    isConfigured() {
        return this.provider !== 'none' && this.apiKey;
    },

    /**
     * Send a message to the AI
     * @param {string} message - User message
     * @param {Array} entries - Work entries for context
     * @returns {Promise<string>} - AI response
     */
    async sendMessage(message, entries = []) {
        if (!this.isConfigured()) {
            return this.getOfflineResponse(message, entries);
        }

        // Build context from entries
        const context = this.buildContext(entries);

        // Add to conversation history
        this.conversationHistory.push({
            role: 'user',
            content: message
        });

        try {
            let response;

            if (this.provider === 'claude') {
                response = await this.sendToClaude(message, context);
            } else if (this.provider === 'openai') {
                response = await this.sendToOpenAI(message, context);
            }

            // Add response to history
            this.conversationHistory.push({
                role: 'assistant',
                content: response
            });

            return response;
        } catch (error) {
            console.error('AI API error:', error);
            return `I encountered an error: ${error.message}. Please check your API key and try again.`;
        }
    },

    /**
     * Build context string from entries
     */
    buildContext(entries) {
        if (!entries || entries.length === 0) {
            return 'No work entries available.';
        }

        const today = new Date().toISOString().split('T')[0];
        const todayEntries = entries.filter(e =>
            (e.date || e.timestamp.split('T')[0]) === today
        );

        let context = `Work tracking data:\n`;
        context += `Total entries: ${entries.length}\n`;
        context += `Today's entries: ${todayEntries.length}\n\n`;

        if (todayEntries.length > 0) {
            context += `Today's work log:\n`;
            todayEntries.forEach(entry => {
                const time = new Date(entry.timestamp).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit'
                });
                const tags = entry.tags ? ` [${entry.tags.join(', ')}]` : '';
                context += `- ${time}: ${entry.text}${tags}\n`;
            });
        }

        // Add tag distribution
        const tagCounts = {};
        entries.forEach(e => {
            (e.tags || []).forEach(tag => {
                tagCounts[tag] = (tagCounts[tag] || 0) + 1;
            });
        });

        if (Object.keys(tagCounts).length > 0) {
            context += `\nProject distribution:\n`;
            Object.entries(tagCounts)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5)
                .forEach(([tag, count]) => {
                    context += `- ${tag}: ${count} entries\n`;
                });
        }

        return context;
    },

    /**
     * Send to Claude API
     */
    async sendToClaude(message, context) {
        const systemPrompt = `You are a helpful productivity assistant for someone with ADHD.
You help them understand their work patterns, celebrate their wins, and provide gentle guidance.
Be concise, supportive, and practical. Focus on patterns and actionable insights.
Never be judgmental about missed sessions or inconsistency - that's normal with ADHD.

Here is the user's work tracking data:
${context}`;

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this.apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-haiku-20240307',
                max_tokens: 500,
                system: systemPrompt,
                messages: [
                    ...this.conversationHistory.slice(-6), // Keep last 6 messages for context
                    { role: 'user', content: message }
                ]
            })
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`Claude API error: ${response.status} - ${error}`);
        }

        const data = await response.json();
        return data.content[0].text;
    },

    /**
     * Send to OpenAI API
     */
    async sendToOpenAI(message, context) {
        const systemPrompt = `You are a helpful productivity assistant for someone with ADHD.
You help them understand their work patterns, celebrate their wins, and provide gentle guidance.
Be concise, supportive, and practical. Focus on patterns and actionable insights.
Never be judgmental about missed sessions or inconsistency - that's normal with ADHD.

Here is the user's work tracking data:
${context}`;

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                max_tokens: 500,
                messages: [
                    { role: 'system', content: systemPrompt },
                    ...this.conversationHistory.slice(-6),
                    { role: 'user', content: message }
                ]
            })
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(`OpenAI API error: ${response.status} - ${error}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    },

    /**
     * Offline response using local analysis
     */
    getOfflineResponse(message, entries) {
        const lowerMessage = message.toLowerCase();

        // Summarize today
        if (lowerMessage.includes('summarize') || lowerMessage.includes('today')) {
            return this.summarizeToday(entries);
        }

        // Most worked on
        if (lowerMessage.includes('most') || lowerMessage.includes('work')) {
            return this.getMostWorkedOn(entries);
        }

        // Focus tips
        if (lowerMessage.includes('tip') || lowerMessage.includes('focus') || lowerMessage.includes('help')) {
            return this.getFocusTips();
        }

        // Pattern analysis
        if (lowerMessage.includes('pattern') || lowerMessage.includes('when')) {
            return this.analyzePatterns(entries);
        }

        return `I'm running in offline mode (no AI provider configured).

I can help you with:
- "Summarize today" - Get a summary of today's work
- "What did I work on most?" - See your top projects
- "Focus tips" - Get ADHD-friendly productivity tips
- "Show my patterns" - Analyze when you're most productive

To enable AI-powered analysis, add your Claude or OpenAI API key in Settings.`;
    },

    summarizeToday(entries) {
        const today = new Date().toISOString().split('T')[0];
        const todayEntries = entries.filter(e =>
            (e.date || e.timestamp.split('T')[0]) === today
        );

        if (todayEntries.length === 0) {
            return "No entries recorded today yet. Start a focus session to begin tracking!";
        }

        const tags = [...new Set(todayEntries.flatMap(e => e.tags || []))];
        const firstTime = new Date(todayEntries[todayEntries.length - 1].timestamp)
            .toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
        const lastTime = new Date(todayEntries[0].timestamp)
            .toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

        let summary = `📊 Today's Summary:\n\n`;
        summary += `You've captured ${todayEntries.length} work entries today.\n`;
        summary += `First entry at ${firstTime}, most recent at ${lastTime}.\n\n`;

        if (tags.length > 0) {
            summary += `Projects touched: ${tags.join(', ')}\n\n`;
        }

        summary += `Recent entries:\n`;
        todayEntries.slice(0, 3).forEach(entry => {
            summary += `• ${entry.text.substring(0, 50)}${entry.text.length > 50 ? '...' : ''}\n`;
        });

        summary += `\n🎉 Great job keeping track of your work!`;

        return summary;
    },

    getMostWorkedOn(entries) {
        const tagCounts = {};
        entries.forEach(e => {
            (e.tags || []).forEach(tag => {
                tagCounts[tag] = (tagCounts[tag] || 0) + 1;
            });
        });

        if (Object.keys(tagCounts).length === 0) {
            return "No tagged entries yet. Try adding tags to your entries to track projects!";
        }

        const sorted = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);

        let response = `📈 Your Top Projects:\n\n`;
        sorted.slice(0, 5).forEach(([tag, count], i) => {
            const bar = '█'.repeat(Math.min(count, 10));
            response += `${i + 1}. ${tag}: ${bar} (${count} entries)\n`;
        });

        return response;
    },

    getFocusTips() {
        const tips = [
            "🍅 Try the Pomodoro technique: 25 min focus, 5 min break. Your brain needs those breaks!",
            "🎵 Background music or ambient sounds can help maintain focus. Try lo-fi beats or nature sounds.",
            "📍 Before starting, write down ONE thing you want to accomplish. Just one!",
            "⏰ Set your phone to Do Not Disturb. Notifications are focus kryptonite.",
            "💧 Stay hydrated! Sometimes what feels like lack of focus is actually dehydration.",
            "🚶 Movement helps! Take a quick walk between focus sessions.",
            "📝 Brain dump anxious thoughts onto paper before focusing. Get them out of your head.",
            "👥 Body doubling works! Even a virtual co-working session can boost focus.",
            "🎯 Break big tasks into tiny steps. 'Write report' becomes 'Open document and write one sentence.'",
            "⚡ Work WITH your energy, not against it. Notice when you focus best and protect that time."
        ];

        const tip = tips[Math.floor(Math.random() * tips.length)];
        return `💡 Focus Tip:\n\n${tip}\n\nWant another tip? Just ask!`;
    },

    analyzePatterns(entries) {
        if (entries.length < 5) {
            return "Need more entries to identify patterns. Keep tracking for a few days!";
        }

        // Analyze hourly distribution
        const hourCounts = new Array(24).fill(0);
        entries.forEach(entry => {
            const hour = new Date(entry.timestamp).getHours();
            hourCounts[hour]++;
        });

        const maxHour = hourCounts.indexOf(Math.max(...hourCounts));
        const peakTime = maxHour < 12
            ? `${maxHour || 12} AM`
            : `${maxHour === 12 ? 12 : maxHour - 12} PM`;

        // Find most productive day
        const dayCounts = new Array(7).fill(0);
        entries.forEach(entry => {
            const day = new Date(entry.timestamp).getDay();
            dayCounts[day]++;
        });

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const maxDay = dayCounts.indexOf(Math.max(...dayCounts));

        let response = `🔍 Your Work Patterns:\n\n`;
        response += `⏰ Peak productivity time: Around ${peakTime}\n`;
        response += `📅 Most active day: ${days[maxDay]}\n\n`;
        response += `💡 Consider scheduling important work during your peak hours!`;

        return response;
    },

    /**
     * Generate daily summary for insights page
     */
    async generateDailySummary(entries) {
        if (this.isConfigured()) {
            return await this.sendMessage(
                "Please provide a brief, encouraging summary of my work today. Highlight any patterns you notice and give one actionable suggestion for tomorrow.",
                entries
            );
        }
        return this.summarizeToday(entries);
    },

    /**
     * Clear conversation history
     */
    clearHistory() {
        this.conversationHistory = [];
    }
};
