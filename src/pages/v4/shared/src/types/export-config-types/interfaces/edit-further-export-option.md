[**cc-everywhere**](../../../../../index.md)

***

# Interface: EditFurtherExportOption<U\>

Export option for continuing to edit content in other applications.

## See

 - [EditFurtherAction](../../export-config-types/interfaces/edit-further-action.md) for available edit actions
 - [ButtonStyle](../../export-config-types/type-aliases/button-style.md), [EnabledButtonStyle](../../export-config-types/type-aliases/enabled-button-style.md), [LinkStyle](../../export-config-types/interfaces/link-style.md) for common style options

## Extends

- [`BaseExportOption`](base-export-option.md) `U`

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `U` *extends* [`Style`](../../export-config-types/interfaces/style.md) | The style type extending [Style](../../export-config-types/interfaces/style.md) |

## Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `id` | `string` | - | [`BaseExportOption`](../../export-config-types/interfaces/base-export-option.md).[`id`](../../export-config-types/interfaces/base-export-option.md#id) |
| `style` | `U` | - | [`BaseExportOption`](../../export-config-types/interfaces/base-export-option.md).[`style`](../../export-config-types/interfaces/base-export-option.md#style) |
| `action` | [`EditFurtherAction`](../../export-config-types/interfaces/edit-further-action.md) | [`BaseExportOption`](../../export-config-types/interfaces/base-export-option.md).[`action`](../../export-config-types/interfaces/base-export-option.md#action) | - |
| `label?` | `string` | - | - |
