---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../index.md)

<HorizontalLine />

# shared/src/types/ExportConfig.types

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [PublishTarget](enumerations/publish-target.md) | - |
| [DownloadTarget](enumerations/download-target.md) | - |
| [EditFurtherTarget](enumerations/edit-further-target.md) | - |
| [CallBackTarget](enumerations/call-back-target.md) | - |
| [ExportOptionUI](enumerations/export-option-ui.md) | - |
| [EditFurtherIntent](enumerations/edit-further-intent.md) | - |
| [ExportGroupType](enumerations/export-group-type.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [Style](interfaces/style.md) | - |
| [BaseButtonStyle](interfaces/base-button-style.md) | Style for a button-style export option (button or enabled-button). |
| [CustomContentConfig](interfaces/custom-content-config.md) | Configuration for custom content (e.g. markdown) inside a dropdown option. |
| [DropdownOptionStyle](interfaces/dropdown-option-style.md) | Style for a dropdown export option, with optional icon and custom content. |
| [DropdownOptionStyleCompat](interfaces/dropdown-option-style-compat.md) | Dropdown option style with optional button variant/treatment (compatibility). |
| [LinkStyle](interfaces/link-style.md) | Style for a link-style export option (no button chrome). |
| [BaseAction](interfaces/base-action.md) | - |
| [PublishAction](interfaces/publish-action.md) | Action for publishing content to the host application. |
| [DownloadAction](interfaces/download-action.md) | Action for downloading content to the user's device. |
| [EditFurtherAction](interfaces/edit-further-action.md) | Action for continuing to edit content in another application (Express or Image module). |
| [CallBackAction](interfaces/call-back-action.md) | Action for invoking a host callback without publishing assets. |
| [BaseExportOption](interfaces/base-export-option.md) | Base for a single export option: id, style, and action. |
| [PublishExportOption](interfaces/publish-export-option.md) | Export option for publishing content to various targets. |
| [DownloadExportOption](interfaces/download-export-option.md) | Export option for downloading content to the user's device. |
| [EditFurtherExportOption](interfaces/edit-further-export-option.md) | Export option for continuing to edit content in other applications. |
| [ContinueEditingDropdownOption](interfaces/continue-editing-dropdown-option.md) | Base for a single export option: id, style, and action. |
| [CallBackExportOption](interfaces/call-back-export-option.md) | Export option for callback actions that trigger callbacks without publishing assets. |
| [ExportGroup](interfaces/export-group.md) | - |
| [ExportOptionGroup](interfaces/export-option-group.md) | - |
| [ContinueEditingGroup](interfaces/continue-editing-group.md) | - |
| [PublishButtonGroup](interfaces/publish-button-group.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [ExportTarget](type-aliases/export-target.md) | Represents the available export targets for content. |
| [ExportButtonTreatment](type-aliases/export-button-treatment.md) | - |
| [ExportButtonVariant](type-aliases/export-button-variant.md) | - |
| [ExportButtonDisplayMode](type-aliases/export-button-display-mode.md) | Display mode for button-style export options (icon and/or label). |
| [ExportContext](type-aliases/export-context.md) | - |
| [ButtonStyle](type-aliases/button-style.md) | Style for a standard export button. |
| [EnabledButtonStyle](type-aliases/enabled-button-style.md) | Style for an always-enabled export button (no disabled state). |
| [ContentType](type-aliases/content-type.md) | Represents the type of content, currently supporting markdown. |
| [ExportStyle](type-aliases/export-style.md) | Union of all available export option styles. |
| [ContinueEditingAction](type-aliases/continue-editing-action.md) | Action used when continuing editing in another experience. It extends [EditFurtherAction](interfaces/edit-further-action.md) and always includes an [EditFurtherIntent](enumerations/edit-further-intent.md). |
| [ExportAction](type-aliases/export-action.md) | Union of all export action payloads, covering [PublishAction](interfaces/publish-action.md), [DownloadAction](interfaces/download-action.md), [EditFurtherAction](interfaces/edit-further-action.md), [ContinueEditingAction](type-aliases/continue-editing-action.md), and [CallBackAction](interfaces/call-back-action.md). |
| [ExportOption](type-aliases/export-option.md) | - |
| [DropdownExportOption](type-aliases/dropdown-export-option.md) | Represents export options specifically for dropdown UI components. |
| [ExportOptionOrGroup](type-aliases/export-option-or-group.md) | Either a single [ExportOption](type-aliases/export-option.md) or a grouped configuration such as [ExportOptionGroup](interfaces/export-option-group.md), [ContinueEditingGroup](interfaces/continue-editing-group.md), or [PublishButtonGroup](interfaces/publish-button-group.md). |
| [ExportOptions](type-aliases/export-options.md) | Array of [ExportOptionOrGroup](type-aliases/export-option-or-group.md) entries that make up an export configuration. |
| [ExportConfig](type-aliases/export-config.md) | Top-level export configuration consumed by SDK hosts; it mirrors [ExportOptions](type-aliases/export-options.md). |
