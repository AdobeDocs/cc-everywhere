[cc-everywhere](../../../../../index.md) / [shared/src/error/CCEverywhereError](../index.md) / CCEverywhereError

# Class: CCEverywhereError<T\>

## Extends

- `Error`

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### new CCEverywhereError()

```ts
new CCEverywhereError<T>(
   code, 
   message?, 
   subError?, 
customData?): CCEverywhereError<T>
```

Constructor

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `code` | `T` | The error code associated with this error. |
| `message`? | `string` | The message associated with this error. |
| `subError`? | `string` \| `number` \| `Error` | Source error or a number tell more about the error. |
| `customData`? | `unknown` | Any kind of custom data related to error, which is converted to valid JSON |

#### Returns

[`CCEverywhereError`](CCEverywhereError.md)<`T`\>

#### Overrides

`Error.constructor`

## Accessors

### code

```ts
get code(): T
```

getter code

#### Returns

`T`

## Methods

### create()

```ts
static create<T>(
   errorCodeMessage, 
   subError?, 
customData?): CCEverywhereError<T>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `errorCodeMessage` | [`ErrorCodeMessage`](../../CCEverywhereError.types/type-aliases/ErrorCodeMessage.md)<`T`\> |
| `subError`? | `string` \| `number` \| `Error` |
| `customData`? | `unknown` |

#### Returns

[`CCEverywhereError`](CCEverywhereError.md)<`T`\>

***

### createErrorFromData()

```ts
static createErrorFromData<T>(data): CCEverywhereError<T>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`ErrorData`](../../ErrorData/interfaces/ErrorData.md)<`T`\> |

#### Returns

[`CCEverywhereError`](CCEverywhereError.md)<`T`\>

***

### toData()

```ts
toData(): ErrorData<T>
```

Get a plain-object representation of the error..

#### Returns

[`ErrorData`](../../ErrorData/interfaces/ErrorData.md)<`T`\>

***

### toString()

```ts
toString(): string
```

Get complete message

#### Returns

`string`
