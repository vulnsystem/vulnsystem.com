(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{486:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(4),r=n(10),i=(n(0),n(705)),l=n(709),s=n(710),c=n(711),o={id:"accessibilityinfo",title:"AccessibilityInfo"},d={unversionedId:"accessibilityinfo",id:"version-0.64/accessibilityinfo",isDocsHomePage:!1,title:"AccessibilityInfo",description:"Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The AccessibilityInfo API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes.",source:"@site/versioned_docs/version-0.64/accessibilityinfo.md",slug:"/accessibilityinfo",permalink:"/docs/accessibilityinfo",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/accessibilityinfo.md",version:"0.64",lastUpdatedAt:1620691963,formattedLastUpdatedAt:"5/11/2021",sidebar:"version-0.64/api",next:{title:"Alert",permalink:"/docs/alert"}},b=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>announceForAccessibility()</code>",id:"announceforaccessibility",children:[]},{value:'<code>isBoldTextEnabled()</code> <div class="label ios">iOS</div>',id:"isboldtextenabled-ios",children:[]},{value:'<code>isGrayscaleEnabled()</code> <div class="label ios">iOS</div>',id:"isgrayscaleenabled-ios",children:[]},{value:'<code>isInvertColorsEnabled()</code> <div class="label ios">iOS</div>',id:"isinvertcolorsenabled-ios",children:[]},{value:"<code>isReduceMotionEnabled()</code>",id:"isreducemotionenabled",children:[]},{value:'<code>isReduceTransparencyEnabled()</code> <div class="label ios">iOS</div>',id:"isreducetransparencyenabled-ios",children:[]},{value:"<code>isScreenReaderEnabled()</code>",id:"isscreenreaderenabled",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]},{value:"<code>setAccessibilityFocus()</code>",id:"setaccessibilityfocus",children:[]}]}],u={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The ",Object(i.b)("inlineCode",{parentName:"p"},"AccessibilityInfo")," API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)(l.a,{groupId:"syntax",defaultValue:c.a.defaultSyntax,values:c.a.syntax,mdxType:"Tabs"},Object(i.b)(s.a,{value:"functional",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"AccessibilityInfo Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20AccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BreduceMotionEnabled%2C%20setReduceMotionEnabled%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5BscreenReaderEnabled%2C%20setScreenReaderEnabled%5D%20%3D%20useState(false)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20%22reduceMotionChanged%22%2C%0A%20%20%20%20%20%20handleReduceMotionToggled%0A%20%20%20%20)%3B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20%22screenReaderChanged%22%2C%0A%20%20%20%20%20%20handleScreenReaderToggled%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(%0A%20%20%20%20%20%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setReduceMotionEnabled(reduceMotionEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(%0A%20%20%20%20%20%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20setScreenReaderEnabled(screenReaderEnabled)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20%20%20%22reduceMotionChanged%22%2C%0A%20%20%20%20%20%20%20%20handleReduceMotionToggled%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20%20%20%22screenReaderChanged%22%2C%0A%20%20%20%20%20%20%20%20handleScreenReaderToggled%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20const%20handleReduceMotionToggled%20%3D%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20setReduceMotionEnabled(reduceMotionEnabled)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20handleScreenReaderToggled%20%3D%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20setScreenReaderEnabled(screenReaderEnabled)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%20%7BreduceMotionEnabled%20%3F%20%22enabled%22%20%3A%20%22disabled%22%7D.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.status%7D%3E%0A%20%20%20%20%20%20%20%20The%20screen%20reader%20is%20%7BscreenReaderEnabled%20%3F%20%22enabled%22%20%3A%20%22disabled%22%7D.%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20status%3A%20%7B%0A%20%20%20%20margin%3A%2030%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(i.b)(s.a,{value:"classical",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"AccessibilityInfo Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20AccessibilityInfo%2C%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Aclass%20AccessibilityStatusExample%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20reduceMotionEnabled%3A%20false%2C%0A%20%20%20%20screenReaderEnabled%3A%20false%2C%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20'reduceMotionChanged'%2C%0A%20%20%20%20%20%20this._handleReduceMotionToggled%0A%20%20%20%20)%3B%0A%20%20%20%20AccessibilityInfo.addEventListener(%0A%20%20%20%20%20%20'screenReaderChanged'%2C%0A%20%20%20%20%20%20this._handleScreenReaderToggled%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.isReduceMotionEnabled().then(reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.setState(%7B%20reduceMotionEnabled%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20AccessibilityInfo.isScreenReaderEnabled().then(screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20%20%20this.setState(%7B%20screenReaderEnabled%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20'reduceMotionChanged'%2C%0A%20%20%20%20%20%20this._handleReduceMotionToggled%0A%20%20%20%20)%3B%0A%0A%20%20%20%20AccessibilityInfo.removeEventListener(%0A%20%20%20%20%20%20'screenReaderChanged'%2C%0A%20%20%20%20%20%20this._handleScreenReaderToggled%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20_handleReduceMotionToggled%20%3D%20reduceMotionEnabled%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20reduceMotionEnabled%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20_handleScreenReaderToggled%20%3D%20screenReaderEnabled%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20screenReaderEnabled%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bthis.styles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bthis.styles.status%7D%3E%0A%20%20%20%20%20%20%20%20%20%20The%20reduce%20motion%20is%7B'%20'%7D%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.reduceMotionEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bthis.styles.status%7D%3E%0A%20%20%20%20%20%20%20%20%20%20The%20screen%20reader%20is%7B'%20'%7D%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.screenReaderEnabled%20%3F%20'enabled'%20%3A%20'disabled'%7D.%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20%20%20container%3A%20%7B%0A%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20status%3A%20%7B%0A%20%20%20%20%20%20margin%3A%2030%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%7D%0A%0Aexport%20default%20AccessibilityStatusExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"addeventlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static addEventListener(eventName, handler)\n")),Object(i.b)("p",null,"Add an event handler. Supported events:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Event name"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"announcementFinished"),Object(i.b)("br",null),Object(i.b)("div",{class:"label two-lines ios"},"iOS")),Object(i.b)("td",{parentName:"tr",align:null},"Fires when the screen reader has finished making an announcement. The argument to the event handler is a dictionary with these keys:",Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)("inlineCode",{parentName:"td"},"announcement"),": The string announced by the screen reader."),Object(i.b)("li",null,Object(i.b)("inlineCode",{parentName:"td"},"success"),": A boolean indicating whether the announcement was successfully made.")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"boldTextChanged"),Object(i.b)("br",null),Object(i.b)("div",{class:"label two-lines ios"},"iOS")),Object(i.b)("td",{parentName:"tr",align:null},"Fires when the state of the bold text toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(i.b)("inlineCode",{parentName:"td"},"true")," when bold text is enabled and ",Object(i.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"grayscaleChanged"),Object(i.b)("br",null),Object(i.b)("div",{class:"label two-lines ios"},"iOS")),Object(i.b)("td",{parentName:"tr",align:null},"Fires when the state of the gray scale toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(i.b)("inlineCode",{parentName:"td"},"true")," when a gray scale is enabled and ",Object(i.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"invertColorsChanged"),Object(i.b)("br",null),Object(i.b)("div",{class:"label two-lines ios"},"iOS")),Object(i.b)("td",{parentName:"tr",align:null},"Fires when the state of the invert colors toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(i.b)("inlineCode",{parentName:"td"},"true")," when invert colors is enabled and ",Object(i.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"reduceMotionChanged")),Object(i.b)("td",{parentName:"tr",align:null},"Fires when the state of the reduce motion toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(i.b)("inlineCode",{parentName:"td"},"true"),' when a reduce motion is enabled (or when "Transition Animation Scale" in "Developer options" is "Animation off") and ',Object(i.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"reduceTransparencyChanged"),Object(i.b)("br",null),Object(i.b)("div",{class:"label two-lines ios"},"iOS")),Object(i.b)("td",{parentName:"tr",align:null},"Fires when the state of the reduce transparency toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(i.b)("inlineCode",{parentName:"td"},"true")," when reduce transparency is enabled and ",Object(i.b)("inlineCode",{parentName:"td"},"false")," otherwise.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"screenReaderChanged")),Object(i.b)("td",{parentName:"tr",align:null},"Fires when the state of the screen reader changes. The argument to the event handler is a boolean. The boolean is ",Object(i.b)("inlineCode",{parentName:"td"},"true")," when a screen reader is enabled and ",Object(i.b)("inlineCode",{parentName:"td"},"false")," otherwise.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"announceforaccessibility"},Object(i.b)("inlineCode",{parentName:"h3"},"announceForAccessibility()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static announceForAccessibility(announcement)\n")),Object(i.b)("p",null,"Post a string to be announced by the screen reader."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"isboldtextenabled-ios"},Object(i.b)("inlineCode",{parentName:"h3"},"isBoldTextEnabled()")," ",Object(i.b)("div",{class:"label ios"},"iOS")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static isBoldTextEnabled()\n")),Object(i.b)("p",null,"Query whether a bold text is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when bold text is enabled and ",Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"isgrayscaleenabled-ios"},Object(i.b)("inlineCode",{parentName:"h3"},"isGrayscaleEnabled()")," ",Object(i.b)("div",{class:"label ios"},"iOS")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static isGrayscaleEnabled()\n")),Object(i.b)("p",null,"Query whether grayscale is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when grayscale is enabled and ",Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"isinvertcolorsenabled-ios"},Object(i.b)("inlineCode",{parentName:"h3"},"isInvertColorsEnabled()")," ",Object(i.b)("div",{class:"label ios"},"iOS")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static isInvertColorsEnabled()\n")),Object(i.b)("p",null,"Query whether invert colors is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when invert colors is enabled and ",Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"isreducemotionenabled"},Object(i.b)("inlineCode",{parentName:"h3"},"isReduceMotionEnabled()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static isReduceMotionEnabled()\n")),Object(i.b)("p",null,"Query whether reduce motion is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when reduce motion is enabled and ",Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"isreducetransparencyenabled-ios"},Object(i.b)("inlineCode",{parentName:"h3"},"isReduceTransparencyEnabled()")," ",Object(i.b)("div",{class:"label ios"},"iOS")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static isReduceTransparencyEnabled()\n")),Object(i.b)("p",null,"Query whether reduce transparency is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when a reduce transparency is enabled and ",Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"isscreenreaderenabled"},Object(i.b)("inlineCode",{parentName:"h3"},"isScreenReaderEnabled()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static isScreenReaderEnabled()\n")),Object(i.b)("p",null,"Query whether a screen reader is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when a screen reader is enabled and ",Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"removeeventlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static removeEventListener(eventName, handler)\n")),Object(i.b)("p",null,"Remove an event handler."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"setaccessibilityfocus"},Object(i.b)("inlineCode",{parentName:"h3"},"setAccessibilityFocus()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static setAccessibilityFocus(reactTag)\n")),Object(i.b)("p",null,"Set accessibility focus to a React component."),Object(i.b)("p",null,"On Android, this calls ",Object(i.b)("inlineCode",{parentName:"p"},"UIManager.sendAccessibilityEvent")," method with passed ",Object(i.b)("inlineCode",{parentName:"p"},"reactTag")," and ",Object(i.b)("inlineCode",{parentName:"p"},"UIManager.AccessibilityEventTypes.typeViewFocused")," arguments."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note"),": Make sure that any ",Object(i.b)("inlineCode",{parentName:"p"},"View")," you want to receive the accessibility focus has ",Object(i.b)("inlineCode",{parentName:"p"},"accessible={true}"),".")))}p.isMDXComponent=!0},705:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=d(n),p=a,h=b["".concat(l,".").concat(p)]||b[p]||u[p]||i;return n?r.a.createElement(h,s(s({ref:t},o),{},{components:n})):r.a.createElement(h,s({ref:t},o))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},706:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},707:function(e,t,n){"use strict";var a=n(0),r=n(708);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},708:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},709:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(707),l=n(706),s=n(69),c=n.n(s);var o=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,b=e.values,u=e.groupId,p=e.className,h=Object(i.a)(),m=h.tabGroupChoices,O=h.setTabGroupChoices,A=Object(a.useState)(s),f=A[0],j=A[1],v=a.Children.toArray(e.children),y=[];if(null!=u){var g=m[u];null!=g&&g!==f&&b.some((function(e){return e.value===g}))&&j(g)}var C=function(e){var t=e.target,n=y.indexOf(t),a=v[n].props.value;j(a),null!=u&&(O(u,a),setTimeout((function(){var e,n,a,r,i,l,s,o;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,s=l.innerHeight,o=l.innerWidth,n>=0&&i<=o&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},E=function(e){var t,n;switch(e.keyCode){case d:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case o:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},p)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:E,onFocus:C,onClick:C},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},710:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},711:function(e,t,n){"use strict";var a=n(8),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",s=r?"macos":i?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}}}]);