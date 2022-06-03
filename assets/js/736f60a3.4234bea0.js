"use strict";(self.webpackChunkdocumentarius=self.webpackChunkdocumentarius||[]).push([[6596],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3652:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Token",p={unversionedId:"AdminPanel/ERC20/token",id:"AdminPanel/ERC20/token",title:"Token",description:"EC20 token is a company shares representation. It is used for De(centralized) Fi(nance)",source:"@site/docs/AdminPanel/ERC20/token.md",sourceDirName:"AdminPanel/ERC20",slug:"/AdminPanel/ERC20/token",permalink:"/docs/AdminPanel/ERC20/token",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"ERC20",permalink:"/docs/category/erc20"},next:{title:"Vesting",permalink:"/docs/AdminPanel/ERC20/vesting"}},c={},u=[{value:"Deployment",id:"deployment",level:2},{value:"Deployment parameters",id:"deployment-parameters",level:3},{value:"Configuration options",id:"configuration-options",level:3},{value:"Templates",id:"templates",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"token"},"Token"),(0,o.kt)("p",null,"EC20 token is a company shares representation. It is used for De(centralized) Fi(nance)"),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"ERC20 token contracts are being deployed using ",(0,o.kt)("a",{parentName:"p",href:"/docs/AdminPanel/ContractManager"},"Contract Manager")),(0,o.kt)("h3",{id:"deployment-parameters"},"Deployment parameters"),(0,o.kt)("p",null,"This information is passed directly to blockchain"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name")," - Token name in human-readable format"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"symbol")," - Token ticket to be displayed on exchanges"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"cap")," - Token cap limits amount of emitted tokens, to remove limits use MaxUint256")),(0,o.kt)("h3",{id:"configuration-options"},"Configuration options"),(0,o.kt)("p",null,"While deployment options are used as default values there are still things to configure "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"title")," - This is how token is displayed on site, mostly in autocomplete fields for ather actions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"description")," - General description in markdown format. Does not make a lot of sense and present mostly for compatibility with other tokens"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"token status")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"NEW")," - default status after token deployment, should be manually changed to ",(0,o.kt)("strong",{parentName:"li"},"ACTIVE")," by admin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ACTIVE")," - active token are displayed on site and available for selection for other actions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"INACTIVE")," - inactive tokens are not available for selection and exists for references")))),(0,o.kt)("h3",{id:"templates"},"Templates"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SIMPLE")," - Simple template includes all basic functions like mint, burn, transfer and snapshot"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"BLACKLIST")," - Includes everything from SIMPLE template plus blacklist to ban specific addresses")))}d.isMDXComponent=!0}}]);