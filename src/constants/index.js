export const BASE_URL = 'https://food-boutique.b.goit.study/api';

const ENDPOINTS = {
  PRODUCTS: '/products',
  SUBSCRIPTION: '/subscription',
  ORDERS: '/orders',
};
export const { PRODUCTS, SUBSCRIPTION, ORDERS } = ENDPOINTS;

export const EMAIL_PATTERN = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

const PER_PAGE = {
  mobile: { width: 375, perPage: 6 },
  tablet: { width: 768, perPage: 8 },
  desktop: { width: 1440, perPage: 9 },
};

export const { mobile, desktop, tablet } = PER_PAGE;
