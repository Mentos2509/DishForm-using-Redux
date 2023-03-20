import { createSlice } from "@reduxjs/toolkit";

export const userDishDataSlice = createSlice({
  name: "dishData",
  initialState: {
    dish: {},
  },
  reducers: {
    updateDishData: (state, action) => {
      state.dish[action.payload.field] = action.payload.value;
    },
    resetDishData: (state) => {
      state.dish = {}
    }
  },
});

export const selectDishData = (state) => state.dishData.dish;

export const { updateDishData, resetDishData } = userDishDataSlice.actions;

export default userDishDataSlice.reducer;
