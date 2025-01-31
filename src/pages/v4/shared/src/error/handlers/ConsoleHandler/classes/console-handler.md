# Class: ConsoleHandler T

## Extends

- [`BaseHandler`](../../BaseHandler/classes/base-handler.md)

## Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

## Implements

- [`IErrorMessageHandler`](../../../IErrorMessageHandler/interfaces/i-error-message-handler/index.md)`T`

## Constructors

### new ConsoleHandler()

```ts
new ConsoleHandler<T>(logLevel?): ConsoleHandler<T>
```

#### Parameters

| Parameter   | Type                                                                     |
| ----------- | ------------------------------------------------------------------------ |
| `logLevel`? | [`LogLevel`](../../../CCEverywhereError.types/enumerations/log-level/index.md) |

#### Returns

[`ConsoleHandler`](console-handler.md)`T`

#### Overrides

`BaseHandler.constructor`

## Methods

### info()

```ts
static info(information): void
```

#### Parameters

| Parameter     | Type                                                                                    |
| ------------- | --------------------------------------------------------------------------------------- |
| `information` | [`CCEverywhereInfo`](../../../CCEverywhereError.types/interfaces/cc-everywhere-info/index.md) |

#### Returns

`void`

<hr />

### error()

```ts
static error<T>(error): void
```

#### Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

#### Parameters

| Parameter | Type                                                                                |
| --------- | ----------------------------------------------------------------------------------- |
| `error`   | [`CCEverywhereError`](../../../CCEverywhereError/classes/cc-everywhere-error.md)`T` |

#### Returns

`void`

<hr />

### error()

```ts
error(error): void
```

#### Parameters

| Parameter | Type                                                                                |
| --------- | ----------------------------------------------------------------------------------- |
| `error`   | [`CCEverywhereError`](../../../CCEverywhereError/classes/cc-everywhere-error.md)`T` |

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../IErrorMessageHandler/interfaces/i-error-message-handler/index.md).`error`

<hr />

### warn()

```ts
warn(warning): void
```

#### Parameters

| Parameter | Type                                                                                    |
| --------- | --------------------------------------------------------------------------------------- |
| `warning` | [`CCEverywhereWarn`](../../../CCEverywhereError.types/interfaces/cc-everywhere-warn/index.md) |

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../IErrorMessageHandler/interfaces/i-error-message-handler/index.md).`warn`

<hr />

### info()

```ts
info(information): void
```

#### Parameters

| Parameter     | Type                                                                                    |
| ------------- | --------------------------------------------------------------------------------------- |
| `information` | [`CCEverywhereInfo`](../../../CCEverywhereError.types/interfaces/cc-everywhere-info/index.md) |

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](../../../IErrorMessageHandler/interfaces/i-error-message-handler/index.md).`info`
