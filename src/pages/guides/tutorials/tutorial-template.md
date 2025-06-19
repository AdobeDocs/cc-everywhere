---
keywords:
  - Express Embed SDK
  - Adobe Express
  - Tutorial
  - Code example
  - Implementation guide
  - Step-by-step
  - Web integration
  - Developer guide
  - SDK implementation
  - Learning resource
  - Adobe API
  - Web development
  - Creative tools
  - Content creation
title: Tutorial Template
description: Step-by-step guide for implementing [Feature/Task] with Adobe Express Embed SDK
contributors:
  - https://github.com/yourusername
---

# [Tutorial Title]

Learn how to [accomplish specific task] using the Adobe Express Embed SDK. By the end of this tutorial, you'll be able to [key learning objectives].

## Introduction

Welcome to this hands-on tutorial! We'll walk you through building [brief description of what you'll build] using the Adobe Express Embed SDK. This tutorial is designed to get you up and running quickly with practical, working code.

### What you'll learn

By completing this tutorial, you'll learn how to:

- [Specific learning objective 1]
- [Specific learning objective 2] 
- [Specific learning objective 3]
- [Additional objectives as needed]

### What you'll build

[Brief description of the end result with specific details about functionality]

<InlineAlert variant="info" slots="text1" />

You can find the complete working code for this tutorial in our [GitHub repository](https://github.com/AdobeDocs/cc-everywhere/tree/main/samples/[tutorial-name]).

## Prerequisites

Before you start, make sure you have:

- An **Adobe account** (use your existing Adobe ID or [create one for free](https://account.adobe.com/))
- **API credentials** from the Adobe Developer Console ([Get credentials](/guides/quickstart/#step-1-get-an-api-key))
- Basic knowledge of **HTML, CSS, and JavaScript**
- **Node.js** installed on your development machine
- A **text editor or IDE** of your choice
- [Other specific requirements]

<InlineAlert variant="info" slots="text1" />

New to Adobe Express Embed SDK? Check out our [Getting Started tutorial](./getting-started.md) first for a comprehensive introduction.

## Step 1: Set up your project

Let's start by creating the foundation for your project.

### 1.1 Create your project structure

Create a new directory for your project and set up the basic files:

```bash
mkdir [your-project-name]
cd [your-project-name]
```

Create the following files:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Your Project Title]</title>
    <style>
        /* Add your styles here */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f5f5f5;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>[Your Project Title]</h1>
        <div id="app">
            <!-- Your implementation will go here -->
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>
```

### 1.2 Include the Adobe Express Embed SDK

Add the SDK to your project by including it in your JavaScript file:

```js
// main.js
const CDN_URL = "https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js";

// Load the Adobe Express SDK
await import(CDN_URL);
console.log("Adobe Express SDK loaded successfully", window.CCEverywhere);

// Initialize the SDK
const hostInfo = {
    clientId: "YOUR_CLIENT_ID", // Replace with your actual API key
    appName: "YOUR_APP_NAME"    // Replace with your app name
};

const configParams = {
    // Optional configuration parameters
};

try {
    const ccEverywhere = await window.CCEverywhere.initialize(hostInfo, configParams);
    console.log("SDK initialized successfully");
    
    // Your implementation code will go here
    
} catch (error) {
    console.error("Failed to initialize SDK:", error);
}
```

<InlineAlert variant="warning" slots="text1" />

**Important:** Replace `YOUR_CLIENT_ID` with your actual API key from the Adobe Developer Console, and `YOUR_APP_NAME` with your application name.

## Step 2: [Main Implementation Step]

Now let's implement the core functionality of [specific feature/task].

### 2.1 [Specific sub-step]

[Clear explanation of what this step accomplishes and why it's important]

```js
// Example code for this step
const [specificFunction] = () => {
    // Implementation details
    const config = {
        // Configuration parameters
    };
    
    // Return or execute the function
};
```

### 2.2 [Another sub-step]

[Explanation of this step]

```js
// Additional implementation code
const [anotherFunction] = async () => {
    try {
        // Implementation
    } catch (error) {
        console.error("Error:", error);
    }
};
```

<InlineAlert variant="info" slots="text1" />

**Tip:** [Helpful tip or best practice related to this step]

## Step 3: Handle events and callbacks

Set up event handling to respond to user interactions and SDK events:

```js
// Set up event listeners
const setupEventHandlers = () => {
    // Example event handling
    ccEverywhere.on("eventName", (eventData) => {
        console.log("Event received:", eventData);
        // Handle the event
    });
};

// Configure callbacks
const callbacks = {
    onCancel: () => {
        console.log("User cancelled the operation");
        // Handle cancellation
    },
    
    onPublish: (intent, publishParams) => {
        console.log("Content published:", publishParams);
        // Handle the published content
    },
    
    onError: (error) => {
        console.error("An error occurred:", error);
        // Handle errors appropriately
    }
};
```

### Understanding the callbacks

- **onCancel**: Triggered when the user closes the modal or cancels the operation
- **onPublish**: Called when the user successfully completes an action (e.g., saves or downloads)
- **onError**: Invoked when an error occurs during the process

## Step 4: Test your implementation

Let's make sure everything works correctly.

### 4.1 Set up a local server

Since the Adobe Express Embed SDK requires HTTPS, you'll need to serve your files through a local server:

```bash
# Option 1: Using Node.js http-server
npx http-server -p 8080 --ssl

# Option 2: Using Python (if you have it installed)
python -m http.server 8080

# Option 3: Using VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
```

### 4.2 Test the functionality

1. Open your browser and navigate to `https://localhost:8080` (or your local server URL)
2. Open the browser's Developer Tools (F12) to monitor console output
3. Test the following scenarios:
   - [Test scenario 1 - specific to your implementation]
   - [Test scenario 2 - error handling]
   - [Test scenario 3 - success path]

### 4.3 Verify the results

After testing, you should see:

- [Expected result 1]
- [Expected result 2]
- Console logs showing successful SDK initialization and operations

## Complete working example

Here's the complete, functional code that brings everything together:

```js
// Complete implementation
(async () => {
    try {
        // Load the SDK
        await import("https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js");
        
        // Initialize
        const hostInfo = {
            clientId: "YOUR_CLIENT_ID",
            appName: "YOUR_APP_NAME"
        };
        
        const ccEverywhere = await window.CCEverywhere.initialize(hostInfo);
        
        // Your complete implementation here
        // [Complete working example code]
        
        console.log("Implementation completed successfully!");
        
    } catch (error) {
        console.error("Implementation failed:", error);
    }
})();
```

## Troubleshooting

If you encounter issues, here are the most common problems and their solutions:

### CORS and HTTPS issues

**Problem**: "Cross-origin request blocked" or similar CORS errors
**Solution**: 
- Ensure you're using HTTPS (even for local development)
- Verify your domain is allowlisted in the Adobe Developer Console
- Use a proper local server instead of opening files directly in the browser

### SDK initialization errors

**Problem**: "Failed to initialize SDK" or authentication errors
**Solution**:
- Double-check your `clientId` (API key) is correct
- Ensure your `appName` matches the project name in the Developer Console
- Verify your credentials are active and not expired

### Runtime errors

**Problem**: Functions not working as expected
**Solution**:
- Check the browser console for detailed error messages
- Ensure all required parameters are provided
- Verify your implementation follows the correct API signatures

<InlineAlert variant="help" slots="text1" />

For more detailed troubleshooting, check our [comprehensive troubleshooting guide](/guides/troubleshooting/faq/).

## Next steps

Congratulations! You've successfully implemented [feature/task] using the Adobe Express Embed SDK. 

### Enhance your implementation

Now that you have the basics working, consider these enhancements:

- **Explore advanced features**: Learn about [relevant advanced features]
- **Customize the UI**: Modify the appearance to match your brand
- **Add error handling**: Implement more robust error handling and user feedback
- **Optimize performance**: Consider caching and optimization strategies

### Continue learning

Ready for more? Check out these related tutorials:

- [Tutorial 1 link] - Learn about [related topic 1]
- [Tutorial 2 link] - Explore [related topic 2]
- [Tutorial 3 link] - Master [related topic 3]

### Join the community

Have questions or want to share your implementation? 

- Visit the [Adobe Express Embed SDK Community Forum](https://community.adobe.com/t5/adobe-express-embed-sdk/ct-p/ct-express-embed-sdk)
- Check out more [sample applications](https://github.com/AdobeDocs/cc-everywhere/tree/main/samples)
- Follow our [changelog](/guides/changelog/) for the latest updates

## Related resources

- **[API Reference](/reference/)** - Complete SDK documentation
- **[Adobe Express Embed SDK Overview](/guides/)** - High-level introduction
- **[Quickstart Guide](/guides/quickstart/)** - Get up and running quickly
- **[Sample Applications](https://github.com/AdobeDocs/cc-everywhere/tree/main/samples)** - Working code examples
- **[Troubleshooting Guide](/guides/troubleshooting/)** - Solutions to common issues 