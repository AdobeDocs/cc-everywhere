---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: ExportAction

```ts
type ExportAction = 
  | PublishAction
  | DownloadAction
  | EditFurtherAction
  | ContinueEditingAction
  | CallBackAction;
```

Union of all export action payloads, covering [PublishAction](../interfaces/publish-action.md), [DownloadAction](../interfaces/download-action.md),
[EditFurtherAction](../interfaces/edit-further-action.md), [ContinueEditingAction](continue-editing-action.md), and [CallBackAction](../interfaces/call-back-action.md).
