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
- **Action for host** : What actions you can take to recover from the error.
- **User experience** : The guide explains how these errors impact the user.
- **Recoverability** : Let you know if it is a recoverable error code.

## Detailed Error Code Descriptions

### `INVALID_PARAMETERS`

- **Meaning** : Arguments in API are not correct.
- **Action for host** : Consult [documentation here](../../reference/index.md) to see permissible values.
- **User Experience/Recoverability** : NA
- **Example** : If an API call requires a specific parameter format and the provided parameter does not meet this format, the application should display an error message like, "Invalid parameters."

### `USER_ID_MISMATCH`

- **Meaning** : Occurs when the user ID does not match the expected value.
- **Action for host** : Ensure the user ID being used is correct and matches the expected value.
- **User Experience/Recoverability** : Recoverable
- **Example** : If a user tries to access their account but the user ID does not match, the application should prompt, "User ID mismatch. Please verify your user ID and try again."

### `ACCESS_DENIED`

- **Meaning** : The user does not have the necessary permissions to access the resource or in case of an unsupported browser.
- **Action for host** : Verify and grant the user the necessary permissions.
- **User Experience/Recoverability** : Recoverable
- **Example** : If a user tries to access a restricted area, the application should display, "Access denied. You do not have the necessary permissions to access this resource."

### `TARGET_APP_ERROR`

- **Meaning** : An error occurred in the target application.
- **Action for host** : Investigate the specific error in the target application and resolve it.
- **User Experience/Recoverability** : Depends on the specific error.
- **Example** : If an application fails to load due to an internal error, the application should display a message like, "An error occurred in the target application. Please try again later."

### `ASSERTION_ERROR`

- **Meaning** : An assertion failed.
- **Action for host** : NA
- **User Experience/Recoverability** : Depends on the specific error.
- **Example** : If an assertion fails, the application should log the error and provide a message like, "An unexpected error occurred. Please contact support."

### `NETWORK_ERROR`

- **Meaning** : A network error occurred.
- **Action for host** : Ensure the network connection is stable and retry the request.
- **User Experience/Recoverability** : Recoverable
- **Example** : If a network error occurs, the application should retry the request and provide a message like, "Network error. Retrying..."

### `GENERIC_ERROR`

- **Meaning** : This may occur in some scenarios internal to SDK. More info can be found in subError.
- **Action for host** : NA
- **User Experience/Recoverability** : This depends on the error (It can be considered non-recoverable for now).
- **Example** : For a generic error, the application should provide a message that includes the subError details if available. For instance, "An unexpected error occurred. Please contact support with the following error code: [subError]."

### `SCRIPT_LOAD_ERROR`

- **Meaning** : An error occurred while loading a script. This error occurs when you are developing a plugin.
- **Action for host** : Ensure the script is correctly configured and available.
- **User Experience/Recoverability** : Recoverable
- **Example** : If a script load error occurs, the application should retry loading the script and provide a message like, "Error loading script. Retrying..."

### `SDK_INITIALIZATION_ERROR`

- **Meaning** : An error occurred during SDK initialization.
- **Action for host** : Ensure the SDK is correctly configured and initialized. Checkout the [reference documentation here](../../reference/initialize/index.md) for Initialization.
- **User Experience/Recoverability** : Recoverable
- **Example** : NA
