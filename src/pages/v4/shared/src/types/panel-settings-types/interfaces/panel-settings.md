[**cc-everywhere**](../../../../../index.md)

***

# Interface: PanelSettings

Container interface for all Panel settings.
New settings should be added here as optional properties.
Each setting should extend BasePanelSetting for consistency.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="contenttype"></a> `contentType?` | [`ContentTypeSetting`](../../panel-settings-types/interfaces/content-type-setting.md) | Configuration for the content type setting in the panel. Determines the type of content to be generated (e.g., photo, graphic , art). |
| <a id="styles"></a> `styles?` | [`StyleSetting`](../../panel-settings-types/interfaces/style-setting.md) | Configuration for panel styles. Controls which styles (e.g., artistic styles, filters) are applied during image generation. |
