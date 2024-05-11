import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  houseData: {},
};

const houseReducer = createSlice({
  name: "houseData",
  initialState,
  reducers: {
    buyHouse: (state, action) => {
      state.houseData = action.payload;
    },
  },
});

export const { buyHouse } = houseReducer.actions;

export default houseReducer.reducer;
