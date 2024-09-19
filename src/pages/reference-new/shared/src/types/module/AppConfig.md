[**cc-everywhere**](../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../index.md) / shared/src/types/module/AppConfig.types

# shared/src/types/module/AppConfig.types

## Interfaces

### TextToImageAppConfig

#### Extends

- [`BaseAppConfig`](../DesignConfig.md#baseappconfig)

#### Extended by

- [`TextToImageAppConfig`](../1p/module/AppConfig.md#texttoimageappconfig)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../Callbacks.md#callbacks) | - | [`BaseAppConfig`](../DesignConfig.md#baseappconfig).`callbacks` |
| `headerBarColorTheme?` | [`ColorTheme`](../AppConfig.md#colortheme) | Theming options for the TextToImage Editor header bar. **Default** [[`ColorTheme.LIGHT`]] | - |
| `editorTitle?` | `string` | Property to configure the title | - |
| `promptText?` | `string` | - | - |

***

### EditImageAppConfig

#### Extends

- `AppConfig`

#### Extended by

- [`EditImageAppConfig`](../1p/module/AppConfig.md#editimageappconfig)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../Callbacks.md#callbacks) | - | `FirstParty.AppConfig.callbacks` |
| `allowedFileTypes?` | (`JPEG` \| `PNG` \| `PDF`)[] | Specify the list of file types that the user can publish. This can be used to limit the publish options as per file types for end users. **Default** `Enable all formats (PNG, JPEG, and PDF)` | - |

***

### WarmupAppConfig

#### Extends

- [`BaseAppConfig`](../DesignConfig.md#baseappconfig)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../Callbacks.md#callbacks) | - | [`BaseAppConfig`](../DesignConfig.md#baseappconfig).`callbacks` |
| `warmupIntent?` | [`ActionIntent`](../ActionIntent.md#actionintent) | The intent to warmup the target. | - |
| `warmupUrls?` | `string`[] | The list of urls to warmup to enable faster loading of the target. **Default** `[]` | - |
