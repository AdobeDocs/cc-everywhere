---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: PartnerAssertionAuthOption

Authentication using partner-issued signed identity assertions.

## See

 - [BaseAuthOption](base-auth-option.md) for the base interface
 - [PartnerAssertionAuthConfig](../type-aliases/partner-assertion-auth-config.md) for the required config

## Extends

- [`BaseAuthOption`](base-auth-option.md)

## Properties

| Property | Type | Description | Overrides |
| ------ | ------ | ------ | ------ |
| `mode` | [`PARTNER_ASSERTION`](../enumerations/auth-mode.md#enumeration-member-partner_assertion) | - | [`BaseAuthOption`](base-auth-option.md).[`mode`](base-auth-option.md#property-mode) |
| `config` | [`PartnerAssertionAuthConfig`](../type-aliases/partner-assertion-auth-config.md) | Authentication configuration for the partner assertion. | - |
