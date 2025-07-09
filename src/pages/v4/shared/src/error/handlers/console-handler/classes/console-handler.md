[**cc-everywhere**](../../../../../../index.md)

***

# Class: ConsoleHandler<T\>

## Extends

- [`BaseHandler`](../../base-handler/classes/base-handler.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Implements

- [`IErrorMessageHandler`](../../../i-error-message-handler/interfaces/i-error-message-handler.md)<`T`\>

## Constructors

<a id="constructor"></a>

### Constructor

```ts
new ConsoleHandler<T>(logLevel?): ConsoleHandler<T>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `logLevel?` | [`LogLevel`](../../../cc-everywhere-error-types/enumerations/log-level.md) |

#### Returns

`ConsoleHandler`<`T`\>

#### Overrides

```ts
BaseHandler.constructor
```

## Methods

<a id="info"></a>

### info()

```ts
static info(information): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `information` | [`CCEverywhereInfo`](../../../cc-everywhere-error-types/interfaces/cc-everywhere-info.md) |

#### Returns

`void`

***

<a id="error"></a>

### error()

```ts
static error<T>(error): void;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](../../../cc-everywhere-error/classes/cc-everywhere-error.md)<`T`\> |

#### Returns

`void`

***

<a id="error-2"></a>

### error()

```ts
error(error): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](../../../cc-everywhere-error/classes/cc-everywhere-error.md)<`T`\> |

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../i-error-message-handler/interfaces/i-error-message-handler.md).[`error`](../../../i-error-message-handler/interfaces/i-error-message-handler.md#error)

***

<a id="warn"></a>

### warn()

```ts
warn(warning): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `warning` | [`CCEverywhereWarn`](../../../cc-everywhere-error-types/interfaces/cc-everywhere-warn.md) |

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../i-error-message-handler/interfaces/i-error-message-handler.md).[`warn`](../../../i-error-message-handler/interfaces/i-error-message-handler.md#warn)

***

<a id="info-2"></a>

### info()

```ts
info(information): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `information` | [`CCEverywhereInfo`](../../../cc-everywhere-error-types/interfaces/cc-everywhere-info.md) |

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../i-error-message-handler/interfaces/i-error-message-handler.md).[`info`](../../../i-error-message-handler/interfaces/i-error-message-handler.md#info)
