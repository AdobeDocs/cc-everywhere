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

Use `Editor.AppConfig` to customize the Adobe Express Embed SDK editor's behavior and appearance. This configuration object provides comprehensive control over the editor experience, from user interface elements to file handling capabilities.

## What is `Editor.AppConfig`?

The [Editor.AppConfig](../../v4/shared/src/types/editor/AppConfig.types/interfaces/BaseEditorAppConfig.md) object is the primary interface for customizing the Adobe Express Embed SDK editor. Use this configuration object to:

- Control the editor's user interface and navigation
- Manage file handling and export options
- Handle editor events and user interactions
- Customize the canvas display and layout

## Configuration Categories

The `Editor.AppConfig` object organizes configuration options into the following categories:

1. **Event Handling**

   - Respond to editor events and user actions
   - Connect with your application's workflow

2. **Interface and Navigation**

   - Control the editor's appearance and layout
   - Manage user navigation and panel views
   - Filter available templates and assets

3. **File Management and Export**

   - Control supported file types and formats
   - Manage export and publishing options
   - Configure multi-page document support

4. **Canvas Display and Layout**
   - Control visual elements and guides
   - Manage page margins and bleed areas
   - Customize the editing environment

## Event Handling

### callbacks

Define callback functions to handle editor events and integrate with your application's workflow.

- **Type**: `Callbacks`
- **Default**: `undefined`
- **Use case**: Respond to user actions like publishing, saving, or canceling

```javascript
const appConfig = {
  callbacks: {
    onPublish: (publishData) => {
      // Handle the published content
      console.log("User published content:", publishData);
      // Send to your backend, show success message, etc.
    },
    onCancel: () => {
      // Handle when user cancels editing
      console.log("User canceled editing");
    },
  },
};
```

## Interface and Navigation

### selectedCategory

Control which panel view displays by default when the editor loads.

- **Type**: `EditorPanelView`
- **Default**: `EditorPanelView.TEMPLATES`
- **Use case**: Direct users to specific content like templates, uploads, or design elements

```javascript
const appConfig = {
  selectedCategory: "templates", // Start with template selection
};
```

### categorySearchText

Pre-populate the search field with specific terms to filter content automatically.

- **Type**: `string`
- **Default**: `undefined`
- **Use case**: Show relevant templates or assets based on user context or preferences

```javascript
const appConfig = {
  categorySearchText: "business cards", // Show business card templates
};
```

### assetCollection

Filter available templates to a specific collection or category.

- **Type**: `string`
- **Default**: `undefined`
- **Use case**: Limit template choices based on user subscription, brand guidelines, or content type

```javascript
const appConfig = {
  assetCollection: "premium-business-templates", // Show only premium business templates
};
```

### templateType

Specify the type of canvas template to use for new designs.

- **Type**: `TemplateType`
- **Default**: `undefined`
- **Use case**: Set appropriate canvas dimensions and layout for specific design types

```javascript
const appConfig = {
  templateType: "social-media", // Optimize for social media content
};
```

### multiPage

Enable or disable support for multi-page documents.

- **Type**: `boolean`
- **Default**: `true`
- **Use case**: Control whether users can create documents with multiple pages

```javascript
const appConfig = {
  multiPage: false, // Restrict to single-page designs only
};
```

## File Management and Export

### allowedFileTypes

Restrict the file formats available for export and publishing to match your application's requirements.

- **Type**: `(JPEG | PNG | PDF | MP4)[]`
- **Default**: All formats enabled (PNG, JPEG, MP4, PDF)
- **Use case**: Limit export options based on your platform's supported formats or user permissions

```javascript
const appConfig = {
  allowedFileTypes: ["image/png", "image/jpeg"], // Only allow image exports
};
```

**Common configurations:**

- **Web-only platforms**: `['image/png', 'image/jpeg']`
- **Print workflows**: `['application/pdf']`
- **Social media**: `['image/png', 'image/jpeg', 'video/mp4']`
- **All formats**: `['image/png', 'image/jpeg', 'application/pdf', 'video/mp4']`

### allowedSubFileTypes

Configure PDF export options when PDF format is enabled in `allowedFileTypes`.

- **Type**: `SubFileType[]`
- **Default**: All types enabled (pdf, pdfPrint)
- **Use case**: Control PDF output quality and optimization for different use cases

```javascript
const appConfig = {
  allowedFileTypes: ["application/pdf"],
  allowedSubFileTypes: ["pdfPrint"], // High-quality PDF for printing
};
```

**Available PDF types:**

- **`pdf`**: Standard PDF for digital viewing
- **`pdfPrint`**: High-resolution PDF optimized for printing

## Canvas Display and Layout

### showPageMargin

Display page margin guides to help users design within printable areas.

- **Type**: `boolean`
- **Default**: `false`
- **Use case**: Enable for print-focused workflows where margin awareness is critical

```javascript
const appConfig = {
  showPageMargin: true, // Show margin guides for print layouts
};
```

**When to enable:**

- Print design workflows (business cards, flyers, brochures)
- Documents with specific margin requirements
- Professional design environments

### showBleedArea

Display bleed area guides for designs that extend to the edge of printed materials.

- **Type**: `boolean`
- **Default**: `false`
- **Use case**: Essential for professional print workflows where content extends beyond trim lines

```javascript
const appConfig = {
  showBleedArea: true, // Show bleed guides for print-ready designs
};
```

**When to enable:**

- Professional print production
- Designs with full-bleed images or backgrounds
- Commercial printing workflows

## Complete Configuration Example

This example demonstrates a comprehensive configuration for a marketing team's design workflow:

```javascript
const appConfig = {
  // Event handling
  callbacks: {
    onPublish: (publishData) => {
      // Send published content to marketing asset library
      uploadToAssetLibrary(publishData);
      showSuccessNotification("Design saved to marketing library");
    },
    onCancel: () => {
      // Track cancellation for analytics
      trackEvent("editor_cancelled");
    },
  },

  // Interface and navigation
  selectedCategory: "templates",
  categorySearchText: "social media",
  assetCollection: "brand-approved-templates",
  templateType: "social-media",
  multiPage: false, // Single-page social media posts only

  // File management and export
  allowedFileTypes: ["image/png", "image/jpeg", "video/mp4"],
  // Note: PDF not needed for social media workflow

  // Canvas display (minimal for social media)
  showPageMargin: false,
  showBleedArea: false,
};
```

See a working implementation of these configuration options in the [Adobe Express Embed SDK demo application](https://demo.expressembed.com/).

## Best Practices

### Configuration Management

- **Start minimal**: Begin with essential configurations and add complexity as needed
- **Document decisions**: Record why specific configurations were chosen for future reference
- **Test thoroughly**: Validate configurations across different user scenarios and devices
- **Version control**: Track configuration changes alongside your application code

### Event Handling

- **Implement error handling**: Always include try-catch blocks in callback functions
- **Provide user feedback**: Show loading states, success messages, and error notifications
- **Log strategically**: Capture important events for debugging and analytics without overwhelming logs
- **Keep callbacks focused**: Each callback should handle a single responsibility

### Performance and Integration

- **Initialize early**: Apply configurations during application startup to avoid delays
- **Handle failures gracefully**: Provide fallback behavior when configurations fail to load
- **Monitor performance**: Track configuration impact on editor load times and user experience
- **Cache when appropriate**: Store frequently-used configurations to reduce initialization time

## Configuration Decision Guide

Use this decision guide to determine which configuration options best fit your use case:

### 1. What type of content will users create?

**Social Media Content**

- `templateType: 'social-media'`
- `allowedFileTypes: ['image/png', 'image/jpeg', 'video/mp4']`
- `multiPage: false`
- `showPageMargin: false`, `showBleedArea: false`

**Print Materials**

- `templateType: 'print'`
- `allowedFileTypes: ['application/pdf']`
- `allowedSubFileTypes: ['pdfPrint']`
- `showPageMargin: true`, `showBleedArea: true`

**Web Graphics**

- `allowedFileTypes: ['image/png', 'image/jpeg']`
- `multiPage: false`
- `showPageMargin: false`, `showBleedArea: false`

**Multi-page Documents**

- `multiPage: true`
- `allowedFileTypes: ['application/pdf']`

### 2. Do you need to control template access?

**Curated Template Experience**

- `assetCollection: 'your-collection-id'` - Limit to specific templates
- `categorySearchText: 'business'` - Pre-filter by search term
- `selectedCategory: 'templates'` - Start with template selection

**Open Template Access**

- Use default settings to allow access to all available templates

### 3. Do you need event handling?

**Basic Integration**

```javascript
callbacks: {
  onPublish: (data) => handlePublishedContent(data);
}
```

**Advanced Event Handling**

```javascript
callbacks: {
  onPublish: (data) => handlePublishedContent(data),
  onCancel: () => trackCancellation()
}
```

### 4. Implementation checklist

- [ ] Choose content type configuration
- [ ] Set up template access controls (if needed)
- [ ] Implement event handlers

- [ ] Test configuration with real users

## Related Resources

- [Getting Started with Adobe Express Embed SDK](../quickstart/index.md)
- [BaseEditorAppConfig API Reference](../../v4/shared/src/types/editor/AppConfig.types/interfaces/BaseEditorAppConfig.md)
- [Adobe Express Embed SDK Overview](../index.md)
- [Demo Application](https://demo.expressembed.com/)
