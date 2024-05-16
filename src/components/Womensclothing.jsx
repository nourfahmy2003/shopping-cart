import React, { useState, useEffect } from 'react';
import '../styles/WomensClothing.css';

export default function WomensPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/women's%20clothing?sort=asc`,
          { mode: 'cors' }
        );

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="storePage">
      <h2>Womens's Clothing</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
