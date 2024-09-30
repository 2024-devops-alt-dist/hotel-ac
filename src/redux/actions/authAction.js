import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuth = true;
      // state.user = action.payload;
      state.user = {
        email: action.payload.email,
        uid: action.payload.uid,
      };
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isAuth = false;
      state.user = null;
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      // Suppr les infos du user
      state.isAuth = false;
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure, logout, setLoading } =
  authSlice.actions;

export default authSlice.reducer;
