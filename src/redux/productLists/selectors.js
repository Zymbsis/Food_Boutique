import { createSelector } from '@reduxjs/toolkit';
import { createOptionsList } from '../../utils/productCategoriesOptions.js';

export const selectAllProductsList = state => state.productLists.allProducts.allProductsList;
export const selectTotalPages = state => state.productLists.allProducts.totalPages;
export const selectIsAllProductsLoading = state => state.productLists.allProducts.isLoading;
export const selectIsAllProductsError = state => state.productLists.allProducts.isError;

export const selectPopularProductsList = state =>
  state.productLists.popularProducts.popularProductsList;
export const selectIsPopularProductsLoading = state => state.productLists.popularProducts.isLoading;
export const selectIsPopularProductsError = state => state.productLists.popularProducts.isError;

export const selectDiscountProductsList = state =>
  state.productLists.discountProducts.discountProductsList;
export const selectIsDiscountProductsLoading = state =>
  state.productLists.discountProducts.isLoading;
export const selectIsDiscountProductsError = state => state.productLists.discountProducts.isError;

export const selectProductCategoriesList = state =>
  state.productLists.productCategories.productCategoriesList;
export const selectIsProductCategoriesLoading = state =>
  state.productLists.productCategories.isLoading;
export const selectIsProductCategoriesError = state => state.productLists.productCategories.isError;

export const selectOptionsListFromCategories = createSelector(
  [selectProductCategoriesList],
  categories => createOptionsList(categories)
);
