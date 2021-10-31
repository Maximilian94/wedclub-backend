const express = require("express");

const login = express.Router();

// const loginValidation = () => {
// 	console.log("Validation");
// };

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
