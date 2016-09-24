# React FAQ

This guide aims to pull together quality content about React core concepts into a central location for quick reference.  

In the future it might cover best practices and how and why to use different patterns and techniques.  For now enjoy the links and please *share/link*  back to this repo.

Remember we're all learning.  Read, Try, Mess Up (it's okay), Learn. It's okay if you don't know all the terms.

#Start

**I don't know React what should I watch / read before I start?**

* [Thinking in React - Pete Hunt](https://facebook.github.io/react/docs/thinking-in-react.html)
* [Pete Hunt: React: Rethinking best practices (JSConf EU 2013)](https://www.youtube.com/watch?v=x7cQ3mrcKaY)
* [Pete Hunt: The Secrets of React's Virtual DOM (FutureJS 2014)](https://www.youtube.com/watch?v=-DX3vJiqxm4)
* 🔥 [All the terrible things I did the first time I wrote a complex React App ](https://youtu.be/Fk--XUEorvc?t=20666) Raquel @raquelxmoss
* [React in 7 Minutes](https://egghead.io/lessons/react-react-in-7-minutes) this is a slightly dated but still really good starter
* [Books](#books)

#History
[JSConfUS 2013 - Tom Occhino and Jordan Walke: JS Apps at Facebook](https://www.youtube.com/watch?v=GW0rj4sNH2w&index=10&list=PL37ZVnwpeshF7AHpbZt33aW0brYJyNftx) The one where React became #OSS

#Creating a React Project

**How do I create a new React project?**

* 💯 [create-react-app](https://github.com/facebookincubator/create-react-app)
* [nwb](https://github.com/insin/nwb) if you need more control of the setup / config

**Where can I find videos for using React Create App?**

[React Create App + Express](https://www.youtube.com/watch?v=gbVhmaW04bc&feature=youtu.be) @sprjrx @ladyleet


**Can I play around with React Online?**

* [extends React.Component style](http://codepen.io/Arney/pen/OXYqWb)
* [React.createClass style](http://codepen.io/Arney/pen/QERoaQ)
* [React JSBin](http://react.jsbin.com/?html,css,js,output)

#Why use React

**What so good about React?**

* [7 Strengths of React Every Programmer Should Know About](https://vacuumlabs.com/blog/7-strengths-of-react-every-programmer-should-know-about) Samuel Hapák @samuha
* [Design Principles](https://facebook.github.io/react/contributing/design-principles.html)

#JSX
**What's JSX?**

* [JSX in Depth](https://facebook.github.io/react/docs/jsx-in-depth.html)
* [React’s JSX: The Other Side of the Coin](https://medium.com/@housecor/react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98#.i5rmd9h07) Cory House @housecor
* [What does JSX stand for?](https://twitter.com/tomocchino/status/769931611303321601) Tom Occhino @tomocchino

**What does JSX really do for me?**

[This is the sort of stuff JSX saves you from having to manage](https://gist.github.com/insin/8e72bed793772d82ca8d) Jonny Buchanan ‏@jbscript

#The Virtual DOM
**What is the Virtual DOM**

* [The one thing that no one properly explains about React — Why Virtual DOM](https://hashnode.com/post/the-one-thing-that-no-one-properly-explains-about-react-why-virtual-dom-cisczhfj41bmssp53mvfwmgrq) Sai Kishore Komanduri @saiki
* [The VirtualDOM and why it’s so dang fast!](http://thereactionary.net/faster-than-a-speeding-repaint-the-virtualdom-and-why-its-so-dang-fast) Zac Braddy @reactionaryjs

#State
**How do I handle state?**

* [The 5 Types Of React Application State](http://jamesknelson.com/5-types-react-application-state) James K Nelson @james_k_nelson
* [State of React #1: A Stateless React App?](http://jamesknelson.com/state-react-1-stateless-react-app) James K Nelson @james_k_nelson
* [A Case for setState](https://medium.com/@zackargyle/a-case-for-setstate-1f1c47cd3f73#.w89epdtmo) Zack Argyle
* [Where to Hold React Component Data: state, store, static, and this](https://medium.freecodecamp.com/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00#.8k7tc37cs) Sam Corcos
* [How to handle state in React. The missing FAQ](https://medium.com/react-ecosystem/how-to-handle-state-in-react-6f2d3cd73a0c#.dwz84fx9s) Osmel Mora @osmel_mora
* [Should I keep something in React component state? I made a small cheatsheet.](https://twitter.com/dan_abramov/status/749710501916139520) Dan Abramov @dan_abramov
* [Best Practices for Component State in React.js](http://brewhouse.io/blog/2015/03/24/best-practices-for-component-state-in-reactjs.html) Gabe Scholz @gabescholz
* [Exploring React’s State Propagation](https://www.sitepoint.com/exploring-reacts-state-propagation) Eric Greene @ericwgreene

**How can I decouple state and UI?**

* [How to decouple state and UI](https://medium.com/@mweststrate/how-to-decouple-state-and-ui-a-k-a-you-dont-need-componentwillmount-cc90b787aa37#.7l8ji1wer) Michel Weststrate @mweststrate

#Props

**How do I pass props?**

* [Transferring Props](https://facebook.github.io/react/docs/transferring-props.html) Jack Franklin @Jack_Franklin

**Should I use import, props, or context in React?**

* [Differences between require() and passing an object via prop or context](http://stackoverflow.com/questions/39111775/differences-between-require-and-passing-an-object-via-prop-or-context/39111942) Dan Abramov @dan_abramov

**How do I pass boolean values?**

* [JSX <Foo bar={true} /> and <Foo bar> are equivalent](https://twitter.com/Jack_Franklin/status/768735664485568512)

**How do I validate props?**
* [Better Prop Validation in React](https://medium.com/@MoeSattler/better-prop-validation-in-react-cc83590d311f#.wdhbsrlgj) Moe Sattler @travelperk

#Component Types

**What types of components are there?**

* [React Component Jargon as of August 2016](https://blog.anthonycomito.com/react-component-jargon-as-of-august-2016-28451d8ceb1d#.a417p5u26)

**Presentational and Container Components**  [```<Code />```](http://reactpatterns.com/#Container%20component)  

* [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.xo2al5187) Dan Abramov @dan_abramov

**Higher-Order Components** [```<Code />```](http://reactpatterns.com/#Higher-order%20component)  

* [React Higher Order Components in depth](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.mpb29ree6) @franleplant
* [Higher Order Components: A React Application Design Pattern](https://www.sitepoint.com/react-higher-order-components) Jack Franklin @Jack_Franklin
* [Mixins Are Dead. Long Live Composition](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.prpfdo79n) Dan Abramov @dan_abramov
* [Higher Order Components: Theory and Practice](http://engineering.blogfoster.com/higher-order-components-theory-and-practice)

**Function as Child Components** [```<Code />```](http://reactpatterns.com/#Function%20as%20children)

* [Function as Child Components](https://medium.com/merrickchristensen/function-as-child-components-5f3920a9ace9#.10fbiyqc5) Merrick Christensen @iammerrick

**Stateless Function** [```<Code />```](http://reactpatterns.com/#Stateless%20function)

* [React Stateless Functional Components: Nine Wins You Might Have Overlooked](https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.iydj782xq) Cory House @housecor

**How do I decide what type of Component to use?**

* [React.createClass versus extends React.Component](https://toddmotto.com/react-create-class-versus-component) Todd Motto
* [4 different kinds of React component styles](https://www.peterbe.com/plog/4-different-kinds-of-react-component-styles) Peter Bengtsson @peterbe
* [React.Component vs React.createClass](https://reactjsnews.com/composing-components) Naman Goel & Zach Silveira

#Finding Components

**Where are some good places to find components?**

* [React Components Catalog](https://github.com/brillout/awesome-react-components)
* [React Rocks](https://react.rocks)

#Binding

**What is this bind thing?**

* [Don't Use Bind When Passing Props](https://daveceddia.com/avoid-bind-when-passing-props) Dave Ceddia
* [5 Approaches for Handling Binding](https://medium.com/@housecor/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56#.4z71l0kmb) Cory House @housecor
* [How to Deal with `this` Reference Inside the Promise?](https://www.toptal.com/react/tips-and-practices) Toptal Developers

#Events

**How does the event system work in React?**

* [React events in depth](https://www.youtube.com/watch?v=dRo_egw7tBc) Kent C. Dodds, Ben Alpert, & Dan Abramov

#Rendering

**What should go in the render function?**

* [Return as soon as you know the answer](https://medium.com/@SimonRadionov/return-as-soon-as-you-know-the-answer-dec6369b9b67#.82kxymyki) @SimonRadionov

#Lifecycle Methods

**What are Lifecycle Methods?**

* [Going further with React lifecycle methods](https://medium.com/@notrab/going-further-with-react-lifecycle-methods-2ffdc5bdf52c#.bu0ufrosb) Jamie Barton
* [Component Specs and Lifecycle](https://facebook.github.io/react/docs/component-specs.html)
* [My #reactjs component lifecycle cheatsheet for quick reference](https://twitter.com/pbesh/status/738008776805060608) Peter Beshai @pbesh
* [React component’s lifecycle](https://medium.com/react-ecosystem/react-components-lifecycle-ce09239010df#.w7v5cw6tk) Osmel Mora @osmel_mora

#Keys

**Why can't i put key in default props (or define the default somewhere else)?**

* [Why can't i put key in default props](https://www.reddit.com/r/reactjs/comments/4mjdcf/why_cant_i_put_key_in_default_props_or_define_the/d3xwa6m)

**What should I use for a key?**

* [Index as a key is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318#.y4ru46ikc) Robin Pokorný @robinpokorny

**What are some examples where I should manually change a key?**

* [The key is using key](https://twitter.com/timarney/status/730785238654287873) Tim Arney @timarney

#Forms

**How can I build forms with React?**

* [Learn Raw React: Ridiculously Simple Forms](http://jamesknelson.com/learn-raw-react-ridiculously-simple-forms) James K Nelson @james_k_nelson

#Patterns

* [React Patterns](http://reactpatterns.com) @chantastic
* [React.js in patterns](http://krasimirtsonev.com/blog/article/react-js-in-design-patterns) Krasimir Tsonev
* [Patterns For Style Composition In React](http://jxnblk.com/writing/posts/patterns-for-style-composition-in-react) Brent Jackson @jxnblk

#Learning

**What do I need to know about React to get started?**

* [react-howto](https://github.com/petehunt/react-howto) Pete Hunt
* [Intro to React.JS Core Concepts](http://media.bemyapp.com/intro-react-js-core-concepts) Pascal Weiland @bitcrowd / Tony Alito
* [React - Basic Theoretical Concepts](https://github.com/reactjs/react-basic/blob/master/README.md)
* [Components, the war horses of React](https://medium.com/react-ecosystem/components-the-war-horses-of-react-1085dddc14e5#.egkrhoxtz) Osmel Mora @osmel_mora

#Gotchas

**What are some React Gotchas?**

* [React Gotchas](https://daveceddia.com/react-gotchas) Dave Ceddia

#Refs

**What are refs and are string refs are bad?**

* [Refs to Components](https://facebook.github.io/react/docs/more-about-refs.html)
* [Why do you use findDOMNode()?](https://twitter.com/dan_abramov/status/752936646602031104) Dan Abramov @dan_abramov
* [String refs are bad in quite a few ways](https://news.ycombinator.com/edit?id=12093234) Dan Abramov @dan_abramov

#PATENTS

**What's all this stuff I hear about Facebook PATENTS clause?**

* [Some links to point people to when they misinterpret PATENTS clause or spread false claims](https://gist.github.com/gaearon/df0c4025e67399af72786d7ac7c819cc) Dan Abramov @dan_abramov

#Mixins

**Why are Mixins Considered Harmful?**

* [Mixins Considered Harmful](https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html) Dan Abramov @dan_abramov

#Internationalization 

**How should I handle internationalization?**

* [Internationalization in React](https://medium.freecodecamp.com/internationalization-in-react-7264738274a0#.bcfxgycwv) Preethi Kasireddy

#Third Party Libraries

**How do I use third party libraries?**

* [Integration with Third Party Libraries](https://www.youtube.com/watch?v=GWVjMHDKSfU&feature=youtu.be&a) Rally Coding

#Performance

**How can I make my app faster?**

* [Component Rendering Performance in React](https://medium.com/modus-create-front-end-development/component-rendering-performance-in-react-df859b474adc#.gvyat7vkb) Grgur Grisogono
* [Don‘t use PureComponent everywhere. Measure](https://twitter.com/dan_abramov/status/759383530120110080) Dan Abramov @dan_abramov
* [React.js pure render performance anti-pattern](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.hewsz120q)
* [Should I use shouldComponentUpdate?](http://jamesknelson.com/should-i-use-shouldcomponentupdate) James K Nelson @james_k_nelson
* [Reconciliation](https://facebook.github.io/react/docs/reconciliation.html)

#Context
⚠️ Context is an **advanced and experimental** feature. The API is likely to change in future releases. The rumours of its existence are true but be careful!

* [How to handle React context in a reliable way](https://medium.com/react-ecosystem/how-to-handle-react-context-a7592dfdcbc#.rtwgxxy0d) Osmel Mora @osmel_mora

#Animations

**How do I animate things in React?**

* 🔥 💯 [Animating In React](https://youtu.be/Fk--XUEorvc?t=2344 Sarah Drasner) @sarah_edo
* [UI Animations with React — The Right Way](https://medium.com/@joethedave/achieving-ui-animations-with-react-the-right-way-562fa8a91935#.g8qmlz5d6) Joe Davis
* [Animations with ReactTransitionGroup](https://medium.com/@cheapsteak/animations-with-reacttransitiongroup-4972ad7da286#.qmrksnixv) Chang Wang @CheapSteak

**Is there declarative api for animations?**

* [React Motion](https://github.com/chenglou/react-motion)
* [A gentle introduction to React Motion](https://medium.com/@nashvail/a-gentle-introduction-to-react-motion-dc50dd9f2459#.aio7blbsi)

**How can I animate Page Transitions?**

* [React Page Transition Animations](https://medium.com/front-end-hacking/react-page-transition-animations-9d18c90a9831#.lc9943ajq) Huan Ji

#SVG & React

**How do I work with SVG's in React?**

* [Icons as React Components](https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792#.lmbz3v9ic)
* [Creating an SVG Icon System with React](https://css-tricks.com/creating-svg-icon-system-react) @sarah_edo

#Redux and Mobx

**What's (Redux/Mobx)?**

* [Confused! Redux or MobX?](https://www.reddit.com/r/reactjs/comments/4npzq5/confused_redux_or_mobx)

**Do I need to use (Redux/Mobx)?**

* [You don’t need Redux if your data never changes. The whole point of it is managing changes.](https://twitter.com/dan_abramov/status/737036433215610880) Dan Abramov @dan_abramov

**How to scale React-Redux apps?**

* [About folder structure, styling, data fetching, etc.](https://www.smashingmagazine.com/2016/09/how-to-scale-react-applications/) Max Stoiber @mxstbr 

#Add to an existing app

**How do I start adding React to an existing app?**

* [How to Sprinkle ReactJS into an Existing Web Application](https://scotch.io/tutorials/how-to-sprinkle-reactjs-into-an-existing-web-application) Andrew Del Prete @andrewdelprete
* [Don't Rewrite, React!](https://www.youtube.com/watch?v=BF58ZJ1ZQxY) Ryan Florence
* [Migrating Safely to React](https://www.youtube.com/watch?v=sXDZBxbRRag&list=PLNBNS7NRGKMG3uLrm5fgY02hJ87Wzb4IU&index=1) Jamis Charles

#CSS and React

**What about styling things in React?**

* [Reusable React Component with Overridable Inline CSS Styles](http://staxmanade.com/2016/06/reusable-react-component-with-overridable-inline-css-styles/)
* [Inline Styles](https://facebook.github.io/react/tips/inline-styles.html)
* [PANEL ON 'INLINE STYLES'](http://shoptalkshow.com/episodes/180-panel-on-inline-styles) @ShopTalkShow
* [CSS in JS may not be the solution to all your problems](https://blog.grommet.io/post/2016/08/10/css-in-js-may-not-be-the-solution-to-all-your-problems) Alan Souza
* [CSS in JS + CSS Modules](http://www.dadsindev.com/12) 
* [CSS in JS tech chat](https://www.youtube.com/watch?v=BXOF_8jDdf8) Kent C. Dodds & Sarah Drasner

**Are there any tools available to convert 'css' to 'CSS in JS'?**

* [convert 'css' to 'CSS in JS'](https://jsbin.com/dugija/edit?js,output) Kent C. Dodds

#Testing

* [Testing React Applications](https://www.youtube.com/watch?v=eWN8F_WOBAQ) Jack Franklin
* [People seem to laugh at this but I think it’s actually pretty reasonable](https://twitter.com/dan_abramov/status/762257231471579136) Dan Abramov @dan_abramov

#Conference Videos
* [React.js Conf 2016](https://www.youtube.com/watch?v=MGuKhcnrqGA&list=PLb0IAmt7-GS0M8Q95RIc2lOM6nc77q1IY)
* [ReactEurope](https://www.youtube.com/channel/UCorlLn2oZfgOJ-FUcF2eZ1A)
* [ReactRally](https://www.youtube.com/channel/UCXBhQ05nu3L1abBUGeQ0ahw)

#Contributing to React JS

**Where can I learn about Contributing to React JS?**

* [Contributing to React JS](https://www.youtube.com/watch?v=wUpPsEcGsg8) Kent C. Dodds


#Universal React

* [React on the Server for Beginners](https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app) Luciano Mammino @loige

#Video Courses

**What are some good video resources/courses to learn React?**

* https://reactforbeginners.com
* https://app.pluralsight.com/courses/react-redux-react-router-es6
* https://www.pluralsight.com/courses/react-flux-building-applications
* https://egghead.io/courses/react-fundamentals (they have a bunch)
* https://frontendmasters.com/courses/react-intro (they have a bunch)
* http://courses.reactjsprogram.com/courses/reactjsprogrambundle
* https://LearnRedux.com
* https://egghead.io/courses/manage-complex-state-in-react-apps-with-mobx

#A11Y

**What about accessibility?**

* [How to design for accessibility](http://www.bbc.co.uk/gel/guidelines/how-to-design-for-accessibility ) *Note:* not specific to React but a solid primer on the topic

<hr>

**How do I handle A11y in React**
* [Excerpt from React.js Conf 2015 - Hype!](https://www.youtube.com/watch?v=z5e7kWSHWTg#t=631) Ryan Florence
* [Bringing the Web Back to the Blind by Ryan Florence ](https://www.youtube.com/watch?v=YuzS-g6Qvq8) *Note:* not specific to React

#Talks
* [React to the Future - Slide Deck](http://elijahmanor.com/talks/react-to-the-future/dist) Elijah Manor @elijahmanor
* [React Things - PDF Slides](https://react.rocks/blog/images/React_Intro_sept_2016.pdf) Jeff Winkler @winkler1 

#Training

**Where can I get React training?**
<hr>

*Micheal Jackson* @mjackson & *Ryan Florence* @ryanflorence

* https://reactjs-training.com

<hr>
*Brian Holt* @holtbt

* https://btholt.github.io/es6-react-pres
* https://btholt.github.io/complete-intro-to-react
* https://github.com/btholt/react-redux-workshop

#Books

**Where can I find some good books about React?**

* [React Enlightenment ](http://www.reactenlightenment.com) Cody Lindley @codylindley
* [Build your first real world React.js application](http://academy.plot.ly/#react) Max Stoiber @mxstbr
* [SurviveJS React](http://survivejs.com/react/introduction)
* [Fullstack React](https://www.fullstackreact.com)
