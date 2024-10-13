import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

const initialState = { cart: [], totalSum: 0 };

const cart = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.cart = state.cart.filter(item => item._id !== action.payload);
    },
    deleteAllProducts: state => {
      state.cart = [];
    },
    increaseProductQuantity: (state, action) => {
      state.cart = state.cart.map(item =>
        item._id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decreaseProductQuantity: (state, action) => {
      const productQuantity = state.cart.find(
        item => item._id === action.payload
      )?.quantity;
      if (productQuantity > 1) {
        state.cart = state.cart.map(item =>
          item._id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        state.cart = state.cart.filter(item => item._id !== action.payload);
      }
    },
  },
});

export const cartReducer = cart.reducer;

export const {
  addProduct,
  deleteProduct,
  deleteAllProducts,
  increaseProductQuantity,
  decreaseProductQuantity,
} = cart.actions;

export const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['cart'],
};
