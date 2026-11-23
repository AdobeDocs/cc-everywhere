---
keywords:
  - Breaking changes
  - Added
  - Enhancements
  - What's new
  - Known Issues
  - Embed SDK changelog
  - Changelog
title: Changelog
description: All notable changes are documented in this page.
contributors:
  - https://github.com/nimithajalal
  - https://github.com/undavide
---

# Changelog 1

Release notes for the Adobe Express Embed SDK, with the newest release first.SDK, with the newest release first.\<br>\<br>\<a href="https://raw.githubusercontent.com/AdobeDocs/cc-everywhere/refs/heads/main/src/pages/feed.xml" style="display: inline-flex; align-items: center; gap: 6px;">\<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">\<circle cx="6.18" cy="17.82" r="2.18" fill="#eb1000"/>\<path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" fill="#eb1000"/>\</svg>\<span>Subscribe via RSS\</span>\</a>

<Changelog1 slots="type,module, changes" version="4.58.15" date="2026-10-21" kind="sdk" />

#### new

#### ede

[`module.createGuidedDesign`](../../v4/sdk/src/workflows/3p/module-workflow/classes/module-workflow.md#createguideddesign) module that launches a guided design creation flow in EDE. **bold** *italictest*
  - list1
  - list2
  - list3
  - list3

<Changelog1 slots="type,module, changes" version="4.57.22" date="2026-10-08" kind="sdk" repeat="2"/>

#### new

#### editimage

[`EditFurtherIntent.ERASE`](../../v4/shared/src/types/export-config-types/enumerations/edit-further-intent.md) starting intent for Edit Image, so users can continue into object erase.

#### fixed

#### core

Various performance improvements and fixes.
```js
await import(CDN_URL);
const ccEverywhere = await window.CCEverywhere.initialize(
  initializeParams, configParams
);
```

<Changelog1 slots="type,module, changes" version="4.56.21" date="2026-09-30" kind="sdk" repeat="2"/>

#### improved

#### auth

Per-document success/failure status in [`migrateAssets()`](../../v4/sdk/src/workflows/3p/module-workflow/classes/module-workflow.md#migrateassets) `MigrateAssetsResult`.

#### new

#### export

Optional `tooltip` field on [`PublishExportOption`](../../v4/shared/src/types/export-config-types/interfaces/publish-export-option.md#properties) in `ExportConfig`, letting hosts customize hover tooltip text on publish-target export buttons.

<Changelog1 slots="type,module, changes" version="4.55.8" date="2026-09-24" kind="docs" repeat="2"/>

#### docs

#### ede

[Embedded Design Editor (EDE) concept guide](../concepts/ede.md) introducing EDE's configurable, focused creation experiences, along with companion [Create Design](../concepts/ede-create-design.md) and [Edit Design](../concepts/ede-edit-design.md) guides.

#### docs

#### ede

[Embedded Design Editor tutorial](../tutorials/embedded-design-editor.md) walking through building a Create Design → Edit Design flow step by step.

<Changelog1 slots="type,module, changes" version="4.55.8" date="2026-09-16" kind="sdk" repeat="3"/>

#### new

#### auth

[`migrateAssets()`](../../v4/sdk/src/workflows/3p/module-workflow/classes/module-workflow.md#migrateassets) support for asset migration (guest to logged-in user) in the [Partner Assertion](../../v4/shared/src/types/authentication-types/index.md#interfaces) workflow.

#### new

#### viewer

[`DesignViewerContext`](../../v4/sdk/src/context/3p/design-viewer-context/classes/design-viewer-context.md) access for Design Viewer, allowing host applications to provide additional assets after initial load via [`updateDesignAssets`](../../v4/sdk/src/context/3p/design-viewer-context/classes/design-viewer-context.md#updatedesignassets).

#### new

#### templates

[`hideTemplatePreview`](../../v4/shared/src/types/module/app-config-types/interfaces/browse-mode-config.md#properties) option to hide Template Preview, navigating directly to the editor after selecting a template.

<Changelog1 slots="type,module, changes" version="4.54.18" date="2026-09-02" kind="sdk" repeat="4"/>

#### new

#### ede

[`editorGuideConfig`](../../v4/shared/src/types/module/app-config-types/interfaces/editor-guide-config.md) property to configure visibility of Bleed, Margins, and Rulers in the Edit Design module UI.

#### new

#### ede, export

[`pdfPrintConfig`](../../v4/shared/src/types/module/app-config-types/interfaces/pdf-print-config.md) property to configure print-ready PDF export in the Edit Design module (`"print"` variant), including Crop Marks, Bleed, Color Mode, and ICC Profile.

#### fixed

#### ede

`createDesign()` with `"print"` variant now correctly displays bleed in the editor preview.

#### docs

#### core

[Analytics concept guide](../concepts/host-app-trigger.md) explaining how to configure required analytics data for consistent launch attribution across Embed SDK workflows.

<Changelog1 slots="type,module, changes" version="4.53.3" date="2026-08-13" kind="sdk" repeat="2"/>

#### new

#### auth

[`PartnerAssertionAuthConfig`](../../v4/shared/src/types/authentication-types/index.md#type-aliases) interface for partner assertion authentication (guest, signed-in, or guest-to-user transition).

#### new

#### export

[`PublishAction.previewConfig`](../../v4/shared/src/types/export-config-types/interfaces/publish-action.md#properties) property of type [`AssetPreviewConfig`](../../v4/shared/src/types/export-config-types/interfaces/asset-preview-config.md) to configure an additional output preview image.

<Changelog1 slots="type,module, changes" version="4.51.14" date="2026-08-05" kind="sdk" repeat="2"/>

#### new

#### viewer

[`CCEverywhere.DesignViewerDocConfig`](../../v4/shared/src/types/module/doc-config-types/interfaces/design-viewer-doc-config.md) accepts multiple assets in `docConfig`.

#### new

#### editor

[`CCEverywhere.EditorAppConfig.editorMode`](../../v4/shared/src/types/editor/app-config-types/interfaces/base-editor-app-config.md#properties) optional property on Full Editor `appConfig`; setting `'assistant'` opens the editor with the AI Assistant panel active.

<Changelog1 slots="type,module, changes" version="4.50.23" date="2026-07-24" kind="docs" />

#### docs

#### templates

[Template Browser v2 concept guide](../concepts/template-browser-v2.md) covering the new tabbed Template Browser experience for authenticated users (coexists with Template Browser v1).

<Changelog1 slots="type,module, changes" version="4.48.12" date="2026-06-16" kind="maintenance" />

#### fixed

#### core

General improvements and bug fixes.

<Changelog1 slots="type,module, changes" version="4.45.20" date="2026-04-14" kind="docs" />

#### docs

#### viewer

[Design Viewer concept guide](../concepts/design-viewer.md) covering implementation details of the Design Viewer module.

<Changelog1 slots="type,module, changes" version="4.44.14" date="2026-03-19" kind="sdk" />

#### new

#### viewer

[`CCEverywhere.viewDesign`](../../v4/sdk/src/workflows/3p/module-workflow/classes/module-workflow.md#viewdesign) Design Viewer module, configured via [`DesignViewerAppConfig`](../../v4/shared/src/types/module/app-config-types/interfaces/design-viewer-app-config.md) and [`DesignViewerDocConfig`](../../v4/shared/src/types/module/doc-config-types/interfaces/design-viewer-doc-config.md).

<Changelog1 slots="type,module, changes" version="4.43.13" date="2026-03-10" kind="docs" repeat="2"/>

#### docs

#### core

Expanded **Mobile Web Concept Guide**: [Overview](../concepts/mobile-web-support-overview.md) comparing Mobile Web and Mobile SDKs, [Mobile Web in a WebView](../concepts/mobile-web-support-webview.md) for iOS and Android apps, and improved information architecture.

#### docs

#### core

[Mobile Web tutorial](../tutorials/mobile-web.md) with a Fantasy Sports badge creation end-to-end example and working samples for Web (client and server), Android, and iOS.

<Changelog1 slots="type,module, changes" version="4.41.14" date="2026-01-30" kind="sdk" repeat="2"/>

#### new

#### export, qa

[`CCEverywhere.PublishAction.outputType`](../../v4/shared/src/types/export-config-types/interfaces/publish-action.md) option to return output files as `Blob` for Quick Actions and Module Workflows.

#### improved

#### export

[`CCEverywhere.PublishConfig.outputType`](../../v4/shared/src/types/module/app-config-types/interfaces/publish-config.md#properties) asset data type updated for `Blob` output.

<Changelog1 slots="type,module, changes" version="4.40.30" date="2026-01-09" kind="sdk" />

#### new

#### core

[`CCEverywhere.BaseAppConfig.metaData`](../../v4/shared/src/types/design-config-types/interfaces/base-app-config.md#properties) support for passing custom key-value metadata across all workflows.

<Changelog1 slots="type,module, changes" version="4.39.13" date="2025-11-24" kind="maintenance"/>

#### fixed

#### core

Maintenance release: general improvements and bug fixes.

<Changelog1 slots="changes" kind="docs"/>

Documentation Update

<Changelog1 slots="type,module, changes" version="" date="2025-11-14" kind="docs" />

#### docs

#### templates

[Template Browser concept guide](../concepts/template-browser.md) covering implementation details of the Template Browser experience.

<Changelog1 slots="type,module, changes" version="4.38.19" date="2025-11-10" kind="sdk" repeat="5"/>

#### new

#### generate, editimage

[`CCEverywhere.BaseAppConfig.useClientAuth`](../../v4/shared/src/types/design-config-types/interfaces/base-app-config.md#properties) option for credit-free Generative AI workflows in Generate Image and Edit Image (enabled partners only).

#### new

#### export

[`CCEverywhere.CallBackTarget.CALLBACK`](../../v4/shared/src/types/export-config-types/enumerations/call-back-target.md#callback) export target to trigger callback actions without publishing or downloading assets.

#### new

#### core

**Custom Message Workflow**: [`WORKFLOW_CONTEXT`](../../v4/shared/src/messenger/message-types/enumerations/message-type.md#workflow_context) message type, [`CustomMessage`](../../v4/shared/src/messenger/message-types/interfaces/custom-message.md) interface (instance ID, request ID, action, intent, and optional data), and [`CustomMessageAction`](../../v4/shared/src/messenger/message-types/enumerations/custom-message-action.md) enum for unsaved changes and asset requests.

#### improved

#### core

[`CCEverywhere.ModalContainerConfig.showExpressIconWithText`](../../v4/shared/src/types/container-config-types/interfaces/modal-container-config.md#properties) default loading screen includes the Express logo and text.

#### new

#### editor

[`CCEverywhere.BaseEditorAppConfig.canvasBackgroundColor`](../../v4/shared/src/types/editor/app-config-types/interfaces/base-editor-app-config.md#properties) option to configure canvas background color in `RRGGBBAA` HEX format.

<Changelog1 slots="type,module, changes" version="4.36.26" date="2025-10-08" kind="sdk" repeat="5"/>

#### improved

#### core

[`CCEverywhere.ModuleWorkflow.CancelCallback`](../../v4/shared/src/types/callbacks-types/type-aliases/cancel-callback.md) `onCancel` reports optional `isEscapePressed` (`true` when canceled via Escape during loading).

#### new

#### core

[`CCEverywhere.HostInfo.coiEnabled`](../../v4/shared/src/types/host-info-types/interfaces/host-info-specified-base.md#properties) property on `HostInfo` indicating whether COI (Cross-Origin Isolation) is enabled.

#### new

#### core

[`CCEverywhere.BaseContainerConfig.iframeTitle`](../../v4/shared/src/types/container-config-types/interfaces/base-container-config.md#properties) property to configure the iframe's accessible title.

#### new

#### templates

[`CCEverywhere.BrowseSearchBaseConfig.rootCollectionId`](../../v4/shared/src/types/browse-search-config-types/interfaces/browse-search-base-config.md#properties) option to surface non-Express collections in the browser.

#### docs

#### core

[Mobile Web Support Overview](../concepts/mobile-web-support-overview.md) concept guide covering mobile creative workflows, configuration options, best practices, and troubleshooting.

<Changelog1 slots="type,module, changes" version="4.35.15" date="2025-09-18" kind="docs" />

#### docs

#### editor, generate, editimage

[Workflow Tethering concept guide](../concepts/tethering.md) and [Workflow Tethering tutorial](../tutorials/workflow-tethering.md) covering chained workflows (Generate Image → Edit Image and Edit Image → Full Editor).

<Changelog1 slots="type,module, changes" version="4.34.27" date="2025-09-01" kind="sdk" />

#### new

#### generate

`AUTO` content type on [`ImageContentType`](../../v4/shared/src/types/panel-settings-types/enumerations/image-content-type.md) to automatically determine content type from the prompt and context.

<Changelog1 slots="type,module, changes" version="4.34.26" date="2025-08-28" kind="sdk" repeat="2"/>

#### removed

#### generate

`ImageColorStyle`, `ImageCompositionStyle`, and `ImageLightingStyle` enumerations are no longer accepted in `CCEverywhere.TextToImageAppConfig.panelSettings`.

**What to do:** Remove these values from your `panelSettings` configuration.

#### docs

#### editimage

[Edit Image tutorial](../tutorials/edit-image.md) covering implementation details of Edit Image v2 features.

<Changelog1 slots="type,module, changes" version="4.32.26" date="2025-08-07" kind="sdk" repeat="8"/>

#### new

#### generate

[`CCEverywhere.TextToImageAppConfig.panelSettings`](../../v4/shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md#panelsettings) configuration for Generate Image v1 and v2, including [`PanelSettings`](../../v4/shared/src/types/panel-settings-types/interfaces/panel-settings.md), [`StyleSetting`](../../v4/shared/src/types/panel-settings-types/interfaces/style-setting.md), and [`ContentTypeSetting`](../../v4/shared/src/types/panel-settings-types/interfaces/content-type-setting.md).

#### new

#### generate

Style enumerations and [`ImageStyleId`](../../v4/shared/src/types/panel-settings-types/type-aliases/image-style-id.md): [`ImageContentType`](../../v4/shared/src/types/panel-settings-types/enumerations/image-content-type.md), [`ImageThemeStyle`](../../v4/shared/src/types/panel-settings-types/enumerations/image-theme-style.md), [`ImageTechniqueStyle`](../../v4/shared/src/types/panel-settings-types/enumerations/image-technique-style.md), `ImageLightingStyle`, `ImageCompositionStyle`, [`ImageEffectStyle`](../../v4/shared/src/types/panel-settings-types/enumerations/image-effect-style.md), `ImageColorStyle`, [`ImageMovementStyle`](../../v4/shared/src/types/panel-settings-types/enumerations/image-movement-style.md), [`ImageMaterialStyle`](../../v4/shared/src/types/panel-settings-types/enumerations/image-material-style.md), and [`ImageConceptStyle`](../../v4/shared/src/types/panel-settings-types/enumerations/image-concept-style.md).

#### new

#### generate

[`CCEverywhere.TextToImageAppConfig.hideFeedbackMenu`](../../v4/shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md#hidefeedbackmenu) option to hide the feedback menu in the header bar.

#### new

#### generate

[`CCEverywhere.TextToImageAppConfig.isPromptSafe`](../../v4/shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md#ispromptsafe) callback for custom prompt moderation.

#### new

#### generate

[`CCEverywhere.TextToImageAppConfig.promptInputPlaceholder`](../../v4/shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md#promptinputplaceholder) placeholder text configuration for the prompt input field (Generate Image v2 only).

#### docs

#### generate

Updated [Generate Image tutorial](../tutorials/generate-image.md) and [Concept Guide](../concepts/generate-image-v2.md) for the new panel settings options.

#### new

#### editimage

[`CCEverywhere.EditImageAppConfig.inlineTOUConsent`](../../v4/shared/src/types/module/app-config-types/interfaces/edit-image-app-config.md#inlinetouconsent) inline Terms of Use consent configuration.

#### new

#### export

[`PublishButtonGroup`](../../v4/shared/src/types/export-config-types/interfaces/publish-button-group.md) interface for organizing export buttons.

<Changelog1 slots="changes" version="4.39.13" date="2025-11-24" kind="docs"/>

Documentation Update

<Changelog1 slots="type,module, changes" version="" date="2025-07-11" kind="docs" repeat="2"/>

#### docs

#### generate

[Generate Image tutorial](../tutorials/generate-image.md) covering Generate Image v2 features, including the Custom Community Wall.

#### docs

#### core

Improved API Reference (v4) documentation for Type Aliases such as [`Asset`](../../v4/shared/src/types/asset-types/type-aliases/asset.md).

<Changelog1 slots="type,module, changes" version="4.30.13" date="2025-06-20" kind="maintenance"/>

#### fixed

#### core

Maintenance release: general improvements and bug fixes.

<Changelog1 slots="type,module, changes" version="4.29.22" date="2025-05-28" kind="sdk" repeat="5"/>

#### new

#### editimage

[`CCEverywhere.module.editImage()`](../../v4/sdk/src/workflows/3p/module-workflow/classes/module-workflow.md) [Edit Image v2 experience](../concepts/edit-image-v2.md): 35–50% faster loads, 35% less memory, Adobe Spectrum 2 UI. No config changes needed.

#### new

#### generate

[`CCEverywhere.TextToImageAppConfig.communityWallConfig`](../../v4/shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md#properties) to populate the Community Wall with custom images (see [Custom Community Wall](../concepts/generate-image-v2.md#custom-community-wall)).

#### new

#### editor

[`CCEverywhere.EditorAppConfig.showPageMargin`](../../v4/shared/src/types/editor/app-config-types/interfaces/base-editor-app-config.md#properties) and [`CCEverywhere.EditorAppConfig.showBleedArea`](../../v4/shared/src/types/editor/app-config-types/interfaces/base-editor-app-config.md#properties) options to control margins and bleed visibility.

#### deprecated

#### editimage

PDF in [`AppConfig.allowedFileTypes`](../../v4/shared/src/types/module/app-config-types/interfaces/edit-image-app-config.md#properties) for Edit Image v2; PDFs are converted to PNG.

**What to do:** Drop PDF from Edit Image `allowedFileTypes`, or expect PNG output.

#### docs

#### editor

Enhanced [Editor Customization](../concepts/appconfig.md) concept guide with `assetCollection`, `showPageMargin`, and `showBleedArea` options, use cases, and examples.

<Changelog1 slots="type,module, changes" version="4.28.19" date="2025-05-05" kind="sdk" repeat="3"/>

#### new

#### editor

[`CCEverywhere.BaseEditorAppConfig.assetCollection`](../../v4/shared/src/types/editor/app-config-types/interfaces/base-editor-app-config.md#properties) optional property (collection URN) for asset collection filtering in the Editor.

#### new

#### editor

[`CCEverywhere.Callbacks.onIntentChange`](../../v4/shared/src/types/callbacks-types/interfaces/callbacks.md#properties) optional callback for intent change events in the Editor.

#### fixed

#### core

Performance improvements and bug fixes.

<Changelog1 slots="type,module, changes" version="4.26.5" date="2025-04-11" kind="sdk" repeat="3"/>

#### new

#### core

[`CCEverywhere.BaseEditorAppConfig.analyticsData`](../../v4/shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md#properties) (`hostAppTrigger`). See the [Analytics guide](../concepts/host-app-trigger.md).

#### improved

#### core

Cancel events include optional `clientCtaLocation` and `workflowLoadCompleted` properties.

#### fixed

#### core

Various performance improvements and bug fixes.

<Changelog1 slots="type,module, changes" version="4.22.9" date="2025-03-12" kind="sdk" />

#### new

#### generate

[Firefly Custom Models](../concepts/generate-image-v2.md#custom-firefly-models) support in Generate Image V2 (Enterprise users only).

<Changelog1 slots="type,module, changes" version="4.21.17" date="2025-02-27" kind="sdk" repeat="5"/>

#### new

#### generate

[`CCEverywhere.TextToImageAppConfig.appVersion`](../../v4/shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md#properties) option to opt in to Generate Image V2 with `appVersion: "2"` (default stays `"1"`).

#### new

#### generate

v2 config options: [`thumbnailOptions`](../../v4/shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md#properties), [`editDropdownOptions`](../../v4/shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md#properties), [`publishConfig`](../../v4/shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md#properties), [`fastModeConfig`](../../v4/shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md#properties), and [`featureConfig`](../../v4/shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md#properties).

#### new

#### export

`pdfPrint` support in `allowedExportFileTypes` on `appConfig`.

#### docs

#### generate

[Concept Guide](../concepts/generate-image-v2.md) for Generate Image V2 and updated [Demo App](https://demo.expressembed.com/).

#### fixed

#### core

Loader CSS for frictionless experience.

<Changelog1 slots="type,module, changes" version="4.20.46" date="2025-02-18" kind="sdk" repeat="2"/>

#### fixed

#### editor

Video `blob` and `base64` asset inputs for [`Editor.createWithAsset()`](../../v4/sdk/src/workflows/3p/editor-workflow/classes/editor-workflow.md#createwithasset).

#### removed

#### editor

Presigned [`URL`](../../v4/shared/src/types/asset-types/type-aliases/url-asset.md) as the [`datatype`](../../v4/shared/src/types/asset-types/enumerations/asset-data-type.md) for video [`asset`](../../v4/shared/src/types/asset-types/interfaces/asset-base.md) inputs in `createWithAsset()` is temporarily unsupported.

**What to do:** Pass video as `blob` or `base64` until support returns.

<Changelog1 slots="type,module, changes" version="4.19.22" date="2025-01-31" kind="sdk" repeat="4"/>

#### new

#### editimage

[`CCEverywhere.ExportConfig.EditFurtherIntent`](../../v4/shared/src/types/export-config-types/enumerations/edit-further-intent.md) intents `INSERT_OBJECT` and `REMOVE_OBJECT` in Edit Image.

#### docs

#### core

[Asset](../../v4/shared/src/types/asset-types/index.md) type documentation coverage.

#### docs

#### core

[Embed SDK Developer Journey](../index.md#embed-sdk-developer-journey) map and [Troubleshooting](../troubleshooting/express-unavailable-error.md) guide for "Adobe Express is Unavailable" and "Missing Referrer Header" errors.

#### fixed

#### core

Various performance improvements and bug fixes.

<Changelog1 slots="type,module, changes" version="4.18.14" date="2025-01-09" kind="sdk" />

#### new

#### generate

[`CCEverywhere.TextToImagePublishParams.prompt`](../../v4/shared/src/types/publish-params-types/interfaces/text-to-image-publish-params.md) returns the prompt in `onPublish`.

<Changelog1 slots="type,module, changes" version="4.17.33" date="2024-12-16" kind="sdk" repeat="2"/>

#### new

#### generate

[`CCEverywhere.appConfig.imageDimensions`](../../v4/shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md#properties) aspect ratio parameter in `createImageFromText()`.

#### docs

#### core

[Error code guide](../concepts/error-handling.md) for managing errors.

<Changelog1 slots="type,module, changes" version="4.16.11" date="2024-11-18" kind="sdk" repeat="2"/>

#### new

#### generate

[`CCEverywhere.appConfig.imageStyleReference`](../../v4/shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md#properties) and [`CCEverywhere.appConfig.imageCompositionReference`](../../v4/shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md#properties) in `createImageFromText()`.

#### fixed

#### qa

Animate from Audio microphone input.

<Changelog1 slots="type,module, changes" version="4.15.19" date="2024-10-09" kind="sdk" repeat="4"/>

#### new

#### export

Enabled state for export buttons (`CCEverywhere.ExportConfig.ENABLED_BUTTON`).

#### new

#### generate, export

`CCEverywhere.ExportConfig.DOWNLOAD_ALL` export option.

#### new

#### generate

`CCEverywhere.createImageFromText.appConfig.imageDimensions` parameter.

#### docs

#### core

Redesigned [SDK Reference](../../v4/index.md) section and V3 to V4 [Migration Guide](../concepts/migration-v3-v4.md).

<Changelog1 slots="type,module, changes" version="4.14.23" date="2024-09-23" kind="docs" />

#### docs

#### core

Reorganized docs: updated [Submission and Review](../review/index.md) and [Quickstart](../quickstart/index.md) guides, and new [Tutorials](../tutorials/index.md) section.

<Changelog1 slots="type,module, changes" version="4.14.23" date="2024-09-05" kind="sdk" />

#### new

#### core

`DocConfig` accepts `Blob` and `File` assets.

<Changelog1 slots="type,module, changes" version="4.4.15" date="2024-04-02" kind="sdk" repeat="2"/>

#### new

#### core

`CCEverywhere.terminate()`.

#### new

#### core

[z-index](../../reference/types/index.md#containerconfig) support for the root container.

<Changelog1 slots="type,module, changes" version="4.2.30" date="2024-03-14" kind="sdk" isArchive="true" />

#### breaking

#### core

Callbacks move from `initialize()` to each call’s `appConfig`.

**What to do:** Move callbacks from `initialize()` into the `appConfig` of each call.

<Changelog1 slots="type,module, changes" version="4.2.29" date="2024-03-14" kind="sdk" repeat="6" isArchive="true"/>

#### breaking

#### editor

`createDesign` is now `editor.create` / `editor.createWithAsset`; `editDesign` is now `editor.edit`.

**What to do:** Rename the calls. See the [migration guide](../concepts/migration-v3-v4.md).

#### breaking

#### qa

`openQuickAction` is replaced by one method per action.

**What to do:** Call the per-action methods instead.

#### breaking

#### export

`ExportOptions` changed shape.

**What to do:** Update `ExportOptions` to the v4 types.

#### new

#### generate

Generate Image module: `createImageFromText`.

#### new

#### editimage

Edit Image module: `editImage`.

#### new

#### auth

Delayed login.

<Changelog1 slots="type,module, changes" version="3.10.13" date="2023-11-06" kind="sdk" isArchive="true" />

#### new

#### core

LINE and note layouts ([CreateInputParams.canvasSize](../../reference/types/index.md#canvasaspectid)) and template types ([CreateInputParams.templateType](../../reference/types/index.md#templatetype)); QR Code and Caption Video quick actions.

<Changelog1 slots="type,module, changes" version="3.8.11" date="2023-08-25" kind="sdk" isArchive="true"/>

#### new

#### core

`skipBrowserSupportCheck` option.

<Changelog1 slots="type,module, changes" version="3.7.14" date="2023-08-15" kind="sdk" isArchive="true"/>

#### breaking

#### core

`ExportButton.id` is required; `cta` variant renamed `accent`; Animate From Audio added; Reverse Video and Change Speed retired.

<Changelog1 slots="type,module, changes" version="3.6.16" date="2023-08-06" kind="sdk" isArchive="true"/>

#### new

#### core

MP4 export, mixed media, and `allowedFileTypes`.

<Changelog1 slots="type,module, changes" version="2.0.8" date="2023-02-02" kind="sdk" isArchive="true"/>

#### breaking

#### core

`initialize()` is async; browser support check; `terminate()`; Google One Tap sign-in.

<Changelog1 slots="type,module, changes" version="1.5.4" date="2022-12-16" kind="sdk" isArchive="true"/>

#### new

#### core

Quick actions work logged out; bug fixes.

<Changelog1 slots="type,module, changes" version="1.4.10" date="2022-11-14" kind="sdk" isArchive="true"/>

#### new

#### core

Delayed login; Create from Image.

<Changelog1 slots="type,module, changes" version="1.3.11" date="2022-08-24" kind="sdk" isArchive="true"/>

#### new

#### core

CDN bundle, welcome screen, and sign-out.

<Changelog1 slots="type,module, changes" version="1.1.0" date="2022-04-09" kind="sdk" isArchive="true" />

#### new

#### core

Configurable scrim and redirect URI; `appVersion` and `platformCategory` optional.
