---
keywords:
  - Types
  - AssetType
  - AssetDataType
  - CanvasAspectId
  - EditorPanelView
  - ExportOptions
  - Size
  - PixelSize
  - TemplateType
title: Types
description: This is the reference page for types used across the SDK.
contributors:
  - https://github.com/amandahuarng
---

# Types

<InlineAlert variant="error" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year.

While we are in beta, all v3 clients are disabled by default. **Please share your API key with amandah@adobe.com to begin development.**

## AssetType

File format supported for design operations.

| Type   | Value    |
| ----------- | --------------- |
| VIDEO      | "video" |
| IMAGE      | "image" |
| PDF    | "pdf" |

## AssetDataType

Desired asset data type for images. For image output types, host can set this property to either base64 or url. Default type for images is base64. For videos, we will always send output as url irrespective of this property.

| Type   | Value   |
| ----------- | --------------- |
| BASE64     | "base64" |
| URL    | "url" |

## CanvasAspectId

`CanvasAspectId` allows you to initializes the full editor loaded with templates that fit that layout ratio.

| Type | Description
| :-- | :--
| 'Instagram' | Instagram post
| 'InstagramStory' | Instagram story
| 'InstagramLandscape' | Instagram post (landscape)
| 'facebook' | Facebook post
| 'FacebookProfileCover' | Facebook profile cover
| 'FacebookPageCover' | Facebook page cover
|'FacebookEventCover' | Facebook event cover
| 'Twitter' | Twitter post
| 'TwitterHeader' | Twitter header
| 'YouTubeChannelArt' | YouTube channel art
|'YoutubeThumbnail' | YouTube thumbnail
| 'LinkedInBlogPost' | LinkedIn blog post
| 'LinkedInProfileCover' | LinkedIn Profile Cover Picture
| 'SnapchatStory' | Snapchat Story
| 'KindleCover' | Kindle cover
| 'Pinterest' | Pinterest post
| 'TwitchBanner' | Twitch banner
| 'EtsyCover' | Etsy cover
|'EventbriteEventImage' | Eventbrite event image
|  'Letter' | Letter
|'Poster' | Poster

## EditorPanelView

Optional string value that determines if the left panel should open by default. You can also specify the panel view based on user intent. Full list below.

| Type | Description
| :-- | :--
| 'search' | Search panel opens.
| 'yourStuff' | Panel opens with "Your Stuff"
| 'templates' | Templates panel opens.
| 'media' | Media panel opens.
| 'text' | Text panel opens.
| 'elements' | Elements panel opens.

## ExportOptions

Export options to surface to your user in the iframe. If no export options are specified, the editor falls back to the default layout options.

`ExportOptions`:  [CustomExportButton](#customexportbutton) | [CustomExportLink](#customexportlink) | [ExportButtonGroup](#exportbuttongroup) | [NativeExportButton](#nativeexportbutton)

<!-- ### ExportOptionType

`optionType` property of `ExportOption`. Describes the type of `ExportOption`

| Type | Value | Description
| :-- | :-- | :-
| "group" | Quick action will render a drop-down button
| "button" | Quick action will render a standalone single button
| "link" | Quick action will render text with hyperlink to export asset -->

### CustomExportButton

| Property   | Type    | Description
| ----------- | --------------- | ---
| id    | string | The id of the export button. On button click, this id will be passed back in `onPublish` callback along with the asset data.
| label   | string | Localized text of the export button.
| target     | "Host" | Renders a custom button that on click, passes the asset back to the client.
| closeTargetOnExport (optional)  |  boolean | The embed container will be closed after successful export if this is set to true. Defaults to false to conform to backward compatibility.
| variant (optional)  | "accent", "primary", or "secondary" | Style of the export button.
| optionType | "button" | Renders a standalone single button.
| buttonType | "custom"  | Type of export button.

<InlineAlert variant="info" slots="text1" />

The variant option 'cta' has been replaced with 'accent' Going forward, we will remove the support of 'cta' variant from SDK.

<!-- | featureList (optional) | string[] | todo
| iconUrl (optional) | string | todo -->

### CustomExportLink

| Property   | Type    | Description
| ----------- | --------------- | ---
| id    | string | The id of the export button. On button click, this id will be passed back in `onPublish` callback along with the asset data.
| label   | string | Localized text of the export button.
| target     | "Host" | Renders a custom button that on click, passes the asset back to the client.
| closeTargetOnExport (optional)  |  boolean | The embed container will be closed after successful export if this is set to true. Defaults to false to conform to backward compatibility.
| optionType | "link" | Renders text with hyperlink to export asset.

### ExportButtonGroup

Describes object that is used to render a group of buttons which will be shown as a dropdown under a parent button.

| Property   | Type    | Description
| ----------- | --------------- | ---
| label | string | Localized text of the button group
| buttons | List of `NativeExportButton` and/or `CustomExportButton` objects | Buttons in button group.
| optionType | "group" | Type of export button.

### NativeExportButton

| Property   | Type    | Description
| ----------- | --------------- | ---
| id    | string | The id of the export button. On button click, this id will be passed back in `onPublish` callback along with the asset data.
| label   | string | Localized text of the export button.
| target     | "Download" or "Editor" | A button, which on click will either download the asset or open the asset in CCX editor.
| variant (optional)  | "accent", "primary", or "secondary" | Style of the export button.
| optionType | "button" | Renders a standalone single button.
| buttonType | "native"  | Type of export button.

<!-- | featureList (optional) | string[] | todo
| iconUrl (optional) | string | todo -->

## FileType

Output file type for asset.

| Type   | Value    |
| ----------- | --------------- |
| JPEG     | "image/jpeg" |
| PNG    | "image/png" |
| GIF     | "image/gif" |
| MP4    | "video/mp4" |
| PDF    | "application/pdf" |

<!-- ## Locale

The Adobe Express Embed SDK lets you customize the locale during initialization. The default value is `'en_US'`. This determines the language setting for users experiencing SDK components.

| Locale | Description
| :-- | :--
| 'en_US' | English
| 'fr_FR' | French
| 'de_DE' | German  
| 'ja_JP' | Japanese
| 'it_IT'| Italian
| 'es_ES'| Spanish
| 'pt_BR'| Portuguese
| 'ko_JR'| Korean  
| 'da_DK'| Danish
| 'nl_NL'| Dutch  
| 'nb_NO'| Norwegian
| 'sv_SE'| Swedish
| 'fi_FI'| Finnish
| 'zh_Hans_CN' | Chinese (simplified)
| 'zh_Hant_TW'| Chinese (traditional) -->

## Pixels

Define the unit of size being used.

| Type   | Value    |
| ----------- | --------------- |
| PIXELS    | "px" |
| MILLIMETERS    | "mm" |
| INCHES     | "in" |
| CENTIMETERS    | "cm" |

## Size

Allows you to define the canvas size of the project created in the full editor. When specifying `size` or `minSize`, `unit` is a required property.

| Property | Value | Description
| :-- | :--| :--
|width| number | minimum value = 0
|height | number | minimum value = 0
| unit | 'px'/'in'/'mm'/'cm' | pixels/inches/millimeters/centimeters

## TemplateType

Developers can pass the `createDesign()` method a `TemplateType`, for the user to start creating with. Browse "[All templates](https://express.adobe.com/sp/search?homeBackType=home)" on Adobe Express to get an idea of each category.

| TemplateType | Description
| :-- | :--
| 'Flyers' | Flyers
| 'Instagram_Post' | Instagram posts
| 'Instagram_Story' | Instagram Stories
| 'Logo' | Logos
| 'Youtube_Thumbnail' | YouTube thumbnails
| 'Collage' | Collages
|'Facebook_Post' | Facebook posts
| 'Facebook_Cover' | Facebook covers
| 'Card' | Cards
| 'Invitation' | Invitations
| 'Business_Card' | Business cards
| 'Menu' | Menus
| 'Brochure' | Brochures
| 'Resume' | Resumes
| 'Poster' | Posters
| 'Desktop_Wallpaper' | Wallpapers
|'Presentation_Graphic' | Presentation Graphics
|'Album_Cover' | Album covers
| 'Book_Cover' | Book covers
| 'Worksheet' | Worksheets

## VideoQuality

Defines the quality/resolution of a video output.

| Type   | Value    |
| ----------- | --------------- |
| HD    | '1280' |
| FULL_HD    | '1920' |
| UHD  | '2160' |