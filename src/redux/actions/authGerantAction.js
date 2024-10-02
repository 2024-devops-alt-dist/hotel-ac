import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  gerant: null,
  isLoading: false,
  error: null,
};

const authSliceGerant = createSlice({
  name: "authGerant",
  initialState,
  reducers: {
    loginGerantSuccess: (state, action) => {
      state.isAuth = true;
      // state.user = action.payload;
      state.gerant = {
        email: action.payload.email,
        uid: action.payload.uid,
      };
      state.isLoading = false;
      state.error = null;
    },
    loginGerantFailure: (state, action) => {
      state.isAuth = false;
      state.gerant = null;
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutGerant: (state) => {
      // Suppr les infos du user
      state.isAuth = false;
      state.gerant = null;
      state.isLoading = false;
      state.error = null;
    },
    setLoadingGerant: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  loginGerantSuccess,
  loginGerantFailure,
  logoutGerant,
  setLoadingGerant,
} = authSliceGerant.actions;

export default authSliceGerant.reducer;
