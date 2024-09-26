[cc-everywhere](../../../../../../../index.md) / [sdk/src/server-side/actions/templates/TemplateAction](../index.md) / TemplateAction

# Class: TemplateAction

## Constructors

### new TemplateAction()

```ts
new TemplateAction(_templateConfig): TemplateAction
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_templateConfig` | [`TemplateConfig`](../../Template.types/interfaces/TemplateConfig.md) |

#### Returns

[`TemplateAction`](TemplateAction.md)

## Methods

### execute()

```ts
execute(): Promise<TemplateResponse>
```

#### Returns

`Promise`<[`TemplateResponse`](../../Template.types/interfaces/TemplateResponse.md)\>

***

### \_getContentSearchUrl()

```ts
_getContentSearchUrl(collectionId): URL
```

Build the Search URL for fetching the list of templates

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `collectionId` | `string` | Collection ID fetched from Design Asset API |

#### Returns

`URL`

URL for fetching the list of templates

***

### getTemplateResponse()

```ts
getTemplateResponse(templatesList): TemplateResponse
```

Fetch the Rendition information for each template and model the data accordingly.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `templatesList` | [`TemplatesList`](../../Template.types/type-aliases/TemplatesList.md) |

#### Returns

[`TemplateResponse`](../../Template.types/interfaces/TemplateResponse.md)

Modelled Response to send back to host which includes the rendition information for each template
