const express = require("express");

const route = express.Router();

// import { createUserController } from "../controller/user";
const {
	createUserController,
	getAllUsersController,
	getUserByIdController,
	updateUserByIdController,
} = require("../controller/user");

route.post("/", createUserController);

route.get("/", getAllUsersController);

route.get("/:id", getUserByIdController);

route.put("/:id", updateUserByIdController);

export default route;
