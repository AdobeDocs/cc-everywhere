/**
 * Voice Module - Handles speech-to-text input
 * Uses the Web Speech API
 */

const Voice = {
    recognition: null,
    isRecording: false,
    transcript: '',

    // Callbacks
    onResult: null,
    onStart: null,
    onEnd: null,
    onError: null,

    init(callbacks = {}) {
        this.onResult = callbacks.onResult || (() => {});
        this.onStart = callbacks.onStart || (() => {});
        this.onEnd = callbacks.onEnd || (() => {});
        this.onError = callbacks.onError || (() => {});

        // Check for browser support
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            console.warn('Speech recognition not supported in this browser');
            return false;
        }

        this.recognition = new SpeechRecognition();
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';

        this.recognition.onstart = () => {
            this.isRecording = true;
            this.onStart();
        };

        this.recognition.onresult = (event) => {
            let interimTranscript = '';
            let finalTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const result = event.results[i];
                if (result.isFinal) {
                    finalTranscript += result[0].transcript;
                } else {
                    interimTranscript += result[0].transcript;
                }
            }

            this.transcript = finalTranscript || interimTranscript;
            this.onResult(this.transcript, !!finalTranscript);
        };

        this.recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            this.isRecording = false;
            this.onError(event.error);
        };

        this.recognition.onend = () => {
            this.isRecording = false;
            this.onEnd(this.transcript);
        };

        return true;
    },

    start() {
        if (!this.recognition) {
            this.onError('Speech recognition not available');
            return;
        }

        if (this.isRecording) {
            this.stop();
            return;
        }

        this.transcript = '';

        try {
            this.recognition.start();
        } catch (e) {
            // Already started, restart
            this.recognition.stop();
            setTimeout(() => this.recognition.start(), 100);
        }
    },

    stop() {
        if (this.recognition && this.isRecording) {
            this.recognition.stop();
        }
    },

    toggle() {
        if (this.isRecording) {
            this.stop();
        } else {
            this.start();
        }
    },

    isSupported() {
        return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    },

    getTranscript() {
        return this.transcript;
    },

    clearTranscript() {
        this.transcript = '';
    }
};

/**
 * Voice Visualization - Creates visual feedback for voice input
 */
const VoiceVisualizer = {
    audioContext: null,
    analyser: null,
    microphone: null,
    animationFrame: null,
    canvas: null,

    async init(canvasElement) {
        this.canvas = canvasElement;

        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

            this.microphone = this.audioContext.createMediaStreamSource(stream);
            this.analyser = this.audioContext.createAnalyser();
            this.analyser.fftSize = 256;

            this.microphone.connect(this.analyser);

            return true;
        } catch (e) {
            console.warn('Could not initialize voice visualizer:', e);
            return false;
        }
    },

    start() {
        if (!this.analyser) return;

        const draw = () => {
            const bufferLength = this.analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            this.analyser.getByteFrequencyData(dataArray);

            // Calculate average volume
            const average = dataArray.reduce((a, b) => a + b, 0) / bufferLength;
            const scale = 0.5 + (average / 255) * 1.5;

            // Update wave element
            const wave = document.querySelector('.voice-wave');
            if (wave) {
                wave.style.transform = `scaleY(${scale})`;
                wave.classList.add('active');
            }

            this.animationFrame = requestAnimationFrame(draw);
        };

        draw();
    },

    stop() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }

        const wave = document.querySelector('.voice-wave');
        if (wave) {
            wave.style.transform = 'scaleY(0.5)';
            wave.classList.remove('active');
        }
    },

    cleanup() {
        this.stop();
        if (this.audioContext) {
            this.audioContext.close();
        }
    }
};
