import { configureStore } from "@reduxjs/toolkit";
import userreduser from "./userslice";
import moviesReducer from "./movieslice";
import gptReducer from "./gptslice";
import configReduser from "./configslice";

const appstore = configureStore({
  reducer: {
    user: userreduser,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReduser,
  },
});
export default appstore;
