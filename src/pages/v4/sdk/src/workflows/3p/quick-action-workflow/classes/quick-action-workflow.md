---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Class: QuickActionWorkflow

## Extends

- [`BaseWorkflow`](../../../base-workflow/classes/base-workflow.md)

## Implements

- [`QuickActionWorkflow`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md)

## Constructors

### Constructor

```ts
new QuickActionWorkflow(actionManager, context): QuickActionWorkflow;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `actionManager` | `ActionManager` |
| `context` | `SDKContext` |

#### Returns

`QuickActionWorkflow`

#### Inherited from

[`BaseWorkflow`](../../../base-workflow/classes/base-workflow.md).[`constructor`](../../../base-workflow/classes/base-workflow.md#constructor)

## Methods

### convertToJPEG()

```ts
convertToJPEG(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Lower your file size by changing your PNG images into JPG files.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`DocConfig`](../../../../../../shared/src/types/quick-action/doc-config-types/interfaces/doc-config.md) | pass an asset to preload on to the Quick Action Editor |
| `appConfig?` | [`AppConfig`](../../../../../../shared/src/types/quick-action/app-config-types/interfaces/app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`QuickActionWorkflow`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md).[`convertToJPEG`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md#converttojpeg)

<HorizontalLine />

### convertToPNG()

```ts
convertToPNG(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Save your images as PNG files to improve file quality.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`DocConfig`](../../../../../../shared/src/types/quick-action/doc-config-types/interfaces/doc-config.md) | pass an asset to preload on to the Quick Action Editor |
| `appConfig?` | [`AppConfig`](../../../../../../shared/src/types/quick-action/app-config-types/interfaces/app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`QuickActionWorkflow`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md).[`convertToPNG`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md#converttopng)

<HorizontalLine />

### convertToSVG()

```ts
convertToSVG(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Drag and drop a JPG or PNG image file to convert to SVG.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`DocConfig`](../../../../../../shared/src/types/quick-action/doc-config-types/interfaces/doc-config.md) | pass an asset to preload on to the Quick Action Editor |
| `appConfig?` | [`AppConfig`](../../../../../../shared/src/types/quick-action/app-config-types/interfaces/app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`QuickActionWorkflow`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md).[`convertToSVG`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md#converttosvg)

<HorizontalLine />

### cropImage()

```ts
cropImage(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Transform your image into the perfect shape or size in seconds.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`DocConfig`](../../../../../../shared/src/types/quick-action/doc-config-types/interfaces/doc-config.md) | pass an asset to preload on to the Quick Action Editor |
| `appConfig?` | [`AppConfig`](../../../../../../shared/src/types/quick-action/app-config-types/interfaces/app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`QuickActionWorkflow`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md).[`cropImage`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md#cropimage)

<HorizontalLine />

### resizeImage()

```ts
resizeImage(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Change the dimensions of any photo.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`DocConfig`](../../../../../../shared/src/types/quick-action/doc-config-types/interfaces/doc-config.md) | pass an asset to preload on to the Quick Action Editor |
| `appConfig?` | [`AppConfig`](../../../../../../shared/src/types/quick-action/app-config-types/interfaces/app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`QuickActionWorkflow`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md).[`resizeImage`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md#resizeimage)

<HorizontalLine />

### removeBackground()

```ts
removeBackground(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Easily remove the background of your photos.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`DocConfig`](../../../../../../shared/src/types/quick-action/doc-config-types/interfaces/doc-config.md) | pass an asset to preload on to the Quick Action Editor |
| `appConfig?` | [`AppConfig`](../../../../../../shared/src/types/quick-action/app-config-types/interfaces/app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`QuickActionWorkflow`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md).[`removeBackground`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md#removebackground)

<HorizontalLine />

### generateQRCode()

```ts
generateQRCode(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Generate a QR Code for a URL.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`DocConfig`](../../../../../../shared/src/types/quick-action/doc-config-types/interfaces/doc-config.md) | pass an asset to preload on to the Quick Action Editor |
| `appConfig?` | [`AppConfig`](../../../../../../shared/src/types/quick-action/app-config-types/interfaces/app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`QuickActionWorkflow`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md).[`generateQRCode`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md#generateqrcode)

<HorizontalLine />

### convertToGIF()

```ts
convertToGIF(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Convert a video asset to GIF format.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`DocConfig`](../../../../../../shared/src/types/quick-action/doc-config-types/interfaces/doc-config.md) | pass an asset to preload on to the Quick Action Editor |
| `appConfig?` | [`AppConfig`](../../../../../../shared/src/types/quick-action/app-config-types/interfaces/app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`QuickActionWorkflow`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md).[`convertToGIF`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md#converttogif)

<HorizontalLine />

### convertToMP4()

```ts
convertToMP4(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Convert a video asset to MP4 format.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`DocConfig`](../../../../../../shared/src/types/quick-action/doc-config-types/interfaces/doc-config.md) | pass an asset to preload on to the Quick Action Editor |
| `appConfig?` | [`AppConfig`](../../../../../../shared/src/types/quick-action/app-config-types/interfaces/app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`QuickActionWorkflow`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md).[`convertToMP4`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md#converttomp4)

<HorizontalLine />

### cropVideo()

```ts
cropVideo(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Transform your video into the perfect shape or size in seconds.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`DocConfig`](../../../../../../shared/src/types/quick-action/doc-config-types/interfaces/doc-config.md) | pass an asset to preload on to the Quick Action Editor |
| `appConfig?` | [`AppConfig`](../../../../../../shared/src/types/quick-action/app-config-types/interfaces/app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`QuickActionWorkflow`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md).[`cropVideo`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md#cropvideo)

<HorizontalLine />

### mergeVideos()

```ts
mergeVideos(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Collate multiple video/photo into a single video.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`MergeVideoDocConfig`](../../../../../../shared/src/types/quick-action/doc-config-types/interfaces/merge-video-doc-config.md) | pass an array of assets to preload on to the Quick Action Editor |
| `appConfig?` | [`AppConfig`](../../../../../../shared/src/types/quick-action/app-config-types/interfaces/app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`QuickActionWorkflow`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md).[`mergeVideos`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md#mergevideos)

<HorizontalLine />

### resizeVideo()

```ts
resizeVideo(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Change the dimensions of any video.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`DocConfig`](../../../../../../shared/src/types/quick-action/doc-config-types/interfaces/doc-config.md) | pass an asset to preload on to the Quick Action Editor |
| `appConfig?` | [`AppConfig`](../../../../../../shared/src/types/quick-action/app-config-types/interfaces/app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`QuickActionWorkflow`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md).[`resizeVideo`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md#resizevideo)

<HorizontalLine />

### trimVideo()

```ts
trimVideo(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Trim a video to a desired length.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`DocConfig`](../../../../../../shared/src/types/quick-action/doc-config-types/interfaces/doc-config.md) | pass an asset to preload on to the Quick Action Editor |
| `appConfig?` | [`AppConfig`](../../../../../../shared/src/types/quick-action/app-config-types/interfaces/app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`QuickActionWorkflow`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md).[`trimVideo`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md#trimvideo)

<HorizontalLine />

### animateFromAudio()

```ts
animateFromAudio(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Create an animated video from an audio.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`DocConfig`](../../../../../../shared/src/types/quick-action/doc-config-types/interfaces/doc-config.md) | pass an asset to preload on to the Quick Action Editor |
| `appConfig?` | [`AppConfig`](../../../../../../shared/src/types/quick-action/app-config-types/interfaces/app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`QuickActionWorkflow`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md).[`animateFromAudio`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md#animatefromaudio)

<HorizontalLine />

### captionVideo()

```ts
captionVideo(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Add captions to any video.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`DocConfig`](../../../../../../shared/src/types/quick-action/doc-config-types/interfaces/doc-config.md) | pass an asset to preload on to the Quick Action Editor |
| `appConfig?` | [`AppConfig`](../../../../../../shared/src/types/quick-action/app-config-types/interfaces/app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`QuickActionWorkflow`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md).[`captionVideo`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md#captionvideo)
