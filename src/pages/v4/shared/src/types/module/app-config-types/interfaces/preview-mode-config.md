---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: PreviewModeConfig

Configuration for preview mode - directly launches into template preview.
This workflow bypasses the template gallery and goes straight to the preview section
for a specific template. Only works with TEMPLATES category.
Extends base config with preview-specific properties (templateId).

## Extends

- [`ContentBrowseBaseConfig`](content-browse-base-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `headerText?` | `string` | The text to be displayed in the header of the Start From Content module. **Default** `empty string` | [`ContentBrowseBaseConfig`](content-browse-base-config.md).[`headerText`](content-browse-base-config.md#headertext) |
| `launchMode` | `"preview"` | Launch mode for Start From Content. Must be set to 'preview' to enable direct preview mode. | - |
| `assetId` | `string` | The ID of the asset to preview directly. Currently supports templates only (category automatically set to TEMPLATES). **Required** | - |
