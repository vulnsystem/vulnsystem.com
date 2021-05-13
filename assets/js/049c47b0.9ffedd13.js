(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(4),r=a(10),l=(a(0),a(706)),b={id:"appregistry",title:"AppRegistry"},c={unversionedId:"appregistry",id:"version-0.63/appregistry",isDocsHomePage:!1,title:"AppRegistry",description:"Project with Native Code Required",source:"@site/versioned_docs/version-0.63/appregistry.md",slug:"/appregistry",permalink:"/docs/0.63/appregistry",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/appregistry.md",version:"0.63",lastUpdatedAt:1620877669,formattedLastUpdatedAt:"5/13/2021",sidebar:"version-0.63/api",previous:{title:"Appearance",permalink:"/docs/0.63/appearance"},next:{title:"AppState",permalink:"/docs/0.63/appstate"}},i=[{value:"Methods",id:"methods",children:[{value:"<code>setWrapperComponentProvider()</code>",id:"setwrappercomponentprovider",children:[]},{value:"<code>enableArchitectureIndicator()</code>",id:"enablearchitectureindicator",children:[]},{value:"<code>registerConfig()</code>",id:"registerconfig",children:[]},{value:"<code>registerComponent()</code>",id:"registercomponent",children:[]},{value:"<code>registerRunnable()</code>",id:"registerrunnable",children:[]},{value:"<code>registerSection()</code>",id:"registersection",children:[]},{value:"<code>getAppKeys()</code>",id:"getappkeys",children:[]},{value:"<code>getSectionKeys()</code>",id:"getsectionkeys",children:[]},{value:"<code>getSections()</code>",id:"getsections",children:[]},{value:"<code>getRunnable()</code>",id:"getrunnable",children:[]},{value:"<code>getRegistry()</code>",id:"getregistry",children:[]},{value:"<code>setComponentProviderInstrumentationHook()</code>",id:"setcomponentproviderinstrumentationhook",children:[]},{value:"<code>runApplication()</code>",id:"runapplication",children:[]},{value:"<code>unmountApplicationComponentAtRootTag()</code>",id:"unmountapplicationcomponentatroottag",children:[]},{value:"<code>registerHeadlessTask()</code>",id:"registerheadlesstask",children:[]},{value:"<code>registerCancellableHeadlessTask()</code>",id:"registercancellableheadlesstask",children:[]},{value:"<code>startHeadlessTask()</code>",id:"startheadlesstask",children:[]},{value:"<code>cancelHeadlessTask()</code>",id:"cancelheadlesstask",children:[]}]}],p={toc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",{class:"banner-native-code-required"},Object(l.b)("h3",null,"Project with Native Code Required"),Object(l.b)("p",null,"If you are using the managed ",Object(l.b)("code",null,"expo-cli")," workflow there is only ever one entry component registered with ",Object(l.b)("code",null,"AppRegistry")," and it is handled automatically, you do not need to use this API.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"AppRegistry")," is the JS entry point to running all React Native apps. App root components should register themselves with ",Object(l.b)("inlineCode",{parentName:"p"},"AppRegistry.registerComponent"),", then the native system can load the bundle for the app and then actually run the app when it's ready by invoking ",Object(l.b)("inlineCode",{parentName:"p"},"AppRegistry.runApplication"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"import { Text, AppRegistry } from 'react-native';\n\nconst App = (props) => (\n  <View>\n    <Text>App1</Text>\n  </View>\n);\n\nAppRegistry.registerComponent('Appname', () => App);\n")),Object(l.b)("p",null,'To "stop" an application when a view should be destroyed, call ',Object(l.b)("inlineCode",{parentName:"p"},"AppRegistry.unmountApplicationComponentAtRootTag")," with the tag that was passed into ",Object(l.b)("inlineCode",{parentName:"p"},"runApplication"),". These should always be used as a pair."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"AppRegistry")," should be required early in the ",Object(l.b)("inlineCode",{parentName:"p"},"require")," sequence to make sure the JS execution environment is setup before other modules are required."),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"setwrappercomponentprovider"},Object(l.b)("inlineCode",{parentName:"h3"},"setWrapperComponentProvider()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static setWrapperComponentProvider(provider)\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"provider"),Object(l.b)("td",{parentName:"tr",align:null},"ComponentProvider"),Object(l.b)("td",{parentName:"tr",align:null},"yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"enablearchitectureindicator"},Object(l.b)("inlineCode",{parentName:"h3"},"enableArchitectureIndicator()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static enableArchitectureIndicator(enabled)\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enabled"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"registerconfig"},Object(l.b)("inlineCode",{parentName:"h3"},"registerConfig()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static registerConfig([config])\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"config"),Object(l.b)("td",{parentName:"tr",align:null},"AppConfig"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"See below.")))),Object(l.b)("p",null,"Valid ",Object(l.b)("inlineCode",{parentName:"p"},"AppConfig")," keys are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"'appKey' (string)- Required."),Object(l.b)("li",{parentName:"ul"},"'component' (ComponentProvider) - Optional."),Object(l.b)("li",{parentName:"ul"},"'run' (Function) - Optional."),Object(l.b)("li",{parentName:"ul"},"'section' (boolean) - Optional.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"registercomponent"},Object(l.b)("inlineCode",{parentName:"h3"},"registerComponent()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static registerComponent(appKey, componentProvider, section?)\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"appKey"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"componentProvider"),Object(l.b)("td",{parentName:"tr",align:null},"ComponentProvider"),Object(l.b)("td",{parentName:"tr",align:null},"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"section"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"no")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"registerrunnable"},Object(l.b)("inlineCode",{parentName:"h3"},"registerRunnable()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static registerRunnable(appKey, run)\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"appKey"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"run"),Object(l.b)("td",{parentName:"tr",align:null},"Function"),Object(l.b)("td",{parentName:"tr",align:null},"yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"registersection"},Object(l.b)("inlineCode",{parentName:"h3"},"registerSection()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static registerSection(appKey, component)\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"appKey"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"component"),Object(l.b)("td",{parentName:"tr",align:null},"ComponentProvider"),Object(l.b)("td",{parentName:"tr",align:null},"yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getappkeys"},Object(l.b)("inlineCode",{parentName:"h3"},"getAppKeys()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static getAppKeys()\n")),Object(l.b)("p",null,"Returns an Array of AppKeys"),Object(l.b)("h3",{id:"getsectionkeys"},Object(l.b)("inlineCode",{parentName:"h3"},"getSectionKeys()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static getSectionKeys()\n")),Object(l.b)("p",null,"Returns an Array of SectionKeys"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getsections"},Object(l.b)("inlineCode",{parentName:"h3"},"getSections()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static getSections()\n")),Object(l.b)("p",null,"Returns all Runnables which is an object with key of ",Object(l.b)("inlineCode",{parentName:"p"},"AppKeys")," and value of type of ",Object(l.b)("inlineCode",{parentName:"p"},"Runnable")," which consist of:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"'component' (ComponentProvider)."),Object(l.b)("li",{parentName:"ul"},"'run' (Function).")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getrunnable"},Object(l.b)("inlineCode",{parentName:"h3"},"getRunnable()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static getRunnable(appKey)\n")),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"Runnable")," object which consist of:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"'component' (ComponentProvider)."),Object(l.b)("li",{parentName:"ul"},"'run' (Function).")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getregistry"},Object(l.b)("inlineCode",{parentName:"h3"},"getRegistry()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static getRegistry()\n")),Object(l.b)("p",null,"Returns a type ",Object(l.b)("inlineCode",{parentName:"p"},"Registry")," which consist of:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"'sections' (Array of strings)."),Object(l.b)("li",{parentName:"ul"},"'runnables' (Runnables).")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"setcomponentproviderinstrumentationhook"},Object(l.b)("inlineCode",{parentName:"h3"},"setComponentProviderInstrumentationHook()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static setComponentProviderInstrumentationHook(hook)\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"hook"),Object(l.b)("td",{parentName:"tr",align:null},"Function"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"See below.")))),Object(l.b)("p",null,"A valid ",Object(l.b)("inlineCode",{parentName:"p"},"hook")," accepts the following as arguments:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"'component' (ComponentProvider)- Required."),Object(l.b)("li",{parentName:"ul"},"'scopedPerformanceLogger' (IPerformanceLogger)- Required.")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"hook")," function returns a React Component"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"runapplication"},Object(l.b)("inlineCode",{parentName:"h3"},"runApplication()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static runApplication(appKey, appParameters)\n")),Object(l.b)("p",null,"Loads the JavaScript bundle and runs the app."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"appKey"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"appParameters"),Object(l.b)("td",{parentName:"tr",align:null},"any"),Object(l.b)("td",{parentName:"tr",align:null},"yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"unmountapplicationcomponentatroottag"},Object(l.b)("inlineCode",{parentName:"h3"},"unmountApplicationComponentAtRootTag()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static unmountApplicationComponentAtRootTag(rootTag)\n")),Object(l.b)("p",null,"Stops an application when a view should be destroyed."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"rootTag"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"registerheadlesstask"},Object(l.b)("inlineCode",{parentName:"h3"},"registerHeadlessTask()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static registerHeadlessTask(taskKey, taskProvider)\n")),Object(l.b)("p",null,"Register a headless task. A headless task is a bit of code that runs without a UI. @param taskKey the key associated with this task @param taskProvider a promise returning function that takes some data passed from the native side as the only argument; when the promise is resolved or rejected the native side is notified of this event and it may decide to destroy the JS context."),Object(l.b)("p",null,"This is a way to run tasks in JavaScript while your app is in the background. It can be used, for example, to sync fresh data, handle push notifications, or play music."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"taskKey"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"See below.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"taskProvider"),Object(l.b)("td",{parentName:"tr",align:null},"TaskProvider"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"See below.")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A valid ",Object(l.b)("inlineCode",{parentName:"li"},"TaskProvider")," is a function that returns a ",Object(l.b)("inlineCode",{parentName:"li"},"Task"),"."),Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("inlineCode",{parentName:"li"},"Task")," is a function that accepts any data as argument and returns a Promise that resolves to undefined.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"registercancellableheadlesstask"},Object(l.b)("inlineCode",{parentName:"h3"},"registerCancellableHeadlessTask()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static registerCancellableHeadlessTask(taskKey, taskProvider, taskCancelProvider)\n")),Object(l.b)("p",null,"Register a headless task which can be cancelled. A headless task is a bit of code that runs without a UI. @param taskKey the key associated with this task @param taskProvider a promise returning function that takes some data passed from the native side as the only argument; when the promise is resolved or rejected the native side is notified of this event and it may decide to destroy the JS context. @param taskCancelProvider a void returning function that takes no arguments; when a cancellation is requested, the function being executed by taskProvider should wrap up and return ASAP."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"taskKey"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"See below.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"taskProvider"),Object(l.b)("td",{parentName:"tr",align:null},"TaskProvider"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"See below.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"taskCancelProvider"),Object(l.b)("td",{parentName:"tr",align:null},"TaskCancelProvider"),Object(l.b)("td",{parentName:"tr",align:null},"yes"),Object(l.b)("td",{parentName:"tr",align:null},"See below.")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A valid ",Object(l.b)("inlineCode",{parentName:"li"},"TaskProvider")," is a function that returns a ",Object(l.b)("inlineCode",{parentName:"li"},"Task"),"."),Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("inlineCode",{parentName:"li"},"Task")," is a function that accepts any data as argument and returns a Promise that resolves to undefined."),Object(l.b)("li",{parentName:"ul"},"A valid ",Object(l.b)("inlineCode",{parentName:"li"},"TaskCancelProvider")," is a function that returns a ",Object(l.b)("inlineCode",{parentName:"li"},"TaskCanceller"),"."),Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("inlineCode",{parentName:"li"},"TaskCanceller")," is a function that accepts no argument and returns void.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"startheadlesstask"},Object(l.b)("inlineCode",{parentName:"h3"},"startHeadlessTask()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static startHeadlessTask(taskId, taskKey, data)\n")),Object(l.b)("p",null,"Only called from native code. Starts a headless task."),Object(l.b)("p",null,"@param taskId the native id for this task instance to keep track of its execution @param taskKey the key for the task to start @param data the data to pass to the task"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"taskId"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"taskKey"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"data"),Object(l.b)("td",{parentName:"tr",align:null},"any"),Object(l.b)("td",{parentName:"tr",align:null},"yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"cancelheadlesstask"},Object(l.b)("inlineCode",{parentName:"h3"},"cancelHeadlessTask()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static cancelHeadlessTask(taskId, taskKey)\n")),Object(l.b)("p",null,"Only called from native code. Cancels a headless task."),Object(l.b)("p",null,"@param taskId the native id for this task instance that was used when startHeadlessTask was called @param taskKey the key for the task that was used when startHeadlessTask was called"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"taskId"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"taskKey"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"yes")))))}o.isMDXComponent=!0},706:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=o(a),u=n,m=s["".concat(b,".").concat(u)]||s[u]||d[u]||l;return a?r.a.createElement(m,c(c({ref:t},p),{},{components:a})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var p=2;p<l;p++)b[p]=a[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);