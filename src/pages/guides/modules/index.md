---
keywords:
  - v4
  - Modules
  - Mini editors
  - Generate image
  - Create image from text
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

This guide will demonstrate how to embed our Generate Image and Edit Image modules in your own application.

## createImageFromText()

The `module` class contains all the methods for launching quick action editors. The `createImageFromText()` API is powered by Adobe Firefly.

```js
// Initialize the SDK first
const { module} = await ccEverywhere.initialize(); 
module.createImageFromText(); 
```

### TextToImageParams

All the properties in this object are optional.

| Property | Type| Description
| :-- | :-- | :--
| appConfig | [TextToImageAppConfig](../../reference/CCEverywhere/miniEditor/index.md#texttoimageappconfig)| Pass a text prompt to preload in the Generate Image editor
| exportConfig | [ExportOptions](../../reference/types/index.md#exportoptions)[] | Configure export options. If no export options are specified, the editor falls back to the default layout options.
| containerConfig | [ContainerConfig](../../reference/types/index.md#containerconfig) | Properties to configure the SDK container

## editImage()

This API launches an iframe that allows users to continue editing an image in a modal. Instead of the entire Express editing experience, this module only loads relevant image-editing capabilities.

```js
// Initialize the SDK first
const { module} = await ccEverywhere.initialize(); 
module.editImage(docConfig); 
```

The only required property is `docConfig`.

| Property | Type| Description
| :-- | :-- | :--
| docConfig | [EditImageDocConfig](../../reference/CCEverywhere/miniEditor/index.md#editimagedocconfig)| Pass an asset to preload into the Edit Image module
| appConfig | [BaseEditorAppConfig](../../reference/CCEverywhere/miniEditor/index.md) | Pass callback functions
| exportConfig | [ExportOptions](../../reference/types/index.md#exportoptions)[] | Configure export options. If no export options are specified, the editor falls back to the default layout options.
| containerConfig | [ContainerConfig](../../reference/types/index.md#containerconfig) | Properties to configure the SDK container

## Example: Create image from text

The following code will invoke the text-to-image module. In this example, we pass a string to be used as a prompt. If that field is left empty, the user will be prompted to input a prompt once the modal is open.

``` ts title="text-to-image.js"
// Initialize the SDK first
const { module} = await ccEverywhere.initialize(hostInfo); 
let appConfig = {
    promptText: "Aliens sitting in lawn chairs"
}
module.createImageFromText(appConfig);
```

## Example: Edit Image

The following code will invoke the Edit Image module.

``` ts title="image-editing.js"
// Initialize the SDK first
const { module } = await ccEverywhere.initialize(hostInfo); 
let docConfig = {
    asset: {
        data: 'replace-with-base64-encoded-asset',
        dataType: 'base64',
        type: 'image' 
    },
};

const exportOptions = [{
    type: 'continue-editing',
    label: 'Continue Editing',
    style: {
        uiType: 'button'
    },
    options: [
        {
            id: 'exportOption3',
            style: {
                uiType: 'dropdown'
            },
            action: {
                target: 'image-module',
                intent: 'remove-background'
            }
        },
        {
            id: 'exportOption4',
            style: {
                uiType: 'dropdown'
            },
            action: {
                target: 'express',
                intent: 'add-images'
            }
        },
        {
            id: 'exportOption5',
            style: {
                uiType: 'dropdown'
            },
            action: {
                target: 'express',
                intent: 'add-text'
            }
        }
    ]
}];
module.editImage(docConfig, exportOptions);
```
