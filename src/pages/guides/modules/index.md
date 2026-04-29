---
keywords:
  - v4
  - Modules
  - Mini editors
  - Generate image
  - Create image from text
  - Edit image
  - Template Browser
  - Design Viewer
  - miniEditor
  - editImage
  - createImageFromText
  - startFromContent
  - viewDesign
title: Adobe Express Editor - Modules
description: This guide will show you how users can start working with the SDK's editing modules
contributors:
  - https://github.com/amandahuarng
  - https://github.com/undavide
---

# Modules

This guide will demonstrate how to embed the Generate Image, Edit Image, Template Browser, and Design Viewer modules in your own application.

## createImageFromText()

The `module` class contains all the methods for launching quick action editors. The [`createImageFromText()`](../../v4/sdk/src/workflows/3p/module-workflow/classes/module-workflow.md#createimagefromtext) API is powered by Adobe Firefly.

```js
// Initialize the SDK first
const { module } = await window.CCEverywhere.initialize({
  clientId: <CLIENT_ID>,
  appName: <APP_NAME>,
});

module.createImageFromText();
```

All arguments are optional.

| Argument        | Type                                                                                                             | Description                                                                                                        |
| :-------------- | :--------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| appConfig       | [TextToImageAppConfig](../../v4/shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md) | Pass a text prompt to preload in the Generate Image editor                                                         |
| exportConfig    | [ExportOptions](../../v4/shared/src/types/export-config-types/type-aliases/export-options.md)                    | Configure export options. If no export options are specified, the editor falls back to the default layout options. |
| containerConfig | [ContainerConfig](../../v4/shared/src/types/container-config-types/type-aliases/container-config.md)             | Properties to configure the SDK container                                                                          |

## editImage()

This [`editImage()`](../../v4/sdk/src/workflows/3p/module-workflow/classes/module-workflow.md#editimage) API launches an iframe that allows users to continue editing an image in a modal. Instead of the entire Express editing experience, this module only loads relevant image-editing capabilities.

```js
// Initialize the SDK first
const { module } = await window.CCEverywhere.initialize({
  clientId: <CLIENT_ID>,
  appName: <APP_NAME>,
});

module.editImage(docConfig);
```

The only required argument is `docConfig`.

| Argument        | Type                                                                                                         | Description                                                                                                        |
| :-------------- | :----------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| docConfig       | [EditImageDocConfig](../../v4/shared/src/types/module/doc-config-types/interfaces/edit-image-doc-config.md)  | Pass an asset to preload into the Edit Image module                                                                |
| appConfig       | [BaseEditorAppConfig](../../v4/shared/src/types/module/app-config-types/interfaces/edit-image-app-config.md) | Pass callback functions                                                                                            |
| exportConfig    | [ExportOptions](../../v4/shared/src/types/export-config-types/type-aliases/export-options.md)[]              | Configure export options. If no export options are specified, the editor falls back to the default layout options. |
| containerConfig | [ContainerConfig](../../v4/shared/src/types/container-config-types/type-aliases/container-config.md)         | Properties to configure the SDK container                                                                          |

## startFromContent()

The [`startFromContent()`](../../v4/sdk/src/workflows/3p/module-workflow/classes/module-workflow.md#startfromcontent) API launches the [Template Browser](../concepts/template-browser.md), a customizable browsing experience that lets users explore template collections, search and filter, and open a chosen template in the full editor.

```js
// Initialize the SDK first
const { module } = await window.CCEverywhere.initialize({
  clientId: <CLIENT_ID>,
  appName: <APP_NAME>,
});

module.startFromContent(appConfig);
```

All arguments are optional.

| Argument        | Type                                                                                                                       | Description                                                                                                                                                                                                 |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appConfig       | [StartFromContentAppConfig](../../v4/shared/src/types/module/app-config-types/interfaces/start-from-content-app-config.md) | Configure the Template Browser via the [`contentBrowseConfig`](../../v4/shared/src/types/module/app-config-types/type-aliases/content-browse-config.md) object—collection, search, filters, and header text |
| exportConfig    | [ExportOptions](../../v4/shared/src/types/export-config-types/type-aliases/export-options.md)[]                            | Configure export options. If no export options are specified, the editor falls back to the default layout options.                                                                                          |
| containerConfig | [ContainerConfig](../../v4/shared/src/types/container-config-types/type-aliases/container-config.md)                       | Properties to configure the SDK container                                                                                                                                                                   |

## viewDesign()

The [`viewDesign()`](../../v4/sdk/src/workflows/3p/module-workflow/classes/module-workflow.md#viewdesign) API launches the [Design Viewer](../concepts/design-viewer.md), loading a given image asset into a viewer experience from which users can **Download** the design (Desktop) or **Share** it (Mobile) via native share widgets, and optionally browse related templates in a sidebar.

```js
// Initialize the SDK first
const { module } = await window.CCEverywhere.initialize({
  clientId: <CLIENT_ID>,
  appName: <APP_NAME>,
});

module.viewDesign(docConfig);
```

The only required argument is `docConfig`.

| Argument        | Type                                                                                                              | Description                                                                                                          |
| :-------------- | :---------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| docConfig       | [DesignViewerDocConfig](../../v4/shared/src/types/module/doc-config-types/interfaces/design-viewer-doc-config.md) | Pass the [`Asset`](../../v4/shared/src/types/asset-types/type-aliases/asset.md) to view (`base64`, `url`, or `blob`) |
| appConfig       | [DesignViewerAppConfig](../../v4/shared/src/types/module/app-config-types/interfaces/design-viewer-app-config.md) | Configure the viewer's `designTitle`, `previewThumbnails` sidebar, and callbacks                                     |
| exportConfig    | [ExportOptions](../../v4/shared/src/types/export-config-types/type-aliases/export-options.md)[]                   | Configure export options. If no export options are specified, the viewer falls back to the default layout options.   |
| containerConfig | [ContainerConfig](../../v4/shared/src/types/container-config-types/type-aliases/container-config.md)              | Properties to configure the SDK container                                                                            |

## Examples

The following examples show a minimal invocation for each module. Switch tabs to see each workflow.

<InlineAlert variant="info" slots="header, text1" />

#### New Generate Image experience

The Adobe Express Embed SDK since v4.20 has added support for an all-new Generate Image (Text-to-Image) experience. This feature is disabled by default, displaying the classic interface. Toggle the `enableNewUI` boolean flag to `true` in the `appConfig` object to enable it.

<CodeBlock slots="heading, code" repeat="4" languages="Generate Image, Edit Image, Template Browser, Design Viewer" />

#### Generate Image

```js
// Initialize SDK and save CCEverywhere object as ccEverywhere
ccEverywhere.module.createImageFromText(
  {
    promptText: "Flying cows",
  },
  {
    thumbnailOptions: ["edit-dropdown", "rich-preview", "publish"],
    publishConfig: {
      id: "saveToHostApp",
      label: "Publish",
    },
    editDropdownOptions: [
      { option: "add-effects" },
      { option: "remove-background" },
      { option: "insert-object" },
      { option: "apply-adjustment" },
      { option: "remove-object" },
    ],
    featureConfig: {
      "community-wall": true,
      "fast-mode": true,
      "custom-models": true,
    },
    fastModeConfig: { defaultFastModeState: "off" },
    appVersion: "2",
    callbacks: {
      onCancel: () => {},
      onError: (err) => {},
      onPublish: (publishParams) => {},
    },
  },
  [
    {
      action: { context: "new", target: "express" },
      id: "editor",
      label: "Create a design",
      style: { uiType: "button" },
    },
    {
      action: {
        target: "publish",
        outputType: "URL",
        closeTargetOnExport: true,
      },
      id: "saveToHostApp",
      label: "Publish",
      style: { uiType: "button" },
    },
  ]
);
```

#### Edit Image

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
    style: { uiType: "button" },
    options: [
      {
        id: "exportOption3",
        style: { uiType: "dropdown" },
        action: { target: "image-module", intent: "remove-background" },
      },
      {
        id: "exportOption4",
        style: { uiType: "dropdown" },
        action: { target: "express", intent: "add-images" },
      },
      {
        id: "exportOption5",
        style: { uiType: "dropdown" },
        action: { target: "express", intent: "add-text" },
      },
    ],
  },
];

module.editImage(docConfig, {}, exportOptions);
```

#### Template Browser

```js
const { module } = await window.CCEverywhere.initialize({
  clientId: <CLIENT_ID>,
  appName: <APP_NAME>,
});

const appConfig = {
  contentBrowseConfig: {
    categoriesConfig: [
      {
        category: "templates",
        collectionId: "urn:aaid:sc:VA6C2:34756608-9fa0-4fdc-80b0-65e17ffb29c8",
      },
    ],
    searchQuery: "Instagram story",
    shortcutPillTerms: ["Social", "Business", "Events", "Personal"],
    headerText: "Browse our Business Card templates",
  },
};

module.startFromContent(appConfig);
```

#### Design Viewer

```js
const { module } = await window.CCEverywhere.initialize({
  clientId: <CLIENT_ID>,
  appName: <APP_NAME>,
});

const docConfig = {
  asset: {
    type: "image",
    dataType: "base64",
    data: "<base64-encoded-string>",
  },
};

const appConfig = {
  designTitle: "Your Gameweek Summary",
  previewThumbnails: {
    collectionConfig: {
      collectionId: "urn:aaid:sc:VA6C2:35e85094-7807-45aa-abac-c9aeac11eb2e",
      count: 7,
    },
  },
  callbacks: {
    onPublish: (intent, publishParams) => {
      console.log("Published:", publishParams);
    },
    onCancel: () => {},
    onError: (err) => console.error("Error:", err.toString()),
  },
};

module.viewDesign(docConfig, appConfig);
```
