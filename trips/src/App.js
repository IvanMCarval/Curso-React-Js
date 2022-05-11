import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './Store';
import Routes from './Routes/routes';
import Header from './Components/Header';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Routes/>
      </BrowserRouter>
    </Provider>
  );
}