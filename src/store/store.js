import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import HouseReducer from "./HouseReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    house: HouseReducer,
  },
});
