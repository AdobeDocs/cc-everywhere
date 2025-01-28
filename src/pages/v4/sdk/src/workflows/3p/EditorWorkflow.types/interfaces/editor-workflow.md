# Interface: EditorWorkflow

## Methods

### create()

```ts
create(
   docConfig?, 
   appConfig?, 
   outputParams?, 
   containerConfig?): void
```

#### Parameters

| Parameter          | Type                                                                                                                 |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `docConfig?`       | [`CreateDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/create-doc-config.md)         |
| `appConfig?`       | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/Baseeditor-app-config.md) |
| `outputParams?`    | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options.md)               |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config.md)        |

#### Returns

`void`

<hr />

### createWithAsset()

```ts
createWithAsset(
   docConfig, 
   appConfig?, 
   outputParams?, 
   containerConfig?): void
```

#### Parameters

| Parameter          | Type                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `docConfig`        | [`CreateWithAssetDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/create-with-asset-doc-config.md) |
| `appConfig?`       | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/Baseeditor-app-config.md)           |
| `outputParams?`    | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options.md)                         |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config.md)                  |

#### Returns

`void`

<hr />

### createWithTemplate()

```ts
createWithTemplate(
   docConfig, 
   appConfig?, 
   outputParams?, 
   containerConfig?): void
```

#### Parameters

| Parameter          | Type                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `docConfig`        | [`CreateWithTemplateDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/create-with-template-doc-config.md) |
| `appConfig?`       | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/Baseeditor-app-config.md)                 |
| `outputParams?`    | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options.md)                               |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config.md)                        |

#### Returns

`void`

<hr />

### edit()

```ts
edit(
   docConfig, 
   appConfig?, 
   outputParams?, 
   containerConfig?): void
```

#### Parameters

| Parameter          | Type                                                                                                                 |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `docConfig`        | [`EditDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/edit-doc-config.md)             |
| `appConfig?`       | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/Baseeditor-app-config.md) |
| `outputParams?`    | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options.md)               |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config.md)        |

#### Returns

`void`
