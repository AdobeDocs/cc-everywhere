---
noIndex: true
keywords:
  - Express Embed SDK
  - Express Editor
  - Adobe Express
  - Embed SDK
  - v1
  - Create project
  - Edit project
  - Create new project
title: Adobe Express full editor
description: This is the reference page for the Adobe Express full editor component.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---


# Full editor

<InlineAlert variant="error" slots="header, text" />

**IMPORTANT: Deprecation Warning**

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated in 2024.

The `createDesign` and `editDesign` APIs allow you to embed the full editor component in your application.

The full editor component gives you access to three workflows:

1. Launch with a blank canvas: [createDesign()](#createdesign)
2. Launch with an image: [createDesign()](#createdesign)
3. Launch with a project ID to continue editing an existing project: [editDesign()](#editdesign)

## createDesign()

This method launches the full editor component either with a blank canvas, or with an image. The editor is loaded in an iframe. To open the editor with an image, you need to ensure that `inputParams` has an [Asset](../shared-types/index.md#asset) object.

```js
createDesign(CreateDesignParams)
```

### CreateDesignParams

`createDesign()` takes a `CreateDesignParams` object with 4 properties.

| Properties | Type | Description
| :-- | :--| :--
| inputParams | [CreateInputParams](#createinputparams) | Specify starting asset, canvas size, canvas template type, or a search text to pass in the target application
| modalParams | [ModalParams](../shared-types/index.md#modalparams) | Specify editor modal dimensions
| outputParams | [CCXOutputParams](../shared-types/index.md#ccxoutputparams) | Specify output type and file type of created project
| callbacks | [Callbacks](../shared-types/index.md#callbacks) | onCancel, onPublish, onError, onLoad, onLoadStart, onPublishStart

#### CreateInputParams

`CreateInputParams` allows you to configure the editor to be launched for the user.

| Property | Type| Description
| :-- | :--| :--
| canvasSize| [Size](../shared-types/index.md#size)/[CanvasAspectId](../../../guides/full_editor/customization/index.md#canvasaspectid) | Initializes the editor loaded with templates that fit that layout ratio
| templateType | [TemplateType](../../../guides/full_editor/customization/index.md#templatetype) | Initializes the editor loaded with templates of this specified type
| templateSearchText | string | Initializes the editor with this string value for template search
| asset | [Asset](../shared-types/index.md#asset) | Asset object that contains the base64-encoded image data you want the editor to open

### Example

```js
ccEverywhere.createDesign(
    {
        modalParams: {},
        callbacks: {
            onCancel: () => {},
            onError: (err) => {},
            onLoadStart: () => {},
            onLoad: () => {},
            onPublishStart: () => {},
            onPublish: (publishParams) => {},
        },
        outputParams: { 
            outputType: 'base64'
        },
        inputParams: { 
            canvasSize: '1:2',
            templateType: 'Flyers',
        }
    }
); 
```

## editDesign()

This method launches a full editor component with an existing project. The project is loaded in an iframe.

```js
editDesign(EditDesignParams)
```

### EditDesignParams

`editDesign()` takes a `EditDesignParams` object with 4 properties.

| Property | Type | Description
| :-- | :--| :--
| inputParams | [EditInputParams](#editinputparams) | ID of Adobe Express project to open for editing
| modalParams | [ModalParams](../shared-types/index.md#modalparams) | Specify editor modal dimensions
| outputParams | [CCXOutputParams](../shared-types/index.md#ccxoutputparams) | Specify output type and file type of created project
| callbacks | [Callbacks](../shared-types/index.md#callbacks) | onCancel, onPublish, onError, onLoad, onLoadStart, onPublishStart

#### EditInputParams

`EditInputParams` is where you pass the associated projectId to launch in an editor component.
  
| Property | Type | Description
| :-- | :--| :--
| projectId| string | Adobe Express project ID to identify project later

Get **projectId** from **publishParams** of **onPublish** (called after save/download finishes).

### Example

```js
ccEverywhere.editDesign(
    {
        // inputParams.projectId is the only REQUIRED parameter
        inputParams: { 
            projectId: CCX_PROJECT_ID 
        },
        callbacks: {
            onCancel: () => {},
            onError: (err) => {},
            onLoadStart: () => {},
            onLoad: () => {},
            onPublishStart: () => {},
            onPublish: (publishParams) => {},
        },
        modalParams: {},
        outputParams: { 
            outputType: 'base64'
        },
    }
);
```
