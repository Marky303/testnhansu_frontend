import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: localStorage.getItem('accessToken') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,
  sessionExpireTime: localStorage.getItem('sessionExpireTime') || null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sessionExpireTime = action.payload.sessionExpireTime;

      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
      localStorage.setItem('sessionExpireTime', action.payload.sessionExpireTime);
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.sessionExpireTime = null;

      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('sessionExpireTime');
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const { setTokens, logout, setLoading } = userSlice.actions;

export default userSlice.reducer;