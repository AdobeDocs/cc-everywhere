[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / sdk/src/host/HostCallbackHandler

# sdk/src/host/HostCallbackHandler

## Classes

### HostCallbackHandler

#### Constructors

##### new HostCallbackHandler()

```ts
new HostCallbackHandler(hostCallbacks?): HostCallbackHandler
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hostCallbacks`? | [`Callbacks`](../../../shared/src/types/Callbacks.md#callbacks) |

###### Returns

[`HostCallbackHandler`](HostCallbackHandler.md#hostcallbackhandler)

#### Methods

##### onLoadStart()

```ts
onLoadStart(): void
```

###### Returns

`void`

##### onLoad()

```ts
onLoad(): void
```

###### Returns

`void`

##### onCancel()

```ts
onCancel(): void
```

###### Returns

`void`

##### onPublishStart()

```ts
onPublishStart(): void
```

###### Returns

`void`

##### onPublish()

```ts
onPublish(intent, publishParams): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `intent` | [`ActionIntent`](../../../shared/src/types/ActionIntent.md#actionintent) |
| `publishParams` | [`PublishParams`](../../../shared/src/types/PublishParams.md#publishparams) |

###### Returns

`void`

##### onError()

```ts
onError(error): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](../../../shared/src/error/CCEverywhereError.md#cceverywhereerrort)\<[`ErrorCode`](../error/ErrorCodes.md#errorcode)\> |

###### Returns

`void`

##### onEvent()

```ts
onEvent(data): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`HostEventData`](../../../shared/src/messenger/MessageData.md#hosteventdata) |

###### Returns

`void`

##### onIntentChange()

```ts
onIntentChange(oldIntent, newIntent): undefined | IntentChangeConfig
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `oldIntent` | [`ActionIntent`](../../../shared/src/types/ActionIntent.md#actionintent) |
| `newIntent` | [`ActionIntent`](../../../shared/src/types/ActionIntent.md#actionintent) |

###### Returns

`undefined` \| [`IntentChangeConfig`](../../../shared/src/types/Callbacks.md#intentchangeconfig)
