# Class: ModuleWorkflow

## Extends

- [`BaseWorkflow`](../../../BaseWorkflow/classes/base-workflow.md)

## Implements

- [`ModuleWorkflow`](../../ModuleWorkflow.types/interfaces/module-workflow.md)

## Methods

### editImage()

```ts
editImage(
   docConfig, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void
```

Perform editing tasks on any image.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig` | [`EditImageDocConfig`](../../../../../../shared/src/types/module/DocConfig.types/interfaces/edit-image-doc-config.md) | pass an asset to preload on to the Editor |
| `appConfig`? | [`EditImageAppConfig`](../../../../../../shared/src/types/module/AppConfig.types/interfaces/edit-image-app-config.md) | - |
| `exportConfig`? | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig`? | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`ModuleWorkflow`](../../ModuleWorkflow.types/interfaces/module-workflow.md).[`editImage`](../../ModuleWorkflow.types/interfaces/module-workflow.md#editimage)

<hr />

### createImageFromText()

```ts
createImageFromText(
   appConfig?, 
   exportConfig?, 
   containerConfig?): void
```

Generate images by just passing a text prompt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `appConfig`? | [`TextToImageAppConfig`](../../../../../../shared/src/types/module/AppConfig.types/interfaces/text-to-image-app-config.md) | Pass a text prompt to generate images. |
| `exportConfig`? | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig`? | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`ModuleWorkflow`](../../ModuleWorkflow.types/interfaces/module-workflow.md).[`createImageFromText`](../../ModuleWorkflow.types/interfaces/module-workflow.md#createimagefromtext)
