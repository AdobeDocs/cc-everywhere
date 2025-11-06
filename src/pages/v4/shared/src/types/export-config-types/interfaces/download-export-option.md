[**cc-everywhere**](..\..\..\..\..\index.md)

***

# Interface: DownloadExportOption<U\>

Export option for downloading content to the user's device.

## See

 - [DownloadAction](download-action.md) for available download actions
 - [ButtonStyle](..\type-aliases\button-style.md), [LinkStyle](link-style.md) for common style options

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
| `action` | [`DownloadAction`](download-action.md) | [`BaseExportOption`](base-export-option.md).[`action`](base-export-option.md#action) | - |
| `label?` | `string` | - | - |
