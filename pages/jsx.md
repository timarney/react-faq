---
title: JSX
---


**What's JSX?**

>JSX is a preprocessor step that adds XML syntax to JavaScript. You can definitely use React without JSX but JSX makes React a lot more elegant. - http://buildwithreact.com/tutorial/jsx

> **Tip:** 🤔 You can play around with JSX [here](https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-0&targets=&browsers=&builtIns=false&code=function%20hello()%20%7B%0A%20%20return%20%3Cdiv%20className%3D%22myclass%22%3EHello%20world!%3C%2Fdiv%3E%3B%0A%7D).

```javascript
// This is JSX
function hello() {
  return <div className="myclass">Hello world!</div>;
}

// When compiled it gets turned into a function
"use strict";

function hello() {
  return React.createElement(
    "div",
    { className: "myclass" },
    "Hello world!"
  );
}

```



* [Tutorial: JSX](http://buildwithreact.com/tutorial/jsx)
* [JSX in Depth](https://facebook.github.io/react/docs/jsx-in-depth.html)
* [React’s JSX: The Other Side of the Coin](https://medium.com/@housecor/react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98#.i5rmd9h07) Cory House @housecor
* [What does JSX stand for?](https://twitter.com/tomocchino/status/769931611303321601) Tom Occhino @tomocchino

**What does JSX really do for me?**

[This is the sort of stuff JSX saves you from having to manage](https://gist.github.com/insin/8e72bed793772d82ca8d) Jonny Buchanan @jbscript

**Can I use JSX for conditionals?**
> Yes there's a babel plugin for that [jsx-control-statements](https://www.npmjs.com/package/jsx-control-statements)

* [A cleaner solution for conditionals and loops in JSX using Babel 6](https://tomat.blog/a-cleaner-solution-for-conditionals-and-loops-in-jsx-using-babel-6-a67dcaee9b06#.tlsxvz52a)
