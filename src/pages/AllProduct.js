
import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const { filteredProducts, loading, setFilteredProducts } = useContext(ProductContext);
  const [sortCriteria, setSortCriteria] = useState('');

  if (loading) return <div>Loading...</div>;

  const handleSort = (e) => {
    const criteria = e.target.value;
    setSortCriteria(criteria);
    // Implement sorting logic here
  };

  return (
    <div>
      <h1>All Products</h1>
      <select onChange={handleSort} value={sortCriteria}>
        <option value="">Sort by</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="discount">Discount</option>
      </select>
      <div>
        {filteredProducts.map(product => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={`https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fproduct&psig=AOvVaw0M19uD9_IbZqNIvEuhzn_j&ust=1717406331833000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjg8aTLvIYDFQAAAAAdAAAAABAE`} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.company}</p>
              <p>{product.category}</p>
              <p>${product.price}</p>
              <p>{product.rating} stars</p>
              <p>{product.discount}% off</p>
              <p>{product.availability ? 'In Stock' : 'Out of Stock'}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
