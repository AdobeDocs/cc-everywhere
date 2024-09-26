[cc-everywhere](../../../../../../../index.md) / [shared/src/types/1p/module/AppConfig.types](../index.md) / EditImageAppConfig

# Interface: EditImageAppConfig

## Extends

- `AppConfig`.[`EditImageAppConfig`](../../../../module/AppConfig.types/interfaces/EditImageAppConfig.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `publishModalTitle?` | `string` | Property to configure the Publish Modal title | - |
| `colorTheme?` | [`ColorTheme`](../../../../AppConfig.types/enumerations/ColorTheme.md) | Theming options for the Quick Action Editor **Default** `ColorTheme.LIGHT` | - |
| `spectrumTheme?` | [`SpectrumTheme`](../../../../AppConfig.types/enumerations/SpectrumTheme.md) | Specifies whether the QA Editor runs in current express theme or legacy spectrum theme. **Default** `SpectrumTheme.EXPRESS` | - |
| `callbacks?` | [`Callbacks`](../../../../Callbacks.types/interfaces/Callbacks.md) | - | [`EditImageAppConfig`](../../../../module/AppConfig.types/interfaces/EditImageAppConfig.md).`callbacks` |
| `allowedFileTypes?` | (`JPEG` \| `PNG` \| `PDF`)[] | Specify the list of file types that the user can publish. This can be used to limit the publish options as per file types for end users. **Default** `Enable all formats (PNG, JPEG, and PDF)` | [`EditImageAppConfig`](../../../../module/AppConfig.types/interfaces/EditImageAppConfig.md).`allowedFileTypes` |
