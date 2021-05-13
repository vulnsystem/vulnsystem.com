(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(4),i=a(10),o=(a(0),a(706)),r=a(710),l=a(711),s=a(712),c={id:"layoutanimation",title:"LayoutAnimation"},b={unversionedId:"layoutanimation",id:"version-0.64/layoutanimation",isDocsHomePage:!1,title:"LayoutAnimation",description:"Automatically animates views to their new positions when the next layout happens.",source:"@site/versioned_docs/version-0.64/layoutanimation.md",slug:"/layoutanimation",permalink:"/docs/layoutanimation",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/layoutanimation.md",version:"0.64",lastUpdatedAt:1620877669,formattedLastUpdatedAt:"5/13/2021",sidebar:"version-0.64/api",previous:{title:"Keyboard",permalink:"/docs/keyboard"},next:{title:"Linking",permalink:"/docs/linking"}},d=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>configureNext()</code>",id:"configurenext",children:[]},{value:"<code>create()</code>",id:"create",children:[]}]},{value:"Properties",id:"properties",children:[{value:"Types",id:"types",children:[]},{value:"Properties",id:"properties-1",children:[]},{value:"Presets",id:"presets",children:[]},{value:"<code>easeInEaseOut</code>",id:"easeineaseout",children:[]},{value:"<code>linear</code>",id:"linear",children:[]},{value:"<code>spring</code>",id:"spring",children:[]}]}],A={toc:d};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},A,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Automatically animates views to their new positions when the next layout happens."),Object(o.b)("p",null,"A common way to use this API is to call it before updating the state hook in functional components and calling ",Object(o.b)("inlineCode",{parentName:"p"},"setState")," in class components."),Object(o.b)("p",null,"Note that in order to get this to work on ",Object(o.b)("strong",{parentName:"p"},"Android")," you need to set the following flags via ",Object(o.b)("inlineCode",{parentName:"p"},"UIManager"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"if (Platform.OS === 'android') {\n  if (UIManager.setLayoutAnimationEnabledExperimental) {\n    UIManager.setLayoutAnimationEnabledExperimental(true);\n  }\n}\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("div",{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20LayoutAnimation%2C%20Platform%2C%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20UIManager%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bexpanded%2C%20setExpanded%5D%20%3D%20useState(false)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyle.container%7D%3E%0A%20%20%20%20%20%20%3CTouchableOpacity%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%0A%20%20%20%20%20%20%20%20%20%20setExpanded(!expanded)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%3EPress%20me%20to%20%7Bexpanded%20%3F%20%22collapse%22%20%3A%20%22expand%22%7D!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%7Bexpanded%20%26%26%20(%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyle.tile%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3EI%20disappear%20sometimes!%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20style%20%3D%20StyleSheet.create(%7B%0A%20%20tile%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22lightgrey%22%2C%0A%20%20%20%20borderWidth%3A%200.5%2C%0A%20%20%20%20borderColor%3A%20%22%23d6d7da%22%0A%20%20%7D%2C%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20overflow%3A%20%22hidden%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"configurenext"},Object(o.b)("inlineCode",{parentName:"h3"},"configureNext()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static configureNext(config, onAnimationDidEnd?, onAnimationDidFail?)\n")),Object(o.b)("p",null,"Schedules an animation to happen on the next layout."),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"config"),Object(o.b)("td",{parentName:"tr",align:null},"object"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"See config description below.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"onAnimationDidEnd"),Object(o.b)("td",{parentName:"tr",align:null},"function"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"Called when the animation finished.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"onAnimationDidFail"),Object(o.b)("td",{parentName:"tr",align:null},"function"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"Called when the animation failed.")))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"config")," parameter is an object with the keys below. ",Object(o.b)("a",{parentName:"p",href:"/docs/layoutanimation#create"},Object(o.b)("inlineCode",{parentName:"a"},"create"))," returns a valid object for ",Object(o.b)("inlineCode",{parentName:"p"},"config"),", and the ",Object(o.b)("a",{parentName:"p",href:"/docs/layoutanimation#presets"},Object(o.b)("inlineCode",{parentName:"a"},"Presets"))," objects can also all be passed as the ",Object(o.b)("inlineCode",{parentName:"p"},"config"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"duration")," in milliseconds"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"create"),", optional config for animating in new views"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"update"),", optional config for animating views that have been updated"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"delete"),", optional config for animating views as they are removed")),Object(o.b)("p",null,"The config that's passed to ",Object(o.b)("inlineCode",{parentName:"p"},"create"),", ",Object(o.b)("inlineCode",{parentName:"p"},"update"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," has the following keys:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"type"),", the ",Object(o.b)("a",{parentName:"li",href:"/docs/layoutanimation#types"},"animation type")," to use"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"property"),", the ",Object(o.b)("a",{parentName:"li",href:"/docs/layoutanimation#properties"},"layout property")," to animate (optional, but recommended for ",Object(o.b)("inlineCode",{parentName:"li"},"create")," and ",Object(o.b)("inlineCode",{parentName:"li"},"delete"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"springDamping")," (number, optional and only for use with ",Object(o.b)("inlineCode",{parentName:"li"},"type: Type.spring"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"initialVelocity")," (number, optional)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"delay")," (number, optional)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"duration")," (number, optional)")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"create"},Object(o.b)("inlineCode",{parentName:"h3"},"create()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static create(duration, type, creationProp)\n")),Object(o.b)("p",null,"Helper that creates an object (with ",Object(o.b)("inlineCode",{parentName:"p"},"create"),", ",Object(o.b)("inlineCode",{parentName:"p"},"update"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," fields) to pass into ",Object(o.b)("a",{parentName:"p",href:"/docs/layoutanimation#configurenext"},Object(o.b)("inlineCode",{parentName:"a"},"configureNext")),". The ",Object(o.b)("inlineCode",{parentName:"p"},"type")," parameter is an ",Object(o.b)("a",{parentName:"p",href:"/docs/layoutanimation#types"},"animation type"),", and the ",Object(o.b)("inlineCode",{parentName:"p"},"creationProp")," parameter is a ",Object(o.b)("a",{parentName:"p",href:"/docs/layoutanimation#properties"},"layout property"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)(r.a,{groupId:"syntax",defaultValue:s.a.defaultSyntax,values:s.a.syntax,mdxType:"Tabs"},Object(o.b)(l.a,{value:"functional",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20View%2C%0A%20%20Platform%2C%0A%20%20UIManager%2C%0A%20%20LayoutAnimation%2C%0A%20%20StyleSheet%2C%0A%20%20Button%0A%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BboxPosition%2C%20setBoxPosition%5D%20%3D%20useState(%22left%22)%3B%0A%0A%20%20const%20toggleBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(%0A%20%20%20%20%20%20LayoutAnimation.create(%0A%20%20%20%20%20%20%20%20500%2C%0A%20%20%20%20%20%20%20%20LayoutAnimation.Types.spring%2C%0A%20%20%20%20%20%20%20%20LayoutAnimation.Properties.scaleXY%0A%20%20%20%20%20%20)%0A%20%20%20%20)%3B%0A%20%20%20%20setBoxPosition(boxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Toggle%20Layout%22%20onPress%3D%7BtoggleBox%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20boxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22flex-start%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%0A%20%20%7D%2C%0A%20%20moveRight%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22flex-end%22%2C%0A%20%20%20%20height%3A%20200%2C%0A%20%20%20%20width%3A%20200%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(o.b)(l.a,{value:"classical",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20View%2C%0A%20%20Platform%2C%0A%20%20UIManager%2C%0A%20%20LayoutAnimation%2C%0A%20%20StyleSheet%2C%0A%20%20Button%0A%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20boxPosition%3A%20%22left%22%0A%20%20%7D%3B%0A%0A%20%20toggleBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(%0A%20%20%20%20%20%20LayoutAnimation.create(%0A%20%20%20%20%20%20%20%20500%2C%0A%20%20%20%20%20%20%20%20LayoutAnimation.Types.spring%2C%0A%20%20%20%20%20%20%20%20LayoutAnimation.Properties.scaleXY%0A%20%20%20%20%20%20)%0A%20%20%20%20)%3B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20boxPosition%3A%20this.state.boxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Toggle%20Layout%22%20onPress%3D%7Bthis.toggleBox%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20this.state.boxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22flex-start%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%0A%20%20%7D%2C%0A%20%20moveRight%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22flex-end%22%2C%0A%20%20%20%20height%3A%20200%2C%0A%20%20%20%20width%3A%20200%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"types"},"Types"),Object(o.b)("p",null,"An enumeration of animation types to be used in the ",Object(o.b)("a",{parentName:"p",href:"/docs/layoutanimation#create"},Object(o.b)("inlineCode",{parentName:"a"},"create"))," method, or in the ",Object(o.b)("inlineCode",{parentName:"p"},"create"),"/",Object(o.b)("inlineCode",{parentName:"p"},"update"),"/",Object(o.b)("inlineCode",{parentName:"p"},"delete")," configs for ",Object(o.b)("a",{parentName:"p",href:"/docs/layoutanimation#configurenext"},Object(o.b)("inlineCode",{parentName:"a"},"configureNext")),". (example usage: ",Object(o.b)("inlineCode",{parentName:"p"},"LayoutAnimation.Types.easeIn"),")"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Types"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"spring")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"linear")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"easeInEaseOut")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"easeIn")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"easeOut")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"keyboard")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"properties-1"},"Properties"),Object(o.b)("p",null,"An enumeration of layout properties to be animated to be used in the ",Object(o.b)("a",{parentName:"p",href:"/docs/layoutanimation#create"},Object(o.b)("inlineCode",{parentName:"a"},"create"))," method, or in the ",Object(o.b)("inlineCode",{parentName:"p"},"create"),"/",Object(o.b)("inlineCode",{parentName:"p"},"update"),"/",Object(o.b)("inlineCode",{parentName:"p"},"delete")," configs for ",Object(o.b)("a",{parentName:"p",href:"/docs/layoutanimation#configurenext"},Object(o.b)("inlineCode",{parentName:"a"},"configureNext")),". (example usage: ",Object(o.b)("inlineCode",{parentName:"p"},"LayoutAnimation.Properties.opacity"),")"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Properties"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"opacity")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"scaleX")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"scaleY")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"scaleXY")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"presets"},"Presets"),Object(o.b)("p",null,"A set of predefined animation configs to pass into ",Object(o.b)("a",{parentName:"p",href:"/docs/layoutanimation#configurenext"},Object(o.b)("inlineCode",{parentName:"a"},"configureNext")),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Presets"),Object(o.b)("th",{parentName:"tr",align:null},"Value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"easeInEaseOut"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"create(300, 'easeInEaseOut', 'opacity')"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"linear"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"create(500, 'linear', 'opacity')"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"spring"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"{ duration: 700, create: { type: 'linear', property: 'opacity' }, update: { type: 'spring', springDamping: 0.4 }, delete: { type: 'linear', property: 'opacity' } }"))))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"easeineaseout"},Object(o.b)("inlineCode",{parentName:"h3"},"easeInEaseOut")),Object(o.b)("p",null,"Calls ",Object(o.b)("inlineCode",{parentName:"p"},"configureNext()")," with ",Object(o.b)("inlineCode",{parentName:"p"},"Presets.easeInEaseOut"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"linear"},Object(o.b)("inlineCode",{parentName:"h3"},"linear")),Object(o.b)("p",null,"Calls ",Object(o.b)("inlineCode",{parentName:"p"},"configureNext()")," with ",Object(o.b)("inlineCode",{parentName:"p"},"Presets.linear"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"spring"},Object(o.b)("inlineCode",{parentName:"h3"},"spring")),Object(o.b)("p",null,"Calls ",Object(o.b)("inlineCode",{parentName:"p"},"configureNext()")," with ",Object(o.b)("inlineCode",{parentName:"p"},"Presets.spring"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)(r.a,{groupId:"syntax",defaultValue:s.a.defaultSyntax,values:s.a.syntax,mdxType:"Tabs"},Object(o.b)(l.a,{value:"functional",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20View%2C%0A%20%20Platform%2C%0A%20%20UIManager%2C%0A%20%20LayoutAnimation%2C%0A%20%20StyleSheet%2C%0A%20%20Button%0A%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BfirstBoxPosition%2C%20setFirstBoxPosition%5D%20%3D%20useState(%22left%22)%3B%0A%20%20const%20%5BsecondBoxPosition%2C%20setSecondBoxPosition%5D%20%3D%20useState(%22left%22)%3B%0A%20%20const%20%5BthirdBoxPosition%2C%20setThirdBoxPosition%5D%20%3D%20useState(%22left%22)%3B%0A%0A%20%20const%20toggleFirstBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)%3B%0A%20%20%20%20setFirstBoxPosition(firstBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20toggleSecondBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)%3B%0A%20%20%20%20setSecondBoxPosition(secondBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20toggleThirdBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%0A%20%20%20%20setThirdBoxPosition(thirdBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22EaseInEaseOut%22%20onPress%3D%7BtoggleFirstBox%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20firstBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Linear%22%20onPress%3D%7BtoggleSecondBox%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20secondBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Spring%22%20onPress%3D%7BtoggleThirdBox%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20thirdBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22flex-start%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%0A%20%20%7D%2C%0A%20%20moveRight%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22flex-end%22%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(o.b)(l.a,{value:"classical",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20View%2C%0A%20%20Platform%2C%0A%20%20UIManager%2C%0A%20%20LayoutAnimation%2C%0A%20%20StyleSheet%2C%0A%20%20Button%0A%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20firstBoxPosition%3A%20%22left%22%2C%0A%20%20%20%20secondBoxPosition%3A%20%22left%22%2C%0A%20%20%20%20thirdBoxPosition%3A%20%22left%22%0A%20%20%7D%3B%0A%0A%20%20toggleFirstBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)%3B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20firstBoxPosition%3A%0A%20%20%20%20%20%20%20%20this.state.firstBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20toggleSecondBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)%3B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20secondBoxPosition%3A%0A%20%20%20%20%20%20%20%20this.state.secondBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20toggleThirdBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20thirdBoxPosition%3A%0A%20%20%20%20%20%20%20%20this.state.thirdBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22EaseInEaseOut%22%20onPress%3D%7Bthis.toggleFirstBox%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20this.state.firstBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Linear%22%20onPress%3D%7Bthis.toggleSecondBox%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20this.state.secondBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Spring%22%20onPress%3D%7Bthis.toggleThirdBox%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20this.state.thirdBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22flex-start%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%0A%20%20%7D%2C%0A%20%20moveRight%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22flex-end%22%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))))}p.isMDXComponent=!0},706:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,u=d["".concat(r,".").concat(p)]||d[p]||A[p]||o;return a?i.a.createElement(u,l(l({ref:t},c),{},{components:a})):i.a.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},707:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},708:function(e,t,a){"use strict";var n=a(0),i=a(709);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},709:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},710:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(708),r=a(707),l=a(69),s=a.n(l);var c=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,d=e.values,A=e.groupId,p=e.className,u=Object(o.a)(),m=u.tabGroupChoices,f=u.setTabGroupChoices,y=Object(n.useState)(l),g=y[0],O=y[1],D=n.Children.toArray(e.children),C=[];if(null!=A){var h=m[A];null!=h&&h!==g&&d.some((function(e){return e.value===h}))&&O(h)}var j=function(e){var t=e.target,a=C.indexOf(t),n=D[a].props.value;O(n),null!=A&&(f(A,n),setTimeout((function(){var e,a,n,i,o,r,l,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,o=e.right,r=window,l=r.innerHeight,c=r.innerWidth,a>=0&&o<=c&&i<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},B=function(e){var t,a;switch(e.keyCode){case b:var n=C.indexOf(e.target)+1;a=C[n]||C[0];break;case c:var i=C.indexOf(e.target)-1;a=C[i]||C[C.length-1]}null===(t=a)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},p)},d.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:B,onFocus:j,onClick:j},a)}))),t?Object(n.cloneElement)(D.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},D.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},711:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},712:function(e,t,a){"use strict";var n=a(8),i=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),r=i?"ios":"android",l=i?"macos":o?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}}}]);