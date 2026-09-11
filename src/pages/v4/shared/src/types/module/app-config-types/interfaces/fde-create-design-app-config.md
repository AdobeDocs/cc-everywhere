---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: FDECreateDesignAppConfig

App config for createDesign (FDE MXP — template browser entry).
`contentBrowseConfig` is browse-only (no preview mode on the FDE template browser).

## Extends

- [`FDEBaseAppConfig`](fde-base-app-config.md).[`TemplateBrowserConfig`](template-browser-config.md)

## Extended by

- [`FDECreateDesignAppConfig`](../../../3p/module/app-config-types/interfaces/fde-create-design-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `colorTheme?` | [`ColorTheme`](../../../app-config-types/enumerations/color-theme.md) | The color theme of the template browser module. **Default** `ColorTheme.LIGHT` | [`TemplateBrowserConfig`](template-browser-config.md).[`colorTheme`](template-browser-config.md#property-colortheme) |
| `spectrumTheme?` | [`SpectrumTheme`](../../../app-config-types/enumerations/spectrum-theme.md) | Specifies whether the module runs in current express theme or legacy spectrum theme. **Default** `SpectrumTheme.EXPRESS` | [`TemplateBrowserConfig`](template-browser-config.md).[`spectrumTheme`](template-browser-config.md#property-spectrumtheme) |
| `hideHeaderBar?` | `boolean` | When `true`, hides the embedded module header bar so the host can provide its own chrome. **Default** `false` | [`TemplateBrowserConfig`](template-browser-config.md).[`hideHeaderBar`](template-browser-config.md#property-hideheaderbar) |
| `appVersion?` | [`V1`](../enumerations/fde-app-version.md#enumeration-member-v1) | FDE experience version for template browser and editor surfaces. **Default** `FDEAppVersion.V1` | [`FDEBaseAppConfig`](fde-base-app-config.md).[`appVersion`](fde-base-app-config.md#property-appversion) |
| `allowedFileTypes?` | ( \| [`JPEG`](../../../asset-types/enumerations/image-file-type.md#enumeration-member-jpeg) \| [`PNG`](../../../asset-types/enumerations/image-file-type.md#enumeration-member-png) \| [`PDF`](../../../asset-types/enumerations/pdf-file-type.md#enumeration-member-pdf))[] | Specify the list of file types that the user can publish. **Default** `Enable all formats (PNG, JPEG and PDF)` | [`FDEBaseAppConfig`](fde-base-app-config.md).[`allowedFileTypes`](fde-base-app-config.md#property-allowedfiletypes) |
| `variant?` | [`ExperienceVariant`](../enumerations/experience-variant.md) | Specifies the experience variant to use when launching the module. **Default** `ExperienceVariant.DEFAULT` | [`FDEBaseAppConfig`](fde-base-app-config.md).[`variant`](fde-base-app-config.md#property-variant) |
| `contentBrowseConfig?` | [`BrowseModeConfig`](browse-mode-config.md) | - | - |
