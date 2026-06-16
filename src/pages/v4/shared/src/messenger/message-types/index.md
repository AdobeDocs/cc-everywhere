---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../index.md)

<HorizontalLine />

# shared/src/messenger/Message.types

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [Status](enumerations/status.md) | - |
| [PublishCallbackStatus](enumerations/publish-callback-status.md) | - |
| [LoadStatus](enumerations/load-status.md) | - |
| [CancelReason](enumerations/cancel-reason.md) | - |
| [WorkflowLoadCompleted](enumerations/workflow-load-completed.md) | - |
| [MessageType](enumerations/message-type.md) | - |
| [CloseStatus](enumerations/close-status.md) | - |
| [CustomMessageAction](enumerations/custom-message-action.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [MessageDataMap](interfaces/message-data-map.md) | - |
| [WillPublishMessage](interfaces/will-publish-message.md) | Optional payload for WILL_PUBLISH when sent via [MessageCompat](type-aliases/message-compat.md) (e.g. agent includes `exportButtonId`). Default WILL_PUBLISH on the wire remains type-only, same as historically. |
| [CancelMessage](interfaces/cancel-message.md) | - |
| [TokenResponseMessage](interfaces/token-response-message.md) | - |
| [PublishStatusMessage](interfaces/publish-status-message.md) | - |
| [CustomMessage](interfaces/custom-message.md) | - |
| [CustomEventResponsePayload](interfaces/custom-event-response-payload.md) | - |
| [CustomEventResponseMessage](interfaces/custom-event-response-message.md) | - |
| [CloseStatusMessage](interfaces/close-status-message.md) | - |
| [ParamsResponseMessage](interfaces/params-response-message.md) | - |
| [WorkflowMessage](interfaces/workflow-message.md) | - |
| [ClientAuthDetailsMessage](interfaces/client-auth-details-message.md) | - |
| [SwitchEmbedActionMessage](interfaces/switch-embed-action-message.md) | - |
| [TargetLoadMessage](interfaces/target-load-message.md) | - |
| [PrivacyIframeStorageMessageResponse](interfaces/privacy-iframe-storage-message-response.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [DataMessageType](type-aliases/data-message-type.md) | - |
| [SimpleMessageType](type-aliases/simple-message-type.md) | - |
| [Message](type-aliases/message.md) | - |
| [MessageCompat](type-aliases/message-compat.md) | - |
| [DidTargetLoadMessage](type-aliases/did-target-load-message.md) | - |

## Variables

| Variable | Description |
| ------ | ------ |
| [PRIVACY\_IFRAME\_STORAGE\_MESSAGE\_TYPE](variables/privacy-iframe-storage-message-type.md) | - |
