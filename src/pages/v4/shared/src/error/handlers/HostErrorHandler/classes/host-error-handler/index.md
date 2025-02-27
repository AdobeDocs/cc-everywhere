# Class: HostErrorHandler T

## Extends

- [`BaseHandler`](../../../BaseHandler/classes/base-handler.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Implements

- [`IErrorMessageHandler`](../../../../IErrorMessageHandler/interfaces/i-error-message-handler/index.md) `T`

## Constructors

### new HostErrorHandler()

```ts
new HostErrorHandler<T>(hostErrorCallback, logLevel?): HostErrorHandler<T>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hostErrorCallback` | [`ErrorCallback`](../../../../CCEverywhereError.types/type-aliases/error-callback/index.md) `T` |
| `logLevel`? | [`LogLevel`](../../../../CCEverywhereError.types/enumerations/log-level/index.md) |

#### Returns

[`HostErrorHandler`](../host-error-handler/index.md) `T`

#### Overrides

`BaseHandler.constructor`

## Methods

### error()

```ts
error(error): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](../../../../CCEverywhereError/classes/cc-everywhere-error.md) `T` |

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../../IErrorMessageHandler/interfaces/i-error-message-handler/index.md).`error`

<hr />

### warn()

```ts
warn(): void
```

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../../IErrorMessageHandler/interfaces/i-error-message-handler/index.md).`warn`

<hr />

### info()

```ts
info(): void
```

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../../IErrorMessageHandler/interfaces/i-error-message-handler/index.md).`info`
