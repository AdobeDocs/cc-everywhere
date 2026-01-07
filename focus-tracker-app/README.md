# FocusFlow - ADHD-Friendly Work Capture App

A non-intrusive focus tracking app designed specifically for people with ADHD who struggle with hyperfocus and capturing their work. Built around the Pomodoro technique and body-doubling principles.

## Core Problem Solved

- **Hyperfocus blindness**: When deep in work, you lose track of what you're doing and time passes without documentation
- **App switching fatigue**: Too many tools break flow and create friction
- **Time blocking failure**: Traditional time blocking doesn't work for ADHD brains
- **Lost work context**: At end of day, you can't remember what you accomplished

## Features

### 1. Smart Prompts (30-minute intervals)
- Gentle, non-intrusive notifications that don't break flow
- Audio/visual cues that escalate slowly
- "Snooze" option for deep work sessions
- Quick capture with minimal friction (< 10 seconds)

### 2. Input Methods
- **Text**: Quick text field with auto-suggestions
- **Voice**: Speech-to-text for hands-free capture
- **One-click tags**: Pre-defined project/task tags

### 3. Pomodoro Integration
- 25/5 work/break cycles
- 25/25 deep work mode
- Visual progress ring
- Break reminders with stretch/movement suggestions

### 4. Body Doubling / Co-Working Mode
- Virtual presence indicator
- Optional ambient sounds (coffee shop, library)
- Accountability partner sharing
- Session goals visible

### 5. Export Integrations
- **Tana**: Supertags and node structure
- **Obsidian**: Daily notes format with backlinks
- **JSON**: Raw data export
- **CSV**: Spreadsheet compatible

### 6. AI Assistant
- Embedded Claude/ChatGPT widget
- Summarize your day
- Identify patterns in your work
- Suggest focus improvements

### 7. ADHD-Specific Features
- **Dopamine hits**: Satisfying animations on capture
- **Streak tracking**: Visual motivation
- **No guilt design**: Missed prompts don't punish
- **Context recovery**: "What was I doing?" quick view
- **Daily wins**: Auto-highlight accomplishments

## Tech Stack

- **Frontend**: Vanilla JS + HTML/CSS (zero dependencies for simplicity)
- **Storage**: LocalStorage + IndexedDB for offline-first
- **Voice**: Web Speech API
- **Notifications**: Web Notifications API
- **PWA**: Installable as desktop/mobile app

## Getting Started

1. Open `index.html` in a browser
2. Allow notification permissions
3. Set your preferred interval (default: 30 min)
4. Start working!

## File Structure

```
focus-tracker-app/
├── index.html          # Main app
├── styles.css          # Styling
├── app.js              # Core application logic
├── timer.js            # Timer and Pomodoro logic
├── voice.js            # Voice input handling
├── storage.js          # Data persistence
├── exports/
│   ├── tana.js         # Tana export
│   ├── obsidian.js     # Obsidian export
│   └── csv.js          # CSV export
├── ai-widget.js        # AI assistant integration
├── sounds/             # Notification sounds
└── manifest.json       # PWA manifest
```

## License

MIT - Use freely, help others focus!
