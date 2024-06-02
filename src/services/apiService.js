
import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test/companies/AMZ/categories/Phone/products?top&minPrice=1&maxPrice=10000'; 

export const getProducts = async (category, company) => {
  const response = await axios.get(`${BASE_URL}/products`, {
    params: { category, company }
  });
  return response.data;
};
