---
title: Components
---

> Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. - [React Docs](https://facebook.github.io/react/docs/components-and-props.html)


- [Lifecycle Methods](/lifecycle-methods/)
- [Component Types](/component-types/)
- [Finding Components](/finding-components/)
- [Controlled Components](/controlled-components/)
- [Props](/props/)
- [State](/state/)
- [Children API](/children-api/)
- [Binding](/binding/)
- [Events](/events/)
- [Rendering](/rendering/)
- [Keys](/keys/)
- [Refs](/refs/)

**What are some of your best practices when working with components?**

* Keep it [F]ocused.
* Keep it [I]ndependent.
* Keep it [R]eusable.
* Keep it [S]mall.
* Keep it [T]estable.
* or in short, `FIRST`.

> — Addy Osmani https://addyosmani.com/first

See :  https://twitter.com/mxstbr/status/790084862954864640 Max Stoiber @mxstbr

*Also some best practices here:* [Our Best Practices for Writing React Components](https://medium.com/code-life/our-best-practices-for-writing-react-components-dec3eb5c3fc8?imm_mid=0ed2ce&cmp=em-web-na-na-newsltr_20170208#.emb0wf1tl) @ MuseFind

**How do I output a list of items?**


```javascript
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    <li key={number.toString()}>
      {number}
    </li>
  ));
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById("root")
);
```

Or embedded style
```javascript
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
```

See: [Lists and Keys](https://facebook.github.io/react/docs/lists-and-keys.html)

**How can I map over an object?**

```javascript
{Object.keys(yourObject).map(function(key) {
    return <div>Key: {key}, Value: {yourObject[key]}</div>;
})}
```
