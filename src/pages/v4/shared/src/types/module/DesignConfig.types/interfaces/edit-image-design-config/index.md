# Interface: EditImageDesignConfig

## Extends

- [`DesignConfig`](../../../DesignConfig.types/interfaces/design-config/index.md)

## Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `exportConfig?` | [`ExportOptions`](../../../ExportConfig.types/type-aliases/export-options/index.md) | - | [`DesignConfig`](../../../DesignConfig.types/interfaces/design-config/index.md).`exportConfig` |
| `containerConfig?` | [`ContainerConfig`](../../../ContainerConfig.types/type-aliases/container-config/index.md) | - | [`DesignConfig`](../../../DesignConfig.types/interfaces/design-config/index.md).`containerConfig` |
| `docConfig` | [`TargetDocConfig`](../../../DesignConfig.types/interfaces/target-doc-config/index.md) \| [`EditImageDocConfig`](../../DocConfig.types/interfaces/edit-image-doc-config/index.md) | [`DesignConfig`](../../../DesignConfig.types/interfaces/design-config/index.md).`docConfig` | - |
| `appConfig?` | [`EditImageAppConfig`](../../AppConfig.types/interfaces/edit-image-app-config/index.md) | [`DesignConfig`](../../../DesignConfig.types/interfaces/design-config/index.md).`appConfig` | - |
