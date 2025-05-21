import {
  createAsyncThunk,
  createSlice,
  isRejected,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import api from "../../servies/api";

export const registeruser = createAsyncThunk(
  "auth/registeruser",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/auth/register", info);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginuser = createAsyncThunk(
  "auth/loginuser",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/auth/login", info);
      return fulfillWithValue(data)
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
