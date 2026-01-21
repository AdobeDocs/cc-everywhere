[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Class: ErrorHandlerDelegate&lt;T&gt;

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### Constructor

```ts
new ErrorHandlerDelegate<T>(): ErrorHandlerDelegate<T>;
```

#### Returns

`ErrorHandlerDelegate`&lt;`T`&gt;

## Methods

### addHandler()

```ts
addHandler(handler): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | [`IErrorMessageHandler`](../../i-error-message-handler/interfaces/i-error-message-handler.md)&lt;`T`&gt; |

#### Returns

`void`

<HorizontalLine />

### removeHandler()

```ts
removeHandler(handler): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | [`IErrorMessageHandler`](../../i-error-message-handler/interfaces/i-error-message-handler.md)&lt;`T`&gt; |

#### Returns

`void`

<HorizontalLine />

### removeAllHandlers()

```ts
removeAllHandlers(): void;
```

#### Returns

`void`

<HorizontalLine />

### error()

```ts
error(error): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](../../cc-everywhere-error/classes/cc-everywhere-error.md)&lt;`T`&gt; |

#### Returns

`void`

<HorizontalLine />

### warn()

```ts
warn(warning): void;
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
info(information): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `information` | [`CCEverywhereInfo`](../../cc-everywhere-error-types/interfaces/cc-everywhere-info.md) |

#### Returns

`void`
