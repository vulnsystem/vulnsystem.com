(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{431:function(e,a,b){"use strict";b.r(a),b.d(a,"frontMatter",(function(){return o})),b.d(a,"metadata",(function(){return r})),b.d(a,"toc",(function(){return n})),b.d(a,"default",(function(){return i}));var l=b(4),c=b(10),t=(b(0),b(705)),o={id:"colors",title:"Color Reference"},r={unversionedId:"colors",id:"version-0.64/colors",isDocsHomePage:!1,title:"Color Reference",description:"Components in React Native are styled using JavaScript. Color properties usually match how CSS works on the web. General guides on the color usage on each platform could be found below:",source:"@site/versioned_docs/version-0.64/colors.md",slug:"/colors",permalink:"/docs/colors",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/colors.md",version:"0.64",lastUpdatedAt:1620691963,formattedLastUpdatedAt:"5/11/2021",sidebar:"version-0.64/docs",previous:{title:"Images",permalink:"/docs/images"},next:{title:"Handling Touches",permalink:"/docs/handling-touches"}},n=[{value:"Color APIs",id:"color-apis",children:[]},{value:"Color representations",id:"color-representations",children:[{value:"Red Green Blue (RGB)",id:"red-green-blue-rgb",children:[]},{value:"Hue Saturation Lightness (HSL)",id:"hue-saturation-lightness-hsl",children:[]},{value:"Color ints",id:"color-ints",children:[]},{value:"Named colors",id:"named-colors",children:[]}]}],s={toc:n};function i(e){var a=e.components,b=Object(c.a)(e,["components"]);return Object(t.b)("wrapper",Object(l.a)({},s,b,{components:a,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Components in React Native are ",Object(t.b)("a",{parentName:"p",href:"style"},"styled using JavaScript"),". Color properties usually match how ",Object(t.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"},"CSS works on the web"),". General guides on the color usage on each platform could be found below:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"https://material.io/design/color/color-usage.html"},"Android")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/"},"iOS"))),Object(t.b)("h2",{id:"color-apis"},"Color APIs"),Object(t.b)("p",null,"React Native has several color APIs designed to allow you to take full advantage of your platform's design and user preferences."),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"platformcolor"},"PlatformColor")," lets you reference the platform's color system."),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"dynamiccolorios"},"DynamicColorIOS")," is iOS specific and allows you to specify which colors should be used in light or Dark Mode.")),Object(t.b)("h2",{id:"color-representations"},"Color representations"),Object(t.b)("h3",{id:"red-green-blue-rgb"},"Red Green Blue (RGB)"),Object(t.b)("p",null,"React Native supports ",Object(t.b)("inlineCode",{parentName:"p"},"rgb()")," and ",Object(t.b)("inlineCode",{parentName:"p"},"rgba()")," in both hexadecimal and functional notation:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"'#f0f'")," (#rgb)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"'#ff00ff'")," (#rrggbb)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"'#f0ff'")," (#rgba)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"'#ff00ff00'")," (#rrggbbaa)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"'rgb(255, 0, 255)'")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"'rgba(255, 0, 255, 1.0)'"))),Object(t.b)("h3",{id:"hue-saturation-lightness-hsl"},"Hue Saturation Lightness (HSL)"),Object(t.b)("p",null,"React Native supports ",Object(t.b)("inlineCode",{parentName:"p"},"hsl()")," and ",Object(t.b)("inlineCode",{parentName:"p"},"hsla()")," in functional notation:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"'hsl(360, 100%, 100%)'")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"'hsla(360, 100%, 100%, 1.0)'"))),Object(t.b)("h3",{id:"color-ints"},"Color ints"),Object(t.b)("p",null,"React Native supports also colors as an ",Object(t.b)("inlineCode",{parentName:"p"},"int")," values (in RGB color mode):"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("inlineCode",{parentName:"li"},"0xff00ff00")," (0xrrggbbaa)")),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},Object(t.b)("strong",{parentName:"p"},Object(t.b)("em",{parentName:"strong"},"Note:"))," This might appear similar to the Android ",Object(t.b)("a",{parentName:"p",href:"https://developer.android.com/reference/android/graphics/Color"},"Color")," ints representation but on Android values are stored in SRGB color mode (0xaarrggbb).")),Object(t.b)("h3",{id:"named-colors"},"Named colors"),Object(t.b)("p",null,"In React Native you can also use color name strings as values."),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},Object(t.b)("strong",{parentName:"p"},Object(t.b)("em",{parentName:"strong"},"Note:"))," React Native only supports lowercase color names. Uppercase color names are not supported.")),Object(t.b)("h4",{id:"transparent"},Object(t.b)("inlineCode",{parentName:"h4"},"transparent")),Object(t.b)("p",null,"This is a shortcut for ",Object(t.b)("inlineCode",{parentName:"p"},"rgba(0,0,0,0)"),", same like in ",Object(t.b)("a",{parentName:"p",href:"https://www.w3.org/TR/css-color-3/#transparent"},"CSS3"),"."),Object(t.b)("h4",{id:"color-keywords"},"Color keywords"),Object(t.b)("p",null,"Named colors implementation follows the ",Object(t.b)("a",{parentName:"p",href:"https://www.w3.org/TR/css-color-3/#svg-color"},"CSS3/SVG specification"),":"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#f0f8ff"},className:"color-box"})," aliceblue (`#f0f8ff`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#faebd7"},className:"color-box"})," antiquewhite (`#faebd7`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#00ffff"},className:"color-box"})," aqua (`#00ffff`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#7fffd4"},className:"color-box"})," aquamarine (`#7fffd4`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#f0ffff"},className:"color-box"})," azure (`#f0ffff`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#f5f5dc"},className:"color-box"})," beige (`#f5f5dc`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ffe4c4"},className:"color-box"})," bisque (`#ffe4c4`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#000000"},className:"color-box"})," black (`#000000`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ffebcd"},className:"color-box"})," blanchedalmond (`#ffebcd`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#0000ff"},className:"color-box"})," blue (`#0000ff`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#8a2be2"},className:"color-box"})," blueviolet (`#8a2be2`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#a52a2a"},className:"color-box"})," brown (`#a52a2a`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#deb887"},className:"color-box"})," burlywood (`#deb887`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#5f9ea0"},className:"color-box"})," cadetblue (`#5f9ea0`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#7fff00"},className:"color-box"})," chartreuse (`#7fff00`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#d2691e"},className:"color-box"})," chocolate (`#d2691e`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ff7f50"},className:"color-box"})," coral (`#ff7f50`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#6495ed"},className:"color-box"})," cornflowerblue (`#6495ed`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#fff8dc"},className:"color-box"})," cornsilk (`#fff8dc`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#dc143c"},className:"color-box"})," crimson (`#dc143c`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#00ffff"},className:"color-box"})," cyan (`#00ffff`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#00008b"},className:"color-box"})," darkblue (`#00008b`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#008b8b"},className:"color-box"})," darkcyan (`#008b8b`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#b8860b"},className:"color-box"})," darkgoldenrod (`#b8860b`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#a9a9a9"},className:"color-box"})," darkgray (`#a9a9a9`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#006400"},className:"color-box"})," darkgreen (`#006400`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#a9a9a9"},className:"color-box"})," darkgrey (`#a9a9a9`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#bdb76b"},className:"color-box"})," darkkhaki (`#bdb76b`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#8b008b"},className:"color-box"})," darkmagenta (`#8b008b`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#556b2f"},className:"color-box"})," darkolivegreen (`#556b2f`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ff8c00"},className:"color-box"})," darkorange (`#ff8c00`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#9932cc"},className:"color-box"})," darkorchid (`#9932cc`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#8b0000"},className:"color-box"})," darkred (`#8b0000`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#e9967a"},className:"color-box"})," darksalmon (`#e9967a`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#8fbc8f"},className:"color-box"})," darkseagreen (`#8fbc8f`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#483d8b"},className:"color-box"})," darkslateblue (`#483d8b`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#2f4f4f"},className:"color-box"})," darkslategrey (`#2f4f4f`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#00ced1"},className:"color-box"})," darkturquoise (`#00ced1`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#9400d3"},className:"color-box"})," darkviolet (`#9400d3`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ff1493"},className:"color-box"})," deeppink (`#ff1493`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#00bfff"},className:"color-box"})," deepskyblue (`#00bfff`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#696969"},className:"color-box"})," dimgray (`#696969`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#696969"},className:"color-box"})," dimgrey (`#696969`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#1e90ff"},className:"color-box"})," dodgerblue (`#1e90ff`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#b22222"},className:"color-box"})," firebrick (`#b22222`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#fffaf0"},className:"color-box"})," floralwhite (`#fffaf0`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#228b22"},className:"color-box"})," forestgreen (`#228b22`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ff00ff"},className:"color-box"})," fuchsia (`#ff00ff`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#dcdcdc"},className:"color-box"})," gainsboro (`#dcdcdc`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#f8f8ff"},className:"color-box"})," ghostwhite (`#f8f8ff`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ffd700"},className:"color-box"})," gold (`#ffd700`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#daa520"},className:"color-box"})," goldenrod (`#daa520`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#808080"},className:"color-box"})," gray (`#808080`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#008000"},className:"color-box"})," green (`#008000`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#adff2f"},className:"color-box"})," greenyellow (`#adff2f`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#808080"},className:"color-box"})," grey (`#808080`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#f0fff0"},className:"color-box"})," honeydew (`#f0fff0`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ff69b4"},className:"color-box"})," hotpink (`#ff69b4`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#cd5c5c"},className:"color-box"})," indianred (`#cd5c5c`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#4b0082"},className:"color-box"})," indigo (`#4b0082`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#fffff0"},className:"color-box"})," ivory (`#fffff0`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#f0e68c"},className:"color-box"})," khaki (`#f0e68c`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#e6e6fa"},className:"color-box"})," lavender (`#e6e6fa`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#fff0f5"},className:"color-box"})," lavenderblush (`#fff0f5`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#7cfc00"},className:"color-box"})," lawngreen (`#7cfc00`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#fffacd"},className:"color-box"})," lemonchiffon (`#fffacd`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#add8e6"},className:"color-box"})," lightblue (`#add8e6`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#f08080"},className:"color-box"})," lightcoral (`#f08080`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#e0ffff"},className:"color-box"})," lightcyan (`#e0ffff`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#fafad2"},className:"color-box"})," lightgoldenrodyellow (`#fafad2`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#d3d3d3"},className:"color-box"})," lightgray (`#d3d3d3`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#90ee90"},className:"color-box"})," lightgreen (`#90ee90`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#d3d3d3"},className:"color-box"})," lightgrey (`#d3d3d3`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ffb6c1"},className:"color-box"})," lightpink (`#ffb6c1`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ffa07a"},className:"color-box"})," lightsalmon (`#ffa07a`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#20b2aa"},className:"color-box"})," lightseagreen (`#20b2aa`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#87cefa"},className:"color-box"})," lightskyblue (`#87cefa`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#778899"},className:"color-box"})," lightslategrey (`#778899`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#b0c4de"},className:"color-box"})," lightsteelblue (`#b0c4de`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ffffe0"},className:"color-box"})," lightyellow (`#ffffe0`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#00ff00"},className:"color-box"})," lime (`#00ff00`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#32cd32"},className:"color-box"})," limegreen (`#32cd32`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#faf0e6"},className:"color-box"})," linen (`#faf0e6`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ff00ff"},className:"color-box"})," magenta (`#ff00ff`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#800000"},className:"color-box"})," maroon (`#800000`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#66cdaa"},className:"color-box"})," mediumaquamarine (`#66cdaa`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#0000cd"},className:"color-box"})," mediumblue (`#0000cd`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ba55d3"},className:"color-box"})," mediumorchid (`#ba55d3`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#9370db"},className:"color-box"})," mediumpurple (`#9370db`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#3cb371"},className:"color-box"})," mediumseagreen (`#3cb371`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#7b68ee"},className:"color-box"})," mediumslateblue (`#7b68ee`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#00fa9a"},className:"color-box"})," mediumspringgreen (`#00fa9a`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#48d1cc"},className:"color-box"})," mediumturquoise (`#48d1cc`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#c71585"},className:"color-box"})," mediumvioletred (`#c71585`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#191970"},className:"color-box"})," midnightblue (`#191970`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#f5fffa"},className:"color-box"})," mintcream (`#f5fffa`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ffe4e1"},className:"color-box"})," mistyrose (`#ffe4e1`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ffe4b5"},className:"color-box"})," moccasin (`#ffe4b5`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ffdead"},className:"color-box"})," navajowhite (`#ffdead`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#000080"},className:"color-box"})," navy (`#000080`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#fdf5e6"},className:"color-box"})," oldlace (`#fdf5e6`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#808000"},className:"color-box"})," olive (`#808000`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#6b8e23"},className:"color-box"})," olivedrab (`#6b8e23`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ffa500"},className:"color-box"})," orange (`#ffa500`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ff4500"},className:"color-box"})," orangered (`#ff4500`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#da70d6"},className:"color-box"})," orchid (`#da70d6`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#eee8aa"},className:"color-box"})," palegoldenrod (`#eee8aa`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#98fb98"},className:"color-box"})," palegreen (`#98fb98`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#afeeee"},className:"color-box"})," paleturquoise (`#afeeee`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#db7093"},className:"color-box"})," palevioletred (`#db7093`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ffefd5"},className:"color-box"})," papayawhip (`#ffefd5`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ffdab9"},className:"color-box"})," peachpuff (`#ffdab9`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#cd853f"},className:"color-box"})," peru (`#cd853f`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ffc0cb"},className:"color-box"})," pink (`#ffc0cb`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#dda0dd"},className:"color-box"})," plum (`#dda0dd`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#b0e0e6"},className:"color-box"})," powderblue (`#b0e0e6`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#800080"},className:"color-box"})," purple (`#800080`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#663399"},className:"color-box"})," rebeccapurple (`#663399`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ff0000"},className:"color-box"})," red (`#ff0000`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#bc8f8f"},className:"color-box"})," rosybrown (`#bc8f8f`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#4169e1"},className:"color-box"})," royalblue (`#4169e1`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#8b4513"},className:"color-box"})," saddlebrown (`#8b4513`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#fa8072"},className:"color-box"})," salmon (`#fa8072`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#f4a460"},className:"color-box"})," sandybrown (`#f4a460`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#2e8b57"},className:"color-box"})," seagreen (`#2e8b57`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#fff5ee"},className:"color-box"})," seashell (`#fff5ee`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#a0522d"},className:"color-box"})," sienna (`#a0522d`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#c0c0c0"},className:"color-box"})," silver (`#c0c0c0`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#87ceeb"},className:"color-box"})," skyblue (`#87ceeb`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#6a5acd"},className:"color-box"})," slateblue (`#6a5acd`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#708090"},className:"color-box"})," slategray (`#708090`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#fffafa"},className:"color-box"})," snow (`#fffafa`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#00ff7f"},className:"color-box"})," springgreen (`#00ff7f`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#4682b4"},className:"color-box"})," steelblue (`#4682b4`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#d2b48c"},className:"color-box"})," tan (`#d2b48c`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#008080"},className:"color-box"})," teal (`#008080`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#d8bfd8"},className:"color-box"})," thistle (`#d8bfd8`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ff6347"},className:"color-box"})," tomato (`#ff6347`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#40e0d0"},className:"color-box"})," turquoise (`#40e0d0`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ee82ee"},className:"color-box"})," violet (`#ee82ee`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#f5deb3"},className:"color-box"})," wheat (`#f5deb3`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ffffff"},className:"color-box"})," white (`#ffffff`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#f5f5f5"},className:"color-box"})," whitesmoke (`#f5f5f5`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#ffff00"},className:"color-box"})," yellow (`#ffff00`)"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("ins",{style:{background:"#9acd32"},className:"color-box"})," yellowgreen (`#9acd32`)")))}i.isMDXComponent=!0},705:function(e,a,b){"use strict";b.d(a,"a",(function(){return u})),b.d(a,"b",(function(){return m}));var l=b(0),c=b.n(l);function t(e,a,b){return a in e?Object.defineProperty(e,a,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[a]=b,e}function o(e,a){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),b.push.apply(b,l)}return b}function r(e){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?o(Object(b),!0).forEach((function(a){t(e,a,b[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):o(Object(b)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(b,a))}))}return e}function n(e,a){if(null==e)return{};var b,l,c=function(e,a){if(null==e)return{};var b,l,c={},t=Object.keys(e);for(l=0;l<t.length;l++)b=t[l],a.indexOf(b)>=0||(c[b]=e[b]);return c}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)b=t[l],a.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(e,b)&&(c[b]=e[b])}return c}var s=c.a.createContext({}),i=function(e){var a=c.a.useContext(s),b=a;return e&&(b="function"==typeof e?e(a):r(r({},a),e)),b},u=function(e){var a=i(e.components);return c.a.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return c.a.createElement(c.a.Fragment,{},a)}},f=c.a.forwardRef((function(e,a){var b=e.components,l=e.mdxType,t=e.originalType,o=e.parentName,s=n(e,["components","mdxType","originalType","parentName"]),u=i(b),f=l,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||t;return b?c.a.createElement(m,r(r({ref:a},s),{},{components:b})):c.a.createElement(m,r({ref:a},s))}));function m(e,a){var b=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var t=b.length,o=new Array(t);o[0]=f;var r={};for(var n in a)hasOwnProperty.call(a,n)&&(r[n]=a[n]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var s=2;s<t;s++)o[s]=b[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,b)}f.displayName="MDXCreateElement"}}]);