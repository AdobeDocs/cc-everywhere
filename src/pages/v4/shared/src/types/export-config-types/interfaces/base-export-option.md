---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: BaseExportOption&lt;U&gt;

Base for a single export option: id, style, and action.

## See

 - [ExportAction](../type-aliases/export-action.md) for the action union
 - [PublishExportOption](publish-export-option.md), [DownloadExportOption](download-export-option.md), etc. for concrete option types

## Extended by

- [`PublishExportOption`](publish-export-option.md)
- [`DownloadExportOption`](download-export-option.md)
- [`EditFurtherExportOption`](edit-further-export-option.md)
- [`ContinueEditingDropdownOption`](continue-editing-dropdown-option.md)
- [`CallBackExportOption`](call-back-export-option.md)

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `U` *extends* [`Style`](style.md) | The style type extending [Style](style.md) |

## Properties

| Property | Type |
| ------ | ------ |
| `id` | `string` |
| `style` | `U` |
| `action` | [`ExportAction`](../type-aliases/export-action.md) |
