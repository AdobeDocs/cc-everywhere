[cc-everywhere](../../../../../index.md) / [shared/src/messenger/ChannelMessageListener](../index.md) / ChannelMessageListener

# Class: ChannelMessageListener

## Implements

- [`IChannelMessengerDelegate`](../../ChannelMessenger.types/interfaces/IChannelMessengerDelegate.md)

## Constructors

### new ChannelMessageListener()

```ts
new ChannelMessageListener(
   sourceChannel, 
   targetProtocolVersion, 
   _filterRequestIdMismatch, 
   protocolHandlersModule?): ChannelMessageListener
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `sourceChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/MessageChannel.md) | `undefined` |
| `targetProtocolVersion` | [`ProtocolVersion`](../../Protocol.types/enumerations/ProtocolVersion.md) | `ProtocolVersion.V1_3` |
| `_filterRequestIdMismatch` | `boolean` | `false` |
| `protocolHandlersModule`? | [`ProtocolHandlersModule`](../../Protocol.types/interfaces/ProtocolHandlersModule.md) | `undefined` |

#### Returns

[`ChannelMessageListener`](ChannelMessageListener.md)

## Methods

### reset()

```ts
reset(): void
```

#### Returns

`void`

***

### didGetMessage()

```ts
didGetMessage<T>(message, requestId?): void
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](../../Message.types/enumerations/MessageType.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](../../Message.types/type-aliases/Message.md)<`T`\> |
| `requestId`? | `string` |

#### Returns

`void`

#### Implementation of

[`IChannelMessengerDelegate`](../../ChannelMessenger.types/interfaces/IChannelMessengerDelegate.md).`didGetMessage`

***

### setTarget()

```ts
setTarget(targetChannel, targetChannelInfo): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/MessageChannel.md) |
| `targetChannelInfo` | [`TargetChannelInfo`](../../ChannelMessenger.types/interfaces/TargetChannelInfo.md) |

#### Returns

`void`

***

### removeTarget()

```ts
removeTarget(targetChannel): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/MessageChannel.md) |

#### Returns

`void`

***

### hasTarget()

```ts
hasTarget(targetChannel): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/MessageChannel.md) |

#### Returns

`boolean`

***

### getTarget()

```ts
getTarget(targetChannel): undefined | TargetChannelInfo
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/MessageChannel.md) |

#### Returns

`undefined` \| [`TargetChannelInfo`](../../ChannelMessenger.types/interfaces/TargetChannelInfo.md)

***

### addListenerForTarget()

```ts
addListenerForTarget(targetChannel, callback): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/MessageChannel.md) |
| `callback` | [`TargetAddedCallback`](../../ChannelMessenger.types/type-aliases/TargetAddedCallback.md) |

#### Returns

`void`

***

### sendMessage()

```ts
sendMessage<T>(targetChannel, message): boolean
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](../../Message.types/enumerations/MessageType.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/MessageChannel.md) |
| `message` | [`SimpleMessageType`](../../Message.types/type-aliases/SimpleMessageType.md) \| [`Message`](../../Message.types/type-aliases/Message.md)<`T`\> |

#### Returns

`boolean`

***

### sendMessageCompat()

```ts
sendMessageCompat<T>(targetChannel, message): boolean
```

Sends a message using a message channel that is compatible with older version of SDK.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* [`MessageType`](../../Message.types/enumerations/MessageType.md) | The type of the message being sent. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/MessageChannel.md) |  |
| `message` | [`MessageCompat`](../../Message.types/type-aliases/MessageCompat.md)<`T`\> | The message to send. |

#### Returns

`boolean`

- True if the message was successfully sent, false otherwise.

***

### addListener()

```ts
addListener(
   messageType, 
   listener, 
   messageFilter?): void
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `messageType` | [`MessageType`](../../Message.types/enumerations/MessageType.md) | Listener is invoked for incoming message of this message type. |
| `listener` | [`Listener`](../type-aliases/Listener.md) | Callback function that is invoked when there is an incoming message. |
| `messageFilter`? | [`MessageFilter`](../../ChannelMessenger.types/type-aliases/MessageFilter.md) | Filter the incoming message. If this function returns true the element is passed downstream, if it returns false the element is discarded. |

#### Returns

`void`

***

### removeListener()

```ts
removeListener(messageType, listener): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `messageType` | [`MessageType`](../../Message.types/enumerations/MessageType.md) |
| `listener` | [`Listener`](../type-aliases/Listener.md) |

#### Returns

`void`

***

### setRequestId()

```ts
setRequestId(requestId): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `requestId` | `string` |

#### Returns

`void`
