---
keywords:
  - Types
  - AssetType
  - AssetDataType
  - CanvasAspectId
  - EditorPanelView
  - ExportOptions
  - TemplateType
  - Asset
  - Output
  - Modal parameters
  - ModalParams
  - Size
  - PublishParams
  - onPublish
  - Callbacks
  - OutputParams
title: Types
description: This is the reference page for types used across the SDK.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/undavide
---

# Types

<InlineAlert variant="error" slots="header, text1, text2" />

### IMPORTANT: Deprecation Warning

We are no longer approving new integrations using SDK v3, which will be deprecated in 2024.

Please migrate to V4 as soon as possible: we've created a [Migration Guide](../../../guides/concepts/migration-v3-v4.md) to help you with the transition.

## Asset

Represents an asset that can be loaded into a full editor component, or loaded in for an image quick action.

| Property | Type | Description
|:-- | :-- | :--
| type | [AssetType](#assettype) | Type of asset
| dataType | [AssetDataType](#assetdatatype)| Type of data representation
| data | string | Asset data in base 64 or in a blob URL

### AssetType

String value used to define file format supported for design operations.

| Type   | Value    |
| ----------- | --------------- |
| VIDEO      | "video" |
| IMAGE      | "image" |
| PDF    | "pdf" |

### AssetDataType

String value used to define desired asset data type for images. For image output types, host can set this property to either base64 or url. Default type for images is base64. For videos, we will always send output as url irrespective of this property.

| Type   | Value   |
| ----------- | --------------- |
| BASE64     | "base64" |
| URL    | "url" |

## Callbacks

All the callbacks are optional and return void.

| Property | Callback Function | Description
| :-- | :-- | :--
| onCancel | () => {}| Triggered when user closes the modal
| onError | () => {} | Triggered upon error with associated error code
| onLoadStart | () => {} | Triggered once modal begins to load
| onLoad | () => {} | Triggered once modal is loaded
| onPublishStart | () => {} | Triggered when "Publish"/"Download" is clicked
| onPublish | ([PublishParams](#publishparams) or [QuickActionPublishParams](#quickactionpublishparams)) => {} | Triggered when publish/download is complete

### PublishParams

Asset-related information received with `onPublish` callback.

| Property | Description
| :-- | :--
| projectId | string generated for identifying the project
| asset | Resulting asset: [OutputAsset](#outputasset)

### QuickActionPublishParams

Asset-related information received with `onPublish` callback in quick actions.

| Property | Description
| :-- | :--
| projectId | string generated for identifying the project
| asset | Resulting asset: [OutputAsset](#outputasset)
| exportButtonId | `id` passed in the `CustomExportButton` at time of invoking `openQuickAction`

## CanvasAspectId

`CanvasAspectId` allows you to initializes the full editor loaded with canvas set to a particular size.

| Canvas size | Value | Dimensions
| :-- | :-- | :--
| Album cover | "AlbumCover" | 750 x 750px
| Banner print | "BannerPrint" | 72 x 36in
| Banner web | "BannerWeb" | 1,200 x 1,000px
| Blog graphic | "BlogGraphic" | 800 x 1,200px
| Blog header | "BlogHeader" | 2,240 x 1,260px
| Book cover | "BookCover" | 1,410 x 2,250px
| Bookmark | "Bookmark" | 2 x 6in
| Brochure | "Brochure" | 11 x 8.5in
| Business card | "BusinessCard" | 3.5 x 2in
| Calendar | "Calendar" | 1,080 x 1,920px
| Card greeting | "CardGreeting" | 5 x 7in
| Certificate | "Certificate" | 11 x 8.5in
| Checklist | "Checklist" | 8.5 x 11in
| Class schedule | "ClassSchedule" | 11 x 8.5in
| Comic strip | "ComicStrip" | 11 x 8.5in
| Concept map | "ConceptMap" | 1,024 x 768px
| Coupon sheet | "CouponSheet" | 8.5 x 11in
| Cover page | "CoverPage" | 8.5 x 11in
| Display ad | "DisplayAd" | 300 x 600px
| Divider page | "DividerPage" | 8.5 x 11in
| Ebook cover | "EbookCover" | 1,600 x 2,560px
| Email header | "EmailHeader" | 600 x 200px
| Etsy cover | "EtsyCover" | 1,600 x 400px
| Etsy shop banner | "EtsyShopBanner" | 1,600 x 213px
| Eventbrite event image | "EventbriteEventImage" | 820 x 312px
| Facebook | "Facebook" | 1,080 x 1,080 px
| Facebook ad | "FacebookAd" | 1,080 x 1,080px
| Facebook event cover | "FacebookEventCover" | 1,200 x 630px
| Facebook group cover | "FacebookGroupCover" | 1,640 x 856px
| Facebook page cover | "FacebookPageCover" | 820 x 312px
| Facebook profile cover | "FacebookProfileCover" | 851 x 315px
| Facebook shop cover | "FacebookShopCover" | 1,600 x 1,200px
| Facebook story | "FacebookStory" | 1,080 x 1,920px
| Flash card | "FlashCard" | 5 x 3in
| Flash card sheet | "FlashCardSheet" | 8.5 x 11in
| Flyer | "Flyer" | 8.5 x 11in
| Gift certificate | "GiftCertificate" | 8 x 3.75in
| Gift tag | "GiftTag" | 3.5 x 2in
| Google classroom banner | "GoogleClassroomBanner" | 1,000 x 250px
| Graph | "Graph" | 1,920 x 1,080 px
| Graphic organizer | "GraphicOrganizer" | 8.5 x 11in
| ID card | "IdCard" | 3.375 x 2.125in
| Infographic | "Infographic" | 800 x 2,000in
| Instagram | "Instagram " | 1,080 x 1,080px
| Instagram ad | "InstagramAd" | 1,080 x 1,350px
| Instagram carousel post | "InstagramCarousel" | 1,080 x 1,080px
| Instagram post (landscape) | "InstagramLandscape" | 1,080 x 602px
| Instagram post (portrait) | "InstagramPostPortrait" | 1,080 x 1,350px
| Instagram reel | "InstagramReel" | 1,080 x 1,920px
| Instagram story | "InstagramStory" | 1,080 x 1,920px
| Instagram story ad | "InstagramStoryAd" | 1,080 x 1,920px
| Invitation | "Invitation" | 5 x 7in
| Invoice | "Invoice" | 8.5 x 11in
| Label | "Label" | 4 x 6in
| Label sheet | "LabelSheet" | 8.5 x 11in
| Leaflet trifold | "LeafletTrifold" | 210 x 297mm
| Lesson plan | "LessonPlan" | 8.5 x 11in
| Letter | "Letter" | 8.5 x 11in
| Letterhead | "Letterhead" | 8.5 x 11in
| Line ad (small) | "LineAdSmall" | 600 x 400 px
| Line ad (square) | "LineAdSquare" | 1,080 x 1,080px
| Line ad (vertical) | "LineAdVertical" | 1,080 x 1,920px
| Line rich menu (large) | "LineRichMenuLarge" | 2,500 x 1,686px
| Line rich menu (small) | "LineRichMenuSmall" | 2,500 x 843px
| Line rich message | "LineRichMessage" | 1,040 x 1,040px
| LinkedIn post | "LinkedinPost" | 1,920 x 1,920px
| LinkedIn blog post | "LinkedInBlogPost" | 1,200 x 628px
| LinkedIn profile cover | "LinkedInProfileCover" | 1,536 x 396px
| Logo | "Logo" | 500 x 500px
| Magazine | "Magazine" | 8.5 x 11in
| Media kit | "MediaKit" | 8.5 x 11in
| Meme | "Meme" | 1,200 x 1,200px
| Memo | "Memo" | 8.5 x 11in
| Menu | "Menu" | 5 x 7in
| Mindmap | "Mindmap" | 1,024 x 768px
| Mobile video | "MobileVideo" | 1,080 x 1,920px
| Mug | "Mug" | 3.3 x 3.3in
| Newsletter | "Newsletter" | 8.5 x 11in
| Note header image | "NoteHeaderImage" | 1,280 x 670px
| Pamphlet | "Pamphlet" | 8.5 x 11in
| Photo book | "PhotoBook" | 1,410 x 2,250px
| Pinterest | "Pinterest" | 1,000 x 500px
| Pinterest idea pin | "PinterestIdeaPin" | 1,080 x 1,920px
| Pinterest (square) | "PinterestSquare" | 600 x 600px
| Pinterest (vertical) | "PinterestVertical" | 600 x 900px
| Planner | "Planner" | 11 x 8.5in
| Playlist cover | "PlaylistCover" | 3,000 x 3,000px
| Podcast cover | "PodcastCover" | 3,000 x 3,000px
| Postcard | "Postcard" | 6 x 4in
| Poster | "Poster" | 11 x 17in
| Presentation | "Presentation" | 1,920 x 1,080px
| Print ad | "PrintAd" | 6 x 4in
| Program | "Program" | 8.5 x 11in
| Proposal | "Proposal" | 8.5 x 11in
| Recipe card | "RecipeCard" | 6 x 4in
| Reddit cover | "RedditCover" | 1,920 x 256px
| Report | "Report" | 8.5 x 11in
| Report card | "ReportCard" | 8.5 x 11in
| Resume | "Resume" | 8.5 x 11in
| Rubric | "Rubric" | 8.5 x 11in
| Snapchat ad | "SnapchatAd" | 1,080 x 1,920px
| Snapchat story | "SnapchatStory" | 1,080 x 1,920px
| Soundcloud banner | "SoundcloudBanner" | 2,480 x 520px
| Table of contents | "TableOfContents" | 8.5 x 11in
| Ticket | "Ticket" | 5.5 x 2in
| Tiktok ad | "TiktokAd" | 1,080 x 1,920px
| Tiktok video | "TiktokVideo" | 1,080 x 1,920px
| T-shirt | "Tshirt" | 14 x 18in
| Tumblr banner | "TumblrBanner" | 3,000 x 1,055px
| Twitch banner | "TwitchBanner" | 1,200 x 480px
| Twitch overlay | "TwitchOverlay" | 1,920 x 1,080px
| Twitter | "Twitter" | 1,200 x 675px
| Twitter header | "TwitterHeader" | 1,500 x 500px
| Twitter video | "TwitterVideo" | 1,920 x 1,080px
| Video | "Video" | 1,920 x 1,080px
| Wallpaper (desktop) | "WallpaperDesktop" | 1,920 x 1,080px
| Wallpaper (mobile) | "WallpaperMobile" | 1,080 x 1,920px
| Worksheet | "Worksheet" | 8.5 x 11in
| YouTube channel art | "YouTubeChannelArt" | 2,560 x 1,440px
| YouTube display ads | "YoutubeDisplayAds" | 300 x 60px
| YouTube profile photo | "YoutubeProfilePhoto" | 800 x 800px
| YouTube shorts | "YoutubeShorts" | 1,080 x 1,920px
| YouTube thumbnail | "YoutubeThumbnail" | 1,280 x 720px
| YouTube video | "YoutubeVideo" | 1,920 x 1,080px
| YouTube video ad | "YoutubeVideoAd" | 1,920 x 1,080px
| Zoom background | "ZoomBackground" | 1,920 x 1,080px

<!-- | Name tag | "NameTag" | 
| Place card | "PlaceCard" | -->

## CCXOutputParams

All properties are optional. Allows you to define data type and file type of output asset.

| Property | Type | Description
| :-- | :--| :--
| allowedFileTypes | [FileType](#filetype)[] | Output asset file types
| outputType | [AssetDataType](#assetdatatype) | Output data type
| multiPage | boolean | Defines whether the user can save multi-page projects
| imageQuality | number | Value between 0 and 1 to control the quality of the image
| videoQuality | [VideoQuality](#videoquality) | Controls the quality of the video

<InlineAlert variant="info" slots="text1" />

Use `allowedFileTypes` to specify the list of filetypes that the user can download. This can be used to limit the download options as per file types for end users. This limitation is applied to both native download and custom download scenarios.

## EditorPanelView

Optional string value that determines if the left panel should open by default. You can also specify the panel view based on user intent. Full list below.

| Panel name | Value
| :-- | :--
| Search | "search"
| Your Stuff | "yourStuff"
| Templates | "templates"
| Media | "media"
| Text | "text"
| Elements | "elements"

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

## FileType

String value determining output file type for asset.

| Type   | Value    |
| ----------- | --------------- |
| JPEG     | "image/jpeg" |
| PNG    | "image/png" |
| GIF     | "image/gif" |
| MP4    | "video/mp4" |
| PDF    | "application/pdf" |

## Locale

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
| 'zh_Hant_TW'| Chinese (traditional)

## ModalParams

All properties are optional. Allows you to define the UI constraints of the modal.

| Property | Type/Value |
| :-- | :--|
|parentElementId| string
|size | [Size](#size)
| padding | number
| borderRadius | number

## OutputAsset

Passed to the onPublish callback in PublishParams. Extends the [Asset](#asset) type with 3 additional properties.

| Property | Type | Description
|:-- | :-- | :--
| type | [AssetType](#assettype) | Type of asset (image or video)
| dataType | [AssetDataType](#assetdatatype) | Type of data representation
| data | base-64 string or Blob URL | Image/video data
| fileType | [FileType](#filetype) | Type of output asset
| (optional) fileName | string | Name of output asset
| (optional) size | [Size](#size) | Dimensions of output asset

## Size

Allows you to define the canvas size of the project created in the full editor.

| Property | Value | Description
| :-- | :--| :--
|width| number | minimum value = 0
|height | number | minimum value = 0
| unit | "px"/"in"/"mm" | pixels/inches/millimeters

## TemplateType

Developers can pass the `createDesign()` method a `TemplateType`, for the user to start creating with. Browse "[All templates](https://express.adobe.com/sp/search?homeBackType=home)" on Adobe Express to get an idea of each category.

| Type | Value
| :-- | :--
| Brochure | "brochure"
| Business card | "business-card"
| Card greeting | "card-greeting"
| Facebook post | "facebook-post"
| Facebook profile cover | "facebook-profile-cover"
| Facebook story | "facebook-story"
| Flyer | "flyer"
| Graphic organizer | "graphic-organizer"
| Infographic | "infographic"
| Instagram carousel | "instagram-carousel"
| Instagram story | "instagram-story"
| Instagram square post | "instagram-square-post"
| Instagram reel | "instagram-reel"
| Invitation | "invitation"
| Invoice | "invoice"
| Line ad (small) | "line-ad-small"
| Line ad (square) | "line-ad-square"
| Line ad (vertical) | "line-ad-vertical"
| Line rich menu (large) | "line-rich-menu-large"
| Line rich menu (small) | "line-rich-menu-small"
| Line rich message (vertical) | "line-rich-message"
| LinkedIn profile cover | "linkedin-profile-cover"
| Logo | "logo"
| Meme | "meme"
| Menu | "menu"
| Mobile video | "mobile-video"
| Newsletter | "newsletter"
| Note header image | "note-header-image"
| Photo book | "photo-book"
| Poster | "poster"
| Presentation | "presentation"
| Resume | "resume"
| Tiktok video | "tiktok-video"
| Video | "video"
| Wallpaper (desktop) | "wallpaper-desktop"
| Worksheet | "worksheet"
| YouTube profile photo | "youtube-profile-photo"
| YouTube thumbnail | "youtube-thumbnail"
| YouTube video | "youtube-video"

## VideoQuality

Defines the quality/resolution of a video output.

| Type   | Value
| :----------- | :---------------
| HD video quality    | "1280" |
| FULL_HD video quality  | "1920" |
| UHD video quality | "2160" |
