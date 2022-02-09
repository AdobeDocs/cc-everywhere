# Quick Start

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
CC Everywhere SDK lets you launch a CCX editor within your own application. This guide explains how to start using the SDK in your own app.

- [Quick Start](#quick-start)
  - [Table of Contents](#table-of-contents)
  - [Step 1: Get an API Key](#step-1-get-an-api-key)
  - [Step 2: Embed the SDK](#step-2-embed-the-sdk)
    - [HTML Example](#html-example)
    - [JavaScript Example](#javascript-example)
  - [Step 3: Initialize the SDK](#step-3-initialize-the-sdk)
  - [Step 4: Exchange Code for Access Token](#step-4-exchange-code-for-access-token)
  - [Next Steps: Explore the SDK](#next-steps-explore-the-sdk)

## Step 1: Get an API Key

* Follow the steps on the [Configuration](configuration.md) page to get an API key.

* Register a redirect URL by emailing marichaec@adobe.com and finnegan@adobe.com.

---

## Step 2: Embed the SDK

We are in the process of distributing this SDK as a CDN. During this alpha phase, you can embed the SDK into your app by downloading the bundled SDK in the [`/dist`](../dist/CCEverywhere.js) folder of this repo. 

> **Note**: Until the SDK can be pulled directly from a CDN, you'll need to download and serve the SDK yourself locally. To try this on a local server, refer to the [local development set-up guide](local_dev.md).


### HTML Example

```html
<script type="text/javascript" src="./CCEverywhere.js"></script>
```

### JavaScript Example

```js
function embedSDK = (document, pathToSDK) => {
    const script = document.createElement("script");
    script.src = pathToSDK;
    script.onload = () => {
        // INITIALIZE SDK 
    };
    document.body.appendChild(script);
}

embedSDK(document, "./CCEverywhere.js");
```

---

## Step 3: Initialize the SDK

To initialize the SDK, call the default method `initialize()`:

```js
const ccEverywhere = CCEverywhere.default.initialize(
                {
                    clientId: <CLIENT_ID>,
                    appName: <APP_NAME>,
                    appVersion: { major: 1, minor: 0 },
                    platformCategory: 'web'
                }
        );
```

This method returns a `CCEverywhere` object, with two methods:

* `createDesign()`
* `editDesign()`

These methods are the ones you will use to create a new project or edit an existing one in the CCX editor. To learn more about these methods, visit the [API references](api_ref.md) page.

---

## Step 4: Exchange Code for Access Token

After a user logs in, you can get the user's access token using the `exchangeAuthCodeForToken()` API.

When you call this API, what happens is the Adobe IMS Server stores the code and redirects the user back to the application's specified redirect URL with an authorization code, which is good for one use.

We can exchange that code from an access token with the following line:

```js
ccEverywhere.exchangeAuthCodeForToken();
```

Create a new endpoint that simply initializes the SDK and calls this function. This endpoint should correspond to the redirect URI you provided us with. The default redirect URI we specified for our sample is "https://localhost:3000/redirect.html". This function will store that token for future requests to the SDK during this session.

In a future build of this SDK, you will be able to specify the redirect uri you wish in the initialize function. 

---

## Next Steps: Explore the SDK

The CC Everywhere SDK can be initialized with a customized locale. The [customization](customization.md) documentation along with the [API references](api_ref.md) can help you start working with the SDK in a way that best suits your needs.

Read more about:

* How to [create a project](create_project.md) in the editor
* How to [edit an existing project](edit_project.md) in the editor
