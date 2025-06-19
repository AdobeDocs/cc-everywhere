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
| `channelMessengerDelegate` | [`IChannelMessengerDelegate`](../../channel-messenger-types/interfaces/i-channel-messenger-delegate.md) |
| `_sourceChannel` | [`MessageChannel`](../../channel-messenger-types/enumerations/message-channel.md) |
| `_sourceProtocolVersion` | [`ProtocolVersion`](../../protocol-types/enumerations/protocol-version.md) |
| `_targetProtocolVersion` | [`ProtocolVersion`](../../protocol-types/enumerations/protocol-version.md) |
| `_protocolHandlersModule`? | [`ProtocolHandlersModule`](../../protocol-types/interfaces/protocol-handlers-module.md) |

#### Returns

[`default`](../../channel-messenger/classes/default.md)

## Methods

### addTarget()

```ts
addTarget(targetChannel, targetChannelInfo): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../channel-messenger-types/enumerations/message-channel.md) |
| `targetChannelInfo` | [`TargetChannelInfo`](../../channel-messenger-types/interfaces/target-channel-info.md) |

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
| `targetChannel` | [`MessageChannel`](../../channel-messenger-types/enumerations/message-channel.md) |

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
| `targetChannel` | [`MessageChannel`](../../channel-messenger-types/enumerations/message-channel.md) |

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
| `targetChannel` | [`MessageChannel`](../../channel-messenger-types/enumerations/message-channel.md) |

#### Returns

`undefined` \| [`TargetChannelInfo`](../../channel-messenger-types/interfaces/target-channel-info.md)

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
| `T` *extends* [`MessageType`](../../message-types/enumerations/message-type.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../channel-messenger-types/enumerations/message-channel.md) |
| `message` | [`Message`](../../message-types/type-aliases/message.md)<`T`\> \| [`MessageCompat`](../../message-types/type-aliases/message-compat.md)<`T`\> |
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
