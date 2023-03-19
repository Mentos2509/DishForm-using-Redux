import { createSlice } from "@reduxjs/toolkit";

export const userDishDataSlice = createSlice({
  name: "dishData",
  initialState: {
    dish: {
      name: "",
      preparation_time: "",
      type: "",
      no_of_slices: 0,
      diameter: 0,
      spiciness_scale: 0,
      slices_of_bread: 0,
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
