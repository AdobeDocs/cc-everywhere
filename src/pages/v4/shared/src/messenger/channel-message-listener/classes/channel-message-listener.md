# Class: ChannelMessageListener

## Implements

- [`IChannelMessengerDelegate`](../../channel-messenger-types/interfaces/i-channel-messenger-delegate.md)

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
| `sourceChannel` | [`MessageChannel`](../../channel-messenger-types/enumerations/message-channel.md) | `undefined` |
| `targetProtocolVersion` | [`ProtocolVersion`](../../protocol-types/enumerations/protocol-version.md) | `ProtocolVersion.V1_3` |
| `_filterRequestIdMismatch` | `boolean` | `false` |
| `protocolHandlersModule`? | [`ProtocolHandlersModule`](../../protocol-types/interfaces/protocol-handlers-module.md) | `undefined` |

#### Returns

[`ChannelMessageListener`](channel-message-listener.md)

## Methods

### reset()

```ts
reset(): void
```

#### Returns

`void`

<HorizontalLine />

### didGetMessage()

```ts
didGetMessage<T>(message, requestId?): void
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](../../message-types/enumerations/message-type.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](../../message-types/type-aliases/message.md) `T` |
| `requestId`? | `string` |

#### Returns

`void`

#### Implementation of

[`IChannelMessengerDelegate`](../../channel-messenger-types/interfaces/i-channel-messenger-delegate.md).`didGetMessage`

<HorizontalLine />

### setTarget()

```ts
setTarget(targetChannel, targetChannelInfo): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../channel-messenger-types/enumerations/message-channel.md) |
| `targetChannelInfo` | [`TargetChannelInfo`](../../channel-messenger-types/interfaces/target-channel-info.md) |

#### Returns

`void`

<HorizontalLine />

### removeTarget()

```ts
removeTarget(targetChannel): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../channel-messenger-types/enumerations/message-channel.md) |

#### Returns

`void`

<HorizontalLine />

### hasTarget()

```ts
hasTarget(targetChannel): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../channel-messenger-types/enumerations/message-channel.md) |

#### Returns

`boolean`

<HorizontalLine />

### getTarget()

```ts
getTarget(targetChannel): undefined | TargetChannelInfo
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../channel-messenger-types/enumerations/message-channel.md) |

#### Returns

`undefined` \| [`TargetChannelInfo`](../../channel-messenger-types/interfaces/target-channel-info.md)

<HorizontalLine />

### addListenerForTarget()

```ts
addListenerForTarget(targetChannel, callback): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../channel-messenger-types/enumerations/message-channel.md) |
| `callback` | [`TargetAddedCallback`](../../channel-messenger-types/type-aliases/target-added-callback.md) |

#### Returns

`void`

<HorizontalLine />

### sendMessage()

```ts
sendMessage<T>(targetChannel, message): boolean
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](../../message-types/enumerations/message-type.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../channel-messenger-types/enumerations/message-channel.md) |
| `message` | [`SimpleMessageType`](../../message-types/type-aliases/simple-message-type.md) \| [`Message`](../../message-types/type-aliases/message.md) `T` |

#### Returns

`boolean`

<HorizontalLine />

### sendMessageCompat()

```ts
sendMessageCompat<T>(targetChannel, message): boolean
```

Sends a message using a message channel that is compatible with older version of SDK.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* [`MessageType`](../../message-types/enumerations/message-type.md) | The type of the message being sent. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../channel-messenger-types/enumerations/message-channel.md) |  |
| `message` | [`MessageCompat`](../../message-types/type-aliases/message-compat.md) `T` | The message to send. |

#### Returns

`boolean`

- True if the message was successfully sent, false otherwise.

<HorizontalLine />

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
| `messageType` | [`MessageType`](../../message-types/enumerations/message-type.md) | Listener is invoked for incoming message of this message type. |
| `listener` | [`Listener`](../type-aliases/listener.md) | Callback function that is invoked when there is an incoming message. |
| `messageFilter`? | [`MessageFilter`](../../channel-messenger-types/type-aliases/message-filter.md) | Filter the incoming message. If this function returns true the element is passed downstream, if it returns false the element is discarded. |

#### Returns

`void`

<HorizontalLine />

### removeListener()

```ts
removeListener(messageType, listener): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `messageType` | [`MessageType`](../../message-types/enumerations/message-type.md) |
| `listener` | [`Listener`](../type-aliases/listener.md) |

#### Returns

`void`

<HorizontalLine />

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
