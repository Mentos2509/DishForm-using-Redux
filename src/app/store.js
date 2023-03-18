import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/dishData'


export const store = configureStore({
  reducer: {
    dishData: userReducer,
  },
});
