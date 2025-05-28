# Type Alias: PublishCallback()

```ts
type PublishCallback: (intent, publishParams) => void | Promise<PublishStatus>;
```

Keeping callback type as void | `Promise<PublishStatus>` for the publish operation, to handle promises as well

## Parameters

| Parameter | Type |
| ------ | ------ |
| `intent` | [`ActionIntent`](../../ActionIntent.types/type-aliases/ActionIntent.md) |
| `publishParams` | [`PublishParams`](../../PublishParams.types/interfaces/PublishParams.md) |

## Returns

`void` \| `Promise`<[`PublishStatus`](../interfaces/PublishStatus.md)\>
