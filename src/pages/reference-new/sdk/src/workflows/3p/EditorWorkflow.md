[**cc-everywhere**](../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../index.md) / sdk/src/workflows/3p/EditorWorkflow.types

# sdk/src/workflows/3p/EditorWorkflow.types

## Interfaces

### EditorWorkflow

#### Methods

##### create()

```ts
create(
   docConfig?, 
   appConfig?, 
   outputParams?, 
   containerConfig?): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `docConfig`? | [`CreateDocConfig`](../../../../shared/src/types/editor/DocConfig.md#createdocconfig) |
| `appConfig`? | [`BaseEditorAppConfig`](../../../../shared/src/types/editor/AppConfig.md#baseeditorappconfig) |
| `outputParams`? | [`ExportOptions`](../../../../shared/src/types/ExportConfig.md#exportoptions) |
| `containerConfig`? | [`ContainerConfig`](../../../../shared/src/types/ContainerConfig.md#containerconfig) |

###### Returns

`void`

##### createWithAsset()

```ts
createWithAsset(
   docConfig, 
   appConfig?, 
   outputParams?, 
   containerConfig?): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `docConfig` | [`CreateWithAssetDocConfig`](../../../../shared/src/types/editor/DocConfig.md#createwithassetdocconfig) |
| `appConfig`? | [`BaseEditorAppConfig`](../../../../shared/src/types/editor/AppConfig.md#baseeditorappconfig) |
| `outputParams`? | [`ExportOptions`](../../../../shared/src/types/ExportConfig.md#exportoptions) |
| `containerConfig`? | [`ContainerConfig`](../../../../shared/src/types/ContainerConfig.md#containerconfig) |

###### Returns

`void`

##### createWithTemplate()

```ts
createWithTemplate(
   docConfig, 
   appConfig?, 
   outputParams?, 
   containerConfig?): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `docConfig` | [`CreateWithTemplateDocConfig`](../../../../shared/src/types/editor/DocConfig.md#createwithtemplatedocconfig) |
| `appConfig`? | [`BaseEditorAppConfig`](../../../../shared/src/types/editor/AppConfig.md#baseeditorappconfig) |
| `outputParams`? | [`ExportOptions`](../../../../shared/src/types/ExportConfig.md#exportoptions) |
| `containerConfig`? | [`ContainerConfig`](../../../../shared/src/types/ContainerConfig.md#containerconfig) |

###### Returns

`void`

##### edit()

```ts
edit(
   docConfig, 
   appConfig?, 
   outputParams?, 
   containerConfig?): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `docConfig` | [`EditDocConfig`](../../../../shared/src/types/editor/DocConfig.md#editdocconfig) |
| `appConfig`? | [`BaseEditorAppConfig`](../../../../shared/src/types/editor/AppConfig.md#baseeditorappconfig) |
| `outputParams`? | [`ExportOptions`](../../../../shared/src/types/ExportConfig.md#exportoptions) |
| `containerConfig`? | [`ContainerConfig`](../../../../shared/src/types/ContainerConfig.md#containerconfig) |

###### Returns

`void`
