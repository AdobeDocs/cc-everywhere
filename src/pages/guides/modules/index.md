---
keywords:
  - v4
  - Modules
  - Mini editors
  - Text to image
  - Create image from text
  - Image editing
  - Edit image 
  - miniEditor
  - editImage
  - createImageFromText
title: Adobe Express Editor - Modules
description: This guide will show you how users can start working with the SDK's editing modules 
contributors:
  - https://github.com/amandahuarng
---

# Modules

<InlineAlert variant="error" slots="header, text" />

Beta Release

Please be aware that this release is a public beta, and we anticipate further modifications to certain API signatures. Additional breaking changes may occur in the future.

This guide will demonstrate how to embed our Text to Image and Image Editing modules in your own application.

## createImageFromText()

The [CCEverywhere](../../../reference/index.md#cceverywhere) object exposes the `miniEditor` interface. It contains APIs which loads contextual editing experiences in an iframe. The `createImageFromText()` API is powered by Adobe Firefly.

```js
// Initialize the SDK first
const { miniEditor } = await ccEverywhere.initialize(); 
miniEditor.createImageFromText(); 
```

### TextToImageParams

All the properties in this object are optional.

| Property | Type| Description
| :-- | :-- | :--
| callbacks | [Callbacks](../../reference/types/index.md#callbacks) | Callback methods
| modalParams | [ModalParams](../../reference/types/index.md#modalparams) | Parameters to configure editor/modal UI
| inputParams | [TextToImageInputParams](#texttoimageinputparams) | Input parameters when creating an image from text.
| outputParams | [CCXOutputParams](../../reference/types/index.md#ccxoutputparams) | Desired output options when exporting assets from the editor.

### TextToImageInputParams

`TextToImageInputParams` allows you to configure the editor to be launched for the user.

| Property | Type| Description
| :-- | :--| :--
| promptText| string | Optional string to launch the text to image module with a prompt

## editImage()

This API launches an iframe that allows users to continue editing an image in a modal. Instead of the entire Express editing experience, this module only loads relevant image-editing capabilities.

```ts
const { miniEditor } = await ccEverywhere.initialize(); 
miniEditor.editImage({
    inputParams: {
        asset: {
            data: base64Asset,
            dataType: 'base64',
            type: 'image' 
        },
        exportOptions: exportOptions
    },
    callbacks: callbacks,
    outputParams: getAllowedFileTypes()
}); 
```

### ImageMEDesignParams

All the properties in this object are optional.

| Property | Type| Description
| :-- | :-- | :--
| callbacks | [Callbacks](../../reference/types/index.md#callbacks) | Callback methods
| modalParams | [ModalParams](../../reference/types/index.md#modalparams) | Parameters to configure editor/modal UI
| inputParams | [ImageMEInputParams](#imagemeinputparams) | Input parameters when creating a design.
| outputParams | [ImageMEOutputParams](#imagemeoutputparams) | Desired output options when exporting assets from the editor.

### ImageMEInputParams

`ImageMEInputParams` allows you to configure the editor to be launched for the user.

| Property | Type| Description
| :-- | :--| :--
| asset | [Asset](../../reference/types/index.md#asset) | Asset object that contains the base64-encoded image data you want the editor to open.
| exportOptions | [ExportOptions](../../reference/types/index.md#exportoptions)[] | Export options for the asset that is created. If no export options are specified, the editor falls back to the default layout options.

### ImageMEOutputParams

Allows you to define data type and file type of output asset.

| Property | Type | Description
| :-- | :--| :--
| allowedFileTypes | [FileType](../../reference/types/index.md#filetype)[] | Output asset file types
| outputType | [AssetDataType](../../reference/types/index.md#assetdatatype) | Output data type

## Example: Create image from text

The following code will invoke the text-to-image module. In this example, we pass a string to be used as a prompt. If that field is left empty, the user will be prompted to input a prompt once the modal is open.

``` ts title="text-to-image.js"
// Initialize the SDK first
const { miniEditor } = await ccEverywhere.initialize(); 

miniEditor.createImageFromText(
    {
        callbacks: callbacks,
        inputParams: {
            promptText: "Aliens sitting in lawn chairs" // Optional to pass prompt
        },
        outputParams: getAllowedFileTypes()
    }
);

const getAllowedFileTypes = () => {
    const allowedFileTypes = ['image/png', 'image/jpeg'];
    return {allowedFileTypes};
}

const callbacks = {
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

When the user finishes in the editor and saves/publishes their design, the `onPublish` callback is invoked. Resulting project data is sent in `publishParams`. In this example, we save the project info (`project_id`) and display the image data (of the first page of the user's design) in some image container `image_data`.

## Example: Image editing

The following code will invoke the image editing module.

``` ts title="image-editing.js"
// Initialize the SDK first
const { miniEditor } = await ccEverywhere.initialize(); 

miniEditor.editImage(
    {
        callbacks: callbacks,
        inputParams: {
            asset: "<base-64 encoded image data>"
        },
        outputParams: getAllowedFileTypes()
    }
);

const getAllowedFileTypes = () => {
    const allowedFileTypes = ['image/png', 'image/jpeg'];
    return {allowedFileTypes};
}

const callbacks = {
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
