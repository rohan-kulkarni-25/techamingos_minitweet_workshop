// SIGNUP
// LOGIN
import { User } from "./../models/user.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  try {
    const { username, name, email, password } = req.body;
    if (!username || !name || !email || !password) {
      res.status(400).json({
        message: "All fields are required.",
      });
    }

    const userExists = await User.findOne({ username });

    if (userExists) {
      res.status(400).json({
        message: "User Already Exists",
      });
    }

    const user = await User.create({
      username,
      email,
      password,
      name,
    });

    res.status(201).json({
      message: "User created !!",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

const logInUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({
        message: "Email and Password is needed",
      });
    }
    const userExists = await User.findOne({ username });
    let isPasswordCorrect = await bcrypt.compare(password, userExists.password);
    if (isPasswordCorrect) {
      const user = await User.findOne({ username }).select("-password");
      res.status(200).json({
        login: true,
        user: user,
      });
    } else {
      res.status(200).json({
        login: false,
        message: "Wrong Password",
      });
    }
    res.send("ERROR");
  } catch (error) {
    console.log(error);
  }
};

export { registerUser, logInUser };
