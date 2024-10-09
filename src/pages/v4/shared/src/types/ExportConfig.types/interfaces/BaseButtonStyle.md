# Interface: BaseButtonStyle<T\>

Represents the style of a button, extending the base Style interface.

## Extends

- [`Style`](Style.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ExportOptionUI`](../enumerations/ExportOptionUI.md) |

## Properties

| Property | Type | Description | Overrides |
| ------ | ------ | ------ | ------ |
| `uiType` | `T` | The UI type for the button. | [`Style`](Style.md).`uiType` |
| `icon?` | `string` | The optional icon URL for the button. | - |
| `variant?` | [`ExportButtonVariant`](../type-aliases/ExportButtonVariant.md) | The optional variant for the button. | - |
| `treatment?` | [`ExportButtonTreatment`](../type-aliases/ExportButtonTreatment.md) | The optional treatment for the button. | - |
