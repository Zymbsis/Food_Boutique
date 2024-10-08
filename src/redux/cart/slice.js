import { createSelector, createSlice } from '@reduxjs/toolkit';
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
  },
  selectors: {
    selectCart: state => state.cart,
    // selectProductsQuantity: state => state.cart.length,
  },
});

export const cartReducer = cart.reducer;

export const { selectCart } = cart.selectors;

export const { addProduct, deleteProduct, isInCart, deleteAllProducts } =
  cart.actions;

export const selectTotalSum = createSelector([selectCart], cart =>
  cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)
);
export const selectProductQuantity = createSelector(
  [selectCart],
  cart => cart.length
);

export const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['cart'],
};
