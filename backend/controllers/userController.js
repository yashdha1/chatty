import express from "express";
import User from "../models/usersModel.model.js";
import expressAsyncHandler from "express-async-handler";
import { generateToken } from "../config/generateToken.js";
import cors from 'cors'

const router = express.Router();
router.use(cors());
// Sign-up controller
const signUpController = expressAsyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Check if the email is already registered
  const userAlreadyExist = await User.findOne({ email });
  if (userAlreadyExist) {
    return res
      .status(409)
      .json({ error: "User with this email already exists" });
  }

  // Check if the username is already taken
  const userNameAlreadyExist = await User.findOne({ userName });
  if (userNameAlreadyExist) {
    return res.status(409).json({ error: "Username is already taken" });
  }

  // Create a new user
  const newUser = await User.create({ userName, email, password });
  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.userName,
      email: newUser.email,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(401).json({ error: "Registration ERROR" });
  }
});

// Login controller
const loginController = expressAsyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  // Log the login attempt
  console.log("Login attempt:", req.body);

  // Find the user by username
  const userPresent = await User.findOne({ userName });

  // Check if the user exists and if the password matches
  if (userPresent && (await userPresent.matchPassword(password))) {
    res.status(201).json({
      _id: userPresent._id,
      name: userPresent.userName,
      email: userPresent.email,
      token: generateToken(userPresent._id),
    });
  } else {
    res.status(401).json({ error: "Invalid username or password" });
  }
});

export { loginController, signUpController };
