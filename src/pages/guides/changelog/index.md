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

## [1.3.14] - 2022-09-23

### Enhancements

- Analytic improvements.

## [1.3.11] - 2022-08-24

### Added

- SDK bundled for browsers, hosted on Adobe CDN
- Welcome Screen before the Single User Sign In screen appears.
- Ability to log out from CCX Editor loaded in the iFrame.

### Enhancements

- Analytic improvements.
- Optimized bundle size.

### Bug Fixes

- Signing-in from the welcome screen, subsequent to a sign-out, successfully launches CCX Editor iFrame.

### Known Issues

- Opening asset in CCX Editor, subsequent to performing an image QA, and saving the asset doesn't close the iFrame automatically. This will be fixed in the next release.
- When a QA is performed and the resulting asset is opened in a CCX editor: after the user makes changes and saves it the asset is saved outside of the designated project folder in the user's Express account.

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
- CCX Editor iFrame now honoring 0 border radius value.
