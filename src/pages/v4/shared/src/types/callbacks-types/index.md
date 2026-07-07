---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../index.md)

<HorizontalLine />

# shared/src/types/Callbacks.types

## Interfaces

| Interface | Description |
| ------ | ------ |
| [IntentChangeConfig](interfaces/intent-change-config.md) | Optional configuration returned when the user navigates from one design workflow to another. Used by [IntentChangeCallback](type-aliases/intent-change-callback.md) to dynamically update app, export, or container config. |
| [PublishStatus](interfaces/publish-status.md) | - |
| [Callbacks](interfaces/callbacks.md) | Map of optional lifecycle and event callbacks for the CC Everywhere SDK. Hosts implement the callbacks they need; all are optional. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [LoadStartCallback](type-aliases/load-start-callback.md) | - |
| [LoadCallback](type-aliases/load-callback.md) | - |
| [LoadInitCallback](type-aliases/load-init-callback.md) | - |
| [CancelCallback](type-aliases/cancel-callback.md) | - |
| [PublishStartCallback](type-aliases/publish-start-callback.md) | - |
| [PublishCallback](type-aliases/publish-callback.md) | Keeping callback type as void | `Promise&lt;PublishStatus&gt;` for the publish operation, to handle promises as well |
| [EventCallback](type-aliases/event-callback.md) | - |
| [IntentChangeCallback](type-aliases/intent-change-callback.md) | Callback invoked when the user navigates from one design workflow to another (e.g. Quick action to Express). May return [IntentChangeConfig](interfaces/intent-change-config.md) to update app, export, or container config for the new intent. |
