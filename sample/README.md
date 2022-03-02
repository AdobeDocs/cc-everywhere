## CC Everywhere Sample 

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

To start the server at port 3000, run this line in your project root: 

```
 http-server -S -C ./localhost.pem -K ./localhost-key.pem -p 3000
```
By passing in our newly generated SSL key and certificate, we have enabled secure request serving with TLS/SSL (HTTPS), which we need to communicate with CCX. Now your server is up and available at `https://localhost:3000`.
  

## Step 3: Run this sample
#
* Modify the `clientID` field in both `index.html` and `redirect.html` when you initialize the SDK. 
* Run this line to test the sample locally: 

```
 http-server -S -C ./localhost.pem -K ./localhost-key.pem -p 3000
```

## Known Issues 

If you reach the consent screen, click "Allow access" and the CCX modal does not open, try adding this to your code in `redirect.html`: 

```js
setTimeout(()=> {
        ccEverywhere.exchangeAuthCodeForToken();
      }, 10*1000)
```

In this alpha phase, we are noticing an error with the IMS library not being fully loaded in by the SDK. By waiting 10 seconds before login, this temporarily fixes the issue by making sure there's enough time for the library to load. This is an issue our team is working on fixing at the moment. 