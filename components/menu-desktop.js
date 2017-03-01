import React, { Component } from "react";
import classNames from "classnames";
import "../css/menu-desktop.css";
import MenuItems from "../components/menu-items";

class MenuDesktop extends Component {
  render() {
    return (
      <div className="menu-desktop">
        <MenuItems />
        <input id="search" type="text"/>        
      </div>
    );
  }
}

export default MenuDesktop;
