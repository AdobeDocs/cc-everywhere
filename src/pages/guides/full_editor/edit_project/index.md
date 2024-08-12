---
keywords:
  - Edit design
  - Project ID
  - projectId
  - Editor component 
  - Edit project 
  - editDesign()
  - v4
title: Adobe Express Editor - Edit Project
description: This guide will show you how users can continue working on existing projects in an Adobe Express editor. 
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Launching existing projects in the full editor

This guide will demonstrate how to load a specific Adobe Express project in a full editor component.

## edit()

The `edit` method lets you continue editing existing Express projects in the editor.

```js
// Initialize the SDK first
const { editor } = await ccEverywhere.initialize(); 
editor.edit(docConfig, appConfig, exportConfig, containerConfig); 
```

### EditDesignParams

`edit()` takes an object of parameters, `EditDesignParams`, composed of:

| Property | Type| Description
| :-- | :-- | :--
| docConfig | [EditDocConfig](../../../reference/CCEverywhere/editor/index.md#editdocconfig) | Pass the ID of the document to open
| appConfig | [BaseEditorAppConfig](../../../reference/CCEverywhere/editor/index.md#baseeditorappconfig) | Parameters to configure editor/modal UI
| exportConfig | [ExportOptions](../../../reference/types/index.md#exportoptions)[] | Configure export options. If no export options are specified, the editor falls back to the default layout options.
| containerConfig | [ContainerConfig](../../../reference/types/index.md#containerconfig) | Properties to configure the SDK container

When a user completes their workflow in the editor, the associated **projectId** is sent back in [publishParams](../../../reference/types/index.md#publishparams) from the `onPublish` callback. The `edit()` method lets you use that identifier to revisit ongoing designs in the full editor.

## Example

The `edit` API takes a saved `projectId` as input and launches an **existing** project in the editor. When the user finishes in the editor and saves/publishes their design, the `onPublish` callback is invoked. Resulting project data is sent in `publishParams`. In this example, we save the project info (`project_id`) and display the image data (of the first page of the user's design) in some image container `image_data`.

``` ts title="edit-project.js" hl_lines="15"
const project_id = "your_project_id" // saved from publishParams callback

let docConfig = {
    documentId: project_id
};
let appConfig = {
    selectedCategory: "media"
}
editor.edit(docConfig, appConfig);
```
