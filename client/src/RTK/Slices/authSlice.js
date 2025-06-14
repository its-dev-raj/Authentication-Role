import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../servies/api";

export const user_register = createAsyncThunk(
  "auth/user_register",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/auth/register", info);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const user_login = createAsyncThunk(
  "auth/user_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/auth/login", info);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const user_logout = createAsyncThunk(
  "auth/user_logout",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/auth/logout");
      localStorage.removeItem("userToken");
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    loader: false,
    userInfo: null,
    errorMessage: "",
    successMessage: "",
  },
  reducers: {
    messageClear: (state) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
    // user_reset: (state) => {
    //   state.userInfo = null;
    // },
    SetUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(user_register.pending, (state) => {
        state.loader = true;
      })
      .addCase(user_register.rejected, (state, { payload }) => {
        state.errorMessage = payload?.message || "Registertion failed";
        state.loader = false;
      })
      .addCase(user_register.fulfilled, (state, { payload }) => {
        state.successMessage = payload?.message;
        state.loader = false;
        state.userInfo = payload.userInfo;
      })
      .addCase(user_login.pending, (state) => {
        state.loader = true;
      })
      .addCase(user_login.rejected, (state, { payload }) => {
        state.errorMessage = payload?.message || "Login failed";
        state.loader = false;
      })
      .addCase(user_login.fulfilled, (state, { payload }) => {
        state.successMessage = payload?.message;
        state.loader = false;
        state.userInfo = payload.userInfo;
      })
      .addCase(user_logout.pending, (state) => {
        state.loader = true;
      })
      .addCase(user_logout.rejected, (state, { payload }) => {
        state.errorMessage = payload?.message || "Logout failed";
        state.loader = false;
      })
      .addCase(user_logout.fulfilled, (state, { payload }) => {
        state.userInfo = null;
        state.successMessage = payload?.message || "Logged out successfully";
        state.loader = false;
      });
  },
});

export const { messageClear, SetUser } = authReducer.actions;
export default authReducer.reducer;
