[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / shared/src/types/1p/module/AppConfig.types

# shared/src/types/1p/module/AppConfig.types

## Interfaces

### TextToImageAppConfig

#### Extends

- `AppConfig`.[`TextToImageAppConfig`](../../module/AppConfig.md#texttoimageappconfig)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `colorTheme?` | [`ColorTheme`](../../AppConfig.md#colortheme) | Theming options for the Quick Action Editor **Default** [[`ColorTheme.LIGHT`]] | - |
| `spectrumTheme?` | [`SpectrumTheme`](../../AppConfig.md#spectrumtheme) | Specifies whether the QA Editor runs in current express theme or legacy spectrum theme. **Default** [[`SpectrumTheme.EXPRESS`]] | - |
| `callbacks?` | [`Callbacks`](../../Callbacks.md#callbacks) | - | [`TextToImageAppConfig`](../../module/AppConfig.md#texttoimageappconfig).`callbacks` |
| `headerBarColorTheme?` | [`ColorTheme`](../../AppConfig.md#colortheme) | Theming options for the TextToImage Editor header bar. **Default** [[`ColorTheme.LIGHT`]] | [`TextToImageAppConfig`](../../module/AppConfig.md#texttoimageappconfig).`headerBarColorTheme` |
| `promptText?` | `string` | - | [`TextToImageAppConfig`](../../module/AppConfig.md#texttoimageappconfig).`promptText` |

***

### EditImageAppConfig

#### Extends

- `AppConfig`.[`EditImageAppConfig`](../../module/AppConfig.md#editimageappconfig)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `publishModalTitle?` | `string` | Property to configure the Publish Modal title | - |
| `colorTheme?` | [`ColorTheme`](../../AppConfig.md#colortheme) | Theming options for the Quick Action Editor **Default** [[`ColorTheme.LIGHT`]] | - |
| `spectrumTheme?` | [`SpectrumTheme`](../../AppConfig.md#spectrumtheme) | Specifies whether the QA Editor runs in current express theme or legacy spectrum theme. **Default** [[`SpectrumTheme.EXPRESS`]] | - |
| `callbacks?` | [`Callbacks`](../../Callbacks.md#callbacks) | - | [`EditImageAppConfig`](../../module/AppConfig.md#editimageappconfig).`callbacks` |
| `allowedFileTypes?` | (`JPEG` \| `PNG` \| `PDF`)[] | Specify the list of file types that the user can publish. This can be used to limit the publish options as per file types for end users. **Default** `Enable all formats (PNG, JPEG, and PDF)` | [`EditImageAppConfig`](../../module/AppConfig.md#editimageappconfig).`allowedFileTypes` |
