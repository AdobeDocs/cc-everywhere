# Adobe Express Embed SDK v2 Sample

Note: As of March 2023, the `redirectUri` parameter is no longer being checked by v2. You no longer need to include it in the `initialize()` method. The `exchangeAuthCodeForToken()` API no longer needs to be called.

## Step 1: Register a project

Register your integration by creating a new project in the [Developer Console](https://developer.adobe.com/console).

Select "Add an API" > "Adobe Express Embed SDK".
Select "Single-Page App" and register the domain(s) you want to allowlist.

## Step 3: Clone the sample

Clone the sample.
Replace the `clientID` fields each time the SDK is initialized (2 files):

* `index.html`
* `quickactions.html`

## Step 2: Install `mkcert` via Homebrew

[`mkcert`](https://github.com/FiloSottile/mkcert) is a simple tool for making locally-trusted development certificates. It automatically installs a local CA in the system root store, and generates locally-trusted certificates.

1. Install it using either `brew install mkcert`. Make sure to use Homebrew because the package is different on npm.
2. Run `mkcert -install` to create a local CA.
3. Navigate back to the project folder and run:

```bash
mkcert localhost
```

This will generate two files: `localhost-key.pem` (key) and `localhost.pem` (certificate). Our https server is instantiated with these two files so that the browser trusts the domain `localhost`.

## Step 3: Install `http-server` via npm or Homebrew

`http-server` lets you serve files or directories locally.

Install it using `npm i http-server` or `brew install http-server`.

## Step 4: Install project dependencies

Run `npm install` to install the dependencies in `yarn.lock`. The required dependencies belong to [Spectrum CSS](https://github.com/adobe/spectrum-css) and are used to style the buttons.

## Step 5: Run this sample

To start the server at port 8000, run this line in your project root:

```bash
http-server -S -C ./localhost.pem -K ./localhost-key.pem -p 8000 -a localhost
```

By passing in our newly generated SSL key and certificate, we have enabled secure request serving with TLS/SSL (HTTPS), which we need to communicate with Adobe Express. Now your server is up and available at `https://localhost:8000`.

If you want to test via http, run this line in the project root:

```bash
http-server -p 8000
```

Now your server is up and available at `http://localhost:8000`.

## Known Issues

This sample will not run on incognito windows.
