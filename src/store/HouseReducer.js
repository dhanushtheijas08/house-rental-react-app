import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  houseData: {},
};

const houseReducer = createSlice({
  name: "houseData",
  initialState,
  reducers: {
    addHouse: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

export const { addHouse } = houseReducer.actions;

export default houseReducer.reducer;
