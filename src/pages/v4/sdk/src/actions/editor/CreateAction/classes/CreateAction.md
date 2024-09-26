[cc-everywhere](../../../../../../index.md) / [sdk/src/actions/editor/CreateAction](../index.md) / CreateAction

# Class: CreateAction

A action is a specific thing that the user can do. End user will be interacting
with the action implemented using BaseAction (this class). Action class takes care
of creating the modal dialog/window.
of creating the modal dialog/window.

Each implementation of BaseAction is mapped to Workflow & AnalyticsWorkflow

## Extends

- [`BaseEditorAction`](../../BaseEditorAction/classes/BaseEditorAction.md)<[`CreateDesignConfig`](../../../../../../shared/src/types/editor/DesignConfig.types/interfaces/CreateDesignConfig.md)\>

## Constructors

### new CreateAction()

```ts
new CreateAction(context): CreateAction
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ActionContext`](../../../ActionContext/interfaces/ActionContext.md)<[`CreateDesignConfig`](../../../../../../shared/src/types/editor/DesignConfig.types/interfaces/CreateDesignConfig.md)\> |

#### Returns

[`CreateAction`](CreateAction.md)

#### Overrides

[`BaseEditorAction`](../../BaseEditorAction/classes/BaseEditorAction.md).[`constructor`](../../BaseEditorAction/classes/BaseEditorAction.md#constructors)

## Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| `hostCallbackHandler` | `readonly` | [`HostCallbackHandler`](../../../../host/HostCallbackHandler/classes/HostCallbackHandler.md) | [`BaseEditorAction`](../../BaseEditorAction/classes/BaseEditorAction.md).`hostCallbackHandler` |
| `context` | `public` | [`ActionContext`](../../../ActionContext/interfaces/ActionContext.md)<[`CreateDesignConfig`](../../../../../../shared/src/types/editor/DesignConfig.types/interfaces/CreateDesignConfig.md)\> | [`BaseEditorAction`](../../BaseEditorAction/classes/BaseEditorAction.md).`context` |

## Methods

### isActive()

```ts
isActive(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEditorAction`](../../BaseEditorAction/classes/BaseEditorAction.md).[`isActive`](../../BaseEditorAction/classes/BaseEditorAction.md#isactive)

***

### isTerminating()

```ts
isTerminating(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEditorAction`](../../BaseEditorAction/classes/BaseEditorAction.md).[`isTerminating`](../../BaseEditorAction/classes/BaseEditorAction.md#isterminating)

***

### isTerminated()

```ts
isTerminated(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEditorAction`](../../BaseEditorAction/classes/BaseEditorAction.md).[`isTerminated`](../../BaseEditorAction/classes/BaseEditorAction.md#isterminated)

***

### isCancellable()

```ts
isCancellable(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEditorAction`](../../BaseEditorAction/classes/BaseEditorAction.md).[`isCancellable`](../../BaseEditorAction/classes/BaseEditorAction.md#iscancellable)

***

### getTargetInfoInternal()

```ts
getTargetInfoInternal(): Promise<TargetInfo>
```

#### Returns

`Promise`<[`TargetInfo`](../../../../../../shared/src/types/TargetInfo.types/interfaces/TargetInfo.md)\>

#### Inherited from

[`BaseEditorAction`](../../BaseEditorAction/classes/BaseEditorAction.md).[`getTargetInfoInternal`](../../BaseEditorAction/classes/BaseEditorAction.md#gettargetinfointernal)

***

### execute()

```ts
execute(): Promise<void>
```

#### Returns

`Promise`<`void`\>

#### Inherited from

[`BaseEditorAction`](../../BaseEditorAction/classes/BaseEditorAction.md).[`execute`](../../BaseEditorAction/classes/BaseEditorAction.md#execute)

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

[`BaseEditorAction`](../../BaseEditorAction/classes/BaseEditorAction.md).[`close`](../../BaseEditorAction/classes/BaseEditorAction.md#close)

***

### didContainerRemove()

```ts
didContainerRemove(): void
```

#### Returns

`void`

#### Inherited from

[`BaseEditorAction`](../../BaseEditorAction/classes/BaseEditorAction.md).[`didContainerRemove`](../../BaseEditorAction/classes/BaseEditorAction.md#didcontainerremove)
