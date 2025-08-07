[**cc-everywhere**](../../../../index.md)

***

# shared/src/types/PanelSettings.types

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [ImageContentType](../panel-settings-types/enumerations/image-content-type.md) | Defines the primary content type for image generation. Choose from photo, graphic, or art to set the overall approach for your generated image. |
| [ImageThemeStyle](../panel-settings-types/enumerations/image-theme-style.md) | Sets the artistic theme and visual direction for your generated image. These themes create distinct visual styles that define the overall mood and aesthetic. |
| [ImageTechniqueStyle](../panel-settings-types/enumerations/image-technique-style.md) | Controls the artistic technique and rendering method for your image. These techniques define how the visual effect is created, similar to traditional art methods. |
| [ImageLightingStyle](../panel-settings-types/enumerations/image-lighting-style.md) | Adjusts the lighting conditions and atmospheric effects for your image. These settings control illumination, shadows, and the overall lighting mood. |
| [ImageCompositionStyle](../panel-settings-types/enumerations/image-composition-style.md) | Sets the camera angle and compositional approach for your image. These styles control how elements are framed and arranged within the image. |
| [ImageEffectStyle](../panel-settings-types/enumerations/image-effect-style.md) | Adds visual effects and filters to enhance your image. These effects provide special enhancements and atmospheric qualities. |
| [ImageColorStyle](../panel-settings-types/enumerations/image-color-style.md) | Controls the color palette and tonal approach for your image. These styles set the overall color mood through saturation and color choices. |
| [ImageMovementStyle](../panel-settings-types/enumerations/image-movement-style.md) | Applies artistic movements and cultural styles to your image. These styles draw from various art movements and cultural aesthetics for inspiration. |
| [ImageMaterialStyle](../panel-settings-types/enumerations/image-material-style.md) | Simulates different materials and textures for your image elements. These styles create the appearance of various physical materials and their characteristics. |
| [ImageConceptStyle](../panel-settings-types/enumerations/image-concept-style.md) | Sets the conceptual mood and emotional tone for your image. These styles define the abstract feeling or conceptual approach that guides the image. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [BasePanelSetting](../panel-settings-types/interfaces/base-panel-setting.md) | Base setting interface that all settings should extend. Provides common properties for value. |
| [StyleSetting](../panel-settings-types/interfaces/style-setting.md) | Represents the configuration for panel styles. Extends BasePanelSetting, with the value being an array of StyleId enums. Used to specify which styles (themes, techniques, etc.) are applied in the panel. |
| [ContentTypeSetting](../panel-settings-types/interfaces/content-type-setting.md) | Represents the configuration for the content type setting in the panel. Extends BasePanelSetting, with the value being a ImageContentType enum. Used to specify the type of content to be generated (e.g., photo, graphic, art). |
| [PanelSettings](../panel-settings-types/interfaces/panel-settings.md) | Container interface for all Panel settings. New settings should be added here as optional properties. Each setting should extend BasePanelSetting for consistency. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [ImageStyleId](../panel-settings-types/type-aliases/image-style-id.md) | Combines all available style options for your image generation. Use this type to access any style from themes, techniques, lighting, composition, effects, colors, movements, materials, or concepts. |
