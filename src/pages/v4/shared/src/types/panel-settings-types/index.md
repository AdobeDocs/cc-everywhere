[**cc-everywhere**](../../../../index.md)

<HorizontalLine />

# shared/src/types/PanelSettings.types

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [ImageContentType](enumerations/image-content-type.md) | Defines the primary content type for image generation. Choose from photo, graphic, or art to set the overall approach for your generated image. |
| [ImageThemeStyle](enumerations/image-theme-style.md) | Sets the artistic theme and visual direction for your generated image. These themes create distinct visual styles that define the overall mood and aesthetic. |
| [ImageTechniqueStyle](enumerations/image-technique-style.md) | Controls the artistic technique and rendering method for your image. These techniques define how the visual effect is created, similar to traditional art methods. |
| [ImageEffectStyle](enumerations/image-effect-style.md) | Adds visual effects and filters to enhance your image. These effects provide special enhancements and atmospheric qualities. |
| [ImageMovementStyle](enumerations/image-movement-style.md) | Applies artistic movements and cultural styles to your image. These styles draw from various art movements and cultural aesthetics for inspiration. |
| [ImageMaterialStyle](enumerations/image-material-style.md) | Simulates different materials and textures for your image elements. These styles create the appearance of various physical materials and their characteristics. |
| [ImageConceptStyle](enumerations/image-concept-style.md) | Sets the conceptual mood and emotional tone for your image. These styles define the abstract feeling or conceptual approach that guides the image. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [BasePanelSetting](interfaces/base-panel-setting.md) | Base setting interface that all settings should extend. Provides common properties for value. |
| [StyleSetting](interfaces/style-setting.md) | Represents the configuration for panel styles. Extends BasePanelSetting, with the value being an array of StyleId enums. Used to specify which styles (themes, techniques, etc.) are applied in the panel. |
| [ContentTypeSetting](interfaces/content-type-setting.md) | Represents the configuration for the content type setting in the panel. Extends BasePanelSetting, with the value being a ImageContentType enum. Used to specify the type of content to be generated (e.g., photo, graphic, art). |
| [PanelSettings](interfaces/panel-settings.md) | Container interface for all Panel settings. New settings should be added here as optional properties. Each setting should extend BasePanelSetting for consistency. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [ImageStyleId](type-aliases/image-style-id.md) | Combines all available style options for your image generation. Use this type to access any style from themes, techniques, lighting, composition, effects, colors, movements, materials, or concepts. |
