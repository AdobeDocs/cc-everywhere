[**cc-everywhere**](../../../../../index.md)

***

# Interface: MessageDataMap

## Properties

| Property | Type |
| ------ | ------ |
| `DID_TARGET_LOAD` | \| \{ `status`: [`SUCCESS`](../../message-types/enumerations/load-status.md#success); `loadTime`: `number`; `url`: `string`; \} \| \{ `status`: [`FAILURE`](../../message-types/enumerations/load-status.md#failure); `loadTime`: `number`; `url`: `string`; `error?`: [`ErrorCode`](../../../error/error-codes/enumerations/error-code.md); `errorDesc?`: `string`; \} |
| `DID_PUBLISH` | [`PublishParams`](../../../types/publish-params-types/interfaces/publish-params.md) |
| `CANCEL` | [`CancelMessage`](cancel-message.md) |
| `TOKEN_RESPONSE` | [`TokenResponseMessage`](token-response-message.md) |
| `PARAMS_RESPONSE` | [`ParamsResponseMessage`](params-response-message.md) |
| `EVENT` | [`HostEventData`](../../message-data-types/interfaces/host-event-data.md) |
| `ERROR` | [`ErrorData`](../../../error/error-data/interfaces/error-data.md) `string` |
| `PUBLISH_STATUS` | [`PublishStatusMessage`](publish-status-message.md) |
| `CW_ASSET_RESPONSE` | [`CWAssetResponse`](../../../types/community-wall-types/interfaces/cw-asset-response.md) |
| `WORKFLOW_CONTEXT_UPDATE` | [`WorkflowMessage`](../../message-types/interfaces/workflow-message.md) |
| `CLOSE_STATUS` | [`CloseStatusMessage`](../../message-types/interfaces/close-status-message.md) |
| `PROMPT_SAFETY_CHECK_RESPONSE` | [`PromptSafetyCheckResponse`](../../../types/module/app-config-types/interfaces/prompt-safety-check-response.md) |
| `CLIENT_AUTH_DETAILS` | [`ClientAuthDetailsMessage`](../../message-types/interfaces/client-auth-details-message.md) |
