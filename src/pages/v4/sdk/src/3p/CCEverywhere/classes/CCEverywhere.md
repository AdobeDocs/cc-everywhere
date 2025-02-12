# Class: CCEverywhere

Class to create CCEverywhere object.

## Extends

- [`CCEverywhereBase`](../../../CCEverywhereBase/classes/CCEverywhereBase.md)

## Implements

- [`CCEverywhereInterface`](../../CCEverywhere.types/interfaces/CCEverywhereInterface.md)

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| `editor` | `readonly` | [`EditorWorkflow`](../../../workflows/3p/EditorWorkflow/classes/editor-workflow/index.md) |
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
| `instance` | `undefined` \| [`CCEverywhereBase`](../../../CCEverywhereBase/classes/CCEverywhereBase.md) |

#### Inherited from

[`CCEverywhereBase`](../../../CCEverywhereBase/classes/CCEverywhereBase.md).[`activeInstance`](../../../CCEverywhereBase/classes/CCEverywhereBase.md#activeinstance)

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

[`CCEverywhereInterface`](../../CCEverywhere.types/interfaces/CCEverywhereInterface.md).[`close`](../../CCEverywhere.types/interfaces/CCEverywhereInterface.md#close)

#### Inherited from

[`CCEverywhereBase`](../../../CCEverywhereBase/classes/CCEverywhereBase.md).[`close`](../../../CCEverywhereBase/classes/CCEverywhereBase.md#close)
