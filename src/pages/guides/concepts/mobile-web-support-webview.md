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

## When to use Mobile Web in a WebView

As discussed in the [Overview](./mobile-web-support-overview.md), there are trade-offs between Mobile Web and Mobile SDKs. While we suggest evaluating the Mobile SDKs when possible, it makes sense to rely on the Mobile Web approach when **the Embed experience is just one element of a larger app that is already served through a WebView**.

## Prerequisites

Before implementing iOS/Android WebView support, we recommend reviewing the following resources first:

- **[Mobile Web Overview](./mobile-web-support-overview.md)**: Learn about the different ways to implement mobile web support.
- **[Mobile Web in the Browser](./mobile-web-support-browser.md)**: Familiarize yourself with the Mobile Web approach in the Browser.

Knowledge of **native Android/iOS development** is also required.

## How to implement Mobile Web in a WebView

The WebView implementation **relies on Mobile-friendly Web content**. This means that the Embed integration and the experience that it is delivered into should be designed to work well on small screens and touch interfaces.

On the native, mobile app side, you need to ensure that the WebView is properly configured to allow the end-to-end Embed experience to work seamlessly.

### Embed SDK Configuration

Make sure that you pass the `skipBrowserSupportCheck` parameter to the `initialize` function as described in this [Configuration](./mobile-web-support-browser.md#configuration) section.

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

Follow the same best practices for mobile UI design and implementation as described in the [Mobile Web in the Browser](./mobile-web-support-browser.md#advanced-configuration) guide.

### Multi-platform WebView Configuration

Implementing the Adobe Express Embed SDK in a WebView requires careful configuration, particularly **the authentication flow that relies on popup windows**. The WebView must be configured to handle JavaScript execution, enable persistent storage, and most importantly, support multiple windows for OAuth-based sign-in dialogs.

<InlineAlert slots="heading, text" variant="info"/>

#### Understanding WebView Requirements

The Adobe sign-in experience opens in a separate popup window. This behavior requires the WebView to create and manage additional windows dynamically. **Without proper configuration, these authentication popups will fail silently**, leaving users unable to complete the sign-in process. The configuration also needs to address other technical requirements like cookie management and user agent handling to ensure compatibility with modern web authentication systems.

## Android Implementation

All the settings discussed in this and the following sections belong to a single `configureWebView()` method that is called during Activity creation.

The following snippet enables cookies, hardware acceleration, JavaScript execution, DOM storage, and caching for the WebView:

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

### 1. Enabling Multiple Windows for Authentication

<InlineAlert slots="text" variant="info"/>

The most critical configuration for supporting Adobe Express authentication is **enabling multiple windows**. This allows the WebView to spawn popup dialogs when users initiate the sign-in flow.

```kotlin
// Enable multiple windows for sign-in dialogs
webSettings?.javaScriptCanOpenWindowsAutomatically = true
webSettings?.setSupportMultipleWindows(true)
```

These two settings work in tandem. The `javaScriptCanOpenWindowsAutomatically` setting allows JavaScript code to programmatically open new windows using `window.open()`, which is how the Adobe authentication system initiates the sign-in dialog. The `setSupportMultipleWindows` setting tells the WebView to support the underlying multi-window architecture, enabling the `WebChromeClient` to intercept and handle window creation requests.

### 2. Handling OAuth Compatibility

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

### 3. Implementing Window Creation with `WebChromeClient`

When JavaScript calls `window.open()` to display the sign-in dialog, the WebView needs instructions on how to handle this request. The `WebChromeClient`'s `onCreateWindow` method provides the mechanism to intercept window creation requests and present them to users in a way that makes sense within the mobile app context.

The following snippet intercepts popup requests, creates a new WebView inside a fullscreen dialog, and wires up its lifecycle so the dialog dismisses when the popup closes:

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

<InlineAlert slots="text" variant="info"/>

The critical final step is **linking the new WebView back to the original through the WebViewTransport mechanism**.

The transport delivers the newly created WebView to the system so that the URL requested by `window.open()` is loaded in it, and it establishes the JavaScript `window.opener` relationship between the popup and the main page. Once the user completes authentication, the session persists through two complementary channels: cookies set during the OAuth flow are stored by Android's CookieManager, which is a singleton shared across all WebView instances in the process, and the popup can communicate the result back to the opener via `window.opener.postMessage()` or by simply closing itself. **Without this transport wiring, the popup would never receive the authentication URL and the sign-in flow could not even begin.**

### 4. Configuring Popup WebViews

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

### 5. Cookie Configuration for Authentication Persistence

OAuth authentication relies on cookies to maintain session state and communicate tokens between the authentication popup and the main application.

<InlineAlert slots="text" variant="info"/>

**Android WebViews require explicit configuration to accept and persist cookies**, particularly third-party cookies that OAuth systems often use.

The following snippet enables first- and third-party cookies for the given WebView and immediately persists them to storage.

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

### Complete Configuration Flow

The Activity only needs to locate the WebView and call `configureWebView()`. All the settings discussed in the previous sections—cookie management, JavaScript and storage capabilities, multi-window support, user agent modification, the WebChromeClient, and the WebViewClient—live inside that single method.

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)

    webView = findViewById(R.id.webview)
    configureWebView()
}
```

The full `configureWebView()` method ties all the pieces together in the order they were introduced above. The `WebViewClient` assigned at the end provides basic navigation handling and ensures that page loads stay within the WebView rather than launching an external browser application.

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

### Full Android Example

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
                webView?.loadUrl("your-embed-experience-url") // 👈 Replace with your URL
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

## iOS Implementation

All the settings discussed in this and the following sections are contained in a `ViewController` that conforms to both `WKNavigationDelegate` and `WKUIDelegate`. A key difference from Android is that a `WKWebView` must receive its `WKWebViewConfiguration` at initialization time—it cannot be changed afterward. This means the configuration must be fully prepared before the WebView is created.

### 1. `WKWebView` Configuration

The `WKWebViewConfiguration` object defines the WebView's capabilities and must be ready before the `WKWebView` is instantiated.

```swift
private func getWebviewConfig() -> WKWebViewConfiguration {
    let webViewConfig = WKWebViewConfiguration()
    let webpagePreferences = WKWebpagePreferences()
    webpagePreferences.allowsContentJavaScript = true
    webViewConfig.websiteDataStore = .default()
    webViewConfig.preferences.javaScriptCanOpenWindowsAutomatically = true
    webViewConfig.defaultWebpagePreferences = webpagePreferences
    webViewConfig.userContentController.addUserScript(getZoomDisableScript())

    return webViewConfig
}
```

The `allowsContentJavaScript` property on `WKWebpagePreferences` enables JavaScript execution—the fundamental requirement for the Embed SDK. Setting `websiteDataStore` to `.default()` ensures that cookies and session data are persisted to disk and shared across all `WKWebView` instances that use the same default store. This is the iOS equivalent of the explicit `CookieManager` configuration required on Android, but here it works automatically with no additional code.

The `javaScriptCanOpenWindowsAutomatically` property allows JavaScript to call `window.open()` without requiring a user gesture, which is how the Adobe sign-in dialog is initiated. Finally, a user script is injected to manage viewport behavior, discussed in the [next section](#viewport-and-zoom-control).

### 2. Viewport and Zoom Control

The Embed SDK interface is designed with specific viewport dimensions in mind. To prevent pinch-to-zoom from disrupting the layout, a `WKUserScript` injects a viewport meta tag at document start.

```swift
private func getZoomDisableScript() -> WKUserScript {
    let source = """
    var meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(meta);
    """
    return WKUserScript(source: source, injectionTime: .atDocumentStart, forMainFrameOnly: true)
}
```

The script runs at `.atDocumentStart`, before any page content is rendered, ensuring that the viewport constraints are in place from the very beginning. The `viewport-fit=cover` value extends the web content to fill the entire display, including the area behind notches and rounded corners, which pairs with the safe area inset handling configured on the native side. This serves the same purpose as Android's `textZoom = 100` setting, but operates at the web content level rather than through a native WebView property.

### 3. Handling OAuth Compatibility

Like Android, iOS WebViews need a custom user agent to pass OAuth provider checks. However, the approach differs: instead of patching an existing user agent string to remove WebView markers, iOS requires setting a completely custom user agent that mimics Mobile Safari.

```swift
private func setCustomUserAgent(for webView: WKWebView) {
    let version = UIDevice.current.systemVersion.replacingOccurrences(of: ".", with: "_")
    let iosVersion = UIDevice.current.systemVersion
    let customUA = "Mozilla/5.0 (iPhone; CPU iPhone OS \(version) like Mac OS X) " +
        "AppleWebKit/605.1.15 (KHTML, like Gecko) " +
        "Version/\(iosVersion) Mobile/15E148 Safari/604.1"
    webView.customUserAgent = customUA
}
```

This constructs a user agent string that closely matches what Mobile Safari would report for the current iOS version. The dynamic `version` and `iosVersion` values ensure the user agent stays current as the operating system updates. The `customUserAgent` property on `WKWebView` overrides both the JavaScript `navigator.userAgent` and the HTTP `User-Agent` header, ensuring consistent identity across all interactions with OAuth providers.

**This custom user agent must be set on both the main WebView and any popup WebViews created for authentication**, just as with the Android user agent modification.

### 4. WebView Initialization

With the configuration and helper methods in place, the `WKWebView` can be initialized. The following lazy property creates the WebView on first access with all the necessary settings applied.

```swift
lazy var webView: WKWebView = {
    let webViewConfig = getWebviewConfig()

    let webView = WKWebView(
        frame: .zero,
        configuration: webViewConfig
    )
    webView.navigationDelegate = self
    webView.uiDelegate = self
    self.setCustomUserAgent(for: webView)

    return webView
}()
```

The `navigationDelegate` handles page load events and navigation decisions, while the `uiDelegate` is responsible for intercepting JavaScript UI actions—most critically, `window.open()` calls that trigger the authentication popup. Both delegates are essential for a complete Embed SDK integration.

The WebView is created with `frame: .zero` because its final layout will be determined later in `viewDidLayoutSubviews`. The configuration object is passed at initialization and cannot be changed afterward, which is why all preferences must be set in `getWebviewConfig()` before this point.

### 5. Implementing Popup Windows with `WKUIDelegate`

When JavaScript calls `window.open()` to display the sign-in dialog, the `WKUIDelegate` method `webView(_:createWebViewWith:for:windowFeatures:)` is invoked. This is the iOS counterpart of Android's `WebChromeClient.onCreateWindow`.

```swift
var newWebviewPopupWindow: WKWebView?

func webView(
    _: WKWebView,
    createWebViewWith configuration: WKWebViewConfiguration,
    for navigationAction: WKNavigationAction,
    windowFeatures _: WKWindowFeatures
) -> WKWebView? {
    newWebviewPopupWindow = WKWebView(frame: view.bounds, configuration: configuration)
    newWebviewPopupWindow!.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    newWebviewPopupWindow!.navigationDelegate = self
    newWebviewPopupWindow!.uiDelegate = self
    self.setCustomUserAgent(for: newWebviewPopupWindow!)

    // Set content insets for safe areas
    let topInset = view.safeAreaInsets.top
    newWebviewPopupWindow!.scrollView.contentInset = UIEdgeInsets(top: topInset, left: 0, bottom: 0, right: 0)
    newWebviewPopupWindow!.scrollView.scrollIndicatorInsets = newWebviewPopupWindow!.scrollView.contentInset

    view.addSubview(newWebviewPopupWindow!)
    return newWebviewPopupWindow!
}
```

A crucial difference from Android is that **the `configuration` parameter provided by WebKit must be used as-is** to create the popup. This system-provided configuration maintains the internal link between the opener and the popup, preserving the `window.opener` JavaScript relationship and sharing the same `WKWebsiteDataStore`. Creating a separate configuration would break the communication channel between the two WebViews and prevent authentication credentials from being passed back to the main session.

The popup is created at the full size of the parent view and uses `autoresizingMask` to adapt automatically to orientation changes. Setting the same delegates ensures consistent navigation and popup handling, and applying the custom user agent prevents OAuth failures—just as on the main WebView. The safe area content insets ensure that the authentication form is not hidden behind the status bar or notch.

The popup is added directly as a subview, overlaying the main content. This is simpler than Android's `Dialog`-based approach and achieves the same fullscreen presentation for the authentication UI.

### 6. Popup Cleanup

When the authentication flow completes and the popup calls `window.close()`, the `webViewDidClose` delegate method handles cleanup.

```swift
func webViewDidClose(_ webView: WKWebView) {
    webView.removeFromSuperview()
    newWebviewPopupWindow = nil
}
```

Removing the popup from the superview makes the main WebView visible again, and setting the reference to `nil` allows the popup to be deallocated. This is the iOS counterpart of Android's `onCloseWindow` handler that calls `dialog.dismiss()`.

### 7. Cookie and Session Persistence

Unlike Android, where explicit `CookieManager` configuration is required for both the main WebView and every popup, iOS handles cookie persistence automatically through the `WKWebsiteDataStore`. The `.default()` data store configured earlier persists cookies, localStorage, IndexedDB, and other website data to disk.

Because the popup WebView is created with the system-provided `configuration`—which references the same data store as the main WebView—**authentication cookies set during the OAuth flow in the popup are immediately available to the main WebView**. No additional cookie management code is needed.

<InlineAlert slots="heading, text" variant="warning"/>

##### Login issues

In case you are facing issues with the login process on iOS, contact your Adobe representative and ask them to **switch the SUSI-Light sign-in experience to SUSI**.

### Complete Configuration Flow

The ViewController sets up the WebView in `viewDidLoad` by adding it as a subview. All the configuration happens before this point: the `WKWebViewConfiguration` is created in `getWebviewConfig()`, and the WebView is initialized with it in the lazy property.

```swift
override func viewDidLoad() {
    super.viewDidLoad()
    view.addSubview(webView)
}
```

The complete configuration flow for iOS is more compact than Android's because `WKWebView` bundles many capabilities by default. The essential steps are:

- Create a `WKWebViewConfiguration` with JavaScript and popup support enabled.
- Initialize the `WKWebView` with that configuration.
- Set a custom user agent for OAuth compatibility.
- Implement `WKUIDelegate` to handle popup creation using the system-provided configuration.
- Implement `webViewDidClose` for cleanup.

### Full iOS Example

<CodeBlock slots="heading, code" repeat="1"/>

#### ViewController.swift

```swift
import UIKit
import WebKit

class ViewController: UIViewController, WKNavigationDelegate, WKUIDelegate {
    var newWebviewPopupWindow: WKWebView?

    @IBOutlet weak var loadButton: UIButton!
    @IBOutlet weak var footerView: UIView!

    lazy var webView: WKWebView = {
        let webViewConfig = getWebviewConfig()

        let webView = WKWebView(
            frame: .zero,
            configuration: webViewConfig
        )
        webView.navigationDelegate = self
        webView.uiDelegate = self
        self.setCustomUserAgent(for: webView)

        return webView
    }()

    private func getWebviewConfig() -> WKWebViewConfiguration {
        let webViewConfig = WKWebViewConfiguration()
        let webpagePreferences = WKWebpagePreferences()
        webpagePreferences.allowsContentJavaScript = true
        webViewConfig.websiteDataStore = .default()
        webViewConfig.preferences.javaScriptCanOpenWindowsAutomatically = true
        webViewConfig.defaultWebpagePreferences = webpagePreferences
        webViewConfig.userContentController.addUserScript(getZoomDisableScript())

        return webViewConfig
    }

    private func setCustomUserAgent(for webView: WKWebView) {
        let version = UIDevice.current.systemVersion.replacingOccurrences(of: ".", with: "_")
        let iosVersion = UIDevice.current.systemVersion
        let customUA = "Mozilla/5.0 (iPhone; CPU iPhone OS \(version) like Mac OS X) " +
            "AppleWebKit/605.1.15 (KHTML, like Gecko) " +
            "Version/\(iosVersion) Mobile/15E148 Safari/604.1"
        webView.customUserAgent = customUA
    }

    private func getZoomDisableScript() -> WKUserScript {
        let source = """
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(meta);
        """
        return WKUserScript(source: source, injectionTime: .atDocumentStart, forMainFrameOnly: true)
    }

    func webView(
        _: WKWebView,
        createWebViewWith configuration: WKWebViewConfiguration,
        for navigationAction: WKNavigationAction,
        windowFeatures _: WKWindowFeatures
    ) -> WKWebView? {
        newWebviewPopupWindow = WKWebView(frame: view.bounds, configuration: configuration)
        newWebviewPopupWindow!.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        newWebviewPopupWindow!.navigationDelegate = self
        newWebviewPopupWindow!.uiDelegate = self
        self.setCustomUserAgent(for: newWebviewPopupWindow!)

        // Set content insets for safe areas
        let topInset = view.safeAreaInsets.top
        newWebviewPopupWindow!.scrollView.contentInset = UIEdgeInsets(top: topInset, left: 0, bottom: 0, right: 0)
        newWebviewPopupWindow!.scrollView.scrollIndicatorInsets = newWebviewPopupWindow!.scrollView.contentInset

        view.addSubview(newWebviewPopupWindow!)
        return newWebviewPopupWindow!
    }

    func webViewDidClose(_ webView: WKWebView) {
        webView.removeFromSuperview()
        newWebviewPopupWindow = nil
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        view.addSubview(webView)

        if let footer = footerView {
            view.bringSubviewToFront(footer)
        }
    }

    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()

        let buttonHeight: CGFloat = 50
        let buttonPadding: CGFloat = 16
        let topPadding: CGFloat = 12
        let footerContentHeight = topPadding + buttonHeight + buttonPadding

        webView.frame.origin.x = 0
        webView.frame.origin.y = 0
        webView.frame.size.width = view.bounds.width
        webView.frame.size.height = view.safeAreaLayoutGuide.layoutFrame.maxY - footerContentHeight

        let topInset = view.safeAreaInsets.top
        webView.scrollView.contentInset = UIEdgeInsets(top: topInset, left: 0, bottom: 0, right: 0)
        webView.scrollView.scrollIndicatorInsets = webView.scrollView.contentInset

        if webView.scrollView.contentOffset.y == 0 {
            webView.scrollView.contentOffset = CGPoint(x: 0, y: -topInset)
        }

        if let footer = footerView {
            footer.frame.origin.x = 0
            footer.frame.origin.y = webView.frame.maxY
            footer.frame.size.width = view.bounds.width
            footer.frame.size.height = view.bounds.height - webView.frame.maxY
            view.bringSubviewToFront(footer)

            if let button = loadButton {
                button.frame.origin.x = buttonPadding
                button.frame.origin.y = topPadding
                button.frame.size.width = footer.frame.width - (buttonPadding * 2)
                button.frame.size.height = buttonHeight
            }
        }
    }

    @IBAction func loadButtonPressed(_ sender: UIButton) {
        guard let url = URL(string: "your-embed-experience-url") else { return } // 👈 Replace with your URL
        let urlRequest = URLRequest(url: url)
        webView.load(urlRequest)
    }
}
```

## Next Steps

To learn more about Mobile Web in a real-world application, check out the [Mobile Web tutorial](../tutorials/mobile-web.md).
