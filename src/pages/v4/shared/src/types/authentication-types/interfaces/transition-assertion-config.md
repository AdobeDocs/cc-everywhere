---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: TransitionAssertionConfig

Transition authentication configuration.
Use when a guest user signs in and transitions to an authenticated user within the same session.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `guestAssertion` | `string` | Previously issued guest identity assertion. |
| `userAssertion` | `string` | Signed assertion for the newly authenticated user. |
