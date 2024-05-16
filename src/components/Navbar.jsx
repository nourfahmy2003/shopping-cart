import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function NavBar({ cartItem }) {
  let totalAmount = Object.values(cartItem).reduce((total, value) => {
    return total + value;
  }, 0);

  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/mens">Men's Clothing</Link>
        </li>
        <li>
          <Link to="/womens">Women's Clothing</Link>
        </li>
        <li>
          <Link to="/jewelery">Jewelery</Link>
        </li>
      </ul>
      <div>Total Items: {totalAmount}</div>
    </nav>
  );
}