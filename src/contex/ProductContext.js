
import React, { createContext, useState, useEffect } from 'react';
import { getProducts } from '../services/apiService';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await Promise.all([
        getProducts('electronics', 'company1'),
        getProducts('fashion', 'company2'),
        getProducts('home', 'company3'),
        getProducts('beauty', 'company4'),
        getProducts('sports', 'company5')
      ]);
      setProducts(productData.flat());
      setFilteredProducts(productData.flat());
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, filteredProducts, setFilteredProducts, loading }}>
      {children}
    </ProductContext.Provider>
  );
};
