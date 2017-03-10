import React, { Component } from "react";



class MenuMobile extends Component {
  

  render() {
    const { menuToggleClass, menuSectionClass, showNavClass, handleClick } = this.props;
    return (
      <div className="menu-mobile">
        <div className={menuToggleClass} onClick={handleClick}>
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </div>
       {this.props.children}
      </div>
    );
  }
}

export default MenuMobile;
