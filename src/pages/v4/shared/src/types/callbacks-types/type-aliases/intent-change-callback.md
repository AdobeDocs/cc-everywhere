# Type Alias: IntentChangeCallback()

```ts
type IntentChangeCallback: (oldIntent, newIntent) => IntentChangeConfig | undefined;
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `oldIntent` | [`ActionIntent`](../../action-intent-types/type-aliases/action-intent.md) |
| `newIntent` | [`ActionIntent`](../../action-intent-types/type-aliases/action-intent.md) |

## Returns

[`IntentChangeConfig`](../../callbacks-types/interfaces/intent-change-config.md) \| `undefined`
