---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: PreSignedInAuthOption

Auth option when the user is already signed in (no token required; optional PII/userId).

## See

 - [BaseAuthOption](base-auth-option.md) for the base interface
 - [PreSignedInAuthConfig](pre-signed-in-auth-config.md) for the optional config

## Extends

- [`BaseAuthOption`](base-auth-option.md)

## Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `mode` | [`PRE_SIGNED_IN`](../enumerations/auth-mode.md#pre_signed_in) | [`BaseAuthOption`](base-auth-option.md).[`mode`](base-auth-option.md#mode) |
| `config?` | [`PreSignedInAuthConfig`](pre-signed-in-auth-config.md) | - |
