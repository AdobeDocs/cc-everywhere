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

| Parameter | Type |
| ------ | ------ |
| `channelMessengerDelegate` | [`IChannelMessengerDelegate`](../../ChannelMessenger.types/interfaces/i-channel-messenger-delegate.md) |
| `_sourceChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/message-channel.md) |
| `_sourceProtocolVersion` | [`ProtocolVersion`](../../Protocol.types/enumerations/protocol-version.md) |
| `_targetProtocolVersion` | [`ProtocolVersion`](../../Protocol.types/enumerations/protocol-version.md) |
| `_protocolHandlersModule`? | [`ProtocolHandlersModule`](../../Protocol.types/interfaces/protocol-handlers-module.md) |

#### Returns

[`default`](default.md)

## Methods

### addTarget()

```ts
addTarget(targetChannel, targetChannelInfo): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/message-channel.md) |
| `targetChannelInfo` | [`TargetChannelInfo`](../../ChannelMessenger.types/interfaces/target-channel-info.md) |

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
| `targetChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/message-channel.md) |

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
| `targetChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/message-channel.md) |

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
| `targetChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/message-channel.md) |

#### Returns

`undefined` \| [`TargetChannelInfo`](../../ChannelMessenger.types/interfaces/target-channel-info.md)

***

### sendMessage()

```ts
sendMessage<T>(
   targetChannel, 
   message, 
   requestId?): boolean
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](../../Message.types/enumerations/message-type.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/message-channel.md) |
| `message` | [`Message`](../../Message.types/type-aliases/message.md)<`T`\> \| [`MessageCompat`](../../Message.types/type-aliases/message-compat.md)<`T`\> |
| `requestId`? | `string` |

#### Returns

`boolean`

***

### removeListener()

```ts
removeListener(): void
```

#### Returns

`void`
