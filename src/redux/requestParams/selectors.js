import { createSelector } from '@reduxjs/toolkit';
import { createOptionFromCategory, createOptionFromSortParams } from 'helpers';

export const selectKeyword = state => state.requestParams.requestParams.keyword;
export const selectCategory = state =>
  state.requestParams.requestParams.category;
export const selectPage = state => state.requestParams.page;
export const selectLimit = state => state.requestParams.requestParams.limit;
export const selectRequestParams = state => state.requestParams.requestParams;
export const selectSortParams = state => state.requestParams.sortParams;

export const selectDisplayedCategory = createSelector(
  [selectCategory],
  category => createOptionFromCategory(category)
);

export const selectDisplayedSortParams = createSelector(
  [selectSortParams],
  sortParams => createOptionFromSortParams(sortParams)
);

export const selectRequestParamsExceptPage = createSelector(
  [selectRequestParams, selectSortParams],
  (reqParams, sortParams) => ({ ...reqParams, ...sortParams })
);
