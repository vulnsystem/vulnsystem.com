(window.webpackJsonp=window.webpackJsonp||[]).push([[568],{654:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(4),a=r(10),o=(r(0),r(706)),c={id:"usecolorscheme",title:"useColorScheme"},i={unversionedId:"usecolorscheme",id:"version-0.64/usecolorscheme",isDocsHomePage:!1,title:"useColorScheme",description:"`jsx",source:"@site/versioned_docs/version-0.64/usecolorscheme.md",slug:"/usecolorscheme",permalink:"/docs/usecolorscheme",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/usecolorscheme.md",version:"0.64",lastUpdatedAt:1620877669,formattedLastUpdatedAt:"5/13/2021",sidebar:"version-0.64/api",previous:{title:"Vibration",permalink:"/docs/vibration"},next:{title:"useWindowDimensions",permalink:"/docs/usewindowdimensions"}},s=[{value:"Supported color schemes",id:"supported-color-schemes",children:[]},{value:"Example",id:"example",children:[]}],l={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import { useColorScheme } from 'react-native';\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"useColorScheme")," React hook provides and subscribes to color scheme updates from the ",Object(o.b)("a",{parentName:"p",href:"appearance"},Object(o.b)("inlineCode",{parentName:"a"},"Appearance"))," module. The return value indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle)."),Object(o.b)("h3",{id:"supported-color-schemes"},"Supported color schemes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"light"'),": The user prefers a light color theme."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"dark"'),": The user prefers a dark color theme."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"null"),": The user has not indicated a preferred color theme.")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20StyleSheet%2C%20useColorScheme%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20colorScheme%20%3D%20useColorScheme()%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3EuseColorScheme()%3A%20%7BcolorScheme%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("p",null,"You can find a complete example that demonstrates the use of this hook alongside a React context to add support for light and dark themes to your application in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/Appearance/AppearanceExample.js"},Object(o.b)("inlineCode",{parentName:"a"},"AppearanceExample.js")),"."))}p.isMDXComponent=!0},706:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?a.a.createElement(b,i(i({ref:t},l),{},{components:r})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);