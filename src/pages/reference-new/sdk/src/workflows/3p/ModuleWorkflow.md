[**cc-everywhere**](../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../index.md) / sdk/src/workflows/3p/ModuleWorkflow.types

# sdk/src/workflows/3p/ModuleWorkflow.types

## Interfaces

### ModuleWorkflow

#### Methods

##### editImage()

```ts
editImage(
   docConfig, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `docConfig` | [`EditImageDocConfig`](../../../../shared/src/types/module/DocConfig.md#editimagedocconfig) |
| `appConfig`? | [`EditImageAppConfig`](../../../../shared/src/types/module/AppConfig.md#editimageappconfig) |
| `exportConfig`? | [`ExportOptions`](../../../../shared/src/types/ExportConfig.md#exportoptions) |
| `containerConfig`? | [`ContainerConfig`](../../../../shared/src/types/ContainerConfig.md#containerconfig) |

###### Returns

`void`

##### createImageFromText()

```ts
createImageFromText(
   appConfig?, 
   exportConfig?, 
   containerConfig?): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `appConfig`? | [`TextToImageAppConfig`](../../../../shared/src/types/module/AppConfig.md#texttoimageappconfig) |
| `exportConfig`? | [`ExportOptions`](../../../../shared/src/types/ExportConfig.md#exportoptions) |
| `containerConfig`? | [`ContainerConfig`](../../../../shared/src/types/ContainerConfig.md#containerconfig) |

###### Returns

`void`

##### createTemplateFromText()

```ts
createTemplateFromText(): void
```

###### Returns

`void`
