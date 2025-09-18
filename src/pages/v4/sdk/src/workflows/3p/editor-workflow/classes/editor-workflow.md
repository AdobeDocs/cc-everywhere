[**cc-everywhere**](../../../../../../index.md)

***

# Class: EditorWorkflow

## Extends

- [`BaseWorkflow`](../../../base-workflow/classes/base-workflow.md)

## Implements

- [`EditorWorkflow`](../../editor-workflow-types/interfaces/editor-workflow.md)

## Constructors

### Constructor

```ts
new EditorWorkflow(actionManager, context): EditorWorkflow;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `actionManager` | `ActionManager` |
| `context` | `SDKContext` |

#### Returns

`EditorWorkflow`

#### Inherited from

[`BaseWorkflow`](../../../base-workflow/classes/base-workflow.md).[`constructor`](../../../base-workflow/classes/base-workflow.md#constructor)

## Methods

### create()

```ts
create(
   docConfig?, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Start the editor workflow with an empty canvas

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig?` | [`CreateDocConfig`](../../../../../../shared/src/types/editor/doc-config-types/interfaces/create-doc-config.md) | pass a custom canvas size |
| `appConfig?` | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/app-config-types/interfaces/base-editor-app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`EditorWorkflow`](../../editor-workflow-types/interfaces/editor-workflow.md).[`create`](../../editor-workflow-types/interfaces/editor-workflow.md#create)

***

### createWithAsset()

```ts
createWithAsset(
   docConfig, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Start the editor workflow by passing an image asset

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig` | [`CreateWithAssetDocConfig`](../../../../../../shared/src/types/editor/doc-config-types/interfaces/create-with-asset-doc-config.md) | pass an image asset as base64 |
| `appConfig?` | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/app-config-types/interfaces/base-editor-app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`EditorWorkflow`](../../editor-workflow-types/interfaces/editor-workflow.md).[`createWithAsset`](../../editor-workflow-types/interfaces/editor-workflow.md#createwithasset)

***

### createWithTemplate()

```ts
createWithTemplate(
   docConfig, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Start the editor workflow by passing an Express Template ID

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig` | [`CreateWithTemplateDocConfig`](../../../../../../shared/src/types/editor/doc-config-types/interfaces/create-with-template-doc-config.md) | pass a template ID |
| `appConfig?` | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/app-config-types/interfaces/base-editor-app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`EditorWorkflow`](../../editor-workflow-types/interfaces/editor-workflow.md).[`createWithTemplate`](../../editor-workflow-types/interfaces/editor-workflow.md#createwithtemplate)

***

### edit()

```ts
edit(
   docConfig, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

Start the editor workflow by passing an Express Document ID

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig` | [`EditDocConfig`](../../../../../../shared/src/types/editor/doc-config-types/interfaces/edit-doc-config.md) | pass an Express Document ID |
| `appConfig?` | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/app-config-types/interfaces/base-editor-app-config.md) | properties to configure the Editor |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) | properties to configure the export options |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) | properties to configure the SDK container |

#### Returns

`void`

#### Implementation of

[`EditorWorkflow`](../../editor-workflow-types/interfaces/editor-workflow.md).[`edit`](../../editor-workflow-types/interfaces/editor-workflow.md#edit)
