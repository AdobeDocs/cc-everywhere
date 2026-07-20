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
| `showAXBrandingLogo?` | `boolean` | Specifies whether to show the Adobe Express(AX) branding logo in Start From Content. **Default** `false` | [`ContentBrowseBaseConfig`](content-browse-base-config.md).[`showAXBrandingLogo`](content-browse-base-config.md#showaxbrandinglogo) |
| `hideAllBadgesUntilHover?` | `boolean` | This property is used to hide all badges(like premium crown icon, animated badge etc) until hover. If true, the badges will be hidden until the user hovers over the item. If false, the badges will always be shown. **Default** `false` | [`ContentBrowseBaseConfig`](content-browse-base-config.md).[`hideAllBadgesUntilHover`](content-browse-base-config.md#hideallbadgesuntilhover) |
| `hidePremiumBadge?` | `boolean` | Controls the display of the premium badge exclusively. This takes precedence over the `hideAllBadgesUntilHover` property. **Default** `false` | [`ContentBrowseBaseConfig`](content-browse-base-config.md).[`hidePremiumBadge`](content-browse-base-config.md#hidepremiumbadge) |
| `toastMessage?` | `string` | This toast will be displayed on the first screen when the user enters the workflow. The toast is shown if non empty string is provided. **Default** `Empty string` | [`ContentBrowseBaseConfig`](content-browse-base-config.md).[`toastMessage`](content-browse-base-config.md#toastmessage) |
| `disablePremiumContent?` | `boolean` | This property is used to disable the premium content in the Start From Content. Currently this is only supported and tested for templates category. **Default** `false` | [`ContentBrowseBaseConfig`](content-browse-base-config.md).[`disablePremiumContent`](content-browse-base-config.md#disablepremiumcontent) |
| `launchMode` | `"preview"` | Launch mode for Start From Content. Must be set to 'preview' to enable direct preview mode. | - |
| `assetId` | `string` | The ID of the asset to preview directly. Currently supports templates only (category automatically set to TEMPLATES). **Required** | - |
