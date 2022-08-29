import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getProfiles = createAsyncThunk(
  "profiles/getProfiles",
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=type:user+language:${query.skill}+location:${query.location}`
      );
      console.log("response", response);
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export { getProfiles };
