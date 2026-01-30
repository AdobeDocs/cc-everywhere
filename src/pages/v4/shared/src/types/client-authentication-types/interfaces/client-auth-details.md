---
hideEditInGithub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: ClientAuthDetails

Interface representing the client authentication details.
This includes the client token, its expiry time, and optional client identifier.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `clientAccessToken` | `string` | The client access token. |
| `tokenExpiryTimestampMs` | `number` | The expiration timestamp (in milliseconds since epoch) for the client access token. This is used to determine when the token needs to be refreshed. |
| `userGuid` | `string` | Unique identifier (UUID) for the logged-in user. Useful for rate limiting. The UUID must follow the pattern described here: https://developer.mozilla.org/en-US/docs/Glossary/UUID. Example: '75df9e44-98a5-43a9-b2ff-d884d3af12cc'. It's a 36-character, hyphenated, case-insensitive hexadecimal string. |
