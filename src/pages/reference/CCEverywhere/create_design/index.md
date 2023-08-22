---
keywords:
  - createDesign
  - Create new project
  - Load templates
  - Editor panel
  - Embedded editor reference
  - v3
title: createDesign reference
description: This is the reference page for the createDesign API
contributors:
  - https://github.com/amandahuarng
--- 

# createDesign()

<InlineAlert variant="error" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year.

While we are in beta, all v3 clients are disabled by default. **Please share your API key with amandah@adobe.com to begin development.**

This API is used to embed the full Adobe Express editor in your own application.

```ts
createDesign: (createDesignParams: CreateDesignParams): void
```

## CreateDesignParams

All the properties in this object are optional.

| Property | Type| Description
| :-- | :-- | :--
| callbacks | [Callbacks](../../shared_types/index.md#callbacks) | Callback methods
| modalParams | [ModalParams](../../shared_types/index.md#callbacks) | Parameters to configure editor/modal UI
| inputParams | [CreateInputParams](#createinputparams) | Input parameters when creating a design.
| outputParams | [CCXOutputParams](../../shared_types/index.md#callbacks) | Desired output options when exporting assets from the editor.

### CreateInputParams

`CreateInputParams` allows you to configure the editor to be launched for the user.

| Property | Type| Description
| :-- | :--| :--
| canvasSize| [Size](../../shared_types/index.md#size)/[CanvasAspectId](../../types/index.md#canvasaspectid) | Launch the editor with canvas set at this size.
| asset | [Asset](../../shared_types/index.md#asset) | Asset object that contains the base64-encoded image data you want the editor to open.
| editorPanelView | [EditorPanelView](../../types/index.md#editorpanelview) | Determines which panel view to open by default.
| exportOptions | [ExportOptions](../../types/index.md#exportoptions)[] | Export options for the asset that is created. If no export options are specified, the editor falls back to the default layout options.
| panelSearchText | string | Search text to pass in the editor for selected panel.
| templateType | [TemplateType](../../types/index.md#templatetype) | Specify template type for canvas.

`templateSearchText` are not supported with this release. Use `panelSearchText` instead.

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
