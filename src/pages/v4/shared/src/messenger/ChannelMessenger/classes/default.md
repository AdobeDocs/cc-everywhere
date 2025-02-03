# Class: default

## Constructors

### new default()

```ts
new default(
   channelMessengerDelegate, 
   _sourceChannel, 
   _sourceProtocolVersion, 
   _targetProtocolVersion, 
   _protocolHandlersModule?): default
```

#### Parameters

| Parameter                  | Type                                                                                                |
| -------------------------- | --------------------------------------------------------------------------------------------------- |
| `channelMessengerDelegate` | [`IChannelMessengerDelegate`](../../ChannelMessenger.types/interfaces/i-channel-messenger-delegate.md) |
| `_sourceChannel`           | [`MessageChannel`](../../ChannelMessenger.types/enumerations/message-channel/index.md)                     |
| `_sourceProtocolVersion`   | [`ProtocolVersion`](../../Protocol.types/enumerations/protocol-version.md)                           |
| `_targetProtocolVersion`   | [`ProtocolVersion`](../../Protocol.types/enumerations/protocol-version.md)                           |
| `_protocolHandlersModule`? | [`ProtocolHandlersModule`](../../Protocol.types/interfaces/protocol-handlers-module.md)               |

#### Returns

[`default`](default.md)

## Methods

### addTarget()

```ts
addTarget(targetChannel, targetChannelInfo): void
```

#### Parameters

| Parameter           | Type                                                                                |
| ------------------- | ----------------------------------------------------------------------------------- |
| `targetChannel`     | [`MessageChannel`](../../ChannelMessenger.types/enumerations/message-channel/index.md)     |
| `targetChannelInfo` | [`TargetChannelInfo`](../../ChannelMessenger.types/interfaces/target-channel-info.md) |

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
| `targetChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/message-channel/index.md) |

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
| `targetChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/message-channel/index.md) |

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
| `targetChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/message-channel/index.md) |

#### Returns

`undefined` \| [`TargetChannelInfo`](../../ChannelMessenger.types/interfaces/target-channel-info.md)

<hr />

### sendMessage()

```ts
sendMessage<T>(
   targetChannel, 
   message, 
   requestId?): boolean
```

#### Type Parameters

| Type Parameter                                                                 |
| ------------------------------------------------------------------------------ |
| `T` *extends* [`MessageType`](../../Message.types/enumerations/message-type.md) |

#### Parameters

| Parameter       | Type                                                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `targetChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/message-channel/index.md)                                                        |
| `message`       | [`Message`](../../Message.types/type-aliases/Message.md)`T` \| [`MessageCompat`](../../Message.types/type-aliases/MessageCompat.md)`T` |
| `requestId`?    | `string`                                                                                                                               |

#### Returns

`boolean`

<hr />

### removeListener()

```ts
removeListener(): void
```

#### Returns

`void`
