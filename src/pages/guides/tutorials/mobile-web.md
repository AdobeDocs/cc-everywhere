---
keywords:
  - Adobe Express
  - Embed SDK
  - Tutorial
  - CCEverywhere
  - Mobile Web
  - mWeb
  - Android
  - iOS
title: Embed SDK Mobile Web tutorial
description: A step-by-step guide to setting up and integrating the SDK into your web application.
contributors:
  - https://github.com/undavide
---

# Embed SDK Mobile Web tutorial

Learn how to integrate the Adobe Express Embed SDK into Web, Mobile Web and WebView experiences.

## Introduction

Hi, developers! In this tutorial, we'll create a mock Fantasy Game Embed SDK integration that can be served through Desktop and Mobile Web Browsers, as well as iOS and Android applications (through WebViews).

### What you'll learn

By completing this tutorial, you'll gain practical skills in:

- Creating a responsive, **Web-based Embed SDK experience** that follows the Mobile Web best practices.
- Implementing **iOS and Android native applications** that consume the Mobile Web integration.
- Setting up and **configuring the WebViews in both Kotlin and Swift**.

### What you'll build

We'll build a mock **Fantasy Chess Game**, where users can **generate their own team's Badge** and use it in the game. This project includes three main components:

- A **Web-based Embed SDK experience** that can be consumed by Desktop and Mobile Browsers. We'll use [Express.js](https://expressjs.com/) (a minimalist web framework for Node.js) to create and serve the content.
- An **iOS native application** developed in [Swift](https://developer.apple.com/swift/) that loads the Web-based Embed SDK experience into a WebView.
- An **Android native application** developed in [Kotlin](https://kotlinlang.org/) that does the same thing.

You will develop locally on your machine, and run the mobile applications through simulators in Apple Xcode and Android Studio. The table below (reproduced for convenience from the [Mobile Web Overview](./mobile-web-support--overview.md)) shows the available ways to integrate the Embed SDK into multiple surfaces; this tutorial covers the first three use cases.

|     | Device         | Integration type | Runtime | Description                                                |
| --- | -------------- | ---------------- | ------- | ---------------------------------------------------------- |
| 1   | 🖥️ **Desktop** | Web              | Browser | Embed SDK runs in Desktop Browsers.                        |
| 2   | 📱 **Mobile**  | Mobile Web       | Browser | Embed SDK runs in Mobile Browsers.                         |
| 3   | 📱 **Mobile**  | Mobile Web       | WebView | Web experience through iOS/Android Apps (in-app WebViews). |
| 4   | 📱 **Mobile**  | Native           | App     | iOS/Android Apps using Swift/Kotlin Mobile SDKs.           |

### Prerequisites

Before we begin, make sure you have the following:

- An **Adobe account**: use your existing Adobe ID or create one for free.
- **Embed SDK Credentials** from the Adobe Developer Console; see the [Quickstart Guide](../quickstart/index.md) for more information.
- Familiarity with **HTML, CSS, JavaScript, Swift, and Kotlin**.
- **Node.js, Xcode, and Android Studio** are installed on your development machine.

We also recommend reviewing the following resources first:

- **[Mobile Web Overview](./mobile-web-support--overview.md)**: The different ways to implement mobile web support.
- **[Mobile Web in the Browser](./mobile-web-support--browser.md)**: The Mobile Web approach in the Browser.
- **[Mobile Web in a WebView](./mobile-web-support--webview.md)**: The Mobile Web approach in iOS and Android WebViews.

Given the complexity of the project, for the sake of brevity and clarity, we will focus on the parts that are most relevant to the main goal of the tutorial. The complete code is available in the [embed-sdk-mobile-web-tutorial](https://github.com/AdobeDocs/embed-sdk-samples/tree/main/code-samples/tutorials/embed-sdk-mobile-web) repository on GitHub, if you want to check the entire implementation.

## 1. Set up the project

### 1.1 Clone the sample

Clone the [Embed SDK Mobile Web sample](https://github.com/AdobeDocs/embed-sdk-samples/tree/main/code-samples/tutorials/embed-sdk-mobile-web) from GitHub and navigate to the project directory.

```bash
git clone https://github.com/AdobeDocs/embed-sdk-samples.git
cd embed-sdk-samples/code-samples/tutorials/embed-sdk-mobile-web
```

These are the three main directories of the project:

```txt
.
├── Android                      🤖 Android native application
│   └── ...
│
├── iOS
│   ├── DevxSampleApp            🍎 iOS native application
│   └── DevxSampleApp.xcodeproj
│
└── Mobile-web
    ├── certs                    🔐 Certificate for local HTTPS server
    ├── scripts                  📜 Certificate generation scripts
    ├── server                   🖥️ Express.js server
    ├── src                      📂 Web experience content
    └── ...                      📄 Other files (HTML, Vite + ngrok configs, etc.)
```

### 1.2 Set up the API key

Locate the `Mobile-web/.env` file and replace the placeholder string in the `VITE_API_KEY` with your Embed SDK API Key:

```bash
VITE_API_KEY="your-api-key-here!"
```

<InlineAlert variant="info" slots="text1, text2" />

📖 Instructions on how to obtain an API Key can be found on the [Quickstart Guide](../quickstart/index.md#step-1-get-an-api-key). Make sure your API Key is set to allow the `localhost:5566` [domain and port](../quickstart/index.md#edit-the-list-of-allowed-domains).

Please note that **the port is set to `5566` instead of the default `5555`** we've been using in other tutorials to avoid conflicts with Android Studio.

### 1.3 Install dependencies and run the code

Install the dependencies in the `Mobile-web` directory and start the development server:

```bash
npm install
npm run gen:cert
npm run dev
```

The web application will be served at `localhost:5566` on a secure HTTPS connection. Open your browser and navigate to this address to see the Web experience in action.

<InlineAlert variant="error" slots="header, text1" />

#### Error: "Adobe Express is not available"

In case you get a popup when trying to launch the Adobe Express integration with the following message: _"You do not have access to this service. Contact your IT administrator to gain access"_, please check to have entered the **correct API Key** in the `src/.env` file as described [here](#12-set-up-the-api-key).
