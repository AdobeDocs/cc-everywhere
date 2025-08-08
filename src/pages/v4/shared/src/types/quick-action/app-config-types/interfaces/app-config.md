[**cc-everywhere**](../../../../../../index.md)

***

# Interface: AppConfig

## Extends

- [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="callbacks"></a> `callbacks?` | [`Callbacks`](../../../callbacks-types/interfaces/callbacks.md) | - | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`callbacks`](../../../design-config-types/interfaces/base-app-config.md#callbacks) |
| <a id="colortheme"></a> `colorTheme?` | [`ColorTheme`](../../../app-config-types/enumerations/color-theme.md) | Theming options for the Quick Action Editor **Default** `ColorTheme.LIGHT` | - |
| <a id="spectrumtheme"></a> `spectrumTheme?` | [`SpectrumTheme`](../../../app-config-types/enumerations/spectrum-theme.md) | Specifies whether the QA Editor runs in current express theme or legacy spectrum theme. **Default** `SpectrumTheme.EXPRESS` | - |
| <a id="scale"></a> `scale?` | [`Scale`](../../../app-config-types/enumerations/scale.md) | Set the text scale for QA Editor **Default** `Scale.MEDIUM` | - |
| <a id="receivetargeterrors"></a> `receiveTargetErrors?` | `boolean` | Boolean that tells whether to receive target application errors or not to client. **Default** `false` | - |
