const express = require("express");

const route = express.Router();

// import { createUserController } from "../controller/user";
const {
	createUserController,
	getAllUsersController,
	getUserByIdController,
	updateUserByIdController,
	deleteUserByIdController,
} = require("../controller/user");

route.post("/", createUserController);

route.get("/", getAllUsersController);

route.get("/:id", getUserByIdController);

route.put("/:id", updateUserByIdController);

route.delete("/:id", deleteUserByIdController);

export default route;
