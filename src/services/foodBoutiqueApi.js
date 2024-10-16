import axios from 'axios';
import { BASE_URL, SUBSCRIPTION_ENDPOINT, PRODUCTS_ENDPOINT } from 'constants';
import { ORDER_ENDPOINT } from '../constants/index.js';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const sendSubscription = payload => {
  return axiosInstance.post(SUBSCRIPTION_ENDPOINT, { email: payload });
};

export const fetchProductById = async id => {
  const { data } = await axiosInstance(`${PRODUCTS_ENDPOINT}/${id}`);
  return data;
};

export const orderProducts = ({ email, products }) => {
  return axiosInstance.post(ORDER_ENDPOINT, {
    email,
    products,
  });
};
