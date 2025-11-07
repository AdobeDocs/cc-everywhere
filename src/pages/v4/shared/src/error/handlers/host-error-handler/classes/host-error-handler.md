[**cc-everywhere**](..\..\..\..\..\..\index.md)

***

# Class: HostErrorHandler&lt; T\ &gt;

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
new HostErrorHandler<T>(hostErrorCallback, logLevel?): HostErrorHandler<T>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hostErrorCallback` | [`ErrorCallback`](..\..\..\cc-everywhere-error-types\type-aliases\error-callback.md)&lt; `T`\ &gt; |
| `logLevel?` | [`LogLevel`](..\..\..\cc-everywhere-error-types\enumerations\log-level.md) |

#### Returns

`HostErrorHandler`&lt; `T`\ &gt;

#### Overrides

```ts
BaseHandler.constructor
```

## Methods

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
warn(): void;
```

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](..\..\..\i-error-message-handler\interfaces\i-error-message-handler.md).[`warn`](..\..\..\i-error-message-handler\interfaces\i-error-message-handler.md#warn)

***

### info()

```ts
info(): void;
```

#### Returns

`void`

#### Implementation of

[`IErrorMessageHandler`](..\..\..\i-error-message-handler\interfaces\i-error-message-handler.md).[`info`](..\..\..\i-error-message-handler\interfaces\i-error-message-handler.md#info)
