[**cc-everywhere**](../../../../../index.md)

***

# Type Alias: ExportOption

```ts
type ExportOption = 
  | PublishExportOption<
  | ButtonStyle
  | LinkStyle>
  | DownloadExportOption<
  | ButtonStyle
  | LinkStyle>
  | EditFurtherExportOption<
  | ButtonStyle
  | EnabledButtonStyle
| LinkStyle>;
```

Represents the available export options for the CC Everywhere SDK.

This union type includes:
- [PublishExportOption](../../export-config-types/interfaces/publish-export-option.md) - Options for publishing content with [ButtonStyle](../../export-config-types/type-aliases/button-style.md) or [LinkStyle](../../export-config-types/interfaces/link-style.md)
- [DownloadExportOption](../../export-config-types/interfaces/download-export-option.md) - Options for downloading content with [ButtonStyle](../../export-config-types/type-aliases/button-style.md) or [LinkStyle](../../export-config-types/interfaces/link-style.md)
- [EditFurtherExportOption](../../export-config-types/interfaces/edit-further-export-option.md) - Options for further editing with [ButtonStyle](../../export-config-types/type-aliases/button-style.md), [EnabledButtonStyle](../../export-config-types/type-aliases/enabled-button-style.md), or [LinkStyle](../../export-config-types/interfaces/link-style.md)
