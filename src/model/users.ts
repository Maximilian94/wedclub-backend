const connection = require("./database/mongoConnection");

const getAllUsers = async () => {
	return connection().then((db: any) =>
		db.collection("users").find({}).toArray()
	);
};

const findUser = async (email: string, password: string) => {
	const response = await connection().then((db: any) =>
		db.collection("users").findOne({ email: email, password: password })
	);
	console.log(response);
	return response;
};

const createUser = async (
	firstName: string,
	lastName: string,
	email: string,
	password: string
) => {
	try {
		const response = await connection().then((db: any) =>
			db.collection("users").insertOne({ firstName, lastName, email, password })
		);
		if (response.acknowledged) return { status: 201, message: "User created" };
		else if (!response.acknowledged)
			return { status: 500, message: "User not created" };
	} catch (error) {
		console.log(error);
		return false;
	}
};

module.exports = { getAllUsers, createUser, findUser };
