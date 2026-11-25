---
keywords:
  - Adobe Express
  - Embed SDK
  - Partner Auth
  - ClientAuthProvider
  - ClientAuthDetails
  - useClientAuth
  - Generative Credits
  - Generate Image
title: Embed SDK Partner Auth tutorial
description: Add client-based authentication to Generate Image in the Adobe Express Embed SDK and confirm that your provider fetches a token on launch.
contributors:
  - https://github.com/undavide
---

# Embed SDK Partner Auth tutorial

Partner Auth is a client-based authentication in the Adobe Express Embed SDK. It centralizes metering for generative AI features: usage draws from the partner's Generative Credits budget instead of each user's individual credits.

## How Partner Auth changes metering

When someone generates an image, the authentication model determines who signs in and whose credits are used:

| Authentication model                       | Adobe ID sign-in                                                                                                          | Generative Credits used                            |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Standard user-based authentication         | Each user signs in with their Adobe ID.                                                                                   | Each user draws from their own monthly quota.      |
| Partner Auth (client-based authentication) | After Adobe enables Partner Auth for the integration, users don't sign in with an Adobe ID to use the enabled experience. | Usage draws from the partner's centralized budget. |

Partner Auth may be restricted to selected customers. Work with your Adobe representative to arrange enablement and negotiate commercial terms with Adobe Sales.

In this tutorial, you'll run a sample that adds Partner Auth to Generate Image. You'll follow the token from your backend to the SDK and confirm that launching the module triggers a token request. For the image-generation UI, customization, and export behavior, see the [Generate Image tutorial](./generate-image.md).

## How the SDK gets a client token

- **Your backend** keeps the client secret on the server. It exchanges the server-to-server credential for an Adobe IMS access token, caches the token, and supplies a stable identifier for the user from your own app.
- **The SDK** calls your browser-side provider, which fetches the token details from your backend. The SDK checks the returned details and calls the provider again before the reported expiry.

## Prerequisites

Before you start, make sure you have:

- Node.js 24.2 or later and basic JavaScript knowledge.
- An [Embed SDK API key](../quickstart/index.md#step-1-get-an-api-key) with `localhost:5555` in its [allowed domains](../quickstart/index.md#edit-the-list-of-allowed-domains).
- A separate Adobe IMS OAuth server-to-server credential with scopes approved for your integration.

## 1. Set up the sample project

Clone the [Adobe Express Embed SDK samples repository](https://github.com/AdobeDocs/embed-sdk-samples), then open `code-samples/tutorials/embed-sdk-client-auth-provider` from the repository root in your terminal. The sample already contains the code you'll walk through.

1. Copy `src/.env.example` to `src/.env`. Set `VITE_API_KEY` to your public Embed SDK API key and `VITE_APP_NAME` to the **Public App Name** in the Adobe Developer Console. Vite exposes `VITE_*` values to the browser, so keep secrets out of this file.
2. Copy `server/.env.example` to `server/.env`. Set `IMS_CLIENT_ID` and `IMS_CLIENT_SECRET` for your server-to-server credential, and set `IMS_SCOPE` to the scopes approved for that credential. The template uses `openid,AdobeID,firefly_api,ff_apis` as an example. Set `DEMO_USER_GUID` to a hyphenated UUID with no personal information and keep it fixed for this demo.
3. Run `npm install` from the sample directory.

## 2. Exchange and cache the IMS token on your server

Your backend returns JSON from `GET /api/token` in the shape of [`ClientAuthDetails`](../../v4/shared/src/types/client-authentication-types/interfaces/client-auth-details.md#properties). All three fields are required:

| Field                    | Type     | Value                                                                                       |
| ------------------------ | -------- | ------------------------------------------------------------------------------------------- |
| `clientAccessToken`      | `string` | The IMS access token.                                                                       |
| `tokenExpiryTimestampMs` | `number` | The reported expiry as an absolute Unix epoch timestamp in milliseconds, not a duration.    |
| `userGuid`               | `string` | A hyphenated UUID for the user. The sample reads its fixed demo UUID from `DEMO_USER_GUID`. |

The SDK rejects a reported expiry at or before its current time or more than five minutes ahead. IMS access tokens last 24 hours by default. For production, ask your Adobe representative for tokens that actually expire after five minutes. Reporting an earlier timestamp to the SDK doesn't shorten the lifetime of the token IMS issued.

Open `server/server.js`. Follow the `client_credentials` exchange, the conversion of `expires_in` from seconds to milliseconds, and the reuse of the cached response:

&lt;!-- atlas-snippet: server-token-endpoint --&gt;

```js-data-line="25-32,48-50,56-63"
import { createServer } from "node:http";

const IMS_TOKEN_URL = "https://ims-na1.adobelogin.com/ims/token/v3";
const MAX_REPORTED_LIFETIME_MS = 4 * 60_000;
const CACHE_MARGIN_MS = 45_000;
const UUID = /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i;

export function createTokenServer({
  clientId,
  clientSecret,
  scope,
  userGuid,
  fetchIms = fetch,
  now = Date.now,
}) {
  if (!clientId || !clientSecret || !scope || !UUID.test(userGuid ?? "")) {
    throw new Error("Configure the IMS credentials, scope, and demo user UUID.");
  }

  let cached;
  let inFlight;

  async function mintToken() {
    const requestedAt = now();
    const response = await fetchIms(IMS_TOKEN_URL, {
      method: "POST",
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials",
        scope,
      }),
      redirect: "error",
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      await response.body?.cancel();
      throw new Error("IMS token exchange failed.");
    }

    const { access_token, expires_in } = await response.json();
    if (typeof access_token !== "string" || !access_token ||
        !Number.isFinite(expires_in) || expires_in <= 0) {
      throw new Error("Invalid IMS token response.");
    }

    // Measure from request start so exchange latency can't extend the deadline.
    const tokenExpiryTimestampMs = requestedAt +
      Math.min(expires_in * 1_000, MAX_REPORTED_LIFETIME_MS);
    if (tokenExpiryTimestampMs <= now()) {
      throw new Error("IMS token expired during the exchange.");
    }
    return { clientAccessToken: access_token, tokenExpiryTimestampMs, userGuid };
  }

  async function getDetails() {
    if (cached && cached.tokenExpiryTimestampMs - now() > CACHE_MARGIN_MS) {
      return cached;
    }
    inFlight ??= mintToken()
      .then((details) => (cached = details))
      .finally(() => { inFlight = undefined; });
    return inFlight;
  }

  return createServer(async (request, response) => {
    response.setHeader("Content-Type", "application/json");
    response.setHeader("Cache-Control", "no-store");
    // This local-only check is not user authorization.
    if (request.headers.host !== `127.0.0.1:${request.socket.localPort}` ||
        request.headers["sec-fetch-site"] === "cross-site") {
      response.writeHead(403).end(JSON.stringify({ error: "Forbidden" }));
      return;
    }
    if (request.method !== "GET" || request.url !== "/api/token") {
      response.writeHead(404).end(JSON.stringify({ error: "Not found" }));
      return;
    }

    try {
      const details = await getDetails();
      response.end(JSON.stringify(details));
    } catch {
      response.writeHead(503).end(JSON.stringify({ error: "Token unavailable" }));
    }
  });
}

if (import.meta.main) {
  createTokenServer({
    clientId: process.env.IMS_CLIENT_ID,
    clientSecret: process.env.IMS_CLIENT_SECRET,
    scope: process.env.IMS_SCOPE,
    userGuid: process.env.DEMO_USER_GUID,
  }).listen(3000, "127.0.0.1", () => {
    console.log("Token server listening on http://127.0.0.1:3000");
  });
}
```

The sample reports the earlier of the calculated IMS expiry and four minutes after the exchange started. The server reuses the result while more than 45 seconds remain before that reported expiry. When the result is no longer reusable, concurrent requests share one IMS exchange. The four-minute cap and 45-second margin are sample values, not requirements.

Reuse an issued token instead of requesting a new one for every `/api/token` call. This sample does that with the in-memory cache described above; the cache is the sample's policy, not an SDK requirement. If an exchange fails or times out, the sample returns a generic HTTP `503` without exposing IMS details or retrying within that request.

## 3. Fetch the token from the browser

Open `src/client-auth-provider.js`. A [`ClientAuthProvider`](../../v4/shared/src/types/client-authentication-types/interfaces/client-auth-provider.md) takes no arguments and returns a promise that resolves to `ClientAuthDetails`. The sample's callback fetches the same-origin `/api/token` route, which Vite proxies to the Node.js server. It returns the three fields or throws an error without including the response body:

&lt;!-- atlas-snippet: browser-client-auth-provider --&gt;

```js-data-line="2,16"
export async function clientAuthProvider() {
  const response = await fetch("/api/token", { cache: "no-store" }).catch(() => {
    throw new Error("Token endpoint unavailable.");
  });
  if (!response.ok) {
    throw new Error(`Token endpoint returned HTTP ${response.status}.`);
  }

  const { clientAccessToken, tokenExpiryTimestampMs, userGuid } =
    (await response.json().catch(() => null)) ?? {};
  if (typeof clientAccessToken !== "string" || !clientAccessToken ||
      !Number.isFinite(tokenExpiryTimestampMs) ||
      typeof userGuid !== "string" || !userGuid) {
    throw new Error("Invalid token endpoint response.");
  }
  return { clientAccessToken, tokenExpiryTimestampMs, userGuid };
}
```

The SDK schedules refresh about 30 seconds before the reported expiry. This is separate from the server's 45-second cache margin. If the callback fails or returns invalid details, the SDK reports `CLIENT_AUTH_PROVIDER_ERROR`. For a failed scheduled refresh, the SDK retries after one minute and stops the refresh loop after three consecutive failures.

## 4. Register the provider with the SDK

The sample loads the SDK from the Adobe CDN and builds `hostInfo` from your browser settings. Open `src/initialize-client-auth.js`. The third argument to [`initialize()`](../../v4/sdk/src/3p/cc-everywhere/variables/default.md#initialize) keeps user sign-in delayed; it doesn't turn sign-in off. The fourth argument registers the client token provider:

&lt;!-- atlas-snippet: initialize-client-auth --&gt;

```js-data-line="8-9"
import { clientAuthProvider } from "./client-auth-provider.js";

export function initializeClientAuth(CCEverywhere, hostInfo) {
  const configParams = { locale: "en-US" };
  return CCEverywhere.initialize(
    hostInfo,
    configParams,
    { mode: "delayed" },
    clientAuthProvider,
  );
}
```

## 5. Opt Generate Image into client authentication

Registering the provider doesn't opt the module in. Open `src/launch-text-to-image.js` and find `useClientAuth: true` in `appConfig`, the first argument to `module.createImageFromText()`. The highlighted lines show where to set the flag and pass that configuration to the module:

&lt;!-- atlas-snippet: launch-text-to-image --&gt;

```js-data-line="6,43"
export function bindTextToImage(button, sdk, preview, onError) {
  const { module } = sdk;
  let previewUrl;
  const appConfig = {
    // Let this module request the client token from your provider.
    useClientAuth: true,
    appVersion: "2",
    featureConfig: {
      "community-wall": true,
      "fast-mode": false,
      "custom-models": false,
    },
    promptInputPlaceholder: "A lighthouse on a rocky coast at sunrise",
    callbacks: {
      onPublish(_intent, publishParams) {
        const data = publishParams?.asset?.[0]?.data;
        if (!(typeof data === "string" && data) && !(data instanceof Blob)) return;
        const previousUrl = previewUrl;
        previewUrl = data instanceof Blob ? URL.createObjectURL(data) : undefined;
        preview.src = previewUrl ?? data;
        preview.alt = "Saved image";
        if (previousUrl) URL.revokeObjectURL(previousUrl);
      },
      onError: () => onError(),
    },
  };
  const exportConfig = [
    {
      id: "download",
      label: "Download",
      action: { target: "download" },
      style: { uiType: "button" },
    },
    {
      id: "save-modified-asset",
      label: "Save image",
      action: { target: "publish" },
      style: { uiType: "button" },
    },
  ];
  button.addEventListener("click", () => {
    try {
      module.createImageFromText(appConfig, exportConfig);
    } catch {
      onError();
    }
  });
}
```

## 6. Run the app and confirm the token request

1. Make sure ports `5555` and `3000` are free, then run `npm run dev` from the sample directory. This one command starts both the Vite app and the Node.js token server. The terminal shows the Vite URL and the token server's listening message.
2. Open `https://localhost:5555` in your browser. The sample uses a local development certificate. If your browser shows a certificate warning, confirm the address is `https://localhost:5555` before using the browser's option to proceed with the self-signed certificate Vite generates in `.dev-certs/`. When the SDK initializes, the page shows **Ready to open Generate Image.** and enables the Spectrum **Generate Image** button.
3. Open the **Network** panel in your browser's developer tools.
4. Click **Generate Image** on the sample page to launch the module. Look for the same-origin `GET /api/token` request. Check the status without copying the response body, which contains an access token.

<InlineAlert slots="text" variant="success" />

You should see HTTP `200` for `/api/token` after launch. This confirms your provider reached the token server. Stop the check there: it doesn't verify hosted sign-in behavior, image generation, export, token consumption, or credit metering.

<InlineAlert slots="text" variant="warning" />

If the browser reports a `frame-ancestors` violation, confirm you're using `https://localhost:5555` and that `localhost:5555` is in your API key's allowed domains. The embedded module must allow your serving origin to frame it. A local certificate doesn't add the origin to the allowlist.

## Next steps

You've connected the token server, the browser provider, and the Generate Image launch. Before you adopt this pattern in production, replace the local demo endpoint with an HTTPS endpoint that authorizes requests through your app. Create a stable UUID with no personal information for each user, store it with their user record, and return the same UUID across sessions and token refreshes. The SDK checks the format; your integration keeps the identifier stable.
