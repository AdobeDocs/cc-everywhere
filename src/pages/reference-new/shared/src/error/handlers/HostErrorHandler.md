[**cc-everywhere**](../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../index.md) / shared/src/error/handlers/HostErrorHandler

# shared/src/error/handlers/HostErrorHandler

## Classes

### HostErrorHandler\<T\>

#### Extends

- [`BaseHandler`](BaseHandler.md#basehandler)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Implements

- [`IErrorMessageHandler`](../IErrorMessageHandler.md#ierrormessagehandlert)\<`T`\>

#### Constructors

##### new HostErrorHandler()

```ts
new HostErrorHandler<T>(hostErrorCallback, logLevel?): HostErrorHandler<T>
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `hostErrorCallback` | [`ErrorCallback`](../CCEverywhereError.md#errorcallbackt)\<`T`\> |
| `logLevel`? | [`LogLevel`](../CCEverywhereError.md#loglevel) |

###### Returns

[`HostErrorHandler`](HostErrorHandler.md#hosterrorhandlert)\<`T`\>

###### Overrides

`BaseHandler.constructor`

#### Methods

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
warn(): void
```

###### Returns

`void`

###### Implementation of

[`IErrorMessageHandler`](../IErrorMessageHandler.md#ierrormessagehandlert).`warn`

##### info()

```ts
info(): void
```

###### Returns

`void`

###### Implementation of

[`IErrorMessageHandler`](../IErrorMessageHandler.md#ierrormessagehandlert).`info`
