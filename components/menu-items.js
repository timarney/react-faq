import React from "react";
import { Link } from "react-router";
import { prefixLink } from "gatsby-helpers";

function href(p, txt) {
  const path = `${prefixLink("/")}${p}/`;
  return path;
}

const items = [
  { href: "intro", text: "Start" },
  { href: "creating-a-react-project", text: "Setup" },
  { href: "jsx", text: "JSX" },
  { href: "the-virtual-dom", text: "VDOM" },
  { href: "react-elements", text: "Elements" },
  { href: "components", text: "Components" },
  { href: "patterns", text: "Patterns" },
  { href: "additional-topics", text: "Additional Topics" },
  { href: "more-resources", text: "Resources"},
  { href: "react16", text: "React 16" }
];

function MenuItems(props) {
  const { showNavClass, handleClick } = props;
  return (
    <nav>
      <ul role="navigation" className={showNavClass}>
        {items.map(item => {
          return (
            <li key={item.text}>
              <Link
                onClick={handleClick}
                activeClassName="active"
                to={href(item.href)}
              >
                {item.text}
              </Link>
            </li>
          );
        })}

      </ul>
    </nav>
  );
}

export default MenuItems;
