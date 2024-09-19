[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/types/ActionIntent.types

# shared/src/types/ActionIntent.types

## Enumerations

### EditorIntent

**********************************************************************
  ADOBE CONFIDENTIAL

  Copyright 2021 Adobe
  All Rights Reserved.

  NOTICE:  All information contained herein is, and remains
  the property of Adobe and its suppliers, if any. The intellectual
  and technical concepts contained herein are proprietary to Adobe
  and its suppliers and are protected by all applicable intellectual
  property laws, including trade secret and copyright laws.
  Dissemination of this information or reproduction of this material
  is strictly forbidden unless prior written permission is obtained
  from Adobe.
************************************************************************

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `CREATE` | `"create"` |
| `CREATE_WITH_ASSET` | `"create-with-asset"` |
| `CREATE_WITH_TEMPLATE` | `"create-with-template"` |
| `EDIT` | `"edit"` |

***

### ModuleIntent

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `EDIT_IMAGE` | `"edit-image"` |
| `CREATE_IMAGE_FROM_TEXT` | `"create-image-from-text"` |
| `CREATE_TEMPLATE_FROM_TEXT` | `"create-template-from-text"` |

***

### ImageQuickActionIntent

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `CONVERT_TO_JPEG` | `"convert-to-jpg"` |
| `CONVERT_TO_PNG` | `"convert-to-png"` |
| `CONVERT_TO_SVG` | `"convert-to-svg"` |
| `CROP_IMAGE` | `"crop-image"` |
| `RESIZE_IMAGE` | `"resize-image"` |
| `REMOVE_BACKGROUND` | `"remove-background"` |
| `GENERATE_QR_CODE` | `"generate-qr-code"` |

***

### VideoQuickActionIntent

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `CONVERT_TO_GIF` | `"convert-to-gif"` |
| `CONVERT_TO_MP4` | `"convert-to-mp4"` |
| `CROP_VIDEO` | `"crop-video"` |
| `MERGE_VIDEOS` | `"merge-videos"` |
| `RESIZE_VIDEO` | `"resize-video"` |
| `TRIM_VIDEO` | `"trim-video"` |
| `ANIMATE_FROM_AUDIO` | `"animate-from-audio"` |
| `CAPTION_VIDEO` | `"caption-video"` |

***

### PdfQuickActionIntent

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `SMART_STYLIZE` | `"smart-stylize"` |

***

### WarmupIntent

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `WARMUP` | `"warmup"` |

***

### QuickActionSubCategories

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `IMAGE` | `"Edit Image"` |
| `VIDEO` | `"Edit Video"` |
| `PDF` | `"Edit Document"` |

***

### ModuleSubCategory

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `IMAGE` | `"image"` |
| `TEXT_TO_IMAGE` | `"text-to-image"` |

## Type Aliases

### QuickActionIntent

```ts
type QuickActionIntent: ImageQuickActionIntent | VideoQuickActionIntent | PdfQuickActionIntent;
```

***

### ActionIntent

```ts
type ActionIntent: EditorIntent | ModuleIntent | QuickActionIntent | WarmupIntent;
```
