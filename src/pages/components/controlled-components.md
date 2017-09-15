---
title: Controlled Components
path: "/components/controlled-components/"
---

**What is a controlled component?**

Via Loren Stewart @lorenstewart111 [React.js Forms: Controlled Components](http://lorenstewart.me/2016/10/31/react-js-forms-controlled-components)

>A controlled component has two aspects:

1. Controlled components have functions to govern the data going into them on every onChange event, rather than grabbing the data only once, e.g. when a user clicks a submit button. This 'governed' data is then saved to state (in this case, the parent/container component's state).

2. Data displayed by a controlled component is received through props passed down from it's parent/container component.

> This is a one-way loop – from (1) child component input (2) to parent component state and (3) back down to the child component via props – is what is meant by unidirectional data flow in React.js application architecture.