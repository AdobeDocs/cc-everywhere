[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: ChannelMessage &lt; T &gt;

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](../../message-types/enumerations/message-type.md) |

## Properties

| Property | Type |
| ------ | ------ |
| `sourceChannel` | [`MessageChannel`](../enumerations/message-channel.md) |
| `requestId?` | `string` |
| `message` | [`Message`](../../message-types/type-aliases/message.md)&lt;`T`&gt; |
