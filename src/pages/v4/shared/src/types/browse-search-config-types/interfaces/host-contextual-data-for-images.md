[**cc-everywhere**](../../../../../index.md)

***

# Interface: HostContextualDataForImages

Context to be passed for Contextual Recommendations for Images

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `textContent` | `string`[] | Array of strings to be passed as context for contextual browse. |
| `encodedImagesData?` | [`Base64Asset`](../../asset-types/type-aliases/base64-asset.md)[] | Array of Base64 encoded images to be passed as context for contextual browse. Recommendation is to pass image of width 330px(maintaing aspect ratio) e.g. { [ { type: AssetType.IMAGE, dataType: AssetDataType.BASE64, name: "example-image.jpg", // optional data: "data:image/jpeg;base64,/9j/4AAQSkZJRg.. } ] |
