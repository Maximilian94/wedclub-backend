const express = require("express");

const route = express.Router();

// import { createUserController } from "../controller/user";
const {
	createUserController,
	getAllUsersController,
} = require("../controller/user");

route.post("/", createUserController);

route.get("/", getAllUsersController);

export default route;
