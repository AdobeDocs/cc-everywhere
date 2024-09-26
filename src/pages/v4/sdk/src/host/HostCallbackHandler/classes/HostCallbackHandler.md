[cc-everywhere](../../../../../index.md) / [sdk/src/host/HostCallbackHandler](../index.md) / HostCallbackHandler

# Class: HostCallbackHandler

## Constructors

### new HostCallbackHandler()

```ts
new HostCallbackHandler(hostCallbacks?): HostCallbackHandler
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hostCallbacks`? | [`Callbacks`](../../../../../shared/src/types/Callbacks.types/interfaces/Callbacks.md) |

#### Returns

[`HostCallbackHandler`](HostCallbackHandler.md)

## Methods

### onLoadStart()

```ts
onLoadStart(): void
```

#### Returns

`void`

***

### onLoad()

```ts
onLoad(): void
```

#### Returns

`void`

***

### onCancel()

```ts
onCancel(): void
```

#### Returns

`void`

***

### onPublishStart()

```ts
onPublishStart(): void
```

#### Returns

`void`

***

### onPublish()

```ts
onPublish(intent, publishParams): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `intent` | [`ActionIntent`](../../../../../shared/src/types/ActionIntent.types/type-aliases/ActionIntent.md) |
| `publishParams` | [`PublishParams`](../../../../../shared/src/types/PublishParams.types/interfaces/PublishParams.md) |

#### Returns

`void`

***

### onError()

```ts
onError(error): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](../../../../../shared/src/error/CCEverywhereError/classes/CCEverywhereError.md)<[`ErrorCode`](../../../error/ErrorCodes/type-aliases/ErrorCode.md)\> |

#### Returns

`void`

***

### onEvent()

```ts
onEvent(data): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`HostEventData`](../../../../../shared/src/messenger/MessageData.types/interfaces/HostEventData.md) |

#### Returns

`void`

***

### onIntentChange()

```ts
onIntentChange(oldIntent, newIntent): undefined | IntentChangeConfig
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `oldIntent` | [`ActionIntent`](../../../../../shared/src/types/ActionIntent.types/type-aliases/ActionIntent.md) |
| `newIntent` | [`ActionIntent`](../../../../../shared/src/types/ActionIntent.types/type-aliases/ActionIntent.md) |

#### Returns

`undefined` \| [`IntentChangeConfig`](../../../../../shared/src/types/Callbacks.types/interfaces/IntentChangeConfig.md)
