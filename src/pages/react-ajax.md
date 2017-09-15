---
title: React Ajax
path: "/react-ajax/"
---

**What is the best practice for getting server data into React components?**
>It depends! See: [React AJAX Best Practices](http://andrewhfarmer.com/react-ajax-best-practices) Andrew H Farmer @ahfarmer

* [Loading and Using External Data in React](http://mediatemple.net/blog/tips/loading-and-using-external-data-in-react) Chris Coyier @chriscoyier

**⭐ Example using arrow syntax:**
```javascript
class Component extends React.Component {
  componentDidMount() {
    axios.get('http://…').then(data => {
      this.setState( { name: data.blah } );
    });
  }
}
```
