---
title: React 16
path: "/react16/"
---

**Release**
* 🎉 [React v16.0](https://facebook.github.io/react/blog/2017/09/26/react-v16.0.html)

**Details**
* [React 16: A look inside an API-compatible rewrite of our frontend UI library](https://code.facebook.com/posts/1716776591680069/react-16-a-look-inside-an-api-compatible-rewrite-of-our-frontend-ui-library) Sophie Alpert @sophiebits

<hr>

> This initial React 16.0 release is mostly focused on compatibility with existing apps. It does not enable asynchronous rendering yet. We will introduce an opt-in to the async mode later during React 16.x. We don’t expect React 16.0 to make your apps significantly faster or slower, but we’d love to know if you see improvements or regressions. @bvaughn





**React 16 RC Notes**
* [React 16 RC #10294](https://github.com/facebook/react/issues/10294)

**Where can I find some good information for React 16?**

*Error Handling*
* [Error Handling in React 16](https://facebook.github.io/react/blog/2017/07/26/error-handling-in-react-16.html) Dan Abramov @dan_abramov
* [Error Handling using Error Boundaries in React 16](https://egghead.io/lessons/react-error-handling-using-error-boundaries-in-react-16) Nik Graf @nikgraf
* [2 Minutes to Learn React 16's componentDidCatch Lifecycle Method](https://medium.com/@sgroff04/2-minutes-to-learn-react-16s-componentdidcatch-lifecycle-method-d1a69a1f753) Sean Groff @_SeanGroff
* [Catching exceptions using Higher Order Components in React 16](https://codeburst.io/catching-exceptions-using-higher-order-components-in-react-16-b8a401853a10) Giorgi Bagdavadze @notgiorgi

*DOM Attributes*
* [DOM Attributes in React 16](https://facebook.github.io/react/blog/2017/09/08/dom-attributes-in-react-16.html) Dan Abramov @dan_abramov

*Portals*
* DEMO rendering Portals using ReactDOM.createPortal -> https://codesandbox.io/s/3r7zxqzx55

*Async Mode*

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Ever wonder what &quot;async rendering&quot; means? Here&#39;s a demo of how to coordinate an async React tree with non-React work <a href="https://t.co/3snoahB3uV">https://t.co/3snoahB3uV</a> <a href="https://t.co/egQ988gBjR">pic.twitter.com/egQ988gBjR</a></p>&mdash; Andrew Clark (@acdlite) <a href="https://twitter.com/acdlite/status/909926793536094209">September 18, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


**Lin Clark - A Cartoon Intro to Fiber - React Conf 2017**
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZCuYPiUIONs" frameborder="0" allowfullscreen></iframe>

Additional Fiber info here https://reactfaq.site/react-fiber


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
