import React, { Component } from "react";
import styled from "styled-components";
import fetch from 'unfetch'

const Wrapper = styled.div`
  display:flex;
  flex: 1;
  border: 1px solid #fff;
  background-image: linear-gradient(#fcfcfc, #eee);
  border-radius: 3px;
  padding:5px;
  max-width:120px;

  &:hover {
    background-image: linear-gradient(#fcfcfc, #ccc);
  }

  @media screen and (min-width: 600px) {
    margin-left:1em;
  }

`;

const GitLink = styled.a`
  display:flex;
  align-self:center;
  justify-content:center;
  color:#000;
  line-height:16px;

  &:hover {
    text-decoration:none;
  }
`;


const StarCount = styled.div`
  display:flex;
  align-self:center;
  line-height:16px;
  padding-left:5px;
`;

class Stars extends Component {
  state = { count: '' };
  
  componentDidMount() {

    fetch('https://api.github.com/repos/timarney/react-faq')
      .then( r => r.json() )
      .then( data => {
        const stars = data.stargazers_count;
        this.setState({count:stars}) 
      });
  }

  render() {
    const { count } = this.state;

    if(count == ''){
      return null;
    }

    return (

      <GitLink href="https://github.com/timarney/react-faq">
      <Wrapper>
        <svg
          aria-hidden="true"
          height="16"
          version="1.1"
          viewBox="0 0 14 16"
          width="14"
        >
          <path
            d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"
          />
        </svg>
        <StarCount>Star {count}</StarCount>
      </Wrapper>
      </GitLink>
    );
  }
}

export default Stars;
