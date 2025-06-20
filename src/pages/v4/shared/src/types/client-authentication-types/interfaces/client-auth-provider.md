# Interface: ClientAuthProvider()

Interface representing a function that provides client authentication details.
This function should be implemented by partners to fetch client authentication details.

```ts
interface ClientAuthProvider(): Promise<ClientAuthDetails>
```

Interface representing a function that provides client authentication details.
This function should be implemented by partners to fetch client authentication details.

## Returns

`Promise`<[`ClientAuthDetails`](../../client-authentication-types/interfaces/client-auth-details.md)\>

`Promise<ClientAuthDetails>` A promise that resolves to the client authentication details
