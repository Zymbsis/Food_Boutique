import { configureStore } from '@reduxjs/toolkit';
import { requestParamsReducer } from './requestParams/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { cartPersistConfig, cartReducer } from './cart/slice';
import { productListsReducer } from './productLists/slice';
import { windowSizeReducer } from './windowSize/slice';

export const store = configureStore({
  reducer: {
    requestParams: requestParamsReducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
    productLists: productListsReducer,
    windowSize: windowSizeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
