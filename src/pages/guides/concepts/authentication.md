

# Authentication & Authorization: Token handling and user permissions (Third-Party Integration)

## Overview

The Creative Cloud Everywhere SDK for third-party integrations implements a streamlined authentication system designed specifically for external applications and platforms. Unlike first-party Adobe applications, third-party integrations use a simplified authentication flow with flexible authentication modes to accommodate different integration patterns.

## **Third-Party Authentication Architecture**

### **Core Components**
- **3P AuthController**: Handles third-party authentication workflows
- **AuthStore**: Manages authentication state and credentials
- **AuthOption**: Configuration object defining authentication behavior
- **Agent**: Validates tokens and manages secure communication

### **Authentication Flow**

```
Third-Party App → SDK Initialize → AuthOption → Agent → Adobe IMS → Validation
```

## **Authentication Modes for Third-Party**

The 3P SDK supports two primary authentication modes:

### **1. Delayed Authentication (`AuthMode.DELAYED`)**
**Default mode for third-party integrations**
- Authentication occurs when user first interacts with creative workflows
- Allows SDK initialization without immediate user sign-in
- Provides best user experience for casual interactions

```typescript
import CCEverywhere, { AuthMode } from '@cc-everywhere/sdk/3p';

const authOption = {
  mode: AuthMode.DELAYED,
  config: {
    authIdentifier: 'user@example.com' // Optional
  }
};

const ccEverywhere = await CCEverywhere.initialize(
  hostInfo,
  configParams,
  authOption
);
```

### **2. Upfront Authentication (`AuthMode.UPFRONT`)**
**Immediate authentication required**
- User must authenticate before any SDK functionality
- Ensures authenticated state for all operations
- Suitable for applications requiring guaranteed user identity

```typescript
const authOption = {
  mode: AuthMode.UPFRONT,
  config: {
    authIdentifier: 'user@example.com' // Optional
  }
};
```

## **SDK Initialization with Authentication**

### **Basic Setup**
```typescript
import CCEverywhere, { AuthMode } from '@cc-everywhere/sdk/3p';

// Host information for your application
const hostInfo = {
  clientId: 'your-adobe-client-id',
  appName: 'Your Application Name'
};

// Configuration parameters
const configParams = {
  env: Environment.PRODUCTION,
  locale: Locale.ENGLISH
};

// Authentication option
const authOption = {
  mode: AuthMode.DELAYED // or AuthMode.UPFRONT
};

// Initialize SDK
const ccEverywhere = await CCEverywhere.initialize(
  hostInfo,
  configParams,
  authOption
);
```

### **Advanced Authentication Configuration**
```typescript
// With auth identifier for targeted authentication
const authOption = {
  mode: AuthMode.DELAYED,
  config: {
    authIdentifier: 'user@company.com'
  }
};

// Or for immediate authentication
const authOption = {
  mode: AuthMode.UPFRONT,
  config: {
    authIdentifier: 'user@company.com'
  }
};
```

## **Authentication State Management**

### **AuthStore Integration**
The SDK automatically manages authentication state through the AuthStore:

```typescript
// Authentication state is managed internally
// Access through SDK workflows automatically handles auth state

// Example: Editor workflow will trigger authentication if needed
ccEverywhere.editor.create({
  // Document configuration
}, {
  // App configuration  
}, {
  // Export configuration
});
```

### **Authentication Events**
The SDK handles authentication events transparently:
- **Authentication Required**: Prompts user when needed
- **Authentication Success**: Enables all SDK functionality
- **Authentication Failure**: Provides error handling and retry options
- **Token Refresh**: Automatically managed by the SDK

## **Security Model for Third-Party**

### **Client ID Validation**
Every third-party integration requires:
```typescript
const hostInfo = {
  clientId: 'your-registered-adobe-client-id', // Required
  appName: 'Your Application Name'
};
```

### **Origin-Based Security**
- SDK validates requests against registered domains
- Cross-origin communication secured through message channels
- Token validation includes referrer checking

### **Permission Scopes**
Third-party applications have access to:
- **Editor Workflows**: Create, edit designs with templates and assets
- **Module Workflows**: Image editing and text-to-image generation  
- **Quick Actions**: Image, video, and document processing

## **Error Handling**

### **Authentication Errors**
```typescript
try {
  const ccEverywhere = await CCEverywhere.initialize(
    hostInfo,
    configParams,
    authOption
  );
} catch (error) {
  // Handle initialization errors
  console.error('SDK initialization failed:', error);
}
```

### **Runtime Authentication Issues**
- **Invalid Token**: SDK automatically prompts for re-authentication
- **Expired Session**: Transparent token refresh handling
- **Permission Denied**: Clear error messages for insufficient permissions
- **Network Issues**: Retry mechanisms with exponential backoff

## **Best Practices for Third-Party Integration**

### **1. Choose Appropriate Auth Mode**
```typescript
// For content creation apps - use DELAYED
const authOption = { mode: AuthMode.DELAYED };

// For authenticated platforms - use UPFRONT  
const authOption = { mode: AuthMode.UPFRONT };
```

### **2. Handle Authentication Gracefully**
```typescript
// Let SDK handle authentication flow
ccEverywhere.editor.create(); // Will prompt for auth if needed

// Monitor for authentication state changes through callbacks
```

### **3. Provide User Context**
```typescript
// Include user identifier when available
const authOption = {
  mode: AuthMode.DELAYED,
  config: {
    authIdentifier: currentUser.email
  }
};
```

### **4. Error Recovery**
```typescript
// Implement proper error handling
try {
  ccEverywhere.editor.create(docConfig);
} catch (error) {
  if (error.code === 'AUTHENTICATION_REQUIRED') {
    // Guide user through authentication
  }
}
```

## **Third-Party Specific Features**

### **Sign-In Workflow Support**
```typescript
// 3P AuthController supports sign-in workflows
const authController = new AuthController(/* parameters */);
const supportsSignIn = authController.doesSupportSignInWorkflow(); // returns true
```

### **Flexible Target URL Handling**
```typescript
// Direct URL handling for third-party scenarios
const targetUrl = await authController.getTargetUrl(targetInfo);
// Returns the exact URL without modification
```

## **Integration Examples**

### **SaaS Platform Integration**
```typescript
// For platforms where users may not be Adobe users
const authOption = {
  mode: AuthMode.DELAYED,
  config: {
    authIdentifier: platform.getCurrentUser().email
  }
};
```

### **Creative Tool Integration**
```typescript
// For creative applications requiring immediate access
const authOption = {
  mode: AuthMode.UPFRONT
};
```

### **E-commerce Platform**
```typescript
// For product customization features
const authOption = {
  mode: AuthMode.DELAYED // Allow browsing before authentication
};
```

This third-party authentication system provides flexibility while maintaining security, enabling seamless integration of Creative Cloud capabilities into external applications and platforms.