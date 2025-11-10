[**cc-everywhere**](../../../../../index.md)

***

# Interface: CallBackExportOption<U\>

Export option for callback actions that trigger callbacks without publishing assets.

## See

- [CallBackAction](../../export-config-types/interfaces/call-back-action.md) for available callback actions
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
| `id` | `string` | - | [`BaseExportOption`](../../export-config-types/interfaces/base-export-option.md).[`id`](../../export-config-types/interfaces/base-export-option.md#id) |
| `style` | `U` | - | [`BaseExportOption`](../../export-config-types/interfaces/base-export-option.md).[`style`](../../export-config-types/interfaces/base-export-option.md#style) |
| `action` | [`CallBackAction`](../../export-config-types/interfaces/call-back-action.md) | [`BaseExportOption`](../../export-config-types/interfaces/base-export-option.md).[`action`](../../export-config-types/interfaces/base-export-option.md#action) | - |
| `label?` | `string` | - | - |
