// store/loginSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || null,
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, userInfo } = action.payload;
      const expiryTime = Date.now() + 8*3600000;
      state.token = token;
      state.userInfo = userInfo;
      localStorage.setItem('token', token);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      localStorage.setItem("expiryTime", expiryTime);
     
    },
    logout: (state) => {
      state.token = null;
      state.userInfo = null;
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, logout } = loginSlice.actions;

export default loginSlice.reducer;