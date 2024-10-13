import axios from 'axios';
import { BASE_URL, SUBSCRIPTION_ENDPOINT, PRODUCTS_ENDPOINT } from 'constants';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const sendSubscriptionRequest = async payload => {
  await axiosInstance.post(SUBSCRIPTION_ENDPOINT, { email: payload });
};

export const fetchProductById = async id => {
  const { data } = await axiosInstance(`${PRODUCTS_ENDPOINT}/${id}`);
  return data;
};
