import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    togleGptsearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});
export const { togleGptsearchView } = gptslice.actions;
export default gptslice.reducer;
