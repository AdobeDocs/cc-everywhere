---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: ImsJumpAuthOption

Auth option for IMS jump (e.g. SSO); requires access token and userId in config.

## See

 - [BaseAuthOption](base-auth-option.md) for the base interface
 - [IMSAuthConfig](ims-auth-config.md) for the required config

## Extends

- [`BaseAuthOption`](base-auth-option.md)

## Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `mode` | [`IMS_JUMP`](../enumerations/auth-mode.md#ims_jump) | [`BaseAuthOption`](base-auth-option.md).[`mode`](base-auth-option.md#mode) |
| `config` | [`IMSAuthConfig`](ims-auth-config.md) | - |
