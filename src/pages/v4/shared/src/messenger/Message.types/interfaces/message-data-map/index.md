# Interface: MessageDataMap

## Properties

| Property          | Type                                                                               |
| ----------------- | ---------------------------------------------------------------------------------- |
| `DID_TARGET_LOAD` | `object` \| `object`                                                               |
| `DID_PUBLISH`     | [`PublishParams`](../../../../types/PublishParams.types/interfaces/publish-params/index.md) |
| `CANCEL`          | [`CancelMessage`](../cancel-message/index.md)                                         |
| `TOKEN_RESPONSE`  | [`TokenResponseMessage`](../token-response-message/index.md)            |
| `PARAMS_RESPONSE` | [`ParamsResponseMessage`](../params-response-message/index.md)          |
| `EVENT`           | [`HostEventData`](../../../MessageData.types/interfaces/host-event-data/index.md)     |
| `ERROR`           | [`ErrorData`](../../../../error/ErrorData/interfaces/error-data/index.md)`string`     |
