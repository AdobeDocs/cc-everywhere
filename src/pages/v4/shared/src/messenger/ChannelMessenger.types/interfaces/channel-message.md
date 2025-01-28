# Interface: ChannelMessage<T\>

## Type Parameters

| Type Parameter                                                                 |
| ------------------------------------------------------------------------------ |
| `T` *extends* [`MessageType`](../../Message.types/enumerations/message-type.md) |

## Properties

| Property        | Type                                                           |
| --------------- | -------------------------------------------------------------- |
| `sourceChannel` | [`MessageChannel`](../enumerations/message-channel.md)         |
| `requestId?`    | `string`                                                       |
| `message`       | [`Message`](../../Message.types/type-aliases/Message.md)`T` |
