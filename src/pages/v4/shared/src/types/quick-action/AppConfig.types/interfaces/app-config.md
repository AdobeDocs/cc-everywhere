# Interface: AppConfig

## Extends

- [`BaseAppConfig`](../../../DesignConfig.types/interfaces/base-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../../../Callbacks.types/interfaces/callbacks.md) | - | [`BaseAppConfig`](../../../DesignConfig.types/interfaces/base-app-config.md).`callbacks` |
| `colorTheme?` | [`ColorTheme`](../../../AppConfig.types/enumerations/color-theme.md) | Theming options for the Quick Action Editor **Default** `ColorTheme.LIGHT` | - |
| `spectrumTheme?` | [`SpectrumTheme`](../../../AppConfig.types/enumerations/spectrum-theme.md) | Specifies whether the QA Editor runs in current express theme or legacy spectrum theme. **Default** `SpectrumTheme.EXPRESS` | - |
| `scale?` | [`Scale`](../../../AppConfig.types/enumerations/scale.md) | Set the text scale for QA Editor **Default** `Scale.MEDIUM` | - |
| `receiveTargetErrors?` | `boolean` | Boolean that tells whether to receive target application errors or not to client. **Default** `false` | - |