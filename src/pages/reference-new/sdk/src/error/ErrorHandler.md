[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / sdk/src/error/ErrorHandler

# sdk/src/error/ErrorHandler

## Classes

### ErrorHandler

#### Methods

##### instance()

```ts
static instance(): ErrorHandler
```

###### Returns

[`ErrorHandler`](ErrorHandler.md#errorhandler)

##### addHandler()

```ts
static addHandler(handler): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | [`IErrorMessageHandler`](../../../shared/src/error/IErrorMessageHandler.md#ierrormessagehandlert)\<[`ErrorCode`](ErrorCodes.md#errorcode)\> |

###### Returns

`void`

##### removeHandler()

```ts
static removeHandler(handler): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | [`IErrorMessageHandler`](../../../shared/src/error/IErrorMessageHandler.md#ierrormessagehandlert)\<[`ErrorCode`](ErrorCodes.md#errorcode)\> |

###### Returns

`void`

##### error()

```ts
static error(error): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](../../../shared/src/error/CCEverywhereError.md#cceverywhereerrort)\<[`ErrorCode`](ErrorCodes.md#errorcode)\> |

###### Returns

`void`

##### warn()

```ts
static warn(warn): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `warn` | [`CCEverywhereWarn`](../../../shared/src/error/CCEverywhereError.md#cceverywherewarn) \| [`CCEverywhereError`](../../../shared/src/error/CCEverywhereError.md#cceverywhereerrort)\<[`ErrorCode`](ErrorCodes.md#errorcode)\> |

###### Returns

`void`

##### info()

```ts
static info(information): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `information` | [`CCEverywhereInfo`](../../../shared/src/error/CCEverywhereError.md#cceverywhereinfo) |

###### Returns

`void`
