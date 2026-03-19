---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: BaseButtonStyle&lt;T&gt;

Style for a button-style export option (button or enabled-button).

## See

 - [ButtonStyle](../type-aliases/button-style.md) for standard button
 - [EnabledButtonStyle](../type-aliases/enabled-button-style.md) for always-enabled button

## Extends

- [`Style`](style.md)

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* [`ExportOptionUI`](../enumerations/export-option-ui.md) | The specific [ExportOptionUI](../enumerations/export-option-ui.md) value (BUTTON or ENABLED_BUTTON) |

## Properties

| Property | Type | Description | Overrides |
| ------ | ------ | ------ | ------ |
| `uiType` | `T` | The UI type for the button. | [`Style`](style.md).[`uiType`](style.md#uitype) |
| `icon?` | `string` | The optional icon URL for the button. | - |
| `variant?` | [`ExportButtonVariant`](../type-aliases/export-button-variant.md) | The optional variant for the button. | - |
| `treatment?` | [`ExportButtonTreatment`](../type-aliases/export-button-treatment.md) | The optional treatment for the button. | - |
