import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userEmail: null,
  userUid: null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.userEmail = action.payload.userEmail;
      state.userUid = action.payload.userUid;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userEmail = null;
      state.userUid = null;
    },
  },
});

export const { loginSuccess, logout } = authReducer.actions;

export default authReducer.reducer;
