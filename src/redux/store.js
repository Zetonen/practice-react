import { accountReducer } from './accountSlice';
import { localeReducer } from './localeSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    locale: localeReducer,
  },
});
