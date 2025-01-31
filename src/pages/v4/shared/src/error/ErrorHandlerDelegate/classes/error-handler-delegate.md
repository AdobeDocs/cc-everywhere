# Class: ErrorHandlerDelegate T

## Type Parameters

| Type Parameter |
| -------------- |
| `T`            |

## Constructors

### new ErrorHandlerDelegate()

```ts
new ErrorHandlerDelegate<T>(): ErrorHandlerDelegate<T>
```

#### Returns

[`ErrorHandlerDelegate`](error-handler-delegate.md)`T`

## Methods

### addHandler()

```ts
addHandler(handler): void
```

#### Parameters

| Parameter | Type                                                                                       |
| --------- | ------------------------------------------------------------------------------------------ |
| `handler` | [`IErrorMessageHandler`](../../IErrorMessageHandler/interfaces/i-error-message-handler/index.md)`T` |

#### Returns

`void`

***

### removeHandler()

```ts
removeHandler(handler): void
```

#### Parameters

| Parameter | Type                                                                                       |
| --------- | ------------------------------------------------------------------------------------------ |
| `handler` | [`IErrorMessageHandler`](../../IErrorMessageHandler/interfaces/i-error-message-handler/index.md)`T` |

#### Returns

`void`

***

### removeAllHandlers()

```ts
removeAllHandlers(): void
```

#### Returns

`void`

***

### error()

```ts
error(error): void
```

#### Parameters

| Parameter | Type                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| `error`   | [`CCEverywhereError`](../../CCEverywhereError/classes/cc-everywhere-error.md)`T` |

#### Returns

`void`

***

### warn()

```ts
warn(warning): void
```

#### Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `warning` | [`CCEverywhereWarn`](../../CCEverywhereError.types/interfaces/cc-everywhere-warn/index.md) |

#### Returns

`void`

***

### info()

```ts
info(information): void
```

#### Parameters

| Parameter     | Type                                                                                 |
| ------------- | ------------------------------------------------------------------------------------ |
| `information` | [`CCEverywhereInfo`](../../CCEverywhereError.types/interfaces/cc-everywhere-info/index.md) |

#### Returns

`void`
