[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: AppConfig

## Extends

- [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `useClientAuth?` | `boolean` | Flag to explicitly opt-in to use client authentication. When true, client access token will be fetched from the partner and used in the module. This is only relevant for Edit Image and Text to Image modules. Should not be passed for other workflows. **Default** `false` | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`useClientAuth`](../../../design-config-types/interfaces/base-app-config.md#useclientauth) |
| `callbacks?` | [`Callbacks`](../../../callbacks-types/interfaces/callbacks.md) | - | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`callbacks`](../../../design-config-types/interfaces/base-app-config.md#callbacks) |
| `colorTheme?` | [`ColorTheme`](../../../app-config-types/enumerations/color-theme.md) | Theming options for the Quick Action Editor **Default** `ColorTheme.LIGHT` | - |
| `spectrumTheme?` | [`SpectrumTheme`](../../../app-config-types/enumerations/spectrum-theme.md) | Specifies whether the QA Editor runs in current express theme or legacy spectrum theme. **Default** `SpectrumTheme.EXPRESS` | - |
| `scale?` | [`Scale`](../../../app-config-types/enumerations/scale.md) | Set the text scale for QA Editor **Default** `Scale.MEDIUM` | - |
| `receiveTargetErrors?` | `boolean` | Boolean that tells whether to receive target application errors or not to client. **Default** `false` | - |
