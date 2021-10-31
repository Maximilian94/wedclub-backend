import jwt from "jsonwebtoken";

export const tokenCreator = (name: string, email: string, role: string) => {
	const secret = "marryme";
	const jwtConfig: object = { algorithm: "HS256", expiresIn: "15min" };

	const token = jwt.sign({ name, email, role }, secret, jwtConfig);
	return token;
};
