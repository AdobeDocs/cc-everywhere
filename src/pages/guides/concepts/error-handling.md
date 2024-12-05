---
keywords:
  - Adobe Express
  - Embed SDK
title: Error Handling
description: Error Handling
contributors:
  - https://github.com/nimithajalal
---

# Error Handling

Adobe Express Embed SDK Error Handling Guide

![Error handling hero image](./img/error_handling_hero.png)

## Overview

Effective error handling is crucial for maintaining a robust and user-friendly application. This guide provides a comprehensive approach to managing errors, ensuring that both developers and users can navigate issues efficiently and effectively.

### Purpose

The primary goal of this guide is to outline best practices for identifying, managing, and recovering from errors. By implementing these practices, developers can enhance the stability and reliability of their applications, while providing users with clear, actionable feedback when issues arise.

### Key Components

**Error Identification:** Understanding the types of errors that can occur, such as syntax errors, runtime errors, and logical errors. This section covers how to detect and categorize these errors effectively.

**Error Logging:** Implementing robust logging mechanisms to capture detailed information about errors. This helps in diagnosing issues and understanding their root causes.

**User Experience:** Ensuring that error messages are clear, concise, and helpful. Users should be informed about what went wrong and how they can potentially resolve the issue.

**Recoverability:** Strategies for making errors recoverable whenever possible. This includes retry mechanisms, fallbacks, and providing users with steps to correct the problem.

## Detailed Error Code Descriptions

### INVALID_PARAMETERS

**Meaning**: Arguments in API are not correct.

**Action for host**: Consult documentation here to see permissible values.

**User Experience/Recoverability**: NA

**Example**: If an API call requires a specific parameter format and the provided parameter does not meet this format, the application should display an error message like, "Invalid parameters. Please check the documentation for the correct format."

### INVALID_TOKEN NA 1P

**Meaning**: ErrorMessage: INVALID_TOKEN: The validity of the token has expired. BAD_SIGNATURE: Token is manipulated.

**Action for host**: A valid token must be passed.

**User Experience/Recoverability**: Recoverable

**Example**: If the token has expired or is manipulated, the application should request a new token. A message such as, "Invalid token. Please refresh the page or log in again," can help the user understand the need to obtain a new token.

### VALIDATE_TOKEN_FAILED - NA 1P

**Meaning**: The API to validate the token failed.

**Action for host**: NA

**User Experience/Recoverability**: Recoverable in specific cases

**Example**: If token validation fails, the application might display a message like, "Token validation failed. Please try again later." This indicates that the issue might be temporary and could be resolved with a retry.

### USER_ID_MISMATCH needs to confirm

**Meaning**: Occurs when the user ID does not match the expected value.

**Action for host**: Ensure the user ID being used is correct and matches the expected value.

**User Experience/Recoverability**: Recoverable

**Example**: If a user tries to access their account but the user ID does not match, the application should prompt, "User ID mismatch. Please verify your user ID and try again."

### LOGIN_ERROR

**Meaning**: The user's session has timed out in the target app. OR SSO couldn’t be performed successfully due to the absence of some information required by the target app. (like DOB, TOU etc.)

**Action for host**: NA

**User Experience/Recoverability**: Recoverable

**Example**: If the user's session has timed out or SSO failed, the application should provide a clear message. For example, "Your session has timed out. Please log in again," or "SSO failed due to missing information. Please complete your profile by visiting this link."

### ACCESS_DENIED

**Meaning**: The user does not have the necessary permissions to access the resource or in case of unsupported browser.

**Action for host**: Verify and grant the necessary permissions to the user.

**User Experience/Recoverability**: Recoverable

**Example**: If a user tries to access a restricted area, the application should display, "Access denied. You do not have the necessary permissions to access this resource."

### TARGET_APP_ERROR

**Meaning**: An error occurred in the target application.

**Action for host**: Investigate the specific error in the target application and resolve it.

**User Experience/Recoverability**: Depends on the specific error

**Example**: If an application fails to load due to an internal error, the application should display a message like, "An error occurred in the target application. Please try again later."

### JSON_STRINGIFY_ERROR NA

**Meaning**: An error occurred while converting an object to a JSON string, often due to circular references.

**Action for host**: Ensure the object being stringified does not contain circular references.

**User Experience/Recoverability**: Recoverable

**Example**: If an object contains circular references, the application should handle the error and provide a message like, "An error occurred while processing your request. Please try again."

### JSON_PARSE_ERROR NA

**Meaning**: An error occurred while parsing a JSON string, often due to invalid JSON syntax.

**Action for host**: Ensure the JSON string being parsed is valid.

**User Experience/Recoverability**: Recoverable

**Example**: If a JSON string is invalid, the application should handle the error and provide a message like, "An error occurred while processing your request. Please ensure the data is correctly formatted."

### ERROR_STACK_NOT_AVAILABLE NA

**Meaning**: The error stack trace is not available.

**Action for host**: Ensure that error handling and logging mechanisms are properly configured to capture stack traces.

**User Experience/Recoverability**: Depends on the specific error.

**Example**: If an error occurs and the stack trace is not available, the application should log the error and provide a message like, "An unexpected error occurred. Please contact support."

### GET_TOKEN_TIMEOUT NA

**Meaning**: The request to get a token timed out.

**Action for host**: Retry the request or increase the timeout duration.

**User Experience/Recoverability**: Recoverable

**Example**: If a token request times out, the application should retry the request and provide a message like, "Request timed out. Retrying..."

### TOKEN_NOT_RECEIVED NA

**Meaning**: The token was not received.

**Action for host**: Ensure the token request is correctly configured and retry the request.

**User Experience/Recoverability**: Recoverable

**Example**: If a token is not received, the application should retry the request and provide a message like, "Token not received. Retrying..."

### PARAMS_REQUEST_TIMEOUT NA

**Meaning**: The request for parameters timed out.

**Action for host**: Retry the request.

**User Experience/Recoverability**: Recoverable

**Example**: If a parameter request times out, the application should retry the request and provide a message like, "Request timed out. Retrying..." default 90 seconds.

### PARAMS_REQUEST_FAILED NA

**Meaning**: The request for parameters failed.

**Action for host**: Ensure the request is correctly configured and retry the request.

**User Experience/Recoverability**: Recoverable

**Example**: If a parameter request fails, the application should retry the request and provide a message like, "Request failed. Retrying..."

### REQUIRED_SCOPE_NOT_AVAILABLE NA not for 3P

**Meaning**: The required scope is not available.

**Action for host**: Ensure the required scope is correctly configured and available.

**User Experience/Recoverability**: Recoverable

**Example**: If a required scope is not available, the application should provide a message like, "Required scope not available. Please check your configuration."

### ASSERTION_ERROR

**Meaning**: An assertion failed.

**Action for host**: NA

**User Experience/Recoverability**: Depends on the specific error.

**Example**: If an assertion fails, the application should log the error and provide a message like, "An unexpected error occurred. Please contact support."

### NETWORK_ERROR

**Meaning**: A network error occurred.

**Action for host**: Ensure the network connection is stable and retry the request.

**User Experience/Recoverability**: Recoverable

**Example**: If a network error occurs, the application should retry the request and provide a message like, "Network error. Retrying..."

### GENERIC_ERROR

**Meaning**: This may occur in some scenarios internal to SDK. More info can be found in subError.

**Action for host**: NA

**User Experience/Recoverability**: Depends on error (Can be considered non-recoverable for now.)

**Example**: For a generic error, the application should provide a message that includes the subError details if available. For instance, "An unexpected error occurred. Please contact support with the following error code: [subError]."

### CLIENT_ID_MISMATCH not for 3P

**Meaning**: The client ID does not match the expected value.

**Action for host**: Ensure the client ID being used is correct and matches the expected value.

**User Experience/Recoverability**: Recoverable

**Example**: If a client ID mismatch occurs, the application should prompt, "Client ID mismatch. Please verify your client ID and try again."

### IMS_JUMP_CONSUMPTION_ERROR not for 3P

**Meaning**: An error occurred during IMS jump consumption.

**Action for host**: Investigate the specific error and resolve it.

**User Experience/Recoverability**: Depends on the specific error

**Example**: If an IMS jump consumption error occurs, the application should log the error and provide a message like, "An error occurred during IMS jump consumption. Please try again later."

### SCRIPT_LOAD_ERROR NA if developed a plugin

**Meaning**: An error occurred while loading a script.

**Action for host**: Ensure the script is correctly configured and available.

**User Experience/Recoverability**: Recoverable

**Example**: If a script load error occurs, the application should retry loading the script and provide a message like, "Error loading script. Retrying..."

### SDK_INITIALIZATION_ERROR

**Meaning**: An error occurred during SDK initialization.

**Action for host**: Ensure the SDK is correctly configured and initialized.

**User Experience/Recoverability**: Recoverable

**Example**: NA

### HOST_APP_NOT_FOUND NA

**Meaning**: The host application was not found.

**Action for host**: Ensure the host application is correctly installed and available.

**User Experience/Recoverability**: Recoverable

**Example**: If the host application is not found, the application should provide a message like, "Host application not found. Please ensure the application is installed and try again."