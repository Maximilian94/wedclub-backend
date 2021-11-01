const { getAllUsers } = require("../model/users");

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
