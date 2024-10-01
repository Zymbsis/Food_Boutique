import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllProducts,
  fetchDiscountProducts,
  fetchPopularProducts,
  fetchProductCategories,
} from './operations';

const initialState = {
  allProducts: {
    allProductsList: [],
    totalPages: null,
    isLoading: false,
    isError: false,
  },
  popularProducts: {
    popularProductsList: [],
    isLoading: false,
    isError: false,
  },
  discountProducts: {
    discountProductsList: [],
    isLoading: false,
    isError: false,
  },
  productCategories: {
    productCategoriesList: [],
    isLoading: false,
    isError: false,
  },
};

const productsSlice = createSlice({
  name: 'productLists',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllProducts.pending, state => {
        state.allProducts.isLoading = true;
        state.allProducts.isError = false;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.allProducts.isLoading = false;
        state.allProducts.allProductsList = action.payload.results;
        state.allProducts.totalPages = action.payload.totalPages;
      })
      .addCase(fetchAllProducts.rejected, state => {
        state.allProducts.isLoading = false;
        state.allProducts.isError = true;
      })
      .addCase(fetchPopularProducts.pending, state => {
        state.popularProducts.isLoading = true;
        state.popularProducts.isError = false;
      })
      .addCase(fetchPopularProducts.fulfilled, (state, action) => {
        state.popularProducts.isLoading = false;
        state.popularProducts.popularProductsList = action.payload;
      })
      .addCase(fetchPopularProducts.rejected, state => {
        state.popularProducts.isLoading = false;
        state.popularProducts.isError = true;
      })
      .addCase(fetchDiscountProducts.pending, state => {
        state.discountProducts.isLoading = true;
        state.discountProducts.isError = false;
      })
      .addCase(fetchDiscountProducts.fulfilled, (state, action) => {
        state.discountProducts.isLoading = false;
        state.discountProducts.discountProductsList = action.payload;
      })
      .addCase(fetchDiscountProducts.rejected, state => {
        state.discountProducts.isLoading = false;
        state.discountProducts.isError = true;
      })
      .addCase(fetchProductCategories.pending, state => {
        state.popularProducts.isLoading = true;
        state.popularProducts.isError = false;
      })
      .addCase(fetchProductCategories.fulfilled, (state, action) => {
        state.productCategories.isLoading = false;
        state.productCategories.productCategoriesList = action.payload;
      })
      .addCase(fetchProductCategories.rejected, state => {
        state.productCategories.isLoading = false;
        state.productCategories.isError = true;
      });
  },
});

export const productListsReducer = productsSlice.reducer;
