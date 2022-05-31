---
title: Authorization
description: This is the reference page for authorization. 
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
--- 

# Authorization

## Overview

This SDK follows a Proof Key for Code Exchange (PKCE) workflow for OAuth. This flow introduces a secret created by the calling application that can be verified by the authorization server (code verifier). The calling app generates a code challenge from the verifier and sends it to retrieve an authorization code. This flow is secure because even if the authorization code is somehow intercepted, it cannot be exchanged for an access token without the verifier. 

## Register OAuth Credentials
OAuth credentials are required when first creating an integration, but they can be modified later. In [Developer Console](https://developer.adobe.com/console), navigate to the project you created. You can edit credentials by navigating to "Credentials" > "OAuth Single-Page App".

If you'd like to test the [sample](https://github.com/AdobeDocs/cc-everywhere/tree/main/sample), specify: 
* https://127.0.0.1:8000/redirect.html in the "Default Redirect URI" field
* https://localhost:8000/redirect.html in the "Redirect URI patterns" field

Integrations must be submitted with https redirect URIs to be approved for production, but http URIs are accepted **only** for testing localhost instances. Note that the "Default Redirect URI" field will still expect a https pattern in Console, but including the http URI in the "Redirect URI Patterns" field will be sufficient. IMS will check the "Redirect URI Pattern" field first. If there are no matches, it will default to the "Redirect URI". 

## Flow
OAuth credentials are required when first creating an integration, but they can be modified later. In [Developer Console](https://developer.adobe.com/console), navigate to the project you created. You can edit credentials by navigating to "Credentials" > "OAuth Single-Page App".

When the SDK is first initialized, the user is faced with the Adobe login prompt. 
* The SDK redirects the user to the Adobe IMS (Identity Management Service) server. Here a `code_verifier` is created and a `code_challenge` is generated from that. 
* The IMS server redirects the user to the authorization prompt. If the user accepts, the IMS server stores the `code_challenge` and redirects the user back to the application (the registered redirect URI(s)) with an authorization `code` which is good for one use. 

## exchangeAuthCodeForToken()
At your registered redirect URI, call the `exchangeAuthCodeForToken()` function. This sends the `code` and the `code_verifier` to the IMS server. **If verified**, the IMS server responds with an access token and it is stored in local storage for future API calls. 
