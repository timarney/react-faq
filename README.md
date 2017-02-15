# React FAQ

This guide aims to pull together quality content about React core concepts into a central location for quick reference.

Remember we're all learning.  Read, Try, Mess Up (it's okay).

### Other Languages
[🇪🇸 Español](https://github.com/xDae/react-faq)
[🇨🇳 简体中文](https://github.com/justjavac/react-faq)

#Start
>There's lots to learn but if you break it down there are some key concepts to focus on. JSX, React elements, Components, Lifecycle Methods, Props and State.  These articles will start you down the path to learning React.

**I don't know React what should I watch / read before I start?**
* [Thinking in React - Pete Hunt](https://facebook.github.io/react/docs/thinking-in-react.html)
* 🔥 [Teaching React Without Using React](https://medium.com/@ericclemmons/teaching-react-without-using-react-a4b87cfd4e87#.q8cyvryw1) Eric Clemmons @ericclemmons
* 🔥 [13 things you need to know about React](http://aimforsimplicity.com/post/13-things-you-need-to-know-about-react)  @kjendrzyca
* [The 5 Things You Need To Know To Understand React](https://medium.com/@sachagreif/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3#.uii8of7um) Sacha Greif

**Official React Docs are a great resource**
* [Official React Docs](https://facebook.github.io/react/docs/hello-world.html)

**Additional information to start with**
* [Pete Hunt: React: Rethinking best practices (JSConf EU 2013)](https://www.youtube.com/watch?v=x7cQ3mrcKaY)
* [React in 7 Minutes](https://egghead.io/lessons/react-react-in-7-minutes) this is a slightly dated but still really good starter
* [Complete Intro to React - React, Webpack, Babel, Redux, React Router, SSR](https://btholt.github.io/complete-intro-to-react/) Brian Holt(@holtbt) for Frontend Masters worshop
* [React "Aha" Moments](https://tylermcginnis.com/react-aha-moments) Tyler McGinnis @tylermcginnis33
* [All the terrible things I did the first time I wrote a complex React App ](https://youtu.be/Fk--XUEorvc?t=20666) Raquel @raquelxmoss
* [Introduction to React](https://mva.microsoft.com/en-US/training-courses/introduction-to-react-16635?l=4wrKgdJrC_206218965) Eric W. Greene / Microsoft Virtual Academy

## Resources

- [History](history.md)
- [Creating a React Project](creating-a-react-project.md)
- [Why use React?](why-use-react.md)
- [JSX](jsx.md)
- [The Virtual DOM](the-virtual-dom.md)
- [React elements](react-elements.md)
- [Components](#components)
  - [Lifecycle Methods](#lifecycle-methods)
  - [Component Types](#component-types)
  - [Finding Components](#finding-components)
  - [Controlled Components](#controlled-components)
  - [Props](#props)
  - [PropTypes](#proptypes)
  - [State](#state)
  - [Children API](#children-api)
  - [Binding](#binding)
  - [Events](#events)
  - [Rendering](#rendering)
  - [Keys](#keys)
  - [Refs](refs.md)
- [Context](context.md)
- [Forms](forms.md)
- [React Ajax](react-ajax.md)
- [Patterns](patterns.md)
- [Gotchas](gotchas.md)
- [PATENTS](patents.md)
- [Internationalization](internationalization.md)
- [Third Party Libraries](third-party-libraries.md)
- [Performance](performance.md)
- [Animations](animations.md)
- [SVG & React](svg-react.md)
- [React Style Guides](style-guides.md)
- [Redux and Mobx](redux-mobx.md)
- [Adding React to an existing app](add-to-existing-app.md)
- [CSS and React](css.md)
- [Testing](testing.md)
- [Deep Dive](deep-dive.md)
- [React Fiber](react-fiber.md)
- [Video Courses](videos-courses.md)
- [A11Y](a11y.md)
- [Talks](talks.md)
- [Training](training.md)
- [Books](books.md)
- [Newsletters](newsletters.md)
- [Interview Questions](interview-questions.md)
- [Tools](tools.md)
- [Server-Side Rendering](server-side-rendering.md)


#Components
> Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. - [React Docs](https://facebook.github.io/react/docs/components-and-props.html)

**What are some of your best practices when working with components?**

> * Keep it (F)ocused.
* Keep it (I)ndependent.
* Keep it (R)eusable.
* Keep it (S)mall.
* Keep it (T)estable.
* or in short, `FIRST`.

> — Addy Osmani https://addyosmani.com/first

See :  https://twitter.com/mxstbr/status/790084862954864640 Max Stoiber @mxstbr

*Also some best practices here:* [Our Best Practices for Writing React Components](https://medium.com/code-life/our-best-practices-for-writing-react-components-dec3eb5c3fc8?imm_mid=0ed2ce&cmp=em-web-na-na-newsltr_20170208#.emb0wf1tl) @ MuseFind

#Lifecycle Methods

>Components have several "lifecycle methods" that allow you to override / run code at particular times.

**What are Lifecycle Methods?**

* [React components lifecycle diagram](http://codepen.io/eduardoboucas/full/jqWbdb) Eduardo Bouças @eduardoboucas
* [React lifecycle cheatsheet](https://gist.github.com/bvaughn/923dffb2cd9504ee440791fade8db5f9) @brian_d_vaughn
* [Going further with React lifecycle methods](https://medium.com/@notrab/going-further-with-react-lifecycle-methods-2ffdc5bdf52c#.bu0ufrosb) Jamie Barton
* [Component Specs and Lifecycle](https://facebook.github.io/react/docs/component-specs.html)
* [My #reactjs component lifecycle cheatsheet for quick reference](https://twitter.com/pbesh/status/738008776805060608) Peter Beshai @pbesh
* [React component’s lifecycle](https://medium.com/react-ecosystem/react-components-lifecycle-ce09239010df#.w7v5cw6tk) Osmel Mora @osmel_mora

#Component Types
> There are two main types of components Functional and Class Components

```
// Functional Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Class Component

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
Components can be used (composed) in many ways see the following links for patterns and thoughts on creating Components.

**How do I decide what type of Component to use?**

>This comes down to a few factors... a primary one being you need to decide what a component should do.
See: [Some Thoughts on Function Components in React](https://medium.com/javascript-inside/some-thoughts-on-function-components-in-react-cb2938686bc7#.2oazdyli1) from A. Sharif @sharifsbeat for some help deciding.

<hr>

> In this video [React Component Patterns by Michael Chan](https://www.youtube.com/watch?v=YaZg8wg39QQ) @chantastic breaks down some of the component types in a less technical way (using circles).

Also:

* [React.Component vs React.createClass](https://reactjsnews.com/composing-components) Naman Goel & Zach Silveira
* [React.createClass versus extends React.Component](https://toddmotto.com/react-create-class-versus-component) Todd Motto
* [4 different kinds of React component styles](https://www.peterbe.com/plog/4-different-kinds-of-react-component-styles) Peter Bengtsson @peterbe
* [Functions as Child Components and Higher Order Components](http://rea.tech/functions-as-child-components-and-higher-order-components) Ken Ding

**Stateless Function** [```<Code />```](http://reactpatterns.com/#stateless-function)

* [React Stateless Functional Components: Nine Wins You Might Have Overlooked](https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.iydj782xq) Cory House @housecor
* [Embracing Functions in React](https://medium.com/javascript-inside/embracing-functions-in-react-d7d558d8bd30#.igvxagy0e) A. Sharif @sharifsbeat

**Presentational and Container Components**  [```<Code />```](http://reactpatterns.com/#container-component)

* [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.xo2al5187) Dan Abramov @dan_abramov

**Higher-Order Components** [```<Code />```](http://reactpatterns.com/#higher-order-component)

* [ReactCasts #1 - Higher Order Components](https://www.youtube.com/watch?v=LTunyI2Oyzw) Cassio Zen @cassiozen
* [React Higher Order Components in depth](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.mpb29ree6) @franleplant
* [Higher Order Components: A React Application Design Pattern](https://www.sitepoint.com/react-higher-order-components) Jack Franklin @Jack_Franklin
* [Mixins Are Dead. Long Live Composition](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.prpfdo79n) Dan Abramov @dan_abramov
* [Higher Order Components: Theory and Practice](http://engineering.blogfoster.com/higher-order-components-theory-and-practice)
* [Real World Examples of Higher-Order Components](http://rea.tech/reactjs-real-world-examples-of-higher-order-components/) Mehdi Mollaverdi @mehdimollaverdi
* [Start Reacting: HOC](https://www.youtube.com/watch?v=ymJOm5jY1tQ) OliverFencott @OliverFencott

**Function as Child Components** [```<Code />```](http://reactpatterns.com/#function-as-children)

* [ReactCasts #2 - Function as Child Components](https://www.youtube.com/watch?v=WE3XAt9P8Ek) Cassio Zen @cassiozen
* [Function as Child Components](https://medium.com/merrickchristensen/function-as-child-components-5f3920a9ace9#.10fbiyqc5) Merrick Christensen @iammerrick
* [I've mentioned this before, but I'm a big fan of child functions in React](https://twitter.com/brian_d_vaughn/status/779362701596164097) Brian Vaughn @brian_d_vaughn

**What types of components are there?**

* [React Component Jargon as of August 2016](https://blog.anthonycomito.com/react-component-jargon-as-of-august-2016-28451d8ceb1d#.a417p5u26) Anthony Comito @a_comito

#Finding Components

**Where are some good places to find components?**

* [React Components Catalog](https://github.com/brillout/awesome-react-components)
* [React Rocks](https://react.rocks)

#Controlled Components

**What is a controlled component?**

Via Loren Stewart @lorenstewart111 [React.js Forms: Controlled Components](http://lorenstewart.me/2016/10/31/react-js-forms-controlled-components)

>A controlled component has two aspects:

1. Controlled components have functions to govern the data going into them on every onChange event, rather than grabbing the data only once, e.g. when a user clicks a submit button. This 'governed' data is then saved to state (in this case, the parent/container component's state).

2. Data displayed by a controlled component is received through props passed down from it's parent/container component.

> This is a one-way loop – from (1) child component input (2) to parent component state and (3) back down to the child component via props – is what is meant by unidirectional data flow in React.js application architecture.

#Props

**What are props?**
>props (short for properties) are a Component's configuration, its options if you may. They are received from above and immutable as far as the Component receiving them is concerned. - react-guide

See : [props vs state](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)

**How do I pass props?**

* [Transferring Props](https://facebook.github.io/react/docs/transferring-props.html)

**How do I pass boolean values?**

* [JSX `<Foo bar={true} />` and `<Foo bar>` are equivalent](https://twitter.com/Jack_Franklin/status/768735664485568512) Jack Franklin @Jack_Franklin

**Should I use import, props, or context in React?**

* [Differences between require() and passing an object via prop or context](http://stackoverflow.com/questions/39111775/differences-between-require-and-passing-an-object-via-prop-or-context/39111942) Dan Abramov @dan_abramov

#PropTypes

>PropTypes are essentially a dictionary where you define what props your component needs and what type(s) they should be. -  Niels Gerritsen

**What are PropTypes?**
* [What are PropTypes?](https://themeteorchef.com/snippets/what-are-proptypes) Ryan Glover @themeteorchef

**Why are React PropTypes important?**
* [Why React PropTypes are important](http://wecodetheweb.com/2015/06/02/why-react-proptypes-are-important)  Niels Gerritsen @NielsG89

**How do I validate props?**
* [Better Prop Validation in React](https://medium.com/@MoeSattler/better-prop-validation-in-react-cc83590d311f#.wdhbsrlgj) Moe Sattler @travelperk

#State

> In one sense, “state” means the current visual representation of the app on screen... In the React sense, “state” is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this.state. - Dave Ceddia

**What is state in React?**

* [A Visual Guide to State in React](https://daveceddia.com/visual-guide-to-state-in-react) Dave Ceddia @dceddia

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


**Coming from jQuery... how do I adjust my mental modal to work with React / State?**
* [Thinking Statefully](https://daveceddia.com/thinking-statefully) Dave Ceddia @dceddia

**I heard you can pass a function to setState when should do that?**
* [Using a function in `setState` instead of an object](https://medium.com/@shopsifter/using-a-function-in-setstate-instead-of-an-object-1f5cfd6e55d1#.h3fokbh9a) Sophia Shoemaker

#Children API

* [ReactCasts #3 - React's Children API](https://www.youtube.com/watch?v=DJ53-G8EbxE) Cassio Zen @cassiozen
* [A deep dive into children in React](https://mxstbr.blog/2017/02/react-children-deepdive) Max Stoiber @mxstbr

#Binding
>The JavaScript bind method has several uses. Typically, it is used to preserve execution context for a function that executes in another context.

<hr>
**How do I bind events (i.e. onClick) in React?**
> There are several ways to bind things in React [this video](https://egghead.io/lessons/javascript-public-class-fields-with-react-components?pl=javascript-from-kent-ff87bbdb) via Kent C. Dodds + @eggheadio covers multiple ways to bind events showing the benefits and drawbacks for each.



**What should you use for binding methods in React classes?**
* [To bind or not to bind?](https://twitter.com/dan_abramov/status/790612782471319553) Dan Abramov @dan_abramov
* [fat Arrow vS Autobind VS bind](https://www.reddit.com/r/reactjs/comments/54xnao/fat_arrow_vs_autobind_vs_bindbindbindbindbind/d85wj0l) Dan Abramov @dan_abramov

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

#Keys
>React uses [keys](https://facebook.github.io/react/docs/reconciliation.html#keys) to help with Reconciliation (i.e. how it calculates the DOM diff for each render).

```
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

>  As noted in 'What should I use for a key?' Be careful what you use for a key.  Using an array index isn't a best practice... aim to use a unique id.

**Why can't i put key in default props (or define the default somewhere else)?**

* [Why can't i put key in default props](https://www.reddit.com/r/reactjs/comments/4mjdcf/why_cant_i_put_key_in_default_props_or_define_the/d3xwa6m)

**What should I use for a key?**

* [Index as a key is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318#.y4ru46ikc) Robin Pokorný @robinpokorny

**What are some examples where I should manually change a key?**

* [The key is using key](https://twitter.com/timarney/status/730785238654287873) Tim Arney @timarney



