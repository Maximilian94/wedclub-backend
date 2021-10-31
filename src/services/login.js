const loginValidation = async (email, password) => {
	if (email === "max.kaden@hotmail.com" && password === "12345678") {
		return true;
	}
	return false;
};

const loginService = async (email, password) => {
	console.log("Login Service");
	const isValid = await loginValidation(email, password);
	if (isValid) {
		return { status: 200 };
	}
	return { status: 401 };
};

module.exports = { loginService };
