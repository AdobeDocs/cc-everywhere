[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / [shared/src/error/ErrorHandlerDelegate](../index.md) / ErrorHandlerDelegate

# Class: ErrorHandlerDelegate\<T\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### new ErrorHandlerDelegate()

```ts
new ErrorHandlerDelegate<T>(): ErrorHandlerDelegate<T>
```

#### Returns

[`ErrorHandlerDelegate`](ErrorHandlerDelegate.md)\<`T`\>

## Methods

### addHandler()

```ts
addHandler(handler): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | [`IErrorMessageHandler`](../../IErrorMessageHandler/interfaces/IErrorMessageHandler.md)\<`T`\> |

#### Returns

`void`

***

### removeHandler()

```ts
removeHandler(handler): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | [`IErrorMessageHandler`](../../IErrorMessageHandler/interfaces/IErrorMessageHandler.md)\<`T`\> |

#### Returns

`void`

***

### removeAllHandlers()

```ts
removeAllHandlers(): void
```

#### Returns

`void`

***

### error()

```ts
error(error): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](../../CCEverywhereError/classes/CCEverywhereError.md)\<`T`\> |

#### Returns

`void`

***

### warn()

```ts
warn(warning): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `warning` | [`CCEverywhereWarn`](../../CCEverywhereError.types/interfaces/CCEverywhereWarn.md) |

#### Returns

`void`

***

### info()

```ts
info(information): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `information` | [`CCEverywhereInfo`](../../CCEverywhereError.types/interfaces/CCEverywhereInfo.md) |

#### Returns

`void`
