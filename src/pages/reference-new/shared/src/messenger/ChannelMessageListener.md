[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/messenger/ChannelMessageListener

# shared/src/messenger/ChannelMessageListener

## Classes

### ChannelMessageListener

#### Implements

- [`IChannelMessengerDelegate`](ChannelMessenger.md#ichannelmessengerdelegate)

#### Constructors

##### new ChannelMessageListener()

```ts
new ChannelMessageListener(
   sourceChannel, 
   targetProtocolVersion, 
   _filterRequestIdMismatch, 
   protocolHandlersModule?): ChannelMessageListener
```

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `sourceChannel` | [`MessageChannel`](ChannelMessenger.md#messagechannel) | `undefined` |
| `targetProtocolVersion` | [`ProtocolVersion`](Protocol.md#protocolversion) | `ProtocolVersion.V1_3` |
| `_filterRequestIdMismatch` | `boolean` | `false` |
| `protocolHandlersModule`? | [`ProtocolHandlersModule`](Protocol.md#protocolhandlersmodule) | `undefined` |

###### Returns

[`ChannelMessageListener`](ChannelMessageListener.md#channelmessagelistener)

#### Methods

##### reset()

```ts
reset(): void
```

###### Returns

`void`

##### didGetMessage()

```ts
didGetMessage<T>(message, requestId?): void
```

###### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](Message.md#messagetype) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](Message.md#messaget)\<`T`\> |
| `requestId`? | `string` |

###### Returns

`void`

###### Implementation of

[`IChannelMessengerDelegate`](ChannelMessenger.md#ichannelmessengerdelegate).`didGetMessage`

##### setTarget()

```ts
setTarget(targetChannel, targetChannelInfo): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](ChannelMessenger.md#messagechannel) |
| `targetChannelInfo` | [`TargetChannelInfo`](ChannelMessenger.md#targetchannelinfo) |

###### Returns

`void`

##### removeTarget()

```ts
removeTarget(targetChannel): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](ChannelMessenger.md#messagechannel) |

###### Returns

`void`

##### hasTarget()

```ts
hasTarget(targetChannel): boolean
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](ChannelMessenger.md#messagechannel) |

###### Returns

`boolean`

##### getTarget()

```ts
getTarget(targetChannel): undefined | TargetChannelInfo
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](ChannelMessenger.md#messagechannel) |

###### Returns

`undefined` \| [`TargetChannelInfo`](ChannelMessenger.md#targetchannelinfo)

##### addListenerForTarget()

```ts
addListenerForTarget(targetChannel, callback): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](ChannelMessenger.md#messagechannel) |
| `callback` | [`TargetAddedCallback`](ChannelMessenger.md#targetaddedcallback) |

###### Returns

`void`

##### sendMessage()

```ts
sendMessage<T>(targetChannel, message): boolean
```

###### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](Message.md#messagetype) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetChannel` | [`MessageChannel`](ChannelMessenger.md#messagechannel) |
| `message` | [`SimpleMessageType`](Message.md#simplemessagetype) \| [`Message`](Message.md#messaget)\<`T`\> |

###### Returns

`boolean`

##### sendMessageCompat()

```ts
sendMessageCompat<T>(targetChannel, message): boolean
```

Sends a message using a message channel that is compatible with older version of SDK.

###### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `T` *extends* [`MessageType`](Message.md#messagetype) | The type of the message being sent. |

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetChannel` | [`MessageChannel`](ChannelMessenger.md#messagechannel) |  |
| `message` | [`MessageCompat`](Message.md#messagecompatt)\<`T`\> | The message to send. |

###### Returns

`boolean`

- True if the message was successfully sent, false otherwise.

##### addListener()

```ts
addListener(
   messageType, 
   listener, 
   messageFilter?): void
```

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `messageType` | [`MessageType`](Message.md#messagetype) | Listener is invoked for incoming message of this message type. |
| `listener` | [`Listener`](ChannelMessageListener.md#listener) | Callback function that is invoked when there is an incoming message. |
| `messageFilter`? | [`MessageFilter`](ChannelMessenger.md#messagefilter) | Filter the incoming message. If this function returns true the element is passed downstream, if it returns false the element is discarded. |

###### Returns

`void`

##### removeListener()

```ts
removeListener(messageType, listener): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `messageType` | [`MessageType`](Message.md#messagetype) |
| `listener` | [`Listener`](ChannelMessageListener.md#listener) |

###### Returns

`void`

##### setRequestId()

```ts
setRequestId(requestId): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `requestId` | `string` |

###### Returns

`void`

## Type Aliases

### Listener()

```ts
type Listener: <T>(message) => void;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](Message.md#messagetype) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](Message.md#messaget)\<`T`\> |

#### Returns

`void`
