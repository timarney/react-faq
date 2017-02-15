#Gotchas

**What are some React Gotchas?**

* [React Gotchas](https://daveceddia.com/react-gotchas) Dave Ceddia @dceddia
* [How to Render Components Outside the Main ReactJS App](https://blog.komand.com/how-to-render-components-outside-the-main-react-app)
* [Watch Out for Undefined State](https://daveceddia.com/watch-out-for-undefined-state) Dave Ceddia @dceddia

**How do you add comments in JSX?**

```
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