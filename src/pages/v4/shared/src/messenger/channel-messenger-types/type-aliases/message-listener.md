---
hideEditInGithub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: MessageListener()

```ts
type MessageListener = <T>(event) => void;
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](../../message-types/enumerations/message-type.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `MessageEvent`&lt;[`ChannelMessage`](../interfaces/channel-message.md)&lt;`T`&gt;&gt; |

## Returns

`void`
