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
| `channelMessengerDelegate` | [`IChannelMessengerDelegate`](../../ChannelMessenger.types/interfaces/IChannelMessengerDelegate.md) |
| `_sourceChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/MessageChannel.md) |
| `_sourceProtocolVersion` | [`ProtocolVersion`](../../Protocol.types/enumerations/ProtocolVersion.md) |
| `_targetProtocolVersion` | [`ProtocolVersion`](../../Protocol.types/enumerations/ProtocolVersion.md) |
| `_protocolHandlersModule`? | [`ProtocolHandlersModule`](../../Protocol.types/interfaces/ProtocolHandlersModule.md) |

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
| `T` *extends* [`MessageType`](../../Message.types/enumerations/MessageType.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../ChannelMessenger.types/enumerations/MessageChannel.md) |
| `message` | [`Message`](../../Message.types/type-aliases/Message.md)<`T`\> \| [`MessageCompat`](../../Message.types/type-aliases/MessageCompat.md)<`T`\> |
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
