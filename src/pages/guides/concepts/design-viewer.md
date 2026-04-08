---
keywords:
  - Adobe Express
  - Embed SDK
  - Design Viewer
  - View Design
  - Preview Thumbnails
  - Asset
title: Design Viewer
description: Learn how to use the Design Viewer module to let users preview and edit image-based designs directly within your application.
contributors:
  - https://github.com/undavide
---

# Design Viewer

The Design Viewer module lets users view an image-based design inside an Adobe Express-powered experience embedded in your application. From the viewer, users can edit the design in the Full Editor or export it — without ever leaving your product.

\<!-- TODO: add hero image — suggested filename: ./img/design-viewer--hero.png --\>

## How the Design Viewer Works

The Design Viewer is a [Workflow](../../v4/sdk/src/workflows/3p/module-workflow/classes/module-workflow.md) that loads a given image asset into a viewer experience. The entry point is the [`module.viewDesign()`](../../v4/sdk/src/workflows/3p/module-workflow/classes/module-workflow.md) method.

```javascript
await import("https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js");

const { module } = await window.CCEverywhere.initialize(
  { clientId: "your-client-id", appName: "your-app-name" },
  {}
);

module.viewDesign(docConfig, appConfig, exportConfig, containerConfig);
```

The method signature is:

```typescript
module.viewDesign(
  docConfig: DesignViewerDocConfig,      // required
  appConfig?: DesignViewerAppConfig,
  exportConfig?: ExportConfig,
  containerConfig?: ContainerConfig
): void
```

### Use Cases

- **Design preview**: Show a generated or existing image to the user before committing to further edits.
- **Image handoff**: Accept an uploaded image from the user and hand it off to Adobe Express for editing.
- **Design refinement**: Let users tweak images produced by another workflow (e.g., Generate Image) in the Full Editor via [Workflow Tethering](./tethering.md).

## Configuring the Design Viewer

### `docConfig` — the asset to view

The [`DesignViewerDocConfig`](../../v4/shared/src/types/module/doc-config-types/interfaces/design-viewer-doc-config.md) object is **required** and contains a single property: `asset`.

- **Type**: [`Asset`](../../v4/shared/src/types/asset-types/type-aliases/asset.md)
- **Required**: yes

The [`Asset`](../../v4/shared/src/types/asset-types/type-aliases/asset.md) is a union type supporting three data representations:

| `dataType` | `data` value                     | When to use                         |
| ---------- | -------------------------------- | ----------------------------------- |
| `"base64"` | Base64-encoded string (data URL) | Local images converted client-side  |
| `"url"`    | Presigned URL string             | Images hosted on a remote server    |
| `"blob"`   | `Blob` / `File` object           | Files from an `<input type="file">` |

The `type` property identifies the kind of media: `"image"`, `"video"`, `"pdf"`, or `"psd"`. For the Design Viewer, use `"image"`.

```javascript
// Base64 asset (most common for locally-sourced images)
const docConfig = {
  asset: {
    type: "image",
    dataType: "base64", // 👈
    data: "<base64-encoded-string>",
  },
};

module.viewDesign(docConfig);
```

```javascript
// URL asset (image hosted on a server)
const docConfig = {
  asset: {
    type: "image",
    dataType: "url", // 👈
    data: "https://your-server.com/path/to/image.png",
  },
};

module.viewDesign(docConfig);
```

<InlineAlert slots="header, text" variant="info" />

#### Converting a local image to Base64

If you have a local image URL (e.g. resolved by a bundler like Vite) or a `File` object from a file picker, use the `FileReader` API to convert it to a Base64 data URL before passing it to the SDK.

```javascript
function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const dataUrl = await readFileAsDataUrl(file);
```

### `appConfig` — viewer customization

The [`DesignViewerAppConfig`](../../v4/shared/src/types/module/app-config-types/interfaces/design-viewer-app-config.md) object controls the viewer's appearance and the optional preview thumbnails sidebar. All properties are optional.

#### `designTitle`

Sets the title text displayed in the viewer header.

- **Type**: `string`
- **Default**: `""` (empty string)
- **Use case**: Identify the design by name so users understand what they are viewing.

```javascript
const appConfig = {
  designTitle: "Your Gameweek Summary", // 👈
};

module.viewDesign(docConfig, appConfig);
```

#### `previewThumbnails`

Configures a sidebar panel showing related design previews. Users can click a thumbnail to switch the active design in the viewer.

- **Type**: [`PreviewThumbnailsConfig`](../../v4/shared/src/types/module/app-config-types/interfaces/preview-thumbnails-config.md)
- **Default**: `undefined` (no sidebar)
- **Use case**: Offer a curated gallery of related templates or previously saved designs alongside the viewed asset.

There are two ways to populate the thumbnails:

**From a collection** — provide a [`CollectionConfig`](../../v4/shared/src/types/module/app-config-types/interfaces/collection-config.md) with a collection URN and an optional count:

```javascript
const appConfig = {
  previewThumbnails: {
    collectionConfig: {
      collectionId: "urn:aaid:sc:VA6C2:35e85094-7807-45aa-abac-c9aeac11eb2e", // 👈
      count: 7, // 👈 defaults to 5; must be greater than 0
    },
  },
};
```

**From explicit design IDs** — provide an array of known design IDs. When `previewIds` is set, it takes precedence over `collectionConfig`.

```javascript
const appConfig = {
  previewThumbnails: {
    previewIds: ["design-id-1", "design-id-2", "design-id-3"], // 👈
  },
};
```

<InlineAlert slots="header, text" variant="warning" />

#### `count` must be greater than zero

Passing `previewThumbnails.collectionConfig.count` with a value of `0` or less throws an `INVALID_SIZE_VALUE` error. Omit `count` to use the default of 5.

For instructions on how to obtain a Collection URN, refer to the [Template Browser](./template-browser.md#collection-identifiers-urns) guide.

#### `callbacks`

Define callback functions to respond to viewer events.

- **Type**: `Callbacks`
- **Default**: `undefined`
- **Use case**: Handle asset publishing, cancellation, and errors in your application's workflow.

```javascript
const appConfig = {
  callbacks: {
    onPublish: (intent, publishParams) => {
      console.log("User published:", publishParams);
    },
    onCancel: () => {
      console.log("User cancelled.");
    },
    onError: (err) => {
      console.error("Error:", err.toString());
    },
  },
};
```

### `exportConfig` — export options

The standard [`ExportConfig`](../../v4/shared/src/types/export-config-types/type-aliases/export-option.md) array controls which action buttons appear in the viewer. Use it to let users download the asset or save it back to your application.

```javascript
const exportConfig = [
  {
    id: "download",
    label: "Download",
    action: { target: "download" },
    style: { uiType: "button" },
  },
  {
    id: "save-image",
    label: "Save image",
    action: { target: "publish" },
    style: { uiType: "button" },
  },
];
```

To chain the Design Viewer into a broader editing workflow, add a tethering export option. See [Workflow Tethering](./tethering.md) for details.

## Complete Example

The following example mirrors the pattern from the [Embed SDK View Design sample application](https://github.com/AdobeDocs/embed-sdk-samples). It accepts either a pre-loaded image or a user-uploaded file, converts it to Base64, and launches the Design Viewer.

<CodeBlock slots="heading, code" repeat="2" languages="main.js, index.html"/>

#### main.js

```javascript
await import("https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js");

const { module } = await window.CCEverywhere.initialize(
  { clientId: "your-client-id", appName: "your-app-name" },
  { loginMode: "delayed" }
);

const appConfig = {
  designTitle: "Your Gameweek Summary",
  previewThumbnails: {
    collectionConfig: {
      collectionId: "urn:aaid:sc:VA6C2:35e85094-7807-45aa-abac-c9aeac11eb2e",
      count: 7,
    },
  },
  callbacks: {
    onPublish: (intent, publishParams) => {
      console.log("Published:", publishParams);
    },
    onError: (err) => {
      console.error("Error:", err.toString());
    },
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
    id: "save-image",
    label: "Save image",
    action: { target: "publish" },
    style: { uiType: "button" },
  },
];

function launchViewDesign(dataUrl) {
  const docConfig = {
    asset: {
      type: "image",
      dataType: "base64", // 👈 pass the image as a Base64 data URL
      data: dataUrl,
    },
  };
  module.viewDesign(docConfig, appConfig, exportConfig);
}

// --- Pre-loaded image ---
async function loadAndView(imageUrl) {
  const res = await fetch(imageUrl);
  const blob = await res.blob();
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
  launchViewDesign(dataUrl);
}

// --- User-uploaded file ---
document.getElementById("fileInput").onchange = async (event) => {
  const file = event.target.files[0];
  if (!file || !file.type.startsWith("image/")) return;
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
  launchViewDesign(dataUrl);
};
```

#### index.html

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Embed SDK Sample</title>
</head>

<body>
  <sp-theme scale="medium" color="light" system="express">
    <div class="container">
      <header>
        <h1>Adobe Express Embed SDK</h1>
        <sp-divider size="l"></sp-divider>
        <h2>Design Viewer Sample</h2>
        <p>
          The <b>View Design</b> button launches a design viewer instance.<br />
          Upload your own image using the <b>Upload Image &amp; View Design</b> button.
        </p>
      </header>
      <main>
        <img id="savedImage" src="./img/fantasy-golf.png" alt="Your design will appear here." />
        <sp-button-group>
          <sp-button id="viewBtn">View Design</sp-button>
          <sp-button id="uploadBtn">Upload Image &amp; View Design</sp-button>
        </sp-button-group>
        <input type="file" id="fileInput" accept="image/*" style="display: none;" />
      </main>
    </div>
  </sp-theme>

  <script type="module" src="./main.js"></script>
</body>

</html>
```

## Related Resources

- [`module.viewDesign()` API Reference](../../v4/sdk/src/workflows/3p/module-workflow/classes/module-workflow.md)
- [`DesignViewerDocConfig` API Reference](../../v4/shared/src/types/module/doc-config-types/interfaces/design-viewer-doc-config.md)
- [`DesignViewerAppConfig` API Reference](../../v4/shared/src/types/module/app-config-types/interfaces/design-viewer-app-config.md)
- [`PreviewThumbnailsConfig` API Reference](../../v4/shared/src/types/module/app-config-types/interfaces/preview-thumbnails-config.md)
- [`CollectionConfig` API Reference](../../v4/shared/src/types/module/app-config-types/interfaces/collection-config.md)
- [`Asset` Type Reference](../../v4/shared/src/types/asset-types/type-aliases/asset.md)
- [Template Browser](./template-browser.md) — for instructions on obtaining Collection URNs
- [Workflow Tethering](./tethering.md) — to chain the Design Viewer into a multi-step workflow
- [Error Handling](./error-handling.md)
