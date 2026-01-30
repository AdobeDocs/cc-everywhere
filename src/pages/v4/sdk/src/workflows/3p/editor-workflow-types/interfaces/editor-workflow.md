---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: EditorWorkflow

## Methods

### create()

```ts
create(
   docConfig?, 
   appConfig?, 
   outputParams?, 
   containerConfig?): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `docConfig?` | [`CreateDocConfig`](../../../../../../shared/src/types/editor/doc-config-types/interfaces/create-doc-config.md) |
| `appConfig?` | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/app-config-types/interfaces/base-editor-app-config.md) |
| `outputParams?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) |

#### Returns

`void`

<HorizontalLine />

### createWithAsset()

```ts
createWithAsset(
   docConfig, 
   appConfig?, 
   outputParams?, 
   containerConfig?): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `docConfig` | [`CreateWithAssetDocConfig`](../../../../../../shared/src/types/editor/doc-config-types/interfaces/create-with-asset-doc-config.md) |
| `appConfig?` | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/app-config-types/interfaces/base-editor-app-config.md) |
| `outputParams?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) |

#### Returns

`void`

<HorizontalLine />

### createWithTemplate()

```ts
createWithTemplate(
   docConfig, 
   appConfig?, 
   outputParams?, 
   containerConfig?): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `docConfig` | [`CreateWithTemplateDocConfig`](../../../../../../shared/src/types/editor/doc-config-types/interfaces/create-with-template-doc-config.md) |
| `appConfig?` | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/app-config-types/interfaces/base-editor-app-config.md) |
| `outputParams?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) |

#### Returns

`void`

<HorizontalLine />

### edit()

```ts
edit(
   docConfig, 
   appConfig?, 
   outputParams?, 
   containerConfig?): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `docConfig` | [`EditDocConfig`](../../../../../../shared/src/types/editor/doc-config-types/interfaces/edit-doc-config.md) |
| `appConfig?` | [`BaseEditorAppConfig`](../../../../../../shared/src/types/editor/app-config-types/interfaces/base-editor-app-config.md) |
| `outputParams?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) |

#### Returns

`void`
