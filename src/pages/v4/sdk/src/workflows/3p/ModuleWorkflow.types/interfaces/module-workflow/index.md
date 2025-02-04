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

| Parameter          | Type                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `docConfig`        | [`EditImageDocConfig`](../../../../../../shared/src/types/module/DocConfig.types/interfaces/edit-image-doc-config.md) |
| `appConfig?`       | [`EditImageAppConfig`](../../../../../../shared/src/types/module/AppConfig.types/interfaces/EditImageapp-config.md) |
| `exportConfig?`    | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options.md)             |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config/index.md)      |

#### Returns

`void`

<hr />

### createImageFromText()

```ts
createImageFromText(
   appConfig?, 
   exportConfig?, 
   containerConfig?): void
```

#### Parameters

| Parameter          | Type                                                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `appConfig?`       | [`TextToImageAppConfig`](../../../../../../shared/src/types/module/AppConfig.types/interfaces/TextToImageapp-config.md) |
| `exportConfig?`    | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options.md)                 |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config/index.md)          |

#### Returns

`void`

<hr />

### createTemplateFromText()

```ts
createTemplateFromText(): void
```

#### Returns

`void`
