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
  - https://github.com/undavide
---

# Modules

This guide will demonstrate how to embed our Generate Image and Edit Image modules in your own application.

## createImageFromText()

The `module` class contains all the methods for launching quick action editors. The `createImageFromText()` API is powered by Adobe Firefly.

```js
// Initialize the SDK first
const { module } = await window.CCEverywhere.initialize({
  clientId: <CLIENT_ID>,
  appName: <APP_NAME>,
});

module.createImageFromText();
```

### TextToImageParams

All the properties in this object are optional.

| Property        | Type                                                                                                        | Description                                                                                                        |
| :-------------- | :---------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| appConfig       | [TextToImageAppConfig](../../v4/shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md) | Pass a text prompt to preload in the Generate Image editor                                                         |
| exportConfig    | [ExportOptions](../../v4/shared/src/types/export-config-types/type-aliases/export-options.md)                 | Configure export options. If no export options are specified, the editor falls back to the default layout options. |
| containerConfig | [ContainerConfig](../../v4/shared/src/types/container-config-types/type-aliases/container-config.md)          | Properties to configure the SDK container                                                                          |

## editImage()

This API launches an iframe that allows users to continue editing an image in a modal. Instead of the entire Express editing experience, this module only loads relevant image-editing capabilities.

```js
// Initialize the SDK first
const { module } = await window.CCEverywhere.initialize({
  clientId: <CLIENT_ID>,
  appName: <APP_NAME>,
});

module.editImage(docConfig);
```

The only required property is `docConfig`.

| Property        | Type                                                                                                     | Description                                                                                                        |
| :-------------- | :------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| docConfig       | [EditImageDocConfig](../../v4/shared/src/types/module/doc-config-types/interfaces/edit-image-doc-config.md)  | Pass an asset to preload into the Edit Image module                                                                |
| appConfig       | [BaseEditorAppConfig](../../v4/shared/src/types/module/app-config-types/interfaces/edit-image-app-config.md) | Pass callback functions                                                                                            |
| exportConfig    | [ExportOptions](../../v4/shared/src/types/export-config-types/type-aliases/export-options.md)[]            | Configure export options. If no export options are specified, the editor falls back to the default layout options. |
| containerConfig | [ContainerConfig](../../v4/shared/src/types/container-config-types/type-aliases/container-config.md)       | Properties to configure the SDK container                                                                          |

## Example: Generate from text

The following code will invoke the generate module. In this example, we pass a string to be used as a prompt. If that field is left empty, the user will be prompted to input a prompt once the modal is open.

<InlineAlert variant="info" slots="header, text1" />

### New Generate Image experience

The Adobe Express Embed SDK since v4.20 has added support for an all-new Generate Image (Text-to-Image) experience. This feature is disabled by default, displaying the classic interface. Toggle the `enableNewUI` boolean flag to `true` in the `appConfig` object to enable it.

```js
  // Initialize SDK and save CCEverywhere object as ccEverywhere 
    ccEverywhere.module.createImageFromText(
            promptText: "Flying cows",
            appConfig : { 
            thumbnailOptions : ["edit-dropdown","rich-preview","publish"],
            publishConfig: {
              id: "saveToHostApp",
              label: "Publish"
            },editDropdownOptions: [
    {"option": "add-effects"},
    {"option": "remove-background"},
    {"option": "insert-object"},
    {"option": "apply-adjustment"},
    {"option": "remove-object"}
       ],
      featureConfig: {
              "community-wall": true,
              "fast-mode": true,
              "custom-models" : true
            },
      fastModeConfig: { defaultFastModeState: "off" },
           appVersion: '2',
            callbacks: {
              onCancel: () => {}, 
              onError: (err) => {},
              onLoadStart: () => {}, 
              onLoad: () => {},
             onPublishStart: () => {},
             onPublish: (publishParams) => {},
            }
           },
            exportConfig : [
               {
                 action: {
                   context: 'new',
                   target: 'express'
                 },
                 id: 'editor',
                 label: 'Create a design',
                 style: {
                   uiType: 'button'
                 }
               }, 
    {
                 action: {
                   target: 'publish',
                   outputype: "URL",
                   closeTargetOnExport: true
                 },
                 id: 'saveToHostApp',
                 label: "Publish",
                 style: {
                    uiType: 'button'
                 }
               },
            ] 
  );
```

## Example: Edit Image

The following code will invoke the Edit Image module.

```js
const { module } = await window.CCEverywhere.initialize({
  clientId: <CLIENT_ID>,
  appName: <APP_NAME>,
});

const docConfig = {
  asset: {
    data: "replace-with-base64-encoded-asset",
    dataType: "base64",
    type: "image",
  },
};

const exportOptions = [
  {
    type: "continue-editing",
    label: "Continue Editing",
    style: {
      uiType: "button",
    },
    options: [
      {
        id: "exportOption3",
        style: {
          uiType: "dropdown",
        },
        action: {
          target: "image-module",
          intent: "remove-background",
        },
      },
      {
        id: "exportOption4",
        style: {
          uiType: "dropdown",
        },
        action: {
          target: "express",
          intent: "add-images",
        },
      },
      {
        id: "exportOption5",
        style: {
          uiType: "dropdown",
        },
        action: {
          target: "express",
          intent: "add-text",
        },
      },
    ],
  },
];

module.editImage(docConfig, exportOptions);
```
