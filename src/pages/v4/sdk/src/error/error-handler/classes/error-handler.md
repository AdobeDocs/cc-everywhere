# Class: ErrorHandler

## Methods

### instance()

```ts
static instance(): ErrorHandler
```

#### Returns

[`ErrorHandler`](error-handler.md)

<HorizontalLine />

### addHandler()

```ts
static addHandler(handler): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | [`IErrorMessageHandler`](../../../../../shared/src/error/i-error-message-handler/interfaces/i-error-message-handler.md)<[`ErrorCode`](../../error-codes/type-aliases/error-code.md)\> |

#### Returns

`void`

<HorizontalLine />

### removeHandler()

```ts
static removeHandler(handler): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | [`IErrorMessageHandler`](../../../../../shared/src/error/i-error-message-handler/interfaces/i-error-message-handler.md)<[`ErrorCode`](../../error-codes/type-aliases/error-code.md)\> |

#### Returns

`void`

<HorizontalLine />

### error()

```ts
static error(error): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](../../../../../shared/src/error/cc-everywhere-error/classes/cc-everywhere-error.md)<[`ErrorCode`](../../error-codes/type-aliases/error-code.md)\> |

#### Returns

`void`

<HorizontalLine />

### warn()

```ts
static warn(warn): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `warn` | [`CCEverywhereWarn`](../../../../../shared/src/error/cc-everywhere-error-types/interfaces/cc-everywhere-warn.md) \| [`CCEverywhereError`](../../../../../shared/src/error/cc-everywhere-error/classes/cc-everywhere-error.md)<[`ErrorCode`](../../error-codes/type-aliases/error-code.md)\> |

#### Returns

`void`

<HorizontalLine />

### info()

```ts
static info(information): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `information` | [`CCEverywhereInfo`](../../../../../shared/src/error/cc-everywhere-error-types/interfaces/cc-everywhere-info.md) |

#### Returns

`void`
