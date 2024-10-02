import axios from 'axios';
import { BASE_URL, PRODUCTS } from '../../constants';
import { createAsyncThunk } from '@reduxjs/toolkit';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}${PRODUCTS}`,
});

export const fetchAllProducts = createAsyncThunk(
  'productLists/getAllProducts',
  async (params, thunkAPI) => {
    try {
      const {
        data: { results, totalPages },
      } = await axiosInstance('/', {
        params,
      });
      return { results, totalPages };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchPopularProducts = createAsyncThunk(
  'productLists/getPopularProducts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance('/popular');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchDiscountProducts = createAsyncThunk(
  'productLists/getDiscountProducts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance('/discount');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchProductCategories = createAsyncThunk(
  'productLists/getProductCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance(`/categories`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
