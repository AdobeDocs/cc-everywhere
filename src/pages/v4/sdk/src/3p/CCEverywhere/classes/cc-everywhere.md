# Class: CCEverywhere

Class to create CCEverywhere object.

## Extends

- [`CCEverywhereBase`](../../../CCEverywhereBase/classes/cc-everywhere-base.md)

## Implements

- [`CCEverywhereInterface`](../../CCEverywhere.types/interfaces/cc-everywhere-interface/index.md)

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| `editor` | `readonly` | [`EditorWorkflow`](../../../workflows/3p/EditorWorkflow/classes/editor-workflow.md) |
| `module` | `readonly` | [`ModuleWorkflow`](../../../workflows/3p/ModuleWorkflow/classes/module-workflow.md) |
| `quickAction` | `readonly` | [`QuickActionWorkflow`](../../../workflows/3p/QuickActionWorkflow/classes/quick-action-workflow.md) |

## Accessors

### activeInstance

```ts
set static activeInstance(instance): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instance` | `undefined` \| [`CCEverywhereBase`](../../../CCEverywhereBase/classes/cc-everywhere-base.md) |

#### Inherited from

[`CCEverywhereBase`](../../../CCEverywhereBase/classes/cc-everywhere-base.md).[`activeInstance`](../../../CCEverywhereBase/classes/cc-everywhere-base.md#activeinstance)

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

[`CCEverywhereInterface`](../../CCEverywhere.types/interfaces/cc-everywhere-interface/index.md).[`close`](../../CCEverywhere.types/interfaces/cc-everywhere-interface/index.md#close)

#### Inherited from

[`CCEverywhereBase`](../../../CCEverywhereBase/classes/cc-everywhere-base.md).[`close`](../../../CCEverywhereBase/classes/cc-everywhere-base.md#close)
