import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import '../styles/Cart.css';

export default function Cart() {
  const { cart, setCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0.0);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart) {
      const totalAmount = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
      setTotal(totalAmount.toFixed(2));
      setIsLoading(false); 
    }
  }, [cart]);

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
      )
    );
  };

  const handleDelete = (product) => {
    handleRemoveItem(product.id);
  };


  return (
    <div className="cartPage">
      <div>
        <div className="cartHeader">
          <h2>Shopping Cart</h2>
          {isLoading ? (
            <p>Loading cart...</p>
          ) : (
            <p>{cart?.length === 1 ? `${cart.length} item` : `${cart.length} items`}</p>
          )}
        </div>
        <div className="cartContainer">
          <div className="productsCartContainer">
            {cart?.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart?.map((product) => (
                <div key={product.id} className="cartProduct">
                  <img
                    src={product.image}
                    width={150}
                    height={150}
                    onClick={() => navigate(`/shop/${product.id}`)}
                    style={{ paddingLeft: 20, cursor: 'pointer' }}
                  />
                  <div className="productInfo">
                    <div className="productTopLine">
                      <p style={{ fontWeight: 'bold', paddingLeft: 40 }}>{product.title}</p>
                      <button onClick={() => handleDelete(product)} style={{ maxHeight: 40 }}>remove</button>
                    </div>
                    <p>${product.price?.toFixed(2)}</p> 
                    <div className="quantityControl">
                      <button onClick={() => handleQuantityChange(product.id, product.quantity - 1)}>-</button>
                      <span>{product.quantity}</span>
                      <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
                    </div>
                    <p>Total: ${(product.quantity * product.price).toFixed(2)}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="checkoutBox">
            <div className="subtotal">
              <p>Subtotal</p>
              <p>${total}</p>
            </div>
            <button onClick={() => alert("Purchase Complete!")} className="checkoutBtn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
