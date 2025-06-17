# **Workflows Explained: Editor vs Module vs QuickAction workflows**

## **Overview**

The Creative Cloud Everywhere SDK for third-party integrations provides three distinct workflow types, each designed for different creative use cases. Understanding when and how to use each workflow is crucial for building effective creative applications.

## **Workflow Architecture**

After initializing the SDK, you gain access to three workflow objects:

```typescript
import CCEverywhere from '@cc-everywhere/sdk/3p';

const ccEverywhere = await CCEverywhere.initialize(hostInfo, configParams, authOption);

// Three workflow types available
ccEverywhere.editor     // Full creative editing experiences
ccEverywhere.module     // Specialized creative modules  
ccEverywhere.quickAction // Fast, single-purpose actions
```

## **Editor Workflow**

### **Purpose**
The Editor workflow provides full-featured creative editing experiences with comprehensive tools and capabilities. It's designed for complex design creation and editing tasks.

### **Key Characteristics**
- **Comprehensive Interface**: Full Creative Cloud editing tools
- **Multiple Creation Modes**: Create from scratch, with assets, or templates
- **Advanced Editing**: Complete design editing capabilities
- **Collaboration Features**: Sharing, commenting, and version control

### **Available Methods**

#### **1. Create from Scratch**
```typescript
ccEverywhere.editor.create({
  // Optional document configuration
  canvasSize: { width: 1920, height: 1080 },
  documentTitle: "My Design"
}, {
  // Optional app configuration
  colorTheme: "light",
  spectrumTheme: "medium"
}, {
  // Optional export configuration
  outputFormat: "PNG",
  exportOptions: { quality: "high" }
});
```

#### **2. Create with Existing Asset**
```typescript
ccEverywhere.editor.createWithAsset({
  // Required document configuration with asset
  asset: {
    url: "https://example.com/image.jpg",
    mimeType: "image/jpeg"
  }
}, {
  // App configuration
}, {
  // Export configuration
});
```

#### **3. Create with Template**
```typescript
ccEverywhere.editor.createWithTemplate({
  // Required document configuration with template
  template: {
    id: "template-12345",
    url: "https://templates.adobe.com/template/12345"
  }
}, {
  // App configuration
}, {
  // Export configuration  
});
```

#### **4. Edit Existing Design**
```typescript
ccEverywhere.editor.edit({
  // Required document configuration for editing
  document: {
    id: "design-67890",
    url: "https://creative.adobe.com/design/67890"
  }
}, {
  // App configuration
}, {
  // Export configuration
});
```

### **When to Use Editor Workflow**
- **Complex Design Creation**: Logos, posters, social media graphics
- **Professional Editing**: Advanced photo editing and manipulation
- **Template Customization**: Modifying professional templates
- **Collaborative Projects**: Team-based design work
- **Brand Asset Creation**: Maintaining consistent brand elements

## **Module Workflow**

### **Purpose**
Module workflows provide specialized creative capabilities focused on specific tasks. They offer more targeted functionality than the full editor while being more interactive than quick actions.

### **Key Characteristics**
- **Specialized Tools**: Purpose-built for specific creative tasks
- **Interactive Experience**: User-guided workflows with preview capabilities
- **AI-Powered Features**: Advanced automated capabilities
- **Focused Interface**: Streamlined UI for specific use cases

### **Available Methods**

#### **1. Edit Image Module**
```typescript
ccEverywhere.module.editImage({
  // Required image configuration
  image: {
    url: "https://example.com/photo.jpg",
    mimeType: "image/jpeg"
  }
}, {
  // Optional app configuration
  tools: ["crop", "adjust", "effects"],
  previewMode: true
}, {
  // Export configuration
  outputFormat: "JPEG",
  quality: 0.8
});
```

#### **2. Create Image from Text (AI Generation)**
```typescript
ccEverywhere.module.createImageFromText({
  // Optional app configuration
  promptGuidance: true,
  styleOptions: ["photographic", "artistic", "digital-art"],
  aspectRatios: ["16:9", "1:1", "9:16"]
}, {
  // Export configuration
  outputFormat: "PNG",
  resolution: "high"
});
```

#### **3. Create Template from Text**
```typescript
ccEverywhere.module.createTemplateFromText();
// Note: This method has minimal configuration options
```

### **When to Use Module Workflow**
- **AI-Powered Creation**: Text-to-image generation
- **Specialized Editing**: Focus on specific image editing tasks
- **Guided Experience**: When users need structured workflows
- **Content Generation**: Creating assets from prompts or descriptions
- **Interactive Previews**: When real-time feedback is important

## **QuickAction Workflow**

### **Purpose**
QuickAction workflows provide fast, automated processing of media files. They're designed for single-purpose operations that require minimal user interaction.

### **Key Characteristics**
- **Automated Processing**: Minimal user input required
- **Fast Execution**: Optimized for speed and efficiency
- **Batch Processing**: Handle multiple files efficiently
- **Predictable Outcomes**: Consistent, reliable results

### **Available Methods**

#### **Image Quick Actions**
```typescript
// Format conversion
ccEverywhere.quickAction.convertToJPEG(docConfig, appConfig, exportConfig);
ccEverywhere.quickAction.convertToPNG(docConfig, appConfig, exportConfig);
ccEverywhere.quickAction.convertToSVG(docConfig, appConfig, exportConfig);

// Image manipulation
ccEverywhere.quickAction.cropImage(docConfig, appConfig, exportConfig);
ccEverywhere.quickAction.resizeImage(docConfig, appConfig, exportConfig);
ccEverywhere.quickAction.removeBackground(docConfig, appConfig, exportConfig);

// Utility
ccEverywhere.quickAction.generateQRCode(docConfig, appConfig, exportConfig);
```

#### **Video Quick Actions**
```typescript
// Format conversion
ccEverywhere.quickAction.convertToGIF(docConfig, appConfig, exportConfig);
ccEverywhere.quickAction.convertToMP4(docConfig, appConfig, exportConfig);

// Video editing
ccEverywhere.quickAction.cropVideo(docConfig, appConfig, exportConfig);
ccEverywhere.quickAction.resizeVideo(docConfig, appConfig, exportConfig);
ccEverywhere.quickAction.trimVideo(docConfig, appConfig, exportConfig);
ccEverywhere.quickAction.mergeVideos(docConfig, appConfig, exportConfig);

// Advanced features
ccEverywhere.quickAction.animateFromAudio(docConfig, appConfig, exportConfig);
ccEverywhere.quickAction.captionVideo(docConfig, appConfig, exportConfig);
```

#### **Example Usage**
```typescript
// Simple image resizing
ccEverywhere.quickAction.resizeImage({
  // Document configuration
  inputFiles: [{ url: "https://example.com/large-image.jpg" }],
  outputDimensions: { width: 800, height: 600 }
}, {
  // App configuration (optional)
  preserveAspectRatio: true
}, {
  // Export configuration
  outputFormat: "JPEG",
  quality: 0.9
});
```

### **When to Use QuickAction Workflow**
- **Batch Processing**: Converting multiple files at once
- **Format Conversion**: Changing file formats quickly
- **Automated Tasks**: Background removal, resizing, cropping
- **Utility Functions**: QR code generation
- **Performance-Critical**: When speed is more important than customization

## **Workflow Comparison**

| Feature | Editor | Module | QuickAction |
|---------|---------|---------|-------------|
| **Complexity** | High | Medium | Low |
| **User Interaction** | Extensive | Moderate | Minimal |
| **Processing Time** | Variable | Moderate | Fast |
| **Customization** | Maximum | High | Limited |
| **Learning Curve** | Higher | Moderate | Minimal |
| **Use Case** | Creative Design | Specialized Tasks | Automated Processing |

## **Choosing the Right Workflow**

### **Use Editor When:**
- Users need full creative control
- Complex design requirements
- Professional-grade editing tools needed
- Collaboration features required
- Brand consistency is important

### **Use Module When:**
- Specific specialized functionality needed
- AI-powered features are the focus
- Interactive guided experience desired
- Preview and refinement capabilities important
- Balance between simplicity and power needed

### **Use QuickAction When:**
- Speed and efficiency are priorities
- Automated processing required
- Batch operations needed
- Minimal user interaction desired
- Predictable, consistent results expected

## **Configuration Options**

All workflows accept similar configuration parameters:

### **Document Configuration (`docConfig`)**
- Input files and assets
- Processing parameters
- Output specifications

### **App Configuration (`appConfig`)**
- UI customization options
- Feature availability
- User experience settings

### **Export Configuration (`exportConfig`)**
- Output format and quality
- File naming and organization
- Post-processing options

### **Container Configuration (`containerConfig`)**
- Embedded container appearance
- Modal vs inline display
- Responsive behavior

## **Best Practices**

### **Workflow Selection**
1. **Start with Use Case**: Identify primary user goals
2. **Consider User Expertise**: Match complexity to user skills
3. **Evaluate Performance Needs**: Balance features vs speed
4. **Plan for Scale**: Consider batch processing requirements

### **Implementation**
1. **Provide Clear Context**: Help users understand workflow purpose
2. **Handle Errors Gracefully**: Implement proper error handling
3. **Optimize for Performance**: Use appropriate workflow for task complexity
4. **Test User Experience**: Validate workflow choice with real users

Each workflow type serves distinct purposes in the creative process, from quick automated tasks to comprehensive design experiences. Understanding these differences enables you to build more effective and user-friendly creative applications.