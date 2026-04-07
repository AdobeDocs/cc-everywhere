---
keywords:
  - Embed FAQ
  - FAQ
  - Frequently Asked Questions
  - SSO with Adobe Express Embed SDK
  - Embed Adobe Full Editor
  - Browser support
  - Operating system support
  - Cost of Embed SDK
  - Allowed-domains
  - Error handling
  - loginMode
  - Delayed login
  - Terms of Use consent
  - Session duration
  - Entitlements
  - Template filtering
  - Integration responsibilities
title: Frequently Asked Questions
description: This page answers common questions about the Adobe Express Embed SDK.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/nimithajalal
  - https://github.com/undavide
---

<SuperHero slots="image, heading, text" variant="fullWidth" textColor="white"/>

![Hero image](../img/FAQ.png)

# FAQ

Find quick answers to your questions about the &lt;br &gt;Adobe Express Embed SDK — from setup and &lt;br &gt;configuration to troubleshooting and &lt;br &gt;user authentication.

## Table of Contents

&lt;!-- The comment below is needed, otherwise the Markdown-all-in-one extensions will automatically create a TOC and mess with the layout --&gt;
&lt;!-- no toc --&gt;

### [Getting Started](#getting-started-1)

- [Do you have a mobile SDK?](#do-you-have-a-mobile-sdk)
- [Is there a cost to use the SDK?](#is-there-a-cost-to-use-the-sdk)
- [What is the versioning strategy for the SDK?](#what-is-the-versioning-strategy-for-the-sdk)

### [SDK Access & Approval](#sdk-access--approval-1)

- [Can I still use the SDK for personal or experimental projects?](#can-i-still-use-the-sdk-for-personal-or-experimental-projects)
- [How do I request access?](#how-do-i-request-access)
- [What criteria are used to evaluate access requests?](#what-criteria-are-used-to-evaluate-access-requests)
- [Would Adobe need to approve the integrations before my users can start using it?](#would-adobe-need-to-approve-the-integrations-before-my-users-can-start-using-it)
- [What happens to existing integrations?](#what-happens-to-existing-integrations)

### [User Requirements & Authentication](#user-requirements--authentication-1)

- [Do my users need to have an Adobe ID?](#do-my-users-need-to-have-an-adobe-id)
- [How do I enable SSO for my service?](#how-do-i-enable-sso-for-my-service)
- [When are users required to sign in when using the Embed SDK?](#when-are-users-required-to-sign-in-when-using-the-embed-sdk)
- [Is there a Terms of Use or consent flow during login?](#is-there-a-terms-of-use-or-consent-flow-during-login)
- [How long do user sessions last?](#how-long-do-user-sessions-last)
- [Who manages user accounts and authentication?](#who-manages-user-accounts-and-authentication)

### [Features & Functionality](#features--functionality-1)

- [How does the full editor provided by the SDK differ from the free/paid versions of Adobe Express on the web?](#how-does-the-full-editor-provided-by-the-sdk-differ-from-the-freepaid-versions-of-adobe-express-on-the-web)
- [My user base consists of students/minors. How can I be assured they get appropriate content?](#my-user-base-consists-of-studentsminors-how-can-i-be-assured-they-get-appropriate-content)
- [How are user entitlements (free vs premium) handled?](#how-are-user-entitlements-free-vs-premium-handled)
- [Can I control which templates are shown to users?](#can-i-control-which-templates-are-shown-to-users)
- [Can the SDK be launched from different entry points in my application?](#can-the-sdk-be-launched-from-different-entry-points-in-my-application)
- [How are assets handled when users download or save their work?](#how-are-assets-handled-when-users-download-or-save-their-work)

### [Configuration & Setup](#configuration--setup-1)

- [How many domains can be added with a single API key for a service?](#how-many-domains-can-be-added-with-a-single-api-key-for-a-service)

### [Integration Responsibilities](#integration-responsibilities-1)

- [Which parts of the experience are managed by Adobe versus my application?](#which-parts-of-the-experience-are-managed-by-adobe-versus-my-application)

### [Technical Requirements](#technical-requirements-1)

- [Which web browsers are supported?](#which-web-browsers-are-supported)
- [What operating systems are supported?](#what-operating-systems-are-supported)

### [Troubleshooting](#troubleshooting-1)

- [I run into the "Adobe Express is not available" error](#i-run-into-the-adobe-express-is-not-available-error)
- [How can I debug and troubleshoot errors effectively?](#how-can-i-debug-and-troubleshoot-errors-effectively)

### [Support](#support-1)

- [Who can I contact for help?](#who-can-i-contact-for-help)

## Getting Started

### Do you have a mobile SDK?

Our efforts are currently focused on desktop apps and web.

### Is there a cost to use the SDK?

Access to the Adobe Express Embed SDK now requires a business approval process. [Request access](https://www.adobe.com/go/embed-access) to submit your use case for evaluation. For more details, see [SDK Access & Approval](#sdk-access--approval-1).

### What is the versioning strategy for the SDK?

- The SDK follows a continous release model, with newer versions including bug fixes and feature enhancements. We are no longer approving integrations using using SDK V1, V2, or V3.
- V1 and V2 are deprecated and V3 will be deprecated in 2024.
- Please migrate to V4 as soon as possible: we've created a [Migration Guide](../../concepts/migration-v3-v4.md) to help you with the transition.

<HorizontalLine />

## SDK Access & Approval

### Can I still use the SDK for personal or experimental projects?

Access is currently focused on use cases with clear business or user impact. We strongly recommend validating your use case through the [request process](https://www.adobe.com/go/embed-access) before starting any integration.

### How do I request access?

Use [this form](https://www.adobe.com/go/embed-access) to submit your use case. Our team will review and follow up.

### What criteria are used to evaluate access requests?

We prioritize use cases that demonstrate clear business impact. This includes supporting adoption of Adobe Express enterprise customers, paid usage of the Embed SDK in the context of a strategic partnership, or serving a well-defined user base (starting from 1 Million users).

### Would Adobe need to approve the integrations before my users can start using it?

Your users can use the integrations, but, we will display a red banner indicating, `The experience powered by Adobe Express has not been approved yet`. Once we review and approve your app, we will remove this banner.

### What happens to existing integrations?

Approved integrations will remain active until December 2027. After that, they'll need to go through the new business approval process.

<HorizontalLine />

## User Requirements & Authentication

### Do my users need to have an Adobe ID?

Users will need to sign in using an existing Adobe ID, or create an account, in order to save projects created. Projects will be saved to the user's Adobe Express account in a folder named after your integration.

Creating an account for Adobe Express is always free with premium upgrades available.

### How do I enable SSO for my service?

To enable Single Sign-On (SSO) for your service, when using Adobe express Embed SDK, you need to set it up using the Adobe admin console.

Learn to use the Adobe Admin Console to set up [Single Sign-On (SSO)](https://helpx.adobe.com/in/enterprise/using/sso-overview.html) with your Identity provider and troubleshoot setup-related problems.

### When are users required to sign in when using the Embed SDK?

Authentication timing is controlled with the `loginMode` parameter during SDK initialization. With `loginMode: "delayed"`, users can start editing without signing in and are prompted to authenticate only when an action requires it (for example, saving, exporting, or accessing premium features). That pattern reduces friction and is common in partner integrations.

For more details, see `loginMode` in the [Initialize SDK Reference](../../../reference/initialize/index.md#configparams).

### Is there a Terms of Use or consent flow during login?

Yes. The first time users authenticate, they must accept Adobe’s Terms of Use and Privacy Policy before proceeding, regardless of `loginMode`. For supported workflows (such as Edit Image), you can use the `inlineTOUConsent` option to show that consent inline in the embedded experience instead of only at login.

### How long do user sessions last?

Session length follows the user’s Adobe account: sign-in typically stays valid for up to 14 days, while the SDK uses short-lived client tokens (about 5 minutes). Users are not asked to sign in again until that Adobe account session ends.

### Who manages user accounts and authentication?

Adobe manages sign-in for Express through the user’s Adobe account. Your application does not store Adobe credentials; users can use any valid Adobe account, including one they created outside your app.

<HorizontalLine />

## Features & Functionality

### How does the full editor provided by the SDK differ from the free/paid versions of Adobe Express on the web?

There are two functional differences in the embedded Adobe Express full editor compared to Adobe Express on the web:

- Content sharing: In an embedded experience, we assume that a user will save the outcome of their creative project back to the host application in order to continue work in the host application. We have disabled sharing capabilities in embedded Adobe Express experiences.
- Content publishing: For the same reason above, you have the ability to pre-define the output type (file types, pixel size, etc.) of the Adobe Express project that is saved to the host application. For this reason, post scheduling and exporting multiple output types are disabled for the embedded Adobe Express editor.

### My user base consists of students/minors. How can I be assured they get appropriate content?

The embedded Adobe Express full editor can be setup to launch student safe content even before a student is signed into the embedded experience. More information about [Adobe & Student Privacy](https://www.adobe.com/privacy/student-policy.html).

### How are user entitlements (free vs premium) handled?

Entitlements follow the user’s Adobe account subscription: free accounts have limited templates, assets, and generative features; premium accounts have broader access and higher limits. Your app can supply premium access or let users sign in with their own Adobe account.

To control how premium generative features appear for users without entitlements, you can use configuration such as `SHOW_FIREFLY_PAYWALL_FOR_UNENTITLED_USERS` (whether they see a paywall when using those features).

### Can I control which templates are shown to users?

Yes. You can configure template discovery using `appConfig` parameters such as `selectedCategory` and `categorySearchText`.

For more details, see [BaseEditorAppConfig](https://developer.adobe.com/express/embed-sdk/docs/v4/shared/src/types/editor/app-config-types/interfaces/base-editor-app-config).

### Can the SDK be launched from different entry points in my application?

Yes. You can launch the Embed SDK from any UI element in your application, such as buttons, template selections, or custom workflows.

This enables you to design flexible user journeys based on your application’s requirements.

### How are assets handled when users download or save their work?

When users download assets, files are saved locally to the user’s device.

When users save assets through the SDK, the SDK returns asset data (for example, base64). Your application is responsible for storing and managing these assets.

<HorizontalLine />

## Configuration & Setup

### How many domains can be added with a single API key for a service?

You can add upto five domains with a single API key. Additionally, there is no limit on the number of subdomains that you can employ for these services. Use wildcards to enter [multiple subdomains](../express-unavailable-error.md#wrong-domain-or-port) (`*.my-domain.com`) or commas to separate multiple domains (`www.domain-1.com`, `www.domain-2.com`). During local development, you can include ports greater than `1023` with localhost (example, `localhost:3000`). Standard ports (`80`, `443`) will be used for non-localhost domains.

<HorizontalLine />

## Integration Responsibilities

### Which parts of the experience are managed by Adobe versus my application?

Your application is responsible for building and managing its own user interface, including:

- Marketing or landing pages
- Template galleries
- Asset libraries

The Embed SDK provides the Adobe Express editing experience within an embedded environment.

When assets are saved, the SDK returns asset data, and your application is responsible for storing and managing those assets.

<HorizontalLine />

## Technical Requirements

### Which web browsers are supported?

- Google Chrome: Version 100 or later
- Microsoft Edge: Version 107 or later
- Safari: Version 17 or later
- Firefox: Version 117 or later

You can refer to the complete [technical requirements](../../quickstart/technical-requirements.md) here.

### What operating systems are supported?

- Windows: Version 10 or later
- macOS: Version 11 or later
- ChromeOS

You can refer to the complete [technical requirements](../../quickstart/technical-requirements.md) here.

<HorizontalLine />

## Troubleshooting

### I run into the "Adobe Express is not available" error

Please refer to this [troubleshooting guide](../express-unavailable-error.md).

### How can I debug and troubleshoot errors effectively?

Refer to the [error handling guide](../../concepts/error-handling.md) provided with the SDK documentation. It includes detailed information on understanding exceptions, accessing error metadata, and best practices for handling different types of errors.

<HorizontalLine />

## Support

### Who can I contact for help?

If you have any questions about the process, please contact [ccintrev@adobe.com](mailto:ccintrev@adobe.com).
