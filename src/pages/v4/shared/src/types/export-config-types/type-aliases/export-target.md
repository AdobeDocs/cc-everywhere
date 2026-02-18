---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: ExportTarget

```ts
type ExportTarget = 
  | PublishTarget
  | DownloadTarget
  | EditFurtherTarget
  | CallBackTarget;
```

Represents the available export targets for content.
This union type includes:

[PublishTarget](../enumerations/publish-target.md)
- Publish to host application

[DownloadTarget](../enumerations/download-target.md)
- Download to user's device

[EditFurtherTarget](../enumerations/edit-further-target.md)
- Continue editing in another application

[CallBackTarget](../enumerations/call-back-target.md)
- Callback to host application

## See

 - [ExportAction](export-action.md)
for the corresponding action types
 - [ExportConfig](export-config.md)
for usage in export configuration
