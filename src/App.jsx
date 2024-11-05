import React from 'react';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import Header from './Components/Header';
import CurrencyList from './Components/CurrencyList';
import Charts from './Components/Charts';
import  ApiProvider from './services/ApiContext';
import CurrencySwiper from './Components/CurrencySwiper';


const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
      setIsDarkMode((prev) => !prev);
  };

  const theme = createTheme({
      palette: {
          mode: isDarkMode ? 'dark' : 'light',
      },
  });

  return (
    <ApiProvider>
      <ThemeProvider theme={theme}>
          <Container>
              <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
              <CurrencySwiper/>
              <CurrencyList/>    
              <Charts/>
          </Container>
      </ThemeProvider>
    </ApiProvider>
  );
};

export default App;
