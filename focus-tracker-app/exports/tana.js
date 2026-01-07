/**
 * Tana Export Module
 * Exports entries in Tana Paste format or via Tana Input API
 */

const TanaExport = {
    /**
     * Convert entries to Tana Paste format
     * @param {Array} entries - Array of entry objects
     * @param {Object} options - Export options
     * @returns {string} - Tana Paste formatted text
     */
    toTanaPaste(entries, options = {}) {
        const {
            supertag = 'focus-entry',
            includeTime = true,
            includeTags = true,
            groupByDate = true
        } = options;

        let output = '';

        if (groupByDate) {
            // Group entries by date
            const grouped = this.groupByDate(entries);

            for (const [date, dateEntries] of Object.entries(grouped)) {
                const formattedDate = new Date(date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });

                output += `- ${formattedDate} #date\n`;

                for (const entry of dateEntries) {
                    output += this.formatEntry(entry, supertag, includeTime, includeTags, 2);
                }

                output += '\n';
            }
        } else {
            for (const entry of entries) {
                output += this.formatEntry(entry, supertag, includeTime, includeTags, 1);
            }
        }

        return output;
    },

    /**
     * Format a single entry for Tana Paste
     */
    formatEntry(entry, supertag, includeTime, includeTags, indent) {
        const indentStr = '  '.repeat(indent);
        let line = `${indentStr}- ${entry.text}`;

        // Add supertag
        line += ` #${supertag}`;

        // Add time field
        if (includeTime) {
            const time = new Date(entry.timestamp).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
            });
            line += `\n${indentStr}  - Time:: ${time}`;
        }

        // Add tags as fields
        if (includeTags && entry.tags && entry.tags.length > 0) {
            const tagsStr = entry.tags.map(t => `#${t.replace(/\s+/g, '-')}`).join(' ');
            line += `\n${indentStr}  - Tags:: ${tagsStr}`;
        }

        // Add source
        if (entry.inputType) {
            line += `\n${indentStr}  - Source:: ${entry.inputType}`;
        }

        return line + '\n';
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
     * Export via Tana Input API
     * Requires API token from Tana settings
     * @param {Array} entries - Entries to export
     * @param {string} apiToken - Tana API token
     * @param {string} targetNodeId - Target node ID in Tana (optional)
     */
    async toTanaAPI(entries, apiToken, targetNodeId = null) {
        if (!apiToken) {
            throw new Error('Tana API token is required');
        }

        const nodes = entries.map(entry => ({
            name: entry.text,
            supertags: [{ id: 'focus-entry' }],
            children: [
                {
                    name: 'Time',
                    children: [{
                        name: new Date(entry.timestamp).toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit'
                        })
                    }]
                },
                ...(entry.tags && entry.tags.length > 0 ? [{
                    name: 'Tags',
                    children: entry.tags.map(tag => ({ name: tag }))
                }] : [])
            ]
        }));

        const payload = {
            targetNodeId,
            nodes
        };

        try {
            const response = await fetch('https://europe-west1-tana-prod.cloudfunctions.net/addToNode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiToken}`
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const error = await response.text();
                throw new Error(`Tana API error: ${error}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Tana export error:', error);
            throw error;
        }
    },

    /**
     * Copy Tana Paste to clipboard
     */
    async copyToClipboard(entries, options = {}) {
        const tanaPaste = this.toTanaPaste(entries, options);

        try {
            await navigator.clipboard.writeText(tanaPaste);
            return { success: true, content: tanaPaste };
        } catch (error) {
            console.error('Clipboard error:', error);
            throw error;
        }
    },

    /**
     * Download as Tana Paste file
     */
    downloadFile(entries, options = {}) {
        const tanaPaste = this.toTanaPaste(entries, options);
        const blob = new Blob([tanaPaste], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const date = new Date().toISOString().split('T')[0];
        const a = document.createElement('a');
        a.href = url;
        a.download = `focusflow-export-${date}-tana.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        return { success: true, filename: a.download };
    }
};
