# Interface: CWAssetResponse

## Extends

- [`DataResponse`](data-response.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `assets?` | [`CommunityWallAssetData`](../../module/AppConfig.types/interfaces/community-wall-asset-data.md)[] | Array of assets returned by the fetchCommunityAssets callback |
| `error?` | `Error` | Error data returned by the fetchCommunityAssets callback |
| `cursor?` | `string` | Cursor returned by the fetchCommunityAssets callback for pagination |
