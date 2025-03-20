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

Editor.AppConfig provides a comprehensive set of configuration options to customize the editor's behavior and appearance. This guide explains each configuration option and its purpose.

## What is Editor.AppConfig?

Editor.AppConfig is a configuration object that serves as the primary interface for customizing the editor's behavior. It provides a structured way to:

  - Control the editor's user interface
  - Manage file handling and publishing
  - Handle editor events
  - Customize user interactions

## Configuration Options Overview

Editor.AppConfig offers several categories of configuration options:

1. **Modal Customization**
   - Control modal titles and messages
   - Customize user interactions

2. **Event Handling**
   - Respond to editor events
   - Integrate with your application

3. **Interface Settings**
   - Control editor appearance
   - Manage user navigation

4. **File Management**
   - Control file type access
   - Manage publishing options

## Modal Configuration Options

### publishModalTitle

- **Purpose**: Sets the title for the publish modal
- **Type**: `string`
- **Default**: `undefined`

```javascript
const appConfig = {
  publishModalTitle: 'Publish Your Content'
};
```

### publishErrorModalTitle

- **Purpose**: Sets the title for the publish error modal
- **Type**: `string`
- **Default**: `undefined`

```javascript
const appConfig = {
  publishErrorModalTitle: 'Error Publishing Content'
};
```

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
