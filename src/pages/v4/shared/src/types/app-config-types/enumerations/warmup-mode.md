---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Enumeration: WarmupMode

Enum for defining the different warmup modes for the background warmup process.

## Enumeration Members

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| `MINIMAL` | `"minimal"` | Minimal warmup mode that only registers the service worker and downloads essential JavaScript and static resource files. No backend service calls will be made. Useful for initial resource loading without triggering any network requests. |
| `STANDARD` | `"standard"` | **Default** `Standard warmup mode that includes everything in MINIMAL, plus key backend service calls such as authentication and feature flag initialization. This is the default mode if no warmup mode is explicitly provided.` |
| `PRELOAD` | `"preload"` | Preload mode specifically for EDIT_IMAGE_V2 intent. This mode preloads the entire edit-image workflow in a hidden iframe, allowing for instant transitions when the actual action is launched. The preloaded state is tracked and reused on launch. |
