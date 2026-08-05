---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: ColorThemeAppConfig

Workflows that accept host `colorTheme` (SDK forwards as HZ `theme` query param when set).
Extend on workflow-specific AppConfig types; SDK reads via getColorThemeFromAppConfig.

## Extended by

- [`StartFromContentAppConfig`](../../module/app-config-types/interfaces/start-from-content-app-config.md)
- [`AppConfig`](../../quick-action/app-config-types/interfaces/app-config.md)

## Properties

| Property | Type |
| ------ | ------ |
| `colorTheme?` | [`ColorTheme`](../../app-config-types/enumerations/color-theme.md) |
