---
keywords:
  - openQuickAction
  - Open quick action
  - Load quick action
  - Launch quick action
  - v4
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
title: quickAction reference
description: This is the reference page for the quickAction module
contributors:
  - https://github.com/amandahuarng
--- 

# quickAction

<InlineAlert variant="error" slots="header, text" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated in 2024.

This property contains the APIs used for opening quick actions.

## convertToJPEG

```ts
quickAction.convertToJPEG: (quickActionParams: QuickActionParams): void
```

## convertToPNG

```ts
quickAction.convertToPNG: (quickActionParams: QuickActionParams): void
```

## convertToSVG

```ts
quickAction.convertToSVG: (quickActionParams: QuickActionParams): void
```

## cropImage

```ts
quickAction.cropImage: (quickActionParams: QuickActionParams): void
```

## resizeImage

```ts
quickAction.resizeImage: (quickActionParams: QuickActionParams): void
```

## removeBackground

```ts
quickAction.removeBackground: (quickActionParams: QuickActionParams): void
```

## generateQRCode

```ts
quickAction.generateQRCode: (quickActionParams: QuickActionParams): void
```

## convertToGIF

```ts
quickAction.convertToGIF: (quickActionParams: QuickActionParams): void
```

## convertToMP4

```ts
quickAction.convertToMP4: (quickActionParams: QuickActionParams): void
```

## cropVideo

```ts
quickAction.cropVideo: (quickActionParams: QuickActionParams): void
```

## mergeVideo

```ts
quickAction.mergeVideo: (quickActionParams: QuickActionParams): void
```

## resizeVideo

```ts
quickAction.resizeVideo: (quickActionParams: QuickActionParams): void
```

## trimVideo

```ts
quickAction.trimVideo: (quickActionParams: QuickActionParams): void
```

## animateFromAudio

```ts
quickAction.animateFromAudio: (quickActionParams: QuickActionParams): void
```

## captionVideo

```ts
quickAction.captionVideo: (quickActionParams: QuickActionParams): void
```

## Parameters

### QuickActionParams

Besides `id`, all other properties are optional.

| Property | Type| Description
| :-- | :-- | :--
| id | [QuickActionId](#quickactionid) | Specify which quick action to open.
| callbacks | [Callbacks](../../types/index.md#callbacks) | Callback methods
| modalParams | [ModalParams](../../types/index.md#modalparams) | Parameters to configure modal UI
| inputParams | [QuickActionInputParams](#quickactioninputparams) | Input parameters when opening a quick action.
| outputParams | [CCXOutputParams](../../types/index.md#ccxoutputparams) | Desired output options when exporting assets from a quick action.

### QuickActionId

This ID is associated with the quick action you want to surface to your user.

| Quick Action | QuickActionId | Type
| :-- | :-- | :--
| Crop image | 'crop-image' | Image
| Convert to JPG | 'convert-to-jpg' | Image
| Convert to PNG | 'convert-to-png' | Image
| Resize image | 'resize-image' | Image
| Remove background | 'remove-background' | Image
| Generate QR code | 'generate-qr-code' | Image
| Convert to GIF | 'convert-to-gif' | Video
| Convert to MP4 | 'convert-to-mp4' | Video
| Crop video | 'crop-video' | Video
| Merge videos | 'merge-videos' | Video
| Resize video | 'resize-video' | Video
| Trim video | 'trim-video' | Video
| Animate from audio | 'animate-from-audio' | Video
| Caption video | 'caption-video' | Video

### QuickActionInputParams

Input parameters for quick actions. All the properties are optional.

| Property | Type | Description
| :-- | :-- | :--
| exportOptions | [ExportOptions](../../types/index.md#exportoptions)[] | Export options for the asset that is created. These options will be visible in the quick action editor.
| asset | [Asset](#asset) or [Asset](../../types/index.md#asset)[] | Asset from the host application to start editing with. Array of assets only accepted for merge videos quick action.
| receiveTargetErrors | boolean | Boolean that tells client whether or not to receive target application errors.
