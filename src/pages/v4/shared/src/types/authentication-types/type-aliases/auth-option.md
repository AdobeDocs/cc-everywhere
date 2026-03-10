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

Authentication option for SDK initialization. Includes [UpfrontAuthOption](../interfaces/upfront-auth-option.md), [DelayedAuthOption](../interfaces/delayed-auth-option.md),
[ImsJumpAuthOption](../interfaces/ims-jump-auth-option.md), and [PreSignedInAuthOption](../interfaces/pre-signed-in-auth-option.md).
