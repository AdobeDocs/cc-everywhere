---
keywords:
  - Create Embed SDK
  - Express Editor
  - Adobe Express
  - Embed SDK
  - Quick Actions
  - ExtendScript
  - SDK
  - JavaScript
  - Embed
  - SDK Reference
  - Image Quick Actions
  - Video Quick Actions
  - Adobe Photoshop
  - Adobe Premiere
  - Local development 
title: Local Development
description: This guide will set you up for local development and testing. 
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Local Development

This guide contains the steps needed to begin serve your SDK and test your project locally. 

## Domain Restrictions
Adobe Create Embed SDK expects requests to come from: 
* express.adobe.com
* localhost
* a domain that is registered to the client app in [Developer Console](https://developer.adobe.com/console/)

When a client application first calls the SDK, the user is prompted to authenticate the application. Once a user authenticates, Adobe's Identity Management Server (IMS) will redirect the client to a redirect URI registered in the Console.  To learn more about how to configure OAuth for your application, read the [authorization](../authorization/) guide.

All non-localhost redirect URIs need a valid SSL certificate to redirect the client after sign-ins and subsequently save access tokens onto client pages.

## Testing via https
**Your production server will need a public key and a signed certificate to enable https. **

To start trying out the SDK, we have included some steps for setting up a simple http server at port 8000: 

1. Install Homebrew. Homebrew is a package installer: follow [these steps](https://docs.brew.sh/Installation) to install it.
2. Create a key and SSL certificate using `mkcert`. 
   * [`mkcert`](https://github.com/FiloSottile/mkcert) is a simple tool for making locally-trusted development certificates. It automatically installs a local CA in the system root store, and generates locally-trusted certificates. 
   * Install it using `brew install mkcert`, NOT `npm install mkcert`. 
   * Configure a local certificate authority by running `mkcert -install`.
   * Run `mkcert localhost` in the project root. This will generate two files: `localhost-key.pem` (key) and `localhost.pem` (certificate). Our https server is instantiated in the next step with these two files so that the browser trusts localhost.
3. Install `http-server`.
   * `http-server` lets you make files or directories available via `localhost`. 
   * Install it using `npm i http-server` or `brew install http-server`. 
4. Run the following line in your project root: 

```bash
 http-server -S -C ./localhost.pem -K ./localhost-key.pem -p 8000 -a localhost
```

## Testing via http
**Integrations must be submitted with https redirect URIs to be approved for production, but http URIs are accepted in Console *only* for testing localhost instances.**

>  Note: The "Default Redirect URI" field will still expect a https pattern, but including the http URI in the "Redirect URI Patterns" field will be sufficient.

 We have included some steps for getting started with a simple http server at port 8000: 

1. Install npm or Homebrew. npm is installed when you install Node, and Homebrew is another package installer that you can use.
2. Install `http-server`.
   * `http-server` lets you make files or directories available via `localhost`. 
   * Install it using `npm i http-server` or `brew install http-server`. 
3. Run the following line in your project root: 

```bash
 http-server -p 8000 -a localhost
```

