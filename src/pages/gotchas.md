---
title: Gotchas
path: "/gotchas/"
---

**What are some React Gotchas?**

* [React Gotchas](https://daveceddia.com/react-gotchas) Dave Ceddia @dceddia
* [How to Render Components Outside the Main ReactJS App](https://blog.komand.com/how-to-render-components-outside-the-main-react-app)
* [Watch Out for Undefined State](https://daveceddia.com/watch-out-for-undefined-state) Dave Ceddia @dceddia

**How do you add comments in JSX?**

```javascript
render() {
  return (
    <div>
      <!-- Fail -->
    </div>
  )
}

render() {
  return (
    <div>
      {/* Works! */}
    </div>
  )
}

```
More info and Sublime Text snippet here: http://wesbos.com/react-jsx-comments @wesbos


**Does React have SyntheticEvent equivalents for all DOM events?**

No - Not all DOM events have SyntheticEvent equivalents example there’s no synthetic event for listening for when the browser window is resized

```javascript
import React, { Component } from 'react';
import '../App.css';

class ResizeWindow extends Component {

  constructor(props) {
    super(props);
    this.state = {
        width: window.innerWidth,
        height: window.innerHeight
    };
  }

  handleResizedScreen() {
    this.setState({
        width: window.innerWidth,
        height: window.innerHeight
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResizedScreen.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizedScreen.bind(this));
  }

  render() {
    return (
        <div className="centered">
            <h1>{ this.state.width } x { this.state.height }</h1>
        </div>
    );
  }

}

export default ResizeWindow;
```

More info : [Handling Events in React 101](https://appendto.com/2017/01/react-events-101)
