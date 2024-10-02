import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requestParams: {
    keyword: '',
    category: '',
    page: 1,
    limit: null,
  },
  sortParams: {},
};

const requestParams = createSlice({
  name: 'requestParams',
  initialState: initialState,
  reducers: {
    changeKeyword: (state, action) => {
      state.requestParams.keyword = action.payload;
      state.requestParams.page = 1;
    },
    changeCategory: (state, action) => {
      state.requestParams.category = action.payload;
      state.requestParams.page = 1;
    },
    changePage: (state, action) => {
      state.requestParams.page = action.payload;
    },
    changeLimit: (state, action) => {
      state.requestParams.limit = action.payload;
      state.requestParams.page = 1;
    },
    addSortParams: (state, action) => {
      state.sortParams = action.payload;
      state.requestParams.page = 1;
    },
  },
});

export const requestParamsReducer = requestParams.reducer;

export const {
  changeKeyword,
  changeCategory,
  changePage,
  changeLimit,
  addSortParams,
} = requestParams.actions;
