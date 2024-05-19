import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar';
import { CartProvider } from './components/CartContext';

export default function App() {
  return (
    <CartProvider>
      <NavBar />
      <Outlet />
    </CartProvider>
  );
}
