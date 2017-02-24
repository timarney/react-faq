
---
Binding
---

>The JavaScript bind method has several uses. Typically, it is used to preserve execution context for a function that executes in another context.

<hr>

**How do I bind events (i.e. onClick) in React?**
> There are several ways to bind things in React [this video](https://egghead.io/lessons/javascript-public-class-fields-with-react-components?pl=javascript-from-kent-ff87bbdb) via Kent C. Dodds + @eggheadio covers multiple ways to bind events showing the benefits and drawbacks for each.

**⭐ React FAQ -> use public class fields**
```javascript

//see demo: https://jsbin.com/suzubu/1/edit?html,js,output
class App extends React.Component {
  state = {clicks: 6}

  handleClick = (e) => {
    console.log(e.target.dataset.id)
    this.setState(prevState => {
      return {clicks: prevState.clicks + 1}
    })
  }

  render() {
    return (
      <div>
        <div>
          Click Count: {this.state.clicks}
        </div>
        <button data-id={1}
          onClick={this.handleClick}
        >
          Click Me!
        </button>
      </div>
    )
  }
}

```

**What should you use for binding methods in React classes?**
* [To bind or not to bind?](https://twitter.com/dan_abramov/status/790612782471319553) Dan Abramov @dan_abramov
* [fat Arrow vS Autobind VS bind](https://www.reddit.com/r/reactjs/comments/54xnao/fat_arrow_vs_autobind_vs_bindbindbindbindbind/d85wj0l) Dan Abramov @dan_abramov

**What is this bind thing?**

* [Don't Use Bind When Passing Props](https://daveceddia.com/avoid-bind-when-passing-props) Dave Ceddia
* [5 Approaches for Handling Binding](https://medium.com/@housecor/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56#.4z71l0kmb) Cory House @housecor
* [How to Deal with `this` Reference Inside the Promise?](https://www.toptal.com/react/tips-and-practices) Toptal Developers
