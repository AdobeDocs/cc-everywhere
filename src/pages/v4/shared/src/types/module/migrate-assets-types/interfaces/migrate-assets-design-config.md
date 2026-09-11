---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: MigrateAssetsDesignConfig

Internal design config for the headless asset-migration action. Not part of
the public API surface — assembled internally from the `documentIds` array.
`appConfig`, `exportConfig` and `containerConfig` are always undefined.

## See

[MigrateAssetsDocConfig](migrate-assets-doc-config.md) for the carried document ids.

## Extends

- [`DesignConfig`](../../../design-config-types/interfaces/design-config.md)

## Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `appConfig?` | \| `AppConfig` \| [`AppConfig`](../../../3p/app-config-types/interfaces/app-config.md) | - | [`DesignConfig`](../../../design-config-types/interfaces/design-config.md).[`appConfig`](../../../design-config-types/interfaces/design-config.md#property-appconfig) |
| `exportConfig?` | [`ExportOptions`](../../../export-config-types/type-aliases/export-options.md) | - | [`DesignConfig`](../../../design-config-types/interfaces/design-config.md).[`exportConfig`](../../../design-config-types/interfaces/design-config.md#property-exportconfig) |
| `containerConfig?` | [`ContainerConfig`](../../../container-config-types/type-aliases/container-config.md) | - | [`DesignConfig`](../../../design-config-types/interfaces/design-config.md).[`containerConfig`](../../../design-config-types/interfaces/design-config.md#property-containerconfig) |
| `docConfig` | [`MigrateAssetsDocConfig`](migrate-assets-doc-config.md) | [`DesignConfig`](../../../design-config-types/interfaces/design-config.md).[`docConfig`](../../../design-config-types/interfaces/design-config.md#property-docconfig) | - |
