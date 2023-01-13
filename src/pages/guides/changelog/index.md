---
keywords:
  - Express Embed SDK
  - Express Editor
  - Adobe Express
  - Embed SDK
  - Quick Actions
  - SDK
  - JavaScript
  - Embed
  - SDK Reference
  - Image Quick Actions
  - Video Quick Actions
  - Adobe Photoshop
  - Adobe Premiere
  - Changelog
title: Changelog
description: All notable changes are documented in this page.
contributors:
  - https://github.com/amandahuarng
---

# Changelog

## [1.5.4] - 2022-12-16

### Added

- Enabled "Logged Out" experience for image and video quick actions

### Bug Fixes

- Fixed the problem with the editor iFrame not auto-closing post publish (for the scenario when the editor is launched from image quick actions via "Customize in Express" workflow)
- Fixed an issue related to pre-caching of resources for the editor

### Known Issues

- Currently, the "Customize in Express" workflow from the "Remove Background" image quick action is not working. The fix will be deployed in a future version.

## [1.4.10] - 2022-11-14

### Added

- Delayed Login experience in the full editor.
  - With this release of the SDK, we are enabling users to launch the full editor without having to log in first. The user can sign in 1) once the Express iFrame launches, or 2) continue to work on the document until they decide to publish/save -- at which point they would be prompted to sign in. The delayed login experience is available out-of-the-box with this version of the SDK and developers do not have to make any changes to enable this experience.
- "Create from Image" workflow.
  - Users can now create from an image instead of a blank canvas. This workflow works with the delayed login experience. To use this workflow, partners will need to enable the host application to use it.

## [1.3.11] - 2022-08-24

### Added

- SDK bundled for browsers, hosted on Adobe CDN.
- Welcome Screen before the Single User Sign In screen appears.
- Ability to log out from the full editor loaded in the iFrame.

### Bug Fixes

- Signing-in from the welcome screen, subsequent to a sign-out, successfully launches the full editor iFrame.

### Known Issues

- Opening asset in the full editor, subsequent to performing an image QA, and saving the asset doesn't close the iFrame automatically. This will be fixed in the next release.
- When a QA is performed and the resulting asset is opened in a full editor: after the user makes changes and saves it the asset is saved outside of the designated project folder in the user's Express account.

## [1.1.0] - 2022-04-09

### Enhancements

- Scrim view background color is now configurable.
- Redirect URI can now be provided as input during initialization.
- `appVersion` and `platformCategory` are now optional arguments.
- In dev environments, SDK is now able to read and override the base URL from the client's window object.
- API provided to easily identify the SDK version running in browser or host apps.
- Update Content will now be displayed in 100% of the area of the client div,  instead of appearing with scrollbars.
- Adobe IMS related enhancements.

### Bug Fixes

- When `parentElementId` is supplied, the dimensions of the parent container display Scrim view instead of Viewport.
- QA loader screen can be now set to the darkest theme.
- iFrame now loads successfully on Safari even if pop-up blocker settings are enabled.
- Enhanced error handling for failure to launch iFrame for QA and CCX Editor.
- Full editor iFrame now honoring 0 border radius value.
