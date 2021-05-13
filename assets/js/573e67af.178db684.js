(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{316:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(4),a=n(10),o=(n(0),n(706)),i={id:"profile-hermes",title:"Profiling with Hermes"},l={unversionedId:"profile-hermes",id:"version-0.64/profile-hermes",isDocsHomePage:!1,title:"Profiling with Hermes",description:"You can visualize JavaScript's performance in a React Native app using Hermes. Hermes is a small and lightweight JavaScript engine optimized for running React Native on Android (you can read more about using it with React Native here. Hermes helps improve app performance and also exposes ways to analyze the performance of the JavaScript that it runs.",source:"@site/versioned_docs/version-0.64/profile-hermes.md",slug:"/profile-hermes",permalink:"/docs/profile-hermes",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/profile-hermes.md",version:"0.64",lastUpdatedAt:1620877669,formattedLastUpdatedAt:"5/13/2021",sidebar:"version-0.64/docs",previous:{title:"Profiling",permalink:"/docs/profiling"},next:{title:"JavaScript Environment",permalink:"/docs/javascript-environment"}},c=[{value:"Record a Hermes sampling profile",id:"record-a-hermes-sampling-profile",children:[]},{value:"Execute command from CLI",id:"execute-command-from-cli",children:[{value:"Enabling source map",id:"enabling-source-map",children:[]},{value:"Common errors",id:"common-errors",children:[]}]},{value:"Open the downloaded profile in Chrome DevTools",id:"open-the-downloaded-profile-in-chrome-devtools",children:[]},{value:"How does the Hermes Profile Transformer work?",id:"how-does-the-hermes-profile-transformer-work",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can visualize JavaScript's performance in a React Native app using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/hermes"},"Hermes"),". Hermes is a small and lightweight JavaScript engine optimized for running React Native on Android (you can ",Object(o.b)("a",{parentName:"p",href:"hermes"},"read more about using it with React Native here"),". Hermes helps improve app performance and also exposes ways to analyze the performance of the JavaScript that it runs."),Object(o.b)("p",null,"In this section, you will learn how to profile your React Native app running on Hermes and how to visualize the profile using ",Object(o.b)("a",{parentName:"p",href:"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference"},"the Performance tab on Chrome DevTools")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Be sure to ",Object(o.b)("a",{parentName:"p",href:"hermes"},"enable hermes in your app")," before you get started!")),Object(o.b)("p",null,"Follow the instructions below to get started profiling:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"/docs/profile-hermes#record-a-hermes-sampling-profile"},"Record a Hermes sampling profile")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"/docs/profile-hermes#execute-command-from-cli"},"Execute command from CLI")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"/docs/profile-hermes#open-the-downloaded-profile-on-chrome-devtools"},"Open the downloaded profile on Chrome DevTools"))),Object(o.b)("h2",{id:"record-a-hermes-sampling-profile"},"Record a Hermes sampling profile"),Object(o.b)("p",null,"To record a sampling profiler from the Developer Menu:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Navigate to your running Metro server terminal."),Object(o.b)("li",{parentName:"ol"},"Press ",Object(o.b)("inlineCode",{parentName:"li"},"d")," to open the ",Object(o.b)("strong",{parentName:"li"},"Developer Menu.")),Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("strong",{parentName:"li"},"Enable Sampling Profiler.")),Object(o.b)("li",{parentName:"ol"},"Execute your JavaScript by in your app (press buttons, etc.)"),Object(o.b)("li",{parentName:"ol"},"Open the ",Object(o.b)("strong",{parentName:"li"},"Developer Menu")," by pressing ",Object(o.b)("inlineCode",{parentName:"li"},"d")," again."),Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("strong",{parentName:"li"},"Disable Sampling Profiler")," to stop recording and save the sampling profiler.")),Object(o.b)("p",null,"A toast will show the location where the sampling profiler has been saved, usually in ",Object(o.b)("inlineCode",{parentName:"p"},"/data/user/0/com.appName/cache/*.cpuprofile")),Object(o.b)("img",{src:"/docs/assets/HermesProfileSaved.png",height:"465",width:"250",alt:"Toast Notification of Profile saving"}),Object(o.b)("h2",{id:"execute-command-from-cli"},"Execute command from CLI"),Object(o.b)("p",null,"You can use the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/cli"},"React Native CLI")," to convert the Hermes tracing profile to Chrome tracing profile, and then pull it to your local machine using:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npx react-native profile-hermes [destinationDir]\n")),Object(o.b)("h3",{id:"enabling-source-map"},"Enabling source map"),Object(o.b)("p",null,"A source map is used to enhance the profile and associate trace events with the application code. You can automatically generate a source map when converting the Hermes tracing profile to a Chrome tracing profile by enabling ",Object(o.b)("inlineCode",{parentName:"p"},"bundleInDebug")," if the app is running in development mode. This allows React Native to build the bundle during its running process. Here's how:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In your app's ",Object(o.b)("inlineCode",{parentName:"li"},"android/app/build.gradle")," file, add:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"project.ext.react = [\n  bundleInDebug: true,\n]\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Be sure to clean the build whenever you make any changes to ",Object(o.b)("inlineCode",{parentName:"p"},"build.gradle"))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Clean the build by running:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"cd android && ./gradlew clean\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Run your app:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npx react-native run-android\n")),Object(o.b)("h3",{id:"common-errors"},"Common errors"),Object(o.b)("h4",{id:"adb-no-devicesemulators-found-or-adb-device-offline"},Object(o.b)("inlineCode",{parentName:"h4"},"adb: no devices/emulators found")," or ",Object(o.b)("inlineCode",{parentName:"h4"},"adb: device offline")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Why this happens")," The CLI cannot access the device or emulator (through adb) you are using to run the app."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"How to fix")," Make sure your Android device/emulator is connected and running. The command only works when it can access adb.")),Object(o.b)("h4",{id:"there-is-no-file-in-the-cache-directory"},Object(o.b)("inlineCode",{parentName:"h4"},"There is no file in the cache/ directory")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Why this happens")," The CLI cannot find any ",Object(o.b)("strong",{parentName:"li"},".cpuprofile")," file in your app's ",Object(o.b)("strong",{parentName:"li"},"cache/")," directory. You might have forgotten to record a profile from the device."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"How to fix")," Follow the ",Object(o.b)("a",{parentName:"li",href:"/docs/profile-hermes#record-a-hermes-sampling-profile"},"instructions")," to enable/disable profiler from device.")),Object(o.b)("h4",{id:"error-your_profile_namecpuprofile-is-an-empty-file"},Object(o.b)("inlineCode",{parentName:"h4"},"Error: your_profile_name.cpuprofile is an empty file")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Why this happens")," The profile is empty, it might be because Hermes is not running correctly."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"How to fix")," Make sure your app is running on the latest version of Hermes.")),Object(o.b)("h2",{id:"open-the-downloaded-profile-in-chrome-devtools"},"Open the downloaded profile in Chrome DevTools"),Object(o.b)("p",null,"To open the profile in Chrome DevTools:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open Chrome DevTools.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select the ",Object(o.b)("strong",{parentName:"p"},"Performance")," tab.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Right click and choose ",Object(o.b)("strong",{parentName:"p"},"Load profile...")),Object(o.b)("img",{src:"/docs/assets/openChromeProfile.png",alt:"Loading a performance profile on Chrome DevTools"}))),Object(o.b)("h2",{id:"how-does-the-hermes-profile-transformer-work"},"How does the Hermes Profile Transformer work?"),Object(o.b)("p",null,"The Hermes Sample Profile is of the ",Object(o.b)("inlineCode",{parentName:"p"},"JSON object format"),", while the format that Google's DevTools supports is ",Object(o.b)("inlineCode",{parentName:"p"},"JSON Array Format"),". (More information about the formats can be found on the ",Object(o.b)("a",{parentName:"p",href:"https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU/preview"},"Trace Event Format Document"),")"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"export interface HermesCPUProfile {\n  traceEvents: SharedEventProperties[];\n  samples: HermesSample[];\n  stackFrames: { [key in string]: HermesStackFrame };\n}\n")),Object(o.b)("p",null,"The Hermes profile has most of its information encoded into the ",Object(o.b)("inlineCode",{parentName:"p"},"samples")," and ",Object(o.b)("inlineCode",{parentName:"p"},"stackFrames")," properties. Each sample is a snapshot of the function call stack at that particular timestamp as each sample has a ",Object(o.b)("inlineCode",{parentName:"p"},"sf")," property which corresponds to a function call."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"export interface HermesSample {\n  cpu: string;\n  name: string;\n  ts: string;\n  pid: number;\n  tid: string;\n  weight: string;\n  /**\n   * Will refer to an element in the stackFrames object of the Hermes Profile\n   */\n  sf: number;\n  stackFrameData?: HermesStackFrame;\n}\n")),Object(o.b)("p",null,"The information about a function call can be found in ",Object(o.b)("inlineCode",{parentName:"p"},"stackFrames")," which contains key-object pairs, where the key is the ",Object(o.b)("inlineCode",{parentName:"p"},"sf")," number and the corresponding object gives us all the relevant information about the function including the ",Object(o.b)("inlineCode",{parentName:"p"},"sf")," number of its parent function. This parent-child relationship can be traced upwards to find the information of all the functions running at a particular timestamp."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"export interface HermesStackFrame {\n  line: string;\n  column: string;\n  funcLine: string;\n  funcColumn: string;\n  name: string;\n  category: string;\n  /**\n   * A parent function may or may not exist\n   */\n  parent?: number;\n}\n")),Object(o.b)("p",null,"At this point, you should define a few more terms, namely:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Nodes: The objects corresponding to ",Object(o.b)("inlineCode",{parentName:"li"},"sf")," numbers in ",Object(o.b)("inlineCode",{parentName:"li"},"stackFrames")),Object(o.b)("li",{parentName:"ol"},"Active Nodes: The nodes which are currently running at a particular timestamp. A node is classified as running if its ",Object(o.b)("inlineCode",{parentName:"li"},"sf")," number is in the function call stack. This call stack can be obtained from the ",Object(o.b)("inlineCode",{parentName:"li"},"sf")," number of the sample and tracing upwards till parent ",Object(o.b)("inlineCode",{parentName:"li"},"sf"),"s are available")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"samples")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"stackFrames")," in tandem can then be used to generate all the start and end events at the corresponding timestamps, wherein:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Start Nodes/Events: Nodes absent in the previous sample's function call stack but present in the current sample's."),Object(o.b)("li",{parentName:"ol"},"End Nodes/Events: Nodes present in the previous sample's function call stack but absent in the current sample's.")),Object(o.b)("img",{src:"/docs/assets/CallStackDemo.jpg",height:"800",width:"600",alt:"CallStack Terms Explained"}),Object(o.b)("p",null,"You can now construct a ",Object(o.b)("inlineCode",{parentName:"p"},"flamechart")," of function calls as you have all the function information including its start and end timestamps."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"hermes-profile-transformer")," can convert any profile generated using Hermes into a format that can be directly displayed in Chrome DevTools. More information about this can be found on ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/hermes-profile-transformer"}," ",Object(o.b)("inlineCode",{parentName:"a"},"@react-native-community/hermes-profile-transformer")," ")))}p.isMDXComponent=!0},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);