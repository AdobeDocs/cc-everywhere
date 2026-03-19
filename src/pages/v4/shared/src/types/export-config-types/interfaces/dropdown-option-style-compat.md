---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: DropdownOptionStyleCompat

Dropdown option style with optional button variant/treatment (compatibility).

## See

[DropdownOptionStyle](dropdown-option-style.md) for the base interface

## Extends

- [`DropdownOptionStyle`](dropdown-option-style.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `uiType` | [`DROPDOWN`](../enumerations/export-option-ui.md#dropdown) | The UI type for the dropdown option. | [`DropdownOptionStyle`](dropdown-option-style.md).[`uiType`](dropdown-option-style.md#uitype) |
| `icon?` | `string` | The optional icon URL for the dropdown option. | [`DropdownOptionStyle`](dropdown-option-style.md).[`icon`](dropdown-option-style.md#icon) |
| `customContent?` | [`CustomContentConfig`](custom-content-config.md) | The optional custom content configuration for the dropdown option. | [`DropdownOptionStyle`](dropdown-option-style.md).[`customContent`](dropdown-option-style.md#customcontent) |
| `variant?` | [`ExportButtonVariant`](../type-aliases/export-button-variant.md) | The variant for the button. | - |
| `treatment?` | [`ExportButtonTreatment`](../type-aliases/export-button-treatment.md) | The treatment for the button. | - |
