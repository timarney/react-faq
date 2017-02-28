import React, { Component } from "react";
import classNames from "classnames";
import '../css/menu-mobile.css';
import MenuItems from '../components/menu-items';

class MenuMobile extends Component {
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
      <div className="menu-mobile">
       <div className={menuToggleClass} onClick={this.handleClick}>
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </div>
        <div className={menuSectionClass}>
           <MenuItems handleClick={this.handleClick} showNavClass={showNavClass}/>
        </div>
      </div>
    );
  }
}

export default MenuMobile;
