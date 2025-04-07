---
keywords:
 - Embed SDK
 - Editor AppConfig
 - Configuration Options
 - File Types
 - Multi-Page Support
 - Callbacks
 - Template Type
title: Editor Customization
description: Learn about the configuration options available in Editor.AppConfig and how they affect the editor's behavior.
contributors:
  - https://github.com/nimithajalal
---

# Editor Customization

`Editor.AppConfig` provides a comprehensive set of configuration options to customize the editor's behavior and appearance. This guide explains each configuration option and its purpose.

## What is Editor.AppConfig?

[Editor.AppConfig](../../v4/shared/src/types/editor/AppConfig.types/interfaces/BaseEditorAppConfig.md) is a configuration object that serves as the primary interface for customizing the editor's behavior. It provides a structured way to:

  - Control the editor's user interface
  - Manage file handling and publishing
  - Handle editor events
  - Customize user interactions

## Configuration Options Overview

Editor.AppConfig offers several categories of configuration options:

1. **Event Handling**
   - Respond to editor events
   - Integrate with your application

2. **Interface Settings**
   - Control editor appearance
   - Manage user navigation

3. **File Management**
   - Control file type access
   - Manage publishing options

## Event Handling Options

### callbacks

- **Purpose**: Defines functions to handle editor events
- **Type**: `Callbacks`
- **Default**: `undefined`

```javascript
const appConfig = {
  callbacks: {
    onPublish: (data) => {
      console.log('Content published:', data);
    }
  }
};
```

## Interface Configuration Options

### selectedCategory

- **Purpose**: Sets the default category to display
- **Type**: `EditorPanelView`
- **Default**: `EditorPanelView.TEMPLATES`

```javascript
const appConfig = {
  selectedCategory: 'templates'
};
```

### categorySearchText

- **Purpose**: Sets the search text for the selected panel
- **Type**: `string`
- **Default**: `undefined`

```javascript
const appConfig = {
  categorySearchText: 'nature'
};
```

### templateType

- **Purpose**: Sets the canvas template type
- **Type**: `TemplateType`
- **Default**: `undefined`

```javascript
const appConfig = {
  templateType: 'business'
};
```

### multiPage

- **Purpose**: Enables or disables multi-page support
- **Type**: `boolean`
- **Default**: `true`

```javascript
const appConfig = {
  multiPage: true
};
```

## File Management Options

### allowedFileTypes

- **Purpose**: Specifies allowed file types for publishing
- **Type**: `(JPEG | PNG | PDF | MP4)[]`
- **Default**: All formats enabled (PNG, JPEG, MP4, PDF)

```javascript
const appConfig = {
  allowedFileTypes: ['image/png', 'image/jpeg']
};
```

### allowedSubFileTypes

- **Purpose**: Specifies allowed PDF sub-file types
- **Type**: `SubFileType[]`
- **Default**: All types enabled (pdf, pdfPrint)

```javascript
const appConfig = {
  allowedFileTypes: ['application/pdf'],
  allowedSubFileTypes: ['pdfPrint']
};
```

## Complete Configuration Example

Here's an example showing how to combine multiple configuration options:

```javascript
const appConfig = {
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

For a reference implementation using these configuration options, visit our [demo application](https://demo.expressembed.com/).

## Best Practices

1. **Configuration Management**
   - Keep configurations minimal and focused
   - Document configuration choices
   - Test configurations thoroughly

2. **Event Handling**
   - Implement proper error handling
   - Log important events
   - Maintain clean callback code

3. **System Integration**
   - Apply configurations early
   - Handle initialization errors
   - Monitor system performance

## Configuration Decision Tree

Start by considering your primary integration needs:

### 1. Are you customizing the publishing experience?

   - **Yes** → Configure these options:
     - `callbacks.onPublish`: Implement publish event handler
     - `allowedFileTypes`: Restrict output formats based on your needs
     - → **Export formats needed?**
       - **PDF only** → Also set `allowedSubFileTypes`
       - **Images only** → Set `allowedFileTypes: ['image/png', 'image/jpeg']`
       - **Video only** → Set `allowedFileTypes: ['video/mp4']`
       - **Multiple formats** → List all required formats in array

   - **No** → Skip publishing-related configuration

### 2. Are you customizing the default editor view?

   - **Yes** → Configure these options:
     - `selectedCategory`: Set initial panel view
     - → **Need specific template search?**
       - **Yes** → Also set `categorySearchText`
       - **No** → Skip search text configuration

### 3. Do you need specific template constraints?

   - **Yes** → Configure these options:
     - `templateType`: Set specific template category
     - → **Need multiple pages?**
       - **Yes** → Set `multiPage: true` (default)
       - **No** → Set `multiPage: false`
   - **No** → Use default template behavior

### 4. Do you need custom event handling beyond publishing?

   - **Yes** → Implement additional callback functions
   - **No** → Basic configuration is complete

## See Also

- [Getting Started Guide](/guides/getting-started)
- [API Reference](../../v4/shared/src/types/editor/AppConfig.types/interfaces/BaseEditorAppConfig.md)
- [Embed SDK Overview](/guides/concepts/embed-sdk)
