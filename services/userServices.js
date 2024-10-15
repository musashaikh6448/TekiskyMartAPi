import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import sendEmail from "../utils/sendEmail.js";

import User from "../models/userModel.js";
import { welcomeEmail } from "../emails/welcomeEmail.js";

export const registerUserServices = async (
  firstname,
  lastname,
  mobileNumber,
  email,
  password,
  role,
  shopCategory,
  shopName,
  shopAddress,
  GST
) => {
  const userExists = await User.findOne({ email });
  if (userExists) throw new Error("User already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    firstname,
    lastname,
    mobileNumber,
    role,
    shopCategory,
    shopName,
    shopAddress,
    GST,
    email,
    password: hashedPassword,
  });

  // Send Welcome Email
  await sendEmail(
    user.email,
    "Welcome to Tekisky Mart",
    welcomeEmail(user.firstname)
  );

  return { user };
};

export const loginUserServices = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return { token, user };
};

export const getUserByIdServices = async (id) => {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");
  return user;
};

export const getAllUsersServices = async () => {
  return await User.find();
};

export const updateUserServices = async (id, updateData) => {
  const user = await User.findByIdAndUpdate(id, updateData, { new: true });
  return user;
};




export const deleteUserServices = async (id) => {
  await User.findByIdAndDelete(id);
};

