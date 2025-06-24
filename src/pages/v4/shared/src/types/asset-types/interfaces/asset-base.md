[**cc-everywhere**](../../../../../index.md)

***

# Interface: AssetBase<T\>

Base interface for all asset types.

## Extended by

- [`OutputAsset`](../../asset-types/interfaces/output-asset.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`AssetDataType`](../../asset-types/enumerations/asset-data-type.md) |

## Properties

| Property | Type |
| ------ | ------ |
| <a id="type"></a> `type` | [`AssetType`](../../asset-types/enumerations/asset-type.md) |
| <a id="name"></a> `name?` | `string` |
| <a id="datatype"></a> `dataType` | `T` |
| <a id="data"></a> `data` | [`DataTypeMap`](../../asset-types/interfaces/data-type-map.md)\[`T`\] |
