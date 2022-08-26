"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[253],{4536:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return s}});var a=n(7462),r=n(3366),i=(n(5007),n(4983)),o=n(1515),m=["components"],d={},p={_frontmatter:d},l=o.Z;function s(e){var t=e.components,n=(0,r.Z)(e,m);return(0,i.mdx)(l,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",null,"Image Quick Actions"),(0,i.mdx)("p",null,"Each Image Quick Actions component is loaded into the host application as an iframe, like the Express editor component. It can be launched with an image asset attached (jpg/png). If no input asset is provided, the modal will automatically prompt the user to browse their device for a image file. "),(0,i.mdx)("h2",{id:"openquickaction"},"openQuickAction()"),(0,i.mdx)("p",null,"After the SDK has been initialized, the ",(0,i.mdx)("a",{parentName:"p",href:"../../../reference/index.md#cceverywhere"},"CCEverywhere")," object exposes these Image Quick Actions via the ",(0,i.mdx)("inlineCode",{parentName:"p"},"openQuickAction()")," method. "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"ccEverywhere.openQuickAction(\n    // QuickActionsParams\n    {\n        id: 'image-crop', \n        inputParams: {\n            exportOptions: []\n        },\n        callbacks: {\n            onCancel: () => {},\n            onError: (err) => {},\n            onLoadStart: () => {},\n            onLoad: () => {},\n            onPublishStart: () => {},\n            onPublish: (publishParams) => {},\n        },\n        modalParams: {},\n    }\n)\n")),(0,i.mdx)("h3",{id:"quickactionparams"},(0,i.mdx)("a",{parentName:"h3",href:"../../../reference/quick_actions/index.md#quickactionparams"},"QuickActionParams")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"openQuickAction()")," takes an object ",(0,i.mdx)("inlineCode",{parentName:"p"},"QuickActionParams")," with 4 parameters:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Description"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"id"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Choose Quick Actions component"),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"../../../reference/quick_actions/index.md#quickactionid"},"QuickActionId"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"inputParams"),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"../../../reference/shared_types/index.md#asset"},"Launch with asset")," and ",(0,i.mdx)("a",{parentName:"td",href:"../../../reference/quick_actions/index.md#exportoption"},"export options")),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"../../../reference/quick_actions/index.mdquickactioninputparams"},"QuickActionInputParams"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"callbacks"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Callback functions"),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"../../../reference/shared_types/index.md#callbacks"},"Callbacks"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"modalParams"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Define size of QA iframe"),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"../../../reference/shared_types/index.md#modalparams"},"ModalParams"))))),(0,i.mdx)("p",null,"Only ",(0,i.mdx)("inlineCode",{parentName:"p"},"id")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"inputParams.exportOptions")," is required to initialize the iframe."),(0,i.mdx)("h3",{id:"quickactionid"},(0,i.mdx)("a",{parentName:"h3",href:"../../../reference/quick_actions/index.md#quickactionid"},"QuickActionId")),(0,i.mdx)("p",null,"Identifies which Image Quick Actions component should be loaded into the iframe."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Quick Action"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"QuickActionId"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Crop Image"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"'image-crop'")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Convert to JPG"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"'convert-to-jpg'")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Convert to PNG"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"'convert-to-png'")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Resize Image"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"'image-resize'")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Remove Background"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"'remove-background'")))),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)("h4",{id:"step-1a-user-uploads-an-image-asset-and-clicks-the-image-crop-button"},'Step 1a: User uploads an image asset, and clicks the "Image Crop" button.'),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},'After a user uploads an image, a FileReader object is instantiated and converts the file to a base64 data type and saves it to the variable "imageUrl". '),(0,i.mdx)("li",{parentName:"ul"},"This ",(0,i.mdx)("inlineCode",{parentName:"li"},"imageUrl")," is passed as ",(0,i.mdx)("inlineCode",{parentName:"li"},"inputParams.asset")," when the ",(0,i.mdx)("inlineCode",{parentName:"li"},"openQuickAction()")," method is called. "),(0,i.mdx)("li",{parentName:"ul"},"The Image Crop QA Component is launched in an iframe, and the user can crop the uploaded image as they wish. ")),(0,i.mdx)("h4",{id:"step-1b-user-clicks-the-image-crop-button-with-no-asset-attached"},'Step 1b: User clicks the "Image Crop" button, with no asset attached.'),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The Image Crop QA component is launched in an iframe. The user will have to browse for an image asset to perform the image crop on. ")),(0,i.mdx)("h4",{id:"step-2-export-modified-asset"},"Step 2: Export Modified Asset"),(0,i.mdx)("p",null,"Finally, users can choose between 3 export options: "),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Customize"),": to continue designing in a CC Express editor component"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Download"),": to save the asset"),(0,i.mdx)("li",{parentName:"ul"},"Custom button that targets host app")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n  <title>Quick Actions</title>\n  </head>\n    \n  <body>\n    <h1> Image Quick Action Example </h1>\n    <input type=\"file\" id=\"fileInput\" />\n    <img id=\"image-container\" height=\"420\" width=\"420\" />\n    <button id=\"image-crop\"> Crop Image </button>\n\n    <script src=\"https://sdk.cc-embed.adobe.com/v1/CCEverywhere.js\"><\/script>\n    <script type=\"text/javascript\" >\n\n    const PROJECT_NAME = 'cc everywhere';\n    /* file: user uploaded file\n    imageUrl: base64 representation we pass into QA function */\n    var file, encodedImage;\n    /*  appImage is the image container displayed in sample */\n    var appImage = document.getElementById('image-container');\n\n    /* This event listener checks to see if the user uploads a new file and reads it into base64 data type for SDK ingestion later */\n    \n    document.getElementById('fileInput')\n    .addEventListener('change', (e) => {\n        const reader = new FileReader();\n        file = e.target.files[0];\n        /* reads file into base 64 data type */\n        reader.readAsDataURL(file);\n        reader.onload = () => {\n            encodedImage = reader.result;\n        }\n        reader.onerror = (error) => {\n            console.log('error', error);\n        };\n    })\n\n    var ccEverywhere = window.CCEverywhere.initialize(\n        {\n            clientId: YOUR_CLIENT_ID,\n            appName: PROJECT_NAME,\n            appVersion: { major: 1, minor: 0 },\n            platformCategory: 'web',\n            redirectUri: YOUR_REDIRECT_URI\n        }\n    );\n\n    const exportOptions = [\n        /* Customize export button */\n        {\n            target: 'Editor',\n            variant: 'cta',\n            optionType: 'button',\n            buttonType: 'native'\n        },\n        /* Download export button */\n        {\n            target: 'Download',\n            variant: 'primary',\n            optionType: 'button',\n            buttonType: 'native'\n        },\n        /* Custom implementation in onPublish callback */\n        {\n            target: 'Host',\n            id: 'save-to-host-app',\n            label: 'Embed in app',\n            variant: 'cta',\n            optionType: 'button',\n            buttonType: 'custom'\n        }\n    ];\n\n    const callbacks = {\n        onCancel: () => {},\n        onPublish: (publishParams) => {\n            if(publishParams.exportButtonId==\"save-to-host-app\"){\n                appImage.src = publishParams.asset.data;\n                appImage.style.visibility=\"visible\";\n            }\n        },\n        onError: (err) => {\n            console.error('Error received is', err.toString())\n        }\n    }\n\n    document.getElementById('image-crop')\n    .addEventListener('click', () => {\n        ccEverywhere.openQuickAction({\n            id: 'image-crop', \n            inputParams: {\n                asset: {\n                    data: encodedImage, \n                    dataType: 'base64', \n                    type: 'image'\n                }, \n                exportOptions: exportOptions\n            },\n            callbacks: callbacks,\n            modalParams: {},\n        })\n    })\n    <\/script>\n  </body> \n</html>\n")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-quick-actions-image-index-md-a95dc978fbcf9b91c443.js.map