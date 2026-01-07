/**
 * Timer Module - Handles countdown timer and Pomodoro logic
 */

const Timer = {
    interval: null,
    remainingSeconds: 0,
    totalSeconds: 0,
    isRunning: false,
    isPaused: false,
    isBreak: false,
    currentMode: 'flow',
    pomodoroCount: 0,

    // Mode configurations
    modes: {
        flow: { work: 30, break: 5 },
        pomodoro: { work: 25, break: 5 },
        deep: { work: 50, break: 10 },
        custom: { work: 30, break: 5 }
    },

    // Callbacks
    onTick: null,
    onComplete: null,
    onStart: null,
    onPause: null,
    onReset: null,

    init(callbacks = {}) {
        this.onTick = callbacks.onTick || (() => {});
        this.onComplete = callbacks.onComplete || (() => {});
        this.onStart = callbacks.onStart || (() => {});
        this.onPause = callbacks.onPause || (() => {});
        this.onReset = callbacks.onReset || (() => {});

        // Load settings
        const settings = Storage.getSettings();
        this.modes.custom.work = settings.customInterval;
        this.modes.custom.break = settings.breakDuration;
        this.currentMode = settings.currentMode || 'flow';

        this.setMode(this.currentMode);
    },

    setMode(mode) {
        this.currentMode = mode;
        const config = this.modes[mode];
        this.totalSeconds = config.work * 60;
        this.remainingSeconds = this.totalSeconds;
        this.isBreak = false;

        Storage.updateSetting('currentMode', mode);
        this.updateDisplay();
    },

    setCustomDuration(minutes) {
        this.modes.custom.work = minutes;
        Storage.updateSetting('customInterval', minutes);

        if (this.currentMode === 'custom') {
            this.totalSeconds = minutes * 60;
            this.remainingSeconds = this.totalSeconds;
            this.updateDisplay();
        }
    },

    setBreakDuration(minutes) {
        this.modes[this.currentMode].break = minutes;
        Storage.updateSetting('breakDuration', minutes);
    },

    start() {
        if (this.isRunning) return;

        this.isRunning = true;
        this.isPaused = false;

        // Increment session count on first start
        if (this.remainingSeconds === this.totalSeconds && !this.isBreak) {
            Storage.incrementSessionCount();
        }

        this.onStart(this.isBreak);

        this.interval = setInterval(() => {
            this.tick();
        }, 1000);
    },

    pause() {
        if (!this.isRunning || this.isPaused) return;

        this.isPaused = true;
        this.isRunning = false;
        clearInterval(this.interval);

        this.onPause();
    },

    reset() {
        this.isRunning = false;
        this.isPaused = false;
        clearInterval(this.interval);

        const config = this.modes[this.currentMode];
        this.totalSeconds = this.isBreak ? config.break * 60 : config.work * 60;
        this.remainingSeconds = this.totalSeconds;

        this.onReset();
        this.updateDisplay();
    },

    tick() {
        this.remainingSeconds--;

        this.updateDisplay();
        this.onTick(this.remainingSeconds, this.totalSeconds, this.isBreak);

        if (this.remainingSeconds <= 0) {
            this.complete();
        }
    },

    complete() {
        clearInterval(this.interval);
        this.isRunning = false;

        if (this.isBreak) {
            // Break finished, start new work session
            this.isBreak = false;
            this.pomodoroCount++;
            const config = this.modes[this.currentMode];
            this.totalSeconds = config.work * 60;
            this.remainingSeconds = this.totalSeconds;
            this.updateDisplay();
            this.onComplete('break_end');
        } else {
            // Work session finished, prompt for capture
            this.onComplete('work_end');
        }
    },

    startBreak() {
        this.isBreak = true;
        const config = this.modes[this.currentMode];
        this.totalSeconds = config.break * 60;
        this.remainingSeconds = this.totalSeconds;
        this.updateDisplay();

        const settings = Storage.getSettings();
        if (settings.autoStartBreaks) {
            this.start();
        }
    },

    skipBreak() {
        this.isBreak = false;
        const config = this.modes[this.currentMode];
        this.totalSeconds = config.work * 60;
        this.remainingSeconds = this.totalSeconds;
        this.updateDisplay();
    },

    snooze(minutes = 5) {
        // Add snooze time to remaining
        this.remainingSeconds += minutes * 60;
        this.totalSeconds = this.remainingSeconds;
        this.updateDisplay();
    },

    updateDisplay() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        document.getElementById('timer-minutes').textContent =
            minutes.toString().padStart(2, '0');
        document.getElementById('timer-seconds').textContent =
            seconds.toString().padStart(2, '0');

        // Update progress ring
        const progress = 1 - (this.remainingSeconds / this.totalSeconds);
        const circumference = 2 * Math.PI * 90; // radius is 90
        const offset = circumference * (1 - progress);

        const progressRing = document.querySelector('.timer-progress');
        if (progressRing) {
            progressRing.style.strokeDasharray = circumference;
            progressRing.style.strokeDashoffset = offset;

            // Change color for break
            progressRing.style.stroke = this.isBreak ? '#22c55e' : '#6366f1';
        }

        // Update label
        const label = document.getElementById('timer-label');
        if (label) {
            if (this.isBreak) {
                label.textContent = 'Break time!';
            } else if (this.isRunning) {
                label.textContent = 'Focus session active';
            } else if (this.isPaused) {
                label.textContent = 'Paused';
            } else {
                label.textContent = 'Until next check-in';
            }
        }

        // Update page title
        if (this.isRunning) {
            const timeStr = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            document.title = `${timeStr} - FocusFlow`;
        } else {
            document.title = 'FocusFlow - ADHD-Friendly Work Capture';
        }
    },

    getFormattedTime() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    },

    getProgress() {
        return 1 - (this.remainingSeconds / this.totalSeconds);
    }
};
