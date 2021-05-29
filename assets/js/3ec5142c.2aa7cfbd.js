(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{271:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return s})),i.d(t,"toc",(function(){return l})),i.d(t,"default",(function(){return b}));var n=i(4),a=i(10),o=(i(0),i(730)),r={title:"Accessibility API Updates",author:"Ziqi Chen",authorTitle:"Student at UC Berkeley",authorURL:"https://ziqichen.com/",authorImageURL:"https://avatars2.githubusercontent.com/u/13990087?s=400&u=5841da1b6064341d52ecab70a586b6701d9f6978&v=4",tags:["engineering"]},s={permalink:"/blog/2018/08/13/react-native-accessibility-updates",source:"@site/blog/2018-08-13-react-native-accessibility-updates.md",description:"Motivation",date:"2018-08-13T00:00:00.000Z",formattedDate:"August 13, 2018",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],title:"Accessibility API Updates",readingTime:6.435,truncated:!1,prevItem:{title:"preventing illegal fund with blockchain",permalink:"/blog/2018/08/24/preventing-illegal-fund-blockchain"},nextItem:{title:"Releasing 0.56",permalink:"/blog/2018/07/04/releasing-react-native-056"}},l=[{value:"Motivation",id:"motivation",children:[]},{value:"Problems With the Existing API",id:"problems-with-the-existing-api",children:[{value:"Problem One: Two Completely Different Yet Similar Props - accessibilityComponentType (Android) and accessibilityTraits (iOS)",id:"problem-one-two-completely-different-yet-similar-props---accessibilitycomponenttype-android-and-accessibilitytraits-ios",children:[]},{value:"Problem Two: Non-existent Accessibility Hints:",id:"problem-two-non-existent-accessibility-hints",children:[]},{value:"Problem Three: Ignoring Inverted Colors:",id:"problem-three-ignoring-inverted-colors",children:[]}]},{value:"Design of the New API",id:"design-of-the-new-api",children:[{value:"Solution One: Combining accessibilityComponentType (Android) and accessibilityTraits (iOS)",id:"solution-one-combining-accessibilitycomponenttype-android-and-accessibilitytraits-ios",children:[]},{value:"Solution Two: Adding Accessibility Hints",id:"solution-two-adding-accessibility-hints",children:[]},{value:"Solution to Problem Three",id:"solution-to-problem-three",children:[]}]},{value:"New Usage",id:"new-usage",children:[{value:"How to Upgrade",id:"how-to-upgrade",children:[]}]}],c={toc:l};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"motivation"},"Motivation"),Object(o.b)("p",null,"As technology advances and mobile apps become increasingly important to everyday life, the necessity of creating accessible applications has likewise grown in importance."),Object(o.b)("p",null,"React Native's limited Accessibility API has always been a huge pain point for developers, so we've made a few updates to the Accessibility API to make it easier to create inclusive mobile applications."),Object(o.b)("h2",{id:"problems-with-the-existing-api"},"Problems With the Existing API"),Object(o.b)("h3",{id:"problem-one-two-completely-different-yet-similar-props---accessibilitycomponenttype-android-and-accessibilitytraits-ios"},"Problem One: Two Completely Different Yet Similar Props - accessibilityComponentType (Android) and accessibilityTraits (iOS)"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"accessibilityComponentType")," and ",Object(o.b)("inlineCode",{parentName:"p"},"accessibilityTraits")," are two properties that are used to tell TalkBack on Android and VoiceOver on iOS what kind of UI element the user is interacting with. The two biggest problems with these properties are that:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"They are two different properties with different usage methods, yet have the same purpose.")," In the previous API, these are two separate properties (one for each platform), which was not only inconvenient, but also confusing to many developers. ",Object(o.b)("inlineCode",{parentName:"li"},"accessibilityTraits")," on iOS allows 17 different values while ",Object(o.b)("inlineCode",{parentName:"li"},"accessibilityComponentType")," on Android allows only 4 values. Furthermore, the values for the most part had no overlap. Even the input types for these two properties are different. ",Object(o.b)("inlineCode",{parentName:"li"},"accessibilityTraits")," allows either an array of traits to be passed in or a single trait, while ",Object(o.b)("inlineCode",{parentName:"li"},"accessibilityComponentType")," allows only a single value."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"There is very limited functionality on Android.")," With the old property, the only UI elements that Talkback were able to recognize were \u201cbutton,\u201d \u201cradiobutton_checked,\u201d and \u201cradiobutton_unchecked.\u201d")),Object(o.b)("h3",{id:"problem-two-non-existent-accessibility-hints"},"Problem Two: Non-existent Accessibility Hints:"),Object(o.b)("p",null,"Accessibility Hints help users using TalkBack or VoiceOver understand what will happen when they perform an action on an accessibility element that is not apparent by only the accessibility label. These hints can be turned on and off in the settings panel. Previously, React Native's API did not support accessibility hints at all."),Object(o.b)("h3",{id:"problem-three-ignoring-inverted-colors"},"Problem Three: Ignoring Inverted Colors:"),Object(o.b)("p",null,"Some users with vision loss use inverted colors on their mobile phones to have greater screen contrast. Apple provided an API for iOS which allows developers to ignore certain views. This way, images and videos aren't distorted when a user has the inverted colors setting on. This API is currently unsupported by React Native."),Object(o.b)("h2",{id:"design-of-the-new-api"},"Design of the New API"),Object(o.b)("h3",{id:"solution-one-combining-accessibilitycomponenttype-android-and-accessibilitytraits-ios"},"Solution One: Combining accessibilityComponentType (Android) and accessibilityTraits (iOS)"),Object(o.b)("p",null,"In order to solve the confusion between ",Object(o.b)("inlineCode",{parentName:"p"},"accessibilityComponentType")," and ",Object(o.b)("inlineCode",{parentName:"p"},"accessibilityTraits"),", we decided to merge them into a single property. This made sense because they technically had the same intended functionality and by merging them, developers no longer had to worry about platform specific intricacies when building accessibility features."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Background")),Object(o.b)("p",null,"On iOS, ",Object(o.b)("inlineCode",{parentName:"p"},"UIAccessibilityTraits")," is a property that can be set on any NSObject. Each of the 17 traits passed in through the javascript property to native is mapped to a ",Object(o.b)("inlineCode",{parentName:"p"},"UIAccessibilityTraits")," element in Objective-C. Traits are each represented by a long int, and every trait that is set is ORed together."),Object(o.b)("p",null,"On Android however, ",Object(o.b)("inlineCode",{parentName:"p"},"AccessibilityComponentType")," is a concept that was made up by React Native, and doesn't directly map to any properties in Android. Accessibility is handled by an accessibility delegate. Each view has a default accessibility delegate. If you want to customize any accessibility actions, you have to create a new accessibility delegate, override specific methods you want to customize, and then set the accessibility delegate of the view you are handling to be associated with the new delegate. When a developer set ",Object(o.b)("inlineCode",{parentName:"p"},"AccessibilityComponentType"),", the native code created a new delegate based off of the component that was passed in, and set the view to have that accessibility delegate."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Changes Made")),Object(o.b)("p",null,"For our new property, we wanted to create a superset of the two properties. We decided to keep the new property modeled mostly after the existing property ",Object(o.b)("inlineCode",{parentName:"p"},"accessibilityTraits"),", since ",Object(o.b)("inlineCode",{parentName:"p"},"accessibilityTraits")," has significantly more values. The functionality of Android for these traits would be polyfilled in by modifying the Accessibility Delegate."),Object(o.b)("p",null,"There are 17 values of UIAccessibilityTraits that ",Object(o.b)("inlineCode",{parentName:"p"},"accessibilityTraits")," on iOS can be set to. However, we didn't include all of them as possible values to our new property. This is because the effect of setting some of these traits is actually not very well known, and many of these values are virtually never used."),Object(o.b)("p",null,"The values UIAccessibilityTraits were set to generally took on one of two purposes. They either described a role that UI element had, or they described the state a UI element was in. Most uses of the previous properties we observed usually used one value that represented a role and combined it with either \u201cstate selected,\u201d \u201cstate disabled,\u201d or both. Therefore, we decided to create two new accessibility properties: ",Object(o.b)("inlineCode",{parentName:"p"},"accessibilityRole")," and ",Object(o.b)("inlineCode",{parentName:"p"},"accessibilityState"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"accessibilityRole"))),Object(o.b)("p",null,"The new property, ",Object(o.b)("inlineCode",{parentName:"p"},"accessibilityRole"),", is used to tell Talkback or Voiceover the role of a UI Element. This new property can take on one of the following values:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"none")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"button")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"link")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"search")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"image")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"keyboardkey")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"text")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"adjustable")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"header")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"summary")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"imagebutton"))),Object(o.b)("p",null,"This property only allows one value to be passed in because UI elements generally don't logically take on more than one of these. The exception is image and button, so we've added a role imagebutton that is a combination of both."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"accessibilityStates"))),Object(o.b)("p",null,"The new property, ",Object(o.b)("inlineCode",{parentName:"p"},"accessibilityStates"),", is used to tell Talkback or Voiceover the state a UI Element is in. This property takes on an Array containing one or both of the following values:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"selected")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"disabled"))),Object(o.b)("h3",{id:"solution-two-adding-accessibility-hints"},"Solution Two: Adding Accessibility Hints"),Object(o.b)("p",null,"For this, we added a new property, ",Object(o.b)("inlineCode",{parentName:"p"},"accessibilityHint"),". Setting this property will allow Talkback or Voiceover to recite the hint to users."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"accessibilityHint"))),Object(o.b)("p",null,"This property takes in the accessibility hint to be read in the form of a String."),Object(o.b)("p",null,"On iOS, setting this property will set the corresponding native property AccessibilityHint on the view. The hint will then be read by Voiceover if Accessibility Hints are turned on in the iPhone."),Object(o.b)("p",null,"On Android, setting this property appends the value of the hint to the end of the accessibility label. The upside to this implementation is that it mimics the behavior of hints on iOS, but the downside to this implementation is that these hints cannot be turned off in the settings on Android the way they can be on iOS."),Object(o.b)("p",null,"The reason we made this decision on Android is because normally, accessibility hints correspond with a specific action (e.g. click), and we wanted to keep behaviors consistent across platforms."),Object(o.b)("h3",{id:"solution-to-problem-three"},"Solution to Problem Three"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"accessibilityIgnoresInvertColors"))),Object(o.b)("p",null,"We exposed Apple's api AccessibilityIgnoresInvertColors to JavaScript, so now when you have a view where you don't want colors to be inverted (e.g image), you can set this property to true, and it won't be inverted."),Object(o.b)("h2",{id:"new-usage"},"New Usage"),Object(o.b)("p",null,"These new properties will become available in the React Native 0.57 release."),Object(o.b)("h3",{id:"how-to-upgrade"},"How to Upgrade"),Object(o.b)("p",null,"If you are currently using ",Object(o.b)("inlineCode",{parentName:"p"},"accessibilityComponentType")," and ",Object(o.b)("inlineCode",{parentName:"p"},"accessibilityTraits"),", here are the steps you can take to upgrade to the new properties."),Object(o.b)("h4",{id:"1-using-jscodeshift"},"1. Using jscodeshift"),Object(o.b)("p",null,"The most simple use cases can be replaced by running a jscodeshift script."),Object(o.b)("p",null,"This ",Object(o.b)("a",{parentName:"p",href:"https://gist.github.com/ziqichen6/246e5778617224d2b4aff198dab0305d"},"script")," replaces the following instances:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"accessibilityTraits=\u201ctrait\u201d\naccessibilityTraits={[\u201ctrait\u201d]}\n")),Object(o.b)("p",null,"With"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"accessibilityRole= \u201ctrait\u201d\n")),Object(o.b)("p",null,"This script also removes instances of ",Object(o.b)("inlineCode",{parentName:"p"},"AccessibilityComponentType")," (assuming everywhere you set ",Object(o.b)("inlineCode",{parentName:"p"},"AccessibilityComponentType"),", you would also set ",Object(o.b)("inlineCode",{parentName:"p"},"AccessibilityTraits"),")."),Object(o.b)("h4",{id:"2-using-a-manual-codemod"},"2. Using a manual codemod"),Object(o.b)("p",null,"For the cases that used ",Object(o.b)("inlineCode",{parentName:"p"},"AccessibilityTraits")," that don't have a corresponding value for ",Object(o.b)("inlineCode",{parentName:"p"},"AccessibilityRole"),", and the cases where multiple traits were passed into ",Object(o.b)("inlineCode",{parentName:"p"},"AccessibilityTraits"),", a manual codemod would have to be done."),Object(o.b)("p",null,"In general,"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"accessibilityTraits= {[\u201cbutton\u201d, \u201cselected\u201d]}\n")),Object(o.b)("p",null,"would be manually replaced with"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"accessibilityRole=\u201cbutton\u201d\naccessibilityStates={[\u201cselected\u201d]}\n")),Object(o.b)("p",null,"These properties are already being used in Facebook's codebase. The codemod for Facebook was surprisingly simple. The jscodeshift script fixed about half of our instances, and the other half was fixed manually. Overall, the entire process took less than a few hours."),Object(o.b)("p",null,"Hopefully you will find the updated API useful! And please continue making apps accessible! #inclusion"))}b.isMDXComponent=!0},730:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return u}));var n=i(0),a=i.n(n);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(i),h=n,u=p["".concat(r,".").concat(h)]||p[h]||d[h]||o;return i?a.a.createElement(u,s(s({ref:t},c),{},{components:i})):a.a.createElement(u,s({ref:t},c))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=i[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,i)}h.displayName="MDXCreateElement"}}]);