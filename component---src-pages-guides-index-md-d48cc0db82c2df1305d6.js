"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[450],{65319:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return u}});var i,a=t(87462),r=t(63366),o=(t(15007),t(64983)),d=t(91515),s=["components"],l={},m=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),p={_frontmatter:l},c=d.Z;function u(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.mdx)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(m,{variant:"warning",slots:"header, text1, text2",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"IMPORTANT: Deprecation Warning"),(0,o.mdx)("p",null,"This version of the docs and SDK will be sunsetted later this year. As a result, we are no longer approving new submissions that integrate with v2."),(0,o.mdx)("p",null,"Instead, we would love for you to start integrating the new version of the SDK. To join the private beta and get early access to documentation, please fill out ",(0,o.mdx)("a",{parentName:"p",href:"https://airtable.com/shryiOk1VwoWxUCZs?prefill_Platform=Adobe%20Express%20Embed%20SDK&hide_Platform=true"},"this form"),"."),(0,o.mdx)("h1",{id:"quickstart-guide"},"Quickstart Guide"),(0,o.mdx)("p",null,"This guide explains how to start using the Adobe Express Embed SDK in your own application."),(0,o.mdx)("h2",{id:"step-1-get-an-api-key"},"Step 1: Get an API Key"),(0,o.mdx)("p",null,"Create a new project in the ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console"},"Developer Console"),'. Select "Add an API" > "Adobe Express Embed SDK".'),(0,o.mdx)("p",null,'Then, choose "Single-Page App" and register your domain in the "Allowed Domains" fields.'),(0,o.mdx)("p",null,"Note: As of March 2023, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"redirectUri")," parameter is no longer being checked by v2. You no longer need to include it in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"initialize()")," method. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"exchangeAuthCodeForToken()")," API no longer needs to be called."),(0,o.mdx)("h2",{id:"step-2-embed-the-sdk"},"Step 2: Embed the SDK"),(0,o.mdx)("p",null,"The latest ",(0,o.mdx)("a",{parentName:"p",href:"https://sdk.cc-embed.adobe.com/v2/version.json"},"version")," of the SDK is available on Adobe's CDN:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'var CDN_URL = "https://sdk.cc-embed.adobe.com/v2/CCEverywhere.js";\n')),(0,o.mdx)("p",null,"You can read the ",(0,o.mdx)("a",{parentName:"p",href:"/cc-everywhere/src/pages/guides/changelog/index.md"},"changelog")," to understand known issues as well as what changes have been made."),(0,o.mdx)("h3",{id:"load-via-script-tag"},"Load via script tag"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'<script src="https://sdk.cc-embed.adobe.com/v2/CCEverywhere.js"><\/script>\n<script>\n  (async () => {\n    const ccEverywhere = await window.CCEverywhere.initialize();\n  })();\n<\/script>\n')),(0,o.mdx)("h3",{id:"using-import"},"Using import"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"await import(CDN_URL);\nconst ccEverywhere = await window.CCEverywhere.initialize();\n")),(0,o.mdx)("h3",{id:"dynamic-script"},"Dynamic script"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'((document, url) => {\n    const script = document.createElement("script");\n    script.src = url;\n    script.onload = async () => {\n      if (!window.CCEverywhere) {\n          return;\n        }\n        const ccEverywhere = await window.CCEverywhere.initialize();\n    };\n    document.body.appendChild(script);\n  })(document, CDN_URL);\n')),(0,o.mdx)("h2",{id:"step-3-initialize-the-sdk"},"Step 3: Initialize the SDK"),(0,o.mdx)("p",null,"The SDK should only be initialized once each page. To initialize the SDK, pass the default method ",(0,o.mdx)("inlineCode",{parentName:"p"},"initialize()"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"CLIENT_ID")," (string): API key from Developer Console"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"APP_NAME")," (string): Name of the project folder created for end users of your integration. This should correspond to the name of your integration.")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"(async () => {\n    const ccEverywhere = await window.CCEverywhere.initialize({\n      clientId: <CLIENT_ID>,\n      appName: <APP_NAME>, \n      appVersion: { major: 1, minor: 0 },\n      platformCategory: 'web',\n    });\n})();\n")),(0,o.mdx)("p",null,"This returns a ",(0,o.mdx)("inlineCode",{parentName:"p"},"CCEverywhere")," Class object, with three methods:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"openQuickAction()"),": Quick actions component"),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"createDesign()"),": Full editor component"),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"editDesign()"),": Full editor component")),(0,o.mdx)("h2",{id:"next-steps-explore-the-sdk"},"Next Steps: Explore the SDK"),(0,o.mdx)("p",null,"The Adobe Express Embed SDK can be initialized with a customized locale. The ",(0,o.mdx)("a",{parentName:"p",href:"../../guides/index.md"},"guides")," along with the ",(0,o.mdx)("a",{parentName:"p",href:"../../reference/index.md"},"SDK references")," can help you start working with the SDK in a way that best suits your needs."),(0,o.mdx)("h3",{id:"full-editor"},(0,o.mdx)("a",{parentName:"h3",href:"../guides/full_editor/index.md"},"Full editor")),(0,o.mdx)("p",null,"With the full editor component, your users are able to:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"How to ",(0,o.mdx)("a",{parentName:"li",href:"../guides/full_editor/create_project/"},"create new projects")),(0,o.mdx)("li",{parentName:"ul"},"How to ",(0,o.mdx)("a",{parentName:"li",href:"../guides/full_editor/edit_project/"},"edit existing projects"))),(0,o.mdx)("p",null,"Users can access Adobe Express's huge template and asset library when starting with a blank new project in the editor. Pre-selected images can also be loaded into the editor for further designing. The editor can also load previous projects (created using your integration) by taking an existing project ID as input."),(0,o.mdx)("h3",{id:"quick-actions"},(0,o.mdx)("a",{parentName:"h3",href:"../guides/quick_actions/index.md"},"Quick actions")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"How to ",(0,o.mdx)("a",{parentName:"li",href:"../guides/quick_actions/image/"},"embed image quick actions")),(0,o.mdx)("li",{parentName:"ul"},"How to ",(0,o.mdx)("a",{parentName:"li",href:"../guides/quick_actions/video/"},"embed video quick actions"))),(0,o.mdx)("p",null,"Once the selected quick action loads in the iframe, users can browse their filesystem for an asset. At this time, only image quick actions can pass a pre-selected asset as input. After the quick action is completed, a download button will appear. You can configure other export options such as taking the user into a full editor component to further customize the modified asset, or saving it back onto your application."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-index-md-d48cc0db82c2df1305d6.js.map