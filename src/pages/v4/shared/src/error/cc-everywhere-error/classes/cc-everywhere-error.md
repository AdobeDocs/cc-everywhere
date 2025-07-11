[**cc-everywhere**](../../../../../index.md)

***

# Class: CCEverywhereError<T\>

## Extends

- `Error`

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

<a id="constructor"></a>

### Constructor

```ts
new CCEverywhereError<T>(
   code, 
   message?, 
   subError?, 
customData?): CCEverywhereError<T>;
```

Constructor

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `code` | `T` | The error code associated with this error. |
| `message?` | `string` | The message associated with this error. |
| `subError?` | `string` \| `number` \| `Error` | Source error or a number tell more about the error. |
| `customData?` | `unknown` | Any kind of custom data related to error, which is converted to valid JSON |

#### Returns

`CCEverywhereError`<`T`\>

#### Overrides

```ts
Error.constructor
```

## Accessors

<a id="code"></a>

### code

#### Get Signature

```ts
get code(): T;
```

getter code

##### Returns

`T`

## Methods

<a id="create"></a>

### create()

```ts
static create<T>(
   errorCodeMessage, 
   subError?, 
customData?): CCEverywhereError<T>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `errorCodeMessage` | [`ErrorCodeMessage`](../../cc-everywhere-error-types/type-aliases/error-code-message.md)<`T`\> |
| `subError?` | `string` \| `number` \| `Error` |
| `customData?` | `unknown` |

#### Returns

`CCEverywhereError`<`T`\>

***

<a id="createerrorfromdata"></a>

### createErrorFromData()

```ts
static createErrorFromData<T>(data): CCEverywhereError<T>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | [`ErrorData`](../../error-data/interfaces/error-data.md)<`T`\> |

#### Returns

`CCEverywhereError`<`T`\>

***

<a id="todata"></a>

### toData()

```ts
toData(): ErrorData<T>;
```

Get a plain-object representation of the error..

#### Returns

[`ErrorData`](../../error-data/interfaces/error-data.md)<`T`\>

***

<a id="tostring"></a>

### toString()

```ts
toString(): string;
```

Get complete message

#### Returns

`string`
