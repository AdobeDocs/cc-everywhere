---
keywords:
  - Create Embed SDK
  - Express Editor
  - Adobe Express
  - Embed SDK
  - Quick Actions
  - ExtendScript
  - SDK
  - JavaScript
  - Embed
  - SDK Reference
  - Edit project
  - Create new project
title: Adobe Express Editor
description: This is the reference page for the Adobe Express editor component.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---
# Adobe Express Editor Reference

![Editor](editor.png)

The Adobe Express Editor component gives you access to two workflows: 
1. Launch with a new project: [createDesign()](#createdesign)
2. Launch with a project ID to continue editing an existing CC Express project: [editDesign()](#editdesign)

## createDesign()

This method launches a new project in the Adobe Express editor component. The editor is loaded in an iframe.

```js
createDesign(CreateDesignParams)
```

### CreateDesignParams
`createDesign()` takes a `CreateDesignParams` object with 4 properties.

| Properties | Type | Description
| :-- | :--| :--
| inputParams | [CreateInputParams](#createinputparams) | Specify canvas template layout ratio, canvas template type, and the search text to pass in the target application 
| modalParams | [ModalParams](../shared_types/index.md#modalparams) | Specify CC Express editor modal dimensions
| outputParams | [CCXOutputParams](../shared_types/index.md#ccxoutputparams) | Specify output type and file type of created project
| callbacks | [Callbacks](../shared_types/index.md#callbacks) | onCancel, onPublish, onError, onLoad, onLoadStart, onPublishStart

#### CreateInputParams

`CreateInputParams` allows you to configure the editor to be launched for the user.

| Property | Type| Description
| :-- | :--| :--
| canvasAspectId| string | Initializes the Express editor loaded with templates that fit that layout ratio
| templateType | string | Initializes the Express editor loaded with templates of this specified type
| templateSearchText | string | Initializes the Express editor with this string value for template search

To see the full list of canvas template layout ratios and template types, see the [customization](../../guides/ccx_editor/customization/index.md) page.

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
            canvasAspectId: '1:2',
            templateType: 'Flyers',
        }
    }
); 
```


## editDesign()
This method launches a Adobe Express editor component with an existing Adobe Express project. The editor is loaded in an iframe.

```js
editDesign(EditDesignParams)
```

### EditDesignParams
`editDesign()` takes a `EditDesignParams` object with 4 properties.

| Property | Type | Description
| :-- | :--| :--
| inputParams | [EditInputParams](#editinputparams) | ID of CC Express project to open for editing
| modalParams | [ModalParams](../shared_types/index.md#modalparams) | Specify CC Express editor modal dimensions
| outputParams | [CCXOutputParams](../shared_types/index.md#ccxoutputparams) | Specify output type and file type of created project
| callbacks | [Callbacks](../shared_types/index.md#callbacks) | onCancel, onPublish, onError, onLoad, onLoadStart, onPublishStart


#### EditInputParams
`EditInputParams` is where you pass the associated projectId to launch in an editor component.
  
| Property | Type | Description 
| :-- | :--| :--
| projectId| string | CC Express project ID to send to the editor component

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