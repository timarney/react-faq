---
title: React 16
---


> This initial React 16.0 release is mostly focused on compatibility with existing apps. It does not enable asynchronous rendering yet. We will introduce an opt-in to the async mode later during React 16.x. We don’t expect React 16.0 to make your apps significantly faster or slower, but we’d love to know if you see improvements or regressions. @bvaughn

**React 16 RC Notes**
* [React 16 RC #10294](https://github.com/facebook/react/issues/10294)

**Where can I find some good information for React 16?**

*Error Handling*
* [Error Handling in React 16](https://facebook.github.io/react/blog/2017/07/26/error-handling-in-react-16.html) Dan Abramov @dan_abramov
* [Error Handling using Error Boundaries in React 16](https://egghead.io/lessons/react-error-handling-using-error-boundaries-in-react-16) Nik Graf @nikgraf
* [2 Minutes to Learn React 16's componentDidCatch Lifecycle Method](https://medium.com/@sgroff04/2-minutes-to-learn-react-16s-componentdidcatch-lifecycle-method-d1a69a1f753) Sean Groff @_SeanGroff

*DOM Attributes*
* [DOM Attributes in React 16](https://facebook.github.io/react/blog/2017/09/08/dom-attributes-in-react-16.html) Dan Abramov @dan_abramov

*Portals*
* DEMO rendering Portals using ReactDOM.createPortal -> https://codesandbox.io/s/3r7zxqzx55

*Async Mode*
* need some content


*Fragments*

**How does returning arrays from render work?**

```javascript
const names = ["Dan", "Kent", "Ryan"];

/* No wrapping element! */
class List extends React.Component {
  render() {
    return names.map(name => <li>{name}</li>);
  }
}
```

see: https://codesandbox.io/s/y0rroo6olz

**Note:** You can also return a String https://codesandbox.io/s/oxjo7woo4y

<hr>


**Roadmap for React (Fiber and Beyond)**
<iframe width="640" height="360" src="https://www.youtube.com/embed/QW5TE4vrklU" frameborder="0" allowfullscreen></iframe>

>Calling setState with null no longer triggers an update. This allows you to decide in an updater function if you want to re-render.
