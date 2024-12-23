# Interface: TextToImageAppConfig

## Extends

- [`BaseAppConfig`](../../../DesignConfig.types/interfaces/BaseAppConfig.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../../../Callbacks.types/interfaces/Callbacks.md) | - | [`BaseAppConfig`](../../../DesignConfig.types/interfaces/BaseAppConfig.md).`callbacks` |
| `headerBarColorTheme?` | [`ColorTheme`](../../../AppConfig.types/enumerations/ColorTheme.md) | Theming options for the TextToImage Editor header bar. **Default** `ColorTheme.LIGHT` | - |
| `editorTitle?` | `string` | Property to configure the title | - |
| `promptText?` | `string` | - | - |
| `imageDimensions?` | [`ImageDimensions`](../../../Asset.types/type-aliases/ImageDimensions.md) | The dimensions of the image that the user can generate. If provided, the user will be restricted to generating images of the specified dimensions. | - |
| `imageStyleReference?` | [`Asset`](../../../Asset.types/type-aliases/Asset.md) | Asset to be passed as style reference for generating images | - |
| `imageCompositionReference?` | [`Asset`](../../../Asset.types/type-aliases/Asset.md) | Asset to be passed as composition reference for generating images | - |
