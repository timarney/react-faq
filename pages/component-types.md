#Component Types
> There are two main types of components **Functional** and **Class Components**.  If you need don't need [lifecycle methods](lifecycle-methods.md) prefer Functional /Stateless Components.

```javascript
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


// Some other patterns you might see:

// Functional Component with Implicit Returns
const Profile = props => 
  <div>
    <h1>{props.name}</h1>
    <p>{props.bio}</p>
  </div>;
 
 // Functional Component with destructuring of props
 const Profile = ({ name, bio }) =>
  <div>
    <h1>{name}</h1>
    <p>{bio}</p>
  </div>;

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
