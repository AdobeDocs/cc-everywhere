[**cc-everywhere**](..\..\..\..\..\index.md)

***

# Interface: EditFurtherExportOption<U\>

Export option for continuing to edit content in other applications.

## See

 - [EditFurtherAction](edit-further-action.md) for available edit actions
 - [ButtonStyle](..\type-aliases\button-style.md), [EnabledButtonStyle](..\type-aliases\enabled-button-style.md), [LinkStyle](link-style.md) for common style options

## Extends

- [`BaseExportOption`](base-export-option.md)<`U`\>

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `U` *extends* [`Style`](style.md) | The style type extending [Style](style.md) |

## Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `id` | `string` | - | [`BaseExportOption`](base-export-option.md).[`id`](base-export-option.md#id) |
| `style` | `U` | - | [`BaseExportOption`](base-export-option.md).[`style`](base-export-option.md#style) |
| `action` | [`EditFurtherAction`](edit-further-action.md) | [`BaseExportOption`](base-export-option.md).[`action`](base-export-option.md#action) | - |
| `label?` | `string` | - | - |
