(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{412:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(4),i=a(10),r=(a(0),a(710)),o={title:"Built with React Native - The Build.com app",author:"Garrett McCullough",authorTitle:"Senior Mobile Engineer",authorURL:"https://twitter.com/gwmccull",authorImageURL:"https://pbs.twimg.com/profile_images/955503100785172486/UrMKkQXc_400x400.jpg",authorTwitter:"gwmccull",tags:["showcase"]},l={permalink:"/blog/2018/04/09/build-com-app",source:"@site/blog/2018-04-09-build-com-app.md",description:"Build.com, headquartered in Chico, California, is one of the largest online retailers for home improvement items. The team has had a strong web-centric business for 18 years and began thinking about a mobile App in 2015. Building unique Android and iOS apps wasn\u2019t practical due to our small team and limited native experience. Instead, we decided to take a risk on the very new React Native framework. Our initial commit was on August 12, 2015 using React Native v0.8.0! We were live in both App Stores on October 15, 2016. Over the last two years, we\u2019ve continued to upgrade and expand the app. We are currently on React Native version 0.53.0.",date:"2018-04-09T00:00:00.000Z",formattedDate:"April 9, 2018",tags:[{label:"showcase",permalink:"/blog/tags/showcase"}],title:"Built with React Native - The Build.com app",readingTime:4.97,truncated:!1,prevItem:{title:"Using TypeScript with React Native",permalink:"/blog/2018/05/07/using-typescript-with-react-native"},nextItem:{title:"Building <InputAccessoryView> For React Native",permalink:"/blog/2018/03/22/building-input-accessory-view-for-react-native"}},c=[{value:"Features",id:"features",children:[]},{value:"Our Development Workflow",id:"our-development-workflow",children:[]},{value:"Libraries Used in the App",id:"libraries-used-in-the-app",children:[]},{value:"Open Source Contributions",id:"open-source-contributions",children:[]},{value:"Our Journey",id:"our-journey",children:[{value:"Navigation Libraries",id:"navigation-libraries",children:[]},{value:"Bridge Modules",id:"bridge-modules",children:[]}]},{value:"Looking Forward",id:"looking-forward",children:[]}],s={toc:c};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.build.com/"},"Build.com"),", headquartered in Chico, California, is one of the largest online retailers for home improvement items. The team has had a strong web-centric business for 18 years and began thinking about a mobile App in 2015. Building unique Android and iOS apps wasn\u2019t practical due to our small team and limited native experience. Instead, we decided to take a risk on the very new React Native framework. Our initial commit was on August 12, 2015 using React Native v0.8.0! We were live in both App Stores on October 15, 2016. Over the last two years, we\u2019ve continued to upgrade and expand the app. We are currently on React Native version 0.53.0."),Object(r.b)("p",null,"You can check out the app at ",Object(r.b)("a",{parentName:"p",href:"https://www.build.com/app"},"https://www.build.com/app"),"."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/blog/assets/build-com-blog-image.jpg"})),Object(r.b)("h2",{id:"features"},"Features"),Object(r.b)("p",null,"Our app is full featured and includes everything that you\u2019d expect from an e-commerce app: product listings, search and sorting, the ability to configure complex products, favorites, etc. We accept standard credit card payment methods as well as PayPal, and Apple Pay for our iOS users."),Object(r.b)("p",null,"A few standout features you might not expect include:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"3D models available for around 40 products with 90 finishes"),Object(r.b)("li",{parentName:"ol"},"Augmented Reality (AR) to allow the user to see how lights and faucets will look in their home at 98% size accuracy. The Build.com React Native App is featured in the Apple App store for AR Shopping! AR is now available for Android and iOS!"),Object(r.b)("li",{parentName:"ol"},"Collaborative project management features that allow people to put together shopping lists for the different phases of their project and collaborate around selection")),Object(r.b)("p",null,"We\u2019re working on many new and exciting features that will continue to improve our app experience including the next phase of Immersive Shopping with AR."),Object(r.b)("h2",{id:"our-development-workflow"},"Our Development Workflow"),Object(r.b)("p",null,"Build.com allows each dev to choose the tools that best suit them."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"IDEs include Atom, IntelliJ, VS Code, Sublime, Eclipse, etc."),Object(r.b)("li",{parentName:"ul"},"For Unit testing, developers are responsible for creating Jest unit tests for any new components and we\u2019re working to increase the coverage of older parts of the app using ",Object(r.b)("inlineCode",{parentName:"li"},"jest-coverage-ratchet"),"."),Object(r.b)("li",{parentName:"ul"},"We use Jenkins to build out our beta and release candidates. This process works well for us but still requires significant work to create the release notes and other artifacts."),Object(r.b)("li",{parentName:"ul"},"Integration Testing include a shared pool of testers that work across desktop, mobile and web. Our automation engineer is building out our suite of automated integration tests using Java and Appium."),Object(r.b)("li",{parentName:"ul"},"Other parts of the workflow include a detailed eslint configuration, custom rules that enforce properties needed for testing, and pre-push hooks that block offending changes.")),Object(r.b)("h2",{id:"libraries-used-in-the-app"},"Libraries Used in the App"),Object(r.b)("p",null,"The Build.com app relies on a number of common open source libraries including: Redux, Moment, Numeral, Enzyme and a bunch of React Native bridge modules. We also use a number of forked open source libraries; forked either because they were abandoned or because we needed custom features. A quick count shows around 115 JavaScript and native dependencies. We would like to explore tools that remove unused libraries."),Object(r.b)("p",null,"We're in the process of adding static typing via TypeScript and looking into optional chaining. These features could help us with solving a couple classes of bugs that we still see:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Data that is the wrong type"),Object(r.b)("li",{parentName:"ul"},"Data that is undefined because an object didn\u2019t contain what we expected")),Object(r.b)("h2",{id:"open-source-contributions"},"Open Source Contributions"),Object(r.b)("p",null,"Since we rely so heavily on open source, our team is committed to contributing back to the community. Build.com allows the team to open source libraries that we've built and encourages us contribute back to the libraries that we use."),Object(r.b)("p",null,"We\u2019ve released and maintained a number of React Native libraries:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"react-native-polyfill")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"react-native-simple-store")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"react-native-contact-picker"))),Object(r.b)("p",null,"We have also contributed to a long list of libraries including: React and React Native, ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-schemes-manager"),", ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-swipeable"),", ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-gallery"),", ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-view-transformer"),", ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-navigation"),"."),Object(r.b)("h2",{id:"our-journey"},"Our Journey"),Object(r.b)("p",null,"We\u2019ve seen a lot of growth in React Native and the ecosystem in the past couple years. Early on, it seemed that every version of React Native would fix some bugs but introduce several more. For example, Remote JS Debugging was broken on Android for several months. Thankfully, things became much more stable in 2017."),Object(r.b)("h3",{id:"navigation-libraries"},"Navigation Libraries"),Object(r.b)("p",null,"One of our big recurring challenges has been with navigation libraries. For a long time, we were using Expo\u2019s ex-nav library. It worked well for us but it was eventually deprecated. However, we were in heavy feature development at the time so taking time to change out a navigation library wasn\u2019t feasible. That meant we had to fork the library and patch it to support React 16 and the iPhone X. Eventually, we were able to migrate to ",Object(r.b)("a",{parentName:"p",href:"https://github.com/wix/react-native-navigation"},Object(r.b)("inlineCode",{parentName:"a"},"react-native-navigation"))," and hopefully that will see continued support."),Object(r.b)("h3",{id:"bridge-modules"},"Bridge Modules"),Object(r.b)("p",null,"Another big challenge has been with bridge modules. When we first started, a lot of critical bridges were missing. One of my teammates wrote ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-contact-picker")," because we needed access to the Android contact picker in our app. We\u2019ve also seen a lot of bridges that were broken by changes within React Native. For example, there was a breaking change within React Native v40 and when we upgraded our app, I had to submit PRs to fix 3 or 4 libraries that had not yet been updated."),Object(r.b)("h2",{id:"looking-forward"},"Looking Forward"),Object(r.b)("p",null,"As React Native continues to grow, our wishlist to our community include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Stabilize and improve the navigation libraries"),Object(r.b)("li",{parentName:"ul"},"Maintain support for libraries in the React Native ecosystem"),Object(r.b)("li",{parentName:"ul"},"Improve the experience for adding native libraries and bridge modules to a project")),Object(r.b)("p",null,"Companies and individuals in the React Native community have been great about volunteering their time and effort to improve the tools that we all use. If you haven\u2019t gotten involved in open source, I hope you\u2019ll take a look at improving the code or documentation for some of the libraries that you use. There are a lot of articles to help you get started and it may be a lot easier than you think!"))}u.isMDXComponent=!0},710:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||r;return a?i.a.createElement(m,l(l({ref:t},s),{},{components:a})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);