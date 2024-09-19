[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/types/DesignConfig.types

# shared/src/types/DesignConfig.types

## Interfaces

### BaseDocConfig

#### Extended by

- [`CreateDocConfig`](editor/DocConfig.md#createdocconfig)
- [`CreateWithTemplateDocConfig`](editor/DocConfig.md#createwithtemplatedocconfig)
- [`EditDocConfig`](editor/DocConfig.md#editdocconfig)
- [`EditImageDocConfig`](module/DocConfig.md#editimagedocconfig)
- [`DocConfig`](quick-action/DocConfig.md#docconfig)
- [`MergeVideoDocConfig`](quick-action/DocConfig.md#mergevideodocconfig)

***

### TargetDocConfig

#### Properties

| Property | Type |
| ------ | ------ |
| `url` | `string` |

***

### BaseAppConfig

#### Extended by

- [`BaseEditorAppConfig`](editor/AppConfig.md#baseeditorappconfig)
- [`TextToImageAppConfig`](module/AppConfig.md#texttoimageappconfig)
- [`WarmupAppConfig`](module/AppConfig.md#warmupappconfig)
- [`AppConfig`](quick-action/AppConfig.md#appconfig)

#### Properties

| Property | Type |
| ------ | ------ |
| `callbacks?` | [`Callbacks`](Callbacks.md#callbacks) |

***

### DesignConfig

#### Extended by

- [`EditImageDesignConfig`](module/DesignConfig.md#editimagedesignconfig)
- [`TextToImageDesignConfig`](module/DesignConfig.md#texttoimagedesignconfig)
- [`WarmupDesignConfig`](module/DesignConfig.md#warmupdesignconfig)
- [`BaseDesignConfig`](quick-action/DesignConfig.md#basedesignconfig)

#### Properties

| Property | Type |
| ------ | ------ |
| `docConfig?` | [`BaseDocConfig`](DesignConfig.md#basedocconfig) |
| `appConfig?` | [`BaseAppConfig`](DesignConfig.md#baseappconfig) |
| `exportConfig?` | [`ExportOptions`](ExportConfig.md#exportoptions) |
| `containerConfig?` | [`ContainerConfig`](ContainerConfig.md#containerconfig) |
