[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / sdk/src/server-side/actions/templates/Template.types

# sdk/src/server-side/actions/templates/Template.types

## Interfaces

### TemplateConfig

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `searchQuery?` | `string` | Search query |
| `templateType?` | [`TemplateType`](../../../../../shared/src/types/AppConfig.md#templatetype) | Canvas template type |
| `mediaType?` | [`TemplateMediaType`](../../../../../shared/src/types/AppConfig.md#templatemediatype)[] | Filter templates based on media type |
| `start?` | `number` | Offset for templates, default value is 0 |
| `limit?` | `number` | Number of templates required in response, limit in editor is currently 50, default value is 5 |
| `include1NTemplates?` | `boolean` | Filters 1.N templates, default value is false |
| `useLOEForPremium?` | `boolean` | Should use LOE route for premium, by default non LOE route will be returned |
| `boostTemplateType?` | `boolean` | Should give boosted results. Default is false |

***

### TemplateItem

#### Properties

| Property | Type |
| ------ | ------ |
| `id` | `string` |
| `dc:title` | `object` |
| `dc:title.i-default` | `string` |
| `licensingCategory` | `string` |
| `availabilityDate` | `string` |
| `pages` | [`object`] |

***

### TemplateResponse

Response interface returned by getTemplates method

#### Properties

| Property | Type |
| ------ | ------ |
| `metadata` | [`TemplateMetadata`](Template.md#templatemetadata) |
| `items` | `Template`[] |
| `status` | `TemplateStatus` |

***

### TemplateMetadata

#### Properties

| Property | Type |
| ------ | ------ |
| `totalHits` | `number` |
| `start` | `number` |
| `limit` | `number` |

***

### Rendition

#### Properties

| Property | Type |
| ------ | ------ |
| `src` | `URL` |
| `height` | `number` |
| `width` | `number` |

## Type Aliases

### TemplatesList

```ts
type TemplatesList: object;
```

#### Type declaration

| Name | Type |
| ------ | ------ |
| `metadata` | [`TemplateMetadata`](Template.md#templatemetadata) |
| `items` | [`TemplateItem`](Template.md#templateitem)[] |
| `status` | `TemplateStatus` |
