[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: PublishExportOption&lt; U\ &gt;

Export option for publishing content to various targets.

## See

 - [PublishAction](publish-action.md) for available publish actions
 - [ButtonStyle](../type-aliases/button-style.md), [LinkStyle](link-style.md) for common style options

## Extends

- [`BaseExportOption`](base-export-option.md)&lt; `U`\ &gt;

## Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `U` *extends* [`Style`](style.md) | The style type extending [Style](style.md) |

## Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `id` | `string` | - | [`BaseExportOption`](base-export-option.md).[`id`](base-export-option.md#id) |
| `style` | `U` | - | [`BaseExportOption`](base-export-option.md).[`style`](base-export-option.md#style) |
| `action` | [`PublishAction`](publish-action.md) | [`BaseExportOption`](base-export-option.md).[`action`](base-export-option.md#action) | - |
| `label` | `string` | - | - |
