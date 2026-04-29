---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: ExportButtonDisplayMode

```ts
type ExportButtonDisplayMode = "label" | "icon" | "icon-and-label";
```

Display mode for button-style export options (icon and/or label).

- `'label'`: Show label only. If no label, fallback to icon when provided, else empty.
- `'icon'`: Show icon only. If no icon, fallback to label when provided, else empty.
- `'icon-and-label'`: Show icon before label. If icon is missing, show label only; if label is missing, show icon only.

## Default

```ts
'icon' when icon is provided, otherwise 'label'
```
