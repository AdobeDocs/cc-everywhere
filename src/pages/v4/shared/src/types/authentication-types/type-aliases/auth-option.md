---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: AuthOption

```ts
type AuthOption = 
  | UpfrontAuthOption
  | DelayedAuthOption
  | ImsJumpAuthOption
  | PreSignedInAuthOption;
```

Authentication option for SDK initialization.

This union type includes:
- [UpfrontAuthOption](../interfaces/upfront-auth-option.md) - User signs in upfront
- [DelayedAuthOption](../interfaces/delayed-auth-option.md) - Auth deferred until needed
- [ImsJumpAuthOption](../interfaces/ims-jump-auth-option.md) - IMS jump (e.g. SSO) with token
- [PreSignedInAuthOption](../interfaces/pre-signed-in-auth-option.md) - User already signed in

## See

[AuthMode](../enumerations/auth-mode.md) for the mode enum
