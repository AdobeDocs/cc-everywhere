/**
 * FocusFlow - Main Application
 * ADHD-Friendly Work Capture App
 */

const App = {
    currentDate: new Date().toISOString().split('T')[0],
    selectedTags: [],
    inputType: 'text',

    async init() {
        // Wait for storage to be ready
        await Storage.init();

        // Initialize modules
        Timer.init({
            onTick: this.handleTimerTick.bind(this),
            onComplete: this.handleTimerComplete.bind(this),
            onStart: this.handleTimerStart.bind(this),
            onPause: this.handleTimerPause.bind(this),
            onReset: this.handleTimerReset.bind(this)
        });

        Voice.init({
            onResult: this.handleVoiceResult.bind(this),
            onStart: this.handleVoiceStart.bind(this),
            onEnd: this.handleVoiceEnd.bind(this),
            onError: this.handleVoiceError.bind(this)
        });

        AIWidget.init();

        // Setup event listeners
        this.setupEventListeners();

        // Load initial data
        this.loadSettings();
        this.updateStats();
        this.loadEntries();
        this.renderQuickTags();
        this.renderInsights();

        // Request notification permission
        this.requestNotificationPermission();

        // Show welcome toast
        this.showToast('FocusFlow ready! Start a session to begin.', 'success');

        console.log('FocusFlow initialized');
    },

    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
        });

        // Timer controls
        document.getElementById('start-btn').addEventListener('click', () => this.startTimer());
        document.getElementById('pause-btn').addEventListener('click', () => this.pauseTimer());
        document.getElementById('reset-btn').addEventListener('click', () => this.resetTimer());

        // Mode selection
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mode = e.currentTarget.dataset.mode;
                this.setMode(mode);
            });
        });

        // Body doubling toggle
        document.getElementById('body-doubling-toggle').addEventListener('change', (e) => {
            const options = document.getElementById('bd-options');
            options.classList.toggle('hidden', !e.target.checked);
            Storage.updateSetting('bodyDoubling', e.target.checked);
        });

        // Ambient sound
        document.getElementById('ambient-sound').addEventListener('change', (e) => {
            Storage.updateSetting('ambientSound', e.target.value);
            // In a real app, this would play ambient sounds
        });

        // Date navigation
        document.getElementById('prev-day').addEventListener('click', () => this.navigateDate(-1));
        document.getElementById('next-day').addEventListener('click', () => this.navigateDate(1));

        // Add entry button
        document.getElementById('add-entry-btn').addEventListener('click', () => this.showCaptureModal());

        // Export dropdown
        document.getElementById('export-btn').addEventListener('click', () => {
            document.getElementById('export-menu').classList.toggle('hidden');
        });

        // Export options
        document.querySelectorAll('[data-export]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleExport(e.target.dataset.export);
                document.getElementById('export-menu').classList.add('hidden');
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.export-dropdown')) {
                document.getElementById('export-menu').classList.add('hidden');
            }
        });

        // Capture modal
        this.setupCaptureModal();

        // Settings
        this.setupSettings();

        // AI Widget
        this.setupAIWidget();

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));

        // Insights range
        document.getElementById('insights-range').addEventListener('change', (e) => {
            this.renderInsights(parseInt(e.target.value));
        });

        // Generate AI summary
        document.getElementById('generate-summary-btn').addEventListener('click', () => {
            this.generateAISummary();
        });
    },

    setupCaptureModal() {
        // Input type toggle
        document.querySelectorAll('.input-type-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = e.currentTarget.dataset.type;
                this.setInputType(type);
            });
        });

        // Voice recording
        document.getElementById('voice-record-btn').addEventListener('click', () => {
            Voice.toggle();
        });

        // Save/Skip buttons
        document.getElementById('save-capture-btn').addEventListener('click', () => this.saveEntry());
        document.getElementById('skip-capture-btn').addEventListener('click', () => this.skipCapture());
        document.getElementById('snooze-btn').addEventListener('click', () => this.snoozeCapture());

        // Close modal on background click
        document.getElementById('capture-modal').addEventListener('click', (e) => {
            if (e.target.id === 'capture-modal') {
                this.hideCaptureModal();
            }
        });
    },

    setupSettings() {
        // Custom interval
        document.getElementById('custom-interval').addEventListener('change', (e) => {
            const value = parseInt(e.target.value);
            Timer.setCustomDuration(value);
            document.getElementById('custom-interval-display').textContent = `${value} min`;
        });

        // Break duration
        document.getElementById('break-duration').addEventListener('change', (e) => {
            Timer.setBreakDuration(parseInt(e.target.value));
        });

        // Checkboxes
        ['auto-start-breaks', 'enable-notifications', 'enable-sound'].forEach(id => {
            document.getElementById(id).addEventListener('change', (e) => {
                const key = id.replace(/-/g, '').replace('enable', 'enable').replace(/([A-Z])/g, '_$1').toLowerCase();
                Storage.updateSetting(this.toCamelCase(id), e.target.checked);
            });
        });

        // Notification style
        document.getElementById('notification-style').addEventListener('change', (e) => {
            Storage.updateSetting('notificationStyle', e.target.value);
        });

        // Tags management
        document.getElementById('add-tag-btn').addEventListener('click', () => this.addQuickTag());
        document.getElementById('new-tag-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addQuickTag();
        });

        // Integrations
        document.getElementById('tana-token').addEventListener('change', (e) => {
            Storage.updateSetting('tanaToken', e.target.value);
        });

        document.getElementById('obsidian-folder').addEventListener('change', (e) => {
            Storage.updateSetting('obsidianFolder', e.target.value);
        });

        document.getElementById('ai-provider').addEventListener('change', (e) => {
            const keySection = document.getElementById('ai-key-setting');
            keySection.classList.toggle('hidden', e.target.value === 'none');
            AIWidget.setProvider(e.target.value, Storage.getSettings().aiApiKey);
        });

        document.getElementById('ai-api-key').addEventListener('change', (e) => {
            const provider = document.getElementById('ai-provider').value;
            AIWidget.setProvider(provider, e.target.value);
        });

        // Data management
        document.getElementById('export-all-btn').addEventListener('click', () => this.exportAllData());
        document.getElementById('import-btn').addEventListener('click', () => {
            document.getElementById('import-file').click();
        });
        document.getElementById('import-file').addEventListener('change', (e) => this.importData(e));
        document.getElementById('clear-data-btn').addEventListener('click', () => this.clearAllData());
    },

    setupAIWidget() {
        document.getElementById('ai-toggle-btn').addEventListener('click', () => {
            document.getElementById('ai-widget').classList.toggle('hidden');
        });

        document.getElementById('close-ai-widget').addEventListener('click', () => {
            document.getElementById('ai-widget').classList.add('hidden');
        });

        document.getElementById('ai-send-btn').addEventListener('click', () => this.sendAIMessage());
        document.getElementById('ai-input-field').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendAIMessage();
        });

        // Suggestion buttons
        document.querySelectorAll('.suggestion-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.getElementById('ai-input-field').value = e.target.textContent;
                this.sendAIMessage();
            });
        });
    },

    // Tab Navigation
    switchTab(tabId) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabId);
        });

        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.toggle('active', content.id === `${tabId}-tab`);
        });

        if (tabId === 'entries') {
            this.loadEntries();
        } else if (tabId === 'insights') {
            this.renderInsights();
        }
    },

    // Timer Methods
    startTimer() {
        Timer.start();
        document.getElementById('start-btn').classList.add('hidden');
        document.getElementById('pause-btn').classList.remove('hidden');
        document.getElementById('reset-btn').classList.remove('hidden');
    },

    pauseTimer() {
        Timer.pause();
        document.getElementById('start-btn').classList.remove('hidden');
        document.getElementById('pause-btn').classList.add('hidden');
    },

    resetTimer() {
        Timer.reset();
        document.getElementById('start-btn').classList.remove('hidden');
        document.getElementById('pause-btn').classList.add('hidden');
        document.getElementById('reset-btn').classList.add('hidden');
    },

    setMode(mode) {
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });
        Timer.setMode(mode);
    },

    handleTimerTick(remaining, total, isBreak) {
        // Update progress ring is handled by Timer module
    },

    handleTimerStart(isBreak) {
        if (!isBreak) {
            this.updateStats();
        }
    },

    handleTimerPause() {
        // Could show a pause notification
    },

    handleTimerReset() {
        // Reset UI state
    },

    handleTimerComplete(type) {
        if (type === 'work_end') {
            this.showCaptureModal();
            this.playNotificationSound();
            this.showNotification('Time to capture!', 'What have you been working on?');
        } else if (type === 'break_end') {
            this.showNotification('Break over!', 'Ready to focus again?');
            this.playNotificationSound();
        }
    },

    // Capture Modal
    showCaptureModal() {
        const modal = document.getElementById('capture-modal');
        modal.classList.remove('hidden');

        // Update time display
        const now = new Date();
        document.getElementById('capture-time').textContent = now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit'
        });

        // Reset state
        document.getElementById('capture-text').value = '';
        document.getElementById('voice-transcript').textContent = '';
        this.selectedTags = [];
        this.renderModalTags();

        // Focus text input
        if (this.inputType === 'text') {
            document.getElementById('capture-text').focus();
        }
    },

    hideCaptureModal() {
        document.getElementById('capture-modal').classList.add('hidden');
        Voice.stop();

        // Start break if configured
        const settings = Storage.getSettings();
        if (Timer.currentMode !== 'flow' || settings.autoStartBreaks) {
            Timer.startBreak();
        } else {
            Timer.reset();
        }
    },

    setInputType(type) {
        this.inputType = type;

        document.querySelectorAll('.input-type-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.type === type);
        });

        document.getElementById('text-input-area').classList.toggle('hidden', type !== 'text');
        document.getElementById('voice-input-area').classList.toggle('hidden', type !== 'voice');

        if (type === 'voice' && !Voice.isSupported()) {
            this.showToast('Voice input is not supported in this browser', 'error');
            this.setInputType('text');
        }
    },

    // Voice handlers
    handleVoiceResult(transcript, isFinal) {
        document.getElementById('voice-transcript').textContent = transcript;
    },

    handleVoiceStart() {
        const btn = document.getElementById('voice-record-btn');
        btn.classList.add('recording');
        btn.querySelector('.voice-label').textContent = 'Recording...';
        document.querySelector('.voice-wave').classList.add('active');
    },

    handleVoiceEnd(transcript) {
        const btn = document.getElementById('voice-record-btn');
        btn.classList.remove('recording');
        btn.querySelector('.voice-label').textContent = 'Click to Record';
        document.querySelector('.voice-wave').classList.remove('active');
    },

    handleVoiceError(error) {
        this.showToast(`Voice error: ${error}`, 'error');
    },

    renderModalTags() {
        const container = document.getElementById('modal-quick-tags');
        const settings = Storage.getSettings();

        container.innerHTML = settings.quickTags.map(tag => `
            <button class="quick-tag-btn ${this.selectedTags.includes(tag) ? 'selected' : ''}"
                    data-tag="${tag}">
                ${tag}
            </button>
        `).join('');

        container.querySelectorAll('.quick-tag-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tag = e.target.dataset.tag;
                this.toggleTag(tag);
                e.target.classList.toggle('selected');
            });
        });
    },

    toggleTag(tag) {
        const index = this.selectedTags.indexOf(tag);
        if (index === -1) {
            this.selectedTags.push(tag);
        } else {
            this.selectedTags.splice(index, 1);
        }
    },

    async saveEntry() {
        let text = '';

        if (this.inputType === 'text') {
            text = document.getElementById('capture-text').value.trim();
        } else {
            text = Voice.getTranscript().trim();
        }

        if (!text) {
            this.showToast('Please enter what you were working on', 'error');
            return;
        }

        const entry = {
            text,
            tags: [...this.selectedTags],
            inputType: this.inputType
        };

        try {
            await Storage.addEntry(entry);
            this.showToast('Entry saved!', 'success');
            this.celebrateCapture();
            this.hideCaptureModal();
            this.updateStats();
            this.loadEntries();
        } catch (error) {
            this.showToast('Failed to save entry', 'error');
            console.error(error);
        }
    },

    skipCapture() {
        this.hideCaptureModal();
        this.showToast('Capture skipped', 'info');
    },

    snoozeCapture() {
        Timer.snooze(5);
        this.hideCaptureModal();
        this.startTimer();
        this.showToast('Snoozed for 5 minutes', 'info');
    },

    // Entries
    async loadEntries() {
        const entries = await Storage.getEntriesByDate(this.currentDate);
        this.renderEntries(entries);
        this.updateDateDisplay();
    },

    renderEntries(entries) {
        const container = document.getElementById('entries-list');

        if (entries.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <span class="empty-icon">📝</span>
                    <p>No entries for this day</p>
                    <p class="empty-hint">Start a session and capture your work!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = entries.map(entry => `
            <div class="entry-card" data-id="${entry.id}">
                <div class="entry-time">
                    ${new Date(entry.timestamp).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit'
                    })}
                </div>
                <div class="entry-content">
                    <div class="entry-text">${this.escapeHtml(entry.text)}</div>
                    ${entry.tags && entry.tags.length > 0 ? `
                        <div class="entry-tags">
                            ${entry.tags.map(tag => `<span class="entry-tag">${tag}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
                <div class="entry-actions">
                    <button class="entry-action-btn edit-btn" title="Edit">✏️</button>
                    <button class="entry-action-btn delete-btn" title="Delete">🗑️</button>
                </div>
            </div>
        `).join('');

        // Add event listeners for edit/delete
        container.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const card = e.target.closest('.entry-card');
                const id = parseInt(card.dataset.id);
                await Storage.deleteEntry(id);
                this.loadEntries();
                this.updateStats();
                this.showToast('Entry deleted', 'info');
            });
        });
    },

    navigateDate(direction) {
        const date = new Date(this.currentDate);
        date.setDate(date.getDate() + direction);

        // Don't go to future
        if (date > new Date()) return;

        this.currentDate = date.toISOString().split('T')[0];
        this.loadEntries();
    },

    updateDateDisplay() {
        const today = new Date().toISOString().split('T')[0];
        const display = document.getElementById('current-date');

        if (this.currentDate === today) {
            display.textContent = 'Today';
        } else {
            display.textContent = new Date(this.currentDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
            });
        }

        // Disable next button if viewing today
        document.getElementById('next-day').disabled = this.currentDate === today;
    },

    // Stats
    async updateStats() {
        const stats = await Storage.getTodayStats();

        document.getElementById('session-count').textContent = stats.sessionCount;
        document.getElementById('entry-count').textContent = stats.entryCount;
        document.getElementById('streak-count').textContent = stats.streak;
    },

    // Settings
    loadSettings() {
        const settings = Storage.getSettings();

        document.getElementById('custom-interval').value = settings.customInterval;
        document.getElementById('custom-interval-display').textContent = `${settings.customInterval} min`;
        document.getElementById('break-duration').value = settings.breakDuration;
        document.getElementById('auto-start-breaks').checked = settings.autoStartBreaks;
        document.getElementById('enable-notifications').checked = settings.enableNotifications;
        document.getElementById('enable-sound').checked = settings.enableSound;
        document.getElementById('notification-style').value = settings.notificationStyle;
        document.getElementById('tana-token').value = settings.tanaToken;
        document.getElementById('obsidian-folder').value = settings.obsidianFolder;
        document.getElementById('ai-provider').value = settings.aiProvider;
        document.getElementById('ai-api-key').value = settings.aiApiKey;
        document.getElementById('body-doubling-toggle').checked = settings.bodyDoubling;

        if (settings.bodyDoubling) {
            document.getElementById('bd-options').classList.remove('hidden');
        }

        if (settings.aiProvider !== 'none') {
            document.getElementById('ai-key-setting').classList.remove('hidden');
        }

        // Set active mode
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === settings.currentMode);
        });
    },

    renderQuickTags() {
        const settings = Storage.getSettings();
        const container = document.getElementById('quick-tags-list');

        container.innerHTML = settings.quickTags.map(tag => `
            <div class="tag-item">
                <span>${tag}</span>
                <button class="tag-remove" data-tag="${tag}">×</button>
            </div>
        `).join('');

        container.querySelectorAll('.tag-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.removeQuickTag(e.target.dataset.tag);
            });
        });
    },

    addQuickTag() {
        const input = document.getElementById('new-tag-input');
        const tag = input.value.trim();

        if (!tag) return;

        const settings = Storage.getSettings();
        if (!settings.quickTags.includes(tag)) {
            settings.quickTags.push(tag);
            Storage.saveSettings(settings);
            this.renderQuickTags();
        }

        input.value = '';
    },

    removeQuickTag(tag) {
        const settings = Storage.getSettings();
        settings.quickTags = settings.quickTags.filter(t => t !== tag);
        Storage.saveSettings(settings);
        this.renderQuickTags();
    },

    // Exports
    async handleExport(type) {
        const entries = await Storage.getEntriesByDate(this.currentDate);

        if (entries.length === 0) {
            this.showToast('No entries to export', 'error');
            return;
        }

        try {
            let result;

            switch (type) {
                case 'tana':
                    result = TanaExport.downloadFile(entries);
                    break;
                case 'obsidian':
                    result = ObsidianExport.downloadFile(entries, { date: this.currentDate });
                    break;
                case 'json':
                    result = JSONExport.downloadFile(entries);
                    break;
                case 'csv':
                    result = CSVExport.downloadFile(entries);
                    break;
            }

            this.showToast(`Exported to ${result.filename}`, 'success');
        } catch (error) {
            this.showToast(`Export failed: ${error.message}`, 'error');
        }
    },

    async exportAllData() {
        try {
            const data = await Storage.exportAllData();
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = `focusflow-backup-${new Date().toISOString().split('T')[0]}.json`;
            a.click();

            URL.revokeObjectURL(url);
            this.showToast('Backup downloaded', 'success');
        } catch (error) {
            this.showToast('Backup failed', 'error');
        }
    },

    async importData(event) {
        const file = event.target.files[0];
        if (!file) return;

        try {
            const text = await file.text();
            const data = JSON.parse(text);
            const result = await Storage.importData(data);
            this.showToast(`Imported ${result.entriesImported} entries`, 'success');
            this.loadEntries();
            this.updateStats();
        } catch (error) {
            this.showToast('Import failed: Invalid file', 'error');
        }

        event.target.value = '';
    },

    async clearAllData() {
        if (!confirm('Are you sure you want to delete ALL data? This cannot be undone!')) {
            return;
        }

        try {
            await Storage.clearAllEntries();
            localStorage.clear();
            this.showToast('All data cleared', 'success');
            location.reload();
        } catch (error) {
            this.showToast('Failed to clear data', 'error');
        }
    },

    // Insights
    async renderInsights(days = 7) {
        const hourly = await Storage.getHourlyDistribution(days);
        const tags = await Storage.getTagDistribution(days);
        const daily = await Storage.getDailyDistribution(days);

        this.renderHourChart(hourly);
        this.renderProjectList(tags);
        this.renderWeekChart(daily);
    },

    renderHourChart(data) {
        const container = document.getElementById('hour-chart');
        const max = Math.max(...data, 1);

        container.innerHTML = data.map((count, hour) => {
            const height = (count / max) * 100;
            return `<div class="hour-bar" style="height: ${Math.max(height, 4)}%" title="${hour}:00 - ${count} entries"></div>`;
        }).join('');
    },

    renderProjectList(data) {
        const container = document.getElementById('project-list');

        if (data.length === 0) {
            container.innerHTML = '<p class="empty-hint">No tagged entries yet</p>';
            return;
        }

        const max = data[0]?.count || 1;

        container.innerHTML = data.slice(0, 5).map(item => {
            const width = (item.count / max) * 100;
            return `
                <div class="project-item">
                    <span class="project-name">${item.name}</span>
                    <div class="project-bar-bg">
                        <div class="project-bar" style="width: ${width}%"></div>
                    </div>
                    <span class="project-count">${item.count}</span>
                </div>
            `;
        }).join('');
    },

    renderWeekChart(data) {
        const container = document.getElementById('week-chart');
        const max = Math.max(...data.map(d => d.count), 1);

        container.innerHTML = data.map(day => {
            const height = (day.count / max) * 80;
            return `
                <div class="day-column">
                    <div class="day-bar" style="height: ${Math.max(height, 4)}px"></div>
                    <span class="day-label">${day.day}</span>
                </div>
            `;
        }).join('');
    },

    // AI
    async sendAIMessage() {
        const input = document.getElementById('ai-input-field');
        const message = input.value.trim();

        if (!message) return;

        // Add user message to chat
        this.addAIChatMessage(message, 'user');
        input.value = '';

        // Show typing indicator
        const typingId = this.addAIChatMessage('Thinking...', 'assistant');

        // Get entries for context
        const entries = await Storage.getAllEntries();

        // Get AI response
        const response = await AIWidget.sendMessage(message, entries);

        // Remove typing indicator and add response
        document.getElementById(typingId)?.remove();
        this.addAIChatMessage(response, 'assistant');
    },

    addAIChatMessage(text, role) {
        const chat = document.getElementById('ai-chat');
        const id = `msg-${Date.now()}`;

        const div = document.createElement('div');
        div.id = id;
        div.className = `ai-message ${role}`;
        div.textContent = text;

        chat.appendChild(div);
        chat.scrollTop = chat.scrollHeight;

        return id;
    },

    async generateAISummary() {
        const container = document.getElementById('ai-summary');
        container.innerHTML = '<p class="placeholder">Generating summary...</p>';

        const entries = await Storage.getAllEntries();
        const summary = await AIWidget.generateDailySummary(entries);

        container.innerHTML = `<p>${summary.replace(/\n/g, '<br>')}</p>`;
    },

    // Notifications
    requestNotificationPermission() {
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }
    },

    showNotification(title, body) {
        const settings = Storage.getSettings();

        if (!settings.enableNotifications) return;

        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification(title, {
                body,
                icon: '🎯',
                tag: 'focusflow'
            });
        }
    },

    playNotificationSound() {
        const settings = Storage.getSettings();
        if (!settings.enableSound) return;

        const audio = document.getElementById('notification-sound');
        audio.play().catch(() => {});
    },

    // Toast notifications
    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;

        container.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    },

    // Dopamine celebration
    celebrateCapture() {
        const emojis = ['🎉', '✨', '🌟', '💫', '🎊'];

        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const emoji = document.createElement('div');
                emoji.className = 'confetti';
                emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                emoji.style.left = `${Math.random() * 100}%`;
                emoji.style.top = `${Math.random() * 50 + 50}%`;
                document.body.appendChild(emoji);

                setTimeout(() => emoji.remove(), 1000);
            }, i * 100);
        }
    },

    // Keyboard shortcuts
    handleKeyboard(e) {
        // Cmd/Ctrl + Enter to save in modal
        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
            const modal = document.getElementById('capture-modal');
            if (!modal.classList.contains('hidden')) {
                e.preventDefault();
                this.saveEntry();
            }
        }

        // Escape to close modal
        if (e.key === 'Escape') {
            const modal = document.getElementById('capture-modal');
            if (!modal.classList.contains('hidden')) {
                this.hideCaptureModal();
            }

            const aiWidget = document.getElementById('ai-widget');
            if (!aiWidget.classList.contains('hidden')) {
                aiWidget.classList.add('hidden');
            }
        }

        // Space to start/pause timer (when not in input)
        if (e.key === ' ' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
            e.preventDefault();
            if (Timer.isRunning) {
                this.pauseTimer();
            } else {
                this.startTimer();
            }
        }
    },

    // Utilities
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    toCamelCase(str) {
        return str.replace(/-([a-z])/g, g => g[1].toUpperCase());
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());
