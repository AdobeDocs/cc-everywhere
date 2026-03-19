---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: DropdownOptionStyle

Style for a dropdown export option, with optional icon and custom content.

## See

 - [Style](style.md) for the base interface
 - [ExportStyle](../type-aliases/export-style.md) for the union of all export styles
 - [DropdownExportOption](../type-aliases/dropdown-export-option.md) for options using this style

## Extends

- [`Style`](style.md)

## Extended by

- [`DropdownOptionStyleCompat`](dropdown-option-style-compat.md)

## Properties

| Property | Type | Description | Overrides |
| ------ | ------ | ------ | ------ |
| `uiType` | [`DROPDOWN`](../enumerations/export-option-ui.md#dropdown) | The UI type for the dropdown option. | [`Style`](style.md).[`uiType`](style.md#uitype) |
| `icon?` | `string` | The optional icon URL for the dropdown option. | - |
| `customContent?` | [`CustomContentConfig`](custom-content-config.md) | The optional custom content configuration for the dropdown option. | - |
