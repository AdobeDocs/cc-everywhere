[**cc-everywhere**](../../../../../index.md)

***

# Type Alias: DropdownExportOption

```ts
type DropdownExportOption = 
  | PublishExportOption<DropdownOptionStyle>
  | DownloadExportOption<DropdownOptionStyle>
  | EditFurtherExportOption<DropdownOptionStyle>
  | ContinueEditingDropdownOption;
```

Represents export options specifically for dropdown UI components.

This union type includes:

- [PublishExportOption](../../export-config-types/interfaces/publish-export-option.md) with [DropdownOptionStyle](../../export-config-types/interfaces/dropdown-option-style.md)
- [DownloadExportOption](../../export-config-types/interfaces/download-export-option.md) with [DropdownOptionStyle](../../export-config-types/interfaces/dropdown-option-style.md)
- [EditFurtherExportOption](../../export-config-types/interfaces/edit-further-export-option.md) with [DropdownOptionStyle](../../export-config-types/interfaces/dropdown-option-style.md)
- [ContinueEditingDropdownOption](../../export-config-types/interfaces/continue-editing-dropdown-option.md)
