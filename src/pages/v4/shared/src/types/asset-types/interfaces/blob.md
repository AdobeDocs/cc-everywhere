[**cc-everywhere**](../../../../../index.md)

***

# Interface: Blob

Custom interface that represents a Blob object.
Should be used instead of default Blob type.

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| <a id="size"></a> `size` | `readonly` | `number` |
| <a id="type"></a> `type` | `readonly` | `string` |

## Methods

### slice()

```ts
slice(
   start?, 
   end?, 
   contentType?): Blob;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `start?` | `number` |
| `end?` | `number` |
| `contentType?` | `string` |

#### Returns

`Blob`

***

### stream()

```ts
stream(): ReadableStream;
```

#### Returns

`ReadableStream`

***

### text()

```ts
text(): Promise<string>;
```

#### Returns

`Promise`<`string`\>

***

### arrayBuffer()

```ts
arrayBuffer(): Promise<ArrayBuffer>;
```

#### Returns

`Promise`<`ArrayBuffer`\>
