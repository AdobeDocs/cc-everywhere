---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: IntentChangeConfig

Optional configuration returned when the user navigates from one design workflow to another.
Used by [IntentChangeCallback](../type-aliases/intent-change-callback.md) to dynamically update app, export, or container config.

## See

 - [IntentChangeCallback](../type-aliases/intent-change-callback.md) for when this is returned
 - [BaseAppConfig](../../design-config-types/interfaces/base-app-config.md), [ExportConfig](../../export-config-types/type-aliases/export-config.md), [ContainerConfig](../../container-config-types/type-aliases/container-config.md) for the config types

## Properties

| Property | Type |
| ------ | ------ |
| `appConfig?` | [`BaseAppConfig`](../../design-config-types/interfaces/base-app-config.md) |
| `exportConfig?` | [`ExportOptions`](../../export-config-types/type-aliases/export-options.md) |
| `containerConfig?` | [`ContainerConfig`](../../container-config-types/type-aliases/container-config.md) |
