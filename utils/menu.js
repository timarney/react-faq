import React, { Component } from "react";
import classNames from "classnames";
import '../css/menu.css';

class Menu extends Component {
  state = { on: false };

  handleClick = e => {
    const { on } = this.state;
    this.setState({ on: !on });
  };

  render() {
    const { on } = this.state;
    let menuToggleClass = classNames({ on: on, "menu-toggle": true });
    let menuSectionClass = classNames({ on: on, "menu-section": true });
    let showNavClass = classNames({ hidden: !on });

    return (
      <div className="menu">
       <div className={menuToggleClass} onClick={this.handleClick}>
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </div>
        <div className={menuSectionClass}>
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
        </div>
      </div>
    );
  }
}

export default Menu;
