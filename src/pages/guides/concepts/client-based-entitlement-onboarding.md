---
keywords:
  - Client-based entitlement
  - Adobe Embed SDK
  - Firefly Services integration
  - OAuth Server-to-Server
  - Token management
  - Authentication flow
  - Backend service setup
  - ClientAuthProvider
  - Adobe IMS
  - Generate Image Module
  - Technical Account ID
  - Client ID
  - Rate limiting
  - Adobe Developer Console
  - Service endpoint configuration
  - Security implementation
  - Application integration
  - Token refresh
  - Business registration
  - Infrastructure setup
title: Client-Based Entitlement Onboarding Guide
description: Complete onboarding guide for implementing client-based entitlement with Adobe SDK integration. Learn how to set up backend services, configure OAuth authentication, implement token management, and integrate with Adobe's Generate Image Module through secure service endpoints.
contributors:
  - https://github.com/nimithajalal
  - https://github.com/undavide
---

# Client-Based Entitlement Onboarding Guide

## Overview

This guide will walk you through the process of onboarding as a partner to use the Generate Image Module with client-based entitlement. This integration allows you to provide Firefly Services credits directly to your users through your application. By the end of this onboarding, you'll have a fully configured environment that supports embedded SDK client functionality with Firefly Services integration.

## Implementation Requirements

To implement client-based entitlement, you need to set up three main components:

<!-- ![Implementation Architecture Overview](./img/implementation-requirements-diagram.png)
*Diagram showing the implementation requirements and architecture components for client-based entitlement* -->

### Business Requirements

- **Onboard with Adobe**: Onboard with [Adobe Firely Services](https://business.adobe.com/products/firefly-business/firefly-services.html)
- **Purchase Entitlements**: Acquire the necessary service entitlements for your use case
- **Account Setup**: Ensure your organization has the appropriate licenses and permissions

### Backend Service Layer

You must implement a **Backend Service** that acts as a secure intermediary between your applications and Adobe services:

**Key Responsibilities:**

- **Token Generation**: Obtain client tokens using your client ID and secret
- **Security Management**: Keep client secrets secure and never expose them to application-side code
- **Token Refresh**: Handle token expiration and renewal automatically
- **Authentication**: Integrate with Adobe IMS (Identity Management System) for secure token exchange

**Service Requirements:**

- Secure server environment (HTTPS required)
- Ability to make server-to-server API calls to Adobe IMS
- Token caching and management capabilities
- Error handling and retry logic for token requests

### Application Layer

Your **Application** running in the browser will:

**Integration Points:**

- **Embed SDK Integration**: Initialize the Adobe Embed SDK with proper configuration
- **Token Provider**: Implement a ClientAuthProvider that communicates with your Backend Service
- **Token Management**: Handle token refresh scenarios (startup, expiry, errors)
- **User Experience**: Provide seamless integration with Adobe's Generate Image Module

**Token Flow Scenarios:**

- **On Startup**: Request initial token from your Backend Service
- **Token Expiry**: Automatically refresh tokens before they expire
- **Token Error**: Handle token failures gracefully with fallback mechanisms

### Security Considerations

- **Client Secrets**: Never expose client secrets in application-side code
- **Token Scope**: Use appropriate scopes for your specific use case
- **Rate Limiting**: Implement proper rate limiting to avoid exceeding quota
- **User Privacy**: Handle user data according to privacy regulations

## Prerequisites

Before you begin, ensure you have:

- [ ] An organization created on [Admin Console](https://adminconsole.adobe.com/)
- [ ] A developer account on [Developer Console](https://developer.adobe.com/console)
- [ ] Admin access to your Adobe organization
- [ ] Basic understanding of API integration concepts

Now that you have the prerequisites in place, let's walk through the step-by-step process to onboard as a partner and configure client-based entitlement for the Generate Image Module.

## Step 1: Add Firefly Services to Your Project

1. Navigate to your project in Developer Console
2. Follow [this guide](https://developer.adobe.com/firefly-services/docs/guides/get-started/) to add "Firefly - Firefly Services" API to your project
3. Verify the API has been successfully added to your project

## Step 2: Share Project Details with Adobe 

1. In your Developer Console project, navigate to the OAuth settings: **Projects > Your project > Credentials > OAuth Server-to-Server**

2. Share your **Technical Account ID** and **Client ID** with Adobe (**Manual Process**)

   - You can find these details in the OAuth Server-to-Server credentials section
   - This is a manual coordination step that requires direct communication with Adobe

![Screenshot: Developer Console - OAuth Settings Location](./img/screenshot-oauth-settings.png)
*Screenshot showing where to find OAuth settings in Developer Console*

Adobe will use these credentials to configure rate limiting based on your Technical Account ID

   - This process may take some time to complete
   - You'll be notified when the configuration is ready

<InlineAlert variant="info" slots="text" />

**Rate Limiting Coordination**: Work with your Adobe account manager or partner manager to determine an appropriate rate limit (RPM - Requests Per Minute) based on your expected traffic volume, Monthly Active Users (MAU), and peak usage patterns. Adobe Firefly API has default rate limits of **4 requests per minute (RPM)** and **9,000 requests per day (RPD)** per organization. Higher limits can be requested through your account manager. For more details, see the [Rate Limits documentation](https://developer.adobe.com/firefly-services/docs/firefly-api/guides/concepts/rate-limits/).

## Step 3: Set Up Token Management 

<InlineAlert variant="help" slots="text1, text2, text3" />

Adobe will configure token expiry settings for your service with the following recommendations:

**Recommended Configuration:**

- **Token Expiry Time:** 5 minutes
- **Refresh Interval:** 4 minutes (1 minute before expiry)

**Implementation Requirements:**

- Generate new tokens regularly before expiry. 
- Implement proper token refresh logic in your application
- Monitor token expiration to ensure uninterrupted service

For detailed implementation guidance on authentication and token management, refer to the [Firefly Services Authentication documentation](https://developer.adobe.com/firefly-services/docs/firefly-api/guides/concepts/authentication/).

## Step 4: Implement Backend Authentication

**Important:** You must set up a secure backend service to authenticate with Adobe IMS. This is a requirement for client-based entitlement integration.

Your backend service must securely authenticate with Adobe IMS to retrieve access tokens. Based on the [Firefly Services Authentication guide](https://developer.adobe.com/firefly-services/docs/firefly-api/guides/concepts/authentication/), implement the following:

1. **Secure Credential Storage**: Store your Client ID and Client Secret securely on your server
2. **Token Retrieval**: Make requests to Adobe IMS endpoint to obtain access tokens
3. **Token Management**: Handle token expiration (tokens are valid for 24 hours)

**Example Server-Side Token Retrieval:**

```javascript
// Server-side token retrieval
async function getAccessToken() {
  const response = await fetch('https://ims-na1.adobelogin.com/ims/token/v3', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
      'client_id': process.env.FIREFLY_SERVICES_CLIENT_ID,
      'client_secret': process.env.FIREFLY_SERVICES_CLIENT_SECRET,
      'scope': 'openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis'
    })
  });
  
  const data = await response.json();
  return {
    access_token: data.access_token,
    expires_in: data.expires_in
  };
}
```

## Step 5: Create Your Backend API Endpoint

Set up an API endpoint in your backend service that your client applications can call to retrieve tokens in the required format.

1. Create a secure API endpoint (e.g., `/api/client-token`)
2. Configure the endpoint to return:

   - `"clientAccessToken"`
   - `"tokenExpiryTimestampMs"`
   - `"tokenId"` (optional field for user identification)

**Response Format:**

```json
{
  "clientAccessToken": "your-generated-token",
  "tokenExpiryTimestampMs": 1234567890123,
  "tokenId": "optional-user-identifier"
}
```

**Example Client-Side Token Request:**

```javascript
// Client-side token request to your backend
async function fetchClientToken() {
  const response = await fetch('/api/client-token', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer your-internal-auth-token'
    }
  });
  
  const tokenData = await response.json();
  return {
    clientAccessToken: tokenData.clientAccessToken,
    tokenExpiryTimestampMs: tokenData.tokenExpiryTimestampMs,
    userGuid: tokenData.tokenId
  };
}
```

## Step 6: Enable Client-Side Integration

1. Ensure your application can call your backend service
2. Implement token refresh logic that triggers before expiry
3. Configure your application to use the project's client ID, client secret, and scope for MPS API calls

### SDK Implementation Details

**Initialize SDK with ClientAuthProvider:**

```javascript

// Initialize SDK with client auth provider
const ccEverywhere = await CCEverywhere.initialize({
    clientId: 'your-client-id',
    appName: 'Your App Name'
}, {
    env: Environment.PRODUCTION,
    locale: Locale.ENGLISH
}, authOption, clientAuthProvider);

// configParams and authOption are optional params and those can be passed as undefined
// Initialize SDK with client auth provider
const ccEverywhere = await CCEverywhere.initialize({
    clientId: 'your-client-id',
    appName: 'Your App Name'
}, undefined, undefined, clientAuthProvider);
```

**ClientAuthProvider Interface:**

The `clientAuthProvider` callback should return an object containing token, expiry time, and user GUID in the appropriate format:

```typescript

interface ClientAuthProvider {
    (): Promise<ClientAuthDetails>;
}

interface ClientAuthDetails {
    /**
     * The client access token.
     */
    clientAccessToken: string;

    /**
     * The expiration timestamp (in milliseconds since epoch) for the client access token.
     * This is used to determine when the token needs to be refreshed.
     */
    tokenExpiryTimestampMs: number;

    /**
     * Unique identifier (UUID) for the logged-in user.
     * Useful for rate limiting.
     * The UUID must follow the pattern described here: https://developer.mozilla.org/en-US/docs/Glossary/UUID.
     * Example: '75df9e44-98a5-43a9-b2ff-d884d3af12cc'.
     * It's a 36-character, hyphenated, case-insensitive hexadecimal string.
     */
    userGuid: string;
}
```

**Enable Client Authentication:**

Set `useClientAuth` to `true` in `appConfig` when `createImageFromText` is invoked:

```typescript

/**
 * Flag to explicitly opt-in to use client authentication.
 * When true, client access token will be fetched from the partner and used in the module.
 * @default false
 */
useClientAuth?: boolean;
```

4. Verify that tokens are being generated and refreshed properly

## Verification Checklist

Before going live, verify the following:

- [ ] Firefly Services API is added to your project
- [ ] Technical Account ID and Client ID are shared with Adobe
- [ ] Rate limiting configuration is confirmed by Adobe
- [ ] Token expiry is set to recommended 5 minutes
- [ ] Backend service endpoint is properly configured
- [ ] Application successfully retrieves and refreshes tokens
- [ ] API calls are working with generated tokens

## Troubleshooting

### Common Issues

1. **Token Expiry Too Short/Long:** Ensure 5-minute expiry is configured
2. **Rate Limiting Issues:** Verify Technical Account ID is properly configured
3. **Authentication Failures:** Check client ID and secret configuration
4. **Token Refresh Failures:** Verify backend service endpoint is accessible

### Support Resources

- [Firefly Services Documentation](https://developer.adobe.com/firefly-services/docs/)
- [Authentication Guide](https://developer.adobe.com/firefly-services/docs/guides/authentication/)
- [Developer Console Support](https://developer.adobe.com/console)

## Next Steps

Once your setup is complete and verified:

1. Test your integration in a development environment
2. Monitor token usage and refresh patterns
3. Implement proper error handling for token-related issues
4. Plan for production deployment
