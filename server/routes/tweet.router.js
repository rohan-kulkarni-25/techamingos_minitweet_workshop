import { Router } from "express";
import { getAllTweet, postTweet } from "../controllers/tweet.controller.js";

const router = Router();

// SIGNUP
router.route("/tweet").post(postTweet);
router.route("/tweets").get(getAllTweet);

export default router;
