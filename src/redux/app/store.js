import { configureStore } from "@reduxjs/toolkit";
import { profileReducer } from "../slices/profilesSlice";

export const store = configureStore({
  reducer: { profiles: profileReducer },
});
