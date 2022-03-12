# Configuration Steps

## Table of Contents
* [Overview](../README.md)
* Get Started 
  * [Configuration](configuration.md)
  * [Local Development](local_dev.md)
  * [Quick Start](quickstart.md)
* SDK Components
  * CCX Editor Component
    * [Create Project API](create_project.md)
    * [Open Project API](edit_project.md)
  * [Quick Actions API](quick_actions.md)
* [API References](api_ref.md)
* [Customization](customization.md)
* [Sample](../sample/README.md)
#


Before you begin integrating with this SDK, follow these steps: 

## Step 1: Create Test Accounts 

For this alpha release, developers must create a "personal" AdobeID, known as a "Type 1" or "Federated" ID for creating API credentials. 
* The tests you run in this account will not be transferrable to another account later. 
* After the alpha release, we will send additional instructions for creating and managing credentials that are associated with your organization. 

After you've created the correct type of account, sign into the [Adobe console](https://developer.adobe.com/console) and make sure you've created the correct type of account. Your login screen should indicate "Personal Account". 

### **Troubleshooting**:
Your existing AdobeID may log in directly, without the prompt for picking which type (Company or Personal) of account. Try using an Incognito window, or a different browser. Clearing adobe.com cookies from your browser should solve the issue.

## Step 2: Sign up for an API Key
Sign up for an API Key for by clicking "Add an API" and choosing **CC Libraries API**. For OAuth, choose **Single Page App** and provide your redirect URL. If you want to test the [sample](../sample/), register `https://localhost:8000/redirect.html` as the redirect URI and replace `clientID` (in the sample code) with the one you just created. 
