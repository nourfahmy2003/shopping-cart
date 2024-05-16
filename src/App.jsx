import { useState } from 'react'
import { Outlet } from "react-router-dom";
import NavBar from './components/Navbar';

export default function App() {
  const [cartItem, addToCart] = useState({});
  return (
    <>
      <NavBar cartItem={cartItem}></NavBar>
      <Outlet context={[cartItem, addToCart]}></Outlet>
    </>
  );
}
