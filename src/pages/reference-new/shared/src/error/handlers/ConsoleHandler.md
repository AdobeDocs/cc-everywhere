[**cc-everywhere**](../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../index.md) / shared/src/error/handlers/ConsoleHandler

# shared/src/error/handlers/ConsoleHandler

## Classes

### ConsoleHandler\<T\>

#### Extends

- [`BaseHandler`](BaseHandler.md#basehandler)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Implements

- [`IErrorMessageHandler`](../IErrorMessageHandler.md#ierrormessagehandlert)\<`T`\>

#### Constructors

##### new ConsoleHandler()

```ts
new ConsoleHandler<T>(logLevel?): ConsoleHandler<T>
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `logLevel`? | [`LogLevel`](../CCEverywhereError.md#loglevel) |

###### Returns

[`ConsoleHandler`](ConsoleHandler.md#consolehandlert)\<`T`\>

###### Overrides

`BaseHandler.constructor`

#### Methods

##### info()

```ts
static info(information): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `information` | [`CCEverywhereInfo`](../CCEverywhereError.md#cceverywhereinfo) |

###### Returns

`void`

##### error()

```ts
static error<T>(error): void
```

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](../CCEverywhereError.md#cceverywhereerrort)\<`T`\> |

###### Returns

`void`

##### error()

```ts
error(error): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](../CCEverywhereError.md#cceverywhereerrort)\<`T`\> |

###### Returns

`void`

###### Implementation of

[`IErrorMessageHandler`](../IErrorMessageHandler.md#ierrormessagehandlert).`error`

##### warn()

```ts
warn(warning): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `warning` | [`CCEverywhereWarn`](../CCEverywhereError.md#cceverywherewarn) |

###### Returns

`void`

###### Implementation of

[`IErrorMessageHandler`](../IErrorMessageHandler.md#ierrormessagehandlert).`warn`

##### info()

```ts
info(information): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `information` | [`CCEverywhereInfo`](../CCEverywhereError.md#cceverywhereinfo) |

###### Returns

`void`

###### Implementation of

[`IErrorMessageHandler`](../IErrorMessageHandler.md#ierrormessagehandlert).`info`
