# Interface: AssetBase<T\>

Base interface for all asset types.

## Extended by

- [`OutputAsset`](OutputAsset.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`AssetDataType`](../enumerations/AssetDataType.md) |

## Properties

| Property | Type |
| ------ | ------ |
| `type` | [`AssetType`](../enumerations/AssetType.md) |
| `name?` | `string` |
| `dataType` | `T` |
| `data` | [`DataTypeMap`](DataTypeMap.md)\[`T`\] |
