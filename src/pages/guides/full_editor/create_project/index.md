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

<InlineAlert variant="warning" slots="header, text1, text2" />

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
            outputType: "base64"
        },
        inputParams: { 
            canvasSize: "1:2",
            templateType: "Flyers",
            // You can also load an image into the project 
            // asset : "..."
        }
    }
); 
```

## CreateDesignParams

`createDesign()` takes an object of parameters, [`CreateDesignParams`](../../../reference/full_editor/index.md#createdesignparams), composed of:

| Property | Type| Description
| :-- | :-- | :--
| callbacks | [Callbacks](../../../reference/shared_types/index.md#callbacks) | Callback methods
| modalParams | [ModalParams](../../../reference/shared_types/index.md#modalparams) | Parameters to configure editor/modal UI
| inputParams | [CreateInputParams](#createinputparams) | Input parameters when creating a design.
| outputParams | [CCXOutputParams](../../../reference/shared_types/index.md#ccxoutputparams) | Desired output options when exporting assets from the editor.
  
All the properties in `CreateDesignParams` are optional.

### CreateInputParams

[`CreateInputParams`](../../../reference/full_editor/index.md#createinputparams) allows you to configure the editor to be launched for the user.

| Property | Type| Description
| :-- | :--| :--
| canvasSize| string | Initializes the editor loaded with the canvas set at a specified size
| templateType | string | Initializes the editor loaded with templates of this specified type
| templateSearchText | string | Initializes the editor with this string value for template search
| asset | [Asset](../../../reference/shared_types/index.md#asset) | Asset object that contains the base64-encoded image data you want the editor to open

View the full list of canvas template layout ratios and template types [here](../../../reference/types/index.md#canvasaspectid).

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
