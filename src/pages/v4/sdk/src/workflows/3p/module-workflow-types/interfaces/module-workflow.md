---
hideEditInGithub: true
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
   containerConfig?): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `docConfig` | [`EditImageDocConfig`](../../../../../../shared/src/types/module/doc-config-types/interfaces/edit-image-doc-config.md) |
| `appConfig?` | [`EditImageAppConfig`](../../../../../../shared/src/types/module/app-config-types/interfaces/edit-image-app-config.md) |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) |

#### Returns

`void`

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
