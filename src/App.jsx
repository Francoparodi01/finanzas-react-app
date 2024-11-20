import React from 'react';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import Header from './Components/Header';
import CurrencyList from './Components/CurrencyList';
import Charts from './Components/Charts';
import  ApiProvider from './services/ApiContext';
import CurrencySwiper from './Components/CurrencySwiper';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CurrencyCard from './Components/CurrencyCard';
import CardDetail from './Components/CardDetail';
import InflationChart from './Components/InflationChart';


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
        <Router>
          <Container>
              <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Routes>
            <Route
                path="/"
                element={
                  <>
                    <CurrencySwiper />
                    <CurrencyList />
                    <InflationChart />
                  </>
                }
              />
              <Route path="/inflacion" element = {<InflationChart/>} />
              <Route path="/dolar" element={<CurrencyList/>} />
              <Route path="/CardDetail/:id" element={<CardDetail />} />
              <Route path="/charts" element={<Charts />} />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </ApiProvider>
  );
};

export default App;
