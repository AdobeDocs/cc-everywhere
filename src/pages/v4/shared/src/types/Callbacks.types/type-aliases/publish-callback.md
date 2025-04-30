# Type Alias: PublishCallback()

```ts
type PublishCallback: (intent, publishParams) => void | Promise<PublishStatus>;
```

Keeping callback type as void | `Promise<PublishStatus>` for the publish operation, to handle promises as well

## Parameters

| Parameter       | Type                                                                     |
| --------------- | ------------------------------------------------------------------------ |
| `intent`        | [`ActionIntent`](../../ActionIntent.types/type-aliases/action-intent.md)  |
| `publishParams` | [`PublishParams`](../../PublishParams.types/interfaces/publish-params.md) |

## Returns

`void` \| `Promise`<[`PublishStatus`](../interfaces/publish-status.md)\>
