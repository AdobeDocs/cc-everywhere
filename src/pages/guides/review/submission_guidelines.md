---
keywords:
  - Developer submission guidelines
  - Review process
  - Review
  - Approval
  - Rejection
title: Submission Guidelines
description: This page explains the submission and review process.
contributors:
  - https://github.com/nimithajalal
---

# Overview

This section provides a set of guidelines to help you in submitting your integrtion for review.

## Submission guidelines

You have to submit your app for approval in the [Adobe Developer Console](https://developer.adobe.com/console).

<InlineAlert variant="help" slots="text" />

If you started your developement by clicking the [Get Credentials](https://developer.adobe.com/express/embed-sdk/docs/get-credential/) button, you'll need to identify your project before proceeding. Alternatively, you can click on the [Get Credentials](https://developer.adobe.com/express/embed-sdk/docs/get-credential/) button, which should provide a link to any previously created projects. This link will take you to the developer console.

Follow the steps below, in the Developer console.

- Navigate to your project in [Adobe Developer Console](https://developer.adobe.com/console).
- Select **Submit for review** from the **Project overview** tab or select the **Approval** tab on the left panel.

![Submit for review in Console UI](submission_bigger.png)

<InlineAlert variant="help" slots="text1, text2, text3" />

  Confirm that the `appName` used to initialize the SDK in your application code reflects your app's name.

  Note any projects created through your integration will be saved in the user's Express account, inside an Express folder with this name.

  Confirm that the SDK is never initialized more than once per page load.

To make sure your review process goes smoothly, check off the tasks in this list before submitting.

### 1. Set up your public profile

If this is your first Adobe integration, set up your public profile.

### 2. Consent Screen details

These details will appear on the consent screen that users will view when signing in to use your app or integration. Information from your public profile will also appear on this screen.

If your app processes personal information, include a link to the privacy policy on your app’s website, per the Adobe Developer Agreement.

This is not a mandatory step.

### 3. Details for approval

Describe what your app does, to help Adobe review it for approval.

### 4. Notes to reviewer

Make sure you’ve included the following in the **Notes to reviewer** feild.

1. **Test credentials** for your integration.
2. **Workflow** of your integration within your product (URL, step-by-step instructions, and more.)
3. **Version** of the SDK you are using.
4. List the intended behavior of any custom export buttons you use with the full editor, modules, or quick actions.

### 5. Provide screenshots

Complete the **Screenshots for approval** section.

Include screenshots that show the full experience of your app or integration, as well as any usage of Adobe branded elements.
Any usage of [Adobe branding](https://partners.adobe.com/exchangeprogram/creativecloud/marketing/brand-assets.html) must be approved before you submit for approval. These screenshots will only be seen by Adobe during the review process.

Screenshots must be in `JPG` or `PNG` file format, be no larger than `5 MB` and `1360px x 800px` dimensions.

## Next steps

Review the [test cases](./test_cases.md) before you submit your integration for review.
