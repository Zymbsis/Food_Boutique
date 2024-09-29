import { createSlice } from '@reduxjs/toolkit';

const initialState = { isMobile: true, isTablet: false, isDesktop: false };

const windowSizeSlice = createSlice({
  name: 'windowSize',
  initialState: initialState,
  reducers: {
    getMobile: state => {
      state.isMobile = true;
      state.isTablet = false;
      state.isDesktop = false;
    },
    getTablet: state => {
      state.isMobile = false;
      state.isTablet = true;
      state.isDesktop = false;
    },
    getDesktop: state => {
      state.isMobile = false;
      state.isTablet = false;
      state.isDesktop = true;
    },
  },

  selectors: {
    selectIsMobile: state => state.isMobile,
    selectIsTablet: state => state.isTablet,
    selectIsDesktop: state => state.isDesktop,
  },
});

export const { getMobile, getTablet, getDesktop } = windowSizeSlice.actions;
export const { selectIsMobile, selectIsTablet, selectIsDesktop } =
  windowSizeSlice.selectors;
export const windowSizeReducer = windowSizeSlice.reducer;
