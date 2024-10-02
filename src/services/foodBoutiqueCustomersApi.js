import axios from 'axios';
import { BASE_URL, SUBSCRIPTION } from 'constants';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}${SUBSCRIPTION}`,
});

export const sendSubscriptionRequest = async payload => {
  await axiosInstance.post('', { email: payload });
};
