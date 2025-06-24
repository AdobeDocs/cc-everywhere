[**cc-everywhere**](../../../../../index.md)

***

# Class: ErrorHandler

## Methods

<a id="instance"></a>

### instance()

```ts
static instance(): ErrorHandler;
```

#### Returns

`ErrorHandler`

***

<a id="addhandler"></a>

### addHandler()

```ts
static addHandler(handler): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | [`IErrorMessageHandler`](../../../../../shared/src/error/i-error-message-handler/interfaces/i-error-message-handler.md)<[`ErrorCode`](../../error-codes/type-aliases/error-code.md)\> |

#### Returns

`void`

***

<a id="removehandler"></a>

### removeHandler()

```ts
static removeHandler(handler): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | [`IErrorMessageHandler`](../../../../../shared/src/error/i-error-message-handler/interfaces/i-error-message-handler.md)<[`ErrorCode`](../../error-codes/type-aliases/error-code.md)\> |

#### Returns

`void`

***

<a id="error"></a>

### error()

```ts
static error(error): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](../../../../../shared/src/error/cc-everywhere-error/classes/cc-everywhere-error.md)<[`ErrorCode`](../../error-codes/type-aliases/error-code.md)\> |

#### Returns

`void`

***

<a id="warn"></a>

### warn()

```ts
static warn(warn): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `warn` | \| [`CCEverywhereWarn`](../../../../../shared/src/error/cc-everywhere-error-types/interfaces/cc-everywhere-warn.md) \| [`CCEverywhereError`](../../../../../shared/src/error/cc-everywhere-error/classes/cc-everywhere-error.md)<[`ErrorCode`](../../error-codes/type-aliases/error-code.md)\> |

#### Returns

`void`

***

<a id="info"></a>

### info()

```ts
static info(information): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `information` | [`CCEverywhereInfo`](../../../../../shared/src/error/cc-everywhere-error-types/interfaces/cc-everywhere-info.md) |

#### Returns

`void`
