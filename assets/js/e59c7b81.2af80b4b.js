(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{638:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n(4),i=n(10),r=(n(0),n(706)),o=n(710),s=n(711),l=n(712),c={id:"dimensions",title:"Dimensions"},d={unversionedId:"dimensions",id:"dimensions",isDocsHomePage:!1,title:"Dimensions",description:"useWindowDimensions is the preferred API for React components. Unlike Dimensions, it updates as the window's dimensions update. This works nicely with the React paradigm.",source:"@site/../docs/dimensions.md",slug:"/dimensions",permalink:"/docs/next/dimensions",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/dimensions.md",version:"current",lastUpdatedAt:1620877669,formattedLastUpdatedAt:"5/13/2021",sidebar:"api",previous:{title:"DevSettings",permalink:"/docs/next/devsettings"},next:{title:"Easing",permalink:"/docs/next/easing"}},b=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>get()</code>",id:"get",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]},{value:"<code>set()</code>",id:"set",children:[]}]}],u={toc:b};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"usewindowdimensions"},Object(r.b)("inlineCode",{parentName:"a"},"useWindowDimensions"))," is the preferred API for React components. Unlike ",Object(r.b)("inlineCode",{parentName:"p"},"Dimensions"),", it updates as the window's dimensions update. This works nicely with the React paradigm.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import { Dimensions } from 'react-native';\n")),Object(r.b)("p",null,"You can get the application window's width and height using the following code:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"const windowWidth = Dimensions.get('window').width;\nconst windowHeight = Dimensions.get('window').height;\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Although dimensions are available immediately, they may change (e.g due to device rotation, foldable devices etc) so any rendering logic or styles that depend on these constants should try to call this function on every render, rather than caching the value (for example, using inline styles rather than setting a value in a ",Object(r.b)("inlineCode",{parentName:"p"},"StyleSheet"),").")),Object(r.b)("p",null,"If you are targeting foldable devices or devices which can change the screen size or app window size, you can use the event listener available in the Dimensions module as shown in the below example."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)(o.a,{groupId:"syntax",defaultValue:l.a.defaultSyntax,values:l.a.syntax,mdxType:"Tabs"},Object(r.b)(s.a,{value:"functional",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20Dimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20window%20%3D%20Dimensions.get(%22window%22)%3B%0Aconst%20screen%20%3D%20Dimensions.get(%22screen%22)%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bdimensions%2C%20setDimensions%5D%20%3D%20useState(%7B%20window%2C%20screen%20%7D)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20const%20subscription%20%3D%20Dimensions.addEventListener(%0A%20%20%20%20%20%20%22change%22%2C%0A%20%20%20%20%20%20(%7B%20window%2C%20screen%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setDimensions(%7B%20window%2C%20screen%20%7D)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20subscription.remove()%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bdimensions.window.height%7D%2C%20width%20-%20%24%7Bdimensions.window.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Screen%20Dimensions%3A%20height%20-%20%24%7Bdimensions.screen.height%7D%2C%20width%20-%20%24%7Bdimensions.screen.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(r.b)(s.a,{value:"classical",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20Dimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20window%20%3D%20Dimensions.get(%22window%22)%3B%0Aconst%20screen%20%3D%20Dimensions.get(%22screen%22)%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20dimensions%3A%20%7B%0A%20%20%20%20%20%20window%2C%0A%20%20%20%20%20%20screen%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20onChange%20%3D%20(%7B%20window%2C%20screen%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20dimensions%3A%20%7B%20window%2C%20screen%20%7D%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20this.dimensionsSubscription%20%3D%20Dimensions.addEventListener(%22change%22%2C%20this.onChange)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20this.dimensionsSubscription.remove()%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%20dimensions%20%7D%20%3D%20this.state%3B%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bdimensions.window.height%7D%2C%20width%20-%20%24%7Bdimensions.window.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%7B%60Screen%20Dimensions%3A%20height%20-%20%24%7Bdimensions.screen.height%7D%2C%20width%20-%20%24%7Bdimensions.screen.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"addeventlistener"},Object(r.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static addEventListener(type, handler)\n")),Object(r.b)("p",null,"Add an event handler. Supported events:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"change"),": Fires when a property within the ",Object(r.b)("inlineCode",{parentName:"li"},"Dimensions")," object changes. The argument to the event handler is an object with ",Object(r.b)("inlineCode",{parentName:"li"},"window")," and ",Object(r.b)("inlineCode",{parentName:"li"},"screen")," properties whose values are the same as the return values of ",Object(r.b)("inlineCode",{parentName:"li"},"Dimensions.get('window')")," and ",Object(r.b)("inlineCode",{parentName:"li"},"Dimensions.get('screen')"),", respectively.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"window")," - Size of the visible Application window"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"screen")," - Size of the device's screen")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"get"},Object(r.b)("inlineCode",{parentName:"h3"},"get()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static get(dim)\n")),Object(r.b)("p",null,"Initial dimensions are set before ",Object(r.b)("inlineCode",{parentName:"p"},"runApplication")," is called so they should be available before any other require's are run, but may be updated later."),Object(r.b)("p",null,"Example: ",Object(r.b)("inlineCode",{parentName:"p"},"const {height, width} = Dimensions.get('window');")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"dim"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"Name of dimension as defined when calling ",Object(r.b)("inlineCode",{parentName:"td"},"set"),". @returns {Object?} Value for the dimension.")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"For Android the ",Object(r.b)("inlineCode",{parentName:"p"},"window")," dimension will exclude the size used by the ",Object(r.b)("inlineCode",{parentName:"p"},"status bar")," (if not translucent) and ",Object(r.b)("inlineCode",{parentName:"p"},"bottom navigation bar"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"removeeventlistener"},Object(r.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static removeEventListener(type, handler)\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Deprecated.")," Use the ",Object(r.b)("inlineCode",{parentName:"p"},"remove()")," method on the event subscription returned by ",Object(r.b)("a",{parentName:"p",href:"#addeventlistener"},Object(r.b)("inlineCode",{parentName:"a"},"addEventListener()")),".")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"set"},Object(r.b)("inlineCode",{parentName:"h3"},"set()")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"static set(dims)\n")),Object(r.b)("p",null,"This should only be called from native code by sending the didUpdateDimensions event."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"dims"),Object(r.b)("td",{parentName:"tr",align:null},"object"),Object(r.b)("td",{parentName:"tr",align:null},"Yes"),Object(r.b)("td",{parentName:"tr",align:null},"string-keyed object of dimensions to set")))))}m.isMDXComponent=!0},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(n),m=a,p=b["".concat(o,".").concat(m)]||b[m]||u[m]||r;return n?i.a.createElement(p,s(s({ref:t},c),{},{components:n})):i.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},707:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},708:function(e,t,n){"use strict";var a=n(0),i=n(709);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},709:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},710:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(708),o=n(707),s=n(69),l=n.n(s);var c=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,b=e.values,u=e.groupId,m=e.className,p=Object(r.a)(),h=p.tabGroupChoices,f=p.setTabGroupChoices,v=Object(a.useState)(s),O=v[0],w=v[1],g=a.Children.toArray(e.children),j=[];if(null!=u){var A=h[u];null!=A&&A!==O&&b.some((function(e){return e.value===A}))&&w(A)}var D=function(e){var t=e.target,n=j.indexOf(t),a=g[n].props.value;w(a),null!=u&&(f(u,a),setTimeout((function(){var e,n,a,i,r,o,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&r<=c&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},y=function(e){var t,n;switch(e.keyCode){case d:var a=j.indexOf(e.target)+1;n=j[a]||j[0];break;case c:var i=j.indexOf(e.target)-1;n=j[i]||j[j.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},b.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:y,onFocus:D,onClick:D},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},711:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},712:function(e,t,n){"use strict";var a=n(8),i=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),o=i?"ios":"android",s=i?"macos":r?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}}}]);