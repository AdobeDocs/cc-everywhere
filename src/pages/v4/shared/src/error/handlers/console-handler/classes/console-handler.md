[**cc-everywhere**](..\..\..\..\..\..\index.md)

***

# Class: ConsoleHandler&lt; T\ &gt;

## Extends

- [`BaseHandler`](..\..\base-handler\classes\base-handler.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Implements

- [`IErrorMessageHandler`](..\..\..\i-error-message-handler\interfaces\i-error-message-handler.md)&lt; `T`\ &gt;

## Constructors

### Constructor

```ts
new ConsoleHandler<T>(logLevel?): ConsoleHandler<T>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `logLevel?` | [`LogLevel`](..\..\..\cc-everywhere-error-types\enumerations\log-level.md) |

#### Returns

`ConsoleHandler`&lt; `T`\ &gt;

#### Overrides

```ts
BaseHandler.constructor
```

## Methods

### info()

```ts
static info(information): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `information` | [`CCEverywhereInfo`](..\..\..\cc-everywhere-error-types\interfaces\cc-everywhere-info.md) |

#### Returns

`void`

***

### error()

```ts
static error<T>(error): void;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](..\..\..\cc-everywhere-error\classes\cc-everywhere-error.md)&lt; `T`\ &gt; |

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
| `error` | [`CCEverywhereError`](..\..\..\cc-everywhere-error\classes\cc-everywhere-error.md)&lt; `T`\ &gt; |

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](..\..\..\i-error-message-handler\interfaces\i-error-message-handler.md).[`error`](..\..\..\i-error-message-handler\interfaces\i-error-message-handler.md#error)

***

### warn()

```ts
warn(warning): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `warning` | [`CCEverywhereWarn`](..\..\..\cc-everywhere-error-types\interfaces\cc-everywhere-warn.md) |

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](..\..\..\i-error-message-handler\interfaces\i-error-message-handler.md).[`warn`](..\..\..\i-error-message-handler\interfaces\i-error-message-handler.md#warn)

***

### info()

```ts
info(information): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `information` | [`CCEverywhereInfo`](..\..\..\cc-everywhere-error-types\interfaces\cc-everywhere-info.md) |

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](..\..\..\i-error-message-handler\interfaces\i-error-message-handler.md).[`info`](..\..\..\i-error-message-handler\interfaces\i-error-message-handler.md#info)
