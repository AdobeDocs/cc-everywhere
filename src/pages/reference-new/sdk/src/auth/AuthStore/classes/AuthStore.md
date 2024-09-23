[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / [sdk/src/auth/AuthStore](../index.md) / AuthStore

# Class: AuthStore

## Constructors

### new AuthStore()

```ts
new AuthStore(): AuthStore
```

#### Returns

[`AuthStore`](AuthStore.md)

## Accessors

### authOption

```ts
get authOption(): undefined | AuthOption
```

#### Returns

`undefined` \| [`AuthOption`](../../../../../shared/src/types/Authentication.types/type-aliases/AuthOption.md)

***

### accessToken

```ts
get accessToken(): undefined | string
```

#### Returns

`undefined` \| `string`

***

### userId

```ts
get userId(): undefined | string
```

#### Returns

`undefined` \| `string`

***

### piipStatus

```ts
get piipStatus(): PIIPStatus
```

#### Returns

[`PIIPStatus`](../../../../../shared/src/types/HostInfo.types/enumerations/PIIPStatus.md)

***

### forceJumpCheck

```ts
get forceJumpCheck(): boolean
```

#### Returns

`boolean`

***

### emailOrDomain

```ts
get emailOrDomain(): undefined | string
```

#### Returns

`undefined` \| `string`

## Methods

### getAuthMode()

```ts
getAuthMode(isFirstParty): AuthMode
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isFirstParty` | `boolean` |

#### Returns

[`AuthMode`](../../../../../shared/src/types/Authentication.types/enumerations/AuthMode.md)

***

### updateAuthOption()

```ts
updateAuthOption(authOption): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `authOption` | [`AuthOption`](../../../../../shared/src/types/Authentication.types/type-aliases/AuthOption.md) |

#### Returns

`void`
