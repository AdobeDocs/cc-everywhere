[**cc-everywhere**](../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../index.md) / shared/src/types/quick-action/AppConfig.types

# shared/src/types/quick-action/AppConfig.types

## Interfaces

### AppConfig

#### Extends

- [`BaseAppConfig`](../DesignConfig.md#baseappconfig)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../Callbacks.md#callbacks) | - | [`BaseAppConfig`](../DesignConfig.md#baseappconfig).`callbacks` |
| `colorTheme?` | [`ColorTheme`](../AppConfig.md#colortheme) | Theming options for the Quick Action Editor **Default** [[`ColorTheme.LIGHT`]] | - |
| `spectrumTheme?` | [`SpectrumTheme`](../AppConfig.md#spectrumtheme) | Specifies whether the QA Editor runs in current express theme or legacy spectrum theme. **Default** [[`SpectrumTheme.EXPRESS`]] | - |
| `scale?` | [`Scale`](../AppConfig.md#scale) | Set the text scale for QA Editor **Default** [[`Scale.MEDIUM`]] | - |
| `receiveTargetErrors?` | `boolean` | Boolean that tells whether to receive target application errors or not to client. **Default** `false` | - |
