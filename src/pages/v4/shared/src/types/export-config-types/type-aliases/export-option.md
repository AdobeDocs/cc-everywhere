[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

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

- [PublishExportOption](../interfaces/publish-export-option.md) - Options for publishing content with [ButtonStyle](button-style.md) or [LinkStyle](../interfaces/link-style.md)
- [DownloadExportOption](../interfaces/download-export-option.md) - Options for downloading content with [ButtonStyle](button-style.md) or [LinkStyle](../interfaces/link-style.md)
- [EditFurtherExportOption](../interfaces/edit-further-export-option.md) - Options for further editing with [ButtonStyle](button-style.md), [EnabledButtonStyle](enabled-button-style.md), or [LinkStyle](../interfaces/link-style.md)
