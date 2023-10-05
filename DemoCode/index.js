
//dynamic script 

const CDN_URL = "https://sdk.cc-embed.adobe.com/v3/CCEverywhere.js";
((document, url) => {
  const script = document.createElement("script");
  script.src = url;
  script.onload = async () => {
    if (!window.CCEverywhere) {
      return;
    }
    const ccEverywhere = await window.CCEverywhere.initialize();
  };
  document.body.appendChild(script);
})(document, CDN_URL);

// Initialize the SDK

(async () => {
  const ccEverywhere = await window.CCEverywhere.initialize({
    clientId: clientId, // Your API key
    appName: app_name, // Name of the project folder created in Adobe Express for users
  });
})();

// create new project 

ccEverywhere.createDesign({
  callbacks: {
    onCancel: () => { },
    onPublish: (publishParams) => {
      console.log(publishParams)
      const localData = { project: publishParams.asset[0].projectId, image: publishParams.asset[0].data };
      image_data.src = localData.image;
      project_id = localData.project;
    },
    onError: (err) => {
      <Logger error={err} />
    },
  },
  outputParams: {
    outputType: "base64",
  },
  inputParams: {
    ...(key !== "" && { editorPanelView: key }), // key are yourStuff ,templates,media,text,elements,custom
    canvasSize: canvas === 'custom' ? customCanvas : canvas, //If the user opts for a custom canvas size, the Custom Size modal opens, allowing the user to input dimensions and create a project. The resulting canvas, with the specified custom dimensions, is then loaded into the iframe.
    ...(customImage && {
      asset: {
        data: customImage,
        dataType: "base64",
        type: "image"
      }
    })
  }
})

// Edit project 

ccEverywhere.editDesign(
  {
    inputParams: {
      asset: {
        data: dataURL !== undefined && dataURL, //The 'dataUrl' with base64 encoding is utilized to transmit the image to the iframe for subsequent editing and processing.
        dataType: "base64",
        type: "image"
      },
    },
    outputParams: {
      outputType: "base64"
    },
  })

//image quick actions 

ccEverywhere.openQuickAction({
  id: getKey.key, //keys are remove-background , resize-image, crop-image , convert-to-jpg , convert-to-png
  inputParams: {
    asset: {
      data: imageUrl, //The 'imageUrl' is encoded in base64 and used to send the image to the iframe for performing subsequent quick actions
      dataType: "base64",
      type: "image"
    },
    exportOptions: [
      {
        target: 'Editor',
        variant: 'primary',
        optionType: 'button',
        buttonType: 'native'
      },
      {
        target: 'Download',
        variant: 'primary',
        optionType: 'button',
        buttonType: 'native'
      },

      {
        target: 'Host',
        id: 'save-to-host-app',
        label: 'Save',
        variant: 'cta',
        optionType: 'button',
        buttonType: 'custom'
      }]
  }
})