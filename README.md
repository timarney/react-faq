# React FAQ

This guide aims to pull together some resources from around the web into a central location for quick reference.  It aims to point to quality content to help understand React core concepts.  

In the future it might cover best practices and how and why to use patterns and styles.  Patterns etc... are still being discovered, it's okay if you don't know all the terms.  Remember we're all learning.  Read, Try, Mess Up (it's okay), Learn.

Enjoy the links and please *share/link*  back to this repo.  If it helped you it might help someone else.

#Start

**I don't know React what should I watch / read before I start?**

* https://facebook.github.io/react/docs/thinking-in-react.html
* https://www.youtube.com/watch?v=x7cQ3mrcKaY (Pete Hunt: React: Rethinking best practices)
* 🔥 https://youtu.be/Fk--XUEorvc?t=20666 (All the terrible things I did the first time I wrote a complex React App @raquelxmoss) 

#Creating a React Project

**How do I create a new React project?**

* https://github.com/facebookincubator/create-react-app (official)
* https://github.com/insin/nwb (if you need more control of the setup / config)

**Can I play around with React Online?**

* http://codepen.io/Arney/pen/OXYqWb // App extends React.Component style
* http://codepen.io/Arney/pen/QERoaQ // React.createClass style

#Why use React

**What so good about React?**

* https://vacuumlabs.com/blog/7-strengths-of-react-every-programmer-should-know-about
* https://facebook.github.io/react/contributing/design-principles.html

#JSX
**What's JSX?**

* https://facebook.github.io/react/docs/jsx-in-depth.html

#State
**How do I handle state?**

* https://medium.freecodecamp.com/where-do-i-belong-a-guide-to-saving-react-component-data-in-state-store-static-and-this-c49b335e2a00#.8k7tc37cs
* https://medium.com/react-ecosystem/how-to-handle-state-in-react-6f2d3cd73a0c#.dwz84fx9s
* https://twitter.com/dan_abramov/status/749710501916139520
* http://brewhouse.io/blog/2015/03/24/best-practices-for-component-state-in-reactjs.html

**How can I decouple state and UI?**

* https://medium.com/@mweststrate/how-to-decouple-state-and-ui-a-k-a-you-dont-need-componentwillmount-cc90b787aa37#.7l8ji1wer

#Passing Data

**How do I pass props?**

* https://facebook.github.io/react/docs/transferring-props.html

**Should I use import, props, or context in React?**

* http://stackoverflow.com/questions/39111775/differences-between-require-and-passing-an-object-via-prop-or-context/39111942

**How do I pass boolean values?**

* https://twitter.com/Jack_Franklin/status/768735664485568512

#Component Types

**How do I decide what type of Component to use?**

* https://toddmotto.com/react-create-class-versus-component
* https://www.peterbe.com/plog/4-different-kinds-of-react-component-styles
* https://reactjsnews.com/composing-components
* https://www.youtube.com/watch?v=GWVjMHDKSfU&feature=youtu.be&a

**Presentational and Container Components** -> http://reactpatterns.com/#Container%20component

* https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.xo2al5187

**Higher-Order Components** -> http://reactpatterns.com/#Higher-order%20component

* https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.mpb29ree6
* https://www.sitepoint.com/react-higher-order-components/
* https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.prpfdo79n
* http://engineering.blogfoster.com/higher-order-components-theory-and-practice

**Function as Child Components** -> http://reactpatterns.com/#Function%20as%20children

* https://medium.com/merrickchristensen/function-as-child-components-5f3920a9ace9#.10fbiyqc5

**Stateless Function** -> http://reactpatterns.com/#Stateless%20function

#Binding

**What is this bind thing?**

* https://daveceddia.com/avoid-bind-when-passing-props/

#Rendering

**What should go in the render function?**

* https://medium.com/@SimonRadionov/return-as-soon-as-you-know-the-answer-dec6369b9b67#.82kxymyki

#Lifecycle Methods

**What are Lifecycle Methods?**

* https://medium.com/@notrab/going-further-with-react-lifecycle-methods-2ffdc5bdf52c#.bu0ufrosb
* https://facebook.github.io/react/docs/component-specs.html
* https://twitter.com/pbesh/status/738008776805060608
* https://medium.com/react-ecosystem/react-components-lifecycle-ce09239010df#.w7v5cw6tk

#Patterns

* http://reactpatterns.com

#Learning

**What do I need to know about React to get started?**

* https://github.com/petehunt/react-howto
* http://media.bemyapp.com/intro-react-js-core-concepts
* https://github.com/reactjs/react-basic/blob/master/README.md (Basic Theoretical Concepts)
* https://medium.com/react-ecosystem/components-the-war-horses-of-react-1085dddc14e5#.egkrhoxtz

#Gotchas

**What are some React Gotchas?**

* https://daveceddia.com/react-gotchas/

#Refs

**What are refs and are string refs are bad?**

* https://facebook.github.io/react/docs/more-about-refs.html
* https://twitter.com/dan_abramov/status/752936646602031104
* https://news.ycombinator.com/edit?id=12093234

#PATENTS
**What's all this stuff I hear about Facebook PATENTS clause?**

* https://gist.github.com/gaearon/df0c4025e67399af72786d7ac7c819cc

#Mixins

**Why are Mixins Considered Harmful?**

* https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html

#Internationalization 

**How should I handle internationalization?**

* https://medium.freecodecamp.com/internationalization-in-react-7264738274a0#.bcfxgycwv

#Third Party Libraries

**How do I use third party libraries?**

* https://www.youtube.com/watch?v=GWVjMHDKSfU&feature=youtu.be&a

#Performance

**How can I make my app faster?**

* https://medium.com/modus-create-front-end-development/component-rendering-performance-in-react-df859b474adc#.gvyat7vkb
* https://twitter.com/dan_abramov/status/759383530120110080
* https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.hewsz120q
* http://jamesknelson.com/should-i-use-shouldcomponentupdate/

#Context
⚠️ Context is an **advanced and experimental** feature. The API is likely to change in future releases. The rumours of its existence are true but be careful!

* https://medium.com/react-ecosystem/how-to-handle-react-context-a7592dfdcbc#.rtwgxxy0d

#Animations

**How do I animate things in React?**

* 🔥 💯 https://youtu.be/Fk--XUEorvc?t=2344 Sarah Drasner @sarah_edo
* https://medium.com/@joethedave/achieving-ui-animations-with-react-the-right-way-562fa8a91935#.g8qmlz5d6

**Is there declarative api for animations?**

* https://github.com/chenglou/react-motion
* https://medium.com/@nashvail/a-gentle-introduction-to-react-motion-dc50dd9f2459#.aio7blbsi

#Redux and Mobx

**What's (Redux/Mobx)?**

* https://www.reddit.com/r/reactjs/comments/4npzq5/confused_redux_or_mobx/

**Do I need to use (Redux/Mobx)?**

* https://twitter.com/dan_abramov/status/737036433215610880

#Add to an existing app

**How do I start adding React to an existing app?**

* https://scotch.io/tutorials/how-to-sprinkle-reactjs-into-an-existing-web-application
* Ryan Florence - Don't Rewrite, React!  https://www.youtube.com/watch?v=BF58ZJ1ZQxY

#CSS and React

**What about styling things in React?**

* https://facebook.github.io/react/tips/inline-styles.html
* http://shoptalkshow.com/episodes/180-panel-on-inline-styles (PANEL ON 'INLINE STYLES')
* https://blog.grommet.io/post/2016/08/10/css-in-js-may-not-be-the-solution-to-all-your-problems
* http://www.dadsindev.com/12 (CSS in JS + CSS Modules)

https://www.youtube.com/watch?v=BXOF_8jDdf8 (CSS in JS tech chat)

**Are there any tools available to convert 'css' to 'CSS in JS'?**

* https://jsbin.com/dugija/edit?js,output

#Testing

* Testing React Applications w/Jack Franklin
https://www.youtube.com/watch?v=eWN8F_WOBAQ
* https://twitter.com/dan_abramov/status/762257231471579136

#Video Courses

**What are some good video resources/courses to learn React?**

* https://reactforbeginners.com
* https://egghead.io/courses/react-fundamentals (they have a bunch)
* https://frontendmasters.com/courses/react-intro (they have a bunch)
* http://courses.reactjsprogram.com/courses/reactjsprogrambundle
* https://LearnRedux.com
* https://egghead.io/courses/manage-complex-state-in-react-apps-with-mobx

#A11Y

**What about accessibility?**

* How to design for accessibility (*Note:* not specific to React but a solid primer on the topic*)
http://www.bbc.co.uk/gel/guidelines/how-to-design-for-accessibility 

<hr>

**How do I handle A11y in React**
* https://www.youtube.com/watch?v=z5e7kWSHWTg#t=631
* Bringing the Web Back to the Blind by Ryan Florence https://www.youtube.com/watch?v=YuzS-g6Qvq8 (*Note:* not specific to React)

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

* http://www.reactenlightenment.com
* https://survivejs.com
* https://www.fullstackreact.com
