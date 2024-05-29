import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Bodywash from './pages/Bodywash';
import Handsoap from './pages/Handsoap';
import Cart from './pages/Cart';
import { ShoppingCartContextProvider } from './context/ShoppingCartContext';
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';
import img7 from './assets/7.jpg';
import img8 from './assets/8.jpg';
import img9 from './assets/9.jpg';
import img10 from './assets/10.jpg';

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
