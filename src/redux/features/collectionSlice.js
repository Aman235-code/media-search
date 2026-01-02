import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection(state, action) {
      const alreayExists = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!alreayExists) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeCollection(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection(state) {
      state.items = [];
      localStorage.removeItem("collection");
    },
  },
});

export const { addCollection, removeCollection, clearCollection } =
  collectionSlice.actions;
export default collectionSlice.reducer;
