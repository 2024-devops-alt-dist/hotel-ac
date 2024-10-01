import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  etabs: [],
  error: null,
};

const etabSlice = createSlice({
  name: "fetchEtabs",
  initialState,
  reducers: {
    fetchEtabsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchEtabsSuccess: (state, action) => {
      state.isLoading = false;
      state.etabs = action.payload;
      state.error = null;
    },
    fetchEtabsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.etabs = [];
    },
  },
});

export const { fetchEtabsStart, fetchEtabsSuccess, fetchEtabsFailure } =
  etabSlice.actions;

export default etabSlice.reducer;
