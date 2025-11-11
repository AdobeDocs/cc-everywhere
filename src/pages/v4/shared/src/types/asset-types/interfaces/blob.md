[**cc-everywhere**](..\..\..\..\..\index.md)

<HorizontalLine />

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

<HorizontalLine />

### stream()

```ts
stream(): ReadableStream;
```

#### Returns

`ReadableStream`

<HorizontalLine />

### text()

```ts
text(): Promise<string>;
```

#### Returns

`Promise`&lt; `string`\ &gt;

<HorizontalLine />

### arrayBuffer()

```ts
arrayBuffer(): Promise<ArrayBuffer>;
```

#### Returns

`Promise`&lt; `ArrayBuffer`\ &gt;
