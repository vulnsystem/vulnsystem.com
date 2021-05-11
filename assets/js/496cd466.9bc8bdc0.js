(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{285:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return b}));var n=a(4),r=a(10),i=(a(0),a(705)),o=a(709),c=a(710),l=a(711),s={id:"appstate",title:"AppState"},p={unversionedId:"appstate",id:"version-0.63/appstate",isDocsHomePage:!1,title:"AppState",description:"AppState can tell you if the app is in the foreground or background, and notify you when the state changes.",source:"@site/versioned_docs/version-0.63/appstate.md",slug:"/appstate",permalink:"/docs/0.63/appstate",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/appstate.md",version:"0.63",lastUpdatedAt:1620691963,formattedLastUpdatedAt:"5/11/2021",sidebar:"version-0.63/api",previous:{title:"AppRegistry",permalink:"/docs/0.63/appregistry"},next:{title:"DevSettings",permalink:"/docs/0.63/devsettings"}},d=[{value:"App States",id:"app-states",children:[]},{value:"Basic Usage",id:"basic-usage",children:[]},{value:"Events",id:"events",children:[{value:"<code>change</code>",id:"change",children:[]},{value:"<code>memoryWarning</code>",id:"memorywarning",children:[]},{value:"<code>focus</code>",id:"focus",children:[]},{value:"<code>blur</code>",id:"blur",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]}]},{value:"Properties",id:"properties",children:[{value:"<code>currentState</code>",id:"currentstate",children:[]}]}],u={toc:d};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"AppState")," can tell you if the app is in the foreground or background, and notify you when the state changes."),Object(i.b)("p",null,"AppState is frequently used to determine the intent and proper behavior when handling push notifications."),Object(i.b)("h3",{id:"app-states"},"App States"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"active")," - The app is running in the foreground"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"background")," - The app is running in the background. The user is either:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"in another app"),Object(i.b)("li",{parentName:"ul"},"on the home screen"),Object(i.b)("li",{parentName:"ul"},"[Android]"," on another ",Object(i.b)("inlineCode",{parentName:"li"},"Activity")," (even if it was launched by your app)"))),Object(i.b)("li",{parentName:"ul"},"[iOS]"," ",Object(i.b)("inlineCode",{parentName:"li"},"inactive")," - This is a state that occurs when transitioning between foreground & background, and during periods of inactivity such as entering the Multitasking view or in the event of an incoming call")),Object(i.b)("p",null,"For more information, see ",Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/app_and_scenes/managing_your_app_s_life_cycle"},"Apple's documentation")),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("p",null,"To see the current state, you can check ",Object(i.b)("inlineCode",{parentName:"p"},"AppState.currentState"),", which will be kept up-to-date. However, ",Object(i.b)("inlineCode",{parentName:"p"},"currentState")," will be null at launch while ",Object(i.b)("inlineCode",{parentName:"p"},"AppState")," retrieves it over the bridge."),Object(i.b)(o.a,{groupId:"syntax",defaultValue:l.a.defaultSyntax,values:l.a.syntax,mdxType:"Tabs"},Object(i.b)(c.a,{value:"functional",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"AppState Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useRef%2C%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20AppState%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20AppStateExample%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20appState%20%3D%20useRef(AppState.currentState)%3B%0A%20%20const%20%5BappStateVisible%2C%20setAppStateVisible%5D%20%3D%20useState(appState.current)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20AppState.addEventListener(%22change%22%2C%20_handleAppStateChange)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20AppState.removeEventListener(%22change%22%2C%20_handleAppStateChange)%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20const%20_handleAppStateChange%20%3D%20(nextAppState)%20%3D%3E%20%7B%0A%20%20%20%20if%20(%0A%20%20%20%20%20%20appState.current.match(%2Finactive%7Cbackground%2F)%20%26%26%0A%20%20%20%20%20%20nextAppState%20%3D%3D%3D%20%22active%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20console.log(%22App%20has%20come%20to%20the%20foreground!%22)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20appState.current%20%3D%20nextAppState%3B%0A%20%20%20%20setAppStateVisible(appState.current)%3B%0A%20%20%20%20console.log(%22AppState%22%2C%20appState.current)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3ECurrent%20state%20is%3A%20%7BappStateVisible%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20AppStateExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(i.b)("p",null,"If you don't want to see the AppState update from ",Object(i.b)("inlineCode",{parentName:"p"},"active")," to ",Object(i.b)("inlineCode",{parentName:"p"},"inactive")," on iOS you can remove the state variable and use the ",Object(i.b)("inlineCode",{parentName:"p"},"appState.current")," value.")),Object(i.b)(c.a,{value:"classical",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"AppState Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20AppState%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20AppStateExample%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20appState%3A%20AppState.currentState%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20AppState.addEventListener(%22change%22%2C%20this._handleAppStateChange)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20AppState.removeEventListener(%22change%22%2C%20this._handleAppStateChange)%3B%0A%20%20%7D%0A%0A%20%20_handleAppStateChange%20%3D%20nextAppState%20%3D%3E%20%7B%0A%20%20%20%20if%20(%0A%20%20%20%20%20%20this.state.appState.match(%2Finactive%7Cbackground%2F)%20%26%26%0A%20%20%20%20%20%20nextAppState%20%3D%3D%3D%20%22active%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20console.log(%22App%20has%20come%20to%20the%20foreground!%22)%3B%0A%20%20%20%20%7D%0A%20%20%20%20this.setState(%7B%20appState%3A%20nextAppState%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ECurrent%20state%20is%3A%20%7Bthis.state.appState%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20AppStateExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(i.b)("p",null,'This example will only ever appear to say "Current state is: active" because the app is only visible to the user when in the ',Object(i.b)("inlineCode",{parentName:"p"},"active")," state, and the null state will happen only momentarily. If you want to experiment with the code we recommend to use your own device instead of embedded preview."),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"events"},"Events"),Object(i.b)("h3",{id:"change"},Object(i.b)("inlineCode",{parentName:"h3"},"change")),Object(i.b)("p",null,"This event is received when the app state has changed. The listener is called with one of ",Object(i.b)("a",{parentName:"p",href:"appstate#app-states"},"the current app state values"),"."),Object(i.b)("h3",{id:"memorywarning"},Object(i.b)("inlineCode",{parentName:"h3"},"memoryWarning")),Object(i.b)("p",null,"This event is used in the need of throwing memory warning or releasing it."),Object(i.b)("h3",{id:"focus"},Object(i.b)("inlineCode",{parentName:"h3"},"focus")),Object(i.b)("p",null,"[Android only]"," Received when the app gains focus (the user is interacting with the app)."),Object(i.b)("h3",{id:"blur"},Object(i.b)("inlineCode",{parentName:"h3"},"blur")),Object(i.b)("p",null,"[Android only]"," Received when the user is not actively interacting with the app. Useful in situations when the user pulls down the ",Object(i.b)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/notifiers/notifications#bar-and-drawer"},"notification drawer"),". ",Object(i.b)("inlineCode",{parentName:"p"},"AppState")," won't change but the ",Object(i.b)("inlineCode",{parentName:"p"},"blur")," event will get fired."),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"addeventlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"addEventListener(type, handler);\n")),Object(i.b)("p",null,"Add a handler to AppState changes by listening to the ",Object(i.b)("inlineCode",{parentName:"p"},"change")," event type and providing the handler"),Object(i.b)("p",null,"TODO: now that AppState is a subclass of NativeEventEmitter, we could deprecate ",Object(i.b)("inlineCode",{parentName:"p"},"addEventListener")," and ",Object(i.b)("inlineCode",{parentName:"p"},"removeEventListener")," and use ",Object(i.b)("inlineCode",{parentName:"p"},"addListener")," and ",Object(i.b)("inlineCode",{parentName:"p"},"listener.remove()")," directly. That will be a breaking change though, as both the method and event names are different (addListener events are currently required to be globally unique)."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"removeeventlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"removeEventListener(type, handler);\n")),Object(i.b)("p",null,"Remove a handler by passing the ",Object(i.b)("inlineCode",{parentName:"p"},"change")," event type and the handler"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"currentstate"},Object(i.b)("inlineCode",{parentName:"h3"},"currentState")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"AppState.currentState;\n")))}b.isMDXComponent=!0},705:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),b=n,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},706:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},707:function(e,t,a){"use strict";var n=a(0),r=a(708);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},708:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},709:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(707),o=a(706),c=a(69),l=a.n(c);var s=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,d=e.values,u=e.groupId,b=e.className,m=Object(i.a)(),h=m.tabGroupChoices,v=m.setTabGroupChoices,f=Object(n.useState)(c),A=f[0],g=f[1],O=n.Children.toArray(e.children),y=[];if(null!=u){var j=h[u];null!=j&&j!==A&&d.some((function(e){return e.value===j}))&&g(j)}var w=function(e){var t=e.target,a=y.indexOf(t),n=O[a].props.value;g(n),null!=u&&(v(u,n),setTimeout((function(){var e,a,n,r,i,o,c,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,o=window,c=o.innerHeight,s=o.innerWidth,a>=0&&i<=s&&r<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case p:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case s:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},b)},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":A===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:C,onFocus:w,onClick:w},a)}))),t?Object(n.cloneElement)(O.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}},710:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},711:function(e,t,a){"use strict";var n=a(8),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",c=r?"macos":i?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:c,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}}}]);