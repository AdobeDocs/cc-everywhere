[**cc-everywhere**](../../../../../../index.md)

***

# Class: HostErrorHandler<T\>

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
new HostErrorHandler<T>(hostErrorCallback, logLevel?): HostErrorHandler<T>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hostErrorCallback` | [`ErrorCallback`](../../../cc-everywhere-error-types/type-aliases/error-callback.md)<`T`\> |
| `logLevel?` | [`LogLevel`](../../../cc-everywhere-error-types/enumerations/log-level.md) |

#### Returns

`HostErrorHandler`<`T`\>

#### Overrides

```ts
BaseHandler.constructor
```

## Methods

<a id="error"></a>

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
warn(): void;
```

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../i-error-message-handler/interfaces/i-error-message-handler.md).[`warn`](../../../i-error-message-handler/interfaces/i-error-message-handler.md#warn)

***

<a id="info"></a>

### info()

```ts
info(): void;
```

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../i-error-message-handler/interfaces/i-error-message-handler.md).[`info`](../../../i-error-message-handler/interfaces/i-error-message-handler.md#info)
