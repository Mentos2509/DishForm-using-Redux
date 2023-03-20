import { createSlice } from "@reduxjs/toolkit";

export const userDishDataSlice = createSlice({
  name: "dishData",
  initialState: {
    dish: {
    },
  },
  reducers: {
    updateDishData: (state, action) => {
      console.log(state.dish.preparation_time);
      console.log(action.payload.value);
      state.dish[action.payload.field] = action.payload.value;
    },
  },
});

export const selectDishData = (state) => state.dishData.dish;

export const { updateDishData } = userDishDataSlice.actions;

export default userDishDataSlice.reducer;
