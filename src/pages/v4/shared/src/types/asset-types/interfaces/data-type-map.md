[**cc-everywhere**](../../../../../index.md)

***

# Interface: DataTypeMap

Represents a mapping of data types for assets.

## Remarks

The `DataTypeMap` interface defines the available data types for assets.
It includes the following properties:

- `blob`: Represents a binary large object (Blob) data type. It can also support File object.
- `url`: Represents a string data type that represents a presigned URL.
- `base64`: Represents a string data type that represents a base64 encoded value.

## Properties

| Property | Type |
| ------ | ------ |
| <a id="blob"></a> `blob` | [`Blob`](../../asset-types/interfaces/blob.md) |
| <a id="url"></a> `url` | `string` |
| <a id="base64"></a> `base64` | `string` |
