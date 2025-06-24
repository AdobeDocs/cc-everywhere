[**cc-everywhere**](../../../../../index.md)

***

# Interface: DownloadExportOption<U\>

Export option for downloading content to the user's device.

## See

 - [DownloadAction](../../export-config-types/interfaces/download-action.md) for available download actions
 - [ButtonStyle](../../export-config-types/type-aliases/button-style.md), [LinkStyle](../../export-config-types/interfaces/link-style.md) for common style options

## Extends

- [`BaseExportOption`](../../export-config-types/interfaces/base-export-option.md)<`U`\>

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `U` *extends* [`Style`](../../export-config-types/interfaces/style.md) | The style type extending [Style](../../export-config-types/interfaces/style.md) |

## Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="id"></a> `id` | `string` | - | [`BaseExportOption`](../../export-config-types/interfaces/base-export-option.md).[`id`](../../export-config-types/interfaces/base-export-option.md#id) |
| <a id="style"></a> `style` | `U` | - | [`BaseExportOption`](../../export-config-types/interfaces/base-export-option.md).[`style`](../../export-config-types/interfaces/base-export-option.md#style) |
| <a id="action"></a> `action` | [`DownloadAction`](../../export-config-types/interfaces/download-action.md) | [`BaseExportOption`](../../export-config-types/interfaces/base-export-option.md).[`action`](../../export-config-types/interfaces/base-export-option.md#action) | - |
| <a id="label"></a> `label?` | `string` | - | - |
