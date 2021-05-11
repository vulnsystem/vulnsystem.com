(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{607:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(4),i=n(10),l=(n(0),n(705)),o={id:"pushnotificationios",title:"\ud83d\udea7 PushNotificationIOS"},r={unversionedId:"pushnotificationios",id:"version-0.63/pushnotificationios",isDocsHomePage:!1,title:"\ud83d\udea7 PushNotificationIOS",description:"Deprecated. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.63/pushnotificationios.md",slug:"/pushnotificationios",permalink:"/docs/0.63/pushnotificationios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/pushnotificationios.md",version:"0.63",lastUpdatedAt:1620691963,formattedLastUpdatedAt:"5/11/2021"},c=[{value:"Methods",id:"methods",children:[{value:"<code>presentLocalNotification()</code>",id:"presentlocalnotification",children:[]},{value:"<code>scheduleLocalNotification()</code>",id:"schedulelocalnotification",children:[]},{value:"<code>cancelAllLocalNotifications()</code>",id:"cancelalllocalnotifications",children:[]},{value:"<code>removeAllDeliveredNotifications()</code>",id:"removealldeliverednotifications",children:[]},{value:"<code>getDeliveredNotifications()</code>",id:"getdeliverednotifications",children:[]},{value:"<code>removeDeliveredNotifications()</code>",id:"removedeliverednotifications",children:[]},{value:"<code>setApplicationIconBadgeNumber()</code>",id:"setapplicationiconbadgenumber",children:[]},{value:"<code>getApplicationIconBadgeNumber()</code>",id:"getapplicationiconbadgenumber",children:[]},{value:"<code>cancelLocalNotifications()</code>",id:"cancellocalnotifications",children:[]},{value:"<code>getScheduledLocalNotifications()</code>",id:"getscheduledlocalnotifications",children:[]},{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]},{value:"<code>requestPermissions()</code>",id:"requestpermissions",children:[]},{value:"<code>abandonPermissions()</code>",id:"abandonpermissions",children:[]},{value:"<code>checkPermissions()</code>",id:"checkpermissions",children:[]},{value:"<code>getInitialNotification()</code>",id:"getinitialnotification",children:[]},{value:"<code>constructor()</code>",id:"constructor",children:[]},{value:"<code>finish()</code>",id:"finish",children:[]},{value:"<code>getMessage()</code>",id:"getmessage",children:[]},{value:"<code>getSound()</code>",id:"getsound",children:[]},{value:"<code>getCategory()</code>",id:"getcategory",children:[]},{value:"<code>getAlert()</code>",id:"getalert",children:[]},{value:"<code>getContentAvailable()</code>",id:"getcontentavailable",children:[]},{value:"<code>getBadgeCount()</code>",id:"getbadgecount",children:[]},{value:"<code>getData()</code>",id:"getdata",children:[]},{value:"<code>getThreadID()</code>",id:"getthreadid",children:[]}]}],b={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Deprecated.")," Use one of the ",Object(l.b)("a",{parentName:"p",href:"https://reactnative.directory/?search=push+notification"},"community packages")," instead.")),Object(l.b)("div",{class:"banner-native-code-required"},Object(l.b)("h3",null,"Projects with Native Code Only"),Object(l.b)("p",null,"The following section only applies to projects with native code exposed. If you are using the managed ",Object(l.b)("code",null,"expo-cli")," workflow, see the guide on ",Object(l.b)("a",{href:"https://docs.expo.io/versions/latest/sdk/notifications/"},"Notifications")," in the Expo documentation for the appropriate alternative.")),Object(l.b)("p",null,"Handle push notifications for your app, including permission handling and icon badge number."),Object(l.b)("p",null,"To get up and running, ",Object(l.b)("a",{parentName:"p",href:"https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/AddingCapabilities/AddingCapabilities.html#//apple_ref/doc/uid/TP40012582-CH26-SW6"},"configure your notifications with Apple")," and your server-side system."),Object(l.b)("p",null,"React Native version equal or higher than 0.60.0:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Autolinking in 0.60.0 handles the linking for you!")),Object(l.b)("p",null,"React Native versions lower than 0.60.0:"),Object(l.b)("p",null,"Add the PushNotificationIOS library to your Podfile: ./ios/Podfile"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"CocoaPods:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Add the PushNotificationIOS library to your Podfile: ./ios/Podfile"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-ruby"},"target 'myAwesomeApp' do\n  # Pods for myAwesomeApp\n  pod 'React-RCTPushNotification', :path => '../node_modules/react-native/Libraries/PushNotificationIOS'\nend\n"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"/docs/0.63/linking-libraries-ios#manual-linking"},"Manually link")," the PushNotificationIOS library:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Add the following to your Project: ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules/react-native/Libraries/PushNotificationIOS/RCTPushNotification.xcodeproj")),Object(l.b)("li",{parentName:"ul"},"Add the following to ",Object(l.b)("inlineCode",{parentName:"li"},"Link Binary With Libraries"),": ",Object(l.b)("inlineCode",{parentName:"li"},"libRCTPushNotification.a"))))),Object(l.b)("p",null,"Finally, to enable support for ",Object(l.b)("inlineCode",{parentName:"p"},"notification")," and ",Object(l.b)("inlineCode",{parentName:"p"},"register")," events you need to augment your AppDelegate."),Object(l.b)("p",null,"At the top of your ",Object(l.b)("inlineCode",{parentName:"p"},"AppDelegate.m"),":"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"#import <React/RCTPushNotificationManager.h>")),Object(l.b)("p",null,"And then in your AppDelegate implementation add the following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-objectivec"}," // Required to register for notifications\n - (void)application:(UIApplication *)application didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings\n {\n  [RCTPushNotificationManager didRegisterUserNotificationSettings:notificationSettings];\n }\n // Required for the register event.\n - (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken\n {\n  [RCTPushNotificationManager didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];\n }\n // Required for the notification event. You must call the completion handler after handling the remote notification.\n - (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo\n                                                        fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler\n {\n   [RCTPushNotificationManager didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];\n }\n // Required for the registrationError event.\n - (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error\n {\n  [RCTPushNotificationManager didFailToRegisterForRemoteNotificationsWithError:error];\n }\n // Required for the localNotification event.\n - (void)application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification\n {\n  [RCTPushNotificationManager didReceiveLocalNotification:notification];\n }\n")),Object(l.b)("p",null,"To show notifications while being in the foreground (available starting from iOS 10) add the following lines:"),Object(l.b)("p",null,"At the top of your ",Object(l.b)("inlineCode",{parentName:"p"},"AppDelegate.m"),":"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"#import <UserNotifications/UserNotifications.h>")),Object(l.b)("p",null,"And then in your AppDelegate implementation add the following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{\n  ...\n  // Define UNUserNotificationCenter\n  UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];\n  center.delegate = self;\n\n  return YES;\n}\n\n//Called when a notification is delivered to a foreground app.\n-(void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler\n{\n  completionHandler(UNAuthorizationOptionSound | UNAuthorizationOptionAlert | UNAuthorizationOptionBadge);\n}\n")),Object(l.b)("p",null,"Then enable Background Modes/Remote notifications to be able to use remote notifications properly. The easiest way to do this is via the project settings. Navigate to Targets -> Your App -> Capabilities -> Background Modes and check Remote notifications. This will automatically enable the required settings."),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"presentlocalnotification"},Object(l.b)("inlineCode",{parentName:"h3"},"presentLocalNotification()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.presentLocalNotification(details);\n")),Object(l.b)("p",null,"Schedules the localNotification for immediate presentation."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"details"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"See below.")))),Object(l.b)("p",null,"details is an object containing:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"alertBody")," : The message displayed in the notification alert."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"alertAction"),' : The "action" displayed beneath an actionable notification. Defaults to "view". Note that Apple no longer shows this in iOS 10 +'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"alertTitle")," : The text displayed as the title of the notification alert."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"soundName")," : The sound played when the notification is fired (optional)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"isSilent")," : If true, the notification will appear without sound (optional)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"category")," : The category of this notification, required for actionable notifications (optional)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"userInfo")," : An object containing additional notification data (optional)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"applicationIconBadgeNumber")," The number to display as the app's icon badge. The default value of this property is 0, which means that no badge is displayed (optional).")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"schedulelocalnotification"},Object(l.b)("inlineCode",{parentName:"h3"},"scheduleLocalNotification()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.scheduleLocalNotification(details);\n")),Object(l.b)("p",null,"Schedules the localNotification for future presentation."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"details"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"See below.")))),Object(l.b)("p",null,"details is an object containing:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fireDate")," : The date and time when the system should deliver the notification."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"alertTitle")," : The text displayed as the title of the notification alert."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"alertBody")," : The message displayed in the notification alert."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"alertAction"),' : The "action" displayed beneath an actionable notification. Defaults to "view". Note that Apple no longer shows this in iOS 10 +'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"soundName")," : The sound played when the notification is fired (optional)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"isSilent")," : If true, the notification will appear without sound (optional)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"category")," : The category of this notification, required for actionable notifications (optional)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"userInfo")," : An object containing additional notification data (optional)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"applicationIconBadgeNumber")," The number to display as the app's icon badge. Setting the number to 0 removes the icon badge (optional)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"repeatInterval")," : The interval to repeat as a string. Possible values: ",Object(l.b)("inlineCode",{parentName:"li"},"minute"),", ",Object(l.b)("inlineCode",{parentName:"li"},"hour"),", ",Object(l.b)("inlineCode",{parentName:"li"},"day"),", ",Object(l.b)("inlineCode",{parentName:"li"},"week"),", ",Object(l.b)("inlineCode",{parentName:"li"},"month"),", ",Object(l.b)("inlineCode",{parentName:"li"},"year")," (optional).")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"cancelalllocalnotifications"},Object(l.b)("inlineCode",{parentName:"h3"},"cancelAllLocalNotifications()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.cancelAllLocalNotifications();\n")),Object(l.b)("p",null,"Cancels all scheduled localNotifications"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"removealldeliverednotifications"},Object(l.b)("inlineCode",{parentName:"h3"},"removeAllDeliveredNotifications()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.removeAllDeliveredNotifications();\n")),Object(l.b)("p",null,"Remove all delivered notifications from Notification Center"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getdeliverednotifications"},Object(l.b)("inlineCode",{parentName:"h3"},"getDeliveredNotifications()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.getDeliveredNotifications(callback);\n")),Object(l.b)("p",null,"Provides you with a list of the app\u2019s notifications that are still displayed in Notification Center"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Function which receive an array of delivered notifications.")))),Object(l.b)("p",null,"A delivered notification is an object containing:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"identifier")," : The identifier of this notification."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"title")," : The title of this notification."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"body")," : The body of this notification."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"category")," : The category of this notification (optional)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"userInfo")," : An object containing additional notification data (optional)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"thread-id")," : The thread identifier of this notification, if has one.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"removedeliverednotifications"},Object(l.b)("inlineCode",{parentName:"h3"},"removeDeliveredNotifications()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.removeDeliveredNotifications(identifiers);\n")),Object(l.b)("p",null,"Removes the specified notifications from Notification Center"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"identifiers"),Object(l.b)("td",{parentName:"tr",align:null},"array"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Array of notification identifiers.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"setapplicationiconbadgenumber"},Object(l.b)("inlineCode",{parentName:"h3"},"setApplicationIconBadgeNumber()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.setApplicationIconBadgeNumber(number);\n")),Object(l.b)("p",null,"Sets the badge number for the app icon on the home screen"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Badge number for the app icon.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getapplicationiconbadgenumber"},Object(l.b)("inlineCode",{parentName:"h3"},"getApplicationIconBadgeNumber()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.getApplicationIconBadgeNumber(callback);\n")),Object(l.b)("p",null,"Gets the current badge number for the app icon on the home screen"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"A function that will be passed the current badge number.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"cancellocalnotifications"},Object(l.b)("inlineCode",{parentName:"h3"},"cancelLocalNotifications()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.cancelLocalNotifications(userInfo);\n")),Object(l.b)("p",null,"Cancel local notifications."),Object(l.b)("p",null,"Optionally restricts the set of canceled notifications to those notifications whose ",Object(l.b)("inlineCode",{parentName:"p"},"userInfo")," fields match the corresponding fields in the ",Object(l.b)("inlineCode",{parentName:"p"},"userInfo")," argument."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"userInfo"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getscheduledlocalnotifications"},Object(l.b)("inlineCode",{parentName:"h3"},"getScheduledLocalNotifications()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.getScheduledLocalNotifications(callback);\n")),Object(l.b)("p",null,"Gets the local notifications that are currently scheduled."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"A function that will be passed an array of objects describing local notifications.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"addeventlistener"},Object(l.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.addEventListener(type, handler);\n")),Object(l.b)("p",null,"Attaches a listener to remote or local notification events while the app is running in the foreground or the background."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"type"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Event type.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"handler"),Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Listener.")))),Object(l.b)("p",null,"Valid events are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"notification")," : Fired when a remote notification is received. The handler will be invoked with an instance of ",Object(l.b)("inlineCode",{parentName:"li"},"PushNotificationIOS"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"localNotification")," : Fired when a local notification is received. The handler will be invoked with an instance of ",Object(l.b)("inlineCode",{parentName:"li"},"PushNotificationIOS"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"register"),": Fired when the user registers for remote notifications. The handler will be invoked with a hex string representing the deviceToken."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"registrationError"),": Fired when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. The handler will be invoked with {message: string, code: number, details: any}.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"removeeventlistener"},Object(l.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.removeEventListener(type, handler);\n")),Object(l.b)("p",null,"Removes the event listener. Do this in ",Object(l.b)("inlineCode",{parentName:"p"},"componentWillUnmount")," to prevent memory leaks"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"type"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Event type.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"handler"),Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Listener.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"requestpermissions"},Object(l.b)("inlineCode",{parentName:"h3"},"requestPermissions()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.requestPermissions([permissions]);\n")),Object(l.b)("p",null,"Requests notification permissions from iOS, prompting the user's dialog box. By default, it will request all notification permissions, but a subset of these can be requested by passing a map of requested permissions. The following permissions are supported:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"alert")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"badge")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"sound"))),Object(l.b)("p",null,"If a map is provided to the method, only the permissions with truthy values will be requested."),Object(l.b)("p",null,"This method returns a promise that will resolve when the user accepts, rejects, or if the permissions were previously rejected. The promise resolves to the current state of the permission."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"permissions"),Object(l.b)("td",{parentName:"tr",align:null},"array"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"alert, badge, or sound")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"abandonpermissions"},Object(l.b)("inlineCode",{parentName:"h3"},"abandonPermissions()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.abandonPermissions();\n")),Object(l.b)("p",null,"Unregister for all remote notifications received via Apple Push Notification service."),Object(l.b)("p",null,"You should call this method in rare circumstances only, such as when a new version of the app removes support for all types of remote notifications. Users can temporarily prevent apps from receiving remote notifications through the Notifications section of the Settings app. Apps unregistered through this method can always re-register."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"checkpermissions"},Object(l.b)("inlineCode",{parentName:"h3"},"checkPermissions()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.checkPermissions(callback);\n")),Object(l.b)("p",null,"See what push permissions are currently enabled."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"See below.")))),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"callback")," will be invoked with a ",Object(l.b)("inlineCode",{parentName:"p"},"permissions")," object:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"alert")," :boolean"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"badge")," :boolean"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"sound")," :boolean")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getinitialnotification"},Object(l.b)("inlineCode",{parentName:"h3"},"getInitialNotification()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"PushNotificationIOS.getInitialNotification();\n")),Object(l.b)("p",null,"This method returns a promise. If the app was launched by a push notification, this promise resolves to an object of type ",Object(l.b)("inlineCode",{parentName:"p"},"PushNotificationIOS"),". Otherwise, it resolves to ",Object(l.b)("inlineCode",{parentName:"p"},"null"),"."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"constructor"},Object(l.b)("inlineCode",{parentName:"h3"},"constructor()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"constructor(nativeNotif);\n")),Object(l.b)("p",null,"You will never need to instantiate ",Object(l.b)("inlineCode",{parentName:"p"},"PushNotificationIOS")," yourself. Listening to the ",Object(l.b)("inlineCode",{parentName:"p"},"notification")," event and invoking ",Object(l.b)("inlineCode",{parentName:"p"},"getInitialNotification")," is sufficient."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"finish"},Object(l.b)("inlineCode",{parentName:"h3"},"finish()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"finish(fetchResult);\n")),Object(l.b)("p",null,"This method is available for remote notifications that have been received via: ",Object(l.b)("inlineCode",{parentName:"p"},"application:didReceiveRemoteNotification:fetchCompletionHandler:")," ",Object(l.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623013-application?language=objc"},"https://developer.apple.com/documentation/uikit/uiapplicationdelegate/1623013-application?language=objc")),Object(l.b)("p",null,"Call this to execute when the remote notification handling is complete. When calling this block, pass in the fetch result value that best describes the results of your operation. You ",Object(l.b)("em",{parentName:"p"},"must")," call this handler and should do so as soon as possible. For a list of possible values, see ",Object(l.b)("inlineCode",{parentName:"p"},"PushNotificationIOS.FetchResult"),"."),Object(l.b)("p",null,"If you do not call this method your background remote notifications could be throttled, to read more about it see the above documentation link."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getmessage"},Object(l.b)("inlineCode",{parentName:"h3"},"getMessage()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"getMessage();\n")),Object(l.b)("p",null,"An alias for ",Object(l.b)("inlineCode",{parentName:"p"},"getAlert")," to get the notification's main message string"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getsound"},Object(l.b)("inlineCode",{parentName:"h3"},"getSound()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"getSound();\n")),Object(l.b)("p",null,"Gets the sound string from the ",Object(l.b)("inlineCode",{parentName:"p"},"aps")," object"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getcategory"},Object(l.b)("inlineCode",{parentName:"h3"},"getCategory()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"getCategory();\n")),Object(l.b)("p",null,"Gets the category string from the ",Object(l.b)("inlineCode",{parentName:"p"},"aps")," object"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getalert"},Object(l.b)("inlineCode",{parentName:"h3"},"getAlert()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"getAlert();\n")),Object(l.b)("p",null,"Gets the notification's main message from the ",Object(l.b)("inlineCode",{parentName:"p"},"aps")," object"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getcontentavailable"},Object(l.b)("inlineCode",{parentName:"h3"},"getContentAvailable()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"getContentAvailable();\n")),Object(l.b)("p",null,"Gets the content-available number from the ",Object(l.b)("inlineCode",{parentName:"p"},"aps")," object"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getbadgecount"},Object(l.b)("inlineCode",{parentName:"h3"},"getBadgeCount()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"getBadgeCount();\n")),Object(l.b)("p",null,"Gets the badge count number from the ",Object(l.b)("inlineCode",{parentName:"p"},"aps")," object"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getdata"},Object(l.b)("inlineCode",{parentName:"h3"},"getData()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"getData();\n")),Object(l.b)("p",null,"Gets the data object on the notification"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getthreadid"},Object(l.b)("inlineCode",{parentName:"h3"},"getThreadID()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"getThreadID();\n")),Object(l.b)("p",null,"Gets the thread ID on the notification"))}p.isMDXComponent=!0},705:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||l;return n?i.a.createElement(m,r(r({ref:t},b),{},{components:n})):i.a.createElement(m,r({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var b=2;b<l;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);