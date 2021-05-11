(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{264:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(4),b=a(10),l=(a(0),a(705)),r={id:"touchablewithoutfeedback",title:"TouchableWithoutFeedback"},i={unversionedId:"touchablewithoutfeedback",id:"version-0.64/touchablewithoutfeedback",isDocsHomePage:!1,title:"TouchableWithoutFeedback",description:"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.",source:"@site/versioned_docs/version-0.64/touchablewithoutfeedback.md",slug:"/touchablewithoutfeedback",permalink:"/docs/touchablewithoutfeedback",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/touchablewithoutfeedback.md",version:"0.64",lastUpdatedAt:1620691963,formattedLastUpdatedAt:"5/11/2021",sidebar:"version-0.64/components",previous:{title:"TouchableOpacity",permalink:"/docs/touchableopacity"},next:{title:"View",permalink:"/docs/view"}},c=[{value:"Usage Pattern",id:"usage-pattern",children:[]},{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>accessibilityIgnoresInvertColors</code>",id:"accessibilityignoresinvertcolors",children:[]},{value:"<code>accessible</code>",id:"accessible",children:[]},{value:"<code>accessibilityLabel</code>",id:"accessibilitylabel",children:[]},{value:"<code>accessibilityHint</code>",id:"accessibilityhint",children:[]},{value:"<code>accessibilityRole</code>",id:"accessibilityrole",children:[]},{value:"<code>accessibilityState</code>",id:"accessibilitystate",children:[]},{value:"<code>accessibilityActions</code>",id:"accessibilityactions",children:[]},{value:"<code>onAccessibilityAction</code>",id:"onaccessibilityaction",children:[]},{value:"<code>accessibilityValue</code>",id:"accessibilityvalue",children:[]},{value:"<code>delayLongPress</code>",id:"delaylongpress",children:[]},{value:"<code>delayPressIn</code>",id:"delaypressin",children:[]},{value:"<code>delayPressOut</code>",id:"delaypressout",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>hitSlop</code>",id:"hitslop",children:[]},{value:"<code>onBlur</code>",id:"onblur",children:[]},{value:"<code>onFocus</code>",id:"onfocus",children:[]},{value:"<code>onLayout</code>",id:"onlayout",children:[]},{value:"<code>onLongPress</code>",id:"onlongpress",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>onPressIn</code>",id:"onpressin",children:[]},{value:"<code>onPressOut</code>",id:"onpressout",children:[]},{value:"<code>pressRetentionOffset</code>",id:"pressretentionoffset",children:[]},{value:"<code>nativeID</code>",id:"nativeid",children:[]},{value:"<code>testID</code>",id:"testid",children:[]},{value:"<code>touchSoundDisabled</code>",id:"touchsounddisabled",children:[]}]}],o={toc:c};function s(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",Object(l.b)("a",{parentName:"p",href:"/docs/pressable"},"Pressable")," API.")),Object(l.b)("p",null,"Do not use unless you have a very good reason. All elements that respond to press should have a visual feedback when touched."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback")," supports only one child. If you wish to have several child components, wrap them in a View. Importantly, ",Object(l.b)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback")," works by cloning its child and applying responder props to it. It is therefore required that any intermediary components pass through those props to the underlying React Native component."),Object(l.b)("h2",{id:"usage-pattern"},"Usage Pattern"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"function MyComponent(props) {\n  return (\n    <View {...props} style={{ flex: 1, backgroundColor: '#fff' }}>\n      <Text>My Component</Text>\n    </View>\n  );\n}\n\n<TouchableWithoutFeedback onPress={() => alert('Pressed!')}>\n  <MyComponent />\n</TouchableWithoutFeedback>;\n")),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("div",{className:"snack-player","data-snack-name":"TouchableWithoutFeedback","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20TouchableWithoutFeedback%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20TouchableWithoutFeedbackExample%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bcount%2C%20setCount%5D%20%3D%20useState(0)%3B%0A%0A%20%20const%20onPress%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20setCount(count%20%2B%201)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.countContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.countText%7D%3ECount%3A%20%7Bcount%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CTouchableWithoutFeedback%20onPress%3D%7BonPress%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3ETouch%20Here%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FTouchableWithoutFeedback%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingHorizontal%3A%2010%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23DDDDDD%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countContainer%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countText%3A%20%7B%0A%20%20%20%20color%3A%20%22%23FF00FF%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20TouchableWithoutFeedbackExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("h3",{id:"accessibilityignoresinvertcolors"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityIgnoresInvertColors")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessible"},Object(l.b)("inlineCode",{parentName:"h3"},"accessible")),Object(l.b)("p",null,"When ",Object(l.b)("inlineCode",{parentName:"p"},"true"),", indicates that the view is an accessibility element. By default, all the touchable elements are accessible."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessibilitylabel"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityLabel")),Object(l.b)("p",null,"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the ",Object(l.b)("inlineCode",{parentName:"p"},"Text")," nodes separated by space."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessibilityhint"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityHint")),Object(l.b)("p",null,"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessibilityrole"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityRole")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"accessibilityRole")," communicates the purpose of a component to the user of an assistive technology."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"accessibilityRole")," can be one of the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'none'")," - Used when the element has no role."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'button'")," - Used when the element should be treated as a button."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'link'")," - Used when the element should be treated as a link."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'search'")," - Used when the text field element should also be treated as a search field."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'image'")," - Used when the element should be treated as an image. Can be combined with button or link, for example."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'keyboardkey'")," - Used when the element acts as a keyboard key."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'text'")," - Used when the element should be treated as static text that cannot change."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'adjustable'"),' - Used when an element can be "adjusted" (e.g. a slider).'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'imagebutton'")," - Used when the element should be treated as a button and is also an image."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'header'")," - Used when an element acts as a header for a content section (e.g. the title of a navigation bar)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'summary'")," - Used when an element can be used to provide a quick summary of current conditions in the app when the app first launches."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'alert'")," - Used when an element contains important text to be presented to the user."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'checkbox'")," - Used when an element represents a checkbox which can be checked, unchecked, or have mixed checked state."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'combobox'")," - Used when an element represents a combo box, which allows the user to select among several choices."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'menu'")," - Used when the component is a menu of choices."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'menubar'")," - Used when a component is a container of multiple menus."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'menuitem'")," - Used to represent an item within a menu."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'progressbar'")," - Used to represent a component which indicates progress of a task."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'radio'")," - Used to represent a radio button."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'radiogroup'")," - Used to represent a group of radio buttons."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'scrollbar'")," - Used to represent a scroll bar."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'spinbutton'")," - Used to represent a button which opens a list of choices."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'switch'")," - Used to represent a switch which can be turned on and off."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'tab'")," - Used to represent a tab."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'tablist'")," - Used to represent a list of tabs."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'timer'")," - Used to represent a timer."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'toolbar'")," - Used to represent a tool bar (a container of action buttons or components).")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessibilitystate"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityState")),Object(l.b)("p",null,"Describes the current state of a component to the user of an assistive technology."),Object(l.b)("p",null,"See the ",Object(l.b)("a",{parentName:"p",href:"/docs/accessibility#accessibilitystate-ios-android"},"Accessibility guide")," for more information."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"object: {disabled: bool, selected: bool, checked: bool or 'mixed', busy: bool, expanded: bool}"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessibilityactions"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityActions")),Object(l.b)("p",null,"Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. The ",Object(l.b)("inlineCode",{parentName:"p"},"accessibilityActions")," property should contain a list of action objects. Each action object should contain the field name and label."),Object(l.b)("p",null,"See the ",Object(l.b)("a",{parentName:"p",href:"/docs/accessibility#accessibility-actions"},"Accessibility guide")," for more information."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"array"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onaccessibilityaction"},Object(l.b)("inlineCode",{parentName:"h3"},"onAccessibilityAction")),Object(l.b)("p",null,"Invoked when the user performs the accessibility actions. The only argument to this function is an event containing the name of the action to perform."),Object(l.b)("p",null,"See the ",Object(l.b)("a",{parentName:"p",href:"/docs/accessibility#accessibility-actions"},"Accessibility guide")," for more information."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessibilityvalue"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityValue")),Object(l.b)("p",null,"Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars, it contains range information (minimum, current, and maximum)."),Object(l.b)("p",null,"See the ",Object(l.b)("a",{parentName:"p",href:"/docs/accessibility#accessibilityvalue-ios-android"},"Accessibility guide")," for more information."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"object: {min: number, max: number, now: number, text: string}"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"delaylongpress"},Object(l.b)("inlineCode",{parentName:"h3"},"delayLongPress")),Object(l.b)("p",null,"Duration (in milliseconds) from ",Object(l.b)("inlineCode",{parentName:"p"},"onPressIn")," before ",Object(l.b)("inlineCode",{parentName:"p"},"onLongPress")," is called."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"delaypressin"},Object(l.b)("inlineCode",{parentName:"h3"},"delayPressIn")),Object(l.b)("p",null,"Duration (in milliseconds), from the start of the touch, before ",Object(l.b)("inlineCode",{parentName:"p"},"onPressIn")," is called."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"delaypressout"},Object(l.b)("inlineCode",{parentName:"h3"},"delayPressOut")),Object(l.b)("p",null,"Duration (in milliseconds), from the release of the touch, before ",Object(l.b)("inlineCode",{parentName:"p"},"onPressOut")," is called."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"disabled"},Object(l.b)("inlineCode",{parentName:"h3"},"disabled")),Object(l.b)("p",null,"If true, disable all interactions for this component."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"hitslop"},Object(l.b)("inlineCode",{parentName:"h3"},"hitSlop")),Object(l.b)("p",null,"This defines how far your touch can start away from the button. This is added to ",Object(l.b)("inlineCode",{parentName:"p"},"pressRetentionOffset")," when moving off of the button."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"rect"},"Rect")," or number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("h3",{id:"onblur"},Object(l.b)("inlineCode",{parentName:"h3"},"onBlur")),Object(l.b)("p",null,"Invoked when the item loses focus."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onfocus"},Object(l.b)("inlineCode",{parentName:"h3"},"onFocus")),Object(l.b)("p",null,"Invoked when the item receives focus."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onlayout"},Object(l.b)("inlineCode",{parentName:"h3"},"onLayout")),Object(l.b)("p",null,"Invoked on mount and on layout changes."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"(",Object(l.b)("a",{parentName:"td",href:"layoutevent"},"LayoutEvent"),") => void"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onlongpress"},Object(l.b)("inlineCode",{parentName:"h3"},"onLongPress")),Object(l.b)("p",null,"Called if the time after ",Object(l.b)("inlineCode",{parentName:"p"},"onPressIn")," lasts longer than 370 milliseconds. This time period can be customized with ",Object(l.b)("a",{parentName:"p",href:"#delaylongpress"},Object(l.b)("inlineCode",{parentName:"a"},"delayLongPress")),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onpress"},Object(l.b)("inlineCode",{parentName:"h3"},"onPress")),Object(l.b)("p",null,"Called when the touch is released, but not if cancelled (e.g. by a scroll that steals the responder lock). The first function argument is an event in form of ",Object(l.b)("a",{parentName:"p",href:"pressevent"},"PressEvent"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onpressin"},Object(l.b)("inlineCode",{parentName:"h3"},"onPressIn")),Object(l.b)("p",null,"Called as soon as the touchable element is pressed and invoked even before onPress. This can be useful when making network requests. The first function argument is an event in form of ",Object(l.b)("a",{parentName:"p",href:"pressevent"},"PressEvent"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onpressout"},Object(l.b)("inlineCode",{parentName:"h3"},"onPressOut")),Object(l.b)("p",null,"Called as soon as the touch is released even before onPress. The first function argument is an event in form of ",Object(l.b)("a",{parentName:"p",href:"pressevent"},"PressEvent"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"pressretentionoffset"},Object(l.b)("inlineCode",{parentName:"h3"},"pressRetentionOffset")),Object(l.b)("p",null,"When the scroll view is disabled, this defines how far your touch may move off of the button, before deactivating the button. Once deactivated, try moving it back and you'll see that the button is once again reactivated! Move it back and forth several times while the scroll view is disabled. Ensure you pass in a constant to reduce memory allocations."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"rect"},"Rect")," or number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nativeid"},Object(l.b)("inlineCode",{parentName:"h3"},"nativeID")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"testid"},Object(l.b)("inlineCode",{parentName:"h3"},"testID")),Object(l.b)("p",null,"Used to locate this view in end-to-end tests."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"touchsounddisabled"},Object(l.b)("inlineCode",{parentName:"h3"},"touchSoundDisabled")),Object(l.b)("p",null,"If true, doesn't play a system sound on touch."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))))}s.isMDXComponent=!0},705:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),s=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},u=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,m=d["".concat(r,".").concat(u)]||d[u]||p[u]||l;return a?b.a.createElement(m,i(i({ref:t},o),{},{components:a})):b.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var o=2;o<l;o++)r[o]=a[o];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);