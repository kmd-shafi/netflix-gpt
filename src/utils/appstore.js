import { configureStore } from "@reduxjs/toolkit";
import userreduser from "./userslice";

const appstore = configureStore({
  reducer: {
    user: userreduser,
  },
});
export default appstore;
