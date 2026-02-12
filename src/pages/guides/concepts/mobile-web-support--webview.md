---
keywords:
  - Embed SDK
  - Mobile Web
  - Browser Support
  - skipBrowserSupportCheck
  - Mobile Devices
  - Cross-Platform
  - Responsive Design
  - Android
  - iOS
  - WebView
  - Kotlin
  - Swift
  - SUSI
description: Enable mobile web support in the WebView using the Adobe Express Embed SDK and the skipBrowserSupportCheck configuration parameter.
contributors:
  - https://github.com/undavide
---

# Mobile Web in a WebView

Mobile Web experiences can be delivered through a WebView in native iOS/Android mobile apps.

## When to Use Mobile Web in a WebView

As discussed in the [Overview](./mobile-web-support--overview.md), there are trade-offs between Mobile Web and Mobile SDKs. While we suggest evaluating the Mobile SDKs when possible, it makes sense to rely on the Mobile Web approach when **the Embed experience is just one element of a larger app that is already served through a WebView**.

## Prerequisites

Before implementing iOS/Android WebView support, we recommend reviewing the following resources first:

- **[Mobile Web Overview](./mobile-web-support--overview.md)**: Learn about the different ways to implement mobile web support.
- **[Mobile Web in the Browser](./mobile-web-support--browser.md)**: Familiarize yourself with the Mobile Web approach in the Browser.

## How to Implement Mobile Web in a WebView

The WebView implementation **relies on Mobile-friendly Web content**. This means that the Embed integration and the experience that it is delivered into should be designed to work well on small screens and touch interfaces.

On the native, mobile app side, you need to ensure that the WebView is properly configured to allow the end-to-end Embed experience to work seamlessly.

### Embed SDK Configuration

Make sure that you pass the `skipBrowserSupportCheck` parameter to the `initialize` function as described in this [Configuration](./mobile-web-support--browser.md#configuration) section.

```javascript-data-line="8"
const hostInfo = {
  clientId: "your-client-id", // Your application client ID
  appName: "your-app-name",   // Your application name
};

// Enable the experience in Mobile devices by skipping browser compatibility checks
const configParams = {
  skipBrowserSupportCheck: true // 👈
};

// Initialize the Adobe Express Embed SDK
const { editor, module, quickAction } = await window.CCEverywhere.initialize(
  hostInfo,
  configParams
);
```

Follow the same best practices for mobile UI design and implementation as described in the [Mobile Web in the Browser](./mobile-web-support--browser.md#advanced-configuration) guide.

### Multi-platform WebView Configuration

Implementing the Adobe Express Embed SDK in a WebView requires careful configuration, particularly **the authentication flow that relies on popup windows**. The WebView must be configured to handle JavaScript execution, enable persistent storage, and most importantly, support multiple windows for OAuth-based sign-in dialogs.

#### Understanding WebView Requirements

The Adobe sign-in experience opens in a separate popup window. This behavior requires the WebView to create and manage additional windows dynamically. **Without proper configuration, these authentication popups will fail silently**, leaving users unable to complete the sign-in process. The configuration also needs to address other technical requirements like cookie management and user agent handling to ensure compatibility with modern web authentication systems.

### Android Settings

All the settings discussed in this and the following sections belong to a single `configureWebView()` method that is called during Activity creation.

```kotlin
val webSettings = webView?.settings

// Enable cookies before loading any content
webView?.let { enableCookies(it) }

// Enable hardware acceleration for better performance
webView?.setLayerType(View.LAYER_TYPE_HARDWARE, null)

// Enable JavaScript execution
webSettings?.javaScriptEnabled = true
webSettings?.domStorageEnabled = true
webSettings?.databaseEnabled = true

// Configure caching behavior
webSettings?.cacheMode = WebSettings.LOAD_DEFAULT

// Maintain consistent text sizing
webSettings?.textZoom = 100
```

The very first operation is **enabling cookies**, which is covered in detail in a [later section](#cookie-configuration-for-authentication-persistence). It is important to configure cookie acceptance before any content is loaded so that session data can be stored from the outset.

**JavaScript execution** is the next critical requirement since the Embed SDK is implemented entirely in JavaScript. Enabling `domStorageEnabled` provides **access to localStorage and sessionStorage**, which the SDK uses to persist user preferences and maintain session state. The `databaseEnabled` setting allows the WebView to use IndexedDB for more sophisticated client-side storage needs. Together, these settings create an environment where the Embed SDK can function as it would in a standard mobile browser.

**Hardware acceleration** significantly improves rendering performance, particularly important when users are working with image editing and generation features that require smooth, responsive interfaces. The `textZoom` setting prevents the WebView from applying automatic text scaling, which could break the carefully designed responsive layouts of the Embed SDK interface.

#### Enabling Multiple Windows for Authentication

The most critical configuration for supporting Adobe Express authentication is **enabling multiple windows**. This allows the WebView to spawn popup dialogs when users initiate the sign-in flow.

```kotlin
// Enable multiple windows for sign-in dialogs
webSettings?.javaScriptCanOpenWindowsAutomatically = true
webSettings?.setSupportMultipleWindows(true)
```

These two settings work in tandem. The `javaScriptCanOpenWindowsAutomatically` setting allows JavaScript code to programmatically open new windows using `window.open()`, which is how the Adobe authentication system initiates the sign-in dialog. The `setSupportMultipleWindows` setting tells the WebView to support the underlying multi-window architecture, enabling the `WebChromeClient` to intercept and handle window creation requests.

#### Handling OAuth Compatibility

Google and other OAuth providers implement security measures that block authentication in WebViews by detecting the WebView-specific user agent string. Android WebViews include a `"; wv"` marker in their user agent that OAuth systems use to identify and reject authentication attempts. To work around this limitation, the user agent string must be modified to remove these WebView markers.

```kotlin
// Remove WebView identifier for OAuth compatibility
val originalUA = webSettings?.userAgentString ?: ""
if (originalUA.contains("; wv")) {
    webSettings?.userAgentString = originalUA.replace("; wv)", ")")
                                              .replace("; wv ", " ")
}
```

This modification transforms the WebView's user agent to appear more like a standard mobile browser, allowing OAuth authentication flows to proceed. Without this change, users would encounter authentication failures when trying to sign in to Adobe Express, rendering the integration unusable for workflows that require user accounts.

#### Implementing Window Creation with `WebChromeClient`

When JavaScript calls `window.open()` to display the sign-in dialog, the WebView needs instructions on how to handle this request. The `WebChromeClient`'s `onCreateWindow` method provides the mechanism to intercept window creation requests and present them to users in a way that makes sense within the mobile app context.

```kotlin
webView?.webChromeClient = object : WebChromeClient() {
    override fun onCreateWindow(
        view: WebView?,
        isDialog: Boolean,
        isUserGesture: Boolean,
        resultMsg: Message?
    ): Boolean {
        // Create a new WebView for the popup
        val newWebView = WebView(this@MainActivity)
        setupPopupWebView(newWebView)

        // Create a fullscreen dialog to display the popup
        val dialog = Dialog(this@MainActivity,
                          android.R.style.Theme_Black_NoTitleBar_Fullscreen)
        dialog.setContentView(newWebView)
        dialog.show()

        // Set up close handler
        newWebView.webChromeClient = object : WebChromeClient() {
            override fun onCloseWindow(window: WebView?) {
                dialog.dismiss()
            }
        }

        // Send the new WebView to the requesting WebView
        val transport = resultMsg?.obj as? WebView.WebViewTransport
        transport?.webView = newWebView
        resultMsg?.sendToTarget()

        return true
    }
}
```

This implementation creates a completely new WebView instance for the popup window and displays it in a fullscreen dialog. The `onCloseWindow` handler ensures that when the authentication process completes, the popup dialog is properly dismissed and resources are cleaned up.

The critical final step is **linking the new WebView back to the original through the WebViewTransport mechanism**. The transport delivers the newly created WebView to the system so that the URL requested by `window.open()` is loaded in it, and it establishes the JavaScript `window.opener` relationship between the popup and the main page. Once the user completes authentication, the session persists through two complementary channels: cookies set during the OAuth flow are stored by Android's CookieManager, which is a singleton shared across all WebView instances in the process, and the popup can communicate the result back to the opener via `window.opener.postMessage()` or by simply closing itself. **Without this transport wiring, the popup would never receive the authentication URL and the sign-in flow could not even begin.**

#### Configuring Popup WebViews

**The popup WebView that handles authentication must be configured with the same essential settings as the main WebView.** This ensures consistent behavior and prevents authentication failures due to missing capabilities in the popup window.

```kotlin
@SuppressLint("SetJavaScriptEnabled")
private fun setupPopupWebView(popupWebView: WebView) {
    val webSettings = popupWebView.settings
    enableCookies(popupWebView)

    // Enable essential web features
    webSettings.javaScriptEnabled = true
    webSettings.domStorageEnabled = true
    webSettings.databaseEnabled = true

    // Configure caching and display
    webSettings.cacheMode = WebSettings.LOAD_DEFAULT
    webSettings.textZoom = 100

    // Enable multiple windows for nested popups if needed
    webSettings.javaScriptCanOpenWindowsAutomatically = true
    webSettings.setSupportMultipleWindows(true)

    // Remove WebView identifier for OAuth compatibility
    val originalUA = webSettings.userAgentString ?: ""
    if (originalUA.contains("; wv")) {
        webSettings.userAgentString = originalUA.replace("; wv)", ")")
                                                .replace("; wv ", " ")
    }

    // Set WebViewClient for navigation handling
    popupWebView.webViewClient = WebViewClient()
}
```

#### Cookie Configuration for Authentication Persistence

OAuth authentication relies on cookies to maintain session state and communicate tokens between the authentication popup and the main application. **Android WebViews require explicit configuration to accept and persist cookies**, particularly third-party cookies that OAuth systems often use.

```kotlin
private fun enableCookies(wv: WebView) {
    val cm = CookieManager.getInstance()
    cm.setAcceptCookie(true)
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
        cm.setAcceptThirdPartyCookies(wv, true)
    }
    cm.flush()
}
```

The `CookieManager` must be configured to accept both first-party and third-party cookies. First-party cookies store session information for the Adobe Express domain, while third-party cookies may be used by authentication providers during the OAuth flow. The `flush()` call ensures that cookie settings are immediately persisted to disk, preventing issues where cookies might be lost if the app is terminated during or shortly after authentication.

**This cookie configuration should be applied to both the main WebView and any popup WebViews created for authentication**. Failing to enable cookies in popup windows will cause authentication to fail even if all other settings are correct, as the authentication system will be unable to set the necessary session cookies.

#### Complete Configuration Flow

The Activity only needs to locate the WebView and call `configureWebView()`. All the settings discussed in the previous sections—cookie management, JavaScript and storage capabilities, multi-window support, user agent modification, the WebChromeClient, and the WebViewClient—live inside that single method.

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)

    webView = findViewById(R.id.webview)
    configureWebView()
}
```

The full `configureWebView()` method ties all the pieces together in the order they were introduced above. The WebViewClient assigned at the end provides basic navigation handling and ensures that page loads stay within the WebView rather than launching an external browser application.

```kotlin
@SuppressLint("SetJavaScriptEnabled")
private fun configureWebView() {
    val webSettings = webView?.settings
    webView?.let { enableCookies(it) }

    webView?.setLayerType(View.LAYER_TYPE_HARDWARE, null)

    webSettings?.javaScriptEnabled = true
    webSettings?.domStorageEnabled = true
    webSettings?.databaseEnabled = true
    webSettings?.cacheMode = WebSettings.LOAD_DEFAULT
    webSettings?.textZoom = 100

    webSettings?.javaScriptCanOpenWindowsAutomatically = true
    webSettings?.setSupportMultipleWindows(true)

    val originalUA = webSettings?.userAgentString ?: ""
    if (originalUA.contains("; wv")) {
        webSettings?.userAgentString = originalUA.replace("; wv)", ")")
                                                  .replace("; wv ", " ")
    }

    webView?.webChromeClient = object : WebChromeClient() {
        override fun onCreateWindow(
            view: WebView?, isDialog: Boolean,
            isUserGesture: Boolean, resultMsg: Message?
        ): Boolean {
            val newWebView = WebView(this@MainActivity)
            setupPopupWebView(newWebView)

            val dialog = Dialog(this@MainActivity,
                               android.R.style.Theme_Black_NoTitleBar_Fullscreen)
            dialog.setContentView(newWebView)
            dialog.show()

            newWebView.webChromeClient = object : WebChromeClient() {
                override fun onCloseWindow(window: WebView?) {
                    dialog.dismiss()
                }
            }

            val transport = resultMsg?.obj as? WebView.WebViewTransport
            transport?.webView = newWebView
            resultMsg?.sendToTarget()
            return true
        }
    }

    webView?.webViewClient = WebViewClient()
}
```

With this configuration in place, the Android WebView provides a fully capable runtime environment for the Adobe Express Embed SDK, supporting not only the core creative workflows but also the authentication flows that enable users to access their Adobe accounts and preferences.

#### Full Android Example

<CodeBlock slots="heading, code" repeat="1"/>

#### MainActivity.kt

```kotlin
package com.example.embedsdk

import android.annotation.SuppressLint
import android.app.Dialog
import android.os.Bundle
import android.view.View
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Button
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import android.os.Build
import android.os.Message
import android.webkit.CookieManager


class MainActivity : AppCompatActivity() {
    private var webView: WebView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
        webView = findViewById(R.id.webview)
        configureWebView()
        setUpHandlers()
    }

    @SuppressLint("SetJavaScriptEnabled")
    private fun configureWebView() {
        val webSettings = webView?.settings
        webView?.let { enableCookies(it) }
        // Enable hardware acceleration
        webView?.setLayerType(View.LAYER_TYPE_HARDWARE, null)

        // Enable JavaScript optimizations
        webSettings?.javaScriptEnabled = true
        webSettings?.domStorageEnabled = true
        webSettings?.databaseEnabled = true

        // Enable caching
        webSettings?.cacheMode = WebSettings.LOAD_DEFAULT

        // Set default text size (no zoom)
        webSettings?.textZoom = 100

        // Enable multiple windows
        webSettings?.javaScriptCanOpenWindowsAutomatically = true
        webSettings?.setSupportMultipleWindows(true)

        // Remove WebView identifier for OAuth compatibility
        // Google blocks WebViews by detecting "; wv" in user agent
        val originalUA = webSettings?.userAgentString ?: ""
        if (originalUA.contains("; wv")) {
            webSettings?.userAgentString = originalUA.replace("; wv)", ")").replace("; wv ", " ")
        }

        // Set up WebChromeClient to handle new windows
        webView?.webChromeClient = object : WebChromeClient() {
            override fun onCreateWindow(
                view: WebView?,
                isDialog: Boolean,
                isUserGesture: Boolean,
                resultMsg: Message?
            ): Boolean {
                // Create a new WebView for the popup
                val newWebView = WebView(this@MainActivity)
                setupPopupWebView(newWebView)

                // Create a dialog to display the new WebView
                val dialog = Dialog(this@MainActivity, android.R.style.Theme_Black_NoTitleBar_Fullscreen)

                dialog.setContentView(newWebView)
                dialog.show()

                // Set up close handler when the popup window closes
                newWebView.webChromeClient = object : WebChromeClient() {
                    override fun onCloseWindow(window: WebView?) {
                        dialog.dismiss()
                    }
                }

                // Send the new WebView to the requesting WebView
                val transport = resultMsg?.obj as? WebView.WebViewTransport
                transport?.webView = newWebView
                resultMsg?.sendToTarget()

                return true
            }
        }

        // Set a basic WebViewClient
        webView?.webViewClient = WebViewClient()
    }

    @SuppressLint("SetJavaScriptEnabled")
    private fun setupPopupWebView(popupWebView: WebView) {
        val webSettings = popupWebView.settings
        enableCookies(popupWebView)
        // Enable JavaScript optimizations
        webSettings.javaScriptEnabled = true
        webSettings.domStorageEnabled = true
        webSettings.databaseEnabled = true

        // Enable caching
        webSettings.cacheMode = WebSettings.LOAD_DEFAULT

        // Set default text size (no zoom)
        webSettings.textZoom = 100

        // Enable multiple windows
        webSettings.javaScriptCanOpenWindowsAutomatically = true
        webSettings.setSupportMultipleWindows(true)

        // Remove WebView identifier for OAuth compatibility
        // Google blocks WebViews by detecting "; wv" in user agent
        val originalUA = webSettings.userAgentString ?: ""
        if (originalUA.contains("; wv")) {
            webSettings.userAgentString = originalUA.replace("; wv)", ")").replace("; wv ", " ")
        }

        // Set WebViewClient for the popup
        popupWebView.webViewClient = WebViewClient()
    }

    private fun setUpHandlers() {
        findViewById<Button>(R.id.btnLoad)
            .setOnClickListener {
                webView?.loadUrl("your-embed-experience-url")
            }
    }

    private fun enableCookies(wv: WebView) {
        val cm = CookieManager.getInstance()
        cm.setAcceptCookie(true)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            cm.setAcceptThirdPartyCookies(wv, true)
        }
        cm.flush()
    }
}
```

And something here
