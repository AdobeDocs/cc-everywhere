---
keywords:
 - Embed SDK
 - Editor AppConfig
 - Configuration Options
 - File Types
 - Multi-Page Support
 - Callbacks
 - Template Type
title: Full Editor AppConfig Guide
description: This guide provides an in-depth look at the various configuration options available in the Embed SDK's Editor AppConfig, along with practical use cases and code snippets.
contributors:
  - https://github.com/nimithajalal
---

# Customize your editor

The Embed SDK's Editor.AppConfig is a powerful configuration object that allows developers to customize the editor's behavior and capabilities.

## Overview

This guide will provide an in-depth look at the various configuration options available, along with practical use cases and code snippets. Whether you're looking to fine-tune the user experience or ensure compatibility with specific file types, this guide has you covered.

The `Editor.AppConfig` object in the Embed SDK provides a wide range of configuration options to tailor the editor to your specific needs. From setting default categories to specifying allowed file types, these options help create a seamless and user-friendly editing experience.

## Configuration Options

### publishModalTitle

- **Type**: `string`
- **Description**: Property to configure the Modal titles.
- **Default**: `undefined`

**Use Case**: Set a custom title for the publish modal to provide a more personalized user experience.

**Sample code**:
```javascript
const appConfig = {
  publishModalTitle: 'Publish Your Content'
};
```

### publishErrorModalTitle
- **Type**: `string`
- **Description**: Property to configure the error Modal titles.
- **Default**: `undefined`

**Use Case**: Set a custom title for the publish error modal to clearly communicate issues to the user.

**Sample code**:
```javascript
const appConfig = {
  publishErrorModalTitle: 'Error Publishing Content'
};
```

### callbacks
- **Type**: `Callbacks`
- **Description**: Object containing callback functions for various editor events.
- **Default**: `undefined`

**Use Case**: Define a callback function that executes when the user publishes content.

**Sample code**:
```javascript
const appConfig = {
  callbacks: {
    onPublish: (data) => {
      console.log('Content published:', data);
    }
  }
};
```

### selectedCategory
- **Type**: `EditorPanelView`
- **Description**: Category to show by default.
- **Default**: `EditorPanelView.TEMPLATES`

**Use Case**: Set the default category to "photos" when the editor loads.

**Sample code**:
```javascript
const appConfig = {
  selectedCategory: 'photos'
};
```

### categorySearchText
- **Type**: `string`
- **Description**: Search text to pass in the editor for the selected panel.
- **Default**: `undefined`

**Use Case**: Pre-fill the search text in the editor's category panel to streamline user workflows.

**Sample code**:
```javascript
const appConfig = {
  categorySearchText: 'nature'
};
```

### templateType
- **Type**: `TemplateType`
- **Description**: Canvas template type.
- **Default**: `undefined`

**Use Case**: Specify a particular template type for the editor to ensure consistency in design.

**Sample code**:
```javascript
const appConfig = {
  templateType: 'business'
};
```

### multiPage
- **Type**: `boolean`
- **Description**: Enables or disables multi-page support in the editor.
- **Default**: `true`

**Use Case 1**: Enable multi-page support for editing documents.

**Sample code 1**:
```javascript
const appConfig = {
  multiPage: true
};
```

**Use Case 2**: Disable multi-page support for a single-page editing experience.

**Sample code 2**:
```javascript
const appConfig = {
  multiPage: false
};
```

### allowedFileTypes
- **Type**: `(JPEG | PNG | PDF | MP4)[]`
- **Description**: Specifies the list of file types that the user can publish. This can be used to limit the publish options as per MIME types for end users. Only applicable for Editor workflows and Edit Image Module. Does not affect Quick Action export.
- **Default**: Enable all formats (PNG, JPEG, MP4, and PDF)

**Use Case 1**: Restrict users to only publish JPEG and PNG images in an image editing application.

**Sample code 1**:
```javascript
const appConfig = {
  allowedFileTypes: ['image/png', 'image/jpeg']
};
```

**Use Case 2**: Allow users to publish only PDF documents and MP4 videos.

**Sample code 2**:
```javascript
const appConfig = {
  allowedFileTypes: ['application/pdf', 'video/mp4']
};
```

**Use Case 3**: Enable all supported file types for maximum flexibility.

**Sample code 3**:
```javascript
const appConfig = {
  allowedFileTypes: ['image/png', 'image/jpeg', 'application/pdf', 'video/mp4']
};
```

### allowedSubFileTypes
- **Type**: `SubFileType[]`
- **Description**: Specifies the list of sub-file types that the user can publish. This can be used to limit the publish options as per file types for end users. Currently, only PDF sub-file types are available, and hence used only if PDF MIME type is specified in `allowedFileTypes`.
- **Default**: Enable all types (pdf and pdfPrint)

**Use Case 1**: Allow users to publish PDFs but restrict them to only the `pdfPrint` sub-file type.

**Sample code 1**:
```javascript
const appConfig = {
  allowedFileTypes: ['application/pdf'],
  allowedSubFileTypes: ['pdfPrint']
};
```

**Use Case 2**: Enable all PDF sub-file types.

**Sample code 2**:
```javascript
const appConfig = {
  allowedFileTypes: ['application/pdf'],
  allowedSubFileTypes: ['pdf', 'pdfPrint']
};
```

### Complete App Configuration Example

Here is an example of a complete app configuration that includes allowed file types, allowed sub-file types, and additional settings:

```javascript
const appConfig = {
  publishModalTitle: 'Publish Your Content',
  publishErrorModalTitle: 'Error Publishing Content',
  callbacks: {
    onPublish: (data) => {
      console.log('Content published:', data);
    }
  },
  selectedCategory: 'templates',
  categorySearchText: 'nature',
  templateType: 'business',
  multiPage: true,
  allowedFileTypes: ['image/png', 'image/jpeg', 'application/pdf', 'video/mp4'],
  allowedSubFileTypes: ['pdfPrint']
};
```

## Best Practices

- **File Size**: Ensure that files are optimized for size to improve performance.
- **Naming Conventions**: Use clear and consistent naming conventions for easier management.
- **Security**: Always scan files for malware before uploading to ensure security.

## Conclusion

The `Editor.AppConfig` in the Embed SDK offers a robust set of options to customize the editor to meet your specific needs. By understanding and utilizing these configuration options, you can create a more tailored and efficient user experience. Whether you're setting default categories, specifying allowed file types, or defining callback functions, the `Editor.AppConfig` provides the flexibility and control you need.
