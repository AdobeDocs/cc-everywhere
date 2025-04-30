# Interface: ModuleWorkflow

## Methods

### editImage()

```ts
editImage(
   docConfig, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `docConfig` | [`EditImageDocConfig`](../../../../../../shared/src/types/module/DocConfig.types/interfaces/edit-image-doc-config.md) |
| `appConfig`? | [`EditImageAppConfig`](../../../../../../shared/src/types/module/AppConfig.types/interfaces/edit-image-app-config.md) |
| `exportConfig`? | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options.md) |
| `containerConfig`? | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config.md) |

#### Returns

`void`

***

### createImageFromText()

```ts
createImageFromText(
   appConfig?, 
   exportConfig?, 
   containerConfig?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `appConfig`? | [`TextToImageAppConfig`](../../../../../../shared/src/types/module/AppConfig.types/interfaces/text-to-image-app-config.md) |
| `exportConfig`? | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options.md) |
| `containerConfig`? | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config.md) |

#### Returns

`void`

***

### createTemplateFromText()

```ts
createTemplateFromText(): void
```

#### Returns

`void`
