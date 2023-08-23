---
keywords:
  - Edit design
  - Project ID
  - projectId
  - Editor component 
  - Edit project 
  - editDesign()
title: Adobe Express Editor - Edit Project
description: This guide will show you how users can continue working on existing projects in an Adobe Express editor. 
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Launching existing projects in the full editor

<InlineAlert variant="error" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year.

While we are in beta, all v3 clients are disabled by default. **Please share your API key with amandah@adobe.com to begin development.**

This guide will demonstrate how to launch a full editor component. The editor will appear in an iframe, pre-loaded with a specified Adobe Express project.

## editDesign()

The [CCEverywhere](../../../reference/index.md#cceverywhere) object exposes the `editDesign()` method, which loads the full editor component in an iframe, with an existing project pre-loaded.

### Flow

* User triggers `editDesign()` function from within the host application, and the full editor is loaded in an iframe.
* To pre-load the editor with an existing project, you must pass the associated project ID to `editDesignParams`. This ID is returned in the `project` property of `publishParams` from the `onPublish` callback.

```js
// Initialize SDK and save CCEverywhere object as ccEverywhere 
ccEverywhere.editDesign(
    {
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
            outputType: "base64"
        },
    }
);
```

## EditDesignParams

`editDesign()` takes an object of parameters, `EditDesignParams`, composed of:

| Property | Description | Type
| :-- | :-- | :--
| modalParams | Define size of editor modal | [ModalParams](../../../reference/types/index.md#modalparams)
| inputParams| Adobe Express project ID to initialize editor component | [EditInputParams](../../../reference/full_editor/index.md#editinputparams)
| outputParams | Configure output type | [CCXOutputParams](../../../reference/types/index.md#ccxoutputparams)
| callbacks | Callback functions | [Callbacks](../../../reference/types/index.md#callbacks)

<!-- todo: confirm there's not more:  -->
The only required property is `inputParams.projectId`.

### EditInputParams

`EditInputParams` is where you pass the associated projectId to launch in an editor component.
  
| Property | Type | Description
| :-- | :--| :--
| projectId| string | Project ID of the asset returned from `onPublish` callback when `createDesign` was invoked.
| editorPanelView | [EditorPanelView](../../../reference/types/index.md#editorpanelview) | Determines which panel view to open by default.
| exportOptions | [ExportOptions](../../../reference/types/index.md#exportoptions)[] | Export options for the asset that is created. If no export options are specified, the editor falls back to the default layout options.
| panelSearchText | string | Search text to pass in the editor for selected panel.

When a user completes their workflow in the editor, the associated **projectId** is sent back in [publishParams](../../../reference/types/index.md#publishparams) from the `onPublish` callback

## Example: Edit existing project

The `editDesign` API takes a saved `projectId` as input and launches an **existing** project in the editor. When the user finishes in the editor and saves/publishes their design, the `onPublish` callback is invoked. Resulting project data is sent in `publishParams`. In this example, we save the project info (`project_id`) and display the image data (of the first page of the user's design) in some image container `image_data`.

``` ts title="edit-project.js" hl_lines="15"
const editDesignCallback = {
    onCancel: () => {},
    onPublish: (publishParams) => {
        const pageData = { project: publishParams.asset[0].projectId, image: publishParams.asset[0].data };
        image_data.src = pageData.image;
        project_id = pageData.project;
    },
    onError: (err) => {
        console.error('Error received is', err.toString());
    },
};
ccEverywhere.editDesign(
    {
        inputParams: { 
            projectId: project_id 
        },
        callbacks: editDesignCallback
    }
);
```
