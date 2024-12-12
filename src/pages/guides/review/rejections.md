---
keywords:
  - Developer submission guidelines
  - Review process
  - Review
  - Approval
  - Rejection
title: Rejection reasons
description: This page explains the submission and review process.
contributors:
  - https://github.com/nimithajalal
---

# Rejection reasons

Learn how to address common integration rejection reasons with this comprehensive step-by-step guide.

## Overview

Submitting your app for review can be a meticulous process, and it's not uncommon to encounter some hurdles along the way.This guide provides a step-by-step approach to help you navigate through the most frequent rejection reasons and ensure your app meets all the necessary criteria.

## Step-by-Step Guide for Common Rejection Reasons

### 1. Accessibility and Test Credentials

- Ensure your app or integration is accessible via free user sign-up.
- Provide test credentials to the review team for testing purposes.
- **Example**: Ensure that users can sign up for free to access your app. Provide test credentials like:
  - Username: `testuser@example.com`
  - Password: `TestPassword123`

### 2. SDK Version

- Verify that your app is built on V4 SDK version.
- Note that versions V3 and below are not accepted.
- **Example**: If your app is using SDK version V3, update it to the latest version, such as V4. Check the SDK documentation for [migragtion guide](../concepts/migration_v3_v4.md) from V3 to V4.

### 3. Website Functionality

- Check that your website is fully functional and accessible.
- **Example**: Before submitting your app, ensure your website is live and accessible. Test it by visiting the URL and checking all links and features. If your website is `www.example.com`, make sure it loads correctly and all pages are operational.

### 4. Environment Deployment

- Deploy your app in a production environment.
- Avoid using a staging environment for the review process.
- **Example**: Deploy your app to a production environment. For instance, if your staging URL is `staging.example.com`, move it to `www.example.com` before submission.

### 5. App Description

- Complete the app description in the "Notes to reviewer" section.
- Clearly state what your app integrates (full editor, modules, and/or quick actions).
- Specify where and how to invoke these integrations to ensure all entry points can be tested.
- **Example**: Provide a detailed description like:
  - "Our app integrates with the full editor, allowing users to edit documents directly. It also includes modules for image processing and quick actions for one-click enhancements. To test, navigate to the 'Edit' tab and select 'Image Processing'."

### 6. App Name Consistency

- Ensure your app name matches the name of your project in Adobe Developer Console.
- Maintain consistency of the `appName` throughout your application.
- This consistency is crucial for analytics checks and to avoid discrepancies.
- **Example**: If your app is named "PhotoEditor Pro" in the Adobe Developer Console, ensure this name is used consistently throughout your application. Avoid discrepancies like using "PhotoEditor" in some places and "PhotoEditor Pro" in others.

### Here are some steps you can take to address the issues and improve your chances of approval

### 1. Review Feedback Thoroughly

- Carefully read the feedback provided by the review team. They usually specify the reasons for rejection and what needs to be fixed.

### 2. Address Specific Issues

- Go through each rejection reason and make the necessary changes. For example, if the issue is with test credentials, ensure they are correct and accessible.

### 3. Seek Clarification

- If you have any questions, feel free to contact us at [ccintrev@adobe.com](mailto:ccintrev@adobe.com) or reach out on our [Adobe Express Embed SDK community forum](https://community.adobe.com/t5/express-embed-sdk/ct-p/ct-express-embed-sdk?page=1&sort=latest_replies&lang=all&tabid=all).

### 4. Test Your App

- Before resubmitting, thoroughly test your app to ensure all issues have been resolved. This includes checking functionality, accessibility, and consistency.

### 5. Update Notes to reviewer section

- Make sure the "Notes to reviewer" section, is complete and clear. Provide detailed instructions on how to test your app.

### 6. Consult the Guidelines

- Revisit the [submission guidelines](./submission_guidelines.md) and [test cases](./test_cases.md) to ensure your app meets all the requirements. 

### 7. Resubmit

- Once you have addressed all the issues, resubmit your app for review. Highlight the changes you have made in the "Notes to reviewer" section.

Persistence is key! Each rejection is an opportunity to improve your app and make it even better. If you need any specific help or have questions about the feedback, feel free to ask!
