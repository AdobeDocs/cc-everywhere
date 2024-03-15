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

This class contains the APIs used for opening quick actions.

## Image quick actions

### convertToJPEG

```ts
quickAction.convertToJPEG: (docConfig?: DocConfig, appConfig?: AppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

### convertToPNG

```ts
quickAction.convertToPNG: (docConfig?: DocConfig, appConfig?: AppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

### convertToSVG

```ts
quickAction.convertToSVG: (docConfig?: DocConfig, appConfig?: AppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

### cropImage

```ts
quickAction.cropImage: (docConfig?: DocConfig, appConfig?: AppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

### resizeImage

```ts
quickAction.resizeImage: (docConfig?: DocConfig, appConfig?: AppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfigs): void
```

### removeBackground

```ts
quickAction.removeBackground: (docConfig?: DocConfig, appConfig?: AppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

### generateQRCode

```ts
quickAction.generateQRCode: (docConfig?: DocConfig, appConfig?: AppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

## Video quick actions

### convertToGIF

```ts
quickAction.convertToGIF: (docConfig?: DocConfig, appConfig?: AppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

### convertToMP4

```ts
quickAction.convertToMP4: (docConfig?: DocConfig, appConfig?: AppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

### cropVideo

```ts
quickAction.cropVideo: (docConfig?: DocConfig, appConfig?: AppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

### mergeVideo

```ts
quickAction.mergeVideo: (docConfig?: DocConfig, appConfig?: AppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

### resizeVideo

```ts
quickAction.resizeVideo: (docConfig?: DocConfig, appConfig?: AppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

### trimVideo

```ts
quickAction.trimVideo: (docConfig?: DocConfig, appConfig?: AppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

### animateFromAudio

```ts
quickAction.animateFromAudio: (docConfig?: DocConfig, appConfig?: AppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

### captionVideo

```ts
quickAction.captionVideo: (docConfig?: DocConfig, appConfig?: AppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

## Parameters

All the properties are optional.

| Property | Type| Description
| :-- | :-- | :--
| docConfig | [DocConfig](#docconfig)| Pass a starting asset to the quick action editor
| appConfig | [AppConfig](#appconfig) | Properties to configure the editor
| exportConfig | [ExportOptions](../../types/index.md#exportoptions)[] | Configure export options. If no export options are specified, the editor falls back to the default layout options.
| containerConfig | [ContainerConfig](../../types/index.md#containerconfig) | Properties to configure the SDK container

### DocConfig

| Property | Type | Description
| :-- | :-- | :--
| asset | [Asset](#asset) or [Asset](../../types/index.md#asset)[] | Asset from the host application to start editing with. Array of assets only accepted for merge videos quick action.

### AppConfig

| Property | Type | Description
| :-- | :-- | :--
| colorTheme | string | Sets color theme of editor ("darkest", "dark", "lightest", "light")
| scale | string | Set the text scale for the quick actions editor ("medium" or "large")
| callbacks | [Callbacks](../../types/index.md#callbacks) | Callback functions
