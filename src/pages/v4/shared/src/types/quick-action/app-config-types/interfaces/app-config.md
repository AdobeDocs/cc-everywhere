[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: AppConfig

## Extends

- [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../../../callbacks-types/interfaces/callbacks.md) | - | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`callbacks`](../../../design-config-types/interfaces/base-app-config.md#callbacks) |
| `colorTheme?` | [`ColorTheme`](../../../app-config-types/enumerations/color-theme.md) | Theming options for the Quick Action Editor **Default** `ColorTheme.LIGHT` | - |
| `spectrumTheme?` | [`SpectrumTheme`](../../../app-config-types/enumerations/spectrum-theme.md) | Specifies whether the QA Editor runs in current express theme or legacy spectrum theme. **Default** `SpectrumTheme.EXPRESS` | - |
| `scale?` | [`Scale`](../../../app-config-types/enumerations/scale.md) | Set the text scale for QA Editor **Default** `Scale.MEDIUM` | - |
| `receiveTargetErrors?` | `boolean` | Boolean that tells whether to receive target application errors or not to client. **Default** `false` | - |
