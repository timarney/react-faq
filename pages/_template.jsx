import React from "react";
import { Container } from "react-responsive-grid";
import { prefixLink } from "gatsby-helpers";
import Headroom from "react-headroom";
import "../css/markdown-styles";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import MenuMobile from "../components/menu-mobile";
import MenuDesktop from "../components/menu-desktop";
import Stars from "../components/stars";
import Logo from "../components/logo";
import '../css/main.css';

import MenuItems from "../components/menu-items";

const Header = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any
    };
  },
  render() {
    return (
      <div>
        <MenuMobile />
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1)
          }}
          style={{
            background: "rgba(55,61,73,0.975)",
            boxShadow: "0 2px 4px -1px rgba(0,0,0,0.06), 0 4px 5px 0 rgba(0,0,0,0.06), 0 1px 10px 0 rgba(0,0,0,0.08)"
          }}
        >
          <Container
            className="header"
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(1/2)}`,
              display: "flex",
              justifyContent: "flex-start"
            }}
          >
            <Logo />
            <Stars />
          </Container>

        </Headroom>

        <Container
          className="menu-desktop"
          style={{
            maxWidth: 960,
            paddingTop: 0
          }}
        >
        <MenuDesktop />
        </Container>

        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            paddingTop: 0
          }}
        >
          {this.props.children}
        </Container>
      </div>
    );
  }
});
