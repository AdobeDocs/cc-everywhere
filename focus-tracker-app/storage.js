/**
 * Storage Module - Handles all data persistence
 * Uses localStorage for settings and IndexedDB for entries
 */

const Storage = {
    DB_NAME: 'FocusFlowDB',
    DB_VERSION: 1,
    STORE_NAME: 'entries',
    db: null,

    // Initialize IndexedDB
    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve();
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;

                // Create entries store with indexes
                if (!db.objectStoreNames.contains(this.STORE_NAME)) {
                    const store = db.createObjectStore(this.STORE_NAME, {
                        keyPath: 'id',
                        autoIncrement: true
                    });
                    store.createIndex('timestamp', 'timestamp', { unique: false });
                    store.createIndex('date', 'date', { unique: false });
                    store.createIndex('tags', 'tags', { unique: false, multiEntry: true });
                }
            };
        });
    },

    // Entry Operations
    async addEntry(entry) {
        const entryWithMeta = {
            ...entry,
            id: Date.now(),
            timestamp: new Date().toISOString(),
            date: new Date().toISOString().split('T')[0]
        };

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.STORE_NAME], 'readwrite');
            const store = transaction.objectStore(this.STORE_NAME);
            const request = store.add(entryWithMeta);

            request.onsuccess = () => resolve(entryWithMeta);
            request.onerror = () => reject(request.error);
        });
    },

    async getEntry(id) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.STORE_NAME], 'readonly');
            const store = transaction.objectStore(this.STORE_NAME);
            const request = store.get(id);

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    },

    async updateEntry(id, updates) {
        const entry = await this.getEntry(id);
        if (!entry) throw new Error('Entry not found');

        const updatedEntry = { ...entry, ...updates };

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.STORE_NAME], 'readwrite');
            const store = transaction.objectStore(this.STORE_NAME);
            const request = store.put(updatedEntry);

            request.onsuccess = () => resolve(updatedEntry);
            request.onerror = () => reject(request.error);
        });
    },

    async deleteEntry(id) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.STORE_NAME], 'readwrite');
            const store = transaction.objectStore(this.STORE_NAME);
            const request = store.delete(id);

            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    },

    async getEntriesByDate(date) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.STORE_NAME], 'readonly');
            const store = transaction.objectStore(this.STORE_NAME);
            const index = store.index('date');
            const request = index.getAll(date);

            request.onsuccess = () => {
                const entries = request.result.sort((a, b) =>
                    new Date(b.timestamp) - new Date(a.timestamp)
                );
                resolve(entries);
            };
            request.onerror = () => reject(request.error);
        });
    },

    async getEntriesInRange(startDate, endDate) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.STORE_NAME], 'readonly');
            const store = transaction.objectStore(this.STORE_NAME);
            const index = store.index('date');
            const range = IDBKeyRange.bound(startDate, endDate);
            const request = index.getAll(range);

            request.onsuccess = () => {
                const entries = request.result.sort((a, b) =>
                    new Date(b.timestamp) - new Date(a.timestamp)
                );
                resolve(entries);
            };
            request.onerror = () => reject(request.error);
        });
    },

    async getAllEntries() {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.STORE_NAME], 'readonly');
            const store = transaction.objectStore(this.STORE_NAME);
            const request = store.getAll();

            request.onsuccess = () => {
                const entries = request.result.sort((a, b) =>
                    new Date(b.timestamp) - new Date(a.timestamp)
                );
                resolve(entries);
            };
            request.onerror = () => reject(request.error);
        });
    },

    async clearAllEntries() {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.STORE_NAME], 'readwrite');
            const store = transaction.objectStore(this.STORE_NAME);
            const request = store.clear();

            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    },

    // Settings Operations (using localStorage)
    getSettings() {
        const defaults = {
            customInterval: 30,
            breakDuration: 5,
            autoStartBreaks: true,
            enableNotifications: true,
            enableSound: true,
            notificationStyle: 'gentle',
            quickTags: ['Meeting', 'Deep Work', 'Email', 'Planning', 'Break'],
            tanaToken: '',
            obsidianFolder: 'Daily Notes',
            aiProvider: 'none',
            aiApiKey: '',
            currentMode: 'flow',
            streak: 0,
            lastActiveDate: null,
            bodyDoubling: false,
            ambientSound: 'none',
            sessionGoal: ''
        };

        const saved = localStorage.getItem('focusflow_settings');
        if (saved) {
            return { ...defaults, ...JSON.parse(saved) };
        }
        return defaults;
    },

    saveSettings(settings) {
        localStorage.setItem('focusflow_settings', JSON.stringify(settings));
    },

    updateSetting(key, value) {
        const settings = this.getSettings();
        settings[key] = value;
        this.saveSettings(settings);
        return settings;
    },

    // Stats Operations
    async getTodayStats() {
        const today = new Date().toISOString().split('T')[0];
        const entries = await this.getEntriesByDate(today);

        return {
            entryCount: entries.length,
            sessionCount: this.getSessionCount(),
            streak: this.calculateStreak()
        };
    },

    getSessionCount() {
        const today = new Date().toISOString().split('T')[0];
        const key = `focusflow_sessions_${today}`;
        return parseInt(localStorage.getItem(key) || '0', 10);
    },

    incrementSessionCount() {
        const today = new Date().toISOString().split('T')[0];
        const key = `focusflow_sessions_${today}`;
        const count = this.getSessionCount() + 1;
        localStorage.setItem(key, count.toString());
        return count;
    },

    calculateStreak() {
        const settings = this.getSettings();
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

        if (settings.lastActiveDate === today) {
            return settings.streak;
        } else if (settings.lastActiveDate === yesterday) {
            const newStreak = settings.streak + 1;
            this.updateSetting('streak', newStreak);
            this.updateSetting('lastActiveDate', today);
            return newStreak;
        } else if (settings.lastActiveDate !== today) {
            this.updateSetting('streak', 1);
            this.updateSetting('lastActiveDate', today);
            return 1;
        }

        return settings.streak;
    },

    // Export all data
    async exportAllData() {
        const entries = await this.getAllEntries();
        const settings = this.getSettings();

        return {
            version: 1,
            exportDate: new Date().toISOString(),
            entries,
            settings
        };
    },

    // Import data
    async importData(data) {
        if (data.version !== 1) {
            throw new Error('Unsupported data version');
        }

        // Import entries
        for (const entry of data.entries) {
            await this.addEntry(entry);
        }

        // Import settings (merge with existing)
        const currentSettings = this.getSettings();
        this.saveSettings({ ...currentSettings, ...data.settings });

        return {
            entriesImported: data.entries.length
        };
    },

    // Analytics helpers
    async getHourlyDistribution(days = 7) {
        const startDate = new Date(Date.now() - days * 86400000).toISOString().split('T')[0];
        const endDate = new Date().toISOString().split('T')[0];
        const entries = await this.getEntriesInRange(startDate, endDate);

        const hours = new Array(24).fill(0);
        entries.forEach(entry => {
            const hour = new Date(entry.timestamp).getHours();
            hours[hour]++;
        });

        return hours;
    },

    async getTagDistribution(days = 7) {
        const startDate = new Date(Date.now() - days * 86400000).toISOString().split('T')[0];
        const endDate = new Date().toISOString().split('T')[0];
        const entries = await this.getEntriesInRange(startDate, endDate);

        const tags = {};
        entries.forEach(entry => {
            (entry.tags || []).forEach(tag => {
                tags[tag] = (tags[tag] || 0) + 1;
            });
        });

        return Object.entries(tags)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count);
    },

    async getDailyDistribution(days = 7) {
        const distribution = [];
        for (let i = days - 1; i >= 0; i--) {
            const date = new Date(Date.now() - i * 86400000);
            const dateStr = date.toISOString().split('T')[0];
            const entries = await this.getEntriesByDate(dateStr);
            distribution.push({
                date: dateStr,
                day: date.toLocaleDateString('en-US', { weekday: 'short' }),
                count: entries.length
            });
        }
        return distribution;
    }
};

// Initialize on load
Storage.init().catch(console.error);
