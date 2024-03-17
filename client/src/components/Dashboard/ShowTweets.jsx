import axios from "axios";
import React, { useEffect, useState } from "react";
import TweetCard from "./TweetCard";
import { useDispatch, useSelector } from "react-redux";
import { updateTweets } from "../../store/slices/tweetSlice";

const ShowTweets = () => {
  const tweet = useSelector((state) => state.tweet);
  const [tweets, setTweets] = useState(tweet.tweetArray);

  const dispatch = useDispatch();

  const getTweets = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:8080/api/v1/user/tweets",
      });
      setTweets(response.data.data);
      dispatch(updateTweets({ tweetArray: response.data.data.reverse() }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <div className="h-full">
      <div>
        {tweet.tweetArray.map((tweet) => {
          return <TweetCard data={tweet} key={tweet._id} />;
        })}
      </div>
    </div>
  );
};

export default ShowTweets;
