# Interface: TextToImageAppConfig

## Extends

- [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../../../callbacks-types/interfaces/callbacks.md) | - | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).`callbacks` |
| `analyticsData?` | [`BaseAnalyticsData`](../../../app-config-types/type-aliases/base-analytics-data.md) | Analytics data that can be provided by the host app | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).`analyticsData` |
| `headerBarColorTheme?` | [`ColorTheme`](../../../app-config-types/enumerations/color-theme.md) | Theming options for the TextToImage Editor header bar. **Default** `ColorTheme.LIGHT` | - |
| `editorTitle?` | `string` | Property to configure the title | - |
| `promptText?` | `string` | - | - |
| `imageDimensions?` | [`ImageDimensions`](../../../asset-types/type-aliases/image-dimensions.md) | The dimensions of the image that the user can generate. If provided, the user will be restricted to generating images of the specified dimensions. | - |
| `imageStyleReference?` | [`Asset`](../../../asset-types/type-aliases/asset.md) | Asset to be passed as style reference for generating images | - |
| `imageCompositionReference?` | [`Asset`](../../../asset-types/type-aliases/asset.md) | Asset to be passed as composition reference for generating images | - |
| `appVersion?` | [`TextToImageAppVersion`](../../app-config-types/enumerations/text-to-image-app-version.md) | Specifies the version of the Generate Image experience to be enabled. This setting allows the selection between the older and the newer interface version. When set to the latest version (V2), users will get access to the updated interface and features. By default, the older experience (V1) is displayed. Enabling the latest version introduces the following key features: - **Enhanced User Interface:** Redesigned with a new Carousel and Grid view. - **Community Wall:** An endless collection of generated images with prompts that users can select from to kickstart their image generation journey. - **Fast Mode:** Images can be generated faster with lesser details, great for simple topics, backgrounds, most illustrations, and close portraits. - **Improved Prompt Bar:** Includes prompt suggestions for a better user experience. - **Rich Previews:** Provides a more interactive and engaging preview experience. - And more! **Default** `V1` | - |
| `editDropdownOptions?` | [`EditDropdownOptionConfig`](../../app-config-types/interfaces/edit-dropdown-option-config.md)[] | Options to be passed for Edit dropdown. NOTE: This property is supported only in the new Generate Image experience. **Default** `[ { option: EditFurtherIntent.APPLY_ADJUSTMENT }, { option: EditFurtherIntent.APPLY_EFFECTS }, { option: EditFurtherIntent.REMOVE_BACKGROUND }, { option: EditFurtherIntent.REMOVE_OBJECT }, { option: EditFurtherIntent.INSERT_OBJECT } ]` | - |
| `publishConfig?` | [`PublishConfig`](../../app-config-types/interfaces/publish-config.md) | Config to be set for Publish action. NOTE: This property is supported only in the new Generate Image experience. **Default** `{ * id: "saveToHostApp", * label: "Save" * }` | - |
| `thumbnailOptions?` | [`ThumbnailOption`](../../app-config-types/enumerations/thumbnail-option.md)[] | Options passed to be displayed on the thumbnail. NOTE: This property is supported only in the new Generate Image experience. **Default** `[ ThumbnailOption.EDIT_DROPDOWN, ThumbnailOption.RICH_PREVIEW ]` | - |
| `fastModeConfig?` | [`FastModeConfig`](../../app-config-types/interfaces/fast-mode-config.md) | Configuration for enabling or disabling fast mode in the Text to Image module. NOTE: This property is supported only in the new Generate Image experience and when FAST_MODE is set to true in featureConfig. **Default** `{ * defaultFastModeState: 'off' * }` | - |
| `featureConfig?` | `Partial`<`Record`<[`TextToImageFeature`](../../app-config-types/enumerations/text-to-image-feature.md), `boolean`\>\> | Configuration for enabling or disabling specific features in the Text to Image module. NOTE: This property is supported only in the new Generate Image experience. **Default** `{ * [TextToImageFeatureType.COMMUNITY_WALL]: false, * [TextToImageFeatureType.FAST_MODE]: false * }` | - |
| `communityWallConfig?` | [`CommunityWallConfig`](../../app-config-types/interfaces/community-wall-config.md) | - | - |
| `isPromptSafe?` | (`prompt`: `string`) => `Promise`<[`PromptSafetyResult`](../../app-config-types/interfaces/prompt-safety-result.md)\> | Callback to check if a prompt is safe for image generation. This allows partners to implement their own prompt moderation logic. | - |
| `useClientAuth?` | `boolean` | Flag to explicitly opt-in to use client authentication. When true, client access token will be fetched from the partner and used in the module. **Default** `false` | - |
