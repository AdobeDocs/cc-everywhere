[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / [shared/src/analytics/Analytics](../index.md) / default

# Class: default

## Constructors

### new default()

```ts
new default(
   hostInfo, 
   locale, 
   packageName, 
   packageVersion, 
   piipStatus): default
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hostInfo` | [`HostInfoSpecified`](../../../types/HostInfo.types/type-aliases/HostInfoSpecified.md) |
| `locale` | `string` |
| `packageName` | `string` |
| `packageVersion` | `string` |
| `piipStatus` | [`PIIPStatus`](../../../types/HostInfo.types/enumerations/PIIPStatus.md) |

#### Returns

[`default`](default.md)

## Methods

### getVisitorId()

```ts
getVisitorId(): null | string
```

#### Returns

`null` \| `string`

***

### addEventToCollection()

```ts
addEventToCollection(event): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `Object` |

#### Returns

`void`

***

### send()

```ts
send(): void
```

#### Returns

`void`
