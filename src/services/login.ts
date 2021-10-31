// import jwt from "./jwt";
const jwt = require('./jwt.ts')

const loginValidation = async (email: string, password: string) => {
	if (email === "max.kaden@hotmail.com" && password === "12345678") {
		return true;
	}
	return false;
};

const loginService = async (email: string, password: string) => {
	console.log("Login Service");
	const isValid = await loginValidation(email, password);
	if (isValid) {
		return {
			status: 200,
			token: jwt.jwtCreator("Maximilian Kaden", email, "costumer"),
		};
	}
	return { status: 401 };
};
