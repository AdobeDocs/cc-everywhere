[**cc-everywhere**](../../../../../index.md)

***

# Class: CCEverywhere

Class to create CCEverywhere object.

## Extends

- [`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md)

## Implements

- [`CCEverywhereInterface`](../../cc-everywhere-types/interfaces/cc-everywhere-interface.md)

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="editor"></a> `editor` | `readonly` | [`EditorWorkflow`](../../../workflows/3p/editor-workflow/classes/editor-workflow.md) |
| <a id="module"></a> `module` | `readonly` | [`ModuleWorkflow`](../../../workflows/3p/module-workflow/classes/module-workflow.md) |
| <a id="quickaction"></a> `quickAction` | `readonly` | [`QuickActionWorkflow`](../../../workflows/3p/quick-action-workflow/classes/quick-action-workflow.md) |

## Accessors

### activeInstance

#### Set Signature

```ts
set static activeInstance(instance): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `instance` | \| `undefined` \| [`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md) |

##### Returns

`void`

#### Inherited from

[`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md).[`activeInstance`](../../../cc-everywhere-base/classes/cc-everywhere-base.md#activeinstance)

## Methods

### close()

```ts
close(showConfirmationDialog?): 
  | boolean
| Promise<CloseStatusMessage>;
```

Closes any active design in progress.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `showConfirmationDialog?` | `boolean` | boolean value indicating whether to show confirmation dialog or not. |

#### Returns

  \| `boolean`
  \| `Promise`<[`CloseStatusMessage`](../../../../../shared/src/messenger/message-types/interfaces/close-status-message.md)\>

boolean value indicating whether the close operation was successful or not.

#### Implementation of

[`CCEverywhereInterface`](../../cc-everywhere-types/interfaces/cc-everywhere-interface.md).[`close`](../../cc-everywhere-types/interfaces/cc-everywhere-interface.md#close)

#### Inherited from

[`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md).[`close`](../../../cc-everywhere-base/classes/cc-everywhere-base.md#close)
