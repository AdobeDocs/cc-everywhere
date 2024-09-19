[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/error/CCEverywhereError.types

# shared/src/error/CCEverywhereError.types

## Enumerations

### LogLevel

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `INFO` | `1` |
| `WARN` | `2` |
| `ERROR` | `3` |
| `NONE` | `4` |

## Interfaces

### CCEverywhereWarn

#### Properties

| Property | Type |
| ------ | ------ |
| `message` | `string` |

***

### CCEverywhereInfo

#### Properties

| Property | Type |
| ------ | ------ |
| `message` | `string` |

## Type Aliases

### ErrorCallback()\<T\>

```ts
type ErrorCallback<T>: (error) => void;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](CCEverywhereError.md#cceverywhereerrort)\<`T`\> |

#### Returns

`void`

***

### ErrorCodeMessage\<T\>

```ts
type ErrorCodeMessage<T>: object;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Type declaration

| Name | Type |
| ------ | ------ |
| `code` | `T` |
| `message` | `string` |
