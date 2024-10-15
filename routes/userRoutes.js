import express from "express";


import {
  deleteUserController,
  getAllUsersController,
  getOneUserController,
  loginUserController,
  registerUserController,
  updateUserController,
} from "../controllers/userController.js";
import authenticateToken from "../middleware/authentication.js";

const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.get("/getAllUsers", authenticateToken, getAllUsersController);
router.get("getOneUser/:id", authenticateToken, getOneUserController);
router.put("updateUser/:id", authenticateToken, updateUserController);
router.delete("deleteUser/:id", authenticateToken, deleteUserController);

export default router;
