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
CC Everywhere SDK expects requests to come from: 
* express.adobe.com
* localhost
* a domain that matches registered redirect URIs 

You cannot just download and embed the SDK in a HTML file on your local machine and open that file in a web browser. Because of the SDK's domain restrictions, any project using the SDK must be served via localhost or a redirect URI pattern you register in [console](https://developer.adobe.com/console/).
 
## Step 0: Download npm or Homebrew
* npm is a package manager used for installing Node packages. Installing Node automatically installs npm: you can download the installer [here](https://nodejs.org/en/download/).

* Homebrew is another package installer that you can use: follow [these steps](https://docs.brew.sh/Installation) to start using it.

## Step 1: Create SSL certificate
`mkcert` is a simple tool for making locally-trusted development certificates. It automatically installs a local CA in the system root store, and generates locally-trusted certificates. 

Install it using either `npm install mkcert` or `brew install mkcert`.

Navigate back to the project folder and run:
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
By passing in our newly generated SSL key and certificate, we have enabled secure request serving with TLS/SSL (HTTPS), which we need to communicate with CCX. Now your server is up and available at `https://localhost:8000`.

