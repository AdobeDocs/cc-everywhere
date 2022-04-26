## CC Everywhere Sample 

## Step 0: Embed the SDK
#
This SDK is currently in private alpha and is subject to changes until GA availability. Join the [prerelease program](adobeprerelease.com) for Creative Cloud Everywhere SDK to register interest and get access after you sign an NDA.

## Step 1: Install `mkcert` via npm or Homebrew
#
`mkcert` is a simple tool for making locally-trusted development certificates. It automatically installs a local CA in the system root store, and generates locally-trusted certificates. 

Install it using either `npm install mkcert` or `brew install mkcert`.

Navigate back to the project folder and run:
```
mkcert localhost 
```

This will generate two files: `localhost-key.pem` (key) and `localhost.pem` (certificate). Our https server is instantiated with these two files so that the browser trusts localhost.


## Step 2: Install `http-server` via npm or Homebrew
#

`http-server` lets you make files or directories available via `localhost`.

Install it using `npm i http-server` or `brew install http-server`.
  

## Step 3: Run this sample
#
1. Modify the `clientID` field in both `index.html`, `redirect.html`, and `quickactions.html` when you initialize the SDK. 
2. To start the server at port 8000, run this line in your project root: 

```
http-server -S -C ./localhost.pem -K ./localhost-key.pem -p 8000
```
By passing in our newly generated SSL key and certificate, we have enabled secure request serving with TLS/SSL (HTTPS), which we need to communicate with CC Express. Now your server is up and available at `https://localhost:8000`.

## Known Issues
This sample will not run on incognito windows. 