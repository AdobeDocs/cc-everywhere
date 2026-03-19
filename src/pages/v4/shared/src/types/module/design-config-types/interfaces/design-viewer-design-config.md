---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: DesignViewerDesignConfig

DesignViewerDesignConfig is the design config for the Design Viewer module.

## Extends

- [`DesignConfig`](../../../design-config-types/interfaces/design-config.md)

## Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `exportConfig?` | [`ExportOptions`](../../../export-config-types/type-aliases/export-options.md) | - | [`DesignConfig`](../../../design-config-types/interfaces/design-config.md).[`exportConfig`](../../../design-config-types/interfaces/design-config.md#exportconfig) |
| `containerConfig?` | [`ContainerConfig`](../../../container-config-types/type-aliases/container-config.md) | - | [`DesignConfig`](../../../design-config-types/interfaces/design-config.md).[`containerConfig`](../../../design-config-types/interfaces/design-config.md#containerconfig) |
| `docConfig` | [`DesignViewerDocConfig`](../../doc-config-types/interfaces/design-viewer-doc-config.md) | [`DesignConfig`](../../../design-config-types/interfaces/design-config.md).[`docConfig`](../../../design-config-types/interfaces/design-config.md#docconfig) | - |
| `appConfig?` | [`DesignViewerAppConfig`](../../app-config-types/interfaces/design-viewer-app-config.md) | [`DesignConfig`](../../../design-config-types/interfaces/design-config.md).[`appConfig`](../../../design-config-types/interfaces/design-config.md#appconfig) | - |
