export const {
  BASE_URL,
  PRODUCTS_ENDPOINT,
  SUBSCRIPTION_ENDPOINT,
  ORDERS_ENDPOINT,
} = {
  BASE_URL: 'https://food-boutique.b.goit.study/api',
  PRODUCTS_ENDPOINT: '/products',
  SUBSCRIPTION_ENDPOINT: '/subscription',
  ORDERS_ENDPOINT: '/orders',
};

export const EMAIL_PATTERN = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

export const { MOBILE, TABLET, DESKTOP } = {
  MOBILE: { vw_width: 375, perPage: 6, scrollOffset: 290 },
  TABLET: { vw_width: 768, perPage: 8, scrollOffset: 196 },
  DESKTOP: { vw_width: 1440, perPage: 9, scrollOffset: 216 },
};

export const { ALL, DISCOUNT, POPULAR, MODAL, CART } = {
  ALL: 'allProductsList',
  DISCOUNT: 'discountProductsList',
  POPULAR: 'popularProductsList',
  MODAL: 'modalWindow',
  CART: 'cart',
};
