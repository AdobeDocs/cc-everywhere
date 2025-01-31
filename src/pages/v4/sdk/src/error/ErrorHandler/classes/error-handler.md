# Class: ErrorHandler

## Methods

### instance()

```ts
static instance(): ErrorHandler
```

#### Returns

[`ErrorHandler`](error-handler.md)

<hr />

### addHandler()

```ts
static addHandler(handler): void
```

#### Parameters

| Parameter | Type                                                                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `handler` | [`IErrorMessageHandler`](../../../../../shared/src/error/IErrorMessageHandler/interfaces/i-error-message-handler/index.md)[`ErrorCode`](../../ErrorCodes/type-aliases/error-code.md) |

#### Returns

`void`

<hr />

### removeHandler()

```ts
static removeHandler(handler): void
```

#### Parameters

| Parameter | Type                                                                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `handler` | [`IErrorMessageHandler`](../../../../../shared/src/error/IErrorMessageHandler/interfaces/i-error-message-handler/index.md)[`ErrorCode`](../../ErrorCodes/type-aliases/error-code.md) |

#### Returns

`void`

<hr />

### error()

```ts
static error(error): void
```

#### Parameters

| Parameter | Type                                                                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `error`   | [`CCEverywhereError`](../../../../../shared/src/error/CCEverywhereError/classes/cc-everywhere-error.md)[`ErrorCode`](../../ErrorCodes/type-aliases/error-code.md) |

#### Returns

`void`

<hr />

### warn()

```ts
static warn(warn): void
```

#### Parameters

| Parameter | Type                                                                                                                                                                                                                                                                               |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `warn`    | [`CCEverywhereWarn`](../../../../../shared/src/error/CCEverywhereError.types/interfaces/cc-everywhere-warn/index.md) \| [`CCEverywhereError`](../../../../../shared/src/error/CCEverywhereError/classes/cc-everywhere-error.md)[`ErrorCode`](../../ErrorCodes/type-aliases/error-code.md) |

#### Returns

`void`

<hr />

### info()

```ts
static info(information): void
```

#### Parameters

| Parameter     | Type                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------ |
| `information` | [`CCEverywhereInfo`](../../../../../shared/src/error/CCEverywhereError.types/interfaces/cc-everywhere-info/index.md) |

#### Returns

`void`
