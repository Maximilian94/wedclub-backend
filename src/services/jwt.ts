import jwt from "jsonwebtoken";

const jwtCreator = (name: string, email: string, role: string) => {
	const secret = "marryme";
	const jwtConfig: object = { algorithm: "RS256", expiresIn: "15min" };

	const token = jwt.sign({ name, email, role }, secret, jwtConfig);
	return token;
};

export default { jwtCreator };
