[**cc-everywhere**](../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../index.md) / sdk/src/actions/editor/CreateAction

# sdk/src/actions/editor/CreateAction

## Classes

### CreateAction

A action is a specific thing that the user can do. End user will be interacting
with the action implemented using BaseAction (this class). Action class takes care
of creating the modal dialog/window.
of creating the modal dialog/window.

Each implementation of BaseAction is mapped to Workflow & AnalyticsWorkflow

#### Extends

- [`BaseEditorAction`](BaseEditorAction.md#baseeditoractiont)\<[`CreateDesignConfig`](../../../../shared/src/types/editor/DesignConfig.md#createdesignconfig)\>

#### Constructors

##### new CreateAction()

```ts
new CreateAction(context): CreateAction
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ActionContext`](../ActionContext.md#actioncontextt)\<[`CreateDesignConfig`](../../../../shared/src/types/editor/DesignConfig.md#createdesignconfig)\> |

###### Returns

[`CreateAction`](CreateAction.md#createaction)

###### Overrides

[`BaseEditorAction`](BaseEditorAction.md#baseeditoractiont).[`constructor`](BaseEditorAction.md#constructors)

#### Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| `hostCallbackHandler` | `readonly` | [`HostCallbackHandler`](../../host/HostCallbackHandler.md#hostcallbackhandler) | [`BaseEditorAction`](BaseEditorAction.md#baseeditoractiont).`hostCallbackHandler` |
| `context` | `public` | [`ActionContext`](../ActionContext.md#actioncontextt)\<[`CreateDesignConfig`](../../../../shared/src/types/editor/DesignConfig.md#createdesignconfig)\> | [`BaseEditorAction`](BaseEditorAction.md#baseeditoractiont).`context` |

#### Methods

##### isActive()

```ts
isActive(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`BaseEditorAction`](BaseEditorAction.md#baseeditoractiont).[`isActive`](BaseEditorAction.md#isactive)

##### isTerminating()

```ts
isTerminating(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`BaseEditorAction`](BaseEditorAction.md#baseeditoractiont).[`isTerminating`](BaseEditorAction.md#isterminating)

##### isTerminated()

```ts
isTerminated(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`BaseEditorAction`](BaseEditorAction.md#baseeditoractiont).[`isTerminated`](BaseEditorAction.md#isterminated)

##### isCancellable()

```ts
isCancellable(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`BaseEditorAction`](BaseEditorAction.md#baseeditoractiont).[`isCancellable`](BaseEditorAction.md#iscancellable)

##### getTargetInfoInternal()

```ts
getTargetInfoInternal(): Promise<TargetInfo>
```

###### Returns

`Promise`\<[`TargetInfo`](../../../../shared/src/types/TargetInfo.md#targetinfo)\>

###### Inherited from

[`BaseEditorAction`](BaseEditorAction.md#baseeditoractiont).[`getTargetInfoInternal`](BaseEditorAction.md#gettargetinfointernal)

##### execute()

```ts
execute(): Promise<void>
```

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`BaseEditorAction`](BaseEditorAction.md#baseeditoractiont).[`execute`](BaseEditorAction.md#execute)

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

###### Inherited from

[`BaseEditorAction`](BaseEditorAction.md#baseeditoractiont).[`close`](BaseEditorAction.md#close)

##### didContainerRemove()

```ts
didContainerRemove(): void
```

###### Returns

`void`

###### Inherited from

[`BaseEditorAction`](BaseEditorAction.md#baseeditoractiont).[`didContainerRemove`](BaseEditorAction.md#didcontainerremove)
