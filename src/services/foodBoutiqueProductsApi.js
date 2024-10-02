import axios from 'axios';
import { BASE_URL, PRODUCTS } from '../constants';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}${PRODUCTS}`,
});

export const fetchProductCategories = async () => {
  const { data } = await axiosInstance(`/categories`);
  return data;
};

export const fetchProducts = async params => {
  const {
    data: { results, totalPages },
  } = await axiosInstance('/', {
    params,
  });
  return { results, totalPages };
};

export const fetchPopularProducts = async () => {
  const { data } = await axiosInstance('/popular');
  return data;
};

export const fetchDiscountProducts = async () => {
  const { data } = await axiosInstance('/discount');
  return data;
};

export const fetchProductById = async id => {
  const { data } = await axios(id);
  return data;
};
