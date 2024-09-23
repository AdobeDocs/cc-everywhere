[**cc-everywhere**](../../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../../index.md) / [sdk/src/workflows/3p/EditorWorkflow.types](../index.md) / EditorWorkflow

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

| Parameter | Type |
| ------ | ------ |
| `docConfig`? | [`CreateDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/CreateDocConfig.md) |
| `appConfig`? | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/BaseEditorAppConfig.md) |
| `outputParams`? | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/ExportOptions.md) |
| `containerConfig`? | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/ContainerConfig.md) |

#### Returns

`void`

***

### createWithAsset()

```ts
createWithAsset(
   docConfig, 
   appConfig?, 
   outputParams?, 
   containerConfig?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `docConfig` | [`CreateWithAssetDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/CreateWithAssetDocConfig.md) |
| `appConfig`? | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/BaseEditorAppConfig.md) |
| `outputParams`? | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/ExportOptions.md) |
| `containerConfig`? | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/ContainerConfig.md) |

#### Returns

`void`

***

### createWithTemplate()

```ts
createWithTemplate(
   docConfig, 
   appConfig?, 
   outputParams?, 
   containerConfig?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `docConfig` | [`CreateWithTemplateDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/CreateWithTemplateDocConfig.md) |
| `appConfig`? | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/BaseEditorAppConfig.md) |
| `outputParams`? | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/ExportOptions.md) |
| `containerConfig`? | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/ContainerConfig.md) |

#### Returns

`void`

***

### edit()

```ts
edit(
   docConfig, 
   appConfig?, 
   outputParams?, 
   containerConfig?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `docConfig` | [`EditDocConfig`](../../../../../../shared/src/types/editor/DocConfig.types/interfaces/EditDocConfig.md) |
| `appConfig`? | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/AppConfig.types/interfaces/BaseEditorAppConfig.md) |
| `outputParams`? | [`ExportOptions`](../../../../../../shared/src/types/ExportConfig.types/type-aliases/ExportOptions.md) |
| `containerConfig`? | [`ContainerConfig`](../../../../../../shared/src/types/ContainerConfig.types/type-aliases/ContainerConfig.md) |

#### Returns

`void`
