(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{133:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(4),o=a(10),r=(a(0),a(705)),s=a(709),i=a(710),c=a(711),l={id:"intro-react",title:"React Fundamentals",description:"To understand React Native fully, you need a solid foundation in React. This short introduction to React can help you get started or get refreshed."},p={unversionedId:"intro-react",id:"version-0.63/intro-react",isDocsHomePage:!1,title:"React Fundamentals",description:"To understand React Native fully, you need a solid foundation in React. This short introduction to React can help you get started or get refreshed.",source:"@site/versioned_docs/version-0.63/intro-react.md",slug:"/intro-react",permalink:"/docs/0.63/intro-react",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/intro-react.md",version:"0.63",lastUpdatedAt:1620691963,formattedLastUpdatedAt:"5/11/2021",sidebar:"version-0.63/docs",previous:{title:"Core Components and Native Components",permalink:"/docs/0.63/intro-react-native-components"},next:{title:"Handling Text Input",permalink:"/docs/0.63/handling-text-input"}},b=[{value:"Your first component",id:"your-first-component",children:[]},{value:"JSX",id:"jsx",children:[]},{value:"Custom Components",id:"custom-components",children:[]},{value:"Props",id:"props",children:[]},{value:"State",id:"state",children:[]}],u={toc:b};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"React Native runs on ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),", a popular open source library for building user interfaces with JavaScript. To make the most of React Native, it helps to understand React itself. This section can get you started or can serve as a refresher course."),Object(r.b)("p",null,"We\u2019re going to cover the core concepts behind React:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"components"),Object(r.b)("li",{parentName:"ul"},"JSX"),Object(r.b)("li",{parentName:"ul"},"props"),Object(r.b)("li",{parentName:"ul"},"state")),Object(r.b)("p",null,"If you want to dig deeper, we encourage you to check out ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/getting-started.html"},"React\u2019s official documentation"),"."),Object(r.b)("h2",{id:"your-first-component"},"Your first component"),Object(r.b)("p",null,"The rest of this introduction to React uses cats in its examples: friendly, approachable creatures that need names and a cafe to work in. Here is your very first Cat component:"),Object(r.b)(s.a,{groupId:"syntax",defaultValue:c.a.defaultSyntax,values:c.a.syntax,mdxType:"Tabs"},Object(r.b)(i.a,{value:"functional",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"Your Cat","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%20%7D%20from%20'react-native'%3B%0A%0Aconst%20Cat%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CText%3EHello%2C%20I%20am%20your%20cat!%3C%2FText%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20Cat%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("p",null,"Here is how you do it: To define your ",Object(r.b)("inlineCode",{parentName:"p"},"Cat")," component, first use JavaScript\u2019s ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"},Object(r.b)("inlineCode",{parentName:"a"},"import"))," to import React and React Native\u2019s ",Object(r.b)("a",{parentName:"p",href:"/docs/next/text"},Object(r.b)("inlineCode",{parentName:"a"},"Text"))," Core Component:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Text } from 'react-native';\n")),Object(r.b)("p",null,"Your component starts as a function:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"const Cat = () => {};\n")),Object(r.b)("p",null,"You can think of components as blueprints. Whatever a function component returns is rendered as a ",Object(r.b)("strong",{parentName:"p"},"React element.")," React elements let you describe what you want to see on the screen."),Object(r.b)("p",null,"Here the ",Object(r.b)("inlineCode",{parentName:"p"},"Cat")," component will render a ",Object(r.b)("inlineCode",{parentName:"p"},"<Text>")," element:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"const Cat = () => {\n  return <Text>Hello, I am your cat!</Text>;\n};\n\nexport default Cat;\n")),Object(r.b)("p",null,"You can export your function component with JavaScript\u2019s ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"},Object(r.b)("inlineCode",{parentName:"a"},"export default"))," for use throughout your app like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"const Cat = () => {\n  return <Text>Hello, I am your cat!</Text>;\n};\n\nexport default Cat;\n"))),Object(r.b)(i.a,{value:"classical",mdxType:"TabItem"},Object(r.b)("p",null,"Class components tend to be a bit more verbose than function components."),Object(r.b)("div",{className:"snack-player","data-snack-name":"Your Cat","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Text%20%7D%20from%20'react-native'%3B%0A%0Aclass%20Cat%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CText%3EHello%2C%20I%20am%20your%20cat!%3C%2FText%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aexport%20default%20Cat%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("p",null,"You additionally import ",Object(r.b)("inlineCode",{parentName:"p"},"Component")," from React:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react';\n")),Object(r.b)("p",null,"Your component starts as a class extending ",Object(r.b)("inlineCode",{parentName:"p"},"Component")," instead of as a function:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"class Cat extends Component {}\n")),Object(r.b)("p",null,"Class components have a ",Object(r.b)("inlineCode",{parentName:"p"},"render()")," function. Whatever is returned inside it is rendered as a React element:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"class Cat extends Component {\n  render() {\n    return <Text>Hello, I am your cat!</Text>;\n  }\n}\n")),Object(r.b)("p",null,"And as with function components, you can export your class component:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"class Cat extends Component {\n  render() {\n    return <Text>Hello, I am your cat!</Text>;\n  }\n}\n\nexport default Cat;\n")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This is one of many ways to export your component. This kind of export works well with the Snack Player. However, depending on your app\u2019s file structure, you might need to use a different convention. This ",Object(r.b)("a",{parentName:"p",href:"https://medium.com/dailyjs/javascript-module-cheatsheet-7bd474f1d829"},"handy cheatsheet on JavaScript imports and exports")," can help.")),Object(r.b)("p",null,"Now take a closer look at that ",Object(r.b)("inlineCode",{parentName:"p"},"return")," statement. ",Object(r.b)("inlineCode",{parentName:"p"},"<Text>Hello, I am your cat!</Text>")," is using a kind of JavaScript syntax that makes writing elements convenient: JSX."),Object(r.b)("h2",{id:"jsx"},"JSX"),Object(r.b)("p",null,"React and React Native use ",Object(r.b)("strong",{parentName:"p"},"JSX,")," a syntax that lets you write elements inside JavaScript like so: ",Object(r.b)("inlineCode",{parentName:"p"},"<Text>Hello, I am your cat!</Text>"),". The React docs have ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/jsx-in-depth.html"},"a comprehensive guide to JSX")," you can reference to learn even more. Because JSX is JavaScript, you can use variables inside it. Here you are declaring a name for the cat, ",Object(r.b)("inlineCode",{parentName:"p"},"name"),", and embedding it with curly braces inside ",Object(r.b)("inlineCode",{parentName:"p"},"<Text>"),"."),Object(r.b)("div",{className:"snack-player","data-snack-name":"Curly Braces","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%20%7D%20from%20'react-native'%3B%0A%0Aconst%20Cat%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20name%20%3D%20%22Maru%22%3B%0A%20%20return%20(%0A%20%20%20%20%3CText%3EHello%2C%20I%20am%20%7Bname%7D!%3C%2FText%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20Cat%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("p",null,"Any JavaScript expression will work between curly braces, including function calls like ",Object(r.b)("inlineCode",{parentName:"p"},'{getFullName("Rum", "Tum", "Tugger")}'),":"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Curly Braces","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%20%7D%20from%20'react-native'%3B%0A%0Aconst%20getFullName%20%3D%20(firstName%2C%20secondName%2C%20thirdName)%20%3D%3E%20%7B%0A%20%20return%20firstName%20%2B%20%22%20%22%20%2B%20secondName%20%2B%20%22%20%22%20%2B%20thirdName%3B%0A%7D%0A%0Aconst%20Cat%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20Hello%2C%20I%20am%20%7BgetFullName(%22Rum%22%2C%20%22Tum%22%2C%20%22Tugger%22)%7D!%0A%20%20%20%20%3C%2FText%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20Cat%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("p",null,"You can think of curly braces as creating a portal into JS functionality in your JSX!"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Because JSX is included in the React library, it won\u2019t work if you don\u2019t have ",Object(r.b)("inlineCode",{parentName:"p"},"import React from 'react'")," at the top of your file!")),Object(r.b)("h2",{id:"custom-components"},"Custom Components"),Object(r.b)("p",null,"You\u2019ve already met ",Object(r.b)("a",{parentName:"p",href:"intro-react-native-components"},"React Native\u2019s Core Components"),". React lets you nest these components inside each other to create new components. These nestable, reusable components are at the heart of the React paradigm."),Object(r.b)("p",null,"For example, you can nest ",Object(r.b)("a",{parentName:"p",href:"text"},Object(r.b)("inlineCode",{parentName:"a"},"Text"))," and ",Object(r.b)("a",{parentName:"p",href:"textinput"},Object(r.b)("inlineCode",{parentName:"a"},"TextInput"))," inside a ",Object(r.b)("a",{parentName:"p",href:"view"},Object(r.b)("inlineCode",{parentName:"a"},"View"))," below, and React Native will render them together:"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Custom Components","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20TextInput%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20Cat%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CText%3EHello%2C%20I%20am...%3C%2FText%3E%0A%20%20%20%20%20%20%3CTextInput%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20height%3A%2040%2C%0A%20%20%20%20%20%20%20%20%20%20borderColor%3A%20'gray'%2C%0A%20%20%20%20%20%20%20%20%20%20borderWidth%3A%201%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20defaultValue%3D%22Name%20me!%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20Cat%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)(s.a,{groupId:"guide",defaultValue:"web",values:c.a.getDevNotesTabs(["android","web"]),mdxType:"Tabs"},Object(r.b)(i.a,{value:"web",mdxType:"TabItem"},Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you\u2019re familiar with web development, ",Object(r.b)("inlineCode",{parentName:"p"},"<View>")," and ",Object(r.b)("inlineCode",{parentName:"p"},"<Text>")," might remind you of HTML! You can think of them as the ",Object(r.b)("inlineCode",{parentName:"p"},"<div>")," and ",Object(r.b)("inlineCode",{parentName:"p"},"<p>")," tags of application development."))),Object(r.b)(i.a,{value:"android",mdxType:"TabItem"},Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"On Android, you usually put your views inside ",Object(r.b)("inlineCode",{parentName:"p"},"LinearLayout"),", ",Object(r.b)("inlineCode",{parentName:"p"},"FrameLayout"),", ",Object(r.b)("inlineCode",{parentName:"p"},"RelativeLayout"),", etc. to define how the view\u2019s children will be arranged on the screen. In React Native, ",Object(r.b)("inlineCode",{parentName:"p"},"View")," uses Flexbox for its children\u2019s layout. You can learn more in ",Object(r.b)("a",{parentName:"p",href:"flexbox"},"our guide to layout with Flexbox"),".")))),Object(r.b)("p",null,"You can render this component multiple times and multiple places without repeating your code by using ",Object(r.b)("inlineCode",{parentName:"p"},"<Cat>"),":"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Multiple Components","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20TextInput%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20Cat%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CText%3EI%20am%20also%20a%20cat!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20Cafe%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CText%3EWelcome!%3C%2FText%3E%0A%20%20%20%20%20%20%3CCat%20%2F%3E%0A%20%20%20%20%20%20%3CCat%20%2F%3E%0A%20%20%20%20%20%20%3CCat%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20Cafe%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("p",null,"Any component that renders other components is a ",Object(r.b)("strong",{parentName:"p"},"parent component.")," Here, ",Object(r.b)("inlineCode",{parentName:"p"},"Cafe")," is the parent component and each ",Object(r.b)("inlineCode",{parentName:"p"},"Cat")," is a ",Object(r.b)("strong",{parentName:"p"},"child component.")),Object(r.b)("p",null,"You can put as many cats in your cafe as you like. Each ",Object(r.b)("inlineCode",{parentName:"p"},"<Cat>")," renders a unique element\u2014which you can customize with props."),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Props")," is short for \u201cproperties.\u201d Props let you customize React components. For example, here you pass each ",Object(r.b)("inlineCode",{parentName:"p"},"<Cat>")," a different ",Object(r.b)("inlineCode",{parentName:"p"},"name")," for ",Object(r.b)("inlineCode",{parentName:"p"},"Cat")," to render:"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Multiple Props","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20Cat%20%3D%20(props)%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CText%3EHello%2C%20I%20am%20%7Bprops.name%7D!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20Cafe%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CCat%20name%3D%22Maru%22%20%2F%3E%0A%20%20%20%20%20%20%3CCat%20name%3D%22Jellylorum%22%20%2F%3E%0A%20%20%20%20%20%20%3CCat%20name%3D%22Spot%22%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20Cafe%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("p",null,"Most of React Native\u2019s Core Components can be customized with props, too. For example, when using ",Object(r.b)("a",{parentName:"p",href:"image"},Object(r.b)("inlineCode",{parentName:"a"},"Image")),", you pass it a prop named ",Object(r.b)("a",{parentName:"p",href:"image#source"},Object(r.b)("inlineCode",{parentName:"a"},"source"))," to define what image it shows:"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Props","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%2C%20Image%20%7D%20from%20'react-native'%3B%0A%0Aconst%20CatApp%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fdocs%2Fassets%2Fp_cat1.png%22%7D%7D%0A%20%20%20%20%20%20%20%20style%3D%7B%7Bwidth%3A%20200%2C%20height%3A%20200%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%3EHello%2C%20I%20am%20your%20cat!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20CatApp%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Image")," has ",Object(r.b)("a",{parentName:"p",href:"image#props"},"many different props"),", including ",Object(r.b)("a",{parentName:"p",href:"image#style"},Object(r.b)("inlineCode",{parentName:"a"},"style")),", which accepts a JS object of design and layout related property-value pairs."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Notice the double curly braces ",Object(r.b)("inlineCode",{parentName:"p"},"{{ }}")," surrounding ",Object(r.b)("inlineCode",{parentName:"p"},"style"),"\u2018s width and height. In JSX, JavaScript values are referenced with ",Object(r.b)("inlineCode",{parentName:"p"},"{}"),". This is handy if you are passing something other than a string as props, like an array or number: ",Object(r.b)("inlineCode",{parentName:"p"},'<Cat food={["fish", "kibble"]} age={2} />'),". However, JS objects are ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"also"))," denoted with curly braces: ",Object(r.b)("inlineCode",{parentName:"p"},"{width: 200, height: 200}"),". Therefore, to pass a JS object in JSX, you must wrap the object in ",Object(r.b)("strong",{parentName:"p"},"another pair")," of curly braces: ",Object(r.b)("inlineCode",{parentName:"p"},"{{width: 200, height: 200}}"))),Object(r.b)("p",null,"You can build many things with props and the Core Components ",Object(r.b)("a",{parentName:"p",href:"text"},Object(r.b)("inlineCode",{parentName:"a"},"Text")),", ",Object(r.b)("a",{parentName:"p",href:"image"},Object(r.b)("inlineCode",{parentName:"a"},"Image")),", and ",Object(r.b)("a",{parentName:"p",href:"view"},Object(r.b)("inlineCode",{parentName:"a"},"View")),"! But to build something interactive, you\u2019ll need state."),Object(r.b)("h2",{id:"state"},"State"),Object(r.b)("p",null,"While you can think of props as arguments you use to configure how components render, ",Object(r.b)("strong",{parentName:"p"},"state")," is like a component\u2019s personal data storage. State is useful for handling data that changes over time or that comes from user interaction. State gives your components memory!"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"As a general rule, use props to configure a component when it renders. Use state to keep track of any component data that you expect to change over time.")),Object(r.b)("p",null,"The following example takes place in a cat cafe where two hungry cats are waiting to be fed. Their hunger, which we expect to change over time (unlike their names), is stored as state. To feed the cats, press their buttons\u2014which will update their state."),Object(r.b)(s.a,{groupId:"syntax",defaultValue:c.a.defaultSyntax,values:c.a.syntax,mdxType:"Tabs"},Object(r.b)(i.a,{value:"functional",mdxType:"TabItem"},Object(r.b)("p",null,"You can add state to a component by calling ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-state.html"},"React\u2019s ",Object(r.b)("inlineCode",{parentName:"a"},"useState")," Hook"),". A Hook is a kind of function that lets you \u201chook into\u201d React features. For example, ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," is a Hook that lets you add state to function components. You can learn more about ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"other kinds of Hooks in the React documentation.")),Object(r.b)("div",{className:"snack-player","data-snack-name":"State","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20Cat%20%3D%20(props)%20%3D%3E%20%7B%0A%20%20const%20%5BisHungry%2C%20setIsHungry%5D%20%3D%20useState(true)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20I%20am%20%7Bprops.name%7D%2C%20and%20I%20am%20%7BisHungry%20%3F%20%22hungry%22%20%3A%20%22full%22%7D!%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setIsHungry(false)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20disabled%3D%7B!isHungry%7D%0A%20%20%20%20%20%20%20%20title%3D%7BisHungry%20%3F%20%22Pour%20me%20some%20milk%2C%20please!%22%20%3A%20%22Thank%20you!%22%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20Cafe%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CCat%20name%3D%22Munkustrap%22%20%2F%3E%0A%20%20%20%20%20%20%3CCat%20name%3D%22Spot%22%20%2F%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20Cafe%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("p",null,"First, you will want to import ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," from React like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n")),Object(r.b)("p",null,"Then you declare the component\u2019s state by calling ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," inside its function. In this example, ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," creates an ",Object(r.b)("inlineCode",{parentName:"p"},"isHungry")," state variable:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"const Cat = (props) => {\n  const [isHungry, setIsHungry] = useState(true);\n  // ...\n};\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can use ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," to track any kind of data: strings, numbers, Booleans, arrays, objects. For example, you can track the number of times a cat has been petted with ",Object(r.b)("inlineCode",{parentName:"p"},"const [timesPetted, setTimesPetted] = useState(0)"),"!")),Object(r.b)("p",null,"Calling ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," does two things:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"it creates a \u201cstate variable\u201d with an initial value\u2014in this case the state variable is ",Object(r.b)("inlineCode",{parentName:"li"},"isHungry")," and its initial value is ",Object(r.b)("inlineCode",{parentName:"li"},"true")),Object(r.b)("li",{parentName:"ul"},"it creates a function to set that state variable\u2019s value\u2014",Object(r.b)("inlineCode",{parentName:"li"},"setIsHungry"))),Object(r.b)("p",null,"It doesn\u2019t matter what names you use. But it can be handy to think of the pattern as ",Object(r.b)("inlineCode",{parentName:"p"},"[<getter>, <setter>] = useState(<initialValue>)"),"."),Object(r.b)("p",null,"Next you add the ",Object(r.b)("a",{parentName:"p",href:"button"},Object(r.b)("inlineCode",{parentName:"a"},"Button"))," Core Component and give it an ",Object(r.b)("inlineCode",{parentName:"p"},"onPress")," prop:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"<Button\n  onPress={() => {\n    setIsHungry(false);\n  }}\n  //..\n/>\n")),Object(r.b)("p",null,"Now, when someone presses the button, ",Object(r.b)("inlineCode",{parentName:"p"},"onPress")," will fire, calling the ",Object(r.b)("inlineCode",{parentName:"p"},"setIsHungry(false)"),". This sets the state variable ",Object(r.b)("inlineCode",{parentName:"p"},"isHungry")," to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),". When ",Object(r.b)("inlineCode",{parentName:"p"},"isHungry")," is false, the ",Object(r.b)("inlineCode",{parentName:"p"},"Button"),"\u2019s ",Object(r.b)("inlineCode",{parentName:"p"},"disabled")," prop is set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," and its ",Object(r.b)("inlineCode",{parentName:"p"},"title")," also changes:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"<Button\n  //..\n  disabled={!isHungry}\n  title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}\n/>\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You might\u2019ve noticed that although ",Object(r.b)("inlineCode",{parentName:"p"},"isHungry")," is a ",Object(r.b)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/const"},"const"),", it is seemingly reassignable! What is happening is when a state-setting function like ",Object(r.b)("inlineCode",{parentName:"p"},"setIsHungry")," is called, its component will re-render. In this case the ",Object(r.b)("inlineCode",{parentName:"p"},"Cat")," function will run again\u2014and this time, ",Object(r.b)("inlineCode",{parentName:"p"},"useState")," will give us the next value of ",Object(r.b)("inlineCode",{parentName:"p"},"isHungry"),".")),Object(r.b)("p",null,"Finally, put your cats inside a ",Object(r.b)("inlineCode",{parentName:"p"},"Cafe")," component:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'const Cafe = () => {\n  return (\n    <>\n      <Cat name="Munkustrap" />\n      <Cat name="Spot" />\n    </>\n  );\n};\n'))),Object(r.b)(i.a,{value:"classical",mdxType:"TabItem"},Object(r.b)("p",null,"The older class components approach is a little different when it comes to state."),Object(r.b)("div",{className:"snack-player","data-snack-name":"State and Class Components","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20Cat%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%20isHungry%3A%20true%20%7D%3B%0A%0A%20%20render(props)%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%20%20I%20am%20%7Bthis.props.name%7D%2C%20and%20I%20am%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.state.isHungry%20%3F%20%22%20hungry%22%20%3A%20%22%20full%22%7D!%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.setState(%7B%20isHungry%3A%20false%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20disabled%3D%7B!this.state.isHungry%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.state.isHungry%20%3F%20%22Pour%20me%20some%20milk%2C%20please!%22%20%3A%20%22Thank%20you!%22%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aclass%20Cafe%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%20%20%3CCat%20name%3D%22Munkustrap%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CCat%20name%3D%22Spot%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2F%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aexport%20default%20%20Cafe%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("p",null,"As always with class components, you must import the ",Object(r.b)("inlineCode",{parentName:"p"},"Component")," class from React:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react';\n")),Object(r.b)("p",null,"In class components, state is stored in a state object:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"export class Cat extends Component {\n  state = { isHungry: true };\n  //..\n}\n")),Object(r.b)("p",null,"As with accessing props with ",Object(r.b)("inlineCode",{parentName:"p"},"this.props"),", you access this object inside your component with ",Object(r.b)("inlineCode",{parentName:"p"},"this.state"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"<Text>\n  I am {this.props.name}, and I am\n  {this.state.isHungry ? ' hungry' : ' full'}!\n</Text>\n")),Object(r.b)("p",null,"And you set individual values inside the state object by passing an object with the key value pair for state and its new value to ",Object(r.b)("inlineCode",{parentName:"p"},"this.setState()"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"<Button\n  onPress={() => {\n    this.setState({ isHungry: false });\n  }}\n  // ..\n</Button>\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Do not change your component's state directly by assigning it a new value with ",Object(r.b)("inlineCode",{parentName:"p"},"this.state.hunger = false"),". Calling ",Object(r.b)("inlineCode",{parentName:"p"},"this.setState()")," allows React to track changes made to state that trigger rerendering. Setting state directly can break your app's reactivity!")),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"this.state.isHungry")," is false, the ",Object(r.b)("inlineCode",{parentName:"p"},"Button"),"\u2019s ",Object(r.b)("inlineCode",{parentName:"p"},"disabled")," prop is set to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," and its ",Object(r.b)("inlineCode",{parentName:"p"},"title")," also changes:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"<Button\n  // ..\n  disabled={!this.state.isHungry}\n  title={\n    this.state.isHungry\n      ? 'Pour me some milk, please!'\n      : 'Thank you!'\n  }\n/>\n")),Object(r.b)("p",null,"Finally, put your cats inside a ",Object(r.b)("inlineCode",{parentName:"p"},"Cafe")," component:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'class Cafe extends Component {\n  render() {\n    return (\n      <>\n        <Cat name="Munkustrap" />\n        <Cat name="Spot" />\n      </>\n    );\n  }\n}\n\nexport default Cafe;\n')))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"See the ",Object(r.b)("inlineCode",{parentName:"p"},"<>")," and ",Object(r.b)("inlineCode",{parentName:"p"},"</>")," above? These bits of JSX are ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/fragments.html"},"fragments"),". Adjacent JSX elements must be wrapped in an enclosing tag. Fragments let you do that without nesting an extra, unnecessary wrapping element like ",Object(r.b)("inlineCode",{parentName:"p"},"View"),".")),Object(r.b)("hr",null),Object(r.b)("p",null,"Now that you\u2019ve covered both React and React Native\u2019s Core Components, let\u2019s dive deeper on some of these core components by looking at ",Object(r.b)("a",{parentName:"p",href:"handling-text-input"},"handling ",Object(r.b)("inlineCode",{parentName:"a"},"<TextInput>")),"."))}d.isMDXComponent=!0},705:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||r;return a?o.a.createElement(m,i(i({ref:t},l),{},{components:a})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},706:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},707:function(e,t,a){"use strict";var n=a(0),o=a(708);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},708:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o},709:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(707),s=a(706),i=a(69),c=a.n(i);var l=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,b=e.values,u=e.groupId,d=e.className,m=Object(r.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,j=Object(n.useState)(i),C=j[0],O=j[1],g=n.Children.toArray(e.children),y=[];if(null!=u){var N=h[u];null!=N&&N!==C&&b.some((function(e){return e.value===N}))&&O(N)}var A=function(e){var t=e.target,a=y.indexOf(t),n=g[a].props.value;O(n),null!=u&&(f(u,n),setTimeout((function(){var e,a,n,o,r,s,i,l;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,r=e.right,s=window,i=s.innerHeight,l=s.innerWidth,a>=0&&r<=l&&o<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},v=function(e){var t,a;switch(e.keyCode){case p:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case l:var o=y.indexOf(e.target)-1;a=y[o]||y[y.length-1]}null===(t=a)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},d)},b.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":C===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:v,onFocus:A,onClick:A},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}},710:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},711:function(e,t,a){"use strict";var n=a(8),o=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),s=o?"ios":"android",i=o?"macos":r?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:s,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}}}]);