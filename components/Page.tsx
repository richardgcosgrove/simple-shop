import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './Header';
import Meta from './Meta';

const theme = {
  black: '#393939',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background-color: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Work Sans';
  }
  a {
    text-decoration: none;
    color: ${theme.black}
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <StyledPage>
            <Meta />
            <Header />
            <Inner>
              { this.props.children }
            </Inner>
          </StyledPage>
          <GlobalStyle />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Page;