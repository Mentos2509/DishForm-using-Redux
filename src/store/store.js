import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/dishDataSlice";

export const store = configureStore({
  reducer: {
    dishData: userReducer,
  },
});
