
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const ProductDetail = () => {
  const { products } = useContext(ProductContext);
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={`https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fproduct&psig=AOvVaw0M19uD9_IbZqNIvEuhzn_j&ust=1717406331833000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjg8aTLvIYDFQAAAAAdAAAAABAE`} alt={product.name} />
      <p>{product.company}</p>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <p>{product.rating} stars</p>
      <p>{product.discount}% off</p>
      <p>{product.availability ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

export default ProductDetail;
