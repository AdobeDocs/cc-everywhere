[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / [sdk/src/actions/BaseAction](../index.md) / BaseAction

# Class: `abstract` BaseAction\<T\>

A action is a specific thing that the user can do. End user will be interacting
with the action implemented using BaseAction (this class). Action class takes care
of creating the modal dialog/window.
of creating the modal dialog/window.

Each implementation of BaseAction is mapped to Workflow & AnalyticsWorkflow

## Extends

- [`Action`](../../Action/classes/Action.md)\<[`ActionContext`](../../ActionContext/interfaces/ActionContext.md)\<`T`\>\>

## Extended by

- [`BaseEditorAction`](../../editor/BaseEditorAction/classes/BaseEditorAction.md)
- [`ImageModuleAction`](../../modules/ImageModuleAction/classes/ImageModuleAction.md)
- [`TextToImageAction`](../../modules/TextToImageAction/classes/TextToImageAction.md)
- [`QuickAction`](../../quick-action/QuickAction/classes/QuickAction.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DesignConfig`](../../../../../shared/src/types/DesignConfig.types/interfaces/DesignConfig.md) |

## Implements

- `ContainerDelegate`

## Constructors

### new BaseAction()

```ts
new BaseAction<T>(
   context, 
   analyticsWorkflow, 
actionProperties): BaseAction<T>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ActionContext`](../../ActionContext/interfaces/ActionContext.md)\<`T`\> |
| `analyticsWorkflow` | [`AnalyticsWorkflow`](../../../analytics/AnalyticsManager.types/enumerations/AnalyticsWorkflow.md) |
| `actionProperties` | [`ActionProperties`](../../Action.types/interfaces/ActionProperties.md) |

#### Returns

[`BaseAction`](BaseAction.md)\<`T`\>

#### Overrides

[`Action`](../../Action/classes/Action.md).[`constructor`](../../Action/classes/Action.md#constructors)

## Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| `hostCallbackHandler` | `readonly` | [`HostCallbackHandler`](../../../host/HostCallbackHandler/classes/HostCallbackHandler.md) | [`Action`](../../Action/classes/Action.md).`hostCallbackHandler` |
| `context` | `public` | [`ActionContext`](../../ActionContext/interfaces/ActionContext.md)\<`T`\> | [`Action`](../../Action/classes/Action.md).`context` |

## Methods

### isActive()

```ts
isActive(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`Action`](../../Action/classes/Action.md).[`isActive`](../../Action/classes/Action.md#isactive)

***

### isTerminating()

```ts
isTerminating(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`Action`](../../Action/classes/Action.md).[`isTerminating`](../../Action/classes/Action.md#isterminating)

***

### isTerminated()

```ts
isTerminated(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`Action`](../../Action/classes/Action.md).[`isTerminated`](../../Action/classes/Action.md#isterminated)

***

### isCancellable()

```ts
isCancellable(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`Action`](../../Action/classes/Action.md).[`isCancellable`](../../Action/classes/Action.md#iscancellable)

***

### getTargetInfoInternal()

```ts
getTargetInfoInternal(): Promise<TargetInfo>
```

#### Returns

`Promise`\<[`TargetInfo`](../../../../../shared/src/types/TargetInfo.types/interfaces/TargetInfo.md)\>

#### Implementation of

`ContainerDelegate.getTargetInfoInternal`

***

### execute()

```ts
execute(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Action`](../../Action/classes/Action.md).[`execute`](../../Action/classes/Action.md#execute)

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

#### Overrides

[`Action`](../../Action/classes/Action.md).[`close`](../../Action/classes/Action.md#close)

***

### didContainerRemove()

```ts
didContainerRemove(): void
```

#### Returns

`void`

#### Implementation of

`ContainerDelegate.didContainerRemove`
