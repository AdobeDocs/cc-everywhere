## CC Everywhere Sample 

## Step 0: Embed SDK

This SDK is currently in private alpha and is subject to changes until GA availability. To register interest for the Creative Cloud Everywhere SDK, fill out [this form.](https://forms.office.com/r/J0HvGMbtDT). 

Once you gain access, follow the steps [here](https://github.com/AdobeDocs/cc-everywhere-alpha).

## Step 1: Get an API Key

**Before you register an application, you need to have filled out the form above and been invited to the prerelease repo for access to the SDK.**

Register your integration by creating a new project in the [Developer Console](https://developer.adobe.com/console). 
* Select "Add an API" > "Creative Cloud Everywhere SDK".
* Configure OAuth settings. In the Developer Console, you should select "Single-Page App" and register redirect URI patterns. If you'd like to test the [sample](https://github.com/AdobeDocs/cc-everywhere/tree/main/sample), specify: 
  * https://127.0.0.1:8000/redirect.html in the "Default Redirect URI" field
  * https://localhost:8000/redirect.html in the "Redirect URI patterns" field
You can read more [here](../src/pages/reference/authorization/index.md) 

## Step 2: Install `mkcert` via Homebrew

[`mkcert`](https://github.com/FiloSottile/mkcert) is a simple tool for making locally-trusted development certificates. It automatically installs a local CA in the system root store, and generates locally-trusted certificates. 
1. Install it using either `brew install mkcert`.
2. Run `mkcert -install` to create a local CA.
3. Navigate back to the project folder and run:
```
mkcert localhost 
```

This will generate two files: `localhost-key.pem` (key) and `localhost.pem` (certificate). Our https server is instantiated with these two files so that the browser trusts localhost.


## Step 3: Install `http-server` via npm or Homebrew

`http-server` lets you serve files or directories locally.

Install it using `npm i http-server` or `brew install http-server`.
  
## Step 4: Install dependencies
Run `npm install` to install the dependencies in `package.json`. The required dependencies belong to [Spectrum CSS](https://github.com/adobe/spectrum-css) and are used to style the buttons.

## Step 5: Run this sample

1. **Modify the `clientID` field in both `index.html`, `redirect.html`, and `quickactions.html` with the API key you got in Step 1.**
2. To start the server at port 8000, run this line in your project root: 

```
http-server -S -C ./localhost.pem -K ./localhost-key.pem -p 8000
```
By passing in our newly generated SSL key and certificate, we have enabled secure request serving with TLS/SSL (HTTPS), which we need to communicate with CC Express. Now your server is up and available at `https://localhost:8000`.

## Known Issues
This sample will not run on incognito windows. 