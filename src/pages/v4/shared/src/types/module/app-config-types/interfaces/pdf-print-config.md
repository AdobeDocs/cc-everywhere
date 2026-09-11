---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: PdfPrintConfig

Settings applied to the print-ready PDF export in the Focused Design Editor.
Only takes effect when a Publish action's [PublishAction.publishSubFileType](../../../export-config-types/interfaces/publish-action.md#property-publishsubfiletype) is
[SubFileType.pdfPrint](../../../asset-types/enumerations/sub-file-type.md#enumeration-member-pdfprint) — if it is [SubFileType.pdf](../../../asset-types/enumerations/sub-file-type.md#enumeration-member-pdf) (or unset), these settings
are ignored and the export stays plain PDF.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `includeCropMarks?` | `boolean` | Adds crop marks to the exported print pdf — the printed registration lines a printer uses to trim the sheet. This is distinct from crop margin size (the blank space reserved for those lines): when enabled, the necessary margin space is reserved automatically. **Default** false, except `true` when [ExperienceVariant.PRINT](../enumerations/experience-variant.md#enumeration-member-print) is the active variant. |
| `includeBleed?` | `boolean` | Show bleeds in the exported print PDF for easier trimming after printing. **Default** false, except `true` when [ExperienceVariant.PRINT](../enumerations/experience-variant.md#enumeration-member-print) is the active variant. |
| `colorMode?` | [`PdfPrintColorMode`](../enumerations/pdf-print-color-mode.md) | Color mode for the exported PDF. **Default** [PdfPrintColorMode.CMYK](../enumerations/pdf-print-color-mode.md#enumeration-member-cmyk) |
| `cmykColorProfile?` | [`PdfPrintCmykColorProfile`](../enumerations/pdf-print-cmyk-color-profile.md) | CMYK color profile to apply. Only takes effect when [PdfPrintConfig.colorMode](#property-colormode) is [PdfPrintColorMode.CMYK](../enumerations/pdf-print-color-mode.md#enumeration-member-cmyk). **Default** [PdfPrintCmykColorProfile.CoatedGRACoL2006](../enumerations/pdf-print-cmyk-color-profile.md#enumeration-member-coatedgracol2006) |
