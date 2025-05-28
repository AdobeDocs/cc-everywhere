# Interface: EditImageDesignConfig

## Extends

- [`DesignConfig`](../../../design-config-types/interfaces/design-config.md)

## Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `exportConfig?` | [`ExportOptions`](../../../export-config-types/type-aliases/export-options.md) | - | [`DesignConfig`](../../../design-config-types/interfaces/design-config.md).`exportConfig` |
| `containerConfig?` | [`ContainerConfig`](../../../container-config-types/type-aliases/container-config.md) | - | [`DesignConfig`](../../../design-config-types/interfaces/design-config.md).`containerConfig` |
| `docConfig` | [`TargetDocConfig`](../../../design-config-types/interfaces/target-doc-config.md) \| [`EditImageDocConfig`](../../doc-config-types/interfaces/edit-image-doc-config.md) | [`DesignConfig`](../../../design-config-types/interfaces/design-config.md).`docConfig` | - |
| `appConfig?` | [`EditImageAppConfig`](../../app-config-types/interfaces/edit-image-app-config.md) | [`DesignConfig`](../../../design-config-types/interfaces/design-config.md).`appConfig` | - |
