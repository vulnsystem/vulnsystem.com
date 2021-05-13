(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{520:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(4),o=n(10),s=(n(0),n(706)),i={id:"testing-overview",title:"Testing",author:"Vojtech Novak",authorURL:"https://twitter.com/vonovak",description:"This guide introduces React Native developers to the key concepts behind testing, how to write good tests, and what kinds of tests you can incorporate into your workflow."},r={unversionedId:"testing-overview",id:"version-0.64/testing-overview",isDocsHomePage:!1,title:"Testing",description:"This guide introduces React Native developers to the key concepts behind testing, how to write good tests, and what kinds of tests you can incorporate into your workflow.",source:"@site/versioned_docs/version-0.64/testing-overview.md",slug:"/testing-overview",permalink:"/docs/testing-overview",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/testing-overview.md",version:"0.64",lastUpdatedAt:1620877669,formattedLastUpdatedAt:"5/13/2021",sidebar:"version-0.64/docs",previous:{title:"Symbolicating a stack trace",permalink:"/docs/symbolication"},next:{title:"Using Libraries",permalink:"/docs/libraries"}},c=[{value:"Why Test",id:"why-test",children:[]},{value:"Static Analysis",id:"static-analysis",children:[]},{value:"Writing Testable Code",id:"writing-testable-code",children:[]},{value:"Writing Tests",id:"writing-tests",children:[{value:"Structuring Tests",id:"structuring-tests",children:[]}]},{value:"Unit tests",id:"unit-tests",children:[{value:"Mocking",id:"mocking",children:[]}]},{value:"Integration Tests",id:"integration-tests",children:[]},{value:"Component Tests",id:"component-tests",children:[{value:"Testing User Interactions",id:"testing-user-interactions",children:[]},{value:"Testing Rendered Output",id:"testing-rendered-output",children:[]}]},{value:"End-to-End Tests",id:"end-to-end-tests",children:[]},{value:"Summary",id:"summary",children:[{value:"Links",id:"links",children:[]}]}],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"As your codebase expands, small errors and edge cases you don\u2019t expect can cascade into larger failures. Bugs lead to bad user experience and ultimately, business losses. One way to prevent fragile programming is to test your code before releasing it into the wild."),Object(s.b)("p",null,"In this guide, we will cover different, automated ways to ensure your app works as expected, ranging from static analysis to end-to-end tests."),Object(s.b)("img",{src:"/docs/assets/diagram_testing.svg",alt:"Testing is a cycle of fixing, testing, and either passing to release or failing back into testing."}),Object(s.b)("h2",{id:"why-test"},"Why Test"),Object(s.b)("p",null,"We're humans, and humans make mistakes. Testing is important because it helps you uncover these mistakes and verifies that your code is working. Perhaps even more importantly, testing ensures that your code continues to work in the future as you add new features, refactor the existing ones, or upgrade major dependencies of your project."),Object(s.b)("p",null,"There is more value in testing than you might realize. One of the best ways to fix a bug in your code is to write a failing test that exposes it. Then when you fix the bug and re-run the test, if it passes it means the bug is fixed, never reintroduced into the code base."),Object(s.b)("p",null,"Tests can also serve as documentation for new people joining your team. For people who have never seen a codebase before, reading tests can help them understand how the existing code works."),Object(s.b)("p",null,"Last but not least, more automated testing means less time spent with manual ",Object(s.b)("abbr",{title:"Quality Assurance"},"QA"),", freeing up valuable time."),Object(s.b)("h2",{id:"static-analysis"},"Static Analysis"),Object(s.b)("p",null,"The first step to improve your code quality is to start using static analysis tools. Static analysis checks your code for errors as you write it, but without running any of that code."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Linters")," analyze code to catch common errors such as unused code and to help avoid pitfalls, to flag style guide no-nos like using tabs instead of spaces (or vice versa, depending on your configuration)."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Type checking")," ensures that the construct you\u2019re passing to a function matches what the function was designed to accept, preventing passing a string to a counting function that expects a number, for instance.")),Object(s.b)("p",null,"React Native comes with two such tools configured out of the box: ",Object(s.b)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," for linting and ",Object(s.b)("a",{parentName:"p",href:"https://flow.org/en/docs/"},"Flow")," for type checking. You can also use ",Object(s.b)("a",{parentName:"p",href:"typescript"},"TypeScript"),", which is a typed language that compiles to plain JavaScript."),Object(s.b)("h2",{id:"writing-testable-code"},"Writing Testable Code"),Object(s.b)("p",null,"To start with tests, you first need to write code that is testable. Consider an aircraft manufacturing process - before any model first takes off to show that all of its complex systems work well together, individual parts are tested to guarantee they are safe and function correctly. For example, wings are tested by bending them under extreme load; engine parts are tested for their durability; the windshield is tested against simulated bird impact."),Object(s.b)("p",null,"Software is similar. Instead of writing your entire program in one huge file with many lines of code, you write your code in multiple small modules that you can test more thoroughly than if you tested the assembled whole. In this way, writing testable code is intertwined with writing clean, modular code."),Object(s.b)("p",null,"To make your app more testable, start by separating the view part of your app\u2014your React components\u2014from your business logic and app state (regardless of whether you use Redux, MobX or other solutions). This way, you can keep your business logic testing\u2014which shouldn\u2019t rely on your React components\u2014independent of the components themselves, whose job is primarily rendering your app\u2019s UI!"),Object(s.b)("p",null,"Theoretically, you could go so far as to move all logic and data fetching out of your components. This way your components would be solely dedicated to rendering. Your state would be entirely independent of your components. Your app\u2019s logic would work without any React components at all!"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"We encourage you to further explore the topic of testable code in other learning resources.")),Object(s.b)("h2",{id:"writing-tests"},"Writing Tests"),Object(s.b)("p",null,"After writing testable code, it\u2019s time to write some actual tests! The default template of React Native ships with ",Object(s.b)("a",{parentName:"p",href:"https://jestjs.io"},"Jest")," testing framework. It includes a preset that's tailored to this environment so you can get productive without tweaking the configuration and mocks straight away\u2014",Object(s.b)("a",{parentName:"p",href:"#mocking"},"more on mocks")," shortly. You can use Jest to write all types of tests featured in this guide."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"If you do test-driven development, you actually write tests first! That way, testability of your code is given.")),Object(s.b)("h3",{id:"structuring-tests"},"Structuring Tests"),Object(s.b)("p",null,"Your tests should be short and ideally test only one thing. Let's start with an example unit test written with Jest:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"it('given a date in the past, colorForDueDate() returns red', () => {\n  expect(colorForDueDate('2000-10-20')).toBe('red');\n});\n")),Object(s.b)("p",null,"The test is described by the string passed to the ",Object(s.b)("a",{parentName:"p",href:"https://jestjs.io/docs/en/api#testname-fn-timeout"},Object(s.b)("inlineCode",{parentName:"a"},"it"))," function. Take good care writing the description so that it\u2019s clear what is being tested. Do your best to cover the following:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("strong",{parentName:"li"},"Given")," - some precondition"),Object(s.b)("li",{parentName:"ol"},Object(s.b)("strong",{parentName:"li"},"When")," - some action executed by the function that you\u2019re testing"),Object(s.b)("li",{parentName:"ol"},Object(s.b)("strong",{parentName:"li"},"Then")," - the expected outcome")),Object(s.b)("p",null,"This is also known as AAA (Arrange, Act, Assert)."),Object(s.b)("p",null,"Jest offers ",Object(s.b)("a",{parentName:"p",href:"https://jestjs.io/docs/en/api#describename-fn"},Object(s.b)("inlineCode",{parentName:"a"},"describe"))," function to help structure your tests. Use ",Object(s.b)("inlineCode",{parentName:"p"},"describe")," to group together all tests that belong to one functionality. Describes can be nested, if you need that. Other functions you'll commonly use are ",Object(s.b)("a",{parentName:"p",href:"https://jestjs.io/docs/en/api#beforeeachfn-timeout"},Object(s.b)("inlineCode",{parentName:"a"},"beforeEach"))," or ",Object(s.b)("a",{parentName:"p",href:"https://jestjs.io/docs/en/api#beforeallfn-timeout"},Object(s.b)("inlineCode",{parentName:"a"},"beforeAll"))," that you can use for setting up the objects you're testing. Read more in the ",Object(s.b)("a",{parentName:"p",href:"https://jestjs.io/docs/en/api"},"Jest api reference"),"."),Object(s.b)("p",null,"If your test has many steps or many expectations, you probably want to split it into multiple smaller ones. Also, ensure that your tests are completely independent of one another. Each test in your suite must be executable on its own without first running some other test. Conversely, if you run all your tests together, the first test must not influence the output of the second one."),Object(s.b)("p",null,"Lastly, as developers we like when our code works great and doesn't crash. With tests, this is often the opposite. Think of a failed test as of a ",Object(s.b)("em",{parentName:"p"},"good thing!")," When a test fails, it often means something is not right. This gives you an opportunity to fix the problem before it impacts the users."),Object(s.b)("h2",{id:"unit-tests"},"Unit tests"),Object(s.b)("p",null,"Unit tests cover the smallest parts of code, like individual functions or classes."),Object(s.b)("p",null,"When the object being tested has any dependencies, you\u2019ll often need to mock them out, as described in the next paragraph."),Object(s.b)("p",null,"The great thing about unit tests is that they are quick to write and run. Therefore, as you work, you get fast feedback about whether your tests are passing. Jest even has an option to continuously run tests that are related to code you\u2019re editing: ",Object(s.b)("a",{parentName:"p",href:"https://jestjs.io/docs/en/cli#watch"},"Watch mode"),"."),Object(s.b)("img",{src:"/docs/assets/p_tests-unit.svg",alt:" "}),Object(s.b)("h3",{id:"mocking"},"Mocking"),Object(s.b)("p",null,"Sometimes, when your tested objects have external dependencies, you\u2019ll want to \u201cmock them out.\u201d \u201cMocking\u201d is when you replace some dependency of your code with your own implementation."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Generally, using real objects in your tests is better than using mocks but there are situations where this is not possible. For example: when your JS unit test relies on a native module written in Java or Objective-C.")),Object(s.b)("p",null,"Imagine you\u2019re writing an app that shows the current weather in your city and you\u2019re using some external service or other dependency that provides you with the weather information. If the service tells you that it\u2019s raining, you want to show an image with a rainy cloud. You don\u2019t want to call that service in your tests, because:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"It could make the tests slow and unstable (because of the network requests involved)"),Object(s.b)("li",{parentName:"ul"},"The service may return different data every time you run the test"),Object(s.b)("li",{parentName:"ul"},"Third party services can go offline when you really need to run tests!")),Object(s.b)("p",null,"Therefore, you can provide a mock implementation of the service, effectively replacing thousands of lines of code and some internet-connected thermometers!"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Jest comes with ",Object(s.b)("a",{parentName:"p",href:"https://jestjs.io/docs/en/mock-functions#mocking-modules"},"support for mocking")," from function level all the way to module level mocking.")),Object(s.b)("h2",{id:"integration-tests"},"Integration Tests"),Object(s.b)("p",null,"When writing larger software systems, individual pieces of it need to interact with each other. In unit testing, if your unit depends on another one, you\u2019ll sometimes end up mocking the dependency, replacing it with a fake one."),Object(s.b)("p",null,"In integration testing, real individual units are combined (same as in your app) and tested together to ensure that their cooperation works as expected. This is not to say that mocking does not happen here: you\u2019ll still need mocks (for example, to mock communication with a weather service), but you'll need them much less than in unit testing."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},'Please note that the terminology around what integration testing means is not always consistent. Also, the line between what is a unit test and what is an integration test may not always be clear. For this guide, your test falls into "integration testing" if it:'),Object(s.b)("ul",{parentName:"blockquote"},Object(s.b)("li",{parentName:"ul"},"Combines several modules of your app as described above"),Object(s.b)("li",{parentName:"ul"},"Uses an external system"),Object(s.b)("li",{parentName:"ul"},"Makes a network call to other application (such as the weather service API)"),Object(s.b)("li",{parentName:"ul"},"Does any kind of file or database ",Object(s.b)("abbr",{title:"Input/Output"},"I/O")))),Object(s.b)("img",{src:"/docs/assets/p_tests-integration.svg",alt:" "}),Object(s.b)("h2",{id:"component-tests"},"Component Tests"),Object(s.b)("p",null,"React components are responsible for rendering your app, and users will directly interact with their output. Even if your app's business logic has high testing coverage and is correct, without component tests you may still deliver a broken UI to your users. Component tests could fall into both unit and integration testing, but because they are such a core part of React Native, we'll cover them separately."),Object(s.b)("p",null,"For testing React components, there are two things you may want to test:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Interaction: to ensure the component behaves correctly when interacted with by a user (eg. when user presses a button)"),Object(s.b)("li",{parentName:"ul"},"Rendering: to ensure the component render output used by React is correct (eg. the button's appearance and placement in the UI)")),Object(s.b)("p",null,"For example, if you have a button that has an ",Object(s.b)("inlineCode",{parentName:"p"},"onPress")," listener, you want to test that the button both appears correctly and that tapping the button is correctly handled by the component."),Object(s.b)("p",null,"There are several libraries that can help you testing these:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"React\u2019s ",Object(s.b)("a",{parentName:"li",href:"https://reactjs.org/docs/test-renderer.html"},"Test Renderer"),", developed alongside its core, provides a React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://callstack.github.io/react-native-testing-library/"},"React Native Testing Library")," builds on top of React\u2019s test renderer and adds ",Object(s.b)("inlineCode",{parentName:"li"},"fireEvent")," and ",Object(s.b)("inlineCode",{parentName:"li"},"query")," APIs described in the next paragraph.")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Component tests are only JavaScript tests running in Node.js environment. They do ",Object(s.b)("em",{parentName:"p"},"not")," take into account any iOS, Android, or other platform code which is backing the React Native components. It follows that they cannot give you a 100% confidence that everything works for the user. If there is a bug in the iOS or Android code, they will not find it.")),Object(s.b)("img",{src:"/docs/assets/p_tests-component.svg",alt:" "}),Object(s.b)("h3",{id:"testing-user-interactions"},"Testing User Interactions"),Object(s.b)("p",null,"Aside from rendering some UI, your components handle events like ",Object(s.b)("inlineCode",{parentName:"p"},"onChangeText")," for ",Object(s.b)("inlineCode",{parentName:"p"},"TextInput")," or ",Object(s.b)("inlineCode",{parentName:"p"},"onPress")," for ",Object(s.b)("inlineCode",{parentName:"p"},"Button"),". They may also contain other functions and event callbacks. Consider the following example:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"function GroceryShoppingList() {\n  const [groceryItem, setGroceryItem] = useState('');\n  const [items, setItems] = useState([]);\n\n  const addNewItemToShoppingList = useCallback(() => {\n    setItems([groceryItem, ...items]);\n    setGroceryItem('');\n  }, [groceryItem, items]);\n\n  return (\n    <>\n      <TextInput\n        value={groceryItem}\n        placeholder=\"Enter grocery item\"\n        onChangeText={(text) => setGroceryItem(text)}\n      />\n      <Button\n        title=\"Add the item to list\"\n        onPress={addNewItemToShoppingList}\n      />\n      {items.map((item) => (\n        <Text key={item}>{item}</Text>\n      ))}\n    </>\n  );\n}\n")),Object(s.b)("p",null,"When testing user interactions, test the component from the user perspective\u2014what's on the page? What changes when interacted with?"),Object(s.b)("p",null,"As a rule of thumb, prefer using things users can see or hear:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"make assertions using rendered text or ",Object(s.b)("a",{parentName:"li",href:"https://reactnative.dev/docs/accessibility#accessibility-properties"},"accessibility helpers"))),Object(s.b)("p",null,"Conversely, you should avoid:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"making assertions on component props or state"),Object(s.b)("li",{parentName:"ul"},"testID queries")),Object(s.b)("p",null,"Avoid testing implementation details like props or state\u2014while such tests work, they are not oriented toward how users will interact with the component and tend to break by refactoring (for example when you'd like to rename some things or rewrite class component using hooks)."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"React class components are especially prone to testing their implementation details such as internal state, props or event handlers. To avoid testing implementation details, prefer using function components with Hooks, which make relying on component internals ",Object(s.b)("em",{parentName:"p"},"harder"),".")),Object(s.b)("p",null,"Component testing libraries such as ",Object(s.b)("a",{parentName:"p",href:"https://callstack.github.io/react-native-testing-library/"},"React Native Testing Library")," facilitate writing user-centric tests by careful choice of provided APIs. The following example uses ",Object(s.b)("inlineCode",{parentName:"p"},"fireEvent")," methods ",Object(s.b)("inlineCode",{parentName:"p"},"changeText")," and ",Object(s.b)("inlineCode",{parentName:"p"},"press")," that simulate a user interacting with the component and a query function ",Object(s.b)("inlineCode",{parentName:"p"},"getAllByText")," that finds matching ",Object(s.b)("inlineCode",{parentName:"p"},"Text")," nodes in the rendered output."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"test('given empty GroceryShoppingList, user can add an item to it', () => {\n  const { getByPlaceholder, getByText, getAllByText } = render(\n    <GroceryShoppingList />\n  );\n\n  fireEvent.changeText(\n    getByPlaceholder('Enter grocery item'),\n    'banana'\n  );\n  fireEvent.press(getByText('Add the item to list'));\n\n  const bananaElements = getAllByText('banana');\n  expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list\n});\n")),Object(s.b)("p",null,"This example is not testing how some state changes when you call a function. It tests what happens when a user changes text in the ",Object(s.b)("inlineCode",{parentName:"p"},"TextInput")," and presses the ",Object(s.b)("inlineCode",{parentName:"p"},"Button"),"!"),Object(s.b)("h3",{id:"testing-rendered-output"},"Testing Rendered Output"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://jestjs.io/docs/en/snapshot-testing"},"Snapshot testing")," is an advanced kind of testing enabled by Jest. It is a very powerful and low-level tool, so extra attention is advised when using it."),Object(s.b)("p",null,'A "component snapshot" is a JSX-like string created by a custom React serializer built into Jest. This serializer lets Jest translate React component trees to string that\'s human-readable. Put another way: a component snapshot is a textual representation of your component\u2019s render output ',Object(s.b)("em",{parentName:"p"},"generated")," during a test run. It may look like this:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},'<Text\n  style={\n    Object {\n      "fontSize": 20,\n      "textAlign": "center",\n    }\n  }>\n  Welcome to React Native!\n</Text>\n')),Object(s.b)("p",null,"With snapshot testing, you typically first implement your component and then run the snapshot test. The snapshot test then creates a snapshot and saves it to a file in your repo as a reference snapshot. ",Object(s.b)("strong",{parentName:"p"},"The file is then committed and checked during code review"),". Any future changes to the component render output will change its snapshot, which will cause the test to fail. You then need to update the stored reference snapshot for the test to pass. That change again needs to be committed and reviewed."),Object(s.b)("p",null,"Snapshots have several weak points:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"For you as a developer or reviewer, it can be hard to tell whether a change in snapshot is intended or whether it's evidence of a bug. Especially large snapshots can quickly become hard to understand and their added value becomes low."),Object(s.b)("li",{parentName:"ul"},"When snapshot is created, at that point it is considered to be correct-even in the case when the rendered output is actually wrong."),Object(s.b)("li",{parentName:"ul"},"When a snapshot fails, it's tempting to update it using the ",Object(s.b)("inlineCode",{parentName:"li"},"--updateSnapshot")," jest option without taking proper care to investigate whether the change is expected. Certain developer discipline is thus needed.")),Object(s.b)("p",null,"Snapshots themselves do not ensure that your component render logic is correct, they are merely good at guarding against unexpected changes and for checking that the components in the React tree under test receive the expected props (styles and etc.)."),Object(s.b)("p",null,"We recommend that you only use small snapshots (see ",Object(s.b)("a",{parentName:"p",href:"https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md"},Object(s.b)("inlineCode",{parentName:"a"},"no-large-snapshots")," rule"),"). If you want to test a ",Object(s.b)("em",{parentName:"p"},"change")," between two React component states, use ",Object(s.b)("a",{parentName:"p",href:"https://github.com/jest-community/snapshot-diff"},Object(s.b)("inlineCode",{parentName:"a"},"snapshot-diff")),". When in doubt, prefer explicit expectations as described in the previous paragraph."),Object(s.b)("img",{src:"/docs/assets/p_tests-snapshot.svg",alt:" "}),Object(s.b)("h2",{id:"end-to-end-tests"},"End-to-End Tests"),Object(s.b)("p",null,"In end-to-end (E2E) tests, you verify your app is working as expected on a device (or a simulator / emulator) from the user perspective."),Object(s.b)("p",null,"This is done by building your app in the release configuration and running the tests against it. In E2E tests, you no longer think about React components, React Native APIs, Redux stores or any business logic. That is not the purpose of E2E tests and those are not even accessible to you during E2E testing."),Object(s.b)("p",null,"Instead, E2E testing libraries allow you to find and control elements in the screen of your app: for example, you can ",Object(s.b)("em",{parentName:"p"},"actually")," tap buttons or insert text into ",Object(s.b)("inlineCode",{parentName:"p"},"TextInputs")," the same way a real user would. Then you can make assertions about whether or not a certain element exists in the app\u2019s screen, whether or not it\u2019s visible, what text it contains, and so on."),Object(s.b)("p",null,"E2E tests give you the highest possible confidence that part of your app is working. The tradeoffs include:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"writing them is more time consuming compared to the other types of tests"),Object(s.b)("li",{parentName:"ul"},"they are slower to run"),Object(s.b)("li",{parentName:"ul"},'they are more prone to flakiness (a "flaky" test is a test which randomly passes and fails without any change to code)')),Object(s.b)("p",null,"Try to cover the vital parts of your app with E2E tests: authentication flow, core functionalities, payments, etc. Use faster JS tests for the non-vital parts of your app. The more tests you add, the higher your confidence, but also, the more time you'll spend maintaining and running them. Consider the tradeoffs and decide what's best for you."),Object(s.b)("p",null,"There are several E2E testing tools available: in the React Native community, ",Object(s.b)("a",{parentName:"p",href:"https://github.com/wix/detox/"},"Detox")," is a popular framework because it\u2019s tailored for React Native apps. Another popular library in the space of iOS and Android apps is ",Object(s.b)("a",{parentName:"p",href:"http://appium.io/"},"Appium"),"."),Object(s.b)("img",{src:"/docs/assets/p_tests-e2e.svg",alt:" "}),Object(s.b)("h2",{id:"summary"},"Summary"),Object(s.b)("p",null,"We hope you enjoyed reading and learned something from this guide. There are many ways you can test your apps. It may be hard to decide what to use at first. However, we believe it all will make sense once you start adding tests to your awesome React Native app. So what are you waiting for? Get your coverage up!"),Object(s.b)("h3",{id:"links"},"Links"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://reactjs.org/docs/testing.html"},"React testing overview")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://callstack.github.io/react-native-testing-library/"},"React Native Testing Library")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://jestjs.io/docs/en/tutorial-react-native"},"Jest docs")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/wix/detox/"},"Detox")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"http://appium.io/"},"Appium"))),Object(s.b)("hr",null),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"This guide originally authored and contributed in full by ",Object(s.b)("a",{parentName:"em",href:"https://twitter.com/vonovak"},"Vojtech Novak"),".")))}u.isMDXComponent=!0},706:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,d=p["".concat(i,".").concat(h)]||p[h]||b[h]||s;return n?o.a.createElement(d,r(r({ref:t},l),{},{components:n})):o.a.createElement(d,r({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var l=2;l<s;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);