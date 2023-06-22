import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: localStorage.getItem("accessToken") || "",
  userInfo: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.userInfo = {
        id: action.payload.id,
        username: action.payload.username,
      };
    },
    logout: (state) => {
      state.accessToken = "";
      localStorage.removeItem("accessToken");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;