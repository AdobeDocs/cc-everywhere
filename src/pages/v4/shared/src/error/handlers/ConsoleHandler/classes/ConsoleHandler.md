# Class: ConsoleHandler<T\>

## Extends

- [`BaseHandler`](../../BaseHandler/classes/BaseHandler.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Implements

- [`IErrorMessageHandler`](../../../IErrorMessageHandler/interfaces/IErrorMessageHandler.md)<`T`\>

## Constructors

### new ConsoleHandler()

```ts
new ConsoleHandler<T>(logLevel?): ConsoleHandler<T>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `logLevel`? | [`LogLevel`](../../../CCEverywhereError.types/enumerations/LogLevel.md) |

#### Returns

[`ConsoleHandler`](ConsoleHandler.md)<`T`\>

#### Overrides

`BaseHandler.constructor`

## Methods

### info()

```ts
static info(information): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `information` | [`CCEverywhereInfo`](../../../CCEverywhereError.types/interfaces/CCEverywhereInfo.md) |

#### Returns

`void`

***

### error()

```ts
static error<T>(error): void
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](../../../CCEverywhereError/classes/CCEverywhereError.md)<`T`\> |

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
| `error` | [`CCEverywhereError`](../../../CCEverywhereError/classes/CCEverywhereError.md)<`T`\> |

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../IErrorMessageHandler/interfaces/IErrorMessageHandler.md).`error`

***

### warn()

```ts
warn(warning): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `warning` | [`CCEverywhereWarn`](../../../CCEverywhereError.types/interfaces/CCEverywhereWarn.md) |

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../IErrorMessageHandler/interfaces/IErrorMessageHandler.md).`warn`

***

### info()

```ts
info(information): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `information` | [`CCEverywhereInfo`](../../../CCEverywhereError.types/interfaces/CCEverywhereInfo.md) |

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../IErrorMessageHandler/interfaces/IErrorMessageHandler.md).`info`
