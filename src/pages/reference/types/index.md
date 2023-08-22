---
keywords:
  - Types
  - AssetType
  - AssetDataType
  - CanvasAspectId
  - EditorPanelView
  - ExportOptions
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

`CanvasAspectId` allows you to initializes the full editor loaded with canvas set to a particular size.

| Type | Value | Dimensions
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
