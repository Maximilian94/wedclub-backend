import { ObjectID } from "mongodb";
import { tokenCreator } from "./jwt";
const { findUser } = require("../model/users");

const loginValidation = async (email: string, password: string) => {
	if (email === "max.kaden@hotmail.com" && password === "12345678") {
		return true;
	}
	return false;
};

export const loginService = async (email: string, password: string) => {
	console.log("Login Service");
	// const isValid = await loginValidation(email, password);
	const response = await findUser(email, password);
	if (response) {
		const id = new ObjectID(response._id).toString();
		return {
			status: 200,
			token: tokenCreator(id, email, response.role),
			userData: response,
		};
	}
	return { status: 401, message: "Invalid username or password" };
};
