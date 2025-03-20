---
keywords:
 - Embed SDK
 - Editor AppConfig
 - Configuration Options
 - File Types
 - Multi-Page Support
 - Callbacks
 - Template Type
title: Understanding Editor AppConfig
description: Learn about the concepts and principles behind Editor.AppConfig, including its purpose, architecture, and key components.
contributors:
  - https://github.com/nimithajalal
---

# Understanding Editor AppConfig

Editor.AppConfig is a powerful configuration system that enables developers to customize the behavior and appearance of the Embed SDK's editor. This guide explains the core concepts, architecture, and principles behind AppConfig.

## What is Editor.AppConfig?

Editor.AppConfig is a configuration object that serves as the primary interface for customizing the editor's behavior. It provides a structured way to:
- Control the editor's user interface
- Manage file handling and publishing
- Handle editor events
- Customize user interactions

## Core Concepts

### Configuration Architecture

The AppConfig system follows a modular architecture where each configuration option serves a specific purpose:

1. **Interface Configuration**
   - Controls how the editor looks and behaves
   - Manages user interaction patterns
   - Defines the initial state of the editor

2. **Event Handling**
   - Provides hooks for editor events
   - Enables integration with external systems
   - Manages state changes and user actions

3. **File Management**
   - Controls file type restrictions
   - Manages publishing options
   - Handles export formats

### Key Components

#### Modal System

The modal system in AppConfig provides a way to customize user interactions during critical operations:

```javascript
const appConfig = {
  publishModalTitle: 'Publish Your Content',
  publishErrorModalTitle: 'Error Publishing Content'
};
```

This system:
- Maintains consistent branding
- Provides clear user feedback
- Handles error states gracefully

#### Event System

The event system enables developers to respond to editor actions:

```javascript
const appConfig = {
  callbacks: {
    onPublish: (data) => {
      console.log('Content published:', data);
    }
  }
};
```

This system:
- Enables custom behavior
- Facilitates integration
- Provides tracking capabilities

#### Interface System

The interface system controls the editor's appearance and behavior:

```javascript
const appConfig = {
  selectedCategory: 'templates',
  categorySearchText: 'nature',
  templateType: 'business',
  multiPage: true
};
```

This system:
- Guides user navigation
- Controls content visibility
- Manages editor state

#### File Management System

The file management system handles file operations:

```javascript
const appConfig = {
  allowedFileTypes: ['image/png', 'image/jpeg'],
  allowedSubFileTypes: ['pdfPrint']
};
```

This system:
- Controls file compatibility
- Manages export options
- Ensures system compatibility

## Design Principles

### 1. Modularity

AppConfig is designed with modularity in mind:
- Each configuration option is independent
- Options can be combined as needed
- Systems can be enabled or disabled

### 2. Extensibility

The system is built to be extensible:
- New options can be added
- Existing options can be customized
- Systems can be extended

### 3. Consistency

AppConfig maintains consistency through:
- Standardized option naming
- Predictable behavior
- Clear documentation

## System Integration

### Editor Initialization

AppConfig is applied during editor initialization:
```javascript
const appConfig = {
  // Modal titles
  publishModalTitle: 'Publish Your Content',
  publishErrorModalTitle: 'Error Publishing Content',
  
  // Callbacks
  callbacks: {
    onPublish: (data) => {
      console.log('Content published:', data);
    }
  },
  
  // Interface customization
  selectedCategory: 'templates',
  categorySearchText: 'nature',
  templateType: 'business',
  multiPage: true,
  
  // File type restrictions
  allowedFileTypes: ['image/png', 'image/jpeg', 'application/pdf', 'video/mp4'],
  allowedSubFileTypes: ['pdfPrint']
};
```

This integration:
- Sets up the editor environment
- Configures user interactions
- Establishes system boundaries

## Common Patterns

### 1. Event Handling

Event handling follows a consistent pattern:
- Events are defined in the callbacks object
- Each event receives relevant data
- Events can trigger custom behavior

### 2. Interface Configuration

Interface configuration uses a hierarchical structure:
- Top-level options control major features
- Nested options manage specific behaviors
- Options can be combined for complex configurations

### 3. File Management

File management follows a permission-based model:
- File types are explicitly allowed
- Sub-types provide additional control
- Restrictions are applied consistently

## Best Practices

### 1. Configuration Management

- Keep configurations minimal and focused
- Document configuration choices
- Test configurations thoroughly

### 2. Event Handling

- Implement proper error handling
- Log important events
- Maintain clean callback code

### 3. System Integration

- Apply configurations early
- Handle initialization errors
- Monitor system performance
