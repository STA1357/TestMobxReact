import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

ReactDOM.render(
  <React.StrictMode>
        <GlobalStyle />
        <App />
  </React.StrictMode>,
  document.getElementById('root')
);
