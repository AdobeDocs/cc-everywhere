[cc-everywhere](../../../../../index.md) / [sdk/src/actions/WarmupAction](../index.md) / WarmupAction

# Class: WarmupAction

## Extends

- [`Action`](../../Action/classes/Action.md)<[`ActionContext`](../../ActionContext/interfaces/ActionContext.md)<[`WarmupDesignConfig`](../../../../../shared/src/types/module/DesignConfig.types/interfaces/WarmupDesignConfig.md)\>\>

## Implements

- `ContainerDelegate`

## Constructors

### new WarmupAction()

```ts
new WarmupAction(context): WarmupAction
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ActionContext`](../../ActionContext/interfaces/ActionContext.md)<[`WarmupDesignConfig`](../../../../../shared/src/types/module/DesignConfig.types/interfaces/WarmupDesignConfig.md)\> |

#### Returns

[`WarmupAction`](WarmupAction.md)

#### Overrides

[`Action`](../../Action/classes/Action.md).[`constructor`](../../Action/classes/Action.md#constructors)

## Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| `hostCallbackHandler` | `readonly` | [`HostCallbackHandler`](../../../host/HostCallbackHandler/classes/HostCallbackHandler.md) | [`Action`](../../Action/classes/Action.md).`hostCallbackHandler` |
| `context` | `public` | [`ActionContext`](../../ActionContext/interfaces/ActionContext.md)<[`WarmupDesignConfig`](../../../../../shared/src/types/module/DesignConfig.types/interfaces/WarmupDesignConfig.md)\> | [`Action`](../../Action/classes/Action.md).`context` |

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

### execute()

```ts
execute(): Promise<void>
```

#### Returns

`Promise`<`void`\>

#### Overrides

[`Action`](../../Action/classes/Action.md).[`execute`](../../Action/classes/Action.md#execute)

***

### close()

```ts
close(reason, error?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason` | `ContainerCloseReason` |
| `error`? | [`CCEverywhereError`](../../../../../shared/src/error/CCEverywhereError/classes/CCEverywhereError.md)<[`ErrorCode`](../../../error/ErrorCodes/type-aliases/ErrorCode.md)\> |

#### Returns

`void`

#### Overrides

[`Action`](../../Action/classes/Action.md).[`close`](../../Action/classes/Action.md#close)

***

### didCloseButtonClick()

```ts
didCloseButtonClick(): void
```

#### Returns

`void`

***

### didContainerRemove()

```ts
didContainerRemove(): void
```

#### Returns

`void`

#### Implementation of

`ContainerDelegate.didContainerRemove`

***

### getTargetInfoInternal()

```ts
getTargetInfoInternal(): Promise<TargetInfo>
```

#### Returns

`Promise`<[`TargetInfo`](../../../../../shared/src/types/TargetInfo.types/interfaces/TargetInfo.md)\>

#### Implementation of

`ContainerDelegate.getTargetInfoInternal`
