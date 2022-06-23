---
title: Local Development
description: This guide will set you up for local development and testing. 
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Local Development

This guide contains the steps needed to begin testing your project via localhost.

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

## Step 1: Create SSL certificate
[`mkcert`](https://github.com/FiloSottile/mkcert) is a simple tool for making locally-trusted development certificates. It automatically installs a local CA in the system root store, and generates locally-trusted certificates. 

1. Install it using `brew install mkcert`, NOT `npm install mkcert`. 
2. Configure a local certificate authority by running `mkcert -install`
3. Navigate back to the project folder and run:

```bash
mkcert localhost 
```

This will generate two files: `localhost-key.pem` (key) and `localhost.pem` (certificate). Our https server is instantiated in the next step with these two files so that the browser trusts localhost.


## Step 2: Start local server
`http-server` lets you make files or directories available via `localhost`.

Install it using `npm i http-server` or `brew install http-server`.

To start the server at port 8000, run this line in your project root: 

```bash
 http-server -S -C ./localhost.pem -K ./localhost-key.pem -p 8000
```
By passing in our newly generated SSL key and certificate, we have enabled secure request serving with TLS/SSL (HTTPS), which we need to communicate with CC Express. Now your server is up and available at `https://localhost:8000`.

