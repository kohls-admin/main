"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},69568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:1},i="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Kohl's Admin is currently in development. Everything in these docs is subject to change.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/kohls-admin/main/edit/master/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Installation",permalink:"/docs/getting-started/installation"}},l={},u=[{value:"What Is Kohl&#39;s Admin?",id:"what-is-kohls-admin",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Documentation Overview",id:"documentation-overview",level:2}],c={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Kohl's Admin is currently in development. Everything in these docs is subject to change.")),(0,o.kt)("h2",{id:"what-is-kohls-admin"},"What Is Kohl's Admin?"),(0,o.kt)("p",null,"Welcome to the Kohl's Admin documentation."),(0,o.kt)("p",null,"Kohl's Admin (KA) is a versatile administrative tool designed for Roblox game developers. It provides a suite of commands and features that help you manage your game more efficiently. Whether you're moderating player behavior, testing game mechanics, or configuring server settings, Kohl's Admin offers a robust set of tools to enhance your development workflow."),(0,o.kt)("h2",{id:"key-features"},"Key Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Command Management"),": Execute a wide range of commands directly within your game."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Player Moderation"),": Manage player behavior with tools to kick, ban, or mute players."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Customizable Settings"),": Tailor the admin experience to fit the specific needs of your game."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Real-Time Control"),": Adjust game settings and manage players on the fly.")),(0,o.kt)("h2",{id:"documentation-overview"},"Documentation Overview"),(0,o.kt)("p",null,"This documentation is structured to help you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Set Up"),": Learn how to install and configure Kohl's Admin."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Use Features"),": Explore the various commands and features available in KA."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Troubleshoot"),": Find solutions to common issues and get support.")),(0,o.kt)("p",null,"We recommend starting with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/installation"},"Getting Started")," guide if you are new to Kohl's Admin. For more advanced topics, you can explore the other sections of this documentation."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We hope this documentation helps you get the most out of Kohl's Admin. If you have any questions or need further assistance, don't hesitate to reach out to the community or consult the ",(0,o.kt)("a",{parentName:"p",href:"/docs/support"},"Support")," section."))}d.isMDXComponent=!0}}]);