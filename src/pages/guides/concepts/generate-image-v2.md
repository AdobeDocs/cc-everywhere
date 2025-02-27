---
keywords:
  - Adobe Express
  - Embed SDK
  - Text to Image
  - Generate Image
  - Carousel
  - Grid view
  - Community Wall
  - Prompt Bar suggestions
  - Rich Previews
  - Fast Mode
  - Custom Firefly Models
  - Feature configurations
title: Generate Image v2
description: Generate Image v2
contributors:
  - https://github.com/undavide
---

# Generate Image v2

Welcome to the new and improved Generate Image v2 experience in the Adobe Express Embed SDK! This upgraded version brings a host of exciting enhancements designed to empower your creative journey.

## Features overview

In redesigning the Generate Image module, we’ve focused on making the image generation process more engaging, efficient, and inspiring. The **new User Interface** offers a fresh look and feel, with a Carousel and Grid view that make it easier to browse and select images.

![Carousel and Grid view](./img/genimage_carousel.jpg)

Upon launching the module, you’ll be greeted by an endless array of user-generated images on the **Community Wall**, that provide plenty of inspiration for your projects. The **Improved Prompt Bar** helps you with pop-up suggestions to craft the perfect prompt.

![Improved Prompt Bar](./img/genimage_prompt-suggestions.jpg)

**Rich Previews** offer a more interactive and engaging preview experience, while with **Fast Mode** you can cut the generation time when fewer details and smaller sizes are enough. Lastly, **Custom Firefly Models** allow enterprise users to tailor outputs to unique brand or project requirements.

## How to enable the new experience

Generate Image v2 is, at the moment, disabled by default, with the classic interface displayed. To activate the new experience, you need to set the new `appVersion` property to the string `"2"` in the [`appConfig`](../../v4/shared/src/types/module/AppConfig.types/interfaces/TextToImageAppConfig.md) object.

```js
await import("https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js");

const { module } = await window.CCEverywhere.initialize(
  { clientId: "your-client-id", appName: "your-app-name" },
  {}
);

const appConfig = {
  appVersion: "2", // 👈 Enable the new experience
  // ...
};

module.createImageFromText(appConfig, {});
```

## Feature configurations

The new experience introduces several new feature configurations to the [`TextToImageAppConfig`](../../v4/shared/src/types/module/AppConfig.types/interfaces/TextToImageAppConfig.md#properties) object. They can be independently enabled or disabled to customize the module according to your needs.

### Community Wall

![Community Wall](./img/genimage_community-wall.jpg)

The infinite-scroll collection of user-generated images with prompts is controlled by the boolean `community-wall` property of the [`featureConfig`](../../v4/shared/src/types/module/AppConfig.types/enumerations/TextToImageFeature.md) object:

```js
const appConfig = {
  appVersion: "2",
  featureConfig: {
    "community-wall": true, // 👈 Enable the Community Wall
  },
};
```

When enabled, the Community Wall will be displayed upon launching the module; each image can be selected to preload the prompt and generate a new image, varying the other settings as needed.

### Fast Mode

![Fast Mode](./img/genimage_fast-mode.jpg)

This new option allows for faster generation of smaller images (1K, or 1024x1024 for a 1:1 ratio, compared to the usual 2K, or 2048x2048) with fewer details. It's a great choice when timely generations are needed, and less precision doesn't matter, for example, in backgrounds, or simpler illustrations. The same [`featureConfig`](../../v4/shared/src/types/module/AppConfig.types/enumerations/TextToImageFeature.md) object allows you to toggle the `fast-mode` boolean:

```js
const appConfig = {
  appVersion: "2",
  featureConfig: {
    "community-wall": true,
    "fast-mode": true, // 👈 Enable Fast Mode
  },
};
```

When enabled, a Fast Mode switch will be visible a the bottom of the generation options. To control its default state there's an additional [`fastModeConfig`](../../v4/shared/src/types/module/AppConfig.types/interfaces/FastModeConfig.md) object property, whose `defaultFastModeState` can be set to `"on"` or `"off"`:

```js
const appConfig = {
  appVersion: "2",
  featureConfig: {
    "community-wall": true,
    "fast-mode": true, // 👈 Enable Fast Mode
    fastModeConfig: {
      defaultFastModeState: "on", // 👈 Set Fast Mode on by default
    },
  },
};
```

### Rich Preview

![Rich Preview](./img/genimage_rich-preview.jpg)

In addition to the Grid and Carousel view, the new experience introduces the possibility to isolate one of the four generated images, and display it in a larger, focused preview. This feature is controlled by the [`thumbnailOptions`](../../v4/shared/src/types/module/AppConfig.types/enumerations/ThumbnailOption.md) property of the `appConfig` object, which array can now include `"rich-preview"`:

```js
const appConfig = {
  appVersion: "2",
  thumbnailOptions: ["rich-preview"],
};
```

![Rich Preview](./img/genimage_rich-preview-single.jpg)

### Thumbnail Actions

![Thumbnail Actions](./img/genimage_further-intent.jpg)

You now have a set of actions you can immediately perform on the generated image. You can allow your user to transfer the image directly to the editor. These actions are collected in a dropdown menu within the thumbnail. They include adding text, cropping, and applying filters. Similar to the Rich Preview, these actions are controlled by the [`thumbnailOptions`](../../v4/shared/src/types/module/AppConfig.types/enumerations/ThumbnailOption.md) property of the `appConfig` object, which array can now include `"edit-dropdown"`. Additionally, the actual options are set in the [`editDropdownOptions`](../../v4/shared/src/types/ExportConfig.types/enumerations/EditFurtherIntent.md) array, as option objects:

```js
const appConfig = {
  appVersion: "2",
  thumbnailOptions: ["edit-dropdown"], // 👈 Enable the Edit dropdown
  editDropdownOptions: [
    // 👈 Set the options for the Edit dropdown
    { option: "add-effects" },
    { option: "remove-background" },
    { option: "apply-adjustment" },
    { option: "insert-object" },
    { option: "remove-object" },
  ],
};
```

For an updated list of all the available options, refer to the [`EditFurtherIntent`](../../v4/shared/src/types/ExportConfig.types/enumerations/EditFurtherIntent.md) enumeration.

### Publish

![Publish](./img/genimage_publish.jpg)

The SDK also introduces the possibility of running a publish callback for the generated image directly from the module. Label and ID of this feature are controlled by the [`publishConfig`](../../v4/shared/src/types/module/AppConfig.types/interfaces/PublishConfig.md) property of the `appConfig` object, which can include the following options:

```js
const appConfig = {
  appVersion: "2",
  thumbnailOptions: ["publish"], // 👈 Enable the Publish action
  publishConfig: {
    id: "saveToHostApp",
    label: "Get the goods!",
  },
};
```

The `publishConfig` object should match the same `id` and `label` of the publish callback in the host app.

```js
const exportConfig = [
  {
    action: {
      target: "publish",
      outputType: "base64",
      closeTargetOnExport: true,
    },
    id: "saveToHostApp", // 👈 Match the ID
    label: "Get the goods!", // 👈 Match the label
    style: {
      uiType: "button",
    },
  },
];
```

<!-- ## Custom Firefly Models

### Before you begin

Ensure that you have the right plan! Firefly custom models are available to organizations that use [Adobe storage for business](https://helpx.adobe.com/in/enterprise/using/storage-for-business.html), a feature that's being rolled out globally in a phased manner.

<InlineAlert variant="warning" slots="header, text1" />

Available only for enterprise users

This feature requires users of your organization to have access to the Custom Firefly Models. To train custom models in Adobe Firefly, you must be entitled as a [trainer for Firefly custom models](https://helpx.adobe.com/in/enterprise/using/assign-users-to-firefly-custom-models.html). If you're using Firefly through a company-owned account, [contact your Adobe administrator](https://helpx.adobe.com/in/enterprise/kb/contact-administrator.html) to request access.

### Enable Custom Firefly Models

The new experience let you select fine-tuned Firefly Models, in addition to the standard generation model. This allows enterprise users to tailor the generated images to their unique brand or project requirements.

![Custom Firefly Models](./img/genimage_custom-firefly-models.jpg)

Provided that you have trained and uploaded your custom models, you can enable the Custom Firefly Models feature by setting the `custom-models` boolean property of the [`featureConfig`](../../v4/shared/src/types/module/AppConfig.types/enumerations/TextToImageFeature.md) object:

```js
const appConfig = {
  appVersion: "2",
  featureConfig: {
    "custom-models": true, // 👈 Enable Custom Firefly Models
  },
};
```

When enabled, the Custom Firefly Models dropdown will appear above all other generation options, allowing you to select the desired model. If your organization does not have a Custom Model enabled, the default model is used and the message "Powered by Firefly Image 3" is displayed in place of the dropdown. -->
