---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: ContinueEditingDropdownOption

Base for a single export option: id, style, and action.

## See

 - [ExportAction](../type-aliases/export-action.md) for the action union
 - [PublishExportOption](publish-export-option.md), [DownloadExportOption](download-export-option.md), etc. for concrete option types

## Extends

- [`BaseExportOption`](base-export-option.md)&lt;[`DropdownOptionStyle`](dropdown-option-style.md)&gt;

## Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `id` | `string` | - | [`BaseExportOption`](base-export-option.md).[`id`](base-export-option.md#id) |
| `style` | [`DropdownOptionStyle`](dropdown-option-style.md) | - | [`BaseExportOption`](base-export-option.md).[`style`](base-export-option.md#style) |
| `action` | [`ContinueEditingAction`](../type-aliases/continue-editing-action.md) | [`BaseExportOption`](base-export-option.md).[`action`](base-export-option.md#action) | - |
| `label?` | `string` | - | - |
