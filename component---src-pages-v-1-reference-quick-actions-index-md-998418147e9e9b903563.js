"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[712],{47790:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return i},default:function(){return x}});var n=a(87462),r=a(63366),d=(a(15007),a(64983)),m=a(91515),o=["components"],i={},p={_frontmatter:i},l=m.Z;function x(t){var e=t.components,a=(0,r.Z)(t,o);return(0,d.mdx)(l,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"quick-actions"},"Quick actions"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"openQuickAction()")," API allows you to embed the quick actions component in your application."),(0,d.mdx)("h2",{id:"openquickaction"},"openQuickAction()"),(0,d.mdx)("p",null,"This method launches an iframe in your application for your user to perform a quick action."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"openQuickAction(QuickActionParams) \n")),(0,d.mdx)("h3",{id:"quickactionparams"},"QuickActionParams"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"openQuickAction()")," takes an object ",(0,d.mdx)("inlineCode",{parentName:"p"},"QuickActionParams")," with 4 properties."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"id"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"#quickactionid"},"QuickActionId")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"ID for associated quick action")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"inputParams"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"#quickactioninputparams"},"QuickActionInputParams")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Asset to load (image only), and export button options")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"modalParams (optional)"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"../shared_types/index.md#modalparams"},"ModalParams")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Specify modal dimensions")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"outputParams (optional)"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"../shared_types/index.md#ccxoutputparams"},"CCXOutputParams")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Specify output type and file type of created project")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"callbacks (optional)"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"../shared_types/index.md#callbacks"},"Callbacks")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"onCancel, onPublish, onError, onLoad, onLoadStart, onPublishStart")))),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Note"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"inputParams.exportOptions"),' determines which export buttons are exposed to the user once the action is complete, and must be defined with at least an empty array. If given an empty array, the "Download" button will be surfaced as an export option.'),(0,d.mdx)("h3",{id:"quickactionid"},"QuickActionId"),(0,d.mdx)("p",null,"This ID is associated with the quick action you want to surface to your user."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Quick Action"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"QuickActionId"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Crop Image"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'image-crop'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Image")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Convert to JPG"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'convert-to-jpg'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Image")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Convert to PNG"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'convert-to-png'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Image")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Resize Image"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'image-resize'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Image")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Remove Background"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'remove-background'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Image")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Change Speed"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'change-speed'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Video")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Convert to GIF"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'convert-to-gif'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Video")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Convert to MP4"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'convert-to-mp4'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Video")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Crop Video"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'crop-video'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Video")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Merge Video"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'merge-video'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Video")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Resize Video"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'resize-video'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Video")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Reverse Video"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'reverse-video'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Video")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Trim Video"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'trim-video'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Video")))),(0,d.mdx)("h3",{id:"quickactioninputparams"},"QuickActionInputParams"),(0,d.mdx)("p",null,"Allows you to specify an input asset and export options for the quick actions modal."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"asset"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"../shared_types/index.md#asset"},"Asset")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Image you want to load into QA modal.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"exportOptions"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"#exportoption"},"ExportOption")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Define export buttons")))),(0,d.mdx)("h3",{id:"example"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"ccEverywhere.openQuickAction(\n    {\n        id: 'image-resize',\n        inputParams: {\n            // passing a starting asset is not available for video quick actions\n            asset: {\n                data: <ENCODED_IMAGE>, \n                dataType: 'base64', \n                type: 'image'\n            }, \n            exportOptions: []\n        }\n    }\n)\n")),(0,d.mdx)("h2",{id:"exportoption"},"ExportOption"),(0,d.mdx)("p",null,"Allows you to define export buttons for a quick action."),(0,d.mdx)("p",null,"This is an array of ",(0,d.mdx)("a",{parentName:"p",href:"#exportbutton"},"ExportButton")," and/or ",(0,d.mdx)("a",{parentName:"p",href:"#exportbuttongroup"},"ExportButtonGroup"),' type objects. When specified with an empty array, a "Download" button will still be generated for the user once the action is completed.'),(0,d.mdx)("h2",{id:"exportbutton"},"ExportButton"),(0,d.mdx)("p",null,"There are two types of export buttons:  ",(0,d.mdx)("inlineCode",{parentName:"p"},"NativeExportButton")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"CustomExportButton"),"."),(0,d.mdx)("h3",{id:"nativeexportbutton"},"NativeExportButton"),(0,d.mdx)("p",null,"This is used to render a native button once the quick action has finished. You will not be notified when the button is clicked. If you want to be notified via a custom click handler, use ",(0,d.mdx)("a",{parentName:"p",href:"#customexportbutton"},(0,d.mdx)("inlineCode",{parentName:"a"},"CustomExportButton")),"."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"#target"},"target")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'Editor' or 'Download'")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"label"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Localized text of the export button")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"variant"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'cta', 'primary', 'secondary'")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"optionType"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'button'")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"buttonType"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'native'")))),(0,d.mdx)("h3",{id:"customexportbutton"},"CustomExportButton"),(0,d.mdx)("p",null,"This is used to render a custom button once the Quick Action has finished. Use this if you want to have a custom button click handler."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"id"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"The id of the export button")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"#target"},"target")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'Host'")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"label"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Localized text of the export button")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"variant"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'cta', 'primary', 'secondary'")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"optionType"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'button'")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"buttonType"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'custom'")))),(0,d.mdx)("h4",{id:"target"},"target"),(0,d.mdx)("p",null,"The target determines the type of export."),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"'Editor': Opens asset in an ",(0,d.mdx)("a",{parentName:"li",href:"../full_editor/index.md"},"full editor component")),(0,d.mdx)("li",{parentName:"ul"},"'Download':  Downloads the asset to user's machine"),(0,d.mdx)("li",{parentName:"ul"},"'Host': Targets host app - id is passed in ",(0,d.mdx)("a",{parentName:"li",href:"../shared_types/index.md#quickactionpublishparams"},(0,d.mdx)("inlineCode",{parentName:"a"},"onPublish"))," callback along with asset data")),(0,d.mdx)("p",null,"For ",(0,d.mdx)("inlineCode",{parentName:"p"},"NativeExportButton")," objects, ",(0,d.mdx)("inlineCode",{parentName:"p"},"label")," defaults to ",(0,d.mdx)("strong",{parentName:"p"},"Customize")," when targeting the full editor and ",(0,d.mdx)("strong",{parentName:"p"},"Download")," when the target is specified as 'Download;."),(0,d.mdx)("h3",{id:"example-1"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"const exportOptions = [\n    {\n        // Customize further in the full editor\n        target: 'Editor',\n        variant: 'cta',\n        optionType: 'button',\n        buttonType: 'native'\n    },\n    {\n        target: 'Download',\n        variant: 'primary',\n        optionType: 'button',\n        buttonType: 'native'\n    },\n    {\n        target: 'Host',\n        id: 'save-to-host-app',\n        label: 'Embed in app',\n        variant: 'cta',\n        optionType: 'button',\n        buttonType: 'custom'\n    }\n];\nconst callbacks = {\n    onCancel: () => {},\n    onPublish: (publishParams) => {\n        if(publishParams.exportButtonId==\"save-to-host-app\"){\n            //customize functionality here\n        }\n    },\n    onError: (err) => {\n        console.error('Error received is', err.toString())\n    }\n}\n")),(0,d.mdx)("h2",{id:"exportbuttongroup"},"ExportButtonGroup"),(0,d.mdx)("p",null,"This is used to render a group of buttons which will be shown as a drop down under a parent button."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"label"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Localized text of the export button group")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Variant"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'cta', 'primary', 'secondary'")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"optionType"),(0,d.mdx)("td",{parentName:"tr",align:"left"},'"group"')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"buttons"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"#exportbutton"},"ExportButton"),"[]")))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-v-1-reference-quick-actions-index-md-998418147e9e9b903563.js.map