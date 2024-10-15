
import {
  deleteUserServices,
  getAllUsersServices,
  getUserByIdServices,
  loginUserServices,
  registerUserServices,
  updateUserServices,
} from "../services/userServices.js";

export const registerUserController = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      mobileNumber,
      email,
      password,
      role,
      shopCategory,
      shopName,
      shopAddress,
      GST,
    } = req.body;
    const { user } = await registerUserServices(
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
    );
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await loginUserServices(email, password);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getOneUserController = async (req, res) => {
  try {
    const user = await getUserByIdServices(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsersServices();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUserController = async (req, res) => {
  try {
    const updatedUser = await updateUserServices(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUserController = async (req, res) => {
  try {
    await deleteUserServices(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
