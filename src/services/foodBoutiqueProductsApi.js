import axios from 'axios';
import { BASE_URL, PRODUCTS_ENDPOINT } from '../constants';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}${PRODUCTS_ENDPOINT}`,
});

export const fetchProductById = async id => {
  const { data } = await axiosInstance(`/${id}`);
  return data;
};
