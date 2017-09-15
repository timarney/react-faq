---
title: Rendering
path: "/components/rendering/"
---

**What should go in the render function?**

* [Return as soon as you know the answer](https://medium.com/@SimonRadionov/return-as-soon-as-you-know-the-answer-dec6369b9b67#.82kxymyki) @SimonRadionov

**How does React decide to re-render a component?**
* [How does React decide to re-render a component?](http://lucybain.com/blog/2017/react-js-when-to-rerender)

**What are some common patterns for conditional rendering in React?**
* [All the Conditional Renderings in React](https://www.robinwieruch.de/conditional-rendering-react/) @rwieruch Robin Wieruch

```javascript
// clean up things using an 'almost-component'
// for more see https://hackernoon.com/10-react-mini-patterns-c1da92f068c5#.2patc0o9c

const SearchSuggestions = (props) => {
  const renderSearchSuggestion = listItem => (
    <li key={listItem.id}>{listItem.name} {listItem.id}</li>
  );

  return (
    <ul>
      {props.listItems.map(renderSearchSuggestion)}
    </ul>
  );
}
```
