# Interface: EditImageDesignConfig

## Extends

- [`DesignConfig`](../../../DesignConfig.types/interfaces/design-config.md)

## Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `exportConfig?` | [`ExportOptions`](../../../ExportConfig.types/type-aliases/export-options.md) | - | [`DesignConfig`](../../../DesignConfig.types/interfaces/design-config.md).`exportConfig` |
| `containerConfig?` | [`ContainerConfig`](../../../ContainerConfig.types/type-aliases/container-config.md) | - | [`DesignConfig`](../../../DesignConfig.types/interfaces/design-config.md).`containerConfig` |
| `docConfig` | [`TargetDocConfig`](../../../DesignConfig.types/interfaces/target-doc-config.md) \| [`EditImageDocConfig`](../../DocConfig.types/interfaces/edit-image-doc-config.md) | [`DesignConfig`](../../../DesignConfig.types/interfaces/design-config.md).`docConfig` | - |
| `appConfig?` | [`EditImageAppConfig`](../../AppConfig.types/interfaces/edit-image-app-config.md) | [`DesignConfig`](../../../DesignConfig.types/interfaces/design-config.md).`appConfig` | - |
