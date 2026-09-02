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

## Constructors

### Constructor

```ts
new ModuleWorkflow(actionManager, context): ModuleWorkflow;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `actionManager` | `ActionManager` |
| `context` | `SDKContext` |

#### Returns

`ModuleWorkflow`

#### Inherited from

[`BaseWorkflow`](../../../base-workflow/classes/base-workflow.md).[`constructor`](../../../base-workflow/classes/base-workflow.md#constructor)

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

### createDesign()

```ts
createDesign(
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Create a new design. Open template gallery as the default entry experience.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `appConfig?` | [`FDECreateDesignAppConfig`](../../../../../../shared/src/types/3p/module/app-config-types/interfaces/fde-create-design-app-config.md) | properties to configure the template browser and FDE session |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`ModuleWorkflow`](../../module-workflow-types/interfaces/module-workflow.md).[`createDesign`](../../module-workflow-types/interfaces/module-workflow.md#createdesign)

<HorizontalLine />

### editDesign()

```ts
editDesign(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Edit and customize a template or document in the Focused Design Editor (FDE).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`FDEEditDesignDocConfig`](../../../../../../shared/src/types/module/doc-config-types/interfaces/fde-edit-design-doc-config.md) | pass template configuration including docId or templateId |
| `appConfig?` | [`FDEEditDesignAppConfig`](../../../../../../shared/src/types/3p/module/app-config-types/interfaces/fde-edit-design-app-config.md) | properties to configure the Focused Design Editor. See [ThirdParty.Module.FDEEditDesignAppConfig](../../../../../../shared/src/types/3p/module/app-config-types/interfaces/fde-edit-design-app-config.md). |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`ModuleWorkflow`](../../module-workflow-types/interfaces/module-workflow.md).[`editDesign`](../../module-workflow-types/interfaces/module-workflow.md#editdesign)

<HorizontalLine />

### viewDesign()

```ts
viewDesign(
   docConfig, 
   appConfig?, 
   exportConfig?, 
containerConfig?): Promise<IDesignViewerContext>;
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

`Promise`&lt;[`IDesignViewerContext`](../../../../context/3p/design-viewer-context/interfaces/i-design-viewer-context.md)&gt;

Promise that resolves with the DesignViewerContext when the workflow is loaded. Use it to push a new docConfig to the open viewer.

#### Implementation of

[`ModuleWorkflow`](../../module-workflow-types/interfaces/module-workflow.md).[`viewDesign`](../../module-workflow-types/interfaces/module-workflow.md#viewdesign)
