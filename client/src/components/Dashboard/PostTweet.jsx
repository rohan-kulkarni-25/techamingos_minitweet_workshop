import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateTweets } from "../../store/slices/tweetSlice";
const PostTweet = () => {
  const user = useSelector((state) => state.user);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTweet = async () => {
    try {
      await axios({
        method: "post",
        data: {
          userId: user._id,
          description,
        },
        url: "http://localhost:8080/api/v1/user/tweet",
      });
      const response2 = await axios({
        method: "get",
        url: "http://localhost:8080/api/v1/user/tweets",
      });
      dispatch(updateTweets({ tweetArray: response2.data.data.reverse() }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row  items-center justify-center h-full">
      <div className="flex flex-col  bg-blue-50  gap-4 p-4 rounded-md">
        <input
          type="text"
          className="text-2xl p-2 rounded-md h-96 w-full"
          placeholder="description"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white text-2xl font-bold px-4 py-2 rounded-md"
          onClick={handleTweet}
        >
          TWEET
        </button>
      </div>
    </div>
  );
};

export default PostTweet;
