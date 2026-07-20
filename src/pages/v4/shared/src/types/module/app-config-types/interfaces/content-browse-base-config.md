---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: ContentBrowseBaseConfig

Base configuration properties shared across all launch modes.
Contains common properties available in both browse and preview modes.

## Extended by

- [`BrowseModeConfig`](browse-mode-config.md)
- [`PreviewModeConfig`](preview-mode-config.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `headerText?` | `string` | The text to be displayed in the header of the Start From Content module. **Default** `empty string` |
| `showAXBrandingLogo?` | `boolean` | Specifies whether to show the Adobe Express(AX) branding logo in Start From Content. **Default** `false` |
| `hideAllBadgesUntilHover?` | `boolean` | This property is used to hide all badges(like premium crown icon, animated badge etc) until hover. If true, the badges will be hidden until the user hovers over the item. If false, the badges will always be shown. **Default** `false` |
| `hidePremiumBadge?` | `boolean` | Controls the display of the premium badge exclusively. This takes precedence over the `hideAllBadgesUntilHover` property. **Default** `false` |
| `toastMessage?` | `string` | This toast will be displayed on the first screen when the user enters the workflow. The toast is shown if non empty string is provided. **Default** `Empty string` |
| `disablePremiumContent?` | `boolean` | This property is used to disable the premium content in the Start From Content. Currently this is only supported and tested for templates category. **Default** `false` |
