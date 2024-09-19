[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/error/ErrorHandlerDelegate

# shared/src/error/ErrorHandlerDelegate

## Classes

### ErrorHandlerDelegate\<T\>

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Constructors

##### new ErrorHandlerDelegate()

```ts
new ErrorHandlerDelegate<T>(): ErrorHandlerDelegate<T>
```

###### Returns

[`ErrorHandlerDelegate`](ErrorHandlerDelegate.md#errorhandlerdelegatet)\<`T`\>

#### Methods

##### addHandler()

```ts
addHandler(handler): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | [`IErrorMessageHandler`](IErrorMessageHandler.md#ierrormessagehandlert)\<`T`\> |

###### Returns

`void`

##### removeHandler()

```ts
removeHandler(handler): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | [`IErrorMessageHandler`](IErrorMessageHandler.md#ierrormessagehandlert)\<`T`\> |

###### Returns

`void`

##### removeAllHandlers()

```ts
removeAllHandlers(): void
```

###### Returns

`void`

##### error()

```ts
error(error): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`CCEverywhereError`](CCEverywhereError.md#cceverywhereerrort)\<`T`\> |

###### Returns

`void`

##### warn()

```ts
warn(warning): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `warning` | [`CCEverywhereWarn`](CCEverywhereError.md#cceverywherewarn) |

###### Returns

`void`

##### info()

```ts
info(information): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `information` | [`CCEverywhereInfo`](CCEverywhereError.md#cceverywhereinfo) |

###### Returns

`void`
