import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Bodywash from './pages/Bodywash';
import Handsoap from './pages/Handsoap';
import Cart from './pages/Cart';
import { ShoppingCartContextProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bodywash" element={<Bodywash />} />
          <Route path="/handsoap" element={<Handsoap />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </HashRouter>
    </ShoppingCartContextProvider>
  );
}

export default App;
