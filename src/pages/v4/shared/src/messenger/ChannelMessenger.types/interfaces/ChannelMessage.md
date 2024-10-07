[cc-everywhere](../../../../../index.md) / [shared/src/messenger/ChannelMessenger.types](../index.md) / ChannelMessage

# Interface: ChannelMessage<T\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](../../Message.types/enumerations/MessageType.md) |

## Properties

| Property | Type |
| ------ | ------ |
| `sourceChannel` | [`MessageChannel`](../enumerations/MessageChannel.md) |
| `requestId?` | `string` |
| `message` | [`Message`](../../Message.types/type-aliases/Message.md)<`T`\> |
