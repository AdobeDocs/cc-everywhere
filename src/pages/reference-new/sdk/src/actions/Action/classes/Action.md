[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / [sdk/src/actions/Action](../index.md) / Action

# Class: `abstract` Action\<T\>

## Extended by

- [`BaseAction`](../../BaseAction/classes/BaseAction.md)
- [`WarmupAction`](../../WarmupAction/classes/WarmupAction.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`SDKContext`](../../ActionContext/interfaces/SDKContext.md) |

## Constructors

### new Action()

```ts
new Action<T>(
   context, 
   intent, 
   analyticsWorkflow, 
   _isCancellable, 
   messagesList, 
   actionProperties?, 
callbacks?): Action<T>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `T` |
| `intent` | [`ActionIntent`](../../../../../shared/src/types/ActionIntent.types/type-aliases/ActionIntent.md) |
| `analyticsWorkflow` | [`AnalyticsWorkflow`](../../../analytics/AnalyticsManager.types/enumerations/AnalyticsWorkflow.md) |
| `_isCancellable` | `boolean` |
| `messagesList` | [`MessageType`](../../../../../shared/src/messenger/Message.types/enumerations/MessageType.md)[] |
| `actionProperties`? | [`ActionProperties`](../../Action.types/interfaces/ActionProperties.md) |
| `callbacks`? | [`Callbacks`](../../../../../shared/src/types/Callbacks.types/interfaces/Callbacks.md) |

#### Returns

[`Action`](Action.md)\<`T`\>

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| `hostCallbackHandler` | `readonly` | [`HostCallbackHandler`](../../../host/HostCallbackHandler/classes/HostCallbackHandler.md) |
| `context` | `public` | `T` |

## Methods

### execute()

```ts
abstract execute(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

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

***

### isActive()

```ts
isActive(): boolean
```

#### Returns

`boolean`

***

### isTerminating()

```ts
isTerminating(): boolean
```

#### Returns

`boolean`

***

### isTerminated()

```ts
isTerminated(): boolean
```

#### Returns

`boolean`

***

### isCancellable()

```ts
isCancellable(): boolean
```

#### Returns

`boolean`
