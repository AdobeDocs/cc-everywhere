---
title: Authorization
description: This is the reference page for authorization. 
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
--- 

# Authorization

This SDK follows the Proof Key for Code Exchange (PKCE) OAuth flow.  Developers are responsible for **registering OAuth credentials** in Developer Console and implementing the **code exchange** portion of the flow. 

## Redirect
When the SDK is first called, the user is prompted to sign-in to their Adobe account. The IMS library (`imslib-thin_node_module.js`) helps handle signing users in and out of their Adobe accounts. It will be bundled with the SDK once it is hosted on a CDN. 

Here are the OAuth steps it handles on the backend:
* A unique `code_verifier` is created (then saved to the browser's session storage) and used by the IMS library to generates a `code_challenge`. 
* The IMS library makes a GET request to the IMS authorization endpoint with this `code_challenge`.
* The client is identified, and the user is prompted to authenticate.
If the user accepts, the pop-up window closes and the IMS server **redirects** the user back to registered redirect URI with an authorization code

### Register OAuth Credentials
OAuth credentials are required when first creating an integration, but they can be modified later. In [Developer Console](https://developer.adobe.com/console), navigate to the project you created. You can edit credentials by navigating to "Credentials" > "OAuth Single-Page App". 

The redirect URL(s) you define here must correspond with the URL(s) to which the IMS server will redirect after authorization has been granted by the user. IMS will check the "Redirect URI Patterns" field first. If there are no matches, it will default to the "Default Redirect URI". 

If you'd like to test the [sample](https://github.com/AdobeDocs/cc-everywhere/tree/main/sample), specify: 
* https://127.0.0.1:8000/redirect.html in the "Default Redirect URI" field
* https://localhost:8000/redirect.html in the "Redirect URI Patterns" field

Integrations must be submitted with https redirect URIs to be approved for production, but http URIs are accepted **only** for testing localhost instances. Note that the "Default Redirect URI" field will still expect a https pattern in Console, but including the http URI in the "Redirect URI Patterns" field will be sufficient. 

## Code Exchange
Call the `exchangeAuthCodeForToken()` method at your redirect URI to exchange the authorization code for an access token, so the user is not prompted to login again in this session.

### exchangeAuthCodeForToken()
This SDK provides this method to send the `code` and the `code_verifier` to the IMS server. **If verified**, the IMS server responds with an access token and it is stored in session storage for future API calls. 

This flow is secure because even if the authorization code is somehow intercepted, it cannot be exchanged for an access token without the verifier. For the sample we provide, you can see that the `redirect.html` page initializes the SDK and calls this method