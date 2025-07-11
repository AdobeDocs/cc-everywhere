[**cc-everywhere**](../../../../../index.md)

---

# Interface: ClientAuthProvider()

Interface representing a function that provides client authentication details.
This function should be implemented by partners to fetch client authentication details.

```ts
ClientAuthProvider(): Promise<ClientAuthDetails>;
```

## Returns

`Promise`<[`ClientAuthDetails`](../../client-authentication-types/interfaces/client-auth-details.md)\>

`Promise<ClientAuthDetails>` A promise that resolves to the client authentication details
