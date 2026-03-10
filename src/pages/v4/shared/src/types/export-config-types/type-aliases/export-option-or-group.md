---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: ExportOptionOrGroup

```ts
type ExportOptionOrGroup = 
  | ExportOption
  | ExportOptionGroup
  | ContinueEditingGroup
  | PublishButtonGroup;
```

Either a single [ExportOption](export-option.md) or a grouped configuration such as [ExportOptionGroup](../interfaces/export-option-group.md),
[ContinueEditingGroup](../interfaces/continue-editing-group.md), or [PublishButtonGroup](../interfaces/publish-button-group.md).
