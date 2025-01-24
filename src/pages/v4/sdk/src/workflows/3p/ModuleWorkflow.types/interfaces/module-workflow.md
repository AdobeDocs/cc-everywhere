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
| `docConfig` | [`EditImageDocConfig`](../../../../../../shared/src/types/module/DocConfig.types/interfaces/EditImageDocConfig.md) |
| `appConfig`? | [`EditImageAppConfig`](../../../../../../shared/src/types/module/AppConfig.types/interfaces/EditImageAppConfig.md) |
| `exportConfig`? | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/ExportOptions.md) |
| `containerConfig`? | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/ContainerConfig.md) |

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
| `appConfig`? | [`TextToImageAppConfig`](../../../../../../shared/src/types/module/AppConfig.types/interfaces/TextToImageAppConfig.md) |
| `exportConfig`? | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/ExportOptions.md) |
| `containerConfig`? | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/ContainerConfig.md) |

#### Returns

`void`

***

### createTemplateFromText()

```ts
createTemplateFromText(): void
```

#### Returns

`void`
