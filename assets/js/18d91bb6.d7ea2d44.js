(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(4),o=n(10),a=(n(0),n(706)),i={id:"publishing-forks",title:"Publish your own version of react native"},c={unversionedId:"publishing-forks",id:"version-0.63/publishing-forks",isDocsHomePage:!1,title:"Publish your own version of react native",description:"TL;DR",source:"@site/versioned_docs/version-0.63/publishing.md",slug:"/publishing-forks",permalink:"/docs/0.63/publishing-forks",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/publishing.md",version:"0.63",lastUpdatedAt:1620877669,formattedLastUpdatedAt:"5/13/2021"},l=[{value:"TL;DR",id:"tldr",children:[]},{value:"Rationale",id:"rationale",children:[]},{value:"Building",id:"building",children:[{value:"Publishing\xa0to Maven/Nexus",id:"publishing-to-mavennexus",children:[]},{value:"Publishing to a git fork dependency",id:"publishing-to-a-git-fork-dependency",children:[]}]}],u={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tldr"},"TL;DR"),Object(a.b)("p",null,"There is a docker image that helps you build the required Android sources without installing any additional tooling (other than ",Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker"),", which can be committed to a git branch as a fully functional React Native fork release."),Object(a.b)("p",null,"Run this from a fork of the React Native ",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native"},"repo"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"git checkout -d release/my-react-native-release\ndocker run --rm --name rn-build -v $PWD:/pwd -w /pwd reactnativecommunity/react-native-android /bin/sh -c \"./gradlew installArchives\"\ngit add android --force\ngit commit -a -m 'my react native forked release'\ngit push\n")),Object(a.b)("p",null,"Install it in your app project package.json."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'"dependencies": {\n    ...\n    "react-native": "myName/react-native#release/my-react-native-release"\n}\n')),Object(a.b)("h2",{id:"rationale"},"Rationale"),Object(a.b)("p",null,"The recommended approach to working with React Native is to always update to the latest version. No support is provided on older versions and if you run into issues the contributors will always ask you to upgrade to the latest version before even looking at your particular issue. Sometimes, though, you are temporarily stuck on an older React Native version, but you require some changes from newer versions urgently (bugfixes) without having to do a full upgrade right now. This situation should be short lived by definition and once you have the time, the real solution is to upgrade to the latest version."),Object(a.b)("p",null,"With this goal of a shortlived fork of React Native in mind, you can publish your own version of React Native. The facebook/react-native repository contains all the dependencies required to be used directly as a git dependency, except for the Android React Native library binary (.aar)."),Object(a.b)("h2",{id:"building"},"Building"),Object(a.b)("p",null,"This binary needs to become available in your project's ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules/react-native/android")," folder or directly in your gradle dependency of your Android app. You can achieve this in one of two ways: Git dependency branch, Android binary dependency through Maven."),Object(a.b)("p",null,"To build the .aar React Native library, you can follow the steps to ",Object(a.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/wiki/Building-from-source#android"},"build from source")," first to install all required tooling. Then to build the actual library, you can run the following in the root of your react-native checkout:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-$bash"},"./gradlew :ReactAndroid:installArchives --no-daemon\n")),Object(a.b)("p",null,"If you don't want to install the required toolchain for building from source, you can use a prebuilt docker image to create a react native binary;"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'docker run --rm --name rn-build -v $PWD:/pwd -w /pwd reactnativecommunity/react-native-android /bin/sh -c "./gradlew installArchives"\n')),Object(a.b)("p",null,"If you haven't used the Android NDK before or if you have a NDK version not exactly matching the required version for building React Native, this is the recommended approach."),Object(a.b)("p",null,"The resulting binary can be made available to app projects in one of the two ways described below."),Object(a.b)("h3",{id:"publishing-to-mavennexus"},"Publishing\xa0to Maven/Nexus"),Object(a.b)("p",null,"Upload the binaries from the ",Object(a.b)("inlineCode",{parentName:"p"},"android")," folder to maven and point your Android app project gradle dependency for React Native to your Maven/Nexus dependency."),Object(a.b)("h3",{id:"publishing-to-a-git-fork-dependency"},"Publishing to a git fork dependency"),Object(a.b)("p",null,"Instead of uploading to Maven/Nexus, you can add the binaries built in the previous steps to git, by changing the .gitignore and committing the binaries to your forked branch. This allows you to make your fork into a functioning git dependency for React Native app projects."),Object(a.b)("p",null,"If you have changes that you want to actually merge to React Native, make them on another branch first and open a PR. To start making your dependency branch, make sure you are on a 'release/my-forked-release' branch, then merge any commits that you need from yourself or others into this branch. This release branch should never be merged into any other branch."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-$bash"},"# create .aar, then:\ngit add android --force\ngit commit -m 'my release commit'\ngit push\n")),Object(a.b)("p",null,"Now you can use this branch as a git dependency in your app project, by pointing your package.json dependency to this branch:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'"dependencies": {\n    ...\n    "react-native": "my-name/react-native#release/my-forked-release,\n    ...\n}\n')),Object(a.b)("p",null,"No other modifications to your dependencies should be necessary for your native changes to be included in your project."))}d.isMDXComponent=!0},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),d=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),b=r,h=s["".concat(i,".").concat(b)]||s[b]||p[b]||a;return n?o.a.createElement(h,c(c({ref:t},u),{},{components:n})):o.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);