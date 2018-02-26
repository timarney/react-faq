---
title: Refs
path: "/components/refs/"
---

>The ref attribute makes it possible to store a reference to a particular React element or component returned by the component render() configuration function. This can be valuable when you need a reference, from within a component, to some element or component contained within the render() function. - reactenlightenment.com

**What are refs and are string refs are bad?**

* [Refs to Components](https://facebook.github.io/react/docs/more-about-refs.html)
* [Refs and the DOM](https://facebook.github.io/react/docs/refs-and-the-dom.html)
* [Why do you use findDOMNode()?](https://twitter.com/dan_abramov/status/752936646602031104) Dan Abramov @dan_abramov
* [String refs are bad in quite a few ways](https://news.ycombinator.com/edit?id=12093234) Dan Abramov @dan_abramov


[**React 16.3 How does React.createRef work?**](#createref)
* [React.createRef Demo](https://codesandbox.io/s/0yr3r313q0)

```javascript
// use ref to easily add autofocus

class Input extends Component {
  focus() {
    this.el.focus();
  }

  render() {
    return (
      <input
        ref={el=> { this.el = el; }}
      />
    );
  }
}
```
