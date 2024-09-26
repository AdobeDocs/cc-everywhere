[cc-everywhere](../../../../../../index.md) / [sdk/src/actions/quick-action/MergeVideosAction](../index.md) / MergeVideosAction

# Class: MergeVideosAction

A action is a specific thing that the user can do. End user will be interacting
with the action implemented using BaseAction (this class). Action class takes care
of creating the modal dialog/window.
of creating the modal dialog/window.

Each implementation of BaseAction is mapped to Workflow & AnalyticsWorkflow

## Extends

- [`QuickAction`](../../QuickAction/classes/QuickAction.md)<[`MergeVideosDesignConfig`](../../../../../../shared/src/types/quick-action/DesignConfig.types/interfaces/MergeVideosDesignConfig.md)\>

## Constructors

### new MergeVideosAction()

```ts
new MergeVideosAction(context): MergeVideosAction
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ActionContext`](../../../ActionContext/interfaces/ActionContext.md)<[`MergeVideosDesignConfig`](../../../../../../shared/src/types/quick-action/DesignConfig.types/interfaces/MergeVideosDesignConfig.md)\> |

#### Returns

[`MergeVideosAction`](MergeVideosAction.md)

#### Inherited from

[`QuickAction`](../../QuickAction/classes/QuickAction.md).[`constructor`](../../QuickAction/classes/QuickAction.md#constructors)

## Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| `hostCallbackHandler` | `readonly` | [`HostCallbackHandler`](../../../../host/HostCallbackHandler/classes/HostCallbackHandler.md) | [`QuickAction`](../../QuickAction/classes/QuickAction.md).`hostCallbackHandler` |
| `context` | `public` | [`ActionContext`](../../../ActionContext/interfaces/ActionContext.md)<[`MergeVideosDesignConfig`](../../../../../../shared/src/types/quick-action/DesignConfig.types/interfaces/MergeVideosDesignConfig.md)\> | [`QuickAction`](../../QuickAction/classes/QuickAction.md).`context` |

## Methods

### isActive()

```ts
isActive(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`QuickAction`](../../QuickAction/classes/QuickAction.md).[`isActive`](../../QuickAction/classes/QuickAction.md#isactive)

***

### isTerminating()

```ts
isTerminating(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`QuickAction`](../../QuickAction/classes/QuickAction.md).[`isTerminating`](../../QuickAction/classes/QuickAction.md#isterminating)

***

### isTerminated()

```ts
isTerminated(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`QuickAction`](../../QuickAction/classes/QuickAction.md).[`isTerminated`](../../QuickAction/classes/QuickAction.md#isterminated)

***

### isCancellable()

```ts
isCancellable(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`QuickAction`](../../QuickAction/classes/QuickAction.md).[`isCancellable`](../../QuickAction/classes/QuickAction.md#iscancellable)

***

### getTargetInfoInternal()

```ts
getTargetInfoInternal(): Promise<TargetInfo>
```

#### Returns

`Promise`<[`TargetInfo`](../../../../../../shared/src/types/TargetInfo.types/interfaces/TargetInfo.md)\>

#### Inherited from

[`QuickAction`](../../QuickAction/classes/QuickAction.md).[`getTargetInfoInternal`](../../QuickAction/classes/QuickAction.md#gettargetinfointernal)

***

### execute()

```ts
execute(): Promise<void>
```

#### Returns

`Promise`<`void`\>

#### Inherited from

[`QuickAction`](../../QuickAction/classes/QuickAction.md).[`execute`](../../QuickAction/classes/QuickAction.md#execute)

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

[`QuickAction`](../../QuickAction/classes/QuickAction.md).[`close`](../../QuickAction/classes/QuickAction.md#close)

***

### didContainerRemove()

```ts
didContainerRemove(): void
```

#### Returns

`void`

#### Inherited from

[`QuickAction`](../../QuickAction/classes/QuickAction.md).[`didContainerRemove`](../../QuickAction/classes/QuickAction.md#didcontainerremove)
