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

This guide will walk you through the process of setting up client-based entitlement for your Adobe SDK integration. By the end of this onboarding, you'll have a fully configured environment that supports embedded SDK client functionality.

## Architecture Overview

The client-based entitlement system consists of several components working together:

### Infrastructure Requirements

You'll need to set up the following infrastructure components:

#### 1. Business Registration

- **Onboard with Adobe**: Register with Adobe Firely Services
- **Purchase Entitlements**: Acquire the necessary service entitlements for your use case
- **Account Setup**: Ensure your organization has the appropriate licenses and permissions

#### 2. Backend Service Layer

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

#### 3. Application Layer

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

#### 4. Security Considerations

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

## Step-by-Step Setup

### Step 1: Add Firefly Services to Your Project

1. Navigate to your project in Developer Console
2. Follow [this guide](https://developer.adobe.com/firefly-services/docs/guides/get-started/) to add "Firefly - Firefly Services" API to your project
3. Verify the API has been successfully added to your project

### Step 2: Configure OAuth Server-to-Server

1. In your Developer Console project, locate the OAuth settings

![Screenshot: Developer Console - OAuth Settings Location](screenshot-placeholder-oauth-settings.png)
*Screenshot showing where to find OAuth settings in Developer Console*

2. Share your **Technical Account ID** and **Client ID** with Adobe (**Manual Process**)
   - You can find these details by clicking on "OAuth Server to Server" in the side panel
   - This is a manual coordination step that requires direct communication with Adobe

![Screenshot: Developer Console - Technical Account ID and Client ID](screenshot-placeholder-oauth-credentials.png)
*Screenshot highlighting the location of Technical Account ID and Client ID in the OAuth Server to Server panel*

3. Adobe will use these credentials to configure rate limiting based on your Technical Account ID
   - This process may take some time to complete
   - You'll be notified when the configuration is ready

### Step 3: Set Up Token Management

Adobe will configure token expiry settings for your service with the following recommendations:

**Recommended Configuration:**
- **Token Expiry Time:** 5 minutes
- **Refresh Interval:** 4 minutes (1 minute before expiry)

**Implementation Requirements:**
- Generate new tokens regularly before expiry
- Implement proper token refresh logic in your application
- Monitor token expiration to ensure uninterrupted service

For detailed implementation guidance, refer to the [token management documentation](https://developer.adobe.com/firefly-services/docs/guides/authentication/).

### Step 4: Configure Service Endpoint

**Important:** You must set up your own service to fetch tokens. This is a requirement for client-based entitlement integration.

1. Set up a backend service endpoint to generate tokens
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

### Step 5: Enable Client-Side Integration

1. Ensure your application can call your backend service
2. Implement token refresh logic that triggers before expiry
3. Configure your application to use the project's client ID, client secret, and scope for MPS API calls

#### SDK Implementation Details

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

**Need Help?** Contact your Adobe integration team or refer to the support resources listed above.
