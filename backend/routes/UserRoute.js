import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/UserController.js";

const Router = express.Router();

Router.get("/users", getUsers);
Router.get("/users/:id", getUserById);
Router.post("/users", createUser);
Router.patch("/users/:id", updateUser);
Router.delete("/users/:id", deleteUser);

export default Router;
