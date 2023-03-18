import { createSlice } from "@reduxjs/toolkit";

export const userDishDataSlice = createSlice({
  name: "dishData",
  initialState:{value: {
    name: "",
    preparation_time: "",
    type: "",
    no_of_slices: 0,
    diameter: 0,
    spiciness_scale: 0,
    slices_of_bread: 0,
  }}, 
  reducers: {
    dishData: (state, action) => {
      state.value = action.value;
    },
  },
});

export default userDishDataSlice.reducer;
