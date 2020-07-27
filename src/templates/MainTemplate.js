import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'themes/GlobalStyle';
import SearchEngineOptimization from 'seo/SearchEngineOptimization';
import MainTheme from 'themes/MainTheme';

const MainTemplate = ({ children }) => (
  <>
    <ThemeProvider theme={MainTheme}>
      <GlobalStyle />
      <SearchEngineOptimization />
      {children}
    </ThemeProvider>
  </>
);

export default MainTemplate;
