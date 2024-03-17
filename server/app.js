import express, { urlencoded } from "express";
const app = express();
import cors from "cors";

// SIGNUP
// LOGIN
// WRITE TWEET
// GET TWEET

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

import userRouter from "./routes/user.router.js";
import tweetRouter from "./routes/tweet.router.js";

// ROUTERS tweet user
app.use("/api/v1/users", userRouter);
app.use("/api/v1/users", tweetRouter);

export { app };
