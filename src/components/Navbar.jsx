import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartContext";

export default function NavBar() {
  const { cart } = useCart();
  const [menuActive, setMenuActive] = useState(false);

  let totalAmount = 0;
  if (cart) {
    totalAmount = cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navBar">
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={menuActive ? "active" : ""}>
        <li>
          <Link to="/" onClick={() => setMenuActive(false)}>Home page</Link>
        </li>
        <li>
          <Link to="/mens" onClick={() => setMenuActive(false)}>Men's Clothing</Link>
        </li>
        <li>
          <Link to="/womens" onClick={() => setMenuActive(false)}>Women's Clothing</Link>
        </li>
        <li>
          <Link to="/jewelery" onClick={() => setMenuActive(false)}>Jewelery</Link>
        </li>
      </ul>
      <Link to="/cart" onClick={() => setMenuActive(false)}>
        <div className="cart-button">
          <FontAwesomeIcon icon={faShoppingCart} />
          {totalAmount > 0 && <span>{totalAmount}</span>}
        </div>
      </Link>
    </nav>
  );
}
