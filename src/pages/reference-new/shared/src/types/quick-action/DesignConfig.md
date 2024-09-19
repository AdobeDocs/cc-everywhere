[**cc-everywhere**](../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../index.md) / shared/src/types/quick-action/DesignConfig.types

# shared/src/types/quick-action/DesignConfig.types

## Interfaces

### BaseDesignConfig

#### Extends

- [`DesignConfig`](../DesignConfig.md#designconfig)

#### Extended by

- [`QuickActionDesignConfig`](DesignConfig.md#quickactiondesignconfig)
- [`MergeVideosDesignConfig`](DesignConfig.md#mergevideosdesignconfig)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `docConfig?` | [`BaseDocConfig`](../DesignConfig.md#basedocconfig) | - | [`DesignConfig`](../DesignConfig.md#designconfig).`docConfig` |
| `exportConfig?` | [`ExportOptions`](../ExportConfig.md#exportoptions) | - | [`DesignConfig`](../DesignConfig.md#designconfig).`exportConfig` |
| `containerConfig?` | [`ContainerConfig`](../ContainerConfig.md#containerconfig) | - | [`DesignConfig`](../DesignConfig.md#designconfig).`containerConfig` |
| `appConfig?` | [`AppConfig`](AppConfig.md#appconfig) | [`DesignConfig`](../DesignConfig.md#designconfig).`appConfig` | - |

***

### QuickActionDesignConfig

#### Extends

- [`BaseDesignConfig`](DesignConfig.md#basedesignconfig)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `exportConfig?` | [`ExportOptions`](../ExportConfig.md#exportoptions) | - | [`BaseDesignConfig`](DesignConfig.md#basedesignconfig).`exportConfig` |
| `containerConfig?` | [`ContainerConfig`](../ContainerConfig.md#containerconfig) | - | [`BaseDesignConfig`](DesignConfig.md#basedesignconfig).`containerConfig` |
| `appConfig?` | [`AppConfig`](AppConfig.md#appconfig) | - | [`BaseDesignConfig`](DesignConfig.md#basedesignconfig).`appConfig` |
| `docConfig?` | [`DocConfig`](DocConfig.md#docconfig) | [`BaseDesignConfig`](DesignConfig.md#basedesignconfig).`docConfig` | - |

***

### MergeVideosDesignConfig

#### Extends

- [`BaseDesignConfig`](DesignConfig.md#basedesignconfig)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `exportConfig?` | [`ExportOptions`](../ExportConfig.md#exportoptions) | - | [`BaseDesignConfig`](DesignConfig.md#basedesignconfig).`exportConfig` |
| `containerConfig?` | [`ContainerConfig`](../ContainerConfig.md#containerconfig) | - | [`BaseDesignConfig`](DesignConfig.md#basedesignconfig).`containerConfig` |
| `appConfig?` | [`AppConfig`](AppConfig.md#appconfig) | - | [`BaseDesignConfig`](DesignConfig.md#basedesignconfig).`appConfig` |
| `docConfig?` | [`MergeVideoDocConfig`](DocConfig.md#mergevideodocconfig) | [`BaseDesignConfig`](DesignConfig.md#basedesignconfig).`docConfig` | - |
