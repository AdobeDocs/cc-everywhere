[**cc-everywhere**](../../../../../index.md)

***

# Class: ErrorHandlerDelegate<T\>

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

`ErrorHandlerDelegate`<`T`\>

## Methods

### addHandler()

```ts
addHandler(handler): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | [`IErrorMessageHandler`](../../i-error-message-handler/interfaces/i-error-message-handler.md)<`T`\> |

#### Returns

`void`

***

### removeHandler()

```ts
removeHandler(handler): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | [`IErrorMessageHandler`](../../i-error-message-handler/interfaces/i-error-message-handler.md)<`T`\> |

#### Returns

`void`

***

### removeAllHandlers()

```ts
removeAllHandlers(): void;
```

#### Returns

`void`

***

### error()

```ts
error(error): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](../../cc-everywhere-error/classes/cc-everywhere-error.md)<`T`\> |

#### Returns

`void`

***

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

***

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
