import { createUserService } from "../services/user";
const { createUser } = require("../model/users");

const createUserController = async (req: any, res: any) => {
	const { firstName, lastName, email, password } = req.body;
	try {
		const response = await createUser(firstName, lastName, email, password);
		console.log(response);
		return res.status(response.status).json(response);
	} catch (error) {
		console.log("Catch");
		console.log(error.message);
		return res.status(500);
	}
};

module.exports = { createUserController };
