(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{248:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return h}));var n=a(4),i=a(10),o=(a(0),a(730)),r={title:"Implementing Twitter\u2019s App Loading Animation in React Native",author:"Eli White",authorTitle:"Software Engineer at Facebook",authorURL:"https://github.com/TheSavior",authorImageURL:"https://avatars2.githubusercontent.com/u/249164?s=460&v=4",authorTwitter:"eli_white",tags:["engineering"]},l={permalink:"/blog/2018/01/18/implementing-twitters-app-loading-animation-in-react-native",source:"@site/blog/2018-01-18-implementing-twitters-app-loading-animation-in-react-native.md",description:"Twitter\u2019s iOS app has a loading animation I quite enjoy.",date:"2018-01-18T00:00:00.000Z",formattedDate:"January 18, 2018",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],title:"Implementing Twitter\u2019s App Loading Animation in React Native",readingTime:10.895,truncated:!1,prevItem:{title:"risk of foreign ico activities",permalink:"/blog/2018/01/26/risk-of-foreign-ico-activities"},nextItem:{title:"risk of disguised ico activities",permalink:"/blog/2018/01/12/risk-of-disguised-ico-activities"}},s=[{value:"The right way",id:"the-right-way",children:[]},{value:"Now, for the React Native",id:"now-for-the-react-native",children:[]},{value:"Now for the Animated part",id:"now-for-the-animated-part",children:[]},{value:"Breaking down our animation",id:"breaking-down-our-animation",children:[]},{value:"And now, in code.",id:"and-now-in-code",children:[]},{value:"But wait, mine doesn\u2019t work!",id:"but-wait-mine-doesnt-work",children:[]},{value:"More Reading / Extra Credit",id:"more-reading--extra-credit",children:[]}],c={toc:s};function h(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Twitter\u2019s iOS app has a loading animation I quite enjoy."),Object(o.b)("img",{src:"/blog/assets/loading-screen-01.gif",style:{float:"left",paddingRight:80,paddingBottom:20}}),Object(o.b)("p",null,"Once the app is ready, the Twitter logo delightfully expands, revealing the app."),Object(o.b)("p",null,"I wanted to figure out how to recreate this loading animation with React Native."),Object(o.b)("hr",{style:{clear:"both",marginBottom:40,width:80}}),Object(o.b)("p",null,"To understand ",Object(o.b)("em",{parentName:"p"},"how")," to build it, I first had to understand the difference pieces of the loading animation. The easiest way to see the subtlety is to slow it down."),Object(o.b)("img",{src:"/blog/assets/loading-screen-02.gif",style:{marginTop:20,float:"left",paddingRight:80,paddingBottom:20}}),Object(o.b)("p",null,"There are a few major pieces in this that we will need to figure out how to build."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Scaling the bird."),Object(o.b)("li",{parentName:"ol"},"As the bird grows, showing the app underneath"),Object(o.b)("li",{parentName:"ol"},"Scaling the app down slightly at the end")),Object(o.b)("p",null,"It took me quite a while to figure out how to make this animation."),Object(o.b)("p",null,"I started with an ",Object(o.b)("em",{parentName:"p"},"incorrect")," assumption that the blue background and Twitter bird were a layer on ",Object(o.b)("em",{parentName:"p"},"top")," of the app and that as the bird grew, it became transparent which revealed the app underneath. This approach doesn\u2019t work because the Twitter bird becoming transparent would show the blue layer, not the app underneath!"),Object(o.b)("p",null,"Luckily for you, dear reader, you don\u2019t have to go through the same frustration I did. You get this nice tutorial skipping to the good stuff!"),Object(o.b)("hr",{style:{clear:"both",marginBottom:40,width:80}}),Object(o.b)("h2",{id:"the-right-way"},"The right way"),Object(o.b)("p",null,"Before we get to code, it is important to understand how to break this down. To help visualize this effect, I recreated it in ",Object(o.b)("a",{parentName:"p",href:"https://codepen.io/TheSavior/pen/NXNoJM"},"CodePen")," (embedded in a few paragraphs) so you can interactively see the different layers."),Object(o.b)("img",{src:"/blog/assets/loading-screen-03.png",style:{float:"left",paddingRight:80,paddingBottom:20}}),Object(o.b)("p",null,"There are three main layers to this effect. The first is the blue background layer. Even though this seems to appear on top of the app, it is actually in the back."),Object(o.b)("p",null,"We then have a plain white layer. And then lastly, in the very front, is our app."),Object(o.b)("hr",{style:{clear:"both",marginBottom:40,width:80}}),Object(o.b)("img",{src:"/blog/assets/loading-screen-04.png",style:{float:"left",paddingRight:80,paddingBottom:20}}),Object(o.b)("p",null,"The main trick to this animation is using the Twitter logo as a ",Object(o.b)("inlineCode",{parentName:"p"},"mask")," and masking both the app, and the white layer. I won\u2019t go too deep on the details of masking, there are ",Object(o.b)("a",{parentName:"p",href:"https://www.html5rocks.com/en/tutorials/masking/adobe/"},"plenty")," of ",Object(o.b)("a",{parentName:"p",href:"https://designshack.net/articles/graphics/a-complete-beginners-guide-to-masking-in-photoshop/"},"resources")," ",Object(o.b)("a",{parentName:"p",href:"https://www.sketchapp.com/docs/shapes/masking/"},"online")," for that."),Object(o.b)("p",null,"The basics of masking in this context are having images where opaque pixels of the mask show the content they are masking whereas transparent pixels of the mask hide the content they are masking."),Object(o.b)("p",null,"We use the Twitter logo as a mask, and having it mask two layers; the solid white layer, and the app layer."),Object(o.b)("p",null,"To reveal the app, we scale the mask up until it is larger than the entire screen."),Object(o.b)("p",null,"While the mask is scaling up, we fade in the opacity of the app layer, showing the app and hiding the solid white layer behind it. To finish the effect, we start the app layer at a scale > 1, and scale it down to 1 as the animation is ending. We then hide the non-app layers as they will never be seen again."),Object(o.b)("p",null,"They say a picture is worth 1,000 words. How many words is an interactive visualization worth? Click through the animation with the \u201cNext Step\u201d button. Showing the layers gives you a side view perspective. The grid is there to help visualize the transparent layers."),Object(o.b)("iframe",{height:"750",scrolling:"no",title:"Loading Screen Animation Steps",src:"//codepen.io/TheSavior/embed/NXNoJM/?height=265&theme-id=0&default-tab=result&embed-version=2",frameborder:"no",allowFullScreen:!0,className:"codepen"},"See the Pen"," ",Object(o.b)("a",{href:"https://codepen.io/TheSavior/pen/NXNoJM/"},"Loading Screen Animation Steps")," ","by Eli White (",Object(o.b)("a",{href:"https://codepen.io/TheSavior"},"@TheSavior"),") on"," ",Object(o.b)("a",{href:"https://codepen.io"},"CodePen"),"."),Object(o.b)("h2",{id:"now-for-the-react-native"},"Now, for the React Native"),Object(o.b)("p",null,"Alrighty. Now that we know what we are building and how the animation works, we can get down to the code \u2014 the reason you are really here."),Object(o.b)("p",null,"The main piece of this puzzle is ",Object(o.b)("a",{parentName:"p",href:"/docs/0.63/maskedviewios"},"MaskedViewIOS"),", a core React Native component."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import { MaskedViewIOS } from 'react-native';\n\n<MaskedViewIOS maskElement={<Text>Basic Mask</Text>}>\n  <View style={{ backgroundColor: 'blue' }} />\n</MaskedViewIOS>;\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"MaskedViewIOS")," takes props ",Object(o.b)("inlineCode",{parentName:"p"},"maskElement")," and ",Object(o.b)("inlineCode",{parentName:"p"},"children"),". The children are masked by the ",Object(o.b)("inlineCode",{parentName:"p"},"maskElement"),". Note that the mask doesn\u2019t need to be an image, it can be any arbitrary view. The behavior of the above example would be to render the blue view, but for it to be visible only where the words \u201cBasic Mask\u201d are from the ",Object(o.b)("inlineCode",{parentName:"p"},"maskElement"),". We just made complicated blue text."),Object(o.b)("p",null,"What we want to do is render our blue layer, and then on top render our masked app and white layers with the Twitter logo."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"{\n  fullScreenBlueLayer;\n}\n<MaskedViewIOS\n  style={{ flex: 1 }}\n  maskElement={\n    <View style={styles.centeredFullScreen}>\n      <Image source={twitterLogo} />\n    </View>\n  }>\n  {fullScreenWhiteLayer}\n  <View style={{ flex: 1 }}>\n    <MyApp />\n  </View>\n</MaskedViewIOS>;\n")),Object(o.b)("p",null,"This will give us the layers we see below."),Object(o.b)("img",{src:"/blog/assets/loading-screen-04.png",style:{marginLeft:"auto",marginRight:"auto",display:"block"}}),Object(o.b)("h2",{id:"now-for-the-animated-part"},"Now for the Animated part"),Object(o.b)("p",null,"We have all the pieces we need to make this work, the next step is animating them. To make this animation feel good, we will be utilizing React Native\u2019s ",Object(o.b)("a",{parentName:"p",href:"/docs/animated"},"Animated")," API."),Object(o.b)("p",null,"Animated lets us define our animations declaratively in JavaScript. By default, these animations run in JavaScript and tell the native layer what changes to make on every frame. Even though JavaScript will try to update the animation every frame, it will likely not be able to do that fast enough and will cause dropped frames (jank) to occur. Not what we want!"),Object(o.b)("p",null,"Animated has special behavior to allow you to get animations without this jank. Animated has a flag called ",Object(o.b)("inlineCode",{parentName:"p"},"useNativeDriver")," which sends your animation definition from JavaScript to native at the beginning of your animation, allowing the native side to process the updates to your animation without having to go back and forth to JavaScript every frame. The downside of ",Object(o.b)("inlineCode",{parentName:"p"},"useNativeDriver")," is you can only update a specific set of properties, mostly ",Object(o.b)("inlineCode",{parentName:"p"},"transform")," and ",Object(o.b)("inlineCode",{parentName:"p"},"opacity"),". You can\u2019t animate things like background color with ",Object(o.b)("inlineCode",{parentName:"p"},"useNativeDriver"),", at least not yet \u2014 we will add more over time, and of course you can always submit a PR for properties you need for your project, benefitting the whole community \ud83d\ude00."),Object(o.b)("p",null,"Since we want this animation to be smooth, we will work within these constraints. For a more in depth look at how ",Object(o.b)("inlineCode",{parentName:"p"},"useNativeDriver")," works under the hood, check out our ",Object(o.b)("a",{parentName:"p",href:"/blog/2017/02/14/using-native-driver-for-animated"},"blog post announcing it"),"."),Object(o.b)("h2",{id:"breaking-down-our-animation"},"Breaking down our animation"),Object(o.b)("p",null,"There are 4 components to our animation:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Enlarge the bird, revealing the app and the solid white layer"),Object(o.b)("li",{parentName:"ol"},"Fade in the app"),Object(o.b)("li",{parentName:"ol"},"Scale down the app"),Object(o.b)("li",{parentName:"ol"},"Hide the white layer and blue layer when it is done")),Object(o.b)("p",null,"With Animated, there are two main ways to define your animation. The first is by using ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.timing")," which lets you say exactly how long your animation will run for, along with an easing curve to smooth out the motion. The other approach is by using the physics based apis such as ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.spring"),". With ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.spring"),", you specify parameters like the amount of friction and tension in the spring, and let physics run your animation."),Object(o.b)("p",null,"We have multiple animations we want to be running at the same time which are all closely related to each other. For example, we want the app to start fading in while the mask is mid-reveal. Because these animations are closely related, we will use ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.timing")," with a single ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.Value"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Animated.Value")," is a wrapper around a native value that Animated uses to know the state of an animation. You typically want to only have one of these for a complete animation. Most components that use Animated will store the value in state."),Object(o.b)("p",null,"Since I\u2019m thinking about this animation as steps occurring at different points in time along the complete animation, we will start our ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.Value")," at 0, representing 0% complete, and end our value at 100, representing 100% complete."),Object(o.b)("p",null,"Our initial component state will be the following."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"state = {\n  loadingProgress: new Animated.Value(0)\n};\n")),Object(o.b)("p",null,"When we are ready to begin the animation, we tell Animated to animate this value to 100."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"Animated.timing(this.state.loadingProgress, {\n  toValue: 100,\n  duration: 1000,\n  useNativeDriver: true // This is important!\n}).start();\n")),Object(o.b)("p",null,"I then try to figure out a rough estimate of the different pieces of the animations and the values I want them to have at different stages of the overall animation. Below is a table of the different pieces of the animation, and what I think their values should be at different points as we progress through time."),Object(o.b)("p",null,Object(o.b)("img",{src:a(816).default})),Object(o.b)("p",null,"The Twitter bird mask should start at scale 1, and it gets smaller before it shoots up in size. So at 10% through the animation, it should have a scale value of .8 before shooting up to scale 70 at the end. Picking 70 was pretty arbitrary to be honest, it needed to be large enough that the bird fully revealed the screen and 60 wasn\u2019t big enough \ud83d\ude00. Something interesting about this part though is that the higher the number, the faster it will look like it is growing because it has to get there in the same amount of time. This number took some trial and error to make look good with this logo. Logos / devices of different sizes will require this end-scale to be different to ensure the entire screen is revealed."),Object(o.b)("p",null,"The app should stay opaque for a while, at least through the Twitter logo getting smaller. Based on the official animation, I want to start showing it when the bird is mid way through scaling it up and to fully reveal it pretty quickly. So at 15% we start showing it, and at 30% through the overall animation it is fully visible."),Object(o.b)("p",null,"The app scale starts at 1.1 and scales down to its regular scale by the end of the animation."),Object(o.b)("h2",{id:"and-now-in-code"},"And now, in code."),Object(o.b)("p",null,"What we essentially did above is map the values from the animation progress percentage to the values for the individual pieces. We do that with Animated using ",Object(o.b)("inlineCode",{parentName:"p"},".interpolate"),". We create 3 different style objects, one for each piece of the animation, using interpolated values based off of ",Object(o.b)("inlineCode",{parentName:"p"},"this.state.loadingProgress"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const loadingProgress = this.state.loadingProgress;\n\nconst opacityClearToVisible = {\n  opacity: loadingProgress.interpolate({\n    inputRange: [0, 15, 30],\n    outputRange: [0, 0, 1],\n    extrapolate: 'clamp'\n    // clamp means when the input is 30-100, output should stay at 1\n  })\n};\n\nconst imageScale = {\n  transform: [\n    {\n      scale: loadingProgress.interpolate({\n        inputRange: [0, 10, 100],\n        outputRange: [1, 0.8, 70]\n      })\n    }\n  ]\n};\n\nconst appScale = {\n  transform: [\n    {\n      scale: loadingProgress.interpolate({\n        inputRange: [0, 100],\n        outputRange: [1.1, 1]\n      })\n    }\n  ]\n};\n")),Object(o.b)("p",null,"Now that we have these style objects, we can use them when rendering the snippet of the view from earlier in the post. Note that only ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.View"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.Text"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.Image")," are able to use style objects that use ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.Value"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const fullScreenBlueLayer = (\n  <View style={styles.fullScreenBlueLayer} />\n);\nconst fullScreenWhiteLayer = (\n  <View style={styles.fullScreenWhiteLayer} />\n);\n\nreturn (\n  <View style={styles.fullScreen}>\n    {fullScreenBlueLayer}\n    <MaskedViewIOS\n      style={{ flex: 1 }}\n      maskElement={\n        <View style={styles.centeredFullScreen}>\n          <Animated.Image\n            style={[styles.maskImageStyle, imageScale]}\n            source={twitterLogo}\n          />\n        </View>\n      }>\n      {fullScreenWhiteLayer}\n      <Animated.View\n        style={[opacityClearToVisible, appScale, { flex: 1 }]}>\n        {this.props.children}\n      </Animated.View>\n    </MaskedViewIOS>\n  </View>\n);\n")),Object(o.b)("img",{src:"/blog/assets/loading-screen-06.gif",style:{float:"left",paddingRight:80,paddingBottom:20}}),Object(o.b)("p",null,"Yay! We now have the animation pieces looking like we want. Now we just have to clean up our blue and white layers which will never be seen again."),Object(o.b)("p",null,"To know when we can clean them up, we need to know when the animation is complete. Luckily where we call, ",Object(o.b)("inlineCode",{parentName:"p"},"Animated.timing")," ,",Object(o.b)("inlineCode",{parentName:"p"},".start")," takes an optional callback that runs when the animation is complete."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"Animated.timing(this.state.loadingProgress, {\n  toValue: 100,\n  duration: 1000,\n  useNativeDriver: true\n}).start(() => {\n  this.setState({\n    animationDone: true\n  });\n});\n")),Object(o.b)("p",null,"Now that we have a value in ",Object(o.b)("inlineCode",{parentName:"p"},"state")," to know whether we are done with the animation, we can modify our blue and white layers to use that."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const fullScreenBlueLayer = this.state.animationDone ? null : (\n  <View style={[styles.fullScreenBlueLayer]} />\n);\nconst fullScreenWhiteLayer = this.state.animationDone ? null : (\n  <View style={[styles.fullScreenWhiteLayer]} />\n);\n")),Object(o.b)("p",null,"Voila! Our animation now works and we clean up our unused layers once the animation is done. We have built the Twitter app loading animation!"),Object(o.b)("h2",{id:"but-wait-mine-doesnt-work"},"But wait, mine doesn\u2019t work!"),Object(o.b)("p",null,"Don\u2019t fret, dear reader. I too hate when guides only give you chunks of the code and don\u2019t give you the completed source."),Object(o.b)("p",null,"This component has been published to npm and is on GitHub as ",Object(o.b)("a",{parentName:"p",href:"https://github.com/TheSavior/react-native-mask-loader"},"react-native-mask-loader"),". To try this out on your phone, it is ",Object(o.b)("a",{parentName:"p",href:"https://expo.io/@eliwhite/react-native-mask-loader-example"},"available on Expo")," here:"),Object(o.b)("img",{src:"/blog/assets/loading-screen-07.png",style:{marginLeft:"auto",marginRight:"auto",display:"block"}}),Object(o.b)("h2",{id:"more-reading--extra-credit"},"More Reading / Extra Credit"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"http://browniefed.com/react-native-animation-book/"},"This gitbook")," is a great resource to learn more about Animated after you have read the React Native docs."),Object(o.b)("li",{parentName:"ol"},"The actual Twitter animation seems to speed up the mask reveal towards the end. Try modifying the loader to use a different easing function (or a spring!) to better match that behavior."),Object(o.b)("li",{parentName:"ol"},"The current end-scale of the mask is hard coded and likely won\u2019t reveal the entire app on a tablet. Calculating the end scale based on screen size and image size would be an awesome PR.")))}h.isMDXComponent=!0},730:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),h=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=h(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=h(a),b=n,u=p["".concat(r,".").concat(b)]||p[b]||d[b]||o;return a?i.a.createElement(u,l(l({ref:t},c),{},{components:a})):i.a.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},816:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/loading-screen-05-9b5c5f9b785287a11b6444ad4a8afcad.png"}}]);