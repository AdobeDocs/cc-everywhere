---
keywords:
  - Adobe Express Embed SDK
  - analyticsData
  - hostAppTrigger
  - HostAppTrigger
  - appConfig
title: Analytics
description: Learn how to pass hostAppTrigger in analyticsData when launching an Adobe Express Embed SDK workflow.
contributors:
  - https://github.com/apoos-dev
---

# Analytics

Use `hostAppTrigger` to identify the action in your application that launched an Adobe Express Embed SDK workflow. Add it to `appConfig.analyticsData` before calling the workflow method.

<InlineAlert variant="info" slots="header, text1" />

#### Launch metadata, not an analytics callback

`hostAppTrigger` sends launch context into the Embed SDK. It does not report user activity back to your application or replace your own analytics events or the SDK's [callbacks](../../v4/shared/src/types/callbacks-types/interfaces/callbacks.md).

Use Adobe Express Embed SDK v4.26.5 or later.

## Add `hostAppTrigger` to your integration

### 1. Choose a trigger value

Use the value that matches the action in your application:

| Host-app action | `hostAppTrigger` value |
| --- | --- |
| Add or create an image | `"add-image"` |
| Replace or edit an existing image | `"replace-image"` |
| Launch a workflow from selected text | `"text-selected"` |

These values are defined in the [`HostAppTrigger`](../../v4/shared/src/types/app-config-types/enumerations/host-app-trigger.md) enumeration.

### 2. Add the value to `appConfig` and launch the workflow

Set `hostAppTrigger` inside `analyticsData` on the `appConfig` used for the workflow:

```javascript
await import("https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js");

const { module } = await window.CCEverywhere.initialize(
  { clientId: "your-client-id", appName: "your-app-name" },
  {}
);

const appConfig = {
  analyticsData: {
    hostAppTrigger: "add-image",
  },
};

module.createDesign(appConfig, exportConfig, containerConfig);
```

Use the same structure with other workflows and select the appropriate value from the table above.

### Full Editor and TypeScript

Full Editor workflows use the same `appConfig` structure with `editor.create()` and `editor.edit()`.

When using Full Editor with TypeScript, typecast `appConfig` because `analyticsData` is not yet included in the Full Editor type definition. JavaScript integrations can omit the cast.

```typescript
const appConfig = {
  analyticsData: {
    hostAppTrigger: "add-image",
  },
} as any;

editor.create(docConfig, appConfig, exportConfig, containerConfig);
```

Use `"replace-image"` when launching `editor.edit()` for an existing design.

### 3. Verify the value

Test each entry point in your application:

1. Set a breakpoint immediately before the SDK workflow call.
2. Inspect `appConfig.analyticsData.hostAppTrigger`.
3. Confirm the value matches the action that launched the workflow.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| The trigger value is missing | Verify the nesting is `appConfig.analyticsData.hostAppTrigger`. |
| The wrong action is attributed | Confirm the value matches the table above for that entry point. |
| TypeScript rejects Full Editor `analyticsData` | Typecast the Full Editor `appConfig` as shown above. |

## Related resources

- [`HostAppTrigger` enumeration](../../v4/shared/src/types/app-config-types/enumerations/host-app-trigger.md)
- [`BaseAnalyticsData` interface](../../v4/shared/src/types/app-config-types/interfaces/base-analytics-data.md)
- [Third-party `AppConfig` interface](../../v4/shared/src/types/3p/app-config-types/interfaces/app-config.md)
- [`ModuleWorkflow` API reference](../../v4/sdk/src/workflows/3p/module-workflow/classes/module-workflow.md)
- [`EditorWorkflow` API reference](../../v4/sdk/src/workflows/3p/editor-workflow/classes/editor-workflow.md)
