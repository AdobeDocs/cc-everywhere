[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / sdk/src/server-side/actions/templates/TemplateAction

# sdk/src/server-side/actions/templates/TemplateAction

## Classes

### TemplateAction

#### Constructors

##### new TemplateAction()

```ts
new TemplateAction(_templateConfig): TemplateAction
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `_templateConfig` | [`TemplateConfig`](Template.md#templateconfig) |

###### Returns

[`TemplateAction`](TemplateAction.md#templateaction)

#### Methods

##### execute()

```ts
execute(): Promise<TemplateResponse>
```

###### Returns

`Promise`\<[`TemplateResponse`](Template.md#templateresponse)\>

##### \_getContentSearchUrl()

```ts
_getContentSearchUrl(collectionId): URL
```

Build the Search URL for fetching the list of templates

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `collectionId` | `string` | Collection ID fetched from Design Asset API |

###### Returns

`URL`

URL for fetching the list of templates

##### getTemplateResponse()

```ts
getTemplateResponse(templatesList): TemplateResponse
```

Fetch the Rendition information for each template and model the data accordingly.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `templatesList` | [`TemplatesList`](Template.md#templateslist) |

###### Returns

[`TemplateResponse`](Template.md#templateresponse)

Modelled Response to send back to host which includes the rendition information for each template

## Variables

### DEFAULT\_COLLECTION\_ID

```ts
const DEFAULT_COLLECTION_ID: "urn:aaid:sc:VA6C2:25a82757-01de-4dd9-b0ee-bde51dd3b418" = 'urn:aaid:sc:VA6C2:25a82757-01de-4dd9-b0ee-bde51dd3b418';
```
