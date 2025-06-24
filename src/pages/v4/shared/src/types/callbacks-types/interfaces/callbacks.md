[**cc-everywhere**](../../../../../index.md)

***

# Interface: Callbacks

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="onloadinit"></a> `onLoadInit?` | [`LoadInitCallback`](../../callbacks-types/type-aliases/load-init-callback.md) | Callback maybe invoked when target application has started loading and spinner starts. |
| <a id="onloadstart"></a> `onLoadStart?` | [`LoadStartCallback`](../../callbacks-types/type-aliases/load-start-callback.md) | Callback maybe invoked when target application has started loading. |
| <a id="onload"></a> `onLoad?` | [`LoadCallback`](../../callbacks-types/type-aliases/load-callback.md) | Callback maybe invoked when target application has finished loading. |
| <a id="oncancel"></a> `onCancel?` | [`CancelCallback`](../../callbacks-types/type-aliases/cancel-callback.md) | Callback maybe invoked when user cancels the workflow. |
| <a id="onpublishstart"></a> `onPublishStart?` | [`PublishStartCallback`](../../callbacks-types/type-aliases/publish-start-callback.md) | Callback maybe invoked when user starts export of the asset to host app by click on save button. |
| <a id="onpublish"></a> `onPublish?` | [`PublishCallback`](../../callbacks-types/type-aliases/publish-callback.md) | Callback maybe invoked when export of the asset finishes. Promise status indicates success/ failure (e.g., user cancels in the OS picker dialog should return Promise with DENIED status) The SDK propagates this to Horizon, triggering the relevant workflow, such as displaying a success toast on resolution. |
| <a id="onerror"></a> `onError?` | [`ErrorCallback`](../../../error/cc-everywhere-error-types/type-aliases/error-callback.md)<`unknown`\> | Callback maybe invoked in case of error scenarios. |
| <a id="onevent"></a> `onEvent?` | [`EventCallback`](../../callbacks-types/type-aliases/event-callback.md) | Callback maybe invoked in case of some event like information events. |
| <a id="onintentchange"></a> `onIntentChange?` | [`IntentChangeCallback`](../../callbacks-types/type-aliases/intent-change-callback.md) | Callback invoked when user navigates from one design workflow to another For example: Quick action to Express. |
