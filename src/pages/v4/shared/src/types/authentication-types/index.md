---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../index.md)

<HorizontalLine />

# shared/src/types/Authentication.types

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [ValidateTokenError](enumerations/validate-token-error.md) | - |
| [AuthMode](enumerations/auth-mode.md) | Enum representing different authentication modes. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [AuthConfig](interfaces/auth-config.md) | - |
| [PreSignedInAuthConfig](interfaces/pre-signed-in-auth-config.md) | - |
| [IMSAuthConfig](interfaces/ims-auth-config.md) | - |
| [BaseAuthOption](interfaces/base-auth-option.md) | - |
| [UpfrontAuthOption](interfaces/upfront-auth-option.md) | Auth option for upfront sign-in; optional prefilled auth identifier. |
| [DelayedAuthOption](interfaces/delayed-auth-option.md) | Auth option for delayed sign-in; optional prefilled auth identifier. |
| [PreSignedInAuthOption](interfaces/pre-signed-in-auth-option.md) | Auth option when the user is already signed in (no token required; optional PII/userId). |
| [ImsJumpAuthOption](interfaces/ims-jump-auth-option.md) | Auth option for IMS jump (e.g. SSO); requires access token and userId in config. |
| [UserInfo](interfaces/user-info.md) | User-related information (optional userId and PII/analytics status). |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [AuthOption](type-aliases/auth-option.md) | Authentication option for SDK initialization. |

## Variables

| Variable | Description |
| ------ | ------ |
| [IMS\_JUMP\_ERROR\_KEY](variables/ims-jump-error-key.md) | - |
| [IMS\_JUMP\_ERROR\_DESCRIPTION\_KEY](variables/ims-jump-error-description-key.md) | - |
| [IMS\_DEBUG\_ID\_HEADER](variables/ims-debug-id-header.md) | - |
