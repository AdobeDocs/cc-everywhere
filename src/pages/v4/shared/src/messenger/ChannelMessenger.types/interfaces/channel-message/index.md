# Interface: ChannelMessage T

## Type Parameters

| Type Parameter                                                                  |
| ------------------------------------------------------------------------------- |
| `T` *extends* [`MessageType`](../../Message.types/enumerations/message-type/index.md) |

## Properties

| Property        | Type                                                         |
| --------------- | ------------------------------------------------------------ |
| `sourceChannel` | [`MessageChannel`](../enumerations/message-channel/index.md) |
| `requestId?`    | `string`                                                     |
| `message`       | [`Message`](../../Message.types/type-aliases/message/index.md)`T`  |
