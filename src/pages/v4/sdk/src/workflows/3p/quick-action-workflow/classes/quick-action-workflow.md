[**cc-everywhere**](../../../../../../index.md)

***

# Class: QuickActionWorkflow

## Extends

- [`BaseWorkflow`](../../../base-workflow/classes/base-workflow.md)

## Implements

- [`QuickActionWorkflow`](../../quick-action-workflow-types/interfaces/quick-action-workflow.md)

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

***

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

***

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

***

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

***

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

***

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

***

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

***

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

***

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

***

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

***

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

***

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

***

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

***

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

***

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
