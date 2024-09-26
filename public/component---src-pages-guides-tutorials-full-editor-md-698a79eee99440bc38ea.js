"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[4974],{87232:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return h}});var n=a(58168),i=a(80045),o=(a(88763),a(15680)),r=a(83407);const s=["components"],d={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",t)},p=l("InlineAlert"),m=l("CodeBlock"),c={_frontmatter:d},u=r.A;function h(e){let{components:t}=e,a=(0,i.A)(e,s);return(0,o.mdx)(u,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"embed-sdk-full-editor-tutorial"},"Embed SDK Full Editor tutorial"),(0,o.mdx)("p",null,"Learn how to integrate the Adobe Express Embed SDK into your web applications."),(0,o.mdx)("h2",{id:"introduction"},"Introduction"),(0,o.mdx)("p",null,"Hi, developers! In this tutorial, we'll create an Embed SDK integration that leverages the Adobe Express full editor experience. Users will be able to create, edit, and export documents directly from your web application."),(0,o.mdx)("p",null,"We'll look at a few ",(0,o.mdx)("strong",{parentName:"p"},"configuration parameters"),", as well as the way to ",(0,o.mdx)("strong",{parentName:"p"},"handle events"),", ",(0,o.mdx)("strong",{parentName:"p"},"callbacks")," and ",(0,o.mdx)("strong",{parentName:"p"},"manage files")," between your application and Adobe Express. Let's get started!"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/static/69682daaf02e03effee240ee32956ea2/5530d/full-editor_cover.webp 320w","/static/69682daaf02e03effee240ee32956ea2/0c8fb/full-editor_cover.webp 640w","/static/69682daaf02e03effee240ee32956ea2/94b1e/full-editor_cover.webp 1280w","/static/69682daaf02e03effee240ee32956ea2/0b34d/full-editor_cover.webp 1920w","/static/69682daaf02e03effee240ee32956ea2/f3963/full-editor_cover.webp 2500w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/static/69682daaf02e03effee240ee32956ea2/dd4a7/full-editor_cover.png 320w","/static/69682daaf02e03effee240ee32956ea2/0f09e/full-editor_cover.png 640w","/static/69682daaf02e03effee240ee32956ea2/bbbf7/full-editor_cover.png 1280w","/static/69682daaf02e03effee240ee32956ea2/ac7a9/full-editor_cover.png 1920w","/static/69682daaf02e03effee240ee32956ea2/6482f/full-editor_cover.png 2500w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/static/69682daaf02e03effee240ee32956ea2/bbbf7/full-editor_cover.png",alt:"Full Editor",title:"Full Editor",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.mdx)("p",null,"Before we begin, make sure you have the following:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"An ",(0,o.mdx)("strong",{parentName:"li"},"Adobe account"),": use your existing Adobe ID or create one for free."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Embed SDK Credentials")," from the Adobe Developer Console; see the ",(0,o.mdx)("a",{parentName:"li",href:"../quickstart/"},"Quickstart Guide")," for more information."),(0,o.mdx)("li",{parentName:"ul"},"Familiarity with ",(0,o.mdx)("strong",{parentName:"li"},"HTML, CSS, JavaScript"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Node.js")," is installed on your development machine.")),(0,o.mdx)("h2",{id:"running-the-sample-project"},"Running the sample project"),(0,o.mdx)("p",null,"Let's have a look at what we're going to build. First off, clone the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/embed-sdk-samples/tree/main/code-samples/tutorials/embed-sdk-full-editor"},"embed-sdk-full-editor-tutorial")," sample from GitHub and navigate to the project directory. Locate the ",(0,o.mdx)("inlineCode",{parentName:"p"},"src/.env")," file and replace the placeholder string in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"VITE_API_KEY")," with your Embed SDK API Key:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},'VITE_API_KEY="your-api-key-here!"\n')),(0,o.mdx)(p,{variant:"info",slots:"text1",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"📖 Instructions on how to obtain an API Key can be found on the ",(0,o.mdx)("a",{parentName:"p",href:"../quickstart/"},"Quickstart Guide"),"."),(0,o.mdx)("p",null,"Now, you can install the dependencies and run the sample with the following two simple commands:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm run start\n")),(0,o.mdx)("p",null,"The web application will be served at ",(0,o.mdx)("inlineCode",{parentName:"p"},"localhost:5555")," on a secure HTTPS connection—which is always required for any Embed SDK integration. Open your browser and navigate to this address to see it in action."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/static/d6421df3a834e1c86b226569a5a61ef5/5530d/full-editor_start.webp 320w","/static/d6421df3a834e1c86b226569a5a61ef5/0c8fb/full-editor_start.webp 640w","/static/d6421df3a834e1c86b226569a5a61ef5/94b1e/full-editor_start.webp 1280w","/static/d6421df3a834e1c86b226569a5a61ef5/0b34d/full-editor_start.webp 1920w","/static/d6421df3a834e1c86b226569a5a61ef5/f3963/full-editor_start.webp 2500w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/static/d6421df3a834e1c86b226569a5a61ef5/dd4a7/full-editor_start.png 320w","/static/d6421df3a834e1c86b226569a5a61ef5/0f09e/full-editor_start.png 640w","/static/d6421df3a834e1c86b226569a5a61ef5/bbbf7/full-editor_start.png 1280w","/static/d6421df3a834e1c86b226569a5a61ef5/ac7a9/full-editor_start.png 1920w","/static/d6421df3a834e1c86b226569a5a61ef5/6482f/full-editor_start.png 2500w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/static/d6421df3a834e1c86b226569a5a61ef5/bbbf7/full-editor_start.png",alt:"Full Editor starting point",title:"Full Editor starting point",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"When clicking the ",(0,o.mdx)("strong",{parentName:"p"},"Create New")," button, the Adobe Express full editor will launch with a predefined document size; users have the entire set of tools available to create their designs. Once they're done, they can Download the document, or Save it as an Image."),(0,o.mdx)("p",null,"The sample project will handle the file transfer between Adobe Express and the web page hosting it, and the image will be displayed in lieu of the placeholder."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/static/581026f0ea4764d8060a3df31d56df61/5530d/full-editor_edit.webp 320w","/static/581026f0ea4764d8060a3df31d56df61/0c8fb/full-editor_edit.webp 640w","/static/581026f0ea4764d8060a3df31d56df61/94b1e/full-editor_edit.webp 1280w","/static/581026f0ea4764d8060a3df31d56df61/0b34d/full-editor_edit.webp 1920w","/static/581026f0ea4764d8060a3df31d56df61/f3963/full-editor_edit.webp 2500w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/static/581026f0ea4764d8060a3df31d56df61/dd4a7/full-editor_edit.png 320w","/static/581026f0ea4764d8060a3df31d56df61/0f09e/full-editor_edit.png 640w","/static/581026f0ea4764d8060a3df31d56df61/bbbf7/full-editor_edit.png 1280w","/static/581026f0ea4764d8060a3df31d56df61/ac7a9/full-editor_edit.png 1920w","/static/581026f0ea4764d8060a3df31d56df61/6482f/full-editor_edit.png 2500w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/static/581026f0ea4764d8060a3df31d56df61/bbbf7/full-editor_edit.png",alt:"Full Editor displayed image",title:"Full Editor displayed image",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("strong",{parentName:"p"},"Edit")," button (previously disabled) will open the Editor with the same document size and content as the one just created: the Project ID has been stored as part of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"onPublish")," callback, as we'll see in due course. Users can modify the design and download or save it again."),(0,o.mdx)(p,{variant:"error",slots:"header, text1",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,'Error: "Adobe Express is not available"'),(0,o.mdx)("p",null,"In case you get a popup when trying to launch the Adobe Express integration with the following message: ",(0,o.mdx)("em",{parentName:"p"},'"You do not have access to this service. Contact your IT administrator to gain access"'),", please check to have entered the correct API Key in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"src/.env")," file as described ",(0,o.mdx)("a",{parentName:"p",href:"#running-the-sample-project"},"here"),"."),(0,o.mdx)("h2",{id:"coding-the-integration"},"Coding the Integration"),(0,o.mdx)("p",null,"You can just read the existing code in the sample, but it's always best to ",(0,o.mdx)("strong",{parentName:"p"},"learn by doing!")," We suggest following along and typing the code in—even small mistakes can lead to important discoveries."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/embed-sdk-samples/tree/main/code-samples/tutorials/embed-sdk-full-editor"},"sample project")," is a simple web application built with ",(0,o.mdx)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),", which takes care of the entire HTTPS setup and hot reloading.",(0,o.mdx)("sup",{parentName:"p",id:"fnref-1"},(0,o.mdx)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," As customary, we'll work in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"src")," folder with the simplest setup possible: HTML, JS, and CSS, one file each."),(0,o.mdx)("h3",{id:"1-importing-and-initializing"},"1. Importing and Initializing"),(0,o.mdx)("p",null,"The HTML content is not overly important; let's focus on the JavaScript side of things first. Open the project in your code editor of choice. In ",(0,o.mdx)("inlineCode",{parentName:"p"},"main.js"),", remove everything below the Spectrum ",(0,o.mdx)("inlineCode",{parentName:"p"},"import")," statements—we'll rebuild it from scratch."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'import "./style.css";\n\n// Importing theme and typography styles from Spectrum Web Components\nimport "@spectrum-web-components/styles/typography.css";\nimport "@spectrum-web-components/theme/express/theme-light.js";\nimport "@spectrum-web-components/theme/express/scale-medium.js";\nimport "@spectrum-web-components/theme/sp-theme.js";\n\n// Importing Spectrum Web Components\nimport "@spectrum-web-components/button/sp-button.js";\nimport "@spectrum-web-components/button-group/sp-button-group.js";\nimport "@spectrum-web-components/divider/sp-divider.js";\n')),(0,o.mdx)("p",null,"The imports above allow us to style our web application with ",(0,o.mdx)("a",{parentName:"p",href:"https://opensource.adobe.com/spectrum-web-components/index.html"},"Spectrum Web Components")," and the ",(0,o.mdx)("a",{parentName:"p",href:"https://spectrum.adobe.com/page/theming/"},"Adobe Express theme"),". Let's begin by importing the Embed SDK:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'// Importing the Adobe Express Embed SDK\nawait import("https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js");\nconsole.log("CCEverywhere loaded", window.CCEverywhere);\n')),(0,o.mdx)(p,{variant:"info",slots:"text1",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"There are several ways to import ",(0,o.mdx)("inlineCode",{parentName:"p"},"CCEverywhere.js"),": for more information, please refer to the ",(0,o.mdx)("a",{parentName:"p",href:"../quickstart/"},"Quickstart Guide"),"."),(0,o.mdx)("p",null,"When the Embed SDK is imported, a ",(0,o.mdx)("inlineCode",{parentName:"p"},"CCEverywhere")," object is globally available and must be ",(0,o.mdx)("strong",{parentName:"p"},"initialized"),". There are two sets of parameters that you can pass as option objects:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Host Information"),": containing the API key, Application name, etc."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Configuration"),": optional settings, like locale, delayed sign-in, etc.")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'// 👀 Required parameters for initializing the Embed SDK\nconst hostInfo = {\n  clientId: import.meta.env.VITE_API_KEY,\n  appName: "Embed SDK Sample",\n};\n\n// Optional parameters\nconst configParams = {\n  // Users can log in only when exporting/saving the document\n  loginMode: "delayed",\n};\n\n// Initializing the Adobe Express Embed SDK\nconst { editor } = await window.CCEverywhere.initialize(\n  hostInfo,\n  configParams\n);\n')),(0,o.mdx)("p",null,"We're using the asynchronous ",(0,o.mdx)("a",{parentName:"p",href:"../../reference/initialize/"},(0,o.mdx)("inlineCode",{parentName:"a"},"initialize()"))," method, that returns a promise resolving to an object with three properties. Here, we want to implement the full editor; hence, among them, we destructure just the ",(0,o.mdx)("a",{parentName:"p",href:"../../reference/CCEverywhere/editor/"},(0,o.mdx)("inlineCode",{parentName:"a"},"editor")),"."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"../../reference/initialize/index.md#hostinfo"},(0,o.mdx)("inlineCode",{parentName:"a"},"hostInfo"))," object is required: the ",(0,o.mdx)("inlineCode",{parentName:"p"},"clientId")," contains your API Key (here, retrieved by Vite from the ",(0,o.mdx)("inlineCode",{parentName:"p"},".env")," file) and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"appName"),"."),(0,o.mdx)(p,{variant:"warning",slots:"text1",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"appName")," must match the name of your application, and it will be displayed in the Adobe Express UI as a folder where users can store their documents."),(0,o.mdx)("p",null,"All ",(0,o.mdx)("a",{parentName:"p",href:"../../reference/initialize/index.md#configparams"},(0,o.mdx)("inlineCode",{parentName:"a"},"configParams"))," are optional, instead: here, ",(0,o.mdx)("inlineCode",{parentName:"p"},"loginMode")," tells Adobe Express to delay the login until artworks are exported."),(0,o.mdx)("h3",{id:"2-creating-the-editor"},"2. Creating the Editor"),(0,o.mdx)("p",null,"Excellent! We have this ",(0,o.mdx)("inlineCode",{parentName:"p"},"editor"),": now what? We'll use it to spawn a new Adobe Express instance via the ",(0,o.mdx)("a",{parentName:"p",href:"../../reference/CCEverywhere/editor/index.md#create"},(0,o.mdx)("inlineCode",{parentName:"a"},"editor.create()"))," method—which, in turn, accepts four option objects able to configure:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("a",{parentName:"li",href:"../../reference/CCEverywhere/editor/index.md#createdocconfig"},"Document")," that will be created (e.g., its size)."),(0,o.mdx)("li",{parentName:"ul"},"The Adobe Express ",(0,o.mdx)("a",{parentName:"li",href:"../../reference/CCEverywhere/editor/index.md#baseeditorappconfig"},"Application")," itself (e.g., the callbacks)."),(0,o.mdx)("li",{parentName:"ul"},"The allowed ",(0,o.mdx)("a",{parentName:"li",href:"../../reference/types/index.md#exportoptions"},"Export Options"),"."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("a",{parentName:"li",href:"../../reference/types/index.md#containerconfig"},"Container")," (modal dialog) of the Adobe Express application.")),(0,o.mdx)("p",null,"The links above point to the respective SDK Reference pages. They are all optional—our sample makes use of the first three of them:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'// Document\nconst docConfig = { canvasSize: "BusinessCard" };\n// Application\nconst appConfig = { \n  selectedCategory: "media", \n  callbacks: {\n    onCancel: () => {},\n    onPublish: (intent, publishParams) => { /* ... */ },\n    onError: (err) => { /* ... */ }\n};\n// Export Options\nconst exportConfig = [\n  {\n    id: "download",\n    label: "Download",\n    action: { target: "download" },\n    style: { uiType: "button" },\n  },\n  {\n    id: "save-modified-asset",\n    label: "Save image",\n    action: { target: "publish" },\n    style: { uiType: "button" },\n  },\n];\n')),(0,o.mdx)("p",null,"As you can see, we are:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Creating by default a document using the ",(0,o.mdx)("inlineCode",{parentName:"li"},'"BusinessCard"')," template."),(0,o.mdx)("li",{parentName:"ul"},"Launching Adobe Express with the Media panel open on the left."),(0,o.mdx)("li",{parentName:"ul"},"Setting a series of Callbacks that will fire when the user Cancels, Saves (that would be ",(0,o.mdx)("inlineCode",{parentName:"li"},"onPublish"),"), or when something goes wrong."),(0,o.mdx)("li",{parentName:"ul"},"Defining two ways for users to export content: download the file locally and save it in the user's Adobe Express folder and pass it back to the web application.")),(0,o.mdx)("p",null,"On the ",(0,o.mdx)("strong",{parentName:"p"},"Create New")," button click, Adobe Express is launched:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'document.getElementById("createDesign").onclick = async () => {\n  editor.create(docConfig, appConfig, exportConfig);\n};\n')),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/static/e6f485cea74cb64eb9f3fcc5d0df5f4e/5530d/full-editor_launch.webp 320w","/static/e6f485cea74cb64eb9f3fcc5d0df5f4e/0c8fb/full-editor_launch.webp 640w","/static/e6f485cea74cb64eb9f3fcc5d0df5f4e/94b1e/full-editor_launch.webp 1280w","/static/e6f485cea74cb64eb9f3fcc5d0df5f4e/0b34d/full-editor_launch.webp 1920w","/static/e6f485cea74cb64eb9f3fcc5d0df5f4e/f3963/full-editor_launch.webp 2500w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/static/e6f485cea74cb64eb9f3fcc5d0df5f4e/dd4a7/full-editor_launch.png 320w","/static/e6f485cea74cb64eb9f3fcc5d0df5f4e/0f09e/full-editor_launch.png 640w","/static/e6f485cea74cb64eb9f3fcc5d0df5f4e/bbbf7/full-editor_launch.png 1280w","/static/e6f485cea74cb64eb9f3fcc5d0df5f4e/ac7a9/full-editor_launch.png 1920w","/static/e6f485cea74cb64eb9f3fcc5d0df5f4e/6482f/full-editor_launch.png 2500w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/static/e6f485cea74cb64eb9f3fcc5d0df5f4e/bbbf7/full-editor_launch.png",alt:"Launching the Full Editor",title:"Launching the Full Editor",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)(p,{variant:"info",slots:"text1",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Please don't be scared by the red warning toast at the bottom of the screen: it is just a reminder that the Embed SDK is providing access via your credentials, but you must ",(0,o.mdx)("strong",{parentName:"p"},"submit the integration and request approval")," from Adobe before you can go live. Please check the ",(0,o.mdx)("a",{parentName:"p",href:"../review/"},"Submission and Review")," section to learn more."),(0,o.mdx)("p",null,"As you can see, integrating the full editor doesn't take much time! You can customize it to a great extent; even using all the default options, the result is brilliant."),(0,o.mdx)("h3",{id:"3-managing-images"},"3. Managing images"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"exportConfig")," array we've just written adds a ",(0,o.mdx)("strong",{parentName:"p"},"Save image")," button to Adobe Express, allowing users to store their image; we'd like our web application to capture and display it on the HTML page."),(0,o.mdx)("p",null,"We need to write a simple function in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"callbacks")," to implement this feature, precisely the ",(0,o.mdx)("a",{parentName:"p",href:"../../reference/types/index.md#callbacks"},(0,o.mdx)("inlineCode",{parentName:"a"},"onPublish")),". It is triggered when the user clicks the ",(0,o.mdx)("strong",{parentName:"p"},"Save image")," button, and it receives a ",(0,o.mdx)("a",{parentName:"p",href:"../../reference/types/index.md#publishparams"},(0,o.mdx)("inlineCode",{parentName:"a"},"PublishParams"))," argument, with three crucial properties:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"documentId"),": a unique identifier for the asset that has been created or modified."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"exportButtonId"),": the identifier of the export button that has been clicked."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"asset"),": an ",(0,o.mdx)("a",{parentName:"li",href:"../../reference/types/index.md#outputasset"},(0,o.mdx)("inlineCode",{parentName:"a"},"OutputAsset"))," object, with several interesting properties like ",(0,o.mdx)("inlineCode",{parentName:"li"},"data"),"—a Base64 string representation of the saved image.")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"data")," property sounds promising! The plan is to have an ",(0,o.mdx)("inlineCode",{parentName:"p"},"<img>")," element (in this example, it starts as a placeholder), which ",(0,o.mdx)("inlineCode",{parentName:"p"},"src")," attribute will be filled with the Base64 string coming from Adobe Express."),(0,o.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JavaScript, HTML",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"mainjs"},"main.js"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'// Storing the image element\nvar expressImage = document.getElementById("savedImage");\n\n// Callbacks to be used when creating or editing a document\nconst callbacks = {\n  // ... other callbacks\n  onPublish: (intent, publishParams) => {                   // 👈\n    expressImage.src = publishParams.asset[0].data;         // 👈\n    console.log("Image data", publishParams.asset[0].data); // 👈\n  }\n};\n')),(0,o.mdx)("h4",{id:"indexhtml"},"index.html"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html"},'\x3c!-- ... rest of the page --\x3e\n<img id="savedImage" \n     src="https://placehold.co/300x300?text=Placeholder+Image&font=source-sans-pro"\n     alt="Your design will appear here." />\n\x3c!-- ... rest of the page --\x3e\n')),(0,o.mdx)("p",null,"Please note that ",(0,o.mdx)("inlineCode",{parentName:"p"},"asset")," is an array; we're getting just the first item here. If you open the Console, you'll see the Base64 string logged."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/static/17037afa8e3845527a44258492c04fda/5530d/full-editor_console-base64.webp 320w","/static/17037afa8e3845527a44258492c04fda/0c8fb/full-editor_console-base64.webp 640w","/static/17037afa8e3845527a44258492c04fda/94b1e/full-editor_console-base64.webp 1280w","/static/17037afa8e3845527a44258492c04fda/0b34d/full-editor_console-base64.webp 1920w","/static/17037afa8e3845527a44258492c04fda/f3963/full-editor_console-base64.webp 2500w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/static/17037afa8e3845527a44258492c04fda/dd4a7/full-editor_console-base64.png 320w","/static/17037afa8e3845527a44258492c04fda/0f09e/full-editor_console-base64.png 640w","/static/17037afa8e3845527a44258492c04fda/bbbf7/full-editor_console-base64.png 1280w","/static/17037afa8e3845527a44258492c04fda/ac7a9/full-editor_console-base64.png 1920w","/static/17037afa8e3845527a44258492c04fda/6482f/full-editor_console-base64.png 2500w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/static/17037afa8e3845527a44258492c04fda/bbbf7/full-editor_console-base64.png",alt:"Logging Base64 data",title:"Logging Base64 data",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h3",{id:"4-editing-projects"},"4. Editing projects"),(0,o.mdx)("p",null,"The last step is implementing the ",(0,o.mdx)("strong",{parentName:"p"},"Edit")," button feature, which should launch Adobe Express and open the project that was saved before.  As we've seen ",(0,o.mdx)("a",{parentName:"p",href:"#managing-images"},"earlier"),", when a document is saved, we receive a ",(0,o.mdx)("a",{parentName:"p",href:"../../reference/types/index.md#publishparams"},(0,o.mdx)("inlineCode",{parentName:"a"},"PublishParams"))," that contains ",(0,o.mdx)("inlineCode",{parentName:"p"},"documentId"),". We can store it for reference and use in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"docConfig")," option object to open it again:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'// Will hold the project ID when a document is saved\nvar existingProjectId = null; // 👈\n\n// Callbacks to be used when creating or editing a document\nconst callbacks = {\n  // ... other callbacks\n  onPublish: (intent, publishParams) => {\n    existingProjectId = publishParams.projectId;  // 👈 \n    console.log("Project ID", existingProjectId); // 👈\n    expressImage.src = publishParams.asset[0].data;\n    console.log("Image data", publishParams.asset[0].data);\n  }\n};\n\n// Click handler for the Edit Design button\ndocument.getElementById("editBtn").onclick = async () => {\n  // Opening the existing project by ID\n  let docConfig = { documentId: existingProjectId };\n  // ...\n  editor.edit(docConfig, appConfig, exportConfig);\n};\n')),(0,o.mdx)("p",null,"Above, we're using ",(0,o.mdx)("inlineCode",{parentName:"p"},"existingProjectId")," to hold the project reference, collected in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"onPublish")," callback every time the document is saved. Later, in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"editBtn")," click handler, we're creating a new ",(0,o.mdx)("inlineCode",{parentName:"p"},"docConfig")," object passing the ID in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"documentId")," property. This tells Adobe Express to look for an existing project and open it right away."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"25.937500000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/static/a5f3558dfb0828531c3a9823a418b159/5530d/full-editor_console-project-id.webp 320w","/static/a5f3558dfb0828531c3a9823a418b159/0c8fb/full-editor_console-project-id.webp 640w","/static/a5f3558dfb0828531c3a9823a418b159/94b1e/full-editor_console-project-id.webp 1280w","/static/a5f3558dfb0828531c3a9823a418b159/0b34d/full-editor_console-project-id.webp 1920w","/static/a5f3558dfb0828531c3a9823a418b159/f3963/full-editor_console-project-id.webp 2500w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/static/a5f3558dfb0828531c3a9823a418b159/dd4a7/full-editor_console-project-id.png 320w","/static/a5f3558dfb0828531c3a9823a418b159/0f09e/full-editor_console-project-id.png 640w","/static/a5f3558dfb0828531c3a9823a418b159/bbbf7/full-editor_console-project-id.png 1280w","/static/a5f3558dfb0828531c3a9823a418b159/ac7a9/full-editor_console-project-id.png 1920w","/static/a5f3558dfb0828531c3a9823a418b159/6482f/full-editor_console-project-id.png 2500w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/static/a5f3558dfb0828531c3a9823a418b159/bbbf7/full-editor_console-project-id.png",alt:"Logging the Project ID",title:"Logging the Project ID",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"final-project"},"Final project"),(0,o.mdx)("p",null,"We have all the required bits in place, but some simple refactoring is needed to keep the code clean."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"appConfig")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"exportConfig"),"  option objects are stored in constants, as they're shared in both the ",(0,o.mdx)("strong",{parentName:"li"},"Create new")," and ",(0,o.mdx)("strong",{parentName:"li"},"Edit")," buttons."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"callbacks")," follow suit; we've added a simple ",(0,o.mdx)("inlineCode",{parentName:"li"},"onError")," that logs a message, and now ",(0,o.mdx)("inlineCode",{parentName:"li"},"onPublish")," also enables the ",(0,o.mdx)("strong",{parentName:"li"},"Edit")," button—that starts disabled.")),(0,o.mdx)("p",null,"You can check the entire ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/embed-sdk-samples/tree/main/code-samples/tutorials/embed-sdk-full-editor"},(0,o.mdx)("inlineCode",{parentName:"a"},"embed-sdk-full-editor-tutorial"))," project code as part of the dedicated ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/AdobeDocs/embed-sdk-samples"},(0,o.mdx)("inlineCode",{parentName:"a"},"embed-sdk-samples"))," repository. Find the most relevant files below for reference."),(0,o.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JavaScript, HTML",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"mainjs-1"},"main.js"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'import "./style.css";\n\n// Importing theme and typography styles from Spectrum Web Components\nimport "@spectrum-web-components/styles/typography.css";\nimport "@spectrum-web-components/theme/express/theme-light.js";\nimport "@spectrum-web-components/theme/express/scale-medium.js";\nimport "@spectrum-web-components/theme/sp-theme.js";\n\n// Importing Spectrum Web Components\nimport "@spectrum-web-components/button/sp-button.js";\nimport "@spectrum-web-components/button-group/sp-button-group.js";\nimport "@spectrum-web-components/divider/sp-divider.js";\n\n// Importing the Adobe Express Embed SDK\nawait import("https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js");\nconsole.log("CCEverywhere loaded", window.CCEverywhere);\n\n// Parameters for initializing the Adobe Express Embed SDK\nconst hostInfo = {\n  clientId: import.meta.env.VITE_API_KEY,\n  appName: "Embed SDK Sample",\n};\n\n// Prompts the user to log in only when exporting/saving the document\nconst configParams = {\n  loginMode: "delayed",\n};\n\n// Initializing the Adobe Express Embed SDK\nconst { editor } = await window.CCEverywhere.initialize(\n  hostInfo, configParams\n);\n\n// Will hold the project ID when a document is saved on Adobe Express\nvar existingProjectId = null;\nvar expressImage = document.getElementById("savedImage");\n\n// Callbacks to be used when creating or editing a document\nconst callbacks = {\n  onCancel: () => {},\n  onPublish: (intent, publishParams) => {\n    existingProjectId = publishParams.projectId;\n    console.log("Project ID", existingProjectId);\n    expressImage.src = publishParams.asset[0].data;\n    console.log("Image data", publishParams.asset[0].data);\n    // enable the editDesign button\n    document.getElementById("editBtn").disabled = false;\n  },\n  onError: (err) => {\n    console.error("Error!", err.toString());\n  },\n};\n\n// Configuration for the app, shared by both Create and Edit flows\nconst appConfig = { selectedCategory: "media", callbacks };\n\n// Configuration for the export options made available \n// to the user when creating or editing a document\nconst exportConfig = [\n  {\n    id: "download",\n    label: "Download",\n    action: { target: "download" },\n    style: { uiType: "button" },\n  },\n  {\n    id: "save-modified-asset",\n    label: "Save image",\n    action: { target: "publish" },\n    style: { uiType: "button" },\n  },\n];\n\n// Click handler for the Create Design button\ndocument.getElementById("createBtn").onclick = async () => {\n  // Presetting the canvas size\n  let docConfig = { canvasSize: "BusinessCard" };\n  // Using the global appConfig and exportConfig\n  editor.create(docConfig, appConfig, exportConfig);\n};\n\n// Click handler for the Edit Design button\ndocument.getElementById("editBtn").onclick = async () => {\n  // Opening the existing project by ID\n  let docConfig = { documentId: existingProjectId };\n  // Using the global appConfig and exportConfig\n  editor.edit(docConfig, appConfig, exportConfig);\n};\n')),(0,o.mdx)("h4",{id:"indexhtml-1"},"index.html"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html"},'<body>\n  <sp-theme scale="medium" color="light" system="express">\n    <div class="container">\n      <header>\n        <h1>Adobe Express Embed SDK</h1>\n        <sp-divider size="l"></sp-divider>\n        <h2>Full Editor Sample</h2>\n        <p>\n          The <b>Create New</b> button launches a blank \n          new project in a full editor instance. <br />\n          Once you have published/saved a project, use the\n          <b>Edit</b> button to resume editing the same project.\n        </p>\n      </header>\n\n      <main>\n        <img id="savedImage" \n        src="https://placehold.co/300x300?text=Placeholder+Image"\n          alt="Your design will appear here." />\n        <sp-button-group>\n          <sp-button id="createBtn">Create New</sp-button>\n          <sp-button id="editBtn" disabled>Edit</sp-button>\n        </sp-button-group>\n      </main>\n    </div>\n  </sp-theme>\n\n  <script type="module" src="./main.js"><\/script>\n\n</body>\n')),(0,o.mdx)("h2",{id:"next-steps"},"Next steps"),(0,o.mdx)("p",null,"Congratulations! You've implemented a ",(0,o.mdx)("strong",{parentName:"p"},"Full Editor integration")," with the Adobe Express Embed SDK. You've learned how to create, edit, and let users export documents, as well as how to manage images between Adobe Express and your web application. What's next for you?"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The Embed SDK offers a ",(0,o.mdx)("strong",{parentName:"li"},"wide range of features and customization options"),"; you can explore them in the ",(0,o.mdx)("a",{parentName:"li",href:"../../reference/"},"API Reference"),"."),(0,o.mdx)("li",{parentName:"ul"},"Visit the ",(0,o.mdx)("a",{parentName:"li",href:"../changelog/"},"changelog")," page to keep up with the ",(0,o.mdx)("strong",{parentName:"li"},"latest updates")," and improvements."),(0,o.mdx)("li",{parentName:"ul"},"If you're looking for ",(0,o.mdx)("strong",{parentName:"li"},"more tutorials"),", check out ",(0,o.mdx)("a",{parentName:"li",href:"../tutorials/"},"here"),"."),(0,o.mdx)("li",{parentName:"ul"},"Finally, if you get stuck or you just want to ",(0,o.mdx)("strong",{parentName:"li"},"share your experience"),", visit the ",(0,o.mdx)("a",{parentName:"li",href:"https://community.adobe.com/t5/adobe-express-embed-sdk/ct-p/ct-express-embed-sdk?page=1&sort=latest_replies&lang=all&tabid=all"},"Adobe Express Embed SDK Community Forum"),".")),(0,o.mdx)("div",{className:"footnotes"},(0,o.mdx)("hr",{parentName:"div"}),(0,o.mdx)("ol",{parentName:"div"},(0,o.mdx)("li",{parentName:"ol",id:"fn-1"},"A Webpack setup is entirely possible, but it requires manual (or semi-automated) steps to integrate the ",(0,o.mdx)("inlineCode",{parentName:"li"},"mkcert")," CLI and ensure proper HTTPS handling. We've chosen Vite to keep that out of the way and focus on the actual integration code.",(0,o.mdx)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"↩")))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-tutorials-full-editor-md-698a79eee99440bc38ea.js.map