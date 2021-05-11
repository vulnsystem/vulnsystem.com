(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{277:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return c}));var o=a(4),r=a(10),n=(a(0),a(705)),l={id:"shadow-props",title:"Shadow Props"},s={unversionedId:"shadow-props",id:"shadow-props",isDocsHomePage:!1,title:"Shadow Props",description:"`SnackPlayer name=Shadow%20Props&supportedPlatforms=ios",source:"@site/../docs/shadow-props.md",slug:"/shadow-props",permalink:"/docs/next/shadow-props",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/shadow-props.md",version:"current",lastUpdatedAt:1620691963,formattedLastUpdatedAt:"5/11/2021",sidebar:"components",previous:{title:"Layout Props",permalink:"/docs/next/layout-props"},next:{title:"Text Style Props",permalink:"/docs/next/text-style-props"}},i=[{value:"Props",id:"props",children:[{value:"<code>shadowColor</code>",id:"shadowcolor",children:[]},{value:'<code>shadowOffset</code> <div class="label ios">iOS</div>',id:"shadowoffset-ios",children:[]},{value:'<code>shadowOpacity</code> <div class="label ios">iOS</div>',id:"shadowopacity-ios",children:[]},{value:'<code>shadowRadius</code> <div class="label ios">iOS</div>',id:"shadowradius-ios",children:[]}]}],d={toc:i};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("div",{className:"snack-player","data-snack-name":"Shadow Props","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20Slider%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20ShadowPropSlider%20%3D%20(%7B%20label%2C%20value%2C%20...props%20%7D)%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%7Blabel%7D%20(%7Bvalue.toFixed(2)%7D)%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CSlider%20step%3D%7B1%7D%20value%3D%7Bvalue%7D%20%7B...props%7D%20%2F%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BshadowOffsetWidth%2C%20setShadowOffsetWidth%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BshadowOffsetHeight%2C%20setShadowOffsetHeight%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BshadowRadius%2C%20setShadowRadius%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BshadowOpacity%2C%20setShadowOpacity%5D%20%3D%20useState(0.1)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20styles.square%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20shadowOffset%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20shadowOffsetWidth%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20-shadowOffsetHeight%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20shadowOpacity%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20shadowRadius%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.controls%7D%3E%0A%20%20%20%20%20%20%20%20%3CShadowPropSlider%0A%20%20%20%20%20%20%20%20%20%20label%3D%22shadowOffset%20-%20X%22%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B-50%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOffsetWidth%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOffsetWidth(val)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CShadowPropSlider%0A%20%20%20%20%20%20%20%20%20%20label%3D%22shadowOffset%20-%20Y%22%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B-50%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOffsetHeight%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOffsetHeight(val)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CShadowPropSlider%0A%20%20%20%20%20%20%20%20%20%20label%3D%22shadowRadius%22%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B0%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B100%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowRadius%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowRadius(val)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CShadowPropSlider%0A%20%20%20%20%20%20%20%20%20%20label%3D%22shadowOpacity%22%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B0%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20step%3D%7B0.05%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BshadowOpacity%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7Bval%20%3D%3E%20setShadowOpacity(val)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23ecf0f1%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20square%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%2C%0A%20%20%20%20backgroundColor%3A%20%22white%22%2C%0A%20%20%20%20borderRadius%3A%204%2C%0A%20%20%20%20height%3A%20150%2C%0A%20%20%20%20shadowColor%3A%20%22black%22%2C%0A%20%20%20%20width%3A%20150%0A%20%20%7D%2C%0A%20%20controls%3A%20%7B%0A%20%20%20%20paddingHorizontal%3A%2012%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(n.b)("h1",{id:"reference"},"Reference"),Object(n.b)("h2",{id:"props"},"Props"),Object(n.b)("h3",{id:"shadowcolor"},Object(n.b)("inlineCode",{parentName:"h3"},"shadowColor")),Object(n.b)("p",null,"Sets the drop shadow color."),Object(n.b)("p",null,"This property will only work on Android API 28 and above. For similar functionality on lower Android APIs, use the ",Object(n.b)("a",{parentName:"p",href:"view-style-props#elevation"},Object(n.b)("inlineCode",{parentName:"a"},"elevation")," property"),"."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"/docs/next/colors"},"color"))))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"shadowoffset-ios"},Object(n.b)("inlineCode",{parentName:"h3"},"shadowOffset")," ",Object(n.b)("div",{class:"label ios"},"iOS")),Object(n.b)("p",null,"Sets the drop shadow offset."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"object: {width: number,height: number}")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"shadowopacity-ios"},Object(n.b)("inlineCode",{parentName:"h3"},"shadowOpacity")," ",Object(n.b)("div",{class:"label ios"},"iOS")),Object(n.b)("p",null,"Sets the drop shadow opacity (multiplied by the color's alpha component)."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"shadowradius-ios"},Object(n.b)("inlineCode",{parentName:"h3"},"shadowRadius")," ",Object(n.b)("div",{class:"label ios"},"iOS")),Object(n.b)("p",null,"Sets the drop shadow blur radius."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"number")))))}c.isMDXComponent=!0},705:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),c=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,h=p["".concat(l,".").concat(u)]||p[u]||b[u]||n;return a?r.a.createElement(h,s(s({ref:t},d),{},{components:a})):r.a.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var d=2;d<n;d++)l[d]=a[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);