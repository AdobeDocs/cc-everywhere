# Type Alias: MessageListener()

```ts
type MessageListener: <T>(event) => void;
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](../../message-types/enumerations/message-type.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `MessageEvent`<[`ChannelMessage`](../../channel-messenger-types/interfaces/channel-message.md)<`T`\>\> |

## Returns

`void`
