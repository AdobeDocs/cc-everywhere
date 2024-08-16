"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[1821],{52665:function(e,n,o){o.r(n),o.d(n,{_frontmatter:function(){return d},default:function(){return c}});var t=o(58168),i=o(80045),a=(o(88763),o(15680)),r=o(83407);const p=["components"],d={},m={_frontmatter:d},l=r.A;function c(e){let{components:n}=e,o=(0,i.A)(e,p);return(0,a.mdx)(l,(0,t.A)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"quick-actions"},"Quick actions"),(0,a.mdx)("p",null,"Quick actions gives your users access to powerful, one-click image and video editing tools. Try them for yourself in our ",(0,a.mdx)("a",{parentName:"p",href:"https://demo.expressembed.com"},"demo app"),"."),(0,a.mdx)("p",null,"Adobe-powered quick actions take the most complex tasks from our flagship apps -- like remove background -- and turns them into one-click tasks. The quick actions component is embedded onto your application as an iframe."),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"quickAction")," class contains all the methods for launching quick action editors."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"// Initialize the SDK first\nconst { quickAction } = await ccEverywhere.initialize(); \nquickAction.convertToJPEG(docConfig, appConfig, exportConfig, containerConfig); \n")),(0,a.mdx)("p",null,"Each quick action has its own method. Here are the methods for image quick actions:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"convertToJPEG(docConfig, appConfig, exportConfig, containerConfig): void;"),(0,a.mdx)("li",{parentName:"ul"},"convertToPNG(docConfig, appConfig, exportConfig, containerConfig): void;"),(0,a.mdx)("li",{parentName:"ul"},"convertToSVG(docConfig, appConfig, exportConfig, containerConfig): void;"),(0,a.mdx)("li",{parentName:"ul"},"cropImage(docConfig, appConfig, exportConfig, containerConfig): void;"),(0,a.mdx)("li",{parentName:"ul"},"resizeImage(docConfig, appConfig, exportConfig, containerConfig): void;"),(0,a.mdx)("li",{parentName:"ul"},"removeBackground(docConfig, appConfig, exportConfig, containerConfig): void;"),(0,a.mdx)("li",{parentName:"ul"},"generateQRCode(docConfig, appConfig, exportConfig, containerConfig): void;")),(0,a.mdx)("p",null,"Here are the methods for video quick actions:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"convertToGIF(docConfig, appConfig, exportConfig, containerConfig): void;"),(0,a.mdx)("li",{parentName:"ul"},"convertToMP4(docConfig, appConfig, exportConfig, containerConfig): void;"),(0,a.mdx)("li",{parentName:"ul"},"cropVideo(docConfig, appConfig, exportConfig, containerConfig): void;"),(0,a.mdx)("li",{parentName:"ul"},"mergeVideos(docConfig, appConfig, exportConfig, containerConfig): void;"),(0,a.mdx)("li",{parentName:"ul"},"resizeVideo(docConfig, appConfig, exportConfig, containerConfig): void;"),(0,a.mdx)("li",{parentName:"ul"},"trimVideo(docConfig, appConfig, exportConfig, containerConfig): void;"),(0,a.mdx)("li",{parentName:"ul"},"animateFromAudio(docConfig, appConfig, exportConfig, containerConfig): void;"),(0,a.mdx)("li",{parentName:"ul"},"captionVideo(docConfig, appConfig, exportConfig, containerConfig): void;")),(0,a.mdx)("h2",{id:"parameters"},"Parameters"),(0,a.mdx)("p",null,"All the properties are optional."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},"docConfig"),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("a",{parentName:"td",href:"../../reference/CCEverywhere/quickAction/index.md#docconfig"},"DocConfig")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"Pass a starting asset to the quick action editor")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},"appConfig"),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("a",{parentName:"td",href:"../../reference/CCEverywhere/quickAction/index.md#appconfig"},"AppConfig")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"Properties to configure the editor")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},"exportConfig"),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("a",{parentName:"td",href:"../../reference/types/index.md#exportoptions"},"ExportOptions"),"[]"),(0,a.mdx)("td",{parentName:"tr",align:"left"},"Configure export options. If no export options are specified, the editor falls back to the default layout options.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:"left"},"containerConfig"),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("a",{parentName:"td",href:"../../reference/types/index.md#containerconfig"},"ContainerConfig")),(0,a.mdx)("td",{parentName:"tr",align:"left"},"Properties to configure the SDK container")))),(0,a.mdx)("h2",{id:"example-default-export-options"},"Example: Default export options"),(0,a.mdx)("p",null,"When no asset is passed as an input when a quick action is invoked, the user will be asked to browse/upload an image once the modal is open. Default export options will be surfaced to the user."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ts",metastring:'title="crop-image.js" hl_lines="15"',title:'"crop-image.js"',hl_lines:'"15"'},"quickAction.cropImage();\n")),(0,a.mdx)("h2",{id:"example-input-asset-custom-export-options"},"Example: Input asset, custom export options"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"quickAction")," APIs can take an image asset and custom export options as input. "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",29:!0,className:"language-ts",metastring:'title="remove-background.js" hl_lines="5 29 40"',title:'"remove-background.js"',hl_lines:'"5','40"':!0},"let docConfig = {\n    asset: {\n        data: base64Asset,\n        dataType: 'base64',\n        type: 'image' \n    }\n}\n\nconst exportOptions = [{\n    id: 'edit-in-express',\n    label: 'Edit in Adobe Express',\n    action: {\n        target: 'express',\n    },\n    style: {\n        uiType: 'button'\n    }\n},\n{\n    id: 'download',\n    label: 'Download',\n    action: {\n        target: 'download'\n    },\n    style: {\n        uiType: 'button'\n    }\n},\n{\n    id: 'save-modified-asset',\n    label: 'Save image',\n    action: {\n        target: 'publish'\n    },\n    style: {\n        uiType: 'button'\n    }\n}];\n\nquickAction.removeBackground(docConfig, exportOptions);\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-quick-actions-index-md-6ce8ad07bbcc7f44795d.js.map