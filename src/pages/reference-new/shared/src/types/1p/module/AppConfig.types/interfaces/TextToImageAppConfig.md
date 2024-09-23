[**cc-everywhere**](../../../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../../../index.md) / [shared/src/types/1p/module/AppConfig.types](../index.md) / TextToImageAppConfig

# Interface: TextToImageAppConfig

## Extends

- `AppConfig`.[`TextToImageAppConfig`](../../../../module/AppConfig.types/interfaces/TextToImageAppConfig.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `colorTheme?` | [`ColorTheme`](../../../../AppConfig.types/enumerations/ColorTheme.md) | Theming options for the Quick Action Editor **Default** [[`ColorTheme.LIGHT`]] | - |
| `spectrumTheme?` | [`SpectrumTheme`](../../../../AppConfig.types/enumerations/SpectrumTheme.md) | Specifies whether the QA Editor runs in current express theme or legacy spectrum theme. **Default** [[`SpectrumTheme.EXPRESS`]] | - |
| `callbacks?` | [`Callbacks`](../../../../Callbacks.types/interfaces/Callbacks.md) | - | [`TextToImageAppConfig`](../../../../module/AppConfig.types/interfaces/TextToImageAppConfig.md).`callbacks` |
| `headerBarColorTheme?` | [`ColorTheme`](../../../../AppConfig.types/enumerations/ColorTheme.md) | Theming options for the TextToImage Editor header bar. **Default** [[`ColorTheme.LIGHT`]] | [`TextToImageAppConfig`](../../../../module/AppConfig.types/interfaces/TextToImageAppConfig.md).`headerBarColorTheme` |
| `promptText?` | `string` | - | [`TextToImageAppConfig`](../../../../module/AppConfig.types/interfaces/TextToImageAppConfig.md).`promptText` |
