(window.webpackJsonp=window.webpackJsonp||[]).push([[450],{542:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return b}));var i=a(4),n=a(10),r=(a(0),a(706)),o=a(710),l=a(711),s=a(712),c={id:"libraries",title:"Using Libraries",author:"Brent Vatne",authorURL:"https://twitter.com/notbrent",description:"This guide introduces React Native developers to finding, installing, and using third-party libraries in their apps."},u={unversionedId:"libraries",id:"version-0.64/libraries",isDocsHomePage:!1,title:"Using Libraries",description:"This guide introduces React Native developers to finding, installing, and using third-party libraries in their apps.",source:"@site/versioned_docs/version-0.64/libraries.md",slug:"/libraries",permalink:"/docs/libraries",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/libraries.md",version:"0.64",lastUpdatedAt:1620877669,formattedLastUpdatedAt:"5/13/2021",sidebar:"version-0.64/docs",previous:{title:"Testing",permalink:"/docs/testing-overview"},next:{title:"Using TypeScript",permalink:"/docs/typescript"}},p=[{value:"Selecting a Package Manager",id:"selecting-a-package-manager",children:[]},{value:"Installing a Library",id:"installing-a-library",children:[]},{value:"Linking Native Code on iOS",id:"linking-native-code-on-ios",children:[]},{value:"Linking Native Code on Android",id:"linking-native-code-on-android",children:[]},{value:"Finding Libraries",id:"finding-libraries",children:[]},{value:"Determining Library Compatibility",id:"determining-library-compatibility",children:[{value:"Does it work with React Native?",id:"does-it-work-with-react-native",children:[]},{value:"Does it work for the platforms that my app supports?",id:"does-it-work-for-the-platforms-that-my-app-supports",children:[]},{value:"Does it work with my app version of React Native?",id:"does-it-work-with-my-app-version-of-react-native",children:[]}]}],d={toc:p};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"React Native provides a set of built-in ",Object(r.b)("a",{parentName:"p",href:"./components-and-apis"},"Core Components and APIs")," ready to use in your app. You're not limited to the components and APIs bundled with React Native. React Native has a community of thousands of developers. If the Core Components and APIs don't have what you are looking for, you may be able to find and install a library from the community to add the functionality to your app."),Object(r.b)("h2",{id:"selecting-a-package-manager"},"Selecting a Package Manager"),Object(r.b)("p",null,"React Native libraries are typically installed from the ",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry")," using a Node.js package manager such as ",Object(r.b)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/npm"},"npm CLI")," or ",Object(r.b)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/"},"Yarn Classic"),"."),Object(r.b)("p",null,"If you have Node.js installed on your computer then you already have the npm CLI installed. Some developers prefer to use Yarn Classic for slightly faster install times and additional advanced features like Workspaces. Both tools work great with React Native. We will assume npm for the rest of this guide for simplicity of explanation."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'\ud83d\udca1 The terms "library" and "package" are used interchangeably in the JavaScript community.')),Object(r.b)("h2",{id:"installing-a-library"},"Installing a Library"),Object(r.b)("p",null,"To install a library in your project, navigate to your project directory in your terminal and run the installation command. Let's try this with ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-webview"),":"),Object(r.b)(o.a,{groupId:"package-manager",defaultValue:s.a.defaultPackageManager,values:s.a.packageManagers,mdxType:"Tabs"},Object(r.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"npm install react-native-webview\n"))),Object(r.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"yarn add react-native-webview\n")))),Object(r.b)("p",null,"The library that we installed includes native code, and we need to link to our app before we use it."),Object(r.b)("h2",{id:"linking-native-code-on-ios"},"Linking Native Code on iOS"),Object(r.b)("p",null,"React Native uses CocoaPods to manage iOS project dependencies and most React Native libraries follow this same convention. If a library you are using does not, then please refer to their README for additional instruction. In most cases, the following instructions will apply."),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"pod install")," in our ",Object(r.b)("inlineCode",{parentName:"p"},"ios")," directory in order to link it to our native iOS project. A shortcut for doing this without switching to the ",Object(r.b)("inlineCode",{parentName:"p"},"ios")," directory is to run ",Object(r.b)("inlineCode",{parentName:"p"},"npx pod-install"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npx pod-install\n")),Object(r.b)("p",null,"Once this is complete, re-build the app binary to start using your new library:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npx react-native run-ios\n")),Object(r.b)("h2",{id:"linking-native-code-on-android"},"Linking Native Code on Android"),Object(r.b)("p",null,"React Native uses Gradle to manage Android project dependencies. After you install a library with native dependencies, you will need to re-build the app binary to use your new library:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npx react-native run-android\n")),Object(r.b)("h2",{id:"finding-libraries"},"Finding Libraries"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://reactnative.directory"},"React Native Directory")," is a searchable database of libraries built specifically for React Native. This is the first place to look for a library for your React Native app."),Object(r.b)("p",null,"Many of the libraries you will find on the directory are from ",Object(r.b)("a",{parentName:"p",href:"https://github.com/react-native-community/"},"React Native Community")," or ",Object(r.b)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/"},"Expo"),"."),Object(r.b)("p",null,"Libraries built by the React Native Community are driven by volunteers and individuals at companies that depend on React Native. They often support iOS, tvOS, Android, Windows, but this varies across projects. Many of the libraries in this organization were once React Native Core Components and APIs."),Object(r.b)("p",null,"Libraries built by Expo are all written in TypeScript and support iOS, Android, and react-native-web wherever possible. They usually require that you first install ",Object(r.b)("a",{parentName:"p",href:"https://github.com/expo/expo/tree/master/packages/react-native-unimodules"},"react-native-unimodules")," in order to use in your React Native app."),Object(r.b)("p",null,"After React Native Directory, the ",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry")," is the next best place if you can't find a library specifically for React Native on the directory. The npm registry is the definitive source for JavaScript libraries, but the libraries that it lists may not all be compatible with React Native. React Native is one of many JavaScript programming environments, including Node.js, web browsers, Electron, and more, and npm includes libraries that work for all of these environments."),Object(r.b)("h2",{id:"determining-library-compatibility"},"Determining Library Compatibility"),Object(r.b)("h3",{id:"does-it-work-with-react-native"},"Does it work with React Native?"),Object(r.b)("p",null,"Usually libraries built ",Object(r.b)("em",{parentName:"p"},"specifically for other platforms")," will not work with React Native. Examples include ",Object(r.b)("inlineCode",{parentName:"p"},"react-select")," which is built for the web and specifically targets ",Object(r.b)("inlineCode",{parentName:"p"},"react-dom"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"rimraf")," which is built for Node.js and interacts with your computer file system. Other libraries like ",Object(r.b)("inlineCode",{parentName:"p"},"lodash")," use only JavaScript language features and work in any environment. You will gain a sense for this over time, but until then the easiest way to find out is to try it yourself. You can remove packages using ",Object(r.b)("inlineCode",{parentName:"p"},"npm uninstall")," if it turns out that it does not work in React Native."),Object(r.b)("h3",{id:"does-it-work-for-the-platforms-that-my-app-supports"},"Does it work for the platforms that my app supports?"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://reactnative.directory"},"React Native Directory")," allows you to filter by platform compatibility, such as iOS, Android, Web, and Windows. If the library you would like to use is not currently listed there, refer to the README for the library to learn more."),Object(r.b)("h3",{id:"does-it-work-with-my-app-version-of-react-native"},"Does it work with my app version of React Native?"),Object(r.b)("p",null,"The latest version of a library is typically compatible with the latest version of React Native. If you are using an older version, you should refer to the README to know which version of the library you should install. You can install a particular version of the library by running ",Object(r.b)("inlineCode",{parentName:"p"},"npm install <library-name>@<version-number>"),", for example: ",Object(r.b)("inlineCode",{parentName:"p"},"npm install @react-native-community/netinfo@^2.0.0"),"."))}b.isMDXComponent=!0},706:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),b=i,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return a?n.a.createElement(m,l(l({ref:t},c),{},{components:a})):n.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},707:function(e,t,a){"use strict";function i(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=i(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=i(e))&&(n&&(n+=" "),n+=t);return n}},708:function(e,t,a){"use strict";var i=a(0),n=a(709);t.a=function(){var e=Object(i.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},709:function(e,t,a){"use strict";var i=a(0),n=Object(i.createContext)(void 0);t.a=n},710:function(e,t,a){"use strict";var i=a(0),n=a.n(i),r=a(708),o=a(707),l=a(69),s=a.n(l);var c=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(r.a)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,h=Object(i.useState)(l),y=h[0],g=h[1],w=i.Children.toArray(e.children),O=[];if(null!=d){var j=f[d];null!=j&&j!==y&&p.some((function(e){return e.value===j}))&&g(j)}var N=function(e){var t=e.target,a=O.indexOf(t),i=w[a].props.value;g(i),null!=d&&(v(d,i),setTimeout((function(){var e,a,i,n,r,o,l,c;(e=t.getBoundingClientRect(),a=e.top,i=e.left,n=e.bottom,r=e.right,o=window,l=o.innerHeight,c=o.innerWidth,a>=0&&r<=c&&n<=l&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},k=function(e){var t,a;switch(e.keyCode){case u:var i=O.indexOf(e.target)+1;a=O[i]||O[0];break;case c:var n=O.indexOf(e.target)-1;a=O[n]||O[O.length-1]}null===(t=a)||void 0===t||t.focus()};return n.a.createElement("div",{className:"tabs-container"},n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},b)},p.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:k,onFocus:N,onClick:N},a)}))),t?Object(i.cloneElement)(w.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},711:function(e,t,a){"use strict";var i=a(0),n=a.n(i);t.a=function(e){var t=e.children,a=e.hidden,i=e.className;return n.a.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},712:function(e,t,a){"use strict";var i=a(8),n=!!i.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!i.a.canUseDOM&&navigator.platform.startsWith("Win"),o=n?"ios":"android",l=n?"macos":r?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}}}]);