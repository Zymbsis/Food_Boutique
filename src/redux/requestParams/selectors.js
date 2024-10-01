export const selectKeyword = state => state.requestParams.requestParams.keyword;
export const selectCategory = state =>
  state.requestParams.requestParams.category;
export const selectPage = state => state.requestParams.requestParams.page;
export const selectLimit = state => state.requestParams.requestParams.limit;
export const selectSortParams = state =>
  state.requestParams.requestParams.sortParams;
