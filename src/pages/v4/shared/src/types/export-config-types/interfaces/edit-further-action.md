---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: EditFurtherAction

Action for continuing to edit content in another application (Express or Image module).

## See

 - [BaseAction](base-action.md) for the base interface
 - [EditFurtherIntent](../enumerations/edit-further-intent.md) for supported intents
 - [ContinueEditingAction](../type-aliases/continue-editing-action.md) for the variant that requires an intent

## Extends

- [`BaseAction`](base-action.md)

## Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `target` | [`EditFurtherTarget`](../enumerations/edit-further-target.md) | [`BaseAction`](base-action.md).[`target`](base-action.md#target) |
| `intent?` | [`EditFurtherIntent`](../enumerations/edit-further-intent.md) | - |
| `context?` | [`ExportContext`](../type-aliases/export-context.md) | - |
