import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sendRequest from "../../functions/request/auth";

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.setItem("accessToken", null);
});

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ values, navigate }) => {
    await sendRequest(values, "signup");
    navigate("/login");
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ values, navigate }) => {
    const accessToken = await sendRequest(values, "login");
    if (typeof accessToken == "string") {
      localStorage.setItem("accessToken", accessToken);
      navigate("/");
    }
    return accessToken;
  }
);

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
      })
      .addCase(logout.fulfilled, (state) => {
        state.accessToken = null;
      });
  },
});

export default AuthSlice.reducer;
