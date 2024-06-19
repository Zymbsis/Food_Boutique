import { createSlice } from '@reduxjs/toolkit';
import {
  fetchDiscountProducts,
  fetchPopularProducts,
  fetchProductCategories,
} from './operations';

const initialState = {
  popularProducts: [],
  discountProducts: [],
  productCategories: [],
};

const productsSlice = createSlice({
  name: 'productLists',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPopularProducts.fulfilled, (state, action) => {
        state.popularProducts = action.payload;
      })
      .addCase(fetchDiscountProducts.fulfilled, (state, action) => {
        state.discountProducts = action.payload;
      })
      .addCase(fetchProductCategories.fulfilled, (state, action) => {
        state.productCategories = action.payload;
      });
  },
  selectors: {
    selectPopularProducts: state => state.popularProducts,
    selectDiscountProducts: state => state.discountProducts,
    selectProductCategories: state => state.productCategories,
  },
});

export const {
  selectPopularProducts,
  selectDiscountProducts,
  selectProductCategories,
} = productsSlice.selectors;

export const productListsReducer = productsSlice.reducer;
