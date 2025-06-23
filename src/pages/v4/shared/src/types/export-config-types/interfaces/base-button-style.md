# Interface: BaseButtonStyle T

Represents the style of a button, extending the base Style interface.

## Extends

- [`Style`](style.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ExportOptionUI`](../enumerations/export-option-ui.md) |

## Properties

| Property | Type | Description | Overrides |
| ------ | ------ | ------ | ------ |
| `uiType` | `T` | The UI type for the button. | [`Style`](style.md).`uiType` |
| `icon?` | `string` | The optional icon URL for the button. | - |
| `variant?` | [`ExportButtonVariant`](../type-aliases/export-button-variant.md) | The optional variant for the button. | - |
| `treatment?` | [`ExportButtonTreatment`](../type-aliases/export-button-treatment.md) | The optional treatment for the button. | - |
