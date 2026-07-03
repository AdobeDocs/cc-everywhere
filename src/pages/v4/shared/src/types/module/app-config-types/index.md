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
| [EditDesignAppVersion](enumerations/edit-design-app-version.md) | - |
| [StartFromContentAppVersion](enumerations/start-from-content-app-version.md) | - |
| [ThumbnailOption](enumerations/thumbnail-option.md) | - |
| [TextToImageFeature](enumerations/text-to-image-feature.md) | - |
| [PromptSafetyCategory](enumerations/prompt-safety-category.md) | Categories for prompt safety assessment. This enum can be extended as new safety categories are identified. |

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
