(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{404:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(4),r=n(10),i=(n(0),n(706)),o={id:"timers",title:"Timers"},c={unversionedId:"timers",id:"timers",isDocsHomePage:!1,title:"Timers",description:"Timers are an important part of an application and React Native implements the browser timers.",source:"@site/../docs/timers.md",slug:"/timers",permalink:"/docs/next/timers",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/timers.md",version:"current",lastUpdatedAt:1620877669,formattedLastUpdatedAt:"5/13/2021",sidebar:"docs",previous:{title:"JavaScript Environment",permalink:"/docs/next/javascript-environment"},next:{title:"Using Hermes",permalink:"/docs/next/hermes"}},l=[{value:"Timers",id:"timers",children:[]},{value:"InteractionManager",id:"interactionmanager",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Timers are an important part of an application and React Native implements the ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals"},"browser timers"),"."),Object(i.b)("h2",{id:"timers"},"Timers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"setTimeout, clearTimeout"),Object(i.b)("li",{parentName:"ul"},"setInterval, clearInterval"),Object(i.b)("li",{parentName:"ul"},"setImmediate, clearImmediate"),Object(i.b)("li",{parentName:"ul"},"requestAnimationFrame, cancelAnimationFrame")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"requestAnimationFrame(fn)")," is not the same as ",Object(i.b)("inlineCode",{parentName:"p"},"setTimeout(fn, 0)")," - the former will fire after all the frames have flushed, whereas the latter will fire as quickly as possible (over 1000x per second on a iPhone 5S)."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"setImmediate")," is executed at the end of the current JavaScript execution block, right before sending the batched response back to native. Note that if you call ",Object(i.b)("inlineCode",{parentName:"p"},"setImmediate")," within a ",Object(i.b)("inlineCode",{parentName:"p"},"setImmediate")," callback, it will be executed right away, it won't yield back to native in between."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Promise")," implementation uses ",Object(i.b)("inlineCode",{parentName:"p"},"setImmediate")," as its asynchronicity implementation."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: when debugging on Android, if the times between the debugger and device have drifted; things such as animation, event behavior, etc., might not work properly or the results may not be accurate. Please correct this by running ",Object(i.b)("inlineCode",{parentName:"p"},'adb shell "date `date +%m%d%H%M%Y.%S%3N`"')," on your debugger machine. Root access is required for the use in real device.")),Object(i.b)("h2",{id:"interactionmanager"},"InteractionManager"),Object(i.b)("p",null,"One reason why well-built native apps feel so smooth is by avoiding expensive operations during interactions and animations. In React Native, we currently have a limitation that there is only a single JS execution thread, but you can use ",Object(i.b)("inlineCode",{parentName:"p"},"InteractionManager")," to make sure long-running work is scheduled to start after any interactions/animations have completed."),Object(i.b)("p",null,"Applications can schedule tasks to run after interactions with the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"InteractionManager.runAfterInteractions(() => {\n  // ...long-running synchronous task...\n});\n")),Object(i.b)("p",null,"Compare this to other scheduling alternatives:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"requestAnimationFrame(): for code that animates a view over time."),Object(i.b)("li",{parentName:"ul"},"setImmediate/setTimeout/setInterval(): run code later, note this may delay animations."),Object(i.b)("li",{parentName:"ul"},"runAfterInteractions(): run code later, without delaying active animations.")),Object(i.b)("p",null,"The touch handling system considers one or more active touches to be an 'interaction' and will delay ",Object(i.b)("inlineCode",{parentName:"p"},"runAfterInteractions()")," callbacks until all touches have ended or been cancelled."),Object(i.b)("p",null,"InteractionManager also allows applications to register animations by creating an interaction 'handle' on animation start, and clearing it upon completion:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"var handle = InteractionManager.createInteractionHandle();\n// run animation... (`runAfterInteractions` tasks are queued)\n// later, on animation completion:\nInteractionManager.clearInteractionHandle(handle);\n// queued tasks run if all handles were cleared\n")))}u.isMDXComponent=!0},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),b=a,d=m["".concat(o,".").concat(b)]||m[b]||p[b]||i;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);