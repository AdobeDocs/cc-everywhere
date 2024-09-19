[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/types/ExportConfig.types

# shared/src/types/ExportConfig.types

## Enumerations

### PublishTarget

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `PUBLISH` | `"publish"` |

***

### DownloadTarget

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `DOWNLOAD` | `"download"` |
| `DOWNLOAD_ALL` | `"download-all"` |

***

### EditFurtherTarget

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `EXPRESS` | `"express"` |
| `IMAGE_MODULE` | `"image-module"` |

***

### ExportOptionUI

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `LINK` | `"link"` |
| `BUTTON` | `"button"` |
| `DROPDOWN` | `"dropdown"` |

***

### EditFurtherIntent

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `ADD_TEXT` | `"add-text"` |
| `ADD_ICONS_AND_SHAPES` | `"add-icons-and-shapes"` |
| `ADD_IMAGES` | `"add-images"` |
| `ADD_EFFECTS` | `"add-effects"` |
| `REMOVE_BACKGROUND` | `"remove-background"` |
| `RESIZE_IMAGE` | `"resize-image"` |
| `CROP_IMAGE` | `"crop-image"` |
| `APPLY_ADJUSTMENT` | `"apply-adjustment"` |
| `GEN_FILL` | `"gen-fill"` |

***

### ExportGroupType

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `BUTTON_GROUP` | `"button-group"` |
| `CONTINUE_EDITING` | `"continue-editing"` |

## Interfaces

### Style

#### Extended by

- [`ButtonStyle`](ExportConfig.md#buttonstyle)
- [`DropdownOptionStyle`](ExportConfig.md#dropdownoptionstyle)
- [`LinkStyle`](ExportConfig.md#linkstyle)

#### Properties

| Property | Type |
| ------ | ------ |
| `uiType` | [`ExportOptionUI`](ExportConfig.md#exportoptionui) |

***

### ButtonStyle

Represents the style of a button, extending the base Style interface.

#### Extends

- [`Style`](ExportConfig.md#style)

#### Properties

| Property | Type | Description | Overrides |
| ------ | ------ | ------ | ------ |
| `uiType` | `BUTTON` | The UI type for the button. | [`Style`](ExportConfig.md#style).`uiType` |
| `icon?` | `string` | The optional icon URL for the button. | - |
| `variant?` | [`ExportButtonVariant`](ExportConfig.md#exportbuttonvariant) | The optional variant for the button. | - |
| `treatment?` | [`ExportButtonTreatment`](ExportConfig.md#exportbuttontreatment) | The optional treatment for the button. | - |

***

### CustomContentConfig

Represents the configuration for custom content in a Dropdown option.

#### Properties

| Property | Type |
| ------ | ------ |
| `type` | `"markdown"` |
| `content` | `string` |

***

### DropdownOptionStyle

Represents the style of a dropdown option, extending the base Style interface.

#### Extends

- [`Style`](ExportConfig.md#style)

#### Extended by

- [`DropdownOptionStyleCompat`](ExportConfig.md#dropdownoptionstylecompat)

#### Properties

| Property | Type | Description | Overrides |
| ------ | ------ | ------ | ------ |
| `uiType` | `DROPDOWN` | The UI type for the dropdown option. | [`Style`](ExportConfig.md#style).`uiType` |
| `icon?` | `string` | The optional icon URL for the dropdown option. | - |
| `customContent?` | [`CustomContentConfig`](ExportConfig.md#customcontentconfig) | The optional custom content configuration for the dropdown option. | - |

***

### DropdownOptionStyleCompat

Represents the style of a dropdown option, extending the base Style interface.

#### Extends

- [`DropdownOptionStyle`](ExportConfig.md#dropdownoptionstyle)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `uiType` | `DROPDOWN` | The UI type for the dropdown option. | [`DropdownOptionStyle`](ExportConfig.md#dropdownoptionstyle).`uiType` |
| `icon?` | `string` | The optional icon URL for the dropdown option. | [`DropdownOptionStyle`](ExportConfig.md#dropdownoptionstyle).`icon` |
| `customContent?` | [`CustomContentConfig`](ExportConfig.md#customcontentconfig) | The optional custom content configuration for the dropdown option. | [`DropdownOptionStyle`](ExportConfig.md#dropdownoptionstyle).`customContent` |
| `variant?` | [`ExportButtonVariant`](ExportConfig.md#exportbuttonvariant) | The variant for the button. | - |
| `treatment?` | [`ExportButtonTreatment`](ExportConfig.md#exportbuttontreatment) | The treatment for the button. | - |

***

### LinkStyle

#### Extends

- [`Style`](ExportConfig.md#style)

#### Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `uiType` | `LINK` | [`Style`](ExportConfig.md#style).`uiType` |

***

### BaseAction

#### Extended by

- [`PublishAction`](ExportConfig.md#publishaction)
- [`DownloadAction`](ExportConfig.md#downloadaction)
- [`EditFurtherAction`](ExportConfig.md#editfurtheraction)

#### Properties

| Property | Type |
| ------ | ------ |
| `target` | [`ExportTarget`](ExportConfig.md#exporttarget) |

***

### PublishAction

#### Extends

- [`BaseAction`](ExportConfig.md#baseaction)

#### Properties

| Property | Type | Description | Overrides |
| ------ | ------ | ------ | ------ |
| `target` | `PublishTarget` | - | [`BaseAction`](ExportConfig.md#baseaction).`target` |
| `publishFileType?` | `JPEG` \| `PNG` \| `PDF` \| `MP4` | The file type of asset to be published | - |
| `closeTargetOnExport?` | `boolean` | - | - |
| `outputType?` | [`AssetDataType`](Asset.md#assetdatatype) | Desired asset data type for images. For image output types, host can set this property to either base64 or url. Default type for images is base64. For videos, we will always send output as url irrespective of this property. **Default** `base64` | - |

***

### DownloadAction

#### Extends

- [`BaseAction`](ExportConfig.md#baseaction)

#### Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `target` | [`DownloadTarget`](ExportConfig.md#downloadtarget) | [`BaseAction`](ExportConfig.md#baseaction).`target` |
| `closeTargetOnExport?` | `boolean` | - |

***

### EditFurtherAction

#### Extends

- [`BaseAction`](ExportConfig.md#baseaction)

#### Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `target` | [`EditFurtherTarget`](ExportConfig.md#editfurthertarget) | [`BaseAction`](ExportConfig.md#baseaction).`target` |
| `intent?` | [`EditFurtherIntent`](ExportConfig.md#editfurtherintent) | - |
| `context?` | [`ExportContext`](ExportConfig.md#exportcontext) | - |

***

### BaseExportOption\<U\>

#### Extended by

- [`PublishExportOption`](ExportConfig.md#publishexportoptionu)
- [`DownloadExportOption`](ExportConfig.md#downloadexportoptionu)
- [`EditFurtherExportOption`](ExportConfig.md#editfurtherexportoptionu)
- [`ContinueEditingDropdownOption`](ExportConfig.md#continueeditingdropdownoption)

#### Type Parameters

| Type Parameter |
| ------ |
| `U` *extends* [`Style`](ExportConfig.md#style) |

#### Properties

| Property | Type |
| ------ | ------ |
| `id` | `string` |
| `style` | `U` |
| `action` | [`ExportAction`](ExportConfig.md#exportaction) |

***

### PublishExportOption\<U\>

#### Extends

- [`BaseExportOption`](ExportConfig.md#baseexportoptionu)\<`U`\>

#### Type Parameters

| Type Parameter |
| ------ |
| `U` *extends* [`Style`](ExportConfig.md#style) |

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `id` | `string` | - | [`BaseExportOption`](ExportConfig.md#baseexportoptionu).`id` |
| `style` | `U` | - | [`BaseExportOption`](ExportConfig.md#baseexportoptionu).`style` |
| `action` | [`PublishAction`](ExportConfig.md#publishaction) | [`BaseExportOption`](ExportConfig.md#baseexportoptionu).`action` | - |
| `label` | `string` | - | - |

***

### DownloadExportOption\<U\>

#### Extends

- [`BaseExportOption`](ExportConfig.md#baseexportoptionu)\<`U`\>

#### Type Parameters

| Type Parameter |
| ------ |
| `U` *extends* [`Style`](ExportConfig.md#style) |

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `id` | `string` | - | [`BaseExportOption`](ExportConfig.md#baseexportoptionu).`id` |
| `style` | `U` | - | [`BaseExportOption`](ExportConfig.md#baseexportoptionu).`style` |
| `action` | [`DownloadAction`](ExportConfig.md#downloadaction) | [`BaseExportOption`](ExportConfig.md#baseexportoptionu).`action` | - |
| `label?` | `string` | - | - |

***

### EditFurtherExportOption\<U\>

#### Extends

- [`BaseExportOption`](ExportConfig.md#baseexportoptionu)\<`U`\>

#### Type Parameters

| Type Parameter |
| ------ |
| `U` *extends* [`Style`](ExportConfig.md#style) |

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `id` | `string` | - | [`BaseExportOption`](ExportConfig.md#baseexportoptionu).`id` |
| `style` | `U` | - | [`BaseExportOption`](ExportConfig.md#baseexportoptionu).`style` |
| `action` | [`EditFurtherAction`](ExportConfig.md#editfurtheraction) | [`BaseExportOption`](ExportConfig.md#baseexportoptionu).`action` | - |
| `label?` | `string` | - | - |

***

### ContinueEditingDropdownOption

#### Extends

- [`BaseExportOption`](ExportConfig.md#baseexportoptionu)\<[`DropdownOptionStyle`](ExportConfig.md#dropdownoptionstyle)\>

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `id` | `string` | - | [`BaseExportOption`](ExportConfig.md#baseexportoptionu).`id` |
| `style` | [`DropdownOptionStyle`](ExportConfig.md#dropdownoptionstyle) | - | [`BaseExportOption`](ExportConfig.md#baseexportoptionu).`style` |
| `action` | [`ContinueEditingAction`](ExportConfig.md#continueeditingaction) | [`BaseExportOption`](ExportConfig.md#baseexportoptionu).`action` | - |
| `label?` | `string` | - | - |

***

### ExportGroup

#### Extended by

- [`ExportOptionGroup`](ExportConfig.md#exportoptiongroup)
- [`ContinueEditingGroup`](ExportConfig.md#continueeditinggroup)

#### Properties

| Property | Type |
| ------ | ------ |
| `type` | [`ExportGroupType`](ExportConfig.md#exportgrouptype) |
| `style` | [`ButtonStyle`](ExportConfig.md#buttonstyle) |

***

### ExportOptionGroup

#### Extends

- [`ExportGroup`](ExportConfig.md#exportgroup)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `style` | [`ButtonStyle`](ExportConfig.md#buttonstyle) | - | [`ExportGroup`](ExportConfig.md#exportgroup).`style` |
| `type` | `BUTTON_GROUP` | [`ExportGroup`](ExportConfig.md#exportgroup).`type` | - |
| `label` | `string` | - | - |
| `options` | [`DropdownExportOption`](ExportConfig.md#dropdownexportoption)[] | - | - |

***

### ContinueEditingGroup

#### Extends

- [`ExportGroup`](ExportConfig.md#exportgroup)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `style` | [`ButtonStyle`](ExportConfig.md#buttonstyle) | - | [`ExportGroup`](ExportConfig.md#exportgroup).`style` |
| `type` | `CONTINUE_EDITING` | [`ExportGroup`](ExportConfig.md#exportgroup).`type` | - |
| `label?` | `string` | - | - |
| `options?` | [`ContinueEditingDropdownOption`](ExportConfig.md#continueeditingdropdownoption)[] | - | - |

## Type Aliases

### ExportTarget

```ts
type ExportTarget: PublishTarget | DownloadTarget | EditFurtherTarget;
```

***

### ExportButtonTreatment

```ts
type ExportButtonTreatment: "fill" | "outline";
```

***

### ExportButtonVariant

```ts
type ExportButtonVariant: "accent" | "primary" | "secondary";
```

***

### ExportContext

```ts
type ExportContext: "default" | "new";
```

***

### ContentType

```ts
type ContentType: "markdown";
```

Represents the type of content, currently supporting markdown.

***

### ExportStyle

```ts
type ExportStyle: ButtonStyle | LinkStyle | DropdownOptionStyle;
```

***

### ContinueEditingAction

```ts
type ContinueEditingAction: EditFurtherAction & object;
```

#### Type declaration

| Name | Type |
| ------ | ------ |
| `intent` | [`EditFurtherIntent`](ExportConfig.md#editfurtherintent) |

***

### ExportAction

```ts
type ExportAction: PublishAction | DownloadAction | EditFurtherAction | ContinueEditingAction;
```

***

### ExportOption

```ts
type ExportOption: PublishExportOption<ButtonStyle | LinkStyle> | DownloadExportOption<ButtonStyle | LinkStyle> | EditFurtherExportOption<ButtonStyle | LinkStyle>;
```

***

### DropdownExportOption

```ts
type DropdownExportOption: PublishExportOption<DropdownOptionStyle> | DownloadExportOption<DropdownOptionStyle> | EditFurtherExportOption<DropdownOptionStyle> | ContinueEditingDropdownOption;
```

***

### ExportOptionOrGroup

```ts
type ExportOptionOrGroup: ExportOption | ExportOptionGroup | ContinueEditingGroup;
```

***

### ExportOptions

```ts
type ExportOptions: ExportOptionOrGroup[];
```

***

### ExportConfig

```ts
type ExportConfig: ExportOptions;
```
