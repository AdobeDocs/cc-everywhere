---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: StartFromContentAppConfig

StartFromContentAppConfig is the app config for the Start From Content module.

## Extends

- [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`TemplateBrowserConfig`](template-browser-config.md).[`ColorThemeAppConfig`](../../../design-config-types/interfaces/color-theme-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `useClientAuth?` | `boolean` | Flag to explicitly opt-in to use client authentication. When true, client access token will be fetched from the partner and used in the module. This is only relevant for Edit Image and Text to Image modules. Should not be passed for other workflows. **Default** `false` | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`useClientAuth`](../../../design-config-types/interfaces/base-app-config.md#property-useclientauth) |
| `callbacks?` | [`Callbacks`](../../../callbacks-types/interfaces/callbacks.md) | - | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`callbacks`](../../../design-config-types/interfaces/base-app-config.md#property-callbacks) |
| `metaData?` | `Record`&lt;`string`, `string`&gt; | Property to pass metadata to target application | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`metaData`](../../../design-config-types/interfaces/base-app-config.md#property-metadata) |
| `colorTheme?` | [`ColorTheme`](../../../app-config-types/enumerations/color-theme.md) | The color theme of the template browser module. **Default** `ColorTheme.LIGHT` | [`TemplateBrowserConfig`](template-browser-config.md).[`colorTheme`](template-browser-config.md#property-colortheme) |
| `spectrumTheme?` | [`SpectrumTheme`](../../../app-config-types/enumerations/spectrum-theme.md) | Specifies whether the module runs in current express theme or legacy spectrum theme. **Default** `SpectrumTheme.EXPRESS` | [`TemplateBrowserConfig`](template-browser-config.md).[`spectrumTheme`](template-browser-config.md#property-spectrumtheme) |
| `hideHeaderBar?` | `boolean` | When `true`, hides the embedded module header bar so the host can provide its own chrome. **Default** `false` | [`TemplateBrowserConfig`](template-browser-config.md).[`hideHeaderBar`](template-browser-config.md#property-hideheaderbar) |
| `contentBrowseConfig?` | \| [`BrowseModeConfig`](browse-mode-config.md) \| [`PreviewModeConfig`](preview-mode-config.md) | Browse or preview mode configuration. Browse (default): template gallery. Preview: jump directly to a specific template. | - |
| `appVersion?` | [`StartFromContentAppVersion`](../enumerations/start-from-content-app-version.md) | Experience version. - 1 (default): Single browse/preview surface via contentBrowseConfig. - 2: Tabbed Template Browser with Custom Templates, Your Stuff, and (future) Express Templates. **Default** `V1` | - |
| `templatesHomeConfig?` | [`TemplatesHomeConfig`](templates-home-config.md) | V2 only. Tabbed browser configuration. Ignored when appVersion is 1 or absent. | - |
