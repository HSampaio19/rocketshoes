import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

import Rotas from './routes';
import GlobalStyles from './styles/styles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
