import axios from 'axios';
import { BASE_URL, SUBSCRIPTION_ENDPOINT } from 'constants';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}${SUBSCRIPTION_ENDPOINT}`,
});

export const sendSubscriptionRequest = async payload => {
  await axiosInstance.post('', { email: payload });
};
