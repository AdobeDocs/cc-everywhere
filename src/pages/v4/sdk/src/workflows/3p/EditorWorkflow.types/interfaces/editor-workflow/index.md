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
| `docConfig?`       | [`CreateDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/create-doc-config/index.md)         |
| `appConfig?`       | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/base-editor-app-config/index.md) |
| `outputParams?`    | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options/index.md)               |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config/index.md)        |

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
| `docConfig`        | [`CreateWithAssetDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/create-with-asset-doc-config/index.md) |
| `appConfig?`       | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/base-editor-app-config/index.md)           |
| `outputParams?`    | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options/index.md)                         |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config/index.md)                  |

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
| `docConfig`        | [`CreateWithTemplateDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/create-with-template-doc-config/index.md) |
| `appConfig?`       | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/base-editor-app-config/index.md)                 |
| `outputParams?`    | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options/index.md)                               |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config/index.md)                        |

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
| `docConfig`        | [`EditDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/edit-doc-config/index.md)             |
| `appConfig?`       | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/base-editor-app-config/index.md) |
| `outputParams?`    | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options/index.md)               |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config/index.md)        |

#### Returns

`void`
