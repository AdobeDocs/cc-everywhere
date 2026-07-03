---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Type Alias: ContentBrowseConfig

```ts
type ContentBrowseConfig = 
  | BrowseModeConfig
  | PreviewModeConfig;
```

Content browse configuration using discriminated union for type-safe launch modes.

Two modes are supported:
1. Browse Mode ([BrowseModeConfig](../interfaces/browse-mode-config.md), default): Users see template gallery first, then select to preview
2. Preview Mode ([PreviewModeConfig](../interfaces/preview-mode-config.md)): Directly opens a specific template in preview, bypassing gallery

The launchMode property discriminates between these modes, enabling compile-time
type checking to ensure only relevant properties are used for each mode.
