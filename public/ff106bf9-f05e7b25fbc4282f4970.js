"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[1447],{72268:function(e,t,a){a.r(t),a.d(t,{getQueryString:function(){return _}});var n=a(88763),o=a(68154),r=a(94760),i=a(80243),f=a(84938),d=a.n(f),s=a(71532),c=a(72505),l=a.n(c),b=a(89745),p=(a(91930),a(91101)),m=a(70542),u=a(69858),h=a(39304),y=a(96083),w=a(58305),g=a(14662);const v=!(!{}.GATSBY_ALGOLIA_APPLICATION_ID||!{}.GATSBY_ALGOLIA_SEARCH_API_KEY),k={}.GATSBY_ALGOLIA_INDEX_ENV_PREFIX;let S=null;v?S=d()({}.GATSBY_ALGOLIA_APPLICATION_ID,{}.GATSBY_ALGOLIA_SEARCH_API_KEY):console.warn("AIO: Algolia config missing.");const A={openAPI:{src:null,block:null,frontMatter:"openAPISpec"},frame:{src:null,block:null,frontMatter:"frameSrc"}},I=e=>{e((e=>!e))},x=(e,t,n)=>{const o=A[e];o.has=null==t?void 0:t[o.frontMatter],void 0!==o.has&&o.src!==o.has&&(o.src=o.has),o.src&&!o.block&&(n(!0),"openAPI"===e?o.block=(0,i.Ay)((()=>Promise.all([a.e(5003),a.e(3851),a.e(1040),a.e(4223),a.e(7539)]).then(a.bind(a,51855)))):"frame"===e&&(o.block=(0,i.Ay)((()=>Promise.all([a.e(5003),a.e(4223),a.e(1188)]).then(a.bind(a,51188))))),o.block.load().then((()=>{n(!1)})))},P=(e,t)=>{const a=new URLSearchParams(window.location.search);a.set(e,t),window.history.replaceState({},"",`${window.location.pathname}?${a}`)},_=()=>new URLSearchParams(window.location.search).toString(),Y=()=>{const e=function(e,a){return void 0===a&&(a=""),t(e)?"http://localhost:8000":function(e){return e.indexOf("developer-stage")>=0}(e)?`https://developer-stage.adobe.com${a}`:`https://developer.adobe.com${a}`};function t(e){return e.indexOf("localhost")>=0}const a=t(window.location.host)?e(window.location.host):`${e(window.location.host,"/search-frame")}`,n=new URLSearchParams(window.location.search);return n&&n.toString().length>0?`${a}?${n.toString()}`:a};var L={name:"hr37al",styles:"grid-area:main"},E={name:"boasoc",styles:"min-height:100vh;background-color:var(--spectrum-global-color-gray-50)"},O={name:"1wwehzg",styles:"min-height:100vh;background-color:transparent"};t.default=e=>{let{children:t,pageContext:a,location:i}=e;const{0:f,1:d}=(0,n.useState)(null),{0:c,1:_}=(0,n.useState)(!0),{0:z,1:N}=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e="https://auth-stg1.services.adobe.com/imslib/imslib.js",t='{"client_id": "stage_adobe_io", "scope": "AdobeID,openid,unified_dev_portal,read_organizations,additional_info.projectedProductContext,additional_info.roles,gnav,read_pc.dma_bullseye,creative_sdk,adobeio_api,service_principals.read,service_principals.write,read_client_secret", "environment": "stg1"}';e&&t?(async()=>{try{await(a=`${e}`,new Promise(((e,t)=>{const n=document.createElement("script");n.src=a,n.onload=t=>e(t),n.onerror=e=>t(e),n.onabort=e=>t(e),document.head.appendChild(n)})));let n=JSON.parse(t);n.onReady=()=>{d(window.adobeIMS),_(!1)},window.adobeImsFactory.createIMSLib(n),window.adobeIMS.initialize()}catch(n){console.error("AIO: IMS error.")}finally{_(!1)}var a})():(console.warn("AIO: IMS config missing."),_(!1))}),[]);const C=(0,s.GR)("1814815295"),{allMdx:G,allSitePage:j,site:M,allGithub:$,allGithubContributors:R}=C,{siteMetadata:H,pathPrefix:B}=M,{home:T,versions:q,pages:F,subPages:U,docs:D}=H,{0:V,1:J}=(0,n.useState)(!1),{0:W,1:K}=(0,n.useState)(!1),{0:X,1:Q}=(0,n.useState)(!1),{0:Z,1:ee}=(0,n.useState)(!1),{0:te,1:ae}=(0,n.useState)(!1);(0,n.useEffect)((()=>{new URL(window.location).searchParams.get(b.kj.query)&&J(!0)}),[J]),(0,n.useEffect)((()=>{window.innerWidth>=1280&&(K(!1),ae(!1))}),[i]),(0,n.useEffect)((()=>{window.onpopstate=()=>{const e=new URL(window.location).searchParams;e.get(b.kj.query)?(e.get(b.kj.query),J(!0)):J(!1)}}),[]),i.pathname=(0,b.tU)(decodeURIComponent(i.pathname)),F.forEach((e=>{(0,b.iu)(e),e.menu&&e.menu.forEach((e=>{(0,b.iu)(e)}))})),q&&q.forEach((e=>{(0,b.iu)(e)})),(0,b.iu)(T),(0,b.iu)(D);const ne=e=>{(0,b.iu)(e),e.pages&&e.pages.forEach((e=>{ne(e)}))};U&&U.forEach((e=>{ne(e)}));const oe=(0,b.mc)(i.pathname),re=(0,b._Y)(F),ie=(0,b.Nk)(oe,U),fe=(0,b.yu)(oe,re,U);fe.length>0&&ae(!0);const de=null==a?void 0:a.frontmatter,se=(0,g.Ay)(),ce=(0,g.Ay)(),le="aio-Search-close";if(x("openAPI",de,Q),x("frame",de,Q),(0,n.useEffect)((()=>{v&&l().get("https://raw.githubusercontent.com/AdobeDocs/search-indices/main/product-index-map.json").then((e=>{const t=e.data;"string"==typeof t?N(JSON.parse(t)):"[object Array]"==Object.prototype.toString.call(t)&&N(t)})).catch((e=>{console.error(`AIO: Failed fetching search index.\n${e}`)})),window.innerWidth<=1280&&ae(!0),window.addEventListener("resize",(()=>{window.innerWidth<=1280&&ae(!0)}))}),[]),"/search-frame"===B)return(0,r.Y)(n.default.Fragment,null,(0,r.Y)(o.m,null,(0,r.Y)("noscript",null,`\n          <style>\n            #${se} {\n              grid-template-columns: 0 auto;\n            }\n            \n            #${ce} {\n              display: none !important;\n            }\n            \n            .gatsby-resp-image-image {\n              opacity: 1 !important;\n            }\n          </style>\n        `)),(0,r.Y)(r.mL,{styles:(0,r.AH)("@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff2'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff2'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('opentype');font-display:swap;font-style:italic;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff2'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:700;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff2'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:300;}@font-face{font-family:'adobe-clean-serif';src:url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff2'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:900;}html,body{margin:0;text-size-adjust:none;overscroll-behavior:auto contain;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:transparent;",V&&"overflow: hidden;",";}*[hidden]{display:none!important;}")}),(0,r.Y)("div",{dir:"ltr",className:"spectrum spectrum--medium spectrum--large spectrum--light","color-scheme":"light",css:O},v&&z&&(0,r.Y)(m.v,{algolia:S,indexAll:z,indexPrefix:k||"",showSearch:!0,setShowSearch:J,searchButtonId:le,isIFramed:!0})));let be="";const pe=function(e,t){void 0===e&&(e=0);const a=document.getElementById("searchIframe");if(a.contentWindow.postMessage(JSON.stringify({localPathName:window.location.pathname}),"*"),"/"!==window.location.pathname&&be!==window.location.pathname){if(e>30)return void console.warn("Loading Search iFrame timed out");window.setTimeout((()=>{pe(a,e+1,t)}),100)}if(!t){new URL(window.location).searchParams.get(b.kj.query)&&J(!0)}t=!0},me=()=>{const e=document.getElementById("searchIframe");let t;try{if(t=e.contentDocument,"complete"===t.readyState)return void(e.onload=()=>{pe()})}catch(a){window.setTimeout(me,100)}},ue=e=>{try{const t="string"==typeof e.data?JSON.parse(e.data):e.data;t.query?(P(b.kj.query,t.query),P(b.kj.keywords,t.keywords),P(b.kj.index,t.index)):t.received&&(be=t.received)}catch(t){console.error(t)}};return(0,n.useEffect)((()=>{window.addEventListener("message",ue),v&&ee(!0)}),[]),(0,n.useEffect)((()=>{me()}),[Z]),(0,r.Y)(n.default.Fragment,null,(0,r.Y)(o.m,null,(0,r.Y)("noscript",null,`\n          <style>\n            #${se} {\n              grid-template-columns: 0 auto;\n            }\n            \n            #${ce} {\n              display: none !important;\n            }\n            \n            .gatsby-resp-image-image {\n              opacity: 1 !important;\n            }\n          </style>\n        `)),(0,r.Y)(r.mL,{styles:(0,r.AH)("@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff2'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff2'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('opentype');font-display:swap;font-style:italic;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff2'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:700;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff2'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:300;}@font-face{font-family:'adobe-clean-serif';src:url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff2'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:900;}html,body{margin:0;text-size-adjust:none;overscroll-behavior:auto contain;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;",V&&"overflow: hidden;"," ",W&&"overflow: hidden;",";}*[hidden]{display:none!important;}")}),(0,r.Y)(p.Kq,{value:{ims:f,isLoadingIms:c,location:i,pageContext:a,hasSideNav:te,siteMetadata:H,pathPrefix:B,allSitePage:j,allMdx:G,allGithub:$,allGithubContributors:R}},(0,r.Y)(y.k,{title:null==de?void 0:de.title,description:null==de?void 0:de.description,keywords:null==de?void 0:de.keywords}),(0,r.Y)("div",{dir:"ltr",className:"spectrum spectrum--medium spectrum--large spectrum--light","color-scheme":"light",css:E},(0,r.Y)(n.default.Fragment,null,(0,r.Y)("div",{id:se,css:(0,r.AH)("display:grid;grid-template-areas:'header header' 'sidenav main';grid-template-rows:var(--spectrum-global-dimension-size-800);grid-template-columns:",te?`${b.CS} auto`:"0 auto",";@media screen and (max-width: ",b.fy,"){grid-template-columns:0 auto;}@media screen and (max-width: ",b.Vh,"){grid-template-rows:20px;}")},(0,r.Y)("div",{css:(0,r.AH)("grid-area:header;position:fixed;height:var(--spectrum-global-dimension-size-800);left:0;right:0;background-color:var(--spectrum-global-color-gray-50);z-index:2;@media screen and (max-width: ",b.Vh,"){height:var(--spectrum-global-dimension-size-600);}")},(0,r.Y)(h.Z,{hasIMS:true,ims:f,isLoadingIms:c,home:T,versions:q,pages:F,docs:D,location:i,hasSideNav:te,toggleSideNav:()=>{I(K)},hasSearch:v&&null!==z,showSearch:V,setShowSearch:J,searchButtonId:le})),v&&Z&&(0,r.Y)("iframe",{id:"searchIframe",src:Y(),tabIndex:"0",css:(0,r.AH)("position:fixed;top:var(--spectrum-global-dimension-size-800);left:0px;right:0px;bottom:0px;background-color:transparent;z-index:10;width:100%;height:100%;display:",V?"block":"none",";@media screen and (max-width: ",b.Vh,"){top:var(--spectrum-global-dimension-size-600);}")}),(0,r.Y)("div",{id:ce,hidden:!te,css:(0,r.AH)("grid-area:sidenav;position:fixed;z-index:1;width:",b.CS,";height:100%;background-color:var(--spectrum-global-color-gray-75);@media screen and (max-width: ",b.fy,"){transition:transform var(--spectrum-global-animation-duration-200) ease-in-out;transform:translateX(",W?"0":"-100%",");}@media screen and (max-width: ",b.Vh,"){width:95%;}")},(0,r.Y)(u.f,{mainNavPages:F,versions:q,location:i,selectedPages:ie,selectedSubPages:fe,setShowSideNav:K})),(0,r.Y)("div",{css:L},(0,r.Y)("main",{hidden:!A.openAPI.has},A.openAPI.src&&A.openAPI.block&&(0,n.createElement)(A.openAPI.block,{src:A.openAPI.src})),(0,r.Y)("main",{hidden:!A.frame.has},A.frame.src&&A.frame.block&&(0,n.createElement)(A.frame.block,{src:A.frame.src,height:null==de?void 0:de.frameHeight,location:i})),!A.openAPI.has&&!A.frame.has&&t)),(0,r.Y)("div",{css:(0,r.AH)("position:fixed;top:0;left:0;right:0;bottom:0;display:",X?"grid":"none",";place-items:center center;")},(0,r.Y)(w.a,{size:"L"})),te&&(0,r.Y)("div",{role:"presentation",css:(0,r.AH)("display:none;@media screen and (max-width: ",b.fy,"){display:block;transition:opacity 160ms ease-in;background-color:rgba(0, 0, 0, 0.4);pointer-events:none;opacity:0;position:fixed;top:0;left:0;height:100%;width:100%;",W&&"\n                    pointer-events: auto;\n                    opacity: 1;\n                  ",";}"),onClick:()=>{I(K)}})))))}}}]);
//# sourceMappingURL=ff106bf9-f05e7b25fbc4282f4970.js.map