[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Class: default

## Constructors

### Constructor

```ts
new default(
   channelMessengerDelegate, 
   _sourceChannel, 
   _sourceProtocolVersion, 
   _targetProtocolVersion, 
   _protocolHandlersModule?): ChannelMessenger;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `channelMessengerDelegate` | [`IChannelMessengerDelegate`](../../channel-messenger-types/interfaces/i-channel-messenger-delegate.md) |
| `_sourceChannel` | [`MessageChannel`](../../channel-messenger-types/enumerations/message-channel.md) |
| `_sourceProtocolVersion` | [`ProtocolVersion`](../../protocol-types/enumerations/protocol-version.md) |
| `_targetProtocolVersion` | [`ProtocolVersion`](../../protocol-types/enumerations/protocol-version.md) |
| `_protocolHandlersModule?` | [`ProtocolHandlersModule`](../../protocol-types/interfaces/protocol-handlers-module.md) |

#### Returns

`ChannelMessenger`

## Methods

### addTarget()

```ts
addTarget(targetChannel, targetChannelInfo): void;
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
removeTarget(targetChannel): void;
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
hasTarget(targetChannel): boolean;
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
getTarget(targetChannel): 
  | undefined
  | TargetChannelInfo;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../channel-messenger-types/enumerations/message-channel.md) |

#### Returns

  \| `undefined`
  \| [`TargetChannelInfo`](../../channel-messenger-types/interfaces/target-channel-info.md)

<HorizontalLine />

### sendMessage()

```ts
sendMessage<T>(
   targetChannel, 
   message, 
   requestId?): boolean;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](../../message-types/enumerations/message-type.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](../../channel-messenger-types/enumerations/message-channel.md) |
| `message` | \| [`Message`](../../message-types/type-aliases/message.md)&lt;`T`&gt; \| [`MessageCompat`](../../message-types/type-aliases/message-compat.md)&lt;`T`&gt; |
| `requestId?` | `string` |

#### Returns

`boolean`

<HorizontalLine />

### removeListener()

```ts
removeListener(): void;
```

#### Returns

`void`
