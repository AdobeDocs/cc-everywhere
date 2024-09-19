[**cc-everywhere**](../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../index.md) / shared/src/types/module/DesignConfig.types

# shared/src/types/module/DesignConfig.types

## Interfaces

### EditImageDesignConfig

#### Extends

- [`DesignConfig`](../DesignConfig.md#designconfig)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `exportConfig?` | [`ExportOptions`](../ExportConfig.md#exportoptions) | - | [`DesignConfig`](../DesignConfig.md#designconfig).`exportConfig` |
| `containerConfig?` | [`ContainerConfig`](../ContainerConfig.md#containerconfig) | - | [`DesignConfig`](../DesignConfig.md#designconfig).`containerConfig` |
| `docConfig` | [`TargetDocConfig`](../DesignConfig.md#targetdocconfig) \| [`EditImageDocConfig`](DocConfig.md#editimagedocconfig) | [`DesignConfig`](../DesignConfig.md#designconfig).`docConfig` | - |
| `appConfig?` | [`EditImageAppConfig`](AppConfig.md#editimageappconfig) | [`DesignConfig`](../DesignConfig.md#designconfig).`appConfig` | - |

***

### TextToImageDesignConfig

#### Extends

- [`DesignConfig`](../DesignConfig.md#designconfig)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `docConfig?` | [`BaseDocConfig`](../DesignConfig.md#basedocconfig) | - | [`DesignConfig`](../DesignConfig.md#designconfig).`docConfig` |
| `exportConfig?` | [`ExportOptions`](../ExportConfig.md#exportoptions) | - | [`DesignConfig`](../DesignConfig.md#designconfig).`exportConfig` |
| `containerConfig?` | [`ContainerConfig`](../ContainerConfig.md#containerconfig) | - | [`DesignConfig`](../DesignConfig.md#designconfig).`containerConfig` |
| `appConfig?` | [`TextToImageAppConfig`](AppConfig.md#texttoimageappconfig) | [`DesignConfig`](../DesignConfig.md#designconfig).`appConfig` | - |

***

### WarmupDesignConfig

#### Extends

- [`DesignConfig`](../DesignConfig.md#designconfig)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `docConfig?` | [`BaseDocConfig`](../DesignConfig.md#basedocconfig) | - | [`DesignConfig`](../DesignConfig.md#designconfig).`docConfig` |
| `exportConfig?` | [`ExportOptions`](../ExportConfig.md#exportoptions) | - | [`DesignConfig`](../DesignConfig.md#designconfig).`exportConfig` |
| `containerConfig?` | [`ContainerConfig`](../ContainerConfig.md#containerconfig) | - | [`DesignConfig`](../DesignConfig.md#designconfig).`containerConfig` |
| `appConfig?` | [`WarmupAppConfig`](AppConfig.md#warmupappconfig) | [`DesignConfig`](../DesignConfig.md#designconfig).`appConfig` | - |
