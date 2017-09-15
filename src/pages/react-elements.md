---
title: React elements
path: "/react-elements/"
---

> Elements are the smallest building blocks of React apps.
> Elements are what components are "made of ..."
— [React Docs](https://facebook.github.io/react/docs/rendering-elements.html)
- An element is a plain object describing a component instance or DOM node and its desired properties
- An element is not an actual instance. Rather, it is a way to tell React what you want to see on the screen

* [What makes an 'Element' an 'Element' vs a component?](https://twitter.com/timarney/status/790540834466701312) Tim Arney @timarney


```javascript
// element is what you return from a component

const DeleteAccount = () => (
  <div>
    <p>Are you sure?</p>
    <DangerButton>Yep</DangerButton>
    <Button color='blue'>Cancel</Button>
  </div>
);
```


* [Understanding the Difference Between React Elements and Components](https://quickleft.com/blog/understanding-the-difference-between-react-elements-and-components) Alex Johnson
* [React Elements vs React Components](https://tylermcginnis.com/react-elements-vs-react-components) Tyler McGinnis