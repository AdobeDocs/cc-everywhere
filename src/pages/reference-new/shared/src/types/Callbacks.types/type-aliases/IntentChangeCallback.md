[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / [shared/src/types/Callbacks.types](../index.md) / IntentChangeCallback

# Type Alias: IntentChangeCallback()

```ts
type IntentChangeCallback: (oldIntent, newIntent) => IntentChangeConfig | undefined;
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `oldIntent` | [`ActionIntent`](../../ActionIntent.types/type-aliases/ActionIntent.md) |
| `newIntent` | [`ActionIntent`](../../ActionIntent.types/type-aliases/ActionIntent.md) |

## Returns

[`IntentChangeConfig`](../interfaces/IntentChangeConfig.md) \| `undefined`
