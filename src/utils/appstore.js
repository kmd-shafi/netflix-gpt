import { configureStore } from "@reduxjs/toolkit";
import userreduser from "./userslice";
import moviesReducer from "./movieslice";

const appstore = configureStore({
  reducer: {
    user: userreduser,
    movies: moviesReducer,
  },
});
export default appstore;
