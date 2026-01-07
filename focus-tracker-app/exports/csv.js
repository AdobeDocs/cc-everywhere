/**
 * CSV Export Module
 * Exports entries in CSV format for spreadsheet applications
 */

const CSVExport = {
    /**
     * Convert entries to CSV format
     * @param {Array} entries - Array of entry objects
     * @param {Object} options - Export options
     * @returns {string} - CSV formatted text
     */
    toCSV(entries, options = {}) {
        const {
            delimiter = ',',
            includeHeaders = true,
            dateFormat = 'ISO',
            timeFormat = '24h'
        } = options;

        const headers = [
            'ID',
            'Date',
            'Time',
            'Timestamp',
            'Text',
            'Tags',
            'Input Type'
        ];

        const rows = entries.map(entry => {
            const date = new Date(entry.timestamp);

            return [
                entry.id,
                this.formatDate(date, dateFormat),
                this.formatTime(date, timeFormat),
                entry.timestamp,
                this.escapeCSV(entry.text),
                (entry.tags || []).join('; '),
                entry.inputType || 'text'
            ];
        });

        let output = '';

        if (includeHeaders) {
            output += headers.join(delimiter) + '\n';
        }

        rows.forEach(row => {
            output += row.join(delimiter) + '\n';
        });

        return output;
    },

    /**
     * Format date based on preference
     */
    formatDate(date, format) {
        switch (format) {
            case 'US':
                return date.toLocaleDateString('en-US');
            case 'EU':
                return date.toLocaleDateString('en-GB');
            case 'ISO':
            default:
                return date.toISOString().split('T')[0];
        }
    },

    /**
     * Format time based on preference
     */
    formatTime(date, format) {
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
     * Escape CSV special characters
     */
    escapeCSV(str) {
        if (!str) return '';

        // If contains comma, newline, or quote, wrap in quotes
        if (str.includes(',') || str.includes('\n') || str.includes('"')) {
            // Escape quotes by doubling them
            return `"${str.replace(/"/g, '""')}"`;
        }
        return str;
    },

    /**
     * Convert CSV back to entries (for import)
     */
    fromCSV(csvText, options = {}) {
        const { delimiter = ',', hasHeaders = true } = options;

        const lines = csvText.split('\n').filter(line => line.trim());
        const entries = [];

        const startIndex = hasHeaders ? 1 : 0;

        for (let i = startIndex; i < lines.length; i++) {
            const values = this.parseCSVLine(lines[i], delimiter);

            if (values.length >= 5) {
                entries.push({
                    id: parseInt(values[0]) || Date.now() + i,
                    date: values[1],
                    timestamp: values[3] || new Date().toISOString(),
                    text: values[4],
                    tags: values[5] ? values[5].split('; ').filter(t => t) : [],
                    inputType: values[6] || 'text'
                });
            }
        }

        return entries;
    },

    /**
     * Parse a CSV line handling quoted fields
     */
    parseCSVLine(line, delimiter = ',') {
        const values = [];
        let current = '';
        let inQuotes = false;

        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            const nextChar = line[i + 1];

            if (inQuotes) {
                if (char === '"' && nextChar === '"') {
                    current += '"';
                    i++; // Skip next quote
                } else if (char === '"') {
                    inQuotes = false;
                } else {
                    current += char;
                }
            } else {
                if (char === '"') {
                    inQuotes = true;
                } else if (char === delimiter) {
                    values.push(current);
                    current = '';
                } else {
                    current += char;
                }
            }
        }

        values.push(current);
        return values;
    },

    /**
     * Copy to clipboard
     */
    async copyToClipboard(entries, options = {}) {
        const csv = this.toCSV(entries, options);

        try {
            await navigator.clipboard.writeText(csv);
            return { success: true, content: csv };
        } catch (error) {
            console.error('Clipboard error:', error);
            throw error;
        }
    },

    /**
     * Download as CSV file
     */
    downloadFile(entries, options = {}) {
        const csv = this.toCSV(entries, options);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);

        const date = new Date().toISOString().split('T')[0];
        const a = document.createElement('a');
        a.href = url;
        a.download = `focusflow-export-${date}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        return { success: true, filename: a.download };
    }
};

/**
 * JSON Export Module (bonus)
 * Simple JSON export/import
 */
const JSONExport = {
    toJSON(entries, options = {}) {
        const { pretty = true } = options;

        const data = {
            exportDate: new Date().toISOString(),
            version: 1,
            source: 'FocusFlow',
            entryCount: entries.length,
            entries: entries
        };

        return pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data);
    },

    fromJSON(jsonText) {
        const data = JSON.parse(jsonText);

        if (data.version !== 1) {
            console.warn('Unknown JSON version, attempting import anyway');
        }

        return data.entries || [];
    },

    async copyToClipboard(entries, options = {}) {
        const json = this.toJSON(entries, options);

        try {
            await navigator.clipboard.writeText(json);
            return { success: true, content: json };
        } catch (error) {
            console.error('Clipboard error:', error);
            throw error;
        }
    },

    downloadFile(entries, options = {}) {
        const json = this.toJSON(entries, options);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const date = new Date().toISOString().split('T')[0];
        const a = document.createElement('a');
        a.href = url;
        a.download = `focusflow-export-${date}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        return { success: true, filename: a.download };
    }
};
