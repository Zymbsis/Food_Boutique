export const BASE_URL = 'https://food-boutique.b.goit.study/api';

const ENDPOINTS = {
  PRODUCTS: '/products',
  SUBSCRIPTION: '/subscription',
  ORDERS: '/orders',
};
export const { PRODUCTS, SUBSCRIPTION, ORDERS } = ENDPOINTS;

export const EMAIL_PATTERN = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

const VIEWPORT_SETTINGS = {
  mobile: { width: 375, perPage: 6, scrollOffset: 290 },
  tablet: { width: 768, perPage: 8, scrollOffset: 196 },
  desktop: { width: 1440, perPage: 9, scrollOffset: 216 },
};

export const { mobile, desktop, tablet } = VIEWPORT_SETTINGS;
