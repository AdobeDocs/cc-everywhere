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

## exchangeAuthCodeForToken()
When a user is faced with the Adobe login prompt, the SDK redirects the user to the Adobe IMS server. Here a `code_verifier` is created and a `code_challenge` is generated from that. 

The IMS server redirects the user to the authorization prompt. If the user accepts, the IMS server stores the `code_challenge` and redirects the user back to the application with an authorization `code` which is good for one use. 

At your registered redirect URI, call the `exchangeAuthCodeForToken()` function. This sends the `code` and the `code_verifier` to the IMS server. **If verified**, the IMS server responds with an access token and it is stored in local storage for future API calls.