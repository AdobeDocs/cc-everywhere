[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / sdk/src/server-side/CCEverywhere

# sdk/src/server-side/CCEverywhere

## Classes

### CCEverywhere

#### Constructors

##### new CCEverywhere()

```ts
new CCEverywhere(
   validator, 
   hostInfo, 
   configParams, 
   callbacks?): CCEverywhere
```

Constructor to initialize CCEverywhere object.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `validator` | `Validator` |
| `hostInfo` | [`HostInfoSpecifiedBase`](../../../shared/src/types/HostInfo.md#hostinfospecifiedbase) |
| `configParams` | [`ConfigParamsBase`](../../../shared/src/types/HostInfo.md#configparamsbase) |
| `callbacks`? | [`Callbacks`](../../../shared/src/types/Callbacks.md#callbacks) |

###### Returns

[`CCEverywhere`](CCEverywhere.md#cceverywhere)

#### Methods

##### createDesign()

```ts
createDesign(createDesignConfig): URL
```

Function to create a design.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `createDesignConfig` | [`CreateDesignConfig`](../../../shared/src/types/editor/DesignConfig.md#createdesignconfig) |

###### Returns

`URL`

##### getTemplates()

```ts
getTemplates(templateConfig): Promise<TemplateResponse>
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `templateConfig` | [`TemplateConfig`](actions/templates/Template.md#templateconfig) |

###### Returns

`Promise`\<[`TemplateResponse`](actions/templates/Template.md#templateresponse)\>

## Variables

### default

```ts
default: object;
```

#### Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `initialize` | (`hostInfo`, `configParams`?, `callbacks`?) => `Promise`\<[`CCEverywhere`](CCEverywhere.md#cceverywhere)\> | This is the main API which is used for initializing the SDK. Please ensure to call this API only once. |
