import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
