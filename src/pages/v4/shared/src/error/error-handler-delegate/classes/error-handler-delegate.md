[**cc-everywhere**](../../../../../index.md)

***

# Class: ErrorHandlerDelegate<T\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

<a id="constructor"></a>

### Constructor

```ts
new ErrorHandlerDelegate<T>(): ErrorHandlerDelegate<T>;
```

#### Returns

`ErrorHandlerDelegate`<`T`\>

## Methods

<a id="addhandler"></a>

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

<a id="removehandler"></a>

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

<a id="removeallhandlers"></a>

### removeAllHandlers()

```ts
removeAllHandlers(): void;
```

#### Returns

`void`

***

<a id="error"></a>

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

<a id="warn"></a>

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

<a id="info"></a>

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
