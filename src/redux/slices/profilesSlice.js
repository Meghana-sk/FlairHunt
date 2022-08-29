import { createSlice } from "@reduxjs/toolkit";
import { getProfiles } from "../asyncThunks/profileThunk";

const initialState = { profiles: [], isLoading: false };

const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {},
  extraReducers: {
    [getProfiles.pending]: (state) => {
      state.isLoading = true;
    },
    [getProfiles.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.profiles = action.payload.data.items;
      console.log("state.profiles", state.profiles);
    },
    [getProfiles.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action?.error?.message);
    },
  },
});

export const { reducer: profileReducer } = profilesSlice;
