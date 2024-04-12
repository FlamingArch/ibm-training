import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import JWT from "jsonwebtoken";
import bcrypt from "bcryptjs";

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

const loginUser = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: user.token,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Credentials");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  let { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User with email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const user = await User.create({ name, email, password: hashPassword });

  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  });
});

const generateToken = (id) => {
  return JWT.sign({ id }, "abcd1235", { expiresIn: "30d" });
};
export { loginUser, registerUser };
