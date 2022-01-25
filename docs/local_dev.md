# Local development 

## Table of Contents
* [Overview](../README.md)
* [Configuration](configuration.md)
* [Local Development](local_dev.md)
* [Quick Start](quickstart.md)
* CCX Editor Component
  * [Create Project API](create_project.md)
  * [Open Project API](edit_project.md)
* [API References](api_ref.md)
* [Customization](customization.md)
#

The CC Everywhere SDK expects requests to come from: 
* express.adobe.com
* localhost
* a domain that matches specified redirect URIs 

You cannot just download and embed the SDK in a HTML file on your local machine and open that file in a web browser. Because of the SDK's domain restrictions, the HTML file (or any project using the SDK) must be served via localhost until the redirect URL has been registered. 
 
 
 This guide contains the steps needed to begin testing your project via localhost. 



## Step 1: Install `mkcert` via npm or Homebrew
#
`mkcert` is a simple tool for making locally-trusted development certificates. It automatically installs a local CA in the system root store, and generates locally-trusted certificates. Run the following line to configure the tool: 
```
mkcert -install
```
Then navigate back to the project folder and run:
```
mkcert localhost 
```

This will generate two files: `localhost-key.pem` (key) and `localhost.pem` (certificate). Our https server is instantiated with these two files so that the browser trusts localhost.


## Step 2: Install `http-server` via npm or Homebrew
#
`http-server` lets you make files or directories available via `localhost`.

To start the server at port 3000, run this line in your project root: 

```
 http-server -S -C ./localhost.pem -K ./localhost-key.pem -p 3000
```
By passing in our newly generated SSL key and certificate, we have enabled secure request serving with TLS/SSL (HTTPS), which we need to communicate with CCX. Now your server is up and available at `https://localhost:3000`.
  

Return to the [Quick Start](quickstart.md) guide to see how to embed the SDK in your project.  

