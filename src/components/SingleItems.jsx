import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';

import '../styles/SingleItems.css';

export default function SingleItem() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useCart(); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAddToCart = () => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex !== -1) {
      // Update quantity if product already exists in cart
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Add new product to cart
      const productToAdd = { ...product, quantity };
      setCart([...cart, productToAdd]);
    }
  };

  return (
    <div className="singleItem-container">
        <div className="singleItem">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <label htmlFor="quantity">Quantity:</label>
            <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            min="1"
            />
            <button className="addToCart" onClick={handleAddToCart}>Add to Cart</button>
        </div>
    </div>
  );
}
