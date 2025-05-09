# Interface: AppConfig

## Extends

- [`BaseAppConfig`](../../../DesignConfig.types/interfaces/base-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../../../Callbacks.types/interfaces/Callbacks.md) | - | [`BaseAppConfig`](../../../DesignConfig.types/interfaces/BaseAppConfig.md).`callbacks` |
| `analyticsData?` | [`BaseAnalyticsData`](../../../AppConfig.types/type-aliases/base-analytics-data.md) | Analytics data that can be provided by the host app | [`BaseAppConfig`](../../../DesignConfig.types/interfaces/BaseAppConfig.md).`analyticsData` |
| `colorTheme?` | [`ColorTheme`](../../../AppConfig.types/enumerations/ColorTheme.md) | Theming options for the Quick Action Editor **Default** `ColorTheme.LIGHT` | - |
| `spectrumTheme?` | [`SpectrumTheme`](../../../AppConfig.types/enumerations/SpectrumTheme.md) | Specifies whether the QA Editor runs in current express theme or legacy spectrum theme. **Default** `SpectrumTheme.EXPRESS` | - |
| `scale?` | [`Scale`](../../../AppConfig.types/enumerations/Scale.md) | Set the text scale for QA Editor **Default** `Scale.MEDIUM` | - |
| `receiveTargetErrors?` | `boolean` | Boolean that tells whether to receive target application errors or not to client. **Default** `false` | - |
