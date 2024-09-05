---
keywords:
  - Adobe Express
  - Embed SDK
  - Tutorial
title: Embed SDK Full Editor tutorial
description: A step-by-step guide to setting up and integrating the SDK into your web application.
contributors:
  - https://github.com/undavide
---

# Embed SDK Full Editor tutorial

Learn the ropes of integrating the Adobe Express into your web applications.

**TODO**: add a video, Davide-style.

## Introduction

Hi, developers! In this tutorial, we'll create an Embed SDK integration that leverages the Adobe Express Full Editor experience. Users will be able to create, edit and export documents directly from your web application. We'll look at a few configuration parameters, as well as the way to handle events, callbacks and manage files between your application and Adobe Express. Let's get started!

### Prerequisites

Before you start, make sure you have the following:

- An Adobe account: use your existing Adobe ID or create one for free.
- Embed SDK Credentials from the Adobe Developer Console; see the [Quickstart Guide](../quickstart/) for more information.
- Familiarity with HTML, CSS, JavaScript.
- Node.js installed on your development machine.

## Running the sample project

To get started, clone the [embed-sdk-full-editor-tutorial](#) sample from GitHub and navigate to the project directory. Locate the `src/.env` file and replace the `VITE_API_KEY` with your Embed SDK API Key:

```bash
VITE_API_KEY="your-api-key-here!"
```

Now, you can install the dependencies and run the sample with the following two simple commands:

```bash
npm install
npm run start
```

The web application will be served at `localhost:5555` on a secure HTTPS connection—which is always required for any Embed SDK integration. Open your browser and navigate to this address to see it in action. 

**TODO** add screenshot

When clicking the "Create New Design" button, the Adobe Express Full Editor will launch with a predefined document size; users have the entire set of tools available to create their designs. Once they're done, they can Download the document, or Save it as an Image. The sample project will handle the file transfer between Adobe Express and the web page that hosts it, and the image will be displayed right there.

**TODO** add screenshot

The "Edit Design" button (now enabled) will open the Editor with the same document size and content as the one just created: the Project ID has been stored as part of the `onPublish` callback, as we'll see. Users can modify the design and save it again, like before.

**TODO** add screenshot
