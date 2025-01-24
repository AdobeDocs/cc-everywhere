# Class: HostErrorHandler<T\>

## Extends

- [`BaseHandler`](../../BaseHandler/classes/BaseHandler.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Implements

- [`IErrorMessageHandler`](../../../IErrorMessageHandler/interfaces/IErrorMessageHandler.md)<`T`\>

## Constructors

### new HostErrorHandler()

```ts
new HostErrorHandler<T>(hostErrorCallback, logLevel?): HostErrorHandler<T>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hostErrorCallback` | [`ErrorCallback`](../../../CCEverywhereError.types/type-aliases/ErrorCallback.md)<`T`\> |
| `logLevel`? | [`LogLevel`](../../../CCEverywhereError.types/enumerations/LogLevel.md) |

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
| `error` | [`CCEverywhereError`](../../../CCEverywhereError/classes/CCEverywhereError.md)<`T`\> |

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../IErrorMessageHandler/interfaces/IErrorMessageHandler.md).`error`

***

### warn()

```ts
warn(): void
```

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../IErrorMessageHandler/interfaces/IErrorMessageHandler.md).`warn`

***

### info()

```ts
info(): void
```

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../IErrorMessageHandler/interfaces/IErrorMessageHandler.md).`info`
