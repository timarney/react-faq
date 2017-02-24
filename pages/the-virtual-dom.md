---
title: The Virtual DOM
---

>The Virtual DOM provides a lightweight implementation of the DOM and events system. Instead of dealing with the browser, you manipulate an in-memory version of the DOM.

**What is the Virtual DOM?**
* 💯  [The Inner Workings Of Virtual DOM](https://medium.com/@rajaraodv/the-inner-workings-of-virtual-dom-666ee7ad47cf#.q3jxayda5) @rajaraodv
* [React's diff algorithm](http://calendar.perfplanet.com/2013/diff/) Christopher Chedeau @vjeux
* [The one thing that no one properly explains about React — Why Virtual DOM](https://hashnode.com/post/the-one-thing-that-no-one-properly-explains-about-react-why-virtual-dom-cisczhfj41bmssp53mvfwmgrq) Sai Kishore Komanduri @saiki
* [Pete Hunt: The Secrets of React's Virtual DOM (FutureJS 2014)](https://www.youtube.com/watch?v=-DX3vJiqxm4)

**Is the Virtual DOM all about speed?**
* *No* See : https://twitter.com/dan_abramov/status/790326092582252544 & https://twitter.com/acdlite/status/779693791607336960

> I wonder if we can reclaim the VDOM term to mean "Value DOM", as in Value Type, instead of "Virtual DOM"...? More accurate. **@sebmarkbage**
<hr>

> It doesn't improve perf over hand written DOM code but it's hard to write on scale. React scales well.  **@dan_abramov**
<hr>

> React ultimately has to call browser APIs at some point, it can't possibly be faster than writing the same exact calls by hand **@dan_abramov**
<hr>

>React will not do anything that you cannot. By definition everything it does can be reproduced (and some people have with other libraries/frameworks that follow similar conventions). The point is not that React does something that you can't, but rather that by introducing React to your application you are relieved of having to worry about manually handling your DOM, manually determining how to update it efficiently, minimizing traversals, etc. - [Sean Grogg](https://www.quora.com/Is-ReactJS-faster-than-direct-DOM-manipulation-with-JavaScript-or-jQuery)

*Key Takeaway:*

> React keeps your product reasonably fast without you having to think about it all the time, or to jump through the hoops **@dan_abramov**