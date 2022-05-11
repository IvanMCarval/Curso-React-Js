import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes/routes';
import Header from './Components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes/>
    </BrowserRouter>
  );
}