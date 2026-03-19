---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: ExportStyle

```ts
type ExportStyle = 
  | ButtonStyle
  | EnabledButtonStyle
  | LinkStyle
  | DropdownOptionStyle;
```

Union of all available export option styles.

This union type includes:
- [ButtonStyle](button-style.md) - Standard button
- [EnabledButtonStyle](enabled-button-style.md) - Always-enabled button
- [LinkStyle](../interfaces/link-style.md) - Link presentation
- [DropdownOptionStyle](../interfaces/dropdown-option-style.md) - Dropdown with optional custom content

## See

[BaseExportOption](../interfaces/base-export-option.md) for options that use these styles
