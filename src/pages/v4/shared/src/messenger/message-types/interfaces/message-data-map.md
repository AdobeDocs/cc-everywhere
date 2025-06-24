[**cc-everywhere**](../../../../../index.md)

***

# Interface: MessageDataMap

## Properties

| Property | Type |
| ------ | ------ |
| <a id="did_target_load"></a> `DID_TARGET_LOAD` | \| \{ `status`: [`SUCCESS`](../../message-types/enumerations/load-status.md#success); `loadTime`: `number`; `url`: `string`; \} \| \{ `status`: [`FAILURE`](../../message-types/enumerations/load-status.md#failure); `loadTime`: `number`; `url`: `string`; `error?`: [`ErrorCode`](../../../error/error-codes/enumerations/error-code.md); `errorDesc?`: `string`; \} |
| <a id="did_publish"></a> `DID_PUBLISH` | [`PublishParams`](../../../types/publish-params-types/interfaces/publish-params.md) |
| <a id="cancel"></a> `CANCEL` | [`CancelMessage`](../../message-types/interfaces/cancel-message.md) |
| <a id="token_response"></a> `TOKEN_RESPONSE` | [`TokenResponseMessage`](../../message-types/interfaces/token-response-message.md) |
| <a id="params_response"></a> `PARAMS_RESPONSE` | [`ParamsResponseMessage`](../../message-types/interfaces/params-response-message.md) |
| <a id="event"></a> `EVENT` | [`HostEventData`](../../message-data-types/interfaces/host-event-data.md) |
| <a id="error"></a> `ERROR` | [`ErrorData`](../../../error/error-data/interfaces/error-data.md)<`string`\> |
| <a id="publish_status"></a> `PUBLISH_STATUS` | [`PublishStatusMessage`](../../message-types/interfaces/publish-status-message.md) |
| <a id="cw_asset_response"></a> `CW_ASSET_RESPONSE` | [`CWAssetResponse`](../../../types/community-wall-types/interfaces/cw-asset-response.md) |
