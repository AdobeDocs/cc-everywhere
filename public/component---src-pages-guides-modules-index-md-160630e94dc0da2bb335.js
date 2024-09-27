"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[25273],{71643:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return s}});var a=n(58168),i=n(80045),r=(n(88763),n(15680)),o=n(83407);const d=["components"],m={},l={_frontmatter:m},p=o.A;function s(e){let{components:t}=e,n=(0,i.A)(e,d);return(0,r.mdx)(p,(0,a.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"modules"},"Modules"),(0,r.mdx)("p",null,"This guide will demonstrate how to embed our Generate Image and Edit Image modules in your own application."),(0,r.mdx)("h2",{id:"createimagefromtext"},"createImageFromText()"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"module")," class contains all the methods for launching quick action editors. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"createImageFromText()")," API is powered by Adobe Firefly."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"// Initialize the SDK first\nconst { module} = await ccEverywhere.initialize(); \nmodule.createImageFromText(); \n")),(0,r.mdx)("h3",{id:"texttoimageparams"},"TextToImageParams"),(0,r.mdx)("p",null,"All the properties in this object are optional."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"appConfig"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../reference/CCEverywhere/miniEditor/index.md#texttoimageappconfig"},"TextToImageAppConfig")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Pass a text prompt to preload in the Generate Image editor")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"exportConfig"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../reference/types/index.md#exportoptions"},"ExportOptions"),"[]"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Configure export options. If no export options are specified, the editor falls back to the default layout options.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"containerConfig"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../reference/types/index.md#containerconfig"},"ContainerConfig")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Properties to configure the SDK container")))),(0,r.mdx)("h2",{id:"editimage"},"editImage()"),(0,r.mdx)("p",null,"This API launches an iframe that allows users to continue editing an image in a modal. Instead of the entire Express editing experience, this module only loads relevant image-editing capabilities."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"// Initialize the SDK first\nconst { module} = await ccEverywhere.initialize(); \nmodule.editImage(docConfig); \n")),(0,r.mdx)("p",null,"The only required property is ",(0,r.mdx)("inlineCode",{parentName:"p"},"docConfig"),"."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"docConfig"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../reference/CCEverywhere/miniEditor/index.md#editimagedocconfig"},"EditImageDocConfig")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Pass an asset to preload into the Edit Image module")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"appConfig"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../reference/CCEverywhere/miniEditor/index.md#baseeditorappconfig"},"BaseEditorAppConfig")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Pass callback functions")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"exportConfig"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../reference/types/index.md#exportoptions"},"ExportOptions"),"[]"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Configure export options. If no export options are specified, the editor falls back to the default layout options.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"containerConfig"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../reference/types/index.md#containerconfig"},"ContainerConfig")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Properties to configure the SDK container")))),(0,r.mdx)("h2",{id:"example-create-image-from-text"},"Example: Create image from text"),(0,r.mdx)("p",null,"The following code will invoke the text-to-image module. In this example, we pass a string to be used as a prompt. If that field is left empty, the user will be prompted to input a prompt once the modal is open."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts",metastring:'title="text-to-image.js"',title:'"text-to-image.js"'},'// Initialize the SDK first\nconst { module} = await ccEverywhere.initialize(hostInfo); \nlet appConfig = {\n    promptText: "Aliens sitting in lawn chairs"\n}\nmodule.createImageFromText(appConfig);\n')),(0,r.mdx)("h2",{id:"example-edit-image"},"Example: Edit Image"),(0,r.mdx)("p",null,"The following code will invoke the Edit Image module."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts",metastring:'title="image-editing.js"',title:'"image-editing.js"'},"// Initialize the SDK first\nconst { module } = await ccEverywhere.initialize(hostInfo); \nlet docConfig = {\n    asset: {\n        data: 'replace-with-base64-encoded-asset',\n        dataType: 'base64',\n        type: 'image' \n    },\n};\n\nconst exportOptions = [{\n    type: 'continue-editing',\n    label: 'Continue Editing',\n    style: {\n        uiType: 'button'\n    },\n    options: [\n        {\n            id: 'exportOption3',\n            style: {\n                uiType: 'dropdown'\n            },\n            action: {\n                target: 'image-module',\n                intent: 'remove-background'\n            }\n        },\n        {\n            id: 'exportOption4',\n            style: {\n                uiType: 'dropdown'\n            },\n            action: {\n                target: 'express',\n                intent: 'add-images'\n            }\n        },\n        {\n            id: 'exportOption5',\n            style: {\n                uiType: 'dropdown'\n            },\n            action: {\n                target: 'express',\n                intent: 'add-text'\n            }\n        }\n    ]\n}];\nmodule.editImage(docConfig, exportOptions);\n")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-modules-index-md-160630e94dc0da2bb335.js.map