---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Enumeration: AuthMode

Enum representing different authentication modes.

## Enumeration Members

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| `UPFRONT` | `"upfront"` | User authentication is upfront. |
| `DELAYED` | `"delayed"` | Authentication is delayed. |
| `PRE_SIGNED_IN` | `"pre-signed-in"` | User is pre-signed in. |
| `IMS_JUMP` | `"ims-jump"` | Authentication is through IMS jump. |
| `IMS_JUMP_ON_REQUEST` | `"ims-jump-on-request"` | The user starts anonymous and signs in mid-session, on request ("jump on trigger"): the embed asks for sign-in when an action needs it (export, save), Callbacks.onSignInRequired supplies a token, and the SDK completes an IMS jump. Unlike [AuthMode.IMS\_JUMP](#enumeration-member-ims_jump), no token is supplied upfront. |
| `PARTNER_ASSERTION` | `"partner-assertion"` | Auth using partner-issued signed identity assertions |
