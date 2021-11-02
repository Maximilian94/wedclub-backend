const { getAllUsers, getUserById, updateUserById } = require("../model/users");

export const createUserService = (
	firstName: string,
	lastName: string,
	email: string,
	password: string
) => {
	return { status: 200, message: "user created" };
};

export const getAllUsersService = async () => {
	const response = await getAllUsers();
	return { status: 200, payload: response };
};

export const getUserByIdService = async (id: string) => {
	const response = await getUserById(id);
	if (response) {
		return { status: 200, userData: response };
	}
	return { status: 404 };
};

export const updateUserByIdService = async (id: string, updateData: object) => {
	const response = await updateUserById(id, updateData);
};
