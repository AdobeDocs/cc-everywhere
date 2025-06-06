# Interface: Blob

Custom interface that represents a Blob object.
Should be used instead of default Blob type.

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| `size` | `readonly` | `number` |
| `type` | `readonly` | `string` |

## Methods

### slice()

```ts
slice(
   start?, 
   end?, 
   contentType?): Blob
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `start`? | `number` |
| `end`? | `number` |
| `contentType`? | `string` |

#### Returns

[`Blob`](../../asset-types/interfaces/blob.md)

***

### stream()

```ts
stream(): ReadableStream<any>
```

#### Returns

`ReadableStream`<`any`\>

***

### text()

```ts
text(): Promise<string>
```

#### Returns

`Promise`<`string`\>

***

### arrayBuffer()

```ts
arrayBuffer(): Promise<ArrayBuffer>
```

#### Returns

`Promise`<`ArrayBuffer`\>
