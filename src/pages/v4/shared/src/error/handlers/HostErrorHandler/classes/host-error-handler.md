# Class: HostErrorHandler<T\>

## Extends

- [`BaseHandler`](../../BaseHandler/classes/base-handler.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Implements

- [`IErrorMessageHandler`](../../../IErrorMessageHandler/interfaces/i-error-message-handler.md)<`T`\>

## Constructors

### new HostErrorHandler()

```ts
new HostErrorHandler<T>(hostErrorCallback, logLevel?): HostErrorHandler<T>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hostErrorCallback` | [`ErrorCallback`](../../../CCEverywhereError.types/type-aliases/error-callback.md)<`T`\> |
| `logLevel`? | [`LogLevel`](../../../CCEverywhereError.types/enumerations/log-level.md) |

#### Returns

[`HostErrorHandler`](Hosterror-handler.md)<`T`\>

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
| `error` | [`CCEverywhereError`](../../../CCEverywhereError/classes/cc-everywhere-error.md)<`T`\> |

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../IErrorMessageHandler/interfaces/i-error-message-handler.md).`error`

***

### warn()

```ts
warn(): void
```

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../IErrorMessageHandler/interfaces/i-error-message-handler.md).`warn`

***

### info()

```ts
info(): void
```

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../IErrorMessageHandler/interfaces/i-error-message-handler.md).`info`
