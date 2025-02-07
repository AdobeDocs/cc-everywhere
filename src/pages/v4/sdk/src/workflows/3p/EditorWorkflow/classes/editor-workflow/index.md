# Class: EditorWorkflow

## Extends

- [`BaseWorkflow`](../../../BaseWorkflow/classes/base-workflow.md)

## Implements

- [`EditorWorkflow`](../../EditorWorkflow.types/interfaces/editor-workflow/index.md)

## Methods

### create()

```ts
create(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void
```

Start the editor workflow with an empty canvas

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`CreateDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/create-doc-config/index.md) | pass a custom canvas size |
| `appConfig?` | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/base-editor-app-config/index.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options/index.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config/index.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`EditorWorkflow`](../../EditorWorkflow.types/interfaces/editor-workflow/index.md).[`create`](../../EditorWorkflow.types/interfaces/editor-workflow/index.md#create)

<hr />

### createWithAsset()

```ts
createWithAsset(
   docConfig, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void
```

Start the editor workflow by passing an image asset

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig` | [`CreateWithAssetDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/create-with-asset-doc-config/index.md) | pass an image asset as base64 |
| `appConfig?` | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/base-editor-app-config/index.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options/index.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config/index.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`EditorWorkflow`](../../EditorWorkflow.types/interfaces/editor-workflow/index.md).[`createWithAsset`](../../EditorWorkflow.types/interfaces/editor-workflow/index.md#createwithasset)

<hr />

### createWithTemplate()

```ts
createWithTemplate(
   docConfig, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void
```

Start the editor workflow by passing an Express Template ID

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig` | [`CreateWithTemplateDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/create-with-template-doc-config/index.md) | pass a template ID |
| `appConfig?` | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/base-editor-app-config/index.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options/index.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config/index.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`EditorWorkflow`](../../EditorWorkflow.types/interfaces/editor-workflow/index.md).[`createWithTemplate`](../../EditorWorkflow.types/interfaces/editor-workflow/index.md#createwithtemplate)

<hr />

### edit()

```ts
edit(
   docConfig, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void
```

Start the editor workflow by passing an Express Document ID

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig` | [`EditDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/edit-doc-config/index.md) | pass an Express Document ID |
| `appConfig?` | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/base-editor-app-config/index.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/export-options/index.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/container-config/index.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`EditorWorkflow`](../../EditorWorkflow.types/interfaces/editor-workflow/index.md).[`edit`](../../EditorWorkflow.types/interfaces/editor-workflow/index.md#edit)
