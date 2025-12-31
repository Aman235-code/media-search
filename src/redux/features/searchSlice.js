import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setResults(state, action) {
      state.results = action.payload;
      state.error = null;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearResults(state) {
      state.results = [];
    },
  },
});

export const {
  setQuery,
  setActiveTab,
  setLoading,
  setError,
  setResults,
  clearResults,
} = searchSlice.actions;
export default searchSlice.reducer;
