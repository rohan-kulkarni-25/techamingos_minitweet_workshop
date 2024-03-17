// POST TWEET
// GET TWEET

import { Tweet } from "../models/tweet.js";

const postTweet = async (req, res) => {
  try {
    const { userId, description } = req.body;

    if (!userId || !description) {
      res.status(400).json({
        message: "UserID and Description are needed.",
      });
    }

    await Tweet.create({
      userId,
      description,
    });
    res.status(201).json({
      message: "tweet created !!",
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllTweet = async (req, res) => {
  try {
    const tweets = await Tweet.find();
    res.status(200).json({
      data: tweets,
      message: "Fetched ALl tweets",
    });
  } catch (error) {
    console.log(error);
  }
};

export { postTweet, getAllTweet };
