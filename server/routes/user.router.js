import { Router } from "express";
import { logInUser, registerUser } from "../controllers/user.controller.js";

const router = Router();

// SIGNUP
router.route("/register").post(registerUser);
router.route("/login").post(logInUser);

export default router;
