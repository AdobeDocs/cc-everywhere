---
hideEditInGithub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: Callbacks

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `onLoadInit?` | [`LoadInitCallback`](../type-aliases/load-init-callback.md) | Callback maybe invoked when target application has started loading and spinner starts. |
| `onLoadStart?` | [`LoadStartCallback`](../type-aliases/load-start-callback.md) | Callback maybe invoked when target application has started loading. |
| `onLoad?` | [`LoadCallback`](../type-aliases/load-callback.md) | Callback maybe invoked when target application has finished loading. |
| `onCancel?` | [`CancelCallback`](../type-aliases/cancel-callback.md) | Callback maybe invoked when user cancels the workflow. |
| `onPublishStart?` | [`PublishStartCallback`](../type-aliases/publish-start-callback.md) | Callback maybe invoked when user starts export of the asset to host app by click on save button. |
| `onPublish?` | [`PublishCallback`](../type-aliases/publish-callback.md) | Callback maybe invoked when export of the asset finishes. Promise status indicates success/ failure (e.g., user cancels in the OS picker dialog should return Promise with DENIED status) The SDK propagates this to Horizon, triggering the relevant workflow, such as displaying a success toast on resolution. |
| `onError?` | [`ErrorCallback`](../../../error/cc-everywhere-error-types/type-aliases/error-callback.md)&lt;`unknown`&gt; | Callback maybe invoked in case of error scenarios. |
| `onEvent?` | [`EventCallback`](../type-aliases/event-callback.md) | Callback maybe invoked in case of some event like information events. |
| `onIntentChange?` | [`IntentChangeCallback`](../type-aliases/intent-change-callback.md) | Callback invoked when user navigates from one design workflow to another For example: Quick action to Express. |
