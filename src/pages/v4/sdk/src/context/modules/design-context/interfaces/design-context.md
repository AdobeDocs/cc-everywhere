---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: DesignContext

Module-specific context returned by `sdk.module.createDesign()` and
`sdk.module.editDesign()` after the module has loaded, in both the 1P and 3P SDKs.

## Extends

- [`ToastCapability`](../../../toast-capability/interfaces/toast-capability.md)

## Methods

### showToast()

```ts
showToast(type, message): void;
```

Requests a notification without waiting for a display acknowledgement.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`ToastType`](../../../toast-capability/type-aliases/toast-type.md) |
| `message` | `string` |

#### Returns

`void`

#### Inherited from

[`ToastCapability`](../../../toast-capability/interfaces/toast-capability.md).[`showToast`](../../../toast-capability/interfaces/toast-capability.md#showtoast)
