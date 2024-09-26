[cc-everywhere](../../../../../../index.md) / [shared/src/types/quick-action/AppConfig.types](../index.md) / AppConfig

# Interface: AppConfig

## Extends

- [`BaseAppConfig`](../../../DesignConfig.types/interfaces/BaseAppConfig.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../../../Callbacks.types/interfaces/Callbacks.md) | - | [`BaseAppConfig`](../../../DesignConfig.types/interfaces/BaseAppConfig.md).`callbacks` |
| `colorTheme?` | [`ColorTheme`](../../../AppConfig.types/enumerations/ColorTheme.md) | Theming options for the Quick Action Editor **Default** `ColorTheme.LIGHT` | - |
| `spectrumTheme?` | [`SpectrumTheme`](../../../AppConfig.types/enumerations/SpectrumTheme.md) | Specifies whether the QA Editor runs in current express theme or legacy spectrum theme. **Default** `SpectrumTheme.EXPRESS` | - |
| `scale?` | [`Scale`](../../../AppConfig.types/enumerations/Scale.md) | Set the text scale for QA Editor **Default** `Scale.MEDIUM` | - |
| `receiveTargetErrors?` | `boolean` | Boolean that tells whether to receive target application errors or not to client. **Default** `false` | - |
