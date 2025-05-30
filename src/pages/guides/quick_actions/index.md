---
keywords:
  - Image Quick Actions
  - Video Quick Actions
  - Crop image
  - Convert to JPG
  - Convert to PNG
  - Resize image
  - Remove background
  - Convert to GIF
  - Convert to MP4
  - Crop video
  - Merge videos
  - Resize video
  - Trim video
  - Animate from audio
title: Embed quick actions
description: This is the overview page for the quick actions component.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
  - https://github.com/undavide
---

# Quick actions

Quick actions gives your users access to powerful, one-click image and video editing tools. Try them for yourself in our [demo app](https://demo.expressembed.com).

Adobe-powered quick actions take the most complex tasks from our flagship apps -- like remove background -- and turns them into one-click tasks. The quick actions component is embedded onto your application as an iframe.

The `quickAction` class contains all the methods for launching quick action editors.

```js
// Initialize the SDK first
const { quickAction } = await window.CCEverywhere.initialize({
  clientId: <CLIENT_ID>,
  appName: <APP_NAME>,
});

quickAction.convertToJPEG(docConfig, appConfig, exportConfig, containerConfig);
```

Each quick action has its own method, that always accepts `docConfig`, `appConfig`, `exportConfig`, `containerConfig` as optional parameters, and return `void`. Here are the Image quick actions:

- `convertToJPEG()`
- `convertToPNG()`
- `convertToSVG()`
- `cropImage()`
- `resizeImage()`
- `removeBackground()`
- `generateQRCode()`

Here are the methods for video quick actions:

- `convertToGIF()`
- `convertToMP4()`
- `cropVideo()`
- `mergeVideos()`
- `resizeVideo()`
- `trimVideo()`
- `animateFromAudio()`
- `captionVideo()`

## Parameters

All the properties are optional.

| Property        | Type                                                                                               | Description                                                                                                        |
| :-------------- | :------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| docConfig       | [DocConfig](../../v4/shared/src/types/quick-action/doc-config-types/interfaces/doc-config.md)        | Pass a starting asset to the quick action editor                                                                   |
| appConfig       | [AppConfig](../../v4/shared/src/types/quick-action/app-config-types/interfaces/app-config.md)        | Properties to configure the editor                                                                                 |
| exportConfig    | [ExportOptions](../../v4/shared/src/types/export-config-types/type-aliases/export-options.md)[]      | Configure export options. If no export options are specified, the editor falls back to the default layout options. |
| containerConfig | [ContainerConfig](../../v4/shared/src/types/container-config-types/type-aliases/container-config.md) | Properties to configure the SDK container                                                                          |

## Example: Default export options

When no asset is passed as an input when a quick action is invoked, the user will be asked to browse/upload an image once the modal is open. Default export options will be surfaced to the user.

```js
const { quickAction } = await window.CCEverywhere.initialize({
  clientId: <CLIENT_ID>,
  appName: <APP_NAME>,
});
quickAction.cropImage();
```

## Example: Input asset, custom export options

The `quickAction` APIs can take an image asset and custom export options as input.

```js
const { quickAction } = await window.CCEverywhere.initialize({
  clientId: <CLIENT_ID>,
  appName: <APP_NAME>,
});

const docConfig = {
  asset: {
    data: base64Asset,
    dataType: "base64",
    type: "image",
  },
};

const exportOptions = [
  {
    id: "edit-in-express",
    label: "Edit in Adobe Express",
    action: {
      target: "express",
    },
    style: {
      uiType: "button",
    },
  },
  {
    id: "download",
    label: "Download",
    action: {
      target: "download",
    },
    style: {
      uiType: "button",
    },
  },
  {
    id: "save-modified-asset",
    label: "Save image",
    action: {
      target: "publish",
    },
    style: {
      uiType: "button",
    },
  },
];

quickAction.removeBackground(docConfig, exportOptions);
```
