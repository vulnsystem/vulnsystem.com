(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{497:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var o=n(4),i=n(10),a=(n(0),n(706)),r={id:"app-extensions",title:"App Extensions"},s={unversionedId:"app-extensions",id:"version-0.64/app-extensions",isDocsHomePage:!1,title:"App Extensions",description:"App extensions let you provide custom functionality and content outside of your main app. There are different types of app extensions on iOS, and they are all covered in the App Extension Programming Guide. In this guide, we'll briefly cover how you may take advantage of app extensions on iOS.",source:"@site/versioned_docs/version-0.64/app-extensions.md",slug:"/app-extensions",permalink:"/docs/app-extensions",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/app-extensions.md",version:"0.64",lastUpdatedAt:1620877669,formattedLastUpdatedAt:"5/13/2021",sidebar:"version-0.64/docs",previous:{title:"Communication between native and React Native",permalink:"/docs/communication-ios"},next:{title:"Publishing to Apple App Store",permalink:"/docs/publishing-to-app-store"}},p=[{value:"Memory use in extensions",id:"memory-use-in-extensions",children:[{value:"Today widget",id:"today-widget",children:[]},{value:"Other app extensions",id:"other-app-extensions",children:[]}]}],l={toc:p};function c(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"App extensions let you provide custom functionality and content outside of your main app. There are different types of app extensions on iOS, and they are all covered in the ",Object(a.b)("a",{parentName:"p",href:"https://developer.apple.com/library/content/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214-CH20-SW1"},"App Extension Programming Guide"),". In this guide, we'll briefly cover how you may take advantage of app extensions on iOS."),Object(a.b)("h2",{id:"memory-use-in-extensions"},"Memory use in extensions"),Object(a.b)("p",null,"As these extensions are loaded outside of the regular app sandbox, it's highly likely that several of these app extensions will be loaded simultaneously. As you might expect, these extensions have small memory usage limits. Keep these in mind when developing your app extensions. It's always highly recommended to test your application on an actual device, and more so when developing app extensions: too frequently, developers find that their extension works fine in the iOS Simulator, only to get user reports that their extension is not loading on actual devices."),Object(a.b)("p",null,"We highly recommend that you watch Conrad Kramer's talk on ",Object(a.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=GqXMqn6MXrM"},"Memory Use in Extensions")," to learn more about this topic."),Object(a.b)("h3",{id:"today-widget"},"Today widget"),Object(a.b)("p",null,"The memory limit of a Today widget is 16 MB. As it happens, Today widget implementations using React Native may work unreliably because the memory usage tends to be too high. You can tell if your Today widget is exceeding the memory limit if it yields the message 'Unable to Load':"),Object(a.b)("p",null,Object(a.b)("img",{src:n(757).default})),Object(a.b)("p",null,"Always make sure to test your app extensions in a real device, but be aware that this may not be sufficient, especially when dealing with Today widgets. Debug-configured builds are more likely to exceed the memory limits, while release-configured builds don't fail right away. We highly recommend that you use ",Object(a.b)("a",{parentName:"p",href:"https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/index.html"},"Xcode's Instruments")," to analyze your real world memory usage, as it's very likely that your release-configured build is very close to the 16 MB limit. In situations like these, you can quickly go over the 16 MB limit by performing common operations, such as fetching data from an API."),Object(a.b)("p",null,"To experiment with the limits of React Native Today widget implementations, try extending the example project in ",Object(a.b)("a",{parentName:"p",href:"https://github.com/matejkriz/react-native-today-widget/"},"react-native-today-widget"),"."),Object(a.b)("h3",{id:"other-app-extensions"},"Other app extensions"),Object(a.b)("p",null,"Other types of app extensions have greater memory limits than the Today widget. For instance, Custom Keyboard extensions are limited to 48 MB, and Share extensions are limited to 120 MB. Implementing such app extensions with React Native is more viable. One proof of concept example is ",Object(a.b)("a",{parentName:"p",href:"https://github.com/andrewsardone/react-native-ios-share-extension"},"react-native-ios-share-extension"),"."))}c.isMDXComponent=!0},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),c=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,y=u["".concat(r,".").concat(m)]||u[m]||d[m]||a;return n?i.a.createElement(y,s(s({ref:t},l),{},{components:n})):i.a.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},757:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/TodayWidgetUnableToLoad-b931f8be6eeb72c037338b9ab9766477.jpg"}}]);