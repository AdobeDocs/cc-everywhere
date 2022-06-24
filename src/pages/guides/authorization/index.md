---
title: Authorization
description: This is the reference page for authorization. 
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
--- 

# Authorization

This SDK follows the Proof Key for Code Exchange (PKCE) OAuth flow.  Developers are responsible for **registering OAuth credentials** in Developer Console and implementing the **code exchange** portion of the flow. 

## Register OAuth Credentials
OAuth credentials are required when first creating an integration, but they can be modified later. In [Developer Console](https://developer.adobe.com/console), navigate to the project you created. You can edit credentials by navigating to "Credentials" > "OAuth Single-Page App". The redirect URL(s) you define here corresponds with the URL(s) to which the IMS server will redirect after authorization has been granted by the user. 

| Domain | Default Redirect URI | Redirect URI Patterns 
| : -- | :--- | :--- | :---
| yourdomain | https://yourdomain.com/redirect | https://yourdomain.com/redirect 
| localhost | https://127.0.0.1:8000/redirect.html | https://localhost:8000/redirect.html

IMS will check the "Redirect URI Patterns" field first. If there are no matches, it will default to the "Default Redirect URI". 


### Authorization Redirect
When the SDK is first called, the user is prompted to sign into their Adobe account. After the user authenticates, the login pop-up window closes and the IMS server **redirects** the user back to a registered redirect URI with an authorization code. 

The IMS helper library helps handle signing users in and out of their Adobe accounts. Here are the OAuth steps it handles for you on the backend:
* A unique `code_verifier` is created (then saved to the browser's session storage) and used by the IMS library to generates a `code_challenge`. 
* The IMS library makes a GET request to the IMS authorization endpoint with this `code_challenge`.
* The client is identified, and the user is prompted to authenticate.


## Code Exchange
The `exchangeAuthCodeForToken()` method will exchange the authorization code received in the redirect step for an access token, so the user is not prompted to login again in this session. This flow is secure because even if the authorization code is somehow intercepted, it cannot be exchanged for an access token without being verified.

### exchangeAuthCodeForToken()
This SDK provides this method which makes a POST request to the IMS server, with the `code` and the `code_verifier` from your browser storage. If verified, an access token is returned and stored for future API calls. 

| Domain | Code exchange
| : --  | :---
| yourdomain | Call `exchangeAuthCodeForToken()`  at `/redirect` 
| localhost |  Call `exchangeAuthCodeForToken()` at `/redirect.html`