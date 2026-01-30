---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: StartFromContentAppConfig

StartFromContentAppConfig is the app config for the Start From Content module.

## Extends

- [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `useClientAuth?` | `boolean` | Flag to explicitly opt-in to use client authentication. When true, client access token will be fetched from the partner and used in the module. This is only relevant for Edit Image and Text to Image modules. Should not be passed for other workflows. **Default** `false` | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`useClientAuth`](../../../design-config-types/interfaces/base-app-config.md#useclientauth) |
| `callbacks?` | [`Callbacks`](../../../callbacks-types/interfaces/callbacks.md) | - | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`callbacks`](../../../design-config-types/interfaces/base-app-config.md#callbacks) |
| `metaData?` | `Record`&lt;`string`, `string`&gt; | Property to pass metadata to target application | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`metaData`](../../../design-config-types/interfaces/base-app-config.md#metadata) |
| `colorTheme?` | [`ColorTheme`](../../../app-config-types/enumerations/color-theme.md) | The color theme of the Start From Content module. SFC supports light and dark themes. **Default** `ColorTheme.LIGHT` | - |
| `contentBrowseConfig?` | [`ContentBrowseConfig`](content-browse-config.md) | - | - |
