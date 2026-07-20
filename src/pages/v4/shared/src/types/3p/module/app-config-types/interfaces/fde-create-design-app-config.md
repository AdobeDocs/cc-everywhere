---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../../index.md)

<HorizontalLine />

# Interface: FDECreateDesignAppConfig

App config for 3P.

## See

[BaseAppConfig](../../../../design-config-types/interfaces/base-app-config.md)

## Extends

- [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`FDECreateDesignAppConfig`](../../../../module/app-config-types/interfaces/fde-create-design-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `analyticsData?` | [`BaseAnalyticsData`](../../../../app-config-types/interfaces/base-analytics-data.md) | Property to pass analytics data to the host app | [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`analyticsData`](../../../app-config-types/interfaces/app-config.md#analyticsdata) |
| `useClientAuth?` | `boolean` | Flag to explicitly opt-in to use client authentication. When true, client access token will be fetched from the partner and used in the module. This is only relevant for Edit Image and Text to Image modules. Should not be passed for other workflows. **Default** `false` | [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`useClientAuth`](../../../app-config-types/interfaces/app-config.md#useclientauth) |
| `callbacks?` | [`Callbacks`](../../../../callbacks-types/interfaces/callbacks.md) | - | [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`callbacks`](../../../app-config-types/interfaces/app-config.md#callbacks) |
| `metaData?` | `Record`&lt;`string`, `string`&gt; | Property to pass metadata to target application | [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`metaData`](../../../app-config-types/interfaces/app-config.md#metadata) |
| `colorTheme?` | [`ColorTheme`](../../../../app-config-types/enumerations/color-theme.md) | The color theme of the template browser module. **Default** `ColorTheme.LIGHT` | [`FDECreateDesignAppConfig`](../../../../module/app-config-types/interfaces/fde-create-design-app-config.md).[`colorTheme`](../../../../module/app-config-types/interfaces/fde-create-design-app-config.md#colortheme) |
| `spectrumTheme?` | [`SpectrumTheme`](../../../../app-config-types/enumerations/spectrum-theme.md) | Specifies whether the module runs in current express theme or legacy spectrum theme. **Default** `SpectrumTheme.EXPRESS` | [`FDECreateDesignAppConfig`](../../../../module/app-config-types/interfaces/fde-create-design-app-config.md).[`spectrumTheme`](../../../../module/app-config-types/interfaces/fde-create-design-app-config.md#spectrumtheme) |
| `hideHeaderBar?` | `boolean` | When `true`, hides the embedded module header bar so the host can provide its own chrome. **Default** `false` | [`FDECreateDesignAppConfig`](../../../../module/app-config-types/interfaces/fde-create-design-app-config.md).[`hideHeaderBar`](../../../../module/app-config-types/interfaces/fde-create-design-app-config.md#hideheaderbar) |
| `appVersion?` | [`V1`](../../../../module/app-config-types/enumerations/fde-app-version.md#v1) | FDE experience version for template browser and editor surfaces. **Default** `FDEAppVersion.V1` | [`FDECreateDesignAppConfig`](../../../../module/app-config-types/interfaces/fde-create-design-app-config.md).[`appVersion`](../../../../module/app-config-types/interfaces/fde-create-design-app-config.md#appversion) |
| `allowedFileTypes?` | ( \| [`JPEG`](../../../../asset-types/enumerations/image-file-type.md#jpeg) \| [`PNG`](../../../../asset-types/enumerations/image-file-type.md#png) \| [`PDF`](../../../../asset-types/enumerations/pdf-file-type.md#pdf))[] | Specify the list of file types that the user can publish. **Default** `Enable all formats (PNG, JPEG and PDF)` | [`FDECreateDesignAppConfig`](../../../../module/app-config-types/interfaces/fde-create-design-app-config.md).[`allowedFileTypes`](../../../../module/app-config-types/interfaces/fde-create-design-app-config.md#allowedfiletypes) |
| `variant?` | [`ExperienceVariant`](../../../../module/app-config-types/enumerations/experience-variant.md) | Specifies the experience variant to use when launching the module. **Default** `ExperienceVariant.DEFAULT` | [`FDECreateDesignAppConfig`](../../../../module/app-config-types/interfaces/fde-create-design-app-config.md).[`variant`](../../../../module/app-config-types/interfaces/fde-create-design-app-config.md#variant) |
| `contentBrowseConfig?` | [`BrowseModeConfig`](../../../../module/app-config-types/interfaces/browse-mode-config.md) | - | [`FDECreateDesignAppConfig`](../../../../module/app-config-types/interfaces/fde-create-design-app-config.md).[`contentBrowseConfig`](../../../../module/app-config-types/interfaces/fde-create-design-app-config.md#contentbrowseconfig) |
