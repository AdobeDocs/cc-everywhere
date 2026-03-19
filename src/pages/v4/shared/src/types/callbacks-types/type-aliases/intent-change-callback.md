---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: IntentChangeCallback()

```ts
type IntentChangeCallback = (oldIntent, newIntent) => IntentChangeConfig | undefined;
```

Callback invoked when the user navigates from one design workflow to another (e.g. Quick action to Express).
May return [IntentChangeConfig](../interfaces/intent-change-config.md) to update app, export, or container config for the new intent.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `oldIntent` | [`ActionIntent`](../../action-intent-types/type-aliases/action-intent.md) |
| `newIntent` | [`ActionIntent`](../../action-intent-types/type-aliases/action-intent.md) |

## Returns

[`IntentChangeConfig`](../interfaces/intent-change-config.md) \| `undefined`

## See

 - [IntentChangeConfig](../interfaces/intent-change-config.md) for the optional return type
 - [ActionIntent](../../action-intent-types/type-aliases/action-intent.md) for the intent types
