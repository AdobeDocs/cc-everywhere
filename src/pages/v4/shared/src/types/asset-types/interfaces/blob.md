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

<a id="slice"></a>

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

<a id="stream"></a>

### stream()

```ts
stream(): ReadableStream;
```

#### Returns

`ReadableStream`

***

<a id="text"></a>

### text()

```ts
text(): Promise<string>;
```

#### Returns

`Promise`<`string`\>

***

<a id="arraybuffer"></a>

### arrayBuffer()

```ts
arrayBuffer(): Promise<ArrayBuffer>;
```

#### Returns

`Promise`<`ArrayBuffer`\>
