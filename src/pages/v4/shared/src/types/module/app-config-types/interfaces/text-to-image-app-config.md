[**cc-everywhere**](../../../../../../index.md)

***

# Interface: TextToImageAppConfig

## Extends

- [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="callbacks"></a> `callbacks?` | [`Callbacks`](../../../callbacks-types/interfaces/callbacks.md) | - | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`callbacks`](../../../design-config-types/interfaces/base-app-config.md#callbacks) |
| <a id="analyticsdata"></a> `analyticsData?` | [`BaseAnalyticsData`](../../../app-config-types/type-aliases/base-analytics-data.md) | Analytics data that can be provided by the host app | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`analyticsData`](../../../design-config-types/interfaces/base-app-config.md#analyticsdata) |
| <a id="headerbarcolortheme"></a> `headerBarColorTheme?` | [`ColorTheme`](../../../app-config-types/enumerations/color-theme.md) | Theming options for the TextToImage Editor header bar. **Default** `ColorTheme.LIGHT` | - |
| <a id="editortitle"></a> `editorTitle?` | `string` | Property to configure the title | - |
| <a id="prompttext"></a> `promptText?` | `string` | - | - |
| <a id="imagedimensions"></a> `imageDimensions?` | [`ImageDimensions`](../../../asset-types/type-aliases/image-dimensions.md) | The dimensions of the image that the user can generate. If provided, the user will be restricted to generating images of the specified dimensions. | - |
| <a id="imagestylereference"></a> `imageStyleReference?` | [`Asset`](../../../asset-types/type-aliases/asset.md) | Asset to be passed as style reference for generating images | - |
| <a id="imagecompositionreference"></a> `imageCompositionReference?` | [`Asset`](../../../asset-types/type-aliases/asset.md) | Asset to be passed as composition reference for generating images | - |
| <a id="appversion"></a> `appVersion?` | [`TextToImageAppVersion`](../../app-config-types/enumerations/text-to-image-app-version.md) | Specifies the version of the Generate Image experience to be enabled. This setting allows the selection between the older and the newer interface version. When set to the latest version (V2), users will get access to the updated interface and features. By default, the older experience (V1) is displayed. Enabling the latest version introduces the following key features: - **Enhanced User Interface:** Redesigned with a new Carousel and Grid view. - **Community Wall:** An endless collection of generated images with prompts that users can select from to kickstart their image generation journey. - **Fast Mode:** Images can be generated faster with lesser details, great for simple topics, backgrounds, most illustrations, and close portraits. - **Improved Prompt Bar:** Includes prompt suggestions for a better user experience. - **Rich Previews:** Provides a more interactive and engaging preview experience. - And more! **Default** `V1` | - |
| <a id="editdropdownoptions"></a> `editDropdownOptions?` | [`EditDropdownOptionConfig`](../../app-config-types/interfaces/edit-dropdown-option-config.md)[] | Options to be passed for Edit dropdown. NOTE: This property is supported only in the new Generate Image experience. **Default** `[ { option: EditFurtherIntent.APPLY_ADJUSTMENT }, { option: EditFurtherIntent.APPLY_EFFECTS }, { option: EditFurtherIntent.REMOVE_BACKGROUND }, { option: EditFurtherIntent.REMOVE_OBJECT }, { option: EditFurtherIntent.INSERT_OBJECT } ]` | - |
| <a id="publishconfig"></a> `publishConfig?` | [`PublishConfig`](../../app-config-types/interfaces/publish-config.md) | Config to be set for Publish action. NOTE: This property is supported only in the new Generate Image experience. **Default** `{ * id: "saveToHostApp", * label: "Save" * }` | - |
| <a id="thumbnailoptions"></a> `thumbnailOptions?` | [`ThumbnailOption`](../../app-config-types/enumerations/thumbnail-option.md)[] | Options passed to be displayed on the thumbnail. NOTE: This property is supported only in the new Generate Image experience. **Default** `[ ThumbnailOption.EDIT_DROPDOWN, ThumbnailOption.RICH_PREVIEW ]` | - |
| <a id="fastmodeconfig"></a> `fastModeConfig?` | [`FastModeConfig`](../../app-config-types/interfaces/fast-mode-config.md) | Configuration for enabling or disabling fast mode in the Text to Image module. NOTE: This property is supported only in the new Generate Image experience and when FAST_MODE is set to true in featureConfig. **Default** `{ * defaultFastModeState: 'off' * }` | - |
| <a id="featureconfig"></a> `featureConfig?` | `Partial`<`Record`<[`TextToImageFeature`](../../app-config-types/enumerations/text-to-image-feature.md), `boolean`\>\> | Configuration for enabling or disabling specific features in the Text to Image module. NOTE: This property is supported only in the new Generate Image experience. **Default** `{ * [TextToImageFeatureType.COMMUNITY_WALL]: false, * [TextToImageFeatureType.FAST_MODE]: false * }` | - |
| <a id="communitywallconfig"></a> `communityWallConfig?` | [`CommunityWallConfig`](../../app-config-types/interfaces/community-wall-config.md) | - | - |
| <a id="ispromptsafe"></a> `isPromptSafe?` | (`prompt`) => `Promise`<[`PromptSafetyResult`](../../app-config-types/interfaces/prompt-safety-result.md)\> | Callback to check if a prompt is safe for image generation. This allows partners to implement their own prompt moderation logic. | - |
| <a id="useclientauth"></a> `useClientAuth?` | `boolean` | Flag to explicitly opt-in to use client authentication. When true, client access token will be fetched from the partner and used in the module. **Default** `false` | - |
