import { tokenCreator } from "./jwt";

const loginValidation = async (email: string, password: string) => {
	if (email === "max.kaden@hotmail.com" && password === "12345678") {
		return true;
	}
	return false;
};

export const loginService = async (email: string, password: string) => {
	console.log("Login Service");
	const isValid = await loginValidation(email, password);
	if (isValid) {
		return {
			status: 200,
			token: tokenCreator("Maximilian Kaden", email, "costumer"),
		};
	}
	return { status: 401 };
};
