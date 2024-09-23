[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / [sdk/src/server-side/CCEverywhere](../index.md) / CCEverywhere

# Class: CCEverywhere

## Constructors

### new CCEverywhere()

```ts
new CCEverywhere(
   validator, 
   hostInfo, 
   configParams, 
   callbacks?): CCEverywhere
```

Constructor to initialize CCEverywhere object.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `validator` | `Validator` |
| `hostInfo` | [`HostInfoSpecifiedBase`](../../../../../shared/src/types/HostInfo.types/interfaces/HostInfoSpecifiedBase.md) |
| `configParams` | [`ConfigParamsBase`](../../../../../shared/src/types/HostInfo.types/interfaces/ConfigParamsBase.md) |
| `callbacks`? | [`Callbacks`](../../../../../shared/src/types/Callbacks.types/interfaces/Callbacks.md) |

#### Returns

[`CCEverywhere`](CCEverywhere.md)

## Methods

### createDesign()

```ts
createDesign(createDesignConfig): URL
```

Function to create a design.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `createDesignConfig` | [`CreateDesignConfig`](../../../../../shared/src/types/editor/DesignConfig.types/interfaces/CreateDesignConfig.md) |

#### Returns

`URL`

***

### getTemplates()

```ts
getTemplates(templateConfig): Promise<TemplateResponse>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `templateConfig` | [`TemplateConfig`](../../actions/templates/Template.types/interfaces/TemplateConfig.md) |

#### Returns

`Promise`\<[`TemplateResponse`](../../actions/templates/Template.types/interfaces/TemplateResponse.md)\>
