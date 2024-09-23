[**cc-everywhere**](../../../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../../../index.md) / [sdk/src/server-side/actions/templates/Template.types](../index.md) / TemplateConfig

# Interface: TemplateConfig

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `searchQuery?` | `string` | Search query |
| `templateType?` | [`TemplateType`](../../../../../../../shared/src/types/AppConfig.types/enumerations/TemplateType.md) | Canvas template type |
| `mediaType?` | [`TemplateMediaType`](../../../../../../../shared/src/types/AppConfig.types/enumerations/TemplateMediaType.md)[] | Filter templates based on media type |
| `start?` | `number` | Offset for templates, default value is 0 |
| `limit?` | `number` | Number of templates required in response, limit in editor is currently 50, default value is 5 |
| `include1NTemplates?` | `boolean` | Filters 1.N templates, default value is false |
| `useLOEForPremium?` | `boolean` | Should use LOE route for premium, by default non LOE route will be returned |
| `boostTemplateType?` | `boolean` | Should give boosted results. Default is false |
