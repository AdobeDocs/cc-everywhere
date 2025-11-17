[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: BaseExportOption&lt; U &gt;

## Extended by

- [`PublishExportOption`](../../export-config-types/interfaces/publish-export-option.md)
- [`DownloadExportOption`](../../export-config-types/interfaces/download-export-option.md)
- [`EditFurtherExportOption`](../../export-config-types/interfaces/edit-further-export-option.md)
- [`ContinueEditingDropdownOption`](../../export-config-types/interfaces/continue-editing-dropdown-option.md)
- [`CallBackExportOption`](../../export-config-types/interfaces/call-back-export-option.md)

## Type Parameters

| Type Parameter |
| ------ |
| `U` *extends* [`Style`](style.md) |

## Properties

| Property | Type |
| ------ | ------ |
| `id` | `string` |
| `style` | `U` |
| `action` | [`ExportAction`](../type-aliases/export-action.md) |
