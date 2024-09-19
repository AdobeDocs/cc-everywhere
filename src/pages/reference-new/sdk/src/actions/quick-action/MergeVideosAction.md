[**cc-everywhere**](../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../index.md) / sdk/src/actions/quick-action/MergeVideosAction

# sdk/src/actions/quick-action/MergeVideosAction

## Classes

### MergeVideosAction

A action is a specific thing that the user can do. End user will be interacting
with the action implemented using BaseAction (this class). Action class takes care
of creating the modal dialog/window.
of creating the modal dialog/window.

Each implementation of BaseAction is mapped to Workflow & AnalyticsWorkflow

#### Extends

- [`QuickAction`](QuickAction.md#quickactiont)\<[`MergeVideosDesignConfig`](../../../../shared/src/types/quick-action/DesignConfig.md#mergevideosdesignconfig)\>

#### Constructors

##### new MergeVideosAction()

```ts
new MergeVideosAction(context): MergeVideosAction
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ActionContext`](../ActionContext.md#actioncontextt)\<[`MergeVideosDesignConfig`](../../../../shared/src/types/quick-action/DesignConfig.md#mergevideosdesignconfig)\> |

###### Returns

[`MergeVideosAction`](MergeVideosAction.md#mergevideosaction)

###### Inherited from

[`QuickAction`](QuickAction.md#quickactiont).[`constructor`](QuickAction.md#constructors)

#### Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| `hostCallbackHandler` | `readonly` | [`HostCallbackHandler`](../../host/HostCallbackHandler.md#hostcallbackhandler) | [`QuickAction`](QuickAction.md#quickactiont).`hostCallbackHandler` |
| `context` | `public` | [`ActionContext`](../ActionContext.md#actioncontextt)\<[`MergeVideosDesignConfig`](../../../../shared/src/types/quick-action/DesignConfig.md#mergevideosdesignconfig)\> | [`QuickAction`](QuickAction.md#quickactiont).`context` |

#### Methods

##### isActive()

```ts
isActive(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`QuickAction`](QuickAction.md#quickactiont).[`isActive`](QuickAction.md#isactive)

##### isTerminating()

```ts
isTerminating(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`QuickAction`](QuickAction.md#quickactiont).[`isTerminating`](QuickAction.md#isterminating)

##### isTerminated()

```ts
isTerminated(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`QuickAction`](QuickAction.md#quickactiont).[`isTerminated`](QuickAction.md#isterminated)

##### isCancellable()

```ts
isCancellable(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`QuickAction`](QuickAction.md#quickactiont).[`isCancellable`](QuickAction.md#iscancellable)

##### getTargetInfoInternal()

```ts
getTargetInfoInternal(): Promise<TargetInfo>
```

###### Returns

`Promise`\<[`TargetInfo`](../../../../shared/src/types/TargetInfo.md#targetinfo)\>

###### Inherited from

[`QuickAction`](QuickAction.md#quickactiont).[`getTargetInfoInternal`](QuickAction.md#gettargetinfointernal)

##### execute()

```ts
execute(): Promise<void>
```

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`QuickAction`](QuickAction.md#quickactiont).[`execute`](QuickAction.md#execute)

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

[`QuickAction`](QuickAction.md#quickactiont).[`close`](QuickAction.md#close)

##### didContainerRemove()

```ts
didContainerRemove(): void
```

###### Returns

`void`

###### Inherited from

[`QuickAction`](QuickAction.md#quickactiont).[`didContainerRemove`](QuickAction.md#didcontainerremove)
