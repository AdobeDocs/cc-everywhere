---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# shared/src/types/module/AppConfig.types

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [TextToImageAppVersion](enumerations/text-to-image-app-version.md) | - |
| [GenerateImageInitialView](enumerations/generate-image-initial-view.md) | - |
| [EditImageAppVersion](enumerations/edit-image-app-version.md) | - |
| [FDEAppVersion](enumerations/fde-app-version.md) | FDE experience version shared by [FDECreateDesignAppConfig](interfaces/fde-create-design-app-config.md) and [FDEEditDesignAppConfig](interfaces/fde-edit-design-app-config.md). |
| [ExperienceVariant](enumerations/experience-variant.md) | Specifies the experience variant to use when launching the module. |
| [PdfPrintCmykColorProfile](enumerations/pdf-print-cmyk-color-profile.md) | CMYK ICC color profile used for print PDF export. |
| [StartFromContentAppVersion](enumerations/start-from-content-app-version.md) | - |
| [ThumbnailOption](enumerations/thumbnail-option.md) | - |
| [TextToImageFeature](enumerations/text-to-image-feature.md) | - |
| [PromptSafetyCategory](enumerations/prompt-safety-category.md) | Categories for prompt safety assessment. This enum can be extended as new safety categories are identified. |
| [BrowseTemplateType](enumerations/browse-template-type.md) | Template task ids supported for browse gallery filtering (kebab-case). Values align with Inspire `pages.task.name` / Express task ids where applicable. |
| [PdfPrintColorMode](enumerations/pdf-print-color-mode.md) | Color mode for PDF print export. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [ModelConfig](interfaces/model-config.md) | - |
| [FastModeConfig](interfaces/fast-mode-config.md) | - |
| [CommunityWallAssetData](interfaces/community-wall-asset-data.md) | - |
| [CommunityWallAssetResponse](interfaces/community-wall-asset-response.md) | - |
| [CommunityWallConfig](interfaces/community-wall-config.md) | - |
| [EditDropdownOptionConfig](interfaces/edit-dropdown-option-config.md) | - |
| [PublishConfig](interfaces/publish-config.md) | - |
| [PromptSafetyCheckResponse](interfaces/prompt-safety-check-response.md) | Represents the safety status of a prompt |
| [TextToImageAppConfig](interfaces/text-to-image-app-config.md) | - |
| [CreateConfig](interfaces/create-config.md) | Configuration for the Create button in the Your Stuff tab. |
| [TemplatesHomeConfig](interfaces/templates-home-config.md) | V2 tabbed browser configuration for the Start From Content module. Controls which tabs appear, their order, and the Create button behavior. Only used when [StartFromContentAppConfig.appVersion](interfaces/start-from-content-app-config.md#appversion) is `2`. |
| [TemplateFilters](interfaces/template-filters.md) | - |
| [TemplateBrowserConfig](interfaces/template-browser-config.md) | Chrome fields shared by template browse surfaces (`createDesign`, `startFromContent`). Does not include `contentBrowseConfig` — each surface types that property independently (FDE browse-only; SFC browse-or-preview union). |
| [FDEBaseAppConfig](interfaces/fde-base-app-config.md) | FDE session fields shared by createDesign and editDesign (FDE path). Lives in the shared module package (not 1P-only). |
| [PdfPrintConfig](interfaces/pdf-print-config.md) | Settings applied to the print-ready PDF export in the Focused Design Editor. Only takes effect when a Publish action's [PublishAction.publishSubFileType](../../export-config-types/interfaces/publish-action.md#publishsubfiletype) is [SubFileType.pdfPrint](../../asset-types/enumerations/sub-file-type.md#pdfprint) — if it is [SubFileType.pdf](../../asset-types/enumerations/sub-file-type.md#pdf) (or unset), these settings are ignored and the export stays plain PDF. |
| [EditorGuideConfig](interfaces/editor-guide-config.md) | Settings controlling the guides displayed in the editor canvas. |
| [FDEEditDesignAppConfig](interfaces/fde-edit-design-app-config.md) | App config for editDesign (FDE MXP editor entry). |
| [FDECreateDesignAppConfig](interfaces/fde-create-design-app-config.md) | App config for createDesign (FDE MXP — template browser entry). `contentBrowseConfig` is browse-only (no preview mode on the FDE template browser). |
| [StartFromContentAppConfig](interfaces/start-from-content-app-config.md) | StartFromContentAppConfig is the app config for the Start From Content module. |
| [ContentBrowseBaseConfig](interfaces/content-browse-base-config.md) | Base configuration properties shared across all launch modes. Contains common properties available in both browse and preview modes. |
| [BrowseModeConfig](interfaces/browse-mode-config.md) | Configuration for browse mode - the default workflow where users see template gallery first. This is the standard flow where users browse templates and then select one to preview. Extends base config with browse-specific properties like search and filters. |
| [PreviewModeConfig](interfaces/preview-mode-config.md) | Configuration for preview mode - directly launches into template preview. This workflow bypasses the template gallery and goes straight to the preview section for a specific template. Only works with TEMPLATES category. Extends base config with preview-specific properties (templateId). |
| [EditImageAppConfig](interfaces/edit-image-app-config.md) | - |
| [CollectionConfig](interfaces/collection-config.md) | - |
| [PreviewThumbnailsConfig](interfaces/preview-thumbnails-config.md) | - |
| [DesignViewerAppConfig](interfaces/design-viewer-app-config.md) | - |
| [WarmupAppConfig](interfaces/warmup-app-config.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [TemplatesHomeTab](type-aliases/templates-home-tab.md) | Identifies a tab in the Template Browser V2 experience. Array order in [TemplatesHomeConfig.tabs](interfaces/templates-home-config.md#tabs) determines display order. Omit a value to hide that tab. |
| [ContentBrowseConfig](type-aliases/content-browse-config.md) | Content browse configuration using discriminated union for type-safe launch modes. |
