---
title: Local Development
description: This guide will set you up for local development and testing. 
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Local Development

This guide contains the steps needed to begin testing your project locally. 


## Domain Restrictions
Adobe Create Embed SDK expects requests to come from: 
* express.adobe.com
* localhost
* a domain that matches registered redirect URIs 

You cannot just download and embed the SDK in a HTML file on your local machine and open that file in a web browser. Any project using the SDK must be served via localhost or a redirect URI pattern you whitelist in [console](https://developer.adobe.com/console/).

If you'd like to test the [sample](https://github.com/AdobeDocs/cc-everywhere/tree/main/sample), specify: 
* https://127.0.0.1:8000/redirect.html in the "Default Redirect URI" field
* https://localhost:8000/redirect.html in the "Redirect URI patterns" field
 
## Step 0: Download npm or Homebrew
* npm is a package manager used for installing Node packages. Installing Node automatically installs npm: you can download the installer [here](https://nodejs.org/en/download/).

* Homebrew is another package installer that you can use: follow [these steps](https://docs.brew.sh/Installation) to start using it.

## Testing via http
Integrations must be submitted with https redirect URIs to be approved for production, but http URIs are accepted **only** for testing localhost instances. Note that the "Default Redirect URI" field will still expect a https pattern in Console, but including the http URI in the "Redirect URI Patterns" field will be sufficient. We have included some steps for getting started with a simple http server at port 8000: 

1. Install npm or Homebrew. npm is installed when you install Node, and Homebrew is another package installer that you can use.
2. Install `http-server`.
   * `http-server` lets you make files or directories available via `localhost`. 
   * Install it using `npm i http-server` or `brew install http-server`. 
3. Run the following line in your project root: 

```bash
 http-server -p 8000
```

## Testing via https 
Your production server will need a public key and a signed certificate to enable https. To start trying out the SDK, we have included some steps for setting up a simple http server at port 8000: 

1. Install Homebrew. Homebrew is the package installer we need for Step 2: follow [these steps](https://docs.brew.sh/Installation) to install it.
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
 http-server -S -C ./localhost.pem -K ./localhost-key.pem -p 8000
```

