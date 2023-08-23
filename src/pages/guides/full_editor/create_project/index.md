---
keywords:
  - v3
  - Full editor
  - Embedded full editor
  - Create new project 
  - Create Express project 
  - createDesign()
title: Adobe Express Editor - Create New Project
description: This guide will show you how users can start working on new projects in an embedded Adobe Express editor. 
contributors:
  - https://github.com/amandahuarng
---

# Creating new projects using the full editor

<InlineAlert variant="error" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year.

While we are in beta, all v3 clients are disabled by default. **Please share your API key with amandah@adobe.com to begin development.**

This guide will demonstrate how to use the embedded full editor in your own application.

## createDesign()

The [CCEverywhere](../../../reference/index.md#cceverywhere) object exposes the `createDesign()` method, which loads the editor component in an iframe.

### Flow

* User triggers `createDesign()` function from within the host application, and an editor is loaded in an iframe.
* A pop-up window will appear and the user has to create or log into their Adobe Express account.
* Any projects are automatically created/saved in a new project folder ('app_name' specified in SDK initialization) in the user's Adobe Express account.

```js
// Initialize the SDK before this 
ccEverywhere.createDesign(
    // CreateDesignParams
    {
        outputParams: { 
            outputType: "base64"
        },
        inputParams: { 
            canvasSize: "1:2",
            templateType: "brochure",
            // You can also load an image into the project 
            // asset : "..."
        }
    }
); 
```

## CreateDesignParams

`createDesign()` takes an object of parameters, `CreateDesignParams`, composed of:

| Property | Type| Description
| :-- | :-- | :--
| callbacks | [Callbacks](../../../reference/types/index.md#callbacks) | Callback methods
| modalParams | [ModalParams](../../../reference/types/index.md#modalparams) | Parameters to configure editor/modal UI
| inputParams | [CreateInputParams](#createinputparams) | Input parameters when creating a design
| outputParams | [CCXOutputParams](../../../reference/types/index.md#ccxoutputparams) | Desired output options when exporting assets from the editor
  
All the properties in `CreateDesignParams` are optional.

### CreateInputParams

`CreateInputParams` allows you to configure the embedded editor.

| Property | Type| Description
| :-- | :--| :--
| canvasSize| [Size](../../../reference/types/index.md#size)/[CanvasAspectId](../../../reference/types/index.md#canvasaspectid) | Launch the editor with canvas set at this size.
| asset | [Asset](../../../reference/types/index.md#asset) | Asset object that contains the base64-encoded image data you want the editor to open.
| editorPanelView | [EditorPanelView](../../../reference/types/index.md#editorpanelview) | Determines which panel view to open by default.
| exportOptions | [ExportOptions](../../../reference/types/index.md#exportoptions)[] | Export options for the asset that is created. If no export options are specified, the editor falls back to the default layout options.
| panelSearchText | string | Search text to pass in the editor for selected panel.
| templateType | [TemplateType](../../../reference/types/index.md#templatetype) | Specify template type for canvas.

View the full list of [canvas sizes](../../../reference/types/index.md#canvasaspectid) and [template types](../../../reference/types/index.md#templatetype)

## Example: Create new project

The following code will invoke the full editor. It appears in a modal. When the user finishes in the editor and saves/publishes their design, the `onPublish` callback is invoked. Resulting project data is sent in `publishParams`. In this example, we save the project info (`project_id`) and display the image data (of the first page of the user's design) in some image container `image_data`.

``` ts title="create-new-project.js"
ccEverywhere.createDesign(
    {
        callbacks: createDesignCallback,
        outputParams: {
            outputType: "base64",
        }
    }
);  
const createDesignCallback = {
    onCancel: () => {},
    onPublish: (publishParams) => {
        console.log(publishParams)
        const localData = { project: publishParams.asset[0].projectId, image: publishParams.asset[0].data };
        image_data.src = localData.image;
        project_id = localData.project;
    },
    onError: (err) => {
        console.error('Error received is', err.toString());
    },
};
```

## Example: Create from asset

To launch the editor with a starting asset, the `createDesign` API takes a `asset` in `inputParams`. When the user finishes in the editor and saves/publishes their design, the `onPublish` callback is invoked. Resulting project data is sent in `publishParams`. In this example, we save the project info (`project_id`) and display the image data (of the first page of the user's design) in some image container `image_data`.

``` ts title="create-from-asset.js" hl_lines="5"
ccEverywhere.createDesign(
    {
        callbacks: createDesignCallback,
        inputParams: {
            asset: "<base-64 encoded image data>"
        },
        outputParams: {
            outputType: "base64",
        }
    }
);  
const createDesignCallback = {
    onCancel: () => {},
    onPublish: (publishParams) => {
        const localData = { project: publishParams.asset[0].projectId, image: publishParams.asset[0].data };
        image_data.src = localData.image;
        project_id = localData.project;
    },
    onError: (err) => {
        console.error('Error received is', err.toString());
    },
};
```
