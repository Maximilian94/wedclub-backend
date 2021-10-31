const express = require("express");

const login = express.Router();

const { loginController } = require("../controller/login");

login.post(
	"/",
	(req, res, next) => {
		console.log("Login route");
		next();
	},
	loginController
);

module.exports = login;
