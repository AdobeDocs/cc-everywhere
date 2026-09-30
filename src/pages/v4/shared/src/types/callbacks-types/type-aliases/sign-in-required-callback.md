---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: SignInRequiredCallback

```ts
type SignInRequiredCallback = (reason?) => Promise<SignInCredentials>;
```

Invoked when the anonymous embedded session needs the user signed in before continuing. `reason`
is telemetry-only context — do not branch on its value.

Resolve with a token once the host's own sign-in completes; the SDK performs the IMS jump from
there. Reject if the user cancels — the SDK holds the promise open until it settles, so don't
leave it pending. **1P only:** requires AuthMode.IMS\_JUMP\_ON\_REQUEST, which third-party
hosts cannot declare.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | `string` |

## Returns

`Promise`&lt;[`SignInCredentials`](../../authentication-types/interfaces/sign-in-credentials.md)&gt;
