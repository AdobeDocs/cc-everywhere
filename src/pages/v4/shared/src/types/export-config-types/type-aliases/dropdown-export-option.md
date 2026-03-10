---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: DropdownExportOption

```ts
type DropdownExportOption = 
  | PublishExportOption<DropdownOptionStyle>
  | DownloadExportOption<DropdownOptionStyle>
  | EditFurtherExportOption<DropdownOptionStyle>
  | CallBackExportOption<DropdownOptionStyle>
  | ContinueEditingDropdownOption;
```

Represents export options specifically for dropdown UI components.

This union type includes:
- [PublishExportOption](../interfaces/publish-export-option.md) with [DropdownOptionStyle](../interfaces/dropdown-option-style.md)
- [DownloadExportOption](../interfaces/download-export-option.md) with [DropdownOptionStyle](../interfaces/dropdown-option-style.md)
- [EditFurtherExportOption](../interfaces/edit-further-export-option.md) with [DropdownOptionStyle](../interfaces/dropdown-option-style.md)
- [CallBackExportOption](../interfaces/call-back-export-option.md) with [DropdownOptionStyle](../interfaces/dropdown-option-style.md)
- [ContinueEditingDropdownOption](../interfaces/continue-editing-dropdown-option.md)
