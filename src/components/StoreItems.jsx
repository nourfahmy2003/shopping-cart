import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useOutletContext, useNavigate } from 'react-router-dom';
import '../styles/StorePages.css';


export default function StoreItems({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${category}?sort=asc`,
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
  
  const handleProductClick = (productId) => {
    navigate(`/singleItem/${productId}`); 
  };


  return (
    <div className="storePage">
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item" onClick={() => handleProductClick(product.id)}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

StoreItems.propTypes = {
  category: PropTypes.string.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};
