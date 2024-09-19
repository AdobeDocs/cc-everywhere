[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / sdk/src/actions/WarmupAction

# sdk/src/actions/WarmupAction

## Classes

### WarmupAction

#### Extends

- [`Action`](Action.md#actiont)\<[`ActionContext`](ActionContext.md#actioncontextt)\<[`WarmupDesignConfig`](../../../shared/src/types/module/DesignConfig.md#warmupdesignconfig)\>\>

#### Implements

- `ContainerDelegate`

#### Constructors

##### new WarmupAction()

```ts
new WarmupAction(context): WarmupAction
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ActionContext`](ActionContext.md#actioncontextt)\<[`WarmupDesignConfig`](../../../shared/src/types/module/DesignConfig.md#warmupdesignconfig)\> |

###### Returns

[`WarmupAction`](WarmupAction.md#warmupaction)

###### Overrides

[`Action`](Action.md#actiont).[`constructor`](Action.md#constructors)

#### Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| `hostCallbackHandler` | `readonly` | [`HostCallbackHandler`](../host/HostCallbackHandler.md#hostcallbackhandler) | [`Action`](Action.md#actiont).`hostCallbackHandler` |
| `context` | `public` | [`ActionContext`](ActionContext.md#actioncontextt)\<[`WarmupDesignConfig`](../../../shared/src/types/module/DesignConfig.md#warmupdesignconfig)\> | [`Action`](Action.md#actiont).`context` |

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
close(reason, error?): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason` | `ContainerCloseReason` |
| `error`? | [`CCEverywhereError`](../../../shared/src/error/CCEverywhereError.md#cceverywhereerrort)\<[`ErrorCode`](../error/ErrorCodes.md#errorcode)\> |

###### Returns

`void`

###### Overrides

[`Action`](Action.md#actiont).[`close`](Action.md#close)

##### didCloseButtonClick()

```ts
didCloseButtonClick(): void
```

###### Returns

`void`

##### didContainerRemove()

```ts
didContainerRemove(): void
```

###### Returns

`void`

###### Implementation of

`ContainerDelegate.didContainerRemove`

##### getTargetInfoInternal()

```ts
getTargetInfoInternal(): Promise<TargetInfo>
```

###### Returns

`Promise`\<[`TargetInfo`](../../../shared/src/types/TargetInfo.md#targetinfo)\>

###### Implementation of

`ContainerDelegate.getTargetInfoInternal`
