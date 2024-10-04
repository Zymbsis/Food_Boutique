import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

const initialState = { cart: [] };

const cart = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.cart = state.cart.filter(item => item._id !== action.payload._id);
    },
    deleteAllProducts: state => {
      state.cart = [];
    },
  },
  selectors: {
    selectCart: state => state.cart,
    selectProductsQuantity: state => state.cart.length,
  },
});

export const cartReducer = cart.reducer;

export const { selectCart, selectProductsQuantity } = cart.selectors;

export const { addProduct, deleteProduct, isInCart, deleteAllProducts } =
  cart.actions;

export const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['cart'],
};
