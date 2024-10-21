---
keywords:
  - Embed FAQ
  - FAQ
  - Frequently Asked Questions
title: Frequently Asked Questions
description: This page answers common questions about the Adobe Express Embed SDK.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/nimithajalal
---

# FAQ

### Do you have a mobile SDK?

Our efforts are currently focused on desktop apps and web.

### Do my users need to have an Adobe ID?

Users will need to sign in using an existing Adobe ID, or create an account, in order to save projects created. Projects will be saved to the user’s Adobe Express account in a folder named after your integration.

Creating an account for Adobe Express is always free with premium upgrades available.

### Is there a cost to use the SDK?

While there is currently no cost to access the Adobe Express Embed SDK, this may change over time. We look forward to working with our partners and developer community to better understand your users’ needs as we continue to evolve our strategy.

### How does the full editor provided by the SDK differ from the free/paid versions of Adobe Express on the web?

There are two functional differences in the embedded Adobe Express full editor compared to Adobe Express on the web:

Content sharing: In an embedded experience, we assume that a user will save the outcome of their creative project back to the host application in order to continue work in the host application. We have disabled sharing capabilities in embedded Adobe Express experiences.
Content publishing: For the same reason above, you have the ability to pre-define the output type (file types, pixel size, etc.) of the Adobe Express project that is saved to the host application. For this reason, post scheduling and exporting multiple output types are disabled for the embedded Adobe Express editor.

### My user base consists of students/minors. How can I be assured they get appropriate content?

The embedded Adobe Express full editor can be setup to launch student safe content even before a student is signed into the embedded experience. More information about [Adobe & Student Privacy](https://www.adobe.com/privacy/student-policy.html).

### How many domains can be added with a single API key for a service?

You can add upto five domains with a single API key. Additionally, there is no limit on the number of subdomains that you can employ for these services.

### How do I enable SSO for my service?

https://helpx.adobe.com/enterprise/using/sso-faq.html 

### Would Adobe need to approve the integrations before my users can start using it?

Your users can use the integrations, but, we will display a red banner indicating, the experience powred by Adobe Express has not been approved yet. Once we review and approve your app, we will remove this banner. 

### What is the versioning strategy for the SDK?

The SDK follows a continous release model, with newer versions including bug fixes and feature enhancements. We are no longer approving integrations using using SDK V1, V2, or V3.

V1 and V2 are deprecated and V3 will be deprecated in 2024.

Please migrate to V4 as soon as possible: we've created a Migration Guide to help you with the transition.