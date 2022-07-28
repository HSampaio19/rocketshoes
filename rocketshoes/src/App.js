import React from 'react';
import './config/ReactotronConfig';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import store from './store';

import Rotas from './routes';
import GlobalStyles from './styles/styles';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Rotas />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
