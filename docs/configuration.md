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

## Step 0: Partner Intake Form

Make sure you fill out this [Partner Intake Form](https://forms.office.com/r/JzEsxvM3jv).

## Step 1: Create Test Accounts 

For this alpha release, developers must create a "personal" AdobeID, known as a "Type 1" or "Federated" ID for creating API credentials. 
* The tests you run in this account will not be transferrable to another account later. 
* After the alpha release, we will send additional instructions for creating and managing credentials that are associated with your organization. 

After you've created the correct type of account, sign into the [Adobe console](https://developer.adobe.com/console) and make sure you've created the correct type of account. Your login screen should indicate "Personal Account". 

### **Troubleshooting**:
Your existing AdobeID may log in directly, without the prompt for picking which type (Company or Personal) of account. Try using an Incognito window, or a different browser. Clearing adobe.com cookies from your browser should solve the issue.

## Step 2: Send Us Your Test Account(s) AdobeIDs
Send the email addresses you created in [Step 1](#step-1-create-test-accounts) to marichaec@adobe.com and finnegan@adobe.com.
* Marichae will add your test accounts to our developer organization in the [Console](https://developer.adobe.com/console). 
* Once your test account has been successfully added, you can view the organizations associated with your account(s) in the Console. 

## Step 3: Generate a Client Secret

1.  Go to https://developer.adobe.com/console. 
2.  Login with your test credentials from [Step 1](#step-1-create-test-accounts). 
3.  Choose **Create new project**.
4.  Click **Add API** and choose **Creative Cloud Libraries**.
5.  Click **Next** and choose **Android**. 
6.  Save the API configuration and a Client ID (API key) will be generated and displayed on the next page. Copy it. 
7.  (Optional) Name your project. 


Share the following with marichaec@adobe.com and finnegan@adobe.com:
1. Your client ID
2. Your redirect URL 
