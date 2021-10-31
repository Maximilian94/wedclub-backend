const express = require("express");

const router = express.Router();

const { loginController } = require("../controller/login");

router.post(
	"/",
	(req: any, res: any, next: any) => {
		console.log("Login route");
		next();
	},
	loginController
);

export default router;
