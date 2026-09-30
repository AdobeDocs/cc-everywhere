---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: SignInFailedCallback

```ts
type SignInFailedCallback = () => void;
```

Invoked if the IMS jump fails after a [SignInRequiredCallback](sign-in-required-callback.md) resolved with a token — that
promise is already settled, so this is the only place such a failure surfaces. Use it to show an
error; the originating action is not retried automatically.

## Returns

`void`
