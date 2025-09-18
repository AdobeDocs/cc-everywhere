[**cc-everywhere**](../../../../../index.md)

***

# Interface: Callbacks

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `onLoadInit?` | [`LoadInitCallback`](../../callbacks-types/type-aliases/load-init-callback.md) | Callback maybe invoked when target application has started loading and spinner starts. |
| `onLoadStart?` | [`LoadStartCallback`](../../callbacks-types/type-aliases/load-start-callback.md) | Callback maybe invoked when target application has started loading. |
| `onLoad?` | [`LoadCallback`](../../callbacks-types/type-aliases/load-callback.md) | Callback maybe invoked when target application has finished loading. |
| `onCancel?` | [`CancelCallback`](../../callbacks-types/type-aliases/cancel-callback.md) | Callback maybe invoked when user cancels the workflow. |
| `onPublishStart?` | [`PublishStartCallback`](../../callbacks-types/type-aliases/publish-start-callback.md) | Callback maybe invoked when user starts export of the asset to host app by click on save button. |
| `onPublish?` | [`PublishCallback`](../../callbacks-types/type-aliases/publish-callback.md) | Callback maybe invoked when export of the asset finishes. Promise status indicates success/ failure (e.g., user cancels in the OS picker dialog should return Promise with DENIED status) The SDK propagates this to Horizon, triggering the relevant workflow, such as displaying a success toast on resolution. |
| `onError?` | [`ErrorCallback`](../../../error/cc-everywhere-error-types/type-aliases/error-callback.md)<`unknown`\> | Callback maybe invoked in case of error scenarios. |
| `onEvent?` | [`EventCallback`](../../callbacks-types/type-aliases/event-callback.md) | Callback maybe invoked in case of some event like information events. |
| `onIntentChange?` | [`IntentChangeCallback`](../../callbacks-types/type-aliases/intent-change-callback.md) | Callback invoked when user navigates from one design workflow to another For example: Quick action to Express. |
