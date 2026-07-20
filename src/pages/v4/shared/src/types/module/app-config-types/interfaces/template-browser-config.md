---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: TemplateBrowserConfig

Chrome fields shared by template browse surfaces (`createDesign`, `startFromContent`).
Does not include `contentBrowseConfig` — each surface types that property independently
(FDE browse-only; SFC browse-or-preview union).

## Extended by

- [`FDECreateDesignAppConfig`](fde-create-design-app-config.md)
- [`StartFromContentAppConfig`](start-from-content-app-config.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `colorTheme?` | [`ColorTheme`](../../../app-config-types/enumerations/color-theme.md) | The color theme of the template browser module. **Default** `ColorTheme.LIGHT` |
| `spectrumTheme?` | [`SpectrumTheme`](../../../app-config-types/enumerations/spectrum-theme.md) | Specifies whether the module runs in current express theme or legacy spectrum theme. **Default** `SpectrumTheme.EXPRESS` |
| `hideHeaderBar?` | `boolean` | When `true`, hides the embedded module header bar so the host can provide its own chrome. **Default** `false` |
