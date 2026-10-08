---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: ToastCapability

Notification operations available on a running workflow.

## Extended by

- [`QuickActionContext`](../../quick-action-context/interfaces/quick-action-context.md)
- [`DesignContext`](../../modules/design-context/interfaces/design-context.md)

## Methods

### showToast()

```ts
showToast(type, message): void;
```

Requests a notification without waiting for a display acknowledgement.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`ToastType`](../type-aliases/toast-type.md) |
| `message` | `string` |

#### Returns

`void`
