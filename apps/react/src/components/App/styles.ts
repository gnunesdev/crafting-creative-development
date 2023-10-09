import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div``;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  button {
    all: unset;

    cursor: pointer;
  }

  body {
    width: 100%;
    height: 100vh;
    background: linear-gradient(90deg, rgba(72,9,121,1) 0%, rgba(224,0,255,1) 100%);
  }
`;
