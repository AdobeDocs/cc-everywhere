[**cc-everywhere**](../../../../../index.md)

***

# Interface: CWAssetResponse

## Extends

- [`DataResponse`](../../community-wall-types/interfaces/data-response.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="assets"></a> `assets?` | [`CommunityWallAssetData`](../../module/app-config-types/interfaces/community-wall-asset-data.md)[] | Array of assets returned by the fetchCommunityAssets callback |
| <a id="error"></a> `error?` | `Error` | Error data returned by the fetchCommunityAssets callback |
| <a id="cursor"></a> `cursor?` | `string` | Cursor returned by the fetchCommunityAssets callback for pagination |
