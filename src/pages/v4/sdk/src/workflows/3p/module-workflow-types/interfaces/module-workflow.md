---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: ModuleWorkflow

## Methods

### editImage()

```ts
editImage(
   docConfig, 
   appConfig?, 
   exportConfig?, 
containerConfig?): Promise<EditImageContext>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `docConfig` | [`EditImageDocConfig`](../../../../../../shared/src/types/module/doc-config-types/interfaces/edit-image-doc-config.md) |
| `appConfig?` | [`EditImageAppConfig`](../../../../../../shared/src/types/module/app-config-types/interfaces/edit-image-app-config.md) |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) |

#### Returns

`Promise`&lt;`EditImageContext`&gt;

<HorizontalLine />

### createImageFromText()

```ts
createImageFromText(
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `appConfig?` | [`TextToImageAppConfig`](../../../../../../shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md) |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) |

#### Returns

`void`

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
