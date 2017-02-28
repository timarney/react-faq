import React from "react";

function MenuItems(props) {
  const {showNavClass} = props;
  return (
    <nav>
      <ul role="navigation" className={showNavClass}>
        <li><a href="/creating-a-react-project/">Setup</a></li>
        <li><a href="/jsx/">JSX</a></li>
        <li><a href="/the-virtual-dom/">The Virtual DOM</a></li>
        <li><a href="/react-elements/">React elements</a></li>
        <li><a href="/components/">Components</a></li>
        <li><a href="/patterns/">Patterns</a></li>
        <li><a href="/additional-topics/">Additional Topics</a></li>
        <li><a href="/more-resources/">More Resources</a></li>
      </ul>
    </nav>
  );
}

export default MenuItems;
