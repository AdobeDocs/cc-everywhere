"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[74033],{79622:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return l},default:function(){return h}});var i=a(58168),t=a(80045),o=(a(88763),a(15680)),r=a(83407);const d=["components"],l={},s=(m="InlineAlert",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var m;const p={_frontmatter:l},c=r.A;function h(e){let{components:n}=e,a=(0,t.A)(e,d);return(0,o.mdx)(c,(0,i.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"adobe-express-embed-sdk-reference"},"Adobe Express Embed SDK Reference"),(0,o.mdx)("h2",{id:"embed-and-initialize-the-sdk"},"Embed and initialize the SDK"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Follow the steps in the Quickstart Guide to ",(0,o.mdx)("a",{parentName:"li",href:"../guides/quickstart/index.md#step-2-embed-the-sdk"},"embed the SDK")," in your application."),(0,o.mdx)("li",{parentName:"ol"},"After you have imported the SDK to your application, you need to call the ",(0,o.mdx)("inlineCode",{parentName:"li"},"initialize")," API first. View the full reference for that ",(0,o.mdx)("a",{parentName:"li",href:"./initialize/index.md"},"API")," here.")),(0,o.mdx)("h3",{id:"cceverywhere"},"CCEverywhere"),(0,o.mdx)("p",null,"Once you have successfully initialized the SDK, a Promise will be returned containing the ",(0,o.mdx)("a",{parentName:"p",href:"./sdk/src/3p/CCEverywhere/classes/CCEverywhere.md"},"CCEverywhere")," object."),(0,o.mdx)("p",null,"As of today, it exposes:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"editor"),": Contains APIs for creating and editing in an embedded full editor"),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"quickAction"),": Contains APIs for launching quick actions"),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"module"),": Contains APIs for launching modules (Generate Image, edit image)")),(0,o.mdx)("h3",{id:"initialize-the-sdk"},"Initialize the SDK"),(0,o.mdx)("p",null,"The asynchronous ",(0,o.mdx)("inlineCode",{parentName:"p"},"initialize()")," method takes ",(0,o.mdx)("a",{parentName:"p",href:"./shared/src/types/HostInfo.types/interfaces/HostInfoSpecifiedBase.md"},"HostInfo")," and an optional ",(0,o.mdx)("a",{parentName:"p",href:"#configparams"},"ConfigParams"),", and returns a Promise with a ",(0,o.mdx)("a",{parentName:"p",href:"./sdk/src/3p/CCEverywhere/classes/CCEverywhere.md"},"CCEverywhere")," object."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ts"},"initialize: (\n    hostInfo:HostInfoSpecifiedBase, \n    configParams?:ConfigParamsBase, \n    authOption?:AuthOption) => Promise<CCEverywhere>;\n\n")),(0,o.mdx)(s,{variant:"info",slots:"text1",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"The SDK should be initialized only once on each page."),(0,o.mdx)("h3",{id:"example"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ts"},"(async () => {\n  let hostInfo = { /* HostInfo */\n    clientId: CLIENT_ID,\n    appName: APP_NAME, \n    appVersion: { major: 1, minor: 0 }, \n    platformCategory: 'web',\n  }\n\n  const configParams = {\n    loginMode: 'delayed'\n  }\n\n  const ccEverywhere = await window.CCEverywhere.initialize(\n    hostInfo, configParams\n  );\n})();\n")),(0,o.mdx)("p",null,"Use the left sidebar to navigate through the different components and APIs available in the SDK."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-v-4-index-md-dc0f5005efe01cdbaeba.js.map