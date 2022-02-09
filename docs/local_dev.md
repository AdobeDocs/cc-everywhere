# Local development 

## Table of Contents
* [Overview](README.md)
* Get Started 
  * [Configuration](docs/configuration.md)
  * [Local Development](docs/local_dev.md)
  * [Quick Start](docs/quickstart.md)
* SDK Components
  * CCX Editor Component
    * [Create Project API](docs/create_project.md)
    * [Open Project API](docs/edit_project.md)
  * [Quick Actions API](docs/quick_actions.md)
* [API References](docs/api_ref.md)
* [Customization](docs/customization.md)
#

The CC Everywhere SDK expects requests to come from: 
* express.adobe.com
* localhost
* a domain that matches specified redirect URIs 

You cannot just download and embed the SDK in a HTML file on your local machine and open that file in a web browser. Because of the SDK's domain restrictions, the HTML file (or any project using the SDK) must be served via localhost until the redirect URL has been registered. 
 
 
 This guide contains the steps needed to begin testing your project via localhost. 

## Step 0: Download npm or Homebrew
#
npm is a package manager used for installing Node packages. Installing Node automatically installs npm: you can download the installer [here](https://nodejs.org/en/download/).

Homebrew is another package installer that you can use: follow [these steps](https://docs.brew.sh/Installation) to start using it.

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
  

Return to the [Quick Start](quickstart.md) guide to see how to embed the SDK in your project.  

