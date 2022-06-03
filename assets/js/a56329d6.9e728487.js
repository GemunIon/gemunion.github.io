"use strict";(self.webpackChunkdocumentarius=self.webpackChunkdocumentarius||[]).push([[4123],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2205:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},c="Installation",u={unversionedId:"installation",id:"installation",title:"Installation",description:"Welcome to GEMUNION framework monorepo",source:"@site/api/installation.md",sourceDirName:".",slug:"/installation",permalink:"/api/installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar"},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation-1",level:2}],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Welcome to ",(0,a.kt)("a",{parentName:"p",href:"https://www.gemunion.io/"},"GEMUNION")," framework monorepo"),(0,a.kt)("p",null,"This monorepo is powered by Lerna. You can read about what is monorepo and how erna works ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna"},"here")," "),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Project consists of 4 main sections"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CONTRACTS is a home of all solidity smart contracts"),(0,a.kt)("li",{parentName:"ul"},"PACKAGES contains FE localization and shared types"),(0,a.kt)("li",{parentName:"ul"},"SERVICES contains FE and BE code"),(0,a.kt)("li",{parentName:"ul"},"MICROSERVICES a bunch of utils for integration with other services")),(0,a.kt)("h2",{id:"installation-1"},"Installation"),(0,a.kt)("p",null,"There are a number of external services we need for data storage and communication between different parts of the system, to install and run thm execute"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose up\n")))}m.isMDXComponent=!0}}]);