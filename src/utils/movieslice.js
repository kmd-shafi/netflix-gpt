import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    TrailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.TrailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = movieslice.actions;
export default movieslice.reducer;
