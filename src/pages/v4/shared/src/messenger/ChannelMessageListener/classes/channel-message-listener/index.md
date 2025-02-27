# Class: ChannelMessageListener

## Implements

- [`IChannelMessengerDelegate`](../../../ChannelMessenger.types/interfaces/i-channel-messenger-delegate/index.md)

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

| Parameter                  | Type                                                                                  | Default value          |
| -------------------------- | ------------------------------------------------------------------------------------- | ---------------------- |
| `sourceChannel`            | [`MessageChannel`](../../../ChannelMessenger.types/enumerations/message-channel/index.md)       | `undefined`            |
| `targetProtocolVersion`    | [`ProtocolVersion`](../../../Protocol.types/enumerations/protocol-version/index.md)             | `ProtocolVersion.V1_3` |
| `_filterRequestIdMismatch` | `boolean`                                                                             | `false`                |
| `protocolHandlersModule`?  | [`ProtocolHandlersModule`](../../../Protocol.types/interfaces/protocol-handlers-module/index.md) | `undefined`            |

#### Returns

[`ChannelMessageListener`](../channel-message-listener/index.md)

## Methods

### reset()

```ts
reset(): void
```

#### Returns

`void`

<hr />

### didGetMessage()

```ts
didGetMessage<T>(message, requestId?): void
```

#### Type Parameters

| Type Parameter                                                                 |
| ------------------------------------------------------------------------------ |
| `T` *extends* [`MessageType`](../../../Message.types/enumerations/message-type/index.md) |

#### Parameters

| Parameter    | Type                                                        |
| ------------ | ----------------------------------------------------------- |
| `message`    | [`Message`](../../../Message.types/type-aliases/message/index.md)`T` |
| `requestId`? | `string`                                                    |

#### Returns

`void`

#### Implementation of

[`IChannelMessengerDelegate`](../../../ChannelMessenger.types/interfaces/i-channel-messenger-delegate/index.md).`didGetMessage`

<hr />

### setTarget()

```ts
setTarget(targetChannel, targetChannelInfo): void
```

#### Parameters

| Parameter           | Type                                                                                |
| ------------------- | ----------------------------------------------------------------------------------- |
| `targetChannel`     | [`MessageChannel`](../../../ChannelMessenger.types/enumerations/message-channel/index.md)     |
| `targetChannelInfo` | [`TargetChannelInfo`](../../../ChannelMessenger.types/interfaces/target-channel-info/index.md) |

#### Returns

`void`

<hr />

### removeTarget()

```ts
removeTarget(targetChannel): void
```

#### Parameters

| Parameter       | Type                                                                            |
| --------------- | ------------------------------------------------------------------------------- |
| `targetChannel` | [`MessageChannel`](../../../ChannelMessenger.types/enumerations/message-channel/index.md) |

#### Returns

`void`

<hr />

### hasTarget()

```ts
hasTarget(targetChannel): boolean
```

#### Parameters

| Parameter       | Type                                                                            |
| --------------- | ------------------------------------------------------------------------------- |
| `targetChannel` | [`MessageChannel`](../../../ChannelMessenger.types/enumerations/message-channel/index.md) |

#### Returns

`boolean`

<hr />

### getTarget()

```ts
getTarget(targetChannel): undefined | TargetChannelInfo
```

#### Parameters

| Parameter       | Type                                                                            |
| --------------- | ------------------------------------------------------------------------------- |
| `targetChannel` | [`MessageChannel`](../../../ChannelMessenger.types/enumerations/message-channel/index.md) |

#### Returns

`undefined` \| [`TargetChannelInfo`](../../../ChannelMessenger.types/interfaces/target-channel-info/index.md)

<hr />

### addListenerForTarget()

```ts
addListenerForTarget(targetChannel, callback): void
```

#### Parameters

| Parameter       | Type                                                                                      |
| --------------- | ----------------------------------------------------------------------------------------- |
| `targetChannel` | [`MessageChannel`](../../../ChannelMessenger.types/enumerations/message-channel/index.md)           |
| `callback`      | [`TargetAddedCallback`](../../../ChannelMessenger.types/type-aliases/target-added-callback/index.md) |

#### Returns

`void`

<hr />

### sendMessage()

```ts
sendMessage<T>(targetChannel, message): boolean
```

#### Type Parameters

| Type Parameter                                                                 |
| ------------------------------------------------------------------------------ |
| `T` *extends* [`MessageType`](../../../Message.types/enumerations/message-type/index.md) |

#### Parameters

| Parameter       | Type                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `targetChannel` | [`MessageChannel`](../../../ChannelMessenger.types/enumerations/message-channel/index.md)                                                             |
| `message`       | [`SimpleMessageType/index.md`](../../../Message.types/type-aliases/simple-message-type/index.md) \| [`Message`](../../../Message.types/type-aliases/message/index.md)`T` |

#### Returns

`boolean`

<hr />

### sendMessageCompat()

```ts
sendMessageCompat<T>(targetChannel, message): boolean
```

Sends a message using a message channel that is compatible with older version of SDK.

#### Type Parameters

| Type Parameter                                                                 | Description                         |
| ------------------------------------------------------------------------------ | ----------------------------------- |
| `T` *extends* [`MessageType`](../../../Message.types/enumerations/message-type/index.md) | The type of the message being sent. |

#### Parameters

| Parameter       | Type                                                                            | Description          |
| --------------- | ------------------------------------------------------------------------------- | -------------------- |
| `targetChannel` | [`MessageChannel`](../../../ChannelMessenger.types/enumerations/message-channel/index.md) |                      |
| `message`       | [`message-compat/index.md`](../../../Message.types/type-aliases/message-compat/index.md)`T`         | The message to send. |

#### Returns

`boolean`

- True if the message was successfully sent, false otherwise.

<hr />

### addListener()

```ts
addListener(
   messageType, 
   listener, 
   messageFilter?): void
```

#### Parameters

| Parameter        | Type                                                                          | Description                                                                                                                                |
| ---------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `messageType`    | [`MessageType`](../../../Message.types/enumerations/message-type/index.md)              | Listener is invoked for incoming message of this message type.                                                                             |
| `listener`       | [`Listener`](../../type-aliases/listener/index.md)                                     | Callback function that is invoked when there is an incoming message.                                                                       |
| `messageFilter`? | [`MessageFilter`](../../../ChannelMessenger.types/type-aliases/message-filter/index.md) | Filter the incoming message. If this function returns true the element is passed downstream, if it returns false the element is discarded. |

#### Returns

`void`

<hr />

### removeListener()

```ts
removeListener(messageType, listener): void
```

#### Parameters

| Parameter     | Type                                                             |
| ------------- | ---------------------------------------------------------------- |
| `messageType` | [`MessageType`](../../../Message.types/enumerations/message-type/index.md) |
| `listener`    | [`Listener`](../../type-aliases/listener/index.md)                        |

#### Returns

`void`

<hr />

### setRequestId()

```ts
setRequestId(requestId): void
```

#### Parameters

| Parameter   | Type     |
| ----------- | -------- |
| `requestId` | `string` |

#### Returns

`void`
