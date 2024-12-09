---
keywords:
  - Developer submission guidelines
  - Review process
  - Review
  - Approval
  - Rejection
title: Test Cases
description: This page explains the submission and review process.
contributors:
  - https://github.com/nimithajalal
---

# Overview

This guides helps you review the test cases before you submit your integration for review.

## Review Test Cases

This guide is designed to help you systematically review and verify all critical aspects of your integration before submitting it for approval. By following this test cases checklist, you can ensure that your integration meets Adobe's brand guidelines, functions as advertised, and provides a seamless user experience. Each step includes specific examples to help you understand and apply the requirements effectively. Let's get started on making your integration the best it can be!

### Public Profile Content

- [ ] Name adheres to Adobe brand guidelines.
  - **Example**: Ensure the public profile name is "Adobe Creative Suite" and not "Adobe123".
- [ ] Logo does not include Adobe icons or dummy icons.
  - **Example**: Verify that the public profile logo is a custom design and does not include Adobe's official logo or placeholder icons.

### App Description

- [ ] Description is well-formatted and not garbled.
  - **Example**: Confirm the app description is formatted correctly and does not display as "�Adobe Integration�".
- [ ] Clearly conveys the integration's functionality.
  - **Example**: Ensure the app description clearly states, "This integration allows users to edit photos directly within Adobe Express."

### Integration Features

- [ ] Performs all advertised features.
  - **Example**: Test that the integration can upload images, apply filters, and export edited photos as advertised.

### Project Creation Guidelines

- [ ] Only developers create projects in the Adobe Developer Console.
  - **Example**: Ensure that only developers are creating projects in the Adobe Developer Console and users are not prompted to create projects just to use the integration.
- [ ] Users are not asked to create projects just to use the integration.
  - **Example**: Verify that users are not asked to create projects in the Console just to use the integration.

### API/Service Access

- [ ] Only requests access to necessary Adobe APIs/services.
  - **Example**: Verify that the project requests access only to the Adobe Photoshop API and not to unrelated services like Adobe Analytics.

### Editor Launch

- [ ] Launches accurately with customized input parameters.
  - **Example**: Ensure the editor launches correctly when parameters like "imageSize=large" are defined.
- [ ] Launches with the correct project when passed a valid Adobe Express project ID.
  - **Example**: Verify the editor opens with the correct project when passed a valid Adobe Express project ID, such as "project123".
- [ ] The editor launches with the right project when passed a valid (existing) Adobe Express project's ID.
  - **Example**: Confirm that the editor launches with the right project when passed a valid (existing) Adobe Express project ID, such as "existingProject456".

### API Call Sequence

- [ ] `edit()` is called only after `create()` or `createWithAsset()` API call.
  - **Example**: Confirm that the `edit()` function is called only after a `create()` API call has been made and the project ID "project123" is saved.

### Website Links

- [ ] Links open successfully.
  - **Example**: Check that the link to the developer's website, such as "https://example.com", opens successfully.
- [ ] Links are safe (checked with URLVoid).
  - **Example**: Ensure the link is safe using URLVoid.

### Contact Information

- [ ] Proper contact details or a contact form provided on GitHub/website link.
  - **Example**: Ensure the GitHub repository includes an email address like "support@example.com" or a contact form link.

### Legal Links

- [ ] Privacy policy URL links to the correct content.
  - **Example**: Confirm that the privacy policy URL "https://example.com/privacy" links to the correct document.
- [ ] Terms of use URL links to the correct content.
  - **Example**: Confirm that the terms of use URL "https://example.com/terms" links to the correct document.

### iFrame Details

- [ ] No truncation or overlapping of buttons.
  - **Example**: Ensure that all buttons and text within the iFrame are fully visible and not cut off or overlapping.

### Existing Assets

- [ ] iFrame loads with the user-selected image if applicable.
  - **Example**: If the integration allows starting with an existing asset, ensure the iFrame loads with the user-selected image, such as "image123.jpg".

### Export Buttons

- [ ] Export buttons appear as declared.
  - **Example**: Ensure the export buttons appear as described in the "Notes for reviewers" section, such as "Export to PNG" and "Export to JPEG".
- [ ] Custom buttons behave as defined.
  - **Example**: Confirm that custom buttons like "Save to Cloud" function as defined.
