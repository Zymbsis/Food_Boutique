import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  keyword: '',
  category: null,
  page: 1,
  limit: null,
};

const requestParams = createSlice({
  name: 'requestParams',
  initialState: initialState,
  reducers: {
    changeKeyword: (state, action) => ({
      ...state,
      keyword: action.payload,
      page: 1,
    }),
    changeCategory: (state, action) => ({
      ...state,
      category: action.payload,
      page: 1,
    }),
    changePage: (state, action) => {
      state.page = action.payload;
    },
    changeLimit: (state, action) => {
      state.limit = action.payload;
    },
    addSortParams: (state, action) => ({
      keyword: state.keyword,
      category: state.category,
      page: 1,
      limit: state.limit,
      ...action.payload,
    }),
  },
  selectors: {
    selectRequestParams: state => state,
    selectKeyword: state => state.keyword,
    selectCategory: state => state.category,
    selectLimit: state => state.limit,
    selectPage: state => state.page,
  },
});

export const requestParamsReducer = requestParams.reducer;

export const {
  selectRequestParams,
  selectKeyword,
  selectCategory,
  selectLimit,
  selectPage,
} = requestParams.selectors;

export const {
  changeKeyword,
  changeCategory,
  changePage,
  changeLimit,
  addSortParams,
} = requestParams.actions;
