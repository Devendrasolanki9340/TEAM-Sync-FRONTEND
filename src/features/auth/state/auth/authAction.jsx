
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosInstance";

export let loginEmployee = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    console.log("Login request payload:", credentials);

    try {
      let res = await axiosInstance.post("/auth/login", credentials);
      console.log("Login response:", res);
      return res.data.data;
    } catch (error) {
      console.error("Login error:", error);
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);