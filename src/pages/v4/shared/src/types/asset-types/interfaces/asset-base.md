[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: AssetBase&lt;T&gt;

Base interface for all asset types.

## Extended by

- [`OutputAsset`](output-asset.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`AssetDataType`](../enumerations/asset-data-type.md) |

## Properties

| Property | Type |
| ------ | ------ |
| `type` | [`AssetType`](../enumerations/asset-type.md) |
| `name?` | `string` |
| `dataType` | `T` |
| `data` | [`DataTypeMap`](data-type-map.md)\[`T`\] |
