import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sendRequest from "../../functions/request/auth";

export const signup = createAsyncThunk("auth/signup", async (e) => {
  await sendRequest(e, "signup");
});

export const login = createAsyncThunk("auth/login", async (e) => {
  const accessToken = await sendRequest(e, "login");
  localStorage.setItem("accessToken", accessToken);
});

const initialState = {
  loading: false,
  accessToken: localStorage.getItem("accessToken")
    ? localStorage.getItem("accessToken")
    : null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signup.rejected, (state) => {
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.accessToken = null;
      });
  },
});

export default AuthSlice.reducer;
