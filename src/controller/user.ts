import {
	getAllUsersService,
	getUserByIdService,
	updateUserByIdService,
} from "../services/user";
const { createUser } = require("../model/users");

const createUserController = async (req: any, res: any) => {
	const { firstName, lastName, email, password, role = "costumer" } = req.body;
	try {
		const response = await createUser(
			firstName,
			lastName,
			email,
			password,
			role
		);
		console.log(response);
		return res.status(response.status).json(response);
	} catch (error) {
		console.log("Catch");
		console.log(error.message);
		return res.status(500);
	}
};

const getAllUsersController = async (req: any, res: any) => {
	const response = await getAllUsersService();
	return res.status(response.status).json(response.payload);
};

const getUserByIdController = async (req: any, res: any) => {
	const { id } = req.params;
	const response = await getUserByIdService(id);
	return res.status(response.status).json(response);
};

const updateUserByIdController = async (req: any, res: any) => {
	const { id } = req.params;
	const updateData = req.body;
	const response = await updateUserByIdService(id, updateData);
	return res.status(response.status).json(response.payload);
};

module.exports = {
	createUserController,
	getAllUsersController,
	getUserByIdController,
	updateUserByIdController,
};
