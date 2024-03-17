import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: {
    tweetArray: [],
  },
  reducers: {
    updateTweets: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateTweets } = tweetSlice.actions;
export default tweetSlice.reducer;
