[**cc-everywhere**](../../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../../index.md) / [sdk/src/actions/quick-action/QuickAction](../index.md) / QuickAction

# Class: QuickAction\<T\>

A action is a specific thing that the user can do. End user will be interacting
with the action implemented using BaseAction (this class). Action class takes care
of creating the modal dialog/window.
of creating the modal dialog/window.

Each implementation of BaseAction is mapped to Workflow & AnalyticsWorkflow

## Extends

- [`BaseAction`](../../../BaseAction/classes/BaseAction.md)\<`T`\>

## Extended by

- [`MergeVideosAction`](../../MergeVideosAction/classes/MergeVideosAction.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `QuickActionDesignConfig` |

## Constructors

### new QuickAction()

```ts
new QuickAction<T>(context): QuickAction<T>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ActionContext`](../../../ActionContext/interfaces/ActionContext.md)\<`T`\> |

#### Returns

[`QuickAction`](QuickAction.md)\<`T`\>

#### Overrides

[`BaseAction`](../../../BaseAction/classes/BaseAction.md).[`constructor`](../../../BaseAction/classes/BaseAction.md#constructors)

## Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| `hostCallbackHandler` | `readonly` | [`HostCallbackHandler`](../../../../host/HostCallbackHandler/classes/HostCallbackHandler.md) | [`BaseAction`](../../../BaseAction/classes/BaseAction.md).`hostCallbackHandler` |
| `context` | `public` | [`ActionContext`](../../../ActionContext/interfaces/ActionContext.md)\<`T`\> | [`BaseAction`](../../../BaseAction/classes/BaseAction.md).`context` |

## Methods

### isActive()

```ts
isActive(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseAction`](../../../BaseAction/classes/BaseAction.md).[`isActive`](../../../BaseAction/classes/BaseAction.md#isactive)

***

### isTerminating()

```ts
isTerminating(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseAction`](../../../BaseAction/classes/BaseAction.md).[`isTerminating`](../../../BaseAction/classes/BaseAction.md#isterminating)

***

### isTerminated()

```ts
isTerminated(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseAction`](../../../BaseAction/classes/BaseAction.md).[`isTerminated`](../../../BaseAction/classes/BaseAction.md#isterminated)

***

### isCancellable()

```ts
isCancellable(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseAction`](../../../BaseAction/classes/BaseAction.md).[`isCancellable`](../../../BaseAction/classes/BaseAction.md#iscancellable)

***

### getTargetInfoInternal()

```ts
getTargetInfoInternal(): Promise<TargetInfo>
```

#### Returns

`Promise`\<[`TargetInfo`](../../../../../../shared/src/types/TargetInfo.types/interfaces/TargetInfo.md)\>

#### Inherited from

[`BaseAction`](../../../BaseAction/classes/BaseAction.md).[`getTargetInfoInternal`](../../../BaseAction/classes/BaseAction.md#gettargetinfointernal)

***

### execute()

```ts
execute(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseAction`](../../../BaseAction/classes/BaseAction.md).[`execute`](../../../BaseAction/classes/BaseAction.md#execute)

***

### close()

```ts
close(reason): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `reason` | `ContainerCloseReason` | `ContainerCloseReason.HOST` |

#### Returns

`void`

#### Inherited from

[`BaseAction`](../../../BaseAction/classes/BaseAction.md).[`close`](../../../BaseAction/classes/BaseAction.md#close)

***

### didContainerRemove()

```ts
didContainerRemove(): void
```

#### Returns

`void`

#### Inherited from

[`BaseAction`](../../../BaseAction/classes/BaseAction.md).[`didContainerRemove`](../../../BaseAction/classes/BaseAction.md#didcontainerremove)
