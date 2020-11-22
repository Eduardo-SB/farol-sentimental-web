import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import usePersistedState from './utils/usePersistedState';

import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './styles/global';

import { Header } from './Pages/components/Header';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <ThemeProvider theme={theme}>      
      <GlobalStyle />
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} />
        <Routes /> 
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
