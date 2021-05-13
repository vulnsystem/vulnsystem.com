(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{392:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(4),o=n(10),r=(n(0),n(706)),i={id:"symbolication",title:"Symbolicating a stack trace"},c={unversionedId:"symbolication",id:"version-0.64/symbolication",isDocsHomePage:!1,title:"Symbolicating a stack trace",description:"If a React Native app throws an unhandled exception in a release build, the output may be obfuscated and hard to read:",source:"@site/versioned_docs/version-0.64/symbolication.md",slug:"/symbolication",permalink:"/docs/symbolication",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/symbolication.md",version:"0.64",lastUpdatedAt:1620877669,formattedLastUpdatedAt:"5/13/2021",sidebar:"version-0.64/docs",previous:{title:"Debugging",permalink:"/docs/debugging"},next:{title:"Testing",permalink:"/docs/testing-overview"}},l=[{value:"Notes on Sourcemaps",id:"notes-on-sourcemaps",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If a React Native app throws an unhandled exception in a release build, the output may be obfuscated and hard to read:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"07-15 10:58:25.820 18979 18998 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: Process: com.awesomeproject, PID: 18979 07-15 10:58:25.820 18979 18998 E AndroidRuntime: com.facebook.react.common.JavascriptException: Failed, js engine: hermes, stack:\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: p@1:132161\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: p@1:132084\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: f@1:131854\n07-15 10:58:25.820 18979 18998 E AndroidRuntime: anonymous@1:131119\n")),Object(r.b)("p",null,"The sections like ",Object(r.b)("inlineCode",{parentName:"p"},"p@1:132161")," are minified function names and bytecode offsets. To debug the problem, you would instead want to translate it into file, line and function name: ",Object(r.b)("inlineCode",{parentName:"p"},"AwesomeProject/App.js:54:initializeMap"),". This is known as ",Object(r.b)("strong",{parentName:"p"},"symbolication.")," You can symbolicate minified function names and bytecode like the above by passing ",Object(r.b)("inlineCode",{parentName:"p"},"metro-symbolicate")," a generated source map and the stack trace."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"metro-symbolicate")," package is installed by default in the React Native template project from ",Object(r.b)("a",{parentName:"p",href:"environment-setup"},"setting up your development environment"),".")),Object(r.b)("p",null,"From a file containing the stacktrace:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"npx metro-symbolicate android/app/build/generated/sourcemaps/react/release/index.android.bundle.map < stacktrace.txt\n")),Object(r.b)("p",null,"From ",Object(r.b)("inlineCode",{parentName:"p"},"adb logcat"),"directly:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"adb logcat -d | npx metro-symbolicate android/app/build/generated/sourcemaps/react/release/index.android.bundle.map\n")),Object(r.b)("p",null,"This will turn each minified function name and offset like ",Object(r.b)("inlineCode",{parentName:"p"},"p@1:132161")," into the actual file- and function name ",Object(r.b)("inlineCode",{parentName:"p"},"AwesomeProject/App.js:54:initializeMap"),"."),Object(r.b)("h2",{id:"notes-on-sourcemaps"},"Notes on Sourcemaps"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Multiple source maps may be generated by the build process. Make sure to used the one in the location shown in the examples."),Object(r.b)("li",{parentName:"ul"},"Make sure that the source map you use corresponds to the exact commit of the crashing app. Small changes in source code can cause large differences in offsets."),Object(r.b)("li",{parentName:"ul"},"If ",Object(r.b)("inlineCode",{parentName:"li"},"metro-symbolicate")," exits immediately with success, make sure the input comes from a pipe or redirection and not from a terminal.")))}p.isMDXComponent=!0},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);