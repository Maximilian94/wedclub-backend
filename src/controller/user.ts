import {
	getAllUsersService,
	getUserByIdService,
	updateUserByIdService,
	deleteUserByIdService,
	createUserService,
} from "../services/user";

const createUserController = async (req: any, res: any) => {
	const { firstName, lastName, email, password, role = "costumer" } = req.body;
	try {
		const response = await createUserService(
			firstName,
			lastName,
			email,
			password,
			role
		);
		return res.status(response.status).json(response);
	} catch (error) {
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

const deleteUserByIdController = async (req: any, res: any) => {
	const { id } = req.params;
	const response = await deleteUserByIdService(id);
	return res.status(response.status).json(response.payload);
};

module.exports = {
	createUserController,
	getAllUsersController,
	getUserByIdController,
	updateUserByIdController,
	deleteUserByIdController,
};
