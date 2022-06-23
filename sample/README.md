## Adobe Create Embed SDK Sample 

## Step 0: Embed SDK

This SDK is currently in private beta and is subject to changes until GA availability. To register interest for the Adobe Create Embed SDK, fill out [this form.](https://forms.office.com/r/J0HvGMbtDT). 

Once you gain access, follow the steps [here](https://github.com/AdobeDocs/cc-everywhere-alpha).

## Step 1: Register a project

**Before you register an application, you need to have filled out the form above and been invited to the prerelease repo for access to the SDK.**

Register your integration by creating a new project in the [Developer Console](https://developer.adobe.com/console). 

Select "Add an API" > "Adobe Create Embed SDK".
Select "Single-Page App" and register redirect URI patterns to whitelist your domain. 
  * When the SDK is first called, a login popup window appears for the user to sign in and allow the integration to access their Express assets. After the login is complete, a code is sent on the backend from the Adobe server to the registered redirect URI. 
  * Call the SDK's `exchangeCodeForToken` API at your registered redirect URI to exchange that code for an access token. This token will be stored in the browser so the user does not have to login again in the same session. You can read more [here.](https://developer.adobe.com/cc-everywhere/reference/authorization) 

In the sample, we call the `exchangeCodeForToken` API in the `redirect.html` file, so we register: 
  * https://127.0.0.1:8000/redirect.html in the "Default Redirect URI" field
  * https://localhost:8000/redirect.html in the "Redirect URI patterns" field

Once you're done, a client ID for your project will be generated. Steps 2-3 will help you get set up with a simple https server. 

## Step 3: Clone the sample 
Clone the sample. 
Replace the `clientID`, `redirectUri` fields each time the SDK is initialized (3 files): 
* `index.html`
* `redirect.html`
* `quickactions.html` 

## Step 2: Install `mkcert` via Homebrew

[`mkcert`](https://github.com/FiloSottile/mkcert) is a simple tool for making locally-trusted development certificates. It automatically installs a local CA in the system root store, and generates locally-trusted certificates. 
1. Install it using either `brew install mkcert`. Make sure to use Homebrew because the package is different on npm.
2. Run `mkcert -install` to create a local CA.
3. Navigate back to the project folder and run:
```
mkcert localhost 
```

This will generate two files: `localhost-key.pem` (key) and `localhost.pem` (certificate). Our https server is instantiated with these two files so that the browser trusts the domain `localhost`.


## Step 3: Install `http-server` via npm or Homebrew

`http-server` lets you serve files or directories locally.

Install it using `npm i http-server` or `brew install http-server`.
  
## Step 4: Install project dependencies
Run `npm install` to install the dependencies in `package.json`. The required dependencies belong to [Spectrum CSS](https://github.com/adobe/spectrum-css) and are used to style the buttons.

## Step 5: Run this sample

To start the server at port 8000, run this line in your project root: 

```
http-server -S -C ./localhost.pem -K ./localhost-key.pem -p 8000 -a localhost
```
By passing in our newly generated SSL key and certificate, we have enabled secure request serving with TLS/SSL (HTTPS), which we need to communicate with CC Express. Now your server is up and available at `https://localhost:8000`.

## Known Issues
This sample will not run on incognito windows. 