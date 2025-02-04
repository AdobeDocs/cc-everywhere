# Interface: TextToImageAppConfig

## Extends

- [`BaseAppConfig`](../../../DesignConfig.types/interfaces/base-app-config/index.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../../../Callbacks.types/interfaces/callbacks/index.md) | - | [`BaseAppConfig`](../../../DesignConfig.types/interfaces/base-app-config/index.md).`callbacks` |
| `headerBarColorTheme?` | [`ColorTheme`](../../../AppConfig.types/enumerations/color-theme/index.md) | Theming options for the TextToImage Editor header bar. **Default** `ColorTheme.LIGHT` | - |
| `editorTitle?` | `string` | Property to configure the title | - |
| `promptText?` | `string` | - | - |
| `imageDimensions?` | [`ImageDimensions`](../../../Asset.types/type-aliases/image-dimensions/index.md) | The dimensions of the image that the user can generate. If provided, the user will be restricted to generating images of the specified dimensions. | - |
| `imageStyleReference?` | [`Asset`](../../../Asset.types/type-aliases/asset/index.md) | Asset to be passed as style reference for generating images | - |
| `imageCompositionReference?` | [`Asset`](../../../Asset.types/type-aliases/asset/index.md) | Asset to be passed as composition reference for generating images | - |
