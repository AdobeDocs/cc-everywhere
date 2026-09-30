---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: ImsJumpOnRequestAuthOption

Auth option for IMS jump on request ("jump on trigger"); optional prefilled auth identifier.

Carries no token by design: the initial load is anonymous and [SignInCredentials](sign-in-credentials.md) arrive
later via Callbacks.onSignInRequired. The declared mode never changes for the session, so
a sign-in that fails can be retried.

## See

 - [BaseAuthOption](base-auth-option.md) for the base interface
 - [AuthConfig](auth-config.md) for the optional config

## Extends

- [`BaseAuthOption`](base-auth-option.md)

## Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `mode` | [`IMS_JUMP_ON_REQUEST`](../enumerations/auth-mode.md#enumeration-member-ims_jump_on_request) | [`BaseAuthOption`](base-auth-option.md).[`mode`](base-auth-option.md#property-mode) |
| `config?` | [`AuthConfig`](auth-config.md) | - |
