---
title: State
path: "/components/state/"
---

> In one sense, “state” means the current visual representation of the app on screen... In the React sense, “state” is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this.state. - Dave Ceddia

**What is state in React?**

* [A Visual Guide to State in React](https://daveceddia.com/visual-guide-to-state-in-react) Dave Ceddia @dceddia

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);

    // Must initialize state first
    this.state = { count: 0 };
  }

  handleClick() {
    // Increment the count when the button is clicked
    this.setState({
      count: this.state.count + 1
    }, function() {
      // setState is asynchronous! This function gets called
      // when it's finished.
      console.log("Job's done");
    });
  }

  render() {
    return (
      <div className="app">
        <div className="click-count">
          Button presses: {this.state.count}
        </div>
        <button onClick={this.handleClick.bind(this)}>
          Add One
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
```

## Lifting State Up

**What is lifting up state?**
* [Lifting State Up](https://facebook.github.io/react/docs/lifting-state-up.html)


## Asynchronous Updates & setState()

* [setState is asynchronous](https://medium.learnreact.com/setstate-is-asynchronous-52ead919a3f0) Michael Chan @chantastic

**I heard you can pass a function to setState when should do that?**

> Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.  — Rect Docs

> If you know you’re going to use setState to update your component and you know you’re going to need the current state or the current props of your component to calculate the next state, passing in a function as the first parameter of this.setState instead of an object is the recommended solution. — Sophia Shoemaker


```javascript
// state updates may be asynchronous

// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});

// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));

```

* 💯 [Functional setState is the future of React](https://medium.freecodecamp.com/functional-setstate-is-the-future-of-react-374f30401b6b#.didjv52tx)

```javascript
// see post :: Using a function in `setState` instead of an object

// outside your component class
function increaseScore (state, props) {
  return {score : state.score + 1}
}
class User{
  ...
// inside your component class
  handleIncreaseScore () {
    this.setState( increaseScore)
  }
  ...
}

```


*  [Using a function in `setState` instead of an object](https://medium.com/@shopsifter/using-a-function-in-setstate-instead-of-an-object-1f5cfd6e55d1#.h3fokbh9a) Sophia Shoemaker

## Handling State

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


> **Tip:** 🤔 Use derived state when possible see code sample below:

```javascript
class NameWithInitials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      // Avoid creating state that can be derived from other state.
      // Example: The user's initials can be derived from the two items above.
      initials: ""
    };
  }

  render() {
    const { firstName, lastName } = this.state;
    // Instead generate the user's initials on the fly like this.
    // Or do so in a seperate function above
    return (
      <div>
        Initials: {firstName.charAt(0)} + {" "} + {lastName.charAt(0)}
      </div>
    );
  }
}
```

via @housecor - [twitter link](https://twitter.com/housecor/status/839125277842231298).


## Handling Initial State

**How do I handle Intial state?**

Use the constructor method also see tip below.

```javascript
class MyComponent1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {myVal: 'val'}
    }
}
```

> **Tip:** 🤔 You don't need to declare a constructor in your React component to initialize state via @housecor:

```javascript

// via @housecor https://twitter.com/housecor/status/866651617998897152
// Traditional way
class MyComponent1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {myVal: 'val'}
    }
}

//Using public class field
class MyComponent2 extends React.Component{
    state = {
        myVal: 'val'
    }
}

```

**How do I handle making state immutable in React?**
* [Handling State in React: Four Immutable Approaches to Consider](https://medium.com/@housecor/handling-state-in-react-four-immutable-approaches-to-consider-d1f5c00249d5) @housecor


** Can I add state to function components in React?**
* [Attaching state to stateless function components in React](https://medium.com/@dai_shi/attaching-state-to-stateless-function-components-in-react-db317a9e83ad) @dai_shi



