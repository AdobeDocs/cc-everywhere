---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: CreateConfig

Configuration for the Create button in the Your Stuff tab.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `defaultCanvasSize?` | `object` | When set, the Create button opens a blank canvas at this size directly. No size picker menu is shown. When absent, the full Express Create menu is shown (standard sizes, suggested sizes, search, custom size). |
| `defaultCanvasSize.width` | `number` | - |
| `defaultCanvasSize.height` | `number` | - |
| `unit?` | [`SizeUnit`](../../../asset-types/enumerations/size-unit.md) | Unit of measurement for the canvas dimensions. **Default** `SizeUnit.PIXELS` |
