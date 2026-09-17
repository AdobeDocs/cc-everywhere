---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: AppConfig

Workflows that accept host `colorTheme` (SDK forwards as HZ `theme` query param when set).
Extend on workflow-specific AppConfig types; SDK reads via getColorThemeFromAppConfig.

## Extends

- [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`ColorThemeAppConfig`](../../../design-config-types/interfaces/color-theme-app-config.md)

## Properties

| Property | Type | Description | Overrides | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| `useClientAuth?` | `boolean` | Flag to explicitly opt-in to use client authentication. When true, client access token will be fetched from the partner and used in the module. This is only relevant for Edit Image and Text to Image modules. Should not be passed for other workflows. **Default** `false` | - | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`useClientAuth`](../../../design-config-types/interfaces/base-app-config.md#property-useclientauth) |
| `callbacks?` | [`Callbacks`](../../../callbacks-types/interfaces/callbacks.md) | - | - | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`callbacks`](../../../design-config-types/interfaces/base-app-config.md#property-callbacks) |
| `metaData?` | `Record`&lt;`string`, `string`&gt; | Property to pass metadata to target application | - | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`metaData`](../../../design-config-types/interfaces/base-app-config.md#property-metadata) |
| `colorTheme?` | [`ColorTheme`](../../../app-config-types/enumerations/color-theme.md) | Theming options for the Quick Action Editor **Default** `ColorTheme.LIGHT` | [`ColorThemeAppConfig`](../../../design-config-types/interfaces/color-theme-app-config.md).[`colorTheme`](../../../design-config-types/interfaces/color-theme-app-config.md#property-colortheme) | - |
| `spectrumTheme?` | [`SpectrumTheme`](../../../app-config-types/enumerations/spectrum-theme.md) | Specifies whether the QA Editor runs in current express theme or legacy spectrum theme. **Default** `SpectrumTheme.EXPRESS` | - | - |
| `scale?` | [`Scale`](../../../app-config-types/enumerations/scale.md) | Set the text scale for QA Editor **Default** `Scale.MEDIUM` | - | - |
| `receiveTargetErrors?` | `boolean` | Boolean that tells whether to receive target application errors or not to client. **Default** `false` | - | - |
