import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import tweetReducer from "./slices/tweetSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    tweet: tweetReducer,
  },
});
