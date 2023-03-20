import { configureStore } from "@reduxjs/toolkit";
import dishDataReducer from "./features/dishDataSlice";

export const store = configureStore({
  reducer: {
    dishData: dishDataReducer,
  },
});
