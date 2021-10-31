const { loginService } = require("../services/login.ts");

const loginController = async (req, res) => {
	console.log("Login controller");
	const { email, password } = req.body;
	try {
		const response = await loginService(email, password);
		console.log(response);
		res.status(response.status).json(response);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
};

module.exports = { loginController };
