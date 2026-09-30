---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: SignInCredentials

Credentials the host hands back from Callbacks.onSignInRequired for the SDK to complete an
IMS jump with, under [AuthMode.IMS\_JUMP\_ON\_REQUEST](../enumerations/auth-mode.md#enumeration-member-ims_jump_on_request).

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `accessToken` | `string` | - |
| `userId` | `string` | IMS userId corresponding to `accessToken` |
