---
title: Keys
path: "/components/keys/"
---

>React uses [keys](https://facebook.github.io/react/docs/reconciliation.html#keys) to help with Reconciliation (i.e. how it calculates the DOM diff for each render).

```
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

>  As noted in 'What should I use for a key?' Be careful what you use for a key.  Using an array index isn't a best practice... aim to use a unique id.

**Why can't i put key in default props (or define the default somewhere else)?**

* [Why can't i put key in default props](https://www.reddit.com/r/reactjs/comments/4mjdcf/why_cant_i_put_key_in_default_props_or_define_the/d3xwa6m)

**What should I use for a key?**

* [Index as a key is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318#.y4ru46ikc) Robin Pokorný @robinpokorny

**What are some examples where I should manually change a key?**

* [The key is using key](https://twitter.com/timarney/status/730785238654287873) Tim Arney @timarney


**Do keys across an app all need to be unique?**

No - Keys used only need to be unique among their siblings.

More info: https://facebook.github.io/react/docs/lists-and-keys.html#keys-must-only-be-unique-among-siblings
