---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: TemplatesHomeConfig

V2 tabbed browser configuration for the Start From Content module.
Controls which tabs appear, their order, and the Create button behavior.
Only used when [StartFromContentAppConfig.appVersion](start-from-content-app-config.md#appversion) is `2`.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `tabs?` | [`TemplatesHomeTab`](../type-aliases/templates-home-tab.md)[] | Tabs to show and their display order. Array order = tab order. Omit a tab to hide it. **Default** `['customTemplates', 'yourStuff']` |
| `createConfig?` | [`CreateConfig`](create-config.md) | Configuration for the Create button in the Your Stuff tab. |
