# Interface: BaseButtonStyle T

Represents the style of a button, extending the base Style interface.

## Extends

- [`Style`](style/index.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ExportOptionUI`](../enumerations/export-option-ui/index.md) |

## Properties

| Property | Type | Description | Overrides |
| ------ | ------ | ------ | ------ |
| `uiType` | `T` | The UI type for the button. | [`Style`](style/index.md).`uiType` |
| `icon?` | `string` | The optional icon URL for the button. | - |
| `variant?` | [`ExportButtonVariant`](../type-aliases/export-button-variant/index.md) | The optional variant for the button. | - |
| `treatment?` | [`ExportButtonTreatment`](../type-aliases/export-button-treatment/index.md) | The optional treatment for the button. | - |
