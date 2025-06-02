# Class: CCEverywhere

Class to create CCEverywhere object.

## Extends

- [`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md)

## Implements

- [`CCEverywhereInterface`](../../cc-everywhere-types/interfaces/cc-everywhere-interface.md)

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| `editor` | `readonly` | [`EditorWorkflow`](../../../workflows/3p/editor-workflow/classes/editor-workflow.md) |
| `module` | `readonly` | [`ModuleWorkflow`](../../../workflows/3p/module-workflow/classes/module-workflow.md) |
| `quickAction` | `readonly` | [`QuickActionWorkflow`](../../../workflows/3p/quick-action-workflow/classes/quick-action-workflow.md) |

## Accessors

### activeInstance

```ts
set static activeInstance(instance): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instance` | `undefined` \| [`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md) |

#### Inherited from

[`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md).[`activeInstance`](../../../cc-everywhere-base/classes/cc-everywhere-base.md#activeinstance)

## Methods

### close()

```ts
close(): boolean
```

Closes any active design in progress.

#### Returns

`boolean`

boolean value indicating whether the close operation was successful or not.

#### Implementation of

[`CCEverywhereInterface`](../../cc-everywhere-types/interfaces/cc-everywhere-interface.md).[`close`](../../cc-everywhere-types/interfaces/cc-everywhere-interface.md#close)

#### Inherited from

[`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md).[`close`](../../../cc-everywhere-base/classes/cc-everywhere-base.md#close)
