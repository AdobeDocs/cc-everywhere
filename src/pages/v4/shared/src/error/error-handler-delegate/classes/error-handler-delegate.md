# Class: ErrorHandlerDelegate T

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### new ErrorHandlerDelegate()

```ts
new ErrorHandlerDelegate<T>(): ErrorHandlerDelegate<T>
```

#### Returns

[`ErrorHandlerDelegate`](error-handler-delegate.md) `T`

## Methods

### addHandler()

```ts
addHandler(handler): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | [`IErrorMessageHandler`](../../i-error-message-handler/interfaces/i-error-message-handler.md) `T` |

#### Returns

`void`

<HorizontalLine />

### removeHandler()

```ts
removeHandler(handler): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | [`IErrorMessageHandler`](../../i-error-message-handler/interfaces/i-error-message-handler.md) `T` |

#### Returns

`void`

<HorizontalLine />

### removeAllHandlers()

```ts
removeAllHandlers(): void
```

#### Returns

`void`

<HorizontalLine />

### error()

```ts
error(error): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](../../cc-everywhere-error/classes/cc-everywhere-error.md) `T` |

#### Returns

`void`

<HorizontalLine />

### warn()

```ts
warn(warning): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `warning` | [`CCEverywhereWarn`](../../cc-everywhere-error-types/interfaces/cc-everywhere-warn.md) |

#### Returns

`void`

<HorizontalLine />

### info()

```ts
info(information): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `information` | [`CCEverywhereInfo`](../../cc-everywhere-error-types/interfaces/cc-everywhere-info.md) |

#### Returns

`void`
