[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: PanelSettings

Container interface for all Panel settings.
New settings should be added here as optional properties.
Each setting should extend BasePanelSetting for consistency.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `contentType?` | [`ContentTypeSetting`](content-type-setting.md) | Configuration for the content type setting in the panel. Determines the type of content to be generated (e.g., photo, graphic , art). |
| `styles?` | [`StyleSetting`](style-setting.md) | Configuration for panel styles. Controls which styles (e.g., artistic styles, filters) are applied during image generation. |
