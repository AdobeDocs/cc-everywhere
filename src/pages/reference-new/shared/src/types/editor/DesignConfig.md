[**cc-everywhere**](../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../index.md) / shared/src/types/editor/DesignConfig.types

# shared/src/types/editor/DesignConfig.types

## Interfaces

### CreateDesignConfig

#### Extends

- `EditorDesignConfig`

#### Extended by

- [`CreateDesignConfig`](../1p/editor/DesignConfig.md#createdesignconfig)
- [`CreateDesignConfig`](../3p/editor/DesignConfig.md#createdesignconfig)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `exportConfig?` | [`ExportOptions`](../ExportConfig.md#exportoptions) | - | `EditorDesignConfig.exportConfig` |
| `containerConfig?` | [`ContainerConfig`](../ContainerConfig.md#containerconfig) | - | `EditorDesignConfig.containerConfig` |
| `appConfig?` | [`AppConfig`](AppConfig.md#appconfig) | - | `EditorDesignConfig.appConfig` |
| `docConfig?` | [`TargetDocConfig`](../DesignConfig.md#targetdocconfig) \| [`CreateDocConfig`](DocConfig.md#createdocconfig) | `EditorDesignConfig.docConfig` | - |

***

### CreateWithAssetDesignConfig

#### Extends

- `EditorDesignConfig`

#### Extended by

- [`CreateWithAssetDesignConfig`](../1p/editor/DesignConfig.md#createwithassetdesignconfig)
- [`CreateWithAssetDesignConfig`](../3p/editor/DesignConfig.md#createwithassetdesignconfig)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `exportConfig?` | [`ExportOptions`](../ExportConfig.md#exportoptions) | - | `EditorDesignConfig.exportConfig` |
| `containerConfig?` | [`ContainerConfig`](../ContainerConfig.md#containerconfig) | - | `EditorDesignConfig.containerConfig` |
| `appConfig?` | [`AppConfig`](AppConfig.md#appconfig) | - | `EditorDesignConfig.appConfig` |
| `docConfig` | [`CreateWithAssetDocConfig`](DocConfig.md#createwithassetdocconfig) | `EditorDesignConfig.docConfig` | - |

***

### CreateWithTemplateDesignConfig

#### Extends

- `EditorDesignConfig`

#### Extended by

- [`CreateWithTemplateDesignConfig`](../1p/editor/DesignConfig.md#createwithtemplatedesignconfig)
- [`CreateWithTemplateDesignConfig`](../3p/editor/DesignConfig.md#createwithtemplatedesignconfig)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `exportConfig?` | [`ExportOptions`](../ExportConfig.md#exportoptions) | - | `EditorDesignConfig.exportConfig` |
| `containerConfig?` | [`ContainerConfig`](../ContainerConfig.md#containerconfig) | - | `EditorDesignConfig.containerConfig` |
| `appConfig?` | [`AppConfig`](AppConfig.md#appconfig) | - | `EditorDesignConfig.appConfig` |
| `docConfig` | [`CreateWithTemplateDocConfig`](DocConfig.md#createwithtemplatedocconfig) | `EditorDesignConfig.docConfig` | - |

***

### EditDesignConfig

#### Extends

- `EditorDesignConfig`

#### Extended by

- [`EditDesignConfig`](../1p/editor/DesignConfig.md#editdesignconfig)
- [`EditDesignConfig`](../3p/editor/DesignConfig.md#editdesignconfig)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `exportConfig?` | [`ExportOptions`](../ExportConfig.md#exportoptions) | - | `EditorDesignConfig.exportConfig` |
| `containerConfig?` | [`ContainerConfig`](../ContainerConfig.md#containerconfig) | - | `EditorDesignConfig.containerConfig` |
| `appConfig?` | [`AppConfig`](AppConfig.md#appconfig) | - | `EditorDesignConfig.appConfig` |
| `docConfig` | [`EditDocConfig`](DocConfig.md#editdocconfig) | `EditorDesignConfig.docConfig` | - |

## Type Aliases

### DesignConfig

```ts
type DesignConfig: CreateDesignConfig | EditDesignConfig | CreateWithAssetDesignConfig | CreateWithTemplateDesignConfig;
```
