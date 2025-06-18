---
keywords:
  - v4
  - Full editor
  - Embedded full editor
  - Create new project 
  - Create Express project 
  - create
  - createWithAsset
title: Adobe Express Editor - Create New Project
description: This guide will show you how users can start working on new projects in an embedded Adobe Express editor. 
contributors:
  - https://github.com/amandahuarng
  - https://github.com/undavide
---

# Creating new projects using the full editor

This guide will demonstrate how to use the embedded full editor in your own application.

## create()

The `create` method starts the full editor workflow with an empty canvas.

```js
// Initialize the SDK first
const { editor } = await ccEverywhere.initialize(); 
editor.create(docConfig, appConfig, exportConfig, containerConfig); 
```

All the properties are optional.

| Property | Type| Description
| :-- | :-- | :--
| docConfig | [CreateDocConfig](../../../reference/cc-everywhere/editor/index.md#createdocconfig) | Pass a custom canvas size
| appConfig | [BaseEditorAppConfig](../../../reference/cc-everywhere/editor/index.md#baseeditorappconfig) | Parameters to configure editor/modal UI
| exportConfig | [ExportOptions](../../../reference/types/index.md#exportoptions)[] | Configure export options. If no export options are specified, the editor falls back to the default layout options.
| containerConfig | [ContainerConfig](../../../reference/types/index.md#containerconfig) | Properties to configure the SDK container

## createWithAsset()

Use `createWithAsset()` to launch the full editor with a pre-selected image or video asset.

```js
// Initialize the SDK first
const { editor } = await ccEverywhere.initialize(); 
editor.createWithAsset(docConfig, appConfig, exportConfig, containerConfig); 
```

| Property | Type| Description
| :-- | :-- | :--
| docConfig | [CreateWithAssetDocConfig](../../../reference/cc-everywhere/editor/index.md#createwithassetdocconfig) | Pass an image and custom canvas size
| appConfig | [BaseEditorAppConfig](../../../reference/cc-everywhere/editor/index.md#baseeditorappconfig) | Parameters to configure editor/modal UI
| exportConfig | [ExportOptions](../../../reference/types/index.md#exportoptions)[] | Configure export options. If no export options are specified, the editor falls back to the default layout options.
| containerConfig | [ContainerConfig](../../../reference/types/index.md#containerconfig) | Properties to configure the SDK container

## Example: Create new project

The following code will invoke the full editor. It appears in a modal. When the user finishes in the editor and saves/publishes their design, the `onPublish` callback is invoked. Resulting project data is sent in `publishParams`. In this example, we save the project info (`project_id`) and display the image data (of the first page of the user's design) in some image container `image_data`.

``` ts title="create-new-project.js"
// Initialize the SDK first
const { editor } = await ccEverywhere.initialize(hostInfo); 

const callbacks = {
    onCancel: () => {},
    onPublish: (intent,publishParams) => {
        const localData = { project: publishParams.projectId, image: publishParams.asset[0].data };
        updateImage(localData);
    },
    onError: (err) => {
        console.error('Error received is', err.toString());
    },
};

let appConfig = { callbacks: callbacks}

const updateImage = (localData) => {
    image_data.src = localData.image;
    project_id = localData.project;
}

editor.create(appConfig);
```

## Example: Create from asset

To launch the editor with a starting asset, the `createWithAsset` API takes a `asset` in `inputParams`. When the user finishes in the editor and saves/publishes their design, the `onPublish` callback is invoked. Resulting project data is sent in `publishParams`. In this example, we save the project info (`project_id`) and display the image data (of the first page of the user's design) in some image container `image_data`.

``` ts title="create-from-asset.js" hl_lines="5"
// Initialize the SDK first
const { editor } = await ccEverywhere.initialize(hostInfo);

const callbacks = {
    onCancel: () => {},
    onPublish: (intent,publishParams) => {
        const localData = { project: publishParams.projectId, image: publishParams.asset[0].data };
        updateImage(localData);
    },
    onError: (err) => {
        console.error('Error received is', err.toString());
    },
};

let appConfig = { callbacks: callbacks}

const updateImage = (localData) => {
    image_data.src = localData.image;
    project_id = localData.project;
}
 
let docConfig = {
    asset: {
        data: base64Asset,
        dataType: 'base64',
        type: 'image' 
    }
}
editor.createWithAsset(docConfig, appConfig);
```
