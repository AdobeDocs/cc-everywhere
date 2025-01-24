# Class: ErrorHandler

## Methods

### instance()

```ts
static instance(): ErrorHandler
```

#### Returns

[`ErrorHandler`](error-handler.md)

***

### addHandler()

```ts
static addHandler(handler): void
```

#### Parameters

| Parameter | Type                                                                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `handler` | [`IErrorMessageHandler`](../../../../../shared/src/error/IErrorMessageHandler/interfaces/IErrorMessageHandler.md)[`ErrorCode`](../../ErrorCodes/type-aliases/error-code.md) |

#### Returns

`void`

***

### removeHandler()

```ts
static removeHandler(handler): void
```

#### Parameters

| Parameter | Type                                                                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `handler` | [`IErrorMessageHandler`](../../../../../shared/src/error/IErrorMessageHandler/interfaces/IErrorMessageHandler.md)[`ErrorCode`](../../ErrorCodes/type-aliases/error-code.md) |

#### Returns

`void`

***

### error()

```ts
static error(error): void
```

#### Parameters

| Parameter | Type                                                                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `error`   | [`CCEverywhereError`](../../../../../shared/src/error/CCEverywhereError/classes/CCEverywhereError.md)[`ErrorCode`](../../ErrorCodes/type-aliases/error-code.md) |

#### Returns

`void`

***

### warn()

```ts
static warn(warn): void
```

#### Parameters

| Parameter | Type                                                                                                                                                                                                                                                                               |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `warn`    | [`CCEverywhereWarn`](../../../../../shared/src/error/CCEverywhereError.types/interfaces/CCEverywhereWarn.md) \| [`CCEverywhereError`](../../../../../shared/src/error/CCEverywhereError/classes/CCEverywhereError.md)[`ErrorCode`](../../ErrorCodes/type-aliases/error-code.md) |

#### Returns

`void`

***

### info()

```ts
static info(information): void
```

#### Parameters

| Parameter     | Type                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| `information` | [`CCEverywhereInfo`](../../../../../shared/src/error/CCEverywhereError.types/interfaces/CCEverywhereInfo.md) |

#### Returns

`void`
