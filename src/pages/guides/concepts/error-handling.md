---
keywords:
 - Adobe Express
 - Embed SDK
 - SDK Errors
 - Error handling
 - User Experience
 - Recoverability
title: Error Handling
description: Error Handling for Adobe Express Embed SDK
contributors:
 - https://github.com/nimithajalal
---

# Error Handling

Adobe Express Embed SDK Error Handling Guide.

![Error handling hero image](./img/error_handling_hero.png)

## Overview

Effective error handling is crucial for maintaining a robust and user-friendly application. This guide provides a comprehensive approach to managing errors, ensuring the host application developers and end-users can navigate issues efficiently and effectively.

## Key Components

The guide provides key components such as Error codes,their meaning,  action for host application, the end-user experience for each error, and recoverability.

- **Error identification** : Understanding the types of errors that can occur, such as syntax, runtime, and logical errors.
- **What to do** : What actions you can take to recover from the error.
- **User experience** : The guide explains how these errors impact the user.
- **Recoverability** : Let you know if it is a recoverable error code.

## Detailed Error Code Descriptions

### `INVALID_PARAMETERS`

- **What it means** : Arguments in API are not correct.
- **What to do** : Consult [documentation here](../../reference/index.md) to see permissible values.
- **User Experience/Recoverability** : NA
- **Example** : If an API call requires a specific parameter format and the provided parameter does not meet this format, the application should display an error message like, "Invalid parameters."

### `USER_ID_MISMATCH`

- **What it means** : Occurs when the user ID does not match the expected value.
- **What to do** : Ensure the user ID being used is correct and matches the expected value.
- **User Experience/Recoverability** : Recoverable
- **Example** : If a user tries to access their account but the user ID does not match, the application should prompt, "User ID mismatch. Please verify your user ID and try again."

### `ACCESS_DENIED`

- **What it means** : The user does not have the necessary permissions to access the resource or in case of an unsupported browser.
- **What to do** : Verify and grant the user the necessary permissions.
- **User Experience/Recoverability** : Recoverable
- **Example** : If a user tries to access a restricted area, the application should display, "Access denied. You do not have the necessary permissions to access this resource."

### `TARGET_APP_ERROR`

- **What it means** : An error occurred in the target application.
- **What to do** : Investigate the specific error in the target application and resolve it.
- **User Experience/Recoverability** : Depends on the specific error.
- **Example** : If an application fails to load due to an internal error, the application should display a message like, "An error occurred in the target application. Please try again later."

### `ASSERTION_ERROR`

- **What it means** : An assertion failed.
- **What to do** : NA
- **User Experience/Recoverability** : Depends on the specific error.
- **Example** : If an assertion fails, the application should log the error and provide a message like, "An unexpected error occurred. Please contact support."

### `NETWORK_ERROR`

- **What it means** : A network error occurred.
- **What to do** : Ensure the network connection is stable and retry the request.
- **User Experience/Recoverability** : Recoverable
- **Example** : If a network error occurs, the application should retry the request and provide a message like, "Network error. Retrying..."

### `GENERIC_ERROR`

- **What it means** : This may occur in some scenarios internal to SDK. More info can be found in subError.
- **What to do** : NA
- **User Experience/Recoverability** : This depends on the error (It can be considered non-recoverable for now).
- **Example** : For a generic error, the application should provide a message that includes the subError details if available. For instance, "An unexpected error occurred. Please contact support with the following error code: [subError]."

### `SCRIPT_LOAD_ERROR`

- **What it means** : An error occurred while loading a script. This error occurs when you are developing a plugin.
- **What to do** : Ensure the script is correctly configured and available.
- **User Experience/Recoverability** : Recoverable
- **Example** : If a script load error occurs, the application should retry loading the script and provide a message like, "Error loading script. Retrying..."

### `SDK_INITIALIZATION_ERROR`

- **What it means** : An error occurred during SDK initialization.
- **What to do** : Ensure the SDK is correctly configured and initialized. Checkout the [reference documentation here](../../reference/initialize/index.md) for Initialization.
- **User Experience/Recoverability** : Recoverable
- **Example** : NA

### SDK_NOT_SUPPORTED

- **What it means**: The SDK you're trying to use isn't supported on this platform.
- **What to do**: Make sure your platform meets the SDK's requirements. Checkout the [reference documentation here](../../reference/initialize/index.md).
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: Trying to use the SDK on an unsupported platform.
  - **Solution**: Verify that your platform meets the SDK requirements.

<!-- **Code Sample**:
    ```javascript
    if (!isPlatformSupported()) {
        console.error("SDK_NOT_SUPPORTED: The current platform is not supported.");
    }
    ```-->

### SDK_ALREADY_INITIALIZED

- **What it means**: The SDK has already been initialized once.
- **What to do**: Ensure the SDK is initialized only once. Checkout the [reference documentation here](../../reference/initialize/index.md) for Initialization.
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: Calling `initialize()` multiple times.
  - **Solution**: Check your code to ensure `initialize()` is called only once.

<!--**Code Sample**:
    ```javascript
    if (!sdkInitialized) {
        initializeSDK();
        sdkInitialized = true;
    } else {
        console.warn("SDK_ALREADY_INITIALIZED: The SDK has already been initialized.");
    }
    ```-->

### SDK_INITIALIZATION_IN_PROGRESS

- **What it means**: The SDK is currently being initialized.
- **What to do**: Ensure the SDK is initialized only once. Checkout the [reference documentation here](../../reference/initialize/index.md) for Initialization.
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: Trying to initialize the SDK while it's already initializing.
  - **Solution**: Implement a check to prevent multiple initialization calls.

<!--**Code Sample**:
    ```javascript
    if (initializationInProgress) {
        console.warn("SDK_INITIALIZATION_IN_PROGRESS: SDK initialization is already in progress.");
    } else {
        initializationInProgress = true;
        initializeSDK();
    }
    ```-->

### SDK_NOT_INITIALIZED

- **What it means**: The SDK hasn't been initialized yet.
- **What to do**: Make sure to initialize the SDK.  Checkout the [reference documentation here](../../reference/initialize/index.md) for Initialization.
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: Trying to use SDK functions before initializing it.
  - **Solution**: Ensure `initialize()` is called at the start of your application.

<!--**Code Sample**:
    ```javascript
    if (!sdkInitialized) {
        console.error("SDK_NOT_INITIALIZED: Please initialize the SDK before using its functions.");
    } else {
        // Proceed with SDK functions
    }
    ```-->

### WORKFLOW_ALREADY_IN_PROGRESS

- **What it means**: There's already an active workflow.
- **What to do**: Ensure only one workflow is active at a time. Checkout the reference documentation for each workflow [here](../../reference/index.md).
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: Starting a new workflow while another is still active.
  - **Solution**: Implement logic to check for active workflows before starting a new one.

<!--**Code Sample**:
    ```javascript
    if (workflowInProgress) {
        console.warn("WORKFLOW_ALREADY_IN_PROGRESS: Another workflow is currently active.");
    } else {
        startWorkflow();
        workflowInProgress = true;
    }
    ```-->

### INVALID_IMAGE_DATA_URL

- **What it means**: While using [`createWithAsset()`](../../reference/cc-everywhere/editor/index.md#createwithasset), the provided `Base64` image data is invalid.
- **What to do**: Ensure the image data is valid.
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: Providing an incorrectly formatted Base64 image data URL.
  - **Solution**: Validate and correct the Base64 data before passing it to the SDK.

<!--**Code Sample**:
    ```javascript
    function isValidBase64(data) {
        try {
            atob(data);
            return true;
        } catch (e) {
            return false;
        }
    }

    if (!isValidBase64(imageDataUrl)) {
        console.error("INVALID_IMAGE_DATA_URL: The provided image data URL is invalid.");
    }
    ```-->

### INVALID_VIDEO_DATA_URL

- **What it means**: While using [QuickAction](../../reference/cc-everywhere/quick-action/index.md), the provided video data URL is invalid.
- **What to do**: Ensure the video data URL is valid.
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: Supplying a malformed video data URL.
  - **Solution**: Verify the video URL format and correct any issues.
  
<!--- **Code Sample**:
    ```javascript
    function isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    }

    if (!isValidUrl(videoDataUrl)) {
        console.error("INVALID_VIDEO_DATA_URL: The provided video data URL is invalid.");
    }
    ```-->

### INVALID_ASSET_TYPE_URL

- **What it means**: While using [`createWithAsset()`](../../reference/cc-everywhere/editor/index.md#createwithasset), the provided asset type URL is invalid.
- **What to do**: Ensure the asset type URL is valid.
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: Using an unsupported URL format for an asset.
  - **Solution**: Ensure the URL conforms to the expected format for assets.

<!--- **Code Sample**:
    ```javascript
    if (!isValidUrl(assetTypeUrl)) {
        console.error("INVALID_ASSET_TYPE_URL: The provided asset type URL is invalid.");
    }
    ```-->

### INVALID_ASSET_TYPE

- **What it means**: When [merging videos](../../reference/cc-everywhere/quick-action/index.md#mergevideo), the assets should only be either images or videos.
- **What to do**: Ensure the assets are either images or videos.
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: Attempting to merge a mix of images and videos.
  - **Solution**: Use only images or only videos for the merge operation.

<!--- **Code Sample**:
    ```javascript
    if (!assets.every(asset => asset.type === 'image' || asset.type === 'video')) {
        console.error("INVALID_ASSET_TYPE: Assets must be either all images or all videos.");
    }
    ```-->

### INVALID_ASSET_DATA_TYPE

- **What it means**: While using [`createWithAsset()`](../../reference/cc-everywhere/editor/index.md#createwithasset), the provided asset data type is invalid.
- **What to do**: Ensure the asset data type is valid.
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: Providing an unsupported data type for an asset.
  - **Solution**: Verify and use a supported data type for the asset.

<!--**Code Sample**:
    ```javascript
    const supportedDataTypes = ['image/jpeg', 'image/png', 'video/mp4'];

    if (!supportedDataTypes.includes(assetDataType)) {
        console.error("INVALID_ASSET_DATA_TYPE: The provided asset data type is invalid.");
    }
    ```-->

### INVALID_PUBLISH_FILE_TYPE

- **What it means**: The publish file type for an export option is not allowed.
- **What to do**: Ensure the publish file type is a subset of the allowed file types.
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: Trying to export a file in an unsupported format.
  - **Solution**: Use one of the allowed file types for export.

<!--**Code Sample**:
    ```javascript
    const allowedFileTypes = ['pdf', 'docx', 'xlsx'];

    if (!allowedFileTypes.includes(publishFileType)) {
        console.error("INVALID_PUBLISH_FILE_TYPE: The publish file type is not allowed.");
    }
    ```-->

### INVALID_DOWNLOAD_ALL_EXPORT_OPTION

- **What it means**: The "download all" target is missing in export options.
- **What to do**: Ensure the "download all" target is present in the export options.
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: Missing "download all" target in export options.
  - **Solution**: Add the "download all" target to the export options.

<!--- **Code Sample**:
    ```javascript
    if (!exportOptions.includes('downloadAll')) {
        console.error("INVALID_DOWNLOAD_ALL_EXPORT_OPTION: The 'download all' target is missing in export options.");
    }
    ```-->

### TARGET_LOAD_TIMED_OUT

- **What it means**: The target app didn't open within the specified time. In the case of Embed, users may encounter a `TARGET_LOAD_TIMED_OUT` error, while in standalone express, they may see the Adobe express loader icon. If the target app doesn't open within the time(in ms) specified in `loadTimeout` the error callback is invoked with the error code TARGET_LOAD_TIMED_OUT. The default is 90ms. However, you have the flexibility to configure your own timeout settings to override this default limit.
- **What to do**: Retry the operation.
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: The target app fails to load within the timeout period.
  - **Solution**: Increase the timeout period or optimize the target app loading process.

<!-- **Code Sample**:
    ```javascript
    setTimeout(() => {
        console.error("TARGET_LOAD_TIMED_OUT: The target app did not load in the specified time.");
    }, timeoutDuration);
    ```-->

### TARGET_LOAD_ERROR

- **What it means**: The target app encountered an unspecified load error.
- **What to do**: Retry the operation.
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: The target app encounters an unspecified load error.
  - **Solution**: Investigate and resolve any underlying issues causing the load error.

### TARGET_LOAD_FAILED

- **What it means**: The target app failed to load.
- **What to do**: Retry the operation or investigate the cause of the failure.
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: The target app fails to load due to an error.
  - **Solution**: Retry the operation or check for specific errors causing the failure.

<!--- **Code Sample**:
    ```javascript
    try {
        loadTargetApp();
    } catch (error) {
        console.error("TARGET_LOAD_FAILED: The target app failed to load.", error);
        // Retry logic or error handling
    }
    ```-->

### NO_ACTIVE_WORKFLOW

- **What it means**: You're trying to call [`close`](../../reference/cc-everywhere/close/index.md) or [`terminate`](../../reference/cc-everywhere/terminate/index.md) when there's no active workflow.
- **What to do**: Ensure a workflow is active before calling `close` or `terminate`.
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: Attempting to close or terminate a workflow when none is active.
  - **Solution**: Check if a workflow is active before calling `close` or `terminate`.

<!--- **Code Sample**:
    ```javascript
    if (!workflowInProgress) {
        console.error("NO_ACTIVE_WORKFLOW: No active workflow to close or terminate.");
    } else {
        // Proceed with closing or terminating the workflow
    }
    ```-->

### ACTION_LAUNCH_ERROR

- **What it means**: This is a high-level error indicating that the workflow launch has failed.
- **What to do**: Investigate and resolve the cause of the workflow launch failure.
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: An error occurs when trying to launch a workflow.
  - **Solution**: Implement error handling and retry logic to address the failure.

<!--**Code Sample**:
    ```javascript
    try {
        launchWorkflow();
    } catch (error) {
        console.error("ACTION_LAUNCH_ERROR: Failed to launch workflow.", error);
        // Retry logic or error handling
    }
    ```-->

### INVALID_ASPECT_RATIO_VALUE

- **What it means**: While using [`createWithAsset()`](../../reference/cc-everywhere/editor/index.md#createwithasset), the provided aspect ratio value is invalid.
- **What to do**: Ensure the aspect ratio value is valid.
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: Providing an invalid aspect ratio value.
  - **Solution**: Validate the aspect ratio value before using it.

<!--**Code Sample**:
    ```javascript
    function isValidAspectRatio(value) {
        return /^(\d+):(\d+)$/.test(value);
    }

    if (!isValidAspectRatio(aspectRatio)) {
        console.error("INVALID_ASPECT_RATIO_VALUE: The provided aspect ratio value is invalid.");
    }
    ```-->

### INVALID_SIZE_VALUE

- **What it means**: While using [`createWithAsset()`](../../reference/cc-everywhere/editor/index.md#createwithasset), the dimensions (aspect ratio, width, and height) of the asset are invalid.
- **What to do**: Validate the dimensions to ensure they meet the required constraints.
- **User Experience**: This issue can be fixed.
- **Example**:
  - **Scenario**: Providing dimensions that do not meet the aspect ratio, width, or height constraints.
  - **Solution**: Validate the aspect ratio, width, and height before using the asset.

<!--**Code Sample**:
    ```javascript
    function isValidDimensions(aspectRatio, width, height) {
        const isValidAspectRatio = /^(\d+):(\d+)$/.test(aspectRatio);
        const isValidWidth = width > 0;
        const isValidHeight = height > 0;
        return isValidAspectRatio && isValidWidth && isValidHeight;
    }

    if (!isValidDimensions(aspectRatio, width, height)) {
        console.error("INVALID_SIZE_VALUE: The provided dimensions (aspect ratio, width, height) are invalid.");
    }
    ``` -->
