"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[1450],{28784:function(e,i,n){n.r(i),n.d(i,{_frontmatter:function(){return r},default:function(){return u}});var a=n(58168),t=n(80045),l=(n(88763),n(15680)),d=n(83407);const o=["components"],r={},m={_frontmatter:r},s=d.A;function u(e){let{components:i}=e,n=(0,t.A)(e,o);return(0,l.mdx)(s,(0,a.A)({},m,n,{components:i,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"changelog"},"Changelog"),(0,l.mdx)("h2",{id:"41423---2024-09-05"},"[4.14.23]"," - 2024-09-05"),(0,l.mdx)("h3",{id:"added"},"Added"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"AAdded support for Blobs to the list of supported data types for an Asset in ",(0,l.mdx)("inlineCode",{parentName:"li"},"DocConfig"),". Clients can now pass a blob or file object in place of ",(0,l.mdx)("inlineCode",{parentName:"li"},"base64")," or ",(0,l.mdx)("inlineCode",{parentName:"li"},"url"),".")),(0,l.mdx)("h2",{id:"4415---2024-04-02"},"[4.4.15]"," - 2024-04-02"),(0,l.mdx)("h3",{id:"added-1"},"Added"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"CCEverywhere.terminate"),": We have added the terminate API to SDK v4. Once it is called, performing any action should fail with error SDK_NOT_INITIALIZED unless SDK is initialized again."),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("a",{parentName:"li",href:"../../reference/types/index.md#containerconfig"},"z-index")," support for the root container.")),(0,l.mdx)("h2",{id:"4230---2024-03-14"},"[4.2.30]"," - 2024-03-14"),(0,l.mdx)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"callbacks")," are no longer set in the ",(0,l.mdx)("inlineCode",{parentName:"li"},"initialize")," method"),(0,l.mdx)("li",{parentName:"ul"},"Every API now accepts ",(0,l.mdx)("inlineCode",{parentName:"li"},"appConfig"),". Callbacks are now part of ",(0,l.mdx)("inlineCode",{parentName:"li"},"appConfig"),".")),(0,l.mdx)("h2",{id:"4229---2024-03-14"},"[4.2.29]"," - 2024-03-14"),(0,l.mdx)("h3",{id:"breaking-changes-1"},"Breaking Changes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"callbacks")," are now set in the ",(0,l.mdx)("inlineCode",{parentName:"li"},"initialize")," method"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"ExportOptions"),' has changed and new "continue editing" buttons are available'),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"ccEverywhere.createDesign()")," has now been broken into ",(0,l.mdx)("inlineCode",{parentName:"li"},"ccEverywhere.editor.create()")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"ccEverywhere.editor.createWithAsset()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"ccEverywhere.editDesign()")," is now ",(0,l.mdx)("inlineCode",{parentName:"li"},"ccEverywhere.editor.edit()")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"ccEverywhere.openQuickAction()")," is now ",(0,l.mdx)("inlineCode",{parentName:"li"},"ccEverywhere.quickAction.convertToJPEG()")," (each of the different actions has its own API now)")),(0,l.mdx)("h3",{id:"added-2"},"Added"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"We have added modules to the SDK. Modules are contextual mini-editing experiences. We currently offer:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Text to Image module: ",(0,l.mdx)("inlineCode",{parentName:"li"},"ccEverywhere.module.createImageFromText()")),(0,l.mdx)("li",{parentName:"ul"},"Edit Image module: ",(0,l.mdx)("inlineCode",{parentName:"li"},"ccEverywhere.module.editImage()")))),(0,l.mdx)("li",{parentName:"ul"},"Delayed login is now available.")),(0,l.mdx)("h2",{id:"31013---2023-11-06"},"[3.10.13]"," - 2023-11-06"),(0,l.mdx)("h3",{id:"enhancements"},"Enhancements"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("a",{parentName:"li",href:"../../reference/types/index.md#canvasaspectid"},"CreateInputParams.canvasSize"),": Added support for new layouts.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"NoteHeaderImage"),(0,l.mdx)("li",{parentName:"ul"},"LineAdSmall"),(0,l.mdx)("li",{parentName:"ul"},"LineAdSquare"),(0,l.mdx)("li",{parentName:"ul"},"LineAdVertical"),(0,l.mdx)("li",{parentName:"ul"},"LineRichMenuLarge"),(0,l.mdx)("li",{parentName:"ul"},"LineRichMenuSmall"),(0,l.mdx)("li",{parentName:"ul"},"LineRichMessage"))),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("a",{parentName:"li",href:"../../reference/types/index.md#templatetype"},"CreateInputParams.templateType"),": Added support for some template types.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"note-header-image"),(0,l.mdx)("li",{parentName:"ul"},"line-ad-small"),(0,l.mdx)("li",{parentName:"ul"},"line-ad-square"),(0,l.mdx)("li",{parentName:"ul"},"line-ad-vertical"),(0,l.mdx)("li",{parentName:"ul"},"line-rich-menu-large"),(0,l.mdx)("li",{parentName:"ul"},"line-rich-menu-small"),(0,l.mdx)("li",{parentName:"ul"},"line-rich-message")))),(0,l.mdx)("h3",{id:"added-3"},"Added"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Generate QR Code: This new image quick action allows users to create custom QR code for any given URL. The quick action id for this is 'generate-qr-code'. We support Save to Host and Download options for the asset."),(0,l.mdx)("li",{parentName:"ul"},"Caption With Video: This new video quick action allows users to add captions to their videos. Users can upload videos with audio tracks and captions will be generated by Adobe Express. Does not work on videos which do not have any voiceover. The quick action id for this is 'caption-video'.")),(0,l.mdx)("h2",{id:"3811---2023-08-25"},"[3.8.11]"," - 2023-08-25"),(0,l.mdx)("h3",{id:"enhancements-1"},"Enhancements"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"ConfigParams.skipBrowserSupportCheck"),': By default, this property is set to false and users will encounter an "Unsupported Browser" page when launching a design flow. When this property is configured to true and the browser is not supported, calling ',(0,l.mdx)("inlineCode",{parentName:"li"},"initialize()")," will ",(0,l.mdx)("strong",{parentName:"li"},"not")," result in an error.")),(0,l.mdx)("h2",{id:"3714---2023-08-15"},"[3.7.14]"," - 2023-08-15"),(0,l.mdx)("h3",{id:"added-4"},"Added"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"ExportButton.accent: The variant option 'cta' has been replaced with 'accent'. Both 'cta' and 'accent' work the same but the support for 'cta' is deprecated as per Spectrum guidelines."),(0,l.mdx)("li",{parentName:"ul"},"We will not support the following two quick actions: Reverse Video and Change Speed"),(0,l.mdx)("li",{parentName:"ul"},"Added a new video quick action: Animate From Audio. This allows users to create a character animation by choosing a character from the given list of characters, adding a backdrop and then recording a speech.")),(0,l.mdx)("h3",{id:"breaking-changes-2"},"Breaking Changes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"ExportButton.id is now a required property on native buttons")),(0,l.mdx)("h2",{id:"3616---2023-08-06"},"[3.6.16]"," - 2023-08-06"),(0,l.mdx)("h3",{id:"enhancements-2"},"Enhancements"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"CreateOutputParams.allowedFileTypes: We now support the following four file types: image/png, image/jpeg, application/pdf and video/mp4. Client apps will now be able to restrict the export options shown to end users by passing the relevant file type in allowedFileTypes property. This is also relevant of mixed media."),(0,l.mdx)("li",{parentName:"ul"},"EditOutputParams.allowedFileTypes: We now support the following four file types: image/png, image/jpeg, application/pdf and video/mp4. Client apps will now be able to restrict the export options shown to end users by passing the relevant file type in allowedFileTypes property. This is also relevant of mixed media.")),(0,l.mdx)("h3",{id:"added-5"},"Added"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Video Export: Users will now be able to export assets as MP4 files. In order to do this, there must be a video asset added in the canvas to see the option in the export options dropdown for custom buttons. Pass video/mp4 option in allowedFileTypes."),(0,l.mdx)("li",{parentName:"ul"},"Mixed Media Support: Users will be able to download mixed media assets. In case they have added an image in one page and video in another, they will now be able to see JPG + MP4 or PNG + MP4 in the export options dropdown for custom buttons.Pass image/jpeg, image/png and video/mp4 option in allowedFileTypes.")),(0,l.mdx)("h2",{id:"208---2023-02-02"},"[2.0.8]"," - 2023-02-02"),(0,l.mdx)("h3",{id:"added-6"},"Added"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Browser compatibility checker: Now the SDK will check for browser compatibility during initialization."),(0,l.mdx)("li",{parentName:"ul"},"New default method ",(0,l.mdx)("inlineCode",{parentName:"li"},"terminate()")," allows you to terminate an active instance of CCEverywhere. This method will return false if there is no active CCEverywhere instance."),(0,l.mdx)("li",{parentName:"ul"},"Google YOLO will work for both the full editor and quick actions. If the user is not signed in, the YOLO prompt will be shown to users. If the user has multiple Google accounts, they can select from a list.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"If the user has an Adobe account associated with Google ID, the user is signed in."),(0,l.mdx)("li",{parentName:"ul"},"If the user does not have an Adobe account associated with the Google ID, a new Adobe account will be created for the user using their Google ID."),(0,l.mdx)("li",{parentName:"ul"},"User can choose to dismiss the YOLO modal and continue with delayed login."),(0,l.mdx)("li",{parentName:"ul"},"Redirect URI is no longer being used.")))),(0,l.mdx)("h3",{id:"breaking-changes-3"},"Breaking Changes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"initialize()")," method is now async. This is the main API used for initializing the SDK. It will return a promise with a CCEverywhere object which can be used to call other APIs in the SDK.")),(0,l.mdx)("h2",{id:"154---2022-12-16"},"[1.5.4]"," - 2022-12-16"),(0,l.mdx)("h3",{id:"added-7"},"Added"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},'Enabled "Logged Out" experience for image and video quick actions')),(0,l.mdx)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},'Fixed the problem with the editor iFrame not auto-closing post publish (for the scenario when the editor is launched from image quick actions via "Customize in Express" workflow)'),(0,l.mdx)("li",{parentName:"ul"},"Fixed an issue related to pre-caching of resources for the editor")),(0,l.mdx)("h3",{id:"known-issues"},"Known Issues"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},'Currently, the "Customize in Express" workflow from the "Remove Background" image quick action is not working. The fix will be deployed in a future version.')),(0,l.mdx)("h2",{id:"1410---2022-11-14"},"[1.4.10]"," - 2022-11-14"),(0,l.mdx)("h3",{id:"added-8"},"Added"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Delayed Login experience in the full editor.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"With this release of the SDK, we are enabling users to launch the full editor without having to log in first. The user can sign in 1) once the Adobe Express iFrame launches, or 2) continue to work on the document until they decide to publish/save -- at which point they would be prompted to sign in. The delayed login experience is available out-of-the-box with this version of the SDK and developers do not have to make any changes to enable this experience."))),(0,l.mdx)("li",{parentName:"ul"},'"Create from Image" workflow.',(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Users can now create from an image instead of a blank canvas. This workflow works with the delayed login experience. To use this workflow, partners will need to enable the host application to use it.")))),(0,l.mdx)("h2",{id:"1311---2022-08-24"},"[1.3.11]"," - 2022-08-24"),(0,l.mdx)("h3",{id:"added-9"},"Added"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"SDK bundled for browsers, hosted on Adobe CDN."),(0,l.mdx)("li",{parentName:"ul"},"Welcome Screen before the Single User Sign In screen appears."),(0,l.mdx)("li",{parentName:"ul"},"Ability to log out from the full editor loaded in the iFrame.")),(0,l.mdx)("h3",{id:"bug-fixes-1"},"Bug Fixes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Signing-in from the welcome screen, subsequent to a sign-out, successfully launches the full editor iFrame.")),(0,l.mdx)("h3",{id:"known-issues-1"},"Known Issues"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Opening asset in the full editor, subsequent to performing an image quick action, and saving the asset doesn't close the iFrame automatically. This will be fixed in the next release."),(0,l.mdx)("li",{parentName:"ul"},"When a quick action is performed and the resulting asset is opened in a full editor: after the user makes changes and saves it the asset is saved outside of the designated project folder in the user's Adobe Express account.")),(0,l.mdx)("h2",{id:"110---2022-04-09"},"[1.1.0]"," - 2022-04-09"),(0,l.mdx)("h3",{id:"enhancements-3"},"Enhancements"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Scrim view background color is now configurable."),(0,l.mdx)("li",{parentName:"ul"},"Redirect URI can now be provided as input during initialization."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"appVersion")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"platformCategory")," are now optional arguments."),(0,l.mdx)("li",{parentName:"ul"},"In dev environments, SDK is now able to read and override the base URL from the client's window object."),(0,l.mdx)("li",{parentName:"ul"},"API provided to easily identify the SDK version running in browser or host apps."),(0,l.mdx)("li",{parentName:"ul"},"Update Content will now be displayed in 100% of the area of the client div,  instead of appearing with scrollbars."),(0,l.mdx)("li",{parentName:"ul"},"Adobe IMS related enhancements.")),(0,l.mdx)("h3",{id:"bug-fixes-2"},"Bug Fixes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"When ",(0,l.mdx)("inlineCode",{parentName:"li"},"parentElementId")," is supplied, the dimensions of the parent container display Scrim view instead of Viewport."),(0,l.mdx)("li",{parentName:"ul"},"QA loader screen can be now set to the darkest theme."),(0,l.mdx)("li",{parentName:"ul"},"iFrame now loads successfully on Safari even if pop-up blocker settings are enabled."),(0,l.mdx)("li",{parentName:"ul"},"Enhanced error handling for failure to launch iFrame for quick action and full editor."),(0,l.mdx)("li",{parentName:"ul"},"Full editor iFrame now honoring 0 border radius value.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-changelog-index-md-4b0cc274331b5820be07.js.map