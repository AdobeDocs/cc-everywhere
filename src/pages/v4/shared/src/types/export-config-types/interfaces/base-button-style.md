[**cc-everywhere**](../../../../../index.md)

***

# Interface: BaseButtonStyle<T\>

Represents the style of a button, extending the base Style interface.

## Extends

- [`Style`](../../export-config-types/interfaces/style.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`ExportOptionUI`](../../export-config-types/enumerations/export-option-ui.md) |

## Properties

| Property | Type | Description | Overrides |
| ------ | ------ | ------ | ------ |
| <a id="uitype"></a> `uiType` | `T` | The UI type for the button. | [`Style`](../../export-config-types/interfaces/style.md).[`uiType`](../../export-config-types/interfaces/style.md#uitype) |
| <a id="icon"></a> `icon?` | `string` | The optional icon URL for the button. | - |
| <a id="variant"></a> `variant?` | [`ExportButtonVariant`](../../export-config-types/type-aliases/export-button-variant.md) | The optional variant for the button. | - |
| <a id="treatment"></a> `treatment?` | [`ExportButtonTreatment`](../../export-config-types/type-aliases/export-button-treatment.md) | The optional treatment for the button. | - |
