# Class: EditorWorkflow

## Extends

- [`BaseWorkflow`](../../../BaseWorkflow/classes/BaseWorkflow.md)

## Implements

- [`EditorWorkflow`](../../EditorWorkflow.types/interfaces/EditorWorkflow.md)

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
| `docConfig`? | [`CreateDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/CreateDocConfig.md) | pass a custom canvas size |
| `appConfig`? | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/BaseEditorAppConfig.md) | properties to configure the Editor |
| `exportConfig`? | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/ExportOptions.md) | properties to configure the export options |
| `containerConfig`? | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/ContainerConfig.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`EditorWorkflow`](../../EditorWorkflow.types/interfaces/EditorWorkflow.md).[`create`](../../EditorWorkflow.types/interfaces/EditorWorkflow.md#create)

***

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
| `docConfig` | [`CreateWithAssetDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/CreateWithAssetDocConfig.md) | pass an image asset as base64 |
| `appConfig`? | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/BaseEditorAppConfig.md) | properties to configure the Editor |
| `exportConfig`? | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/ExportOptions.md) | properties to configure the export options |
| `containerConfig`? | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/ContainerConfig.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`EditorWorkflow`](../../EditorWorkflow.types/interfaces/EditorWorkflow.md).[`createWithAsset`](../../EditorWorkflow.types/interfaces/EditorWorkflow.md#createwithasset)

***

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
| `docConfig` | [`CreateWithTemplateDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/CreateWithTemplateDocConfig.md) | pass a template ID |
| `appConfig`? | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/BaseEditorAppConfig.md) | properties to configure the Editor |
| `exportConfig`? | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/ExportOptions.md) | properties to configure the export options |
| `containerConfig`? | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/ContainerConfig.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`EditorWorkflow`](../../EditorWorkflow.types/interfaces/EditorWorkflow.md).[`createWithTemplate`](../../EditorWorkflow.types/interfaces/EditorWorkflow.md#createwithtemplate)

***

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
| `docConfig` | [`EditDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/EditDocConfig.md) | pass an Express Document ID |
| `appConfig`? | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/BaseEditorAppConfig.md) | properties to configure the Editor |
| `exportConfig`? | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/ExportOptions.md) | properties to configure the export options |
| `containerConfig`? | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/ContainerConfig.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`EditorWorkflow`](../../EditorWorkflow.types/interfaces/EditorWorkflow.md).[`edit`](../../EditorWorkflow.types/interfaces/EditorWorkflow.md#edit)
