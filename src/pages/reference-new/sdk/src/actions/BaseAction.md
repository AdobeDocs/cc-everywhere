[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / sdk/src/actions/BaseAction

# sdk/src/actions/BaseAction

## Classes

### `abstract` BaseAction\<T\>

A action is a specific thing that the user can do. End user will be interacting
with the action implemented using BaseAction (this class). Action class takes care
of creating the modal dialog/window.
of creating the modal dialog/window.

Each implementation of BaseAction is mapped to Workflow & AnalyticsWorkflow

#### Extends

- [`Action`](Action.md#actiont)\<[`ActionContext`](ActionContext.md#actioncontextt)\<`T`\>\>

#### Extended by

- [`BaseEditorAction`](editor/BaseEditorAction.md#baseeditoractiont)
- [`ImageModuleAction`](modules/ImageModuleAction.md#imagemoduleaction)
- [`TextToImageAction`](modules/TextToImageAction.md#texttoimageaction)
- [`QuickAction`](quick-action/QuickAction.md#quickactiont)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DesignConfig`](../../../shared/src/types/DesignConfig.md#designconfig) |

#### Implements

- `ContainerDelegate`

#### Constructors

##### new BaseAction()

```ts
new BaseAction<T>(
   context, 
   analyticsWorkflow, 
actionProperties): BaseAction<T>
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ActionContext`](ActionContext.md#actioncontextt)\<`T`\> |
| `analyticsWorkflow` | [`AnalyticsWorkflow`](../analytics/AnalyticsManager.md#analyticsworkflow) |
| `actionProperties` | [`ActionProperties`](Action.md#actionproperties) |

###### Returns

[`BaseAction`](BaseAction.md#baseactiont)\<`T`\>

###### Overrides

[`Action`](Action.md#actiont).[`constructor`](Action.md#constructors)

#### Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| `hostCallbackHandler` | `readonly` | [`HostCallbackHandler`](../host/HostCallbackHandler.md#hostcallbackhandler) | [`Action`](Action.md#actiont).`hostCallbackHandler` |
| `context` | `public` | [`ActionContext`](ActionContext.md#actioncontextt)\<`T`\> | [`Action`](Action.md#actiont).`context` |

#### Methods

##### isActive()

```ts
isActive(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`Action`](Action.md#actiont).[`isActive`](Action.md#isactive)

##### isTerminating()

```ts
isTerminating(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`Action`](Action.md#actiont).[`isTerminating`](Action.md#isterminating)

##### isTerminated()

```ts
isTerminated(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`Action`](Action.md#actiont).[`isTerminated`](Action.md#isterminated)

##### isCancellable()

```ts
isCancellable(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`Action`](Action.md#actiont).[`isCancellable`](Action.md#iscancellable)

##### getTargetInfoInternal()

```ts
getTargetInfoInternal(): Promise<TargetInfo>
```

###### Returns

`Promise`\<[`TargetInfo`](../../../shared/src/types/TargetInfo.md#targetinfo)\>

###### Implementation of

`ContainerDelegate.getTargetInfoInternal`

##### execute()

```ts
execute(): Promise<void>
```

###### Returns

`Promise`\<`void`\>

###### Overrides

[`Action`](Action.md#actiont).[`execute`](Action.md#execute)

##### close()

```ts
close(reason): void
```

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `reason` | `ContainerCloseReason` | `ContainerCloseReason.HOST` |

###### Returns

`void`

###### Overrides

[`Action`](Action.md#actiont).[`close`](Action.md#close)

##### didContainerRemove()

```ts
didContainerRemove(): void
```

###### Returns

`void`

###### Implementation of

`ContainerDelegate.didContainerRemove`
