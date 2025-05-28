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
| `type` | [`AssetType`](../../asset-types/enumerations/asset-type.md) |
| `name?` | `string` |
| `dataType` | `T` |
| `data` | [`DataTypeMap`](../../asset-types/interfaces/data-type-map.md)\[`T`\] |
