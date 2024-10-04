import axios from 'axios';
import { BASE_URL, PRODUCTS } from '../constants';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}${PRODUCTS}`,
});

export const fetchProductById = async id => {
  const { data } = await axiosInstance(`/${id}`);
  return data;
};
