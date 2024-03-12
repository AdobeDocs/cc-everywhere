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
---

# Quick actions

Quick actions gives your users access to powerful, one-click image and video editing tools. Try them for yourself in our [demo app](https://demo.expressembed.com).

Adobe-powered quick actions take the most complex tasks from our flagship apps -- like remove background -- and turns them into one-click tasks. The quick actions component is embedded onto your application as an iframe.

The `quickAction` class contains all the methods for launching quick action editors.

```js
// Initialize the SDK first
const { quickAction } = await ccEverywhere.initialize(); 
quickAction.convertToJPEG(docConfig, appConfig, exportConfig, containerConfig); 
```

Each quick action has its own method. Here are the methods for image quick actions:

* convertToJPEG(docConfig, appConfig, exportConfig, containerConfig): void;
* convertToPNG(docConfig, appConfig, exportConfig, containerConfig): void;
* convertToSVG(docConfig, appConfig, exportConfig, containerConfig): void;
* cropImage(docConfig, appConfig, exportConfig, containerConfig): void;
* resizeImage(docConfig, appConfig, exportConfig, containerConfig): void;
* removeBackground(docConfig, appConfig, exportConfig, containerConfig): void;
* generateQRCode(docConfig, appConfig, exportConfig, containerConfig): void;

Here are the methods for video quick actions:

* convertToGIF(docConfig, appConfig, exportConfig, containerConfig): void;
* convertToMP4(docConfig, appConfig, exportConfig, containerConfig): void;
* cropVideo(docConfig, appConfig, exportConfig, containerConfig): void;
* mergeVideos(docConfig, appConfig, exportConfig, containerConfig): void;
* resizeVideo(docConfig, appConfig, exportConfig, containerConfig): void;
* trimVideo(docConfig, appConfig, exportConfig, containerConfig): void;
* animateFromAudio(docConfig, appConfig, exportConfig, containerConfig): void;
* captionVideo(docConfig, appConfig, exportConfig, containerConfig): void;

## Parameters

All the properties are optional.

| Property | Type| Description
| :-- | :-- | :--
| docConfig | [DocConfig](../../reference/CCEverywhere/quickAction/index.md#docconfig)| Pass a starting asset to the quick action editor
| appConfig | [AppConfig](../../reference/CCEverywhere/quickAction/index.md#appconfig) | Properties to configure the editor
| exportConfig | [ExportOptions](../../reference/types/index.md#exportoptions)[] | Configure export options. If no export options are specified, the editor falls back to the default layout options.
| containerConfig | [ContainerConfig](../../reference/types/index.md#containerconfig) | Properties to configure the SDK container

## Example: Default export options

When no asset is passed as an input when a quick action is invoked, the user will be asked to browse/upload an image once the modal is open. Default export options will be surfaced to the user.

``` ts title="crop-image.js" hl_lines="15"
quickAction.cropImage();
```

## Example: Input asset, custom export options

The `quickAction` APIs can take an image asset and custom export options as input. 

``` ts title="remove-background.js" hl_lines="5 29 40"
let docConfig = {
    asset: {
        data: base64Asset,
        dataType: 'base64',
        type: 'image' 
    }
}

const exportOptions = [{
    id: 'edit-in-express',
    label: 'Edit in Adobe Express',
    action: {
        target: 'express',
    },
    style: {
        uiType: 'button'
    }
},
{
    id: 'download',
    label: 'Download',
    action: {
        target: 'download'
    },
    style: {
        uiType: 'button'
    }
},
{
    id: 'save-modified-asset',
    label: 'Save image',
    action: {
        target: 'publish'
    },
    style: {
        uiType: 'button'
    }
}];

quickAction.removeBackground(docConfig, exportOptions);
```
