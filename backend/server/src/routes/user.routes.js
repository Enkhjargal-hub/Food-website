import express from "express";
import {getAllUsers} from "../controllers/users/get-all-users.js"
import {createUser} from "../controllers/users/create-users.js"
import { getUser } from "../controllers/users/get-user.js";
import { updateUser } from "../controllers/users/update-user.js";
import { authorize } from "../middleware/authorize.js";
import { get } from "mongoose";
import { deleteUser } from "../controllers/users/delete-user.js";


export const usersRouter = express.Router();

// PATH
// GET, POST, PUT, PATCH, DELETE

usersRouter.get("/", getAllUsers); // Get All Users
usersRouter.post("/", createUser); // Create New User
usersRouter.get("/:id", getUser); // Get User Details
usersRouter.put("/:id", authorize, updateUser) // Update User
usersRouter.delete("/:id", authorize, deleteUser); // Delete User (зөвшөөрөл шаардах ёстой)