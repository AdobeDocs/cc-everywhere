"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[58594],{97083:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return c}});var a=n(58168),r=n(80045),m=(n(88763),n(15680)),d=n(83407);const i=["components"],o={},l=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)});var p;const s={_frontmatter:o},x=d.A;function c(e){let{components:t}=e,n=(0,r.A)(e,i);return(0,m.mdx)(x,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"sdk-reference"},"SDK Reference"),(0,m.mdx)(l,{variant:"error",slots:"header, text1, text2",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"IMPORTANT: Deprecation Warning"),(0,m.mdx)("p",null,"We are no longer approving integrations using using SDK V1, V2, or V3"),(0,m.mdx)("p",null,"V1 and V2 are deprecated and V3 will be deprecated in 2024."),(0,m.mdx)("p",null,"This is the main API for accessing all Adobe Express Embed SDK components. The ",(0,m.mdx)("inlineCode",{parentName:"p"},"initialize()")," method takes ",(0,m.mdx)("a",{parentName:"p",href:"#hostinfo"},"HostInfo")," and an optional ",(0,m.mdx)("a",{parentName:"p",href:"#configparams"},"ConfigParams"),", and returns a ",(0,m.mdx)("a",{parentName:"p",href:"#cceverywhere"},"CCEverywhere")," object."),(0,m.mdx)("h2",{id:"initialize"},"initialize()"),(0,m.mdx)("p",null,"The default method ",(0,m.mdx)("inlineCode",{parentName:"p"},"initialize()")," is the API used to initialize the SDK. Make sure to call it only once a page."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-js"},"// after loading the SDK into the window\nwindow.CCEverywhere.initialize(\n    /* HostInfo */\n    {\n        clientId: YOUR_CLIENT_ID,\n        appName: YOUR_PROJECT_NAME,\n        appVersion: { major: 1, minor: 0 },\n        platformCategory: 'web', \n    },\n    /* ConfigParams (optional) */\n    {\n        locale: 'en_US',\n    }\n);\n")),(0,m.mdx)("h3",{id:"hostinfo"},"HostInfo"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"clientId"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Your API Key")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"appName"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Name of project folder created in user's Adobe Express account")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"appVersion"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"{ major: number, minor: number, patch?: number}"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Your app version")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"platformCategory"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'web'"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Specify host app platform")))),(0,m.mdx)("h3",{id:"configparams"},"ConfigParams"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"locale"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Language settings for SDK components")))),(0,m.mdx)("h2",{id:"cceverywhere"},"CCEverywhere"),(0,m.mdx)("p",null,"The CCEverywhere object is the object returned when the SDK is initialized."),(0,m.mdx)("p",null,"As of today, it exposes 4 methods:"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("inlineCode",{parentName:"li"},"openQuickAction()"),": Quick actions component"),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("inlineCode",{parentName:"li"},"createDesign()"),": Full editor component"),(0,m.mdx)("li",{parentName:"ol"},(0,m.mdx)("inlineCode",{parentName:"li"},"editDesign()"),": Full editor component")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-v-1-reference-index-md-24e20454e0a92241881a.js.map