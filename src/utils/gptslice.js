import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    MovieNames: null,
  },
  reducers: {
    togleGptsearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { MovieNames, movieResults } = action.payload;
      state.MovieNames = MovieNames;
      state.movieResults = movieResults;
    },
  },
});
export const { togleGptsearchView, addGptMovieResult } = gptslice.actions;
export default gptslice.reducer;
