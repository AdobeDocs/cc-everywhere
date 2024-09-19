[**cc-everywhere**](../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../index.md) / sdk/src/actions/quick-action/QuickAction

# sdk/src/actions/quick-action/QuickAction

## Classes

### QuickAction\<T\>

A action is a specific thing that the user can do. End user will be interacting
with the action implemented using BaseAction (this class). Action class takes care
of creating the modal dialog/window.
of creating the modal dialog/window.

Each implementation of BaseAction is mapped to Workflow & AnalyticsWorkflow

#### Extends

- [`BaseAction`](../BaseAction.md#baseactiont)\<`T`\>

#### Extended by

- [`MergeVideosAction`](MergeVideosAction.md#mergevideosaction)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `QuickActionDesignConfig` |

#### Constructors

##### new QuickAction()

```ts
new QuickAction<T>(context): QuickAction<T>
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ActionContext`](../ActionContext.md#actioncontextt)\<`T`\> |

###### Returns

[`QuickAction`](QuickAction.md#quickactiont)\<`T`\>

###### Overrides

[`BaseAction`](../BaseAction.md#baseactiont).[`constructor`](../BaseAction.md#constructors)

#### Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| `hostCallbackHandler` | `readonly` | [`HostCallbackHandler`](../../host/HostCallbackHandler.md#hostcallbackhandler) | [`BaseAction`](../BaseAction.md#baseactiont).`hostCallbackHandler` |
| `context` | `public` | [`ActionContext`](../ActionContext.md#actioncontextt)\<`T`\> | [`BaseAction`](../BaseAction.md#baseactiont).`context` |

#### Methods

##### isActive()

```ts
isActive(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`BaseAction`](../BaseAction.md#baseactiont).[`isActive`](../BaseAction.md#isactive)

##### isTerminating()

```ts
isTerminating(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`BaseAction`](../BaseAction.md#baseactiont).[`isTerminating`](../BaseAction.md#isterminating)

##### isTerminated()

```ts
isTerminated(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`BaseAction`](../BaseAction.md#baseactiont).[`isTerminated`](../BaseAction.md#isterminated)

##### isCancellable()

```ts
isCancellable(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`BaseAction`](../BaseAction.md#baseactiont).[`isCancellable`](../BaseAction.md#iscancellable)

##### getTargetInfoInternal()

```ts
getTargetInfoInternal(): Promise<TargetInfo>
```

###### Returns

`Promise`\<[`TargetInfo`](../../../../shared/src/types/TargetInfo.md#targetinfo)\>

###### Inherited from

[`BaseAction`](../BaseAction.md#baseactiont).[`getTargetInfoInternal`](../BaseAction.md#gettargetinfointernal)

##### execute()

```ts
execute(): Promise<void>
```

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`BaseAction`](../BaseAction.md#baseactiont).[`execute`](../BaseAction.md#execute)

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

[`BaseAction`](../BaseAction.md#baseactiont).[`close`](../BaseAction.md#close)

##### didContainerRemove()

```ts
didContainerRemove(): void
```

###### Returns

`void`

###### Inherited from

[`BaseAction`](../BaseAction.md#baseactiont).[`didContainerRemove`](../BaseAction.md#didcontainerremove)
