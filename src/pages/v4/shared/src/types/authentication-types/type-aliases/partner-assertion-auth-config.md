---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: PartnerAssertionAuthConfig

```ts
type PartnerAssertionAuthConfig = 
  | GuestAssertionConfig
  | UserAssertionConfig
  | TransitionAssertionConfig;
```

Configuration used for partner assertion authentication.
Supports guest, signed-in user, and guest-to-user transition authentication.
