import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { GlobalStyles } from './components/styles/Global.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/Theme.styled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>
);
