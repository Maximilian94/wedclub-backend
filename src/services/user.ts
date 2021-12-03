const {
	getAllUsers,
	getUserById,
	updateUserById,
	deleteUserByIdi,
	findUserByEmail,
	createUser,
} = require("../model/users");

export const createUserService = async (
	firstName: string,
	lastName: string,
	email: string,
	password: string,
	role: string
) => {
	const userFound = await findUserByEmail(email);

	if (userFound) return { status: 409, message: "Email already exists" };

	const isUserCreated = await createUser(
		firstName,
		lastName,
		email,
		password,
		role
	);

	if (!isUserCreated) return { status: 500, message: "Error" };

	return { status: 201, message: "user created" };
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
	if (response.error) {
		console.log("Teve erro");
		return {
			status: 400,
			payload: { message: "Internal error, user not updated" },
		};
	}
	return { status: 200, payload: { message: "User updated" } };
};

export const deleteUserByIdService = async (id: string) => {
	try {
		const response = await deleteUserByIdi(id);
		if (response.status === 401)
			return { status: response.status, message: "You cannot delete an admin" };
		if (response) return { status: 200, payload: { message: "User deleted" } };
		return { status: 400, payload: { message: "User not deleted" } };
	} catch (error) {
		return { status: 500, payload: { message: "Internal server error" } };
	}
};
