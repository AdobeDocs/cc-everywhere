/**
 * Obsidian Export Module
 * Exports entries in Obsidian-compatible Markdown format
 */

const ObsidianExport = {
    /**
     * Convert entries to Obsidian Daily Note format
     * @param {Array} entries - Array of entry objects
     * @param {Object} options - Export options
     * @returns {string} - Markdown formatted text
     */
    toDailyNote(entries, options = {}) {
        const {
            date = new Date().toISOString().split('T')[0],
            title = null,
            includeMetadata = true,
            includeStats = true,
            linkTags = true,
            timeFormat = '24h'
        } = options;

        // Filter entries for specific date
        const dateEntries = entries.filter(e =>
            (e.date || e.timestamp.split('T')[0]) === date
        );

        let output = '';

        // YAML frontmatter
        if (includeMetadata) {
            const tags = [...new Set(dateEntries.flatMap(e => e.tags || []))];
            output += '---\n';
            output += `date: ${date}\n`;
            output += `type: daily-note\n`;
            output += `source: FocusFlow\n`;
            if (tags.length > 0) {
                output += `tags:\n`;
                tags.forEach(tag => {
                    output += `  - ${tag.toLowerCase().replace(/\s+/g, '-')}\n`;
                });
            }
            output += '---\n\n';
        }

        // Title
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        output += `# ${title || formattedDate}\n\n`;

        // Stats summary
        if (includeStats && dateEntries.length > 0) {
            const uniqueTags = [...new Set(dateEntries.flatMap(e => e.tags || []))];
            const firstEntry = dateEntries[dateEntries.length - 1];
            const lastEntry = dateEntries[0];

            output += '## Summary\n\n';
            output += `- **Total Entries:** ${dateEntries.length}\n`;
            output += `- **First Entry:** ${this.formatTime(firstEntry.timestamp, timeFormat)}\n`;
            output += `- **Last Entry:** ${this.formatTime(lastEntry.timestamp, timeFormat)}\n`;
            if (uniqueTags.length > 0) {
                output += `- **Projects:** ${uniqueTags.join(', ')}\n`;
            }
            output += '\n';
        }

        // Work log section
        output += '## Work Log\n\n';

        if (dateEntries.length === 0) {
            output += '*No entries recorded for this day.*\n\n';
        } else {
            // Sort by timestamp (oldest first)
            const sortedEntries = [...dateEntries].sort((a, b) =>
                new Date(a.timestamp) - new Date(b.timestamp)
            );

            for (const entry of sortedEntries) {
                const time = this.formatTime(entry.timestamp, timeFormat);
                const tags = entry.tags || [];

                output += `### ${time}\n\n`;
                output += `${entry.text}\n\n`;

                if (tags.length > 0) {
                    if (linkTags) {
                        output += tags.map(t => `[[${t}]]`).join(' ') + '\n\n';
                    } else {
                        output += tags.map(t => `#${t.replace(/\s+/g, '-')}`).join(' ') + '\n\n';
                    }
                }
            }
        }

        // Daily reflection section (empty, for user to fill)
        output += '## Reflections\n\n';
        output += '<!-- Add your daily reflections here -->\n\n';

        return output;
    },

    /**
     * Format time based on user preference
     */
    formatTime(timestamp, format = '24h') {
        const date = new Date(timestamp);
        if (format === '12h') {
            return date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
        }
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    },

    /**
     * Convert entries to weekly review format
     */
    toWeeklyReview(entries, options = {}) {
        const {
            startDate = new Date(Date.now() - 6 * 86400000).toISOString().split('T')[0],
            endDate = new Date().toISOString().split('T')[0]
        } = options;

        // Filter entries in date range
        const weekEntries = entries.filter(e => {
            const entryDate = e.date || e.timestamp.split('T')[0];
            return entryDate >= startDate && entryDate <= endDate;
        });

        let output = '---\n';
        output += `type: weekly-review\n`;
        output += `week-start: ${startDate}\n`;
        output += `week-end: ${endDate}\n`;
        output += `source: FocusFlow\n`;
        output += '---\n\n';

        output += `# Weekly Review: ${startDate} to ${endDate}\n\n`;

        // Stats
        const uniqueDays = [...new Set(weekEntries.map(e => e.date || e.timestamp.split('T')[0]))];
        const uniqueTags = [...new Set(weekEntries.flatMap(e => e.tags || []))];

        output += '## Overview\n\n';
        output += `- **Total Entries:** ${weekEntries.length}\n`;
        output += `- **Active Days:** ${uniqueDays.length}/7\n`;
        output += `- **Projects Touched:** ${uniqueTags.length}\n\n`;

        // Entries by day
        output += '## Daily Breakdown\n\n';

        const groupedByDate = this.groupByDate(weekEntries);
        const dates = Object.keys(groupedByDate).sort();

        for (const date of dates) {
            const dayEntries = groupedByDate[date];
            const dayName = new Date(date).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'short',
                day: 'numeric'
            });

            output += `### ${dayName}\n\n`;
            dayEntries.forEach(entry => {
                const time = this.formatTime(entry.timestamp, '24h');
                output += `- **${time}** - ${entry.text}\n`;
            });
            output += '\n';
        }

        // Projects summary
        if (uniqueTags.length > 0) {
            output += '## Projects\n\n';

            const tagCounts = {};
            weekEntries.forEach(e => {
                (e.tags || []).forEach(tag => {
                    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
                });
            });

            const sortedTags = Object.entries(tagCounts)
                .sort((a, b) => b[1] - a[1]);

            sortedTags.forEach(([tag, count]) => {
                output += `- [[${tag}]]: ${count} entries\n`;
            });
            output += '\n';
        }

        // Reflection prompts
        output += '## Reflections\n\n';
        output += '**What went well this week?**\n\n';
        output += '**What could be improved?**\n\n';
        output += '**Key accomplishments:**\n\n';
        output += '**Focus for next week:**\n\n';

        return output;
    },

    /**
     * Group entries by date
     */
    groupByDate(entries) {
        return entries.reduce((groups, entry) => {
            const date = entry.date || entry.timestamp.split('T')[0];
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(entry);
            return groups;
        }, {});
    },

    /**
     * Copy to clipboard
     */
    async copyToClipboard(entries, options = {}) {
        const markdown = options.weekly
            ? this.toWeeklyReview(entries, options)
            : this.toDailyNote(entries, options);

        try {
            await navigator.clipboard.writeText(markdown);
            return { success: true, content: markdown };
        } catch (error) {
            console.error('Clipboard error:', error);
            throw error;
        }
    },

    /**
     * Download as Markdown file
     */
    downloadFile(entries, options = {}) {
        const markdown = options.weekly
            ? this.toWeeklyReview(entries, options)
            : this.toDailyNote(entries, options);

        const blob = new Blob([markdown], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);

        const date = options.date || new Date().toISOString().split('T')[0];
        const filename = options.weekly
            ? `weekly-review-${date}.md`
            : `${date}.md`;

        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        return { success: true, filename };
    },

    /**
     * Generate vault-compatible folder structure info
     */
    getVaultInfo(folderName = 'Daily Notes') {
        return {
            suggestedPath: `${folderName}/`,
            dateFormat: 'YYYY-MM-DD',
            templateNote: `This export is compatible with the Obsidian Daily Notes core plugin.

To import:
1. Copy the downloaded .md file to your vault's daily notes folder
2. Or copy the content directly into an existing daily note

Recommended plugins:
- Daily Notes (core plugin)
- Calendar
- Periodic Notes
- Templater (for custom templates)`
        };
    }
};
