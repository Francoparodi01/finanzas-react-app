import React from 'react';
import Header from './components/Header/Header';
import DolarCard from './components/dolar/DolarCard';
import ApiProvider from './services/ApiContext';

const App = () => {
 
  return (
    <>
    <ApiProvider>
      <Header/>
      <DolarCard/>
    </ApiProvider>
    </>
  );
};

export default App;
