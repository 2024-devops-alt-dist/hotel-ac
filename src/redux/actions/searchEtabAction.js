import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  searchEtab: [],
  etabs: [],
  error: null,
};

console.log("initial state", initialState);

const searchEtabsSlice = createSlice({
  name: "searchEtabs",
  initialState,
  reducers: {
    setEtabs: (state, action) => {
      state.etabs = action.payload;
      console.log("object", state.etabs);
    },
    searchEtabSuccess: (state, action) => {
      console.log("state", state);
      //ATTENTION AUX OBJETS NON SERIALIZABLES
      // state.searchEtab = JSON.parse(JSON.stringify(action.payload));
      state.searchEtab = action.payload;
      state.isLoading = false;
    },
    searchEtabLoading: (state, action) => {
      state.isLoading = true;
    },
    searchEtabFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { searchEtabSuccess, searchEtabLoading, searchEtabFailure } =
  searchEtabsSlice.actions;

export default searchEtabsSlice.reducer;
