---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: QuickActionIntent

```ts
type QuickActionIntent = 
  | ImageQuickActionIntent
  | VideoQuickActionIntent
  | AudioQuickActionIntent
  | PdfQuickActionIntent
  | GenStudioQuickActionIntent;
```

Intent type used for quick action workflows. It includes [ImageQuickActionIntent](../enumerations/image-quick-action-intent.md) for image operations,
[VideoQuickActionIntent](../enumerations/video-quick-action-intent.md) for video operations, [AudioQuickActionIntent](../enumerations/audio-quick-action-intent.md) for audio operations,
[PdfQuickActionIntent](../enumerations/pdf-quick-action-intent.md) for PDF operations, and [GenStudioQuickActionIntent](../enumerations/gen-studio-quick-action-intent.md) for GenStudio workflows.
