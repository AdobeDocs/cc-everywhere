[**cc-everywhere**](..\..\..\..\..\index.md)

***

# Type Alias: PublishCallback()

```ts
type PublishCallback = (intent, publishParams) => void | Promise<PublishStatus>;
```

Keeping callback type as void | `Promise<PublishStatus>` for the publish operation, to handle promises as well

## Parameters

| Parameter | Type |
| ------ | ------ |
| `intent` | [`ActionIntent`](..\..\action-intent-types\type-aliases\action-intent.md) |
| `publishParams` | [`PublishParams`](..\..\publish-params-types\interfaces\publish-params.md) |

## Returns

`void` \| `Promise`<[`PublishStatus`](..\interfaces\publish-status.md)\>
