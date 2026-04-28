---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Class: ModuleWorkflow

## Extends

- [`BaseWorkflow`](../../../base-workflow/classes/base-workflow.md)

## Implements

- [`ModuleWorkflow`](../../module-workflow-types/interfaces/module-workflow.md)

## Methods

### editImage()

```ts
editImage(
   docConfig, 
   appConfig?, 
   exportConfig?, 
containerConfig?): Promise<EditImageContext>;
```

Perform editing tasks on any image.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig` | [`EditImageDocConfig`](../../../../../../shared/src/types/module/doc-config-types/interfaces/edit-image-doc-config.md) | pass an asset to preload on to the Editor |
| `appConfig?` | [`EditImageAppConfig`](../../../../../../shared/src/types/module/app-config-types/interfaces/edit-image-app-config.md) | - |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`Promise`&lt;`EditImageContext`&gt;

Promise that resolves with EditImageContext when the workflow is loaded

#### Implementation of

[`ModuleWorkflow`](../../module-workflow-types/interfaces/module-workflow.md).[`editImage`](../../module-workflow-types/interfaces/module-workflow.md#editimage)

<HorizontalLine />

### createImageFromText()

```ts
createImageFromText(
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Generate images by just passing a text prompt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `appConfig?` | [`TextToImageAppConfig`](../../../../../../shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md) | Pass a text prompt to generate images. |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`ModuleWorkflow`](../../module-workflow-types/interfaces/module-workflow.md).[`createImageFromText`](../../module-workflow-types/interfaces/module-workflow.md#createimagefromtext)

<HorizontalLine />

### startFromContent()

```ts
startFromContent(
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Open the Start From Content module.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `appConfig?` | [`StartFromContentAppConfig`](../../../../../../shared/src/types/module/app-config-types/interfaces/start-from-content-app-config.md) | properties to configure the Start From Content module |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`ModuleWorkflow`](../../module-workflow-types/interfaces/module-workflow.md).[`startFromContent`](../../module-workflow-types/interfaces/module-workflow.md#startfromcontent)

<HorizontalLine />

### viewDesign()

```ts
viewDesign(
   docConfig, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Launches the design viewer for a personalized design.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig` | [`DesignViewerDocConfig`](../../../../../../shared/src/types/module/doc-config-types/interfaces/design-viewer-doc-config.md) | pass an asset to preload on to the viewer. |
| `appConfig?` | [`DesignViewerAppConfig`](../../../../../../shared/src/types/module/app-config-types/interfaces/design-viewer-app-config.md) | properties to configure the Design Viewer module |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`ModuleWorkflow`](../../module-workflow-types/interfaces/module-workflow.md).[`viewDesign`](../../module-workflow-types/interfaces/module-workflow.md#viewdesign)
