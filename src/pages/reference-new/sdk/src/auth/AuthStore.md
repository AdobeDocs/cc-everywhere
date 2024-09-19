[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / sdk/src/auth/AuthStore

# sdk/src/auth/AuthStore

## Classes

### AuthStore

#### Constructors

##### new AuthStore()

```ts
new AuthStore(): AuthStore
```

###### Returns

[`AuthStore`](AuthStore.md#authstore)

#### Accessors

##### authOption

```ts
get authOption(): undefined | AuthOption
```

###### Returns

`undefined` \| [`AuthOption`](../../../shared/src/types/Authentication.md#authoption)

##### accessToken

```ts
get accessToken(): undefined | string
```

###### Returns

`undefined` \| `string`

##### userId

```ts
get userId(): undefined | string
```

###### Returns

`undefined` \| `string`

##### piipStatus

```ts
get piipStatus(): PIIPStatus
```

###### Returns

[`PIIPStatus`](../../../shared/src/types/HostInfo.md#piipstatus)

##### forceJumpCheck

```ts
get forceJumpCheck(): boolean
```

###### Returns

`boolean`

##### emailOrDomain

```ts
get emailOrDomain(): undefined | string
```

###### Returns

`undefined` \| `string`

#### Methods

##### getAuthMode()

```ts
getAuthMode(isFirstParty): AuthMode
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `isFirstParty` | `boolean` |

###### Returns

[`AuthMode`](../../../shared/src/types/Authentication.md#authmode)

##### updateAuthOption()

```ts
updateAuthOption(authOption): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `authOption` | [`AuthOption`](../../../shared/src/types/Authentication.md#authoption) |

###### Returns

`void`
