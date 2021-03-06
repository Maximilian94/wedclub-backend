import { loginService } from "../services/login";

const loginController = async (req: any, res: any) => {
	console.log("Login controller");
	const { email, password } = req.body;
	try {
		const response = await loginService(email, password);
		console.log(response);
		res.status(response.status).json(response);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

module.exports = { loginController };
