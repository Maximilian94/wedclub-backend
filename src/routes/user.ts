const express = require("express");

const route = express.Router();

// import { createUserController } from "../controller/user";
const { createUserController } = require("../controller/user");

route.post("/", createUserController);

export default route;
