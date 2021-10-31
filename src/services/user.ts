export const createUserService = (
	firstName: string,
	lastName: string,
	email: string,
	password: string
) => {
	return { status: 200, message: "user created" };
};
