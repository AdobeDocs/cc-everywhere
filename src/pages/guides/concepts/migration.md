# Migration Guide: Adobe Express Embed SDK v3 to v4
 
This guide will assist you in updating your implementation from v3 to v4.

## Overview

Adobe Express Embed SDK version v4 introduces a more verbose set of APIs, simplifies parameters, and removes redundancies.

## Key Changes in v4

1. **Simplified Parameters**: Parameters are restructured for clarity and reduced redundancy.
2. **Base Parameters**: Introduction of base parameters for consistent configuration across APIs.
3. **Inheritance of Parameters**: Use of inheritance to manage API-specific configurations.
4. **New Configuration Options**: Enhanced configuration options for better control over the SDK behavior.

## Base parameters in V4

For each SDK API, we have four base parameters:

- Doc Config: Contains the properties that serve as a starting point for the workflow. This should not contain any target app configs.
- App Config: Properties that configure the target application.
- Export Config: Properties that configure the buttons and the result that is exported to the clients.
- Container Config: Properties that configure the SDK iFrame.

**Base Doc Config & Base App Config:** Since each API has its own set of inputs that are not correlating with one another, therefore the base doc params are kept empty with the idea of inheritance.
 
## Parameter details

### Base parameters

#### Base Export Config

```ts
{
  /**
   * Desired asset data type for images.
   * For image output types, host can set this property to either base64 or url. Default type for images is base64.
   * For videos, we will always send output as url irrespective of this property.
   * @default base64
   */
  outputType?: AssetDataType;
}
```
#### Base Container Params

``` ts
{
  /** Id of element to which iframe must be appended. By default it is appended to body.*/
  parentElementId?: string;
  /** Maximum size boundary of the iframe.*/
  size?: PixelSize;
  /** Minimum size boundary of the iframe.*/
  minSize?: PixelSize;
  /** Padding applied to the iframe in pixels.*/
  padding?: number;
  /** Border Radius applied to the iframe in pixels. */
  borderRadius?: number;
  /** Override the background color of the iframe. By default this is as per theme. */
  backgroundColor?: string;
  /** Show spinner while loading target app. Default is true. */
  showLoader?: boolean;
  /**
   * If target app does't open within this time (in ms, same as of setTimeout),
   * the error callback is invoked with error code TARGET_LOAD_TIMED_OUT.
   */
  loadTimeout?: number;
}
```

### Full editor API parameters

For all Editor-specific APIs, the modal params are the same. We have the inheritance of input and output params as shown below. 

#### Editor App Params inherit Base App params

```ts
{
  /** Category to show by default */
  defaultCategory?: EditorPanelView;
  /** Search text to pass in the editor for selected panel. */
  categorySearchText?: string;
  /** Canvas template type */
  templateType?: TemplateType;
  /** Properties to configure the Editor and Modal titles */
  editorTitle?: string;
  publishModalTitle?: string;
  publishErrorModalTitle?: string;
}
```

#### Editor Export Params inherit Base Export params

```ts
{
  exportOptions?: ExportOptionsEditor[];
  /**
   * Decides whether the multiple pages can be exported
   * @default true
   */
  multiPage?: boolean;
  /**
   * Specify the list of filetypes that the user can download.
   * This can be used to limit the download options as per file types for end users.
   * This limitation is applied to both native download and custom download scenarios.
   */
  allowedFileTypes?: FileType[];
  /**
   * Value between 0 and 1 to control the quality of the image.
   * Currently, only supported for ImageFileType.JPEG when exporting.
   * @minimum 0
   * @maximum 1
   */
  imageQuality?: number;
}
```

### Full Editor API-Specific Input Params

#### Create Doc Params inherits Editor Doc Params

```ts
{
  /** Canvas and template size or aspect ratio. */
  canvasSize?: Size | CanvasAspectId;
}
```

#### Create with Asset Doc params inherits Create Doc params 

```ts
{
  /** Asset from the client application to start editing with. */
  asset: AssetInfo;
}

```

#### Create with Template Doc params inherits Editor Doc params

```ts
{
  /** Start the editor workflow with a template */
  templateId: string;
}
```

#### Edit Doc Params inherit Editor Doc Params

```ts
{
  /** Document Id of the Express project */
  documentId: string;
}
```

### Mini Editor API parameters

For Mini Editors, we have the same Modal Params as the base params.

### Mini Editor API-Specific Input Params

#### Image Mini Editor

**Image Mini Editor Doc Params inherits base doc params**

```ts
{
  /** Asset from the host application to start editing with. */
  asset: Asset;
}

```
**Image Mini Editor Export Params inherits base Export params**

```ts
{
  /** Export options to be displayed in Image Mini Editor. */
  exportOptions?: ExportOptionsEditor[];
  /**
   * Specify the list of filetypes that the user can download.
   * This can be used to limit the download options as per file types for end users.
   * This limitation is applied to both native download and custom download scenarios.
   */
  allowedFileTypes?: FileType[];
}
```

#### Text to Image Mini Editor

**Image Mini Editor App Params inherits base App params**

```ts
{
  /** Text to search the temptate */
  promptText?: string;
}
```

**Image Mini Editor Export Params inherits base Export params**

```ts
{
  /**
   * Export options to configure the header buttons
   * Not used as of now
   */
  exportOptions?: ExportOptions[];
}
```

### Quick Action API parameters

For Quick actions, Container params are the same as base params. We only have changes in the Doc params, App Params, and Container Params. There are a few exceptions where the params have deviated, for example merge videos which have their own set of Doc params.

So, here we have created 3 level hierarchy which is as follows:

- `QuickActionDocParams`: This contains the common inputs for all QA
- `<Image / Video>QuickActionDocParams extends QuickActionDocParams`: This contains the inputs relevant for a particular QA type (Image/Video/PDF).
- `<API-Specific>QuickActionParams extends Image/VideQuickActionParams`: inputs specific for a particular API

**Quick Action App Params inherits Base App Params** 

```ts
{
  /** Theming options for the Quick Action Editor */
  colorTheme?: ColorTheme;
  spectrumTheme?: SpectrumTheme;
  scale?: Scale;
  /** Boolean that tells whether to receive target application errors or not to client. */
  receiveTargetErrors?: boolean;
}
```

**Quick Action Doc Params inherits Base Doc Params**

```ts
{
  /** Asset from the client application to start editing with. */
  asset?: Asset;
}
```
**Merge Videos Doc Params inherits Base Doc Params**

```ts
{
  /** Asset from the client application to start editing with. */
  asset?: Asset[];
}
```

We have the same output params for all Quick Action APIs as of now: 

**QuickActionExportParams inherits BaseExportParams**

```ts
{
  /** Export options for the asset that is created. These options would be visible in the quick action editor */
  exportOptions?: ExportOptions[];
}
```

## Step-by-Step Migration

### 1. Update SDK Version

Use this link to get the latest verison-- https://cc-embed.adobe.com/docs/v4/release/3p/modules.html

### 2. Update Initialization Code

Update your initialization code to use the new configuration parameters.

**v3:**

```ts
initialize: (hostInfo: HostInfo, configParams?: ConfigParams) => Promise<CCEverywhere>
```

**v4:**

```ts
initialize: ((hostInfo: HostInfoSpecifiedBase, configParams?: ConfigParamsBase, authOption?: AuthOption) => Promise<CCEverywhere>); terminate: (() => boolean)
```

### 3. Adjust API Calls
 
Review and update your API calls to match the new method signatures and parameters in v4. Here are sample changes:

V3:

Need input here @Davide

Expected sample code.

V4:

Need input here @Davide

Expected sample code.

### 4. Handle deprecated parameters

Identify and replace any deprecated features in your codebase. Refer to the v4 documentation for alternatives and updated methods.

v3:

`AdobeExpressEmbed.oldMethod();`
 
v4:

`AdobeExpressEmbed.newMethod();`

### 5. Test your implementation

After updating your code, thoroughly test your implementation to ensure everything works as expected. Pay particular attention to:

- **Initialization**: Ensure that the SDK initializes correctly with the new configuration parameters.
- **API Calls**: Validate that all API calls are functioning as intended with the updated method signatures and parameters.
- **Event Handling**: Verify that events are being handled correctly and that any callbacks are working as expected.
- **User Interactions**: Test all user interactions within the embedded content to ensure they are smooth and error-free.
- **Performance**: Monitor the performance to confirm that the enhancements in v4 are realized in your application.
- **Security**: Ensure that any new security features are properly configured and that your application complies with the latest security standards.

Here are some specific tests you can perform:

#### Initialization tests

- Ensure the SDK correctly initializes with the `initialize` method.
- Verify that the iframe is appended to the correct parent element.
- Check that the iframe size, padding, border radius, and background color are applied as specified.

#### Full editor API tests

- Test loading a template or design using `create`.
- Validate that the default category, search text, template type, and titles are set correctly in the editor.
- Ensure that export options, multi-page settings, allowed file types, and image quality settings are applied properly.

#### Mini editor API tests

- Test loading an asset in the Mini Editor using `editImage`.
- Verify that the asset is displayed and editable.
- Check that export options and allowed file types are correctly configured.

#### Quick Action API tests

- Test various Quick Action APIs such as image and video editing.
- Validate that common inputs for Quick Actions are working correctly.
- Ensure that API-specific parameters are applied and functioning as expected.

### 6. Review new features

Take advantage of new features introduced in v4. Review the release notes and documentation to explore new functionalities that could enhance your application. Some new features might include:

- Enhanced configuration options for better customization.
- New methods and parameters to provide more control over the SDK.
- Improved performance and security features.

### 7. Update Documentation and Dependencies

Ensure your internal documentation is updated to reflect the changes made during the migration. Also, update any dependencies that interact with Adobe Express Embed SDK to ensure compatibility. This includes:

- Updating any code samples or snippets in your documentation.
- Modifying any integration guides or setup instructions.
- Ensuring all team members are aware of the changes and how to use the new SDK features.

## Conclusion

Migrating from Adobe Express Embed SDK v3 to v4 involves updating initialization code, API calls, and handling deprecated features. 

By following this guide, you can ensure a smooth transition and take advantage of the new features and improvements in v4.
