# Adobe Express Embed SDK Sample

## Step 0: Register a project

Register your integration by creating a new project in the [Developer Console](https://developer.adobe.com/console).

Select "Add an API" > "Adobe Create Embed SDK".
Select "Single-Page App" and register the domains on which you will run/test your app.

Once you're done, a client ID for your project will be generated. Steps 2-3 will help you get set up with a simple https server.

## Step 1: Clone the sample

Clone the sample.
Replace the `clientID` fields each time the SDK is initialized (4 files):

* `index.html`
* `quickactions.html`
* `video-quickactions.html`
* `modules.html`

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

Run `npm install` to install the dependencies in `package.json`. The required dependencies belong to [Spectrum CSS](https://github.com/adobe/spectrum-css) and are used to style the buttons.

## Step 5: Run this sample

To start the server at port 8000, run this line in your project root:

```bash
http-server -S -C ./localhost.pem -K ./localhost-key.pem -p 8000 -a localhost
```

By passing in our newly generated SSL key and certificate, we have enabled secure request serving with TLS/SSL (HTTPS), which we need to communicate with CC Express. Now your server is up and available at `https://localhost:8000`.

## Known Issues

This sample will not run on incognito windows.
