import { ObjectID } from "mongodb";

const connection = require("./database/mongoConnection");

const getAllUsers = async () => {
	return connection().then((db: any) =>
		db.collection("users").find({}).toArray()
	);
};

const findUser = async (email: string, password: string) => {
	const response = await connection().then((db: any) =>
		db
			.collection("users")
			.findOne(
				{ email: email, password: password },
				{ projection: { password: 0 } }
			)
	);
	console.log("FindUser");
	return response;
};

const getUserById = async (id: string) => {
	const objId = new ObjectID(id);
	console.log(id);
	const response = await connection().then((db: any) =>
		db
			.collection("users")
			.findOne({ _id: objId }, { projection: { password: 0 } })
	);
	console.log(response);
	return response;
};

const createUser = async (
	firstName: string,
	lastName: string,
	email: string,
	password: string,
	role: string
) => {
	try {
		const response = await connection().then((db: any) =>
			db
				.collection("users")
				.insertOne({ firstName, lastName, email, password, role })
		);
		if (response.acknowledged) return { status: 201, message: "User created" };
		else if (!response.acknowledged)
			return { status: 500, message: "User not created" };
	} catch (error) {
		console.log(error);
		return false;
	}
};

module.exports = { getAllUsers, createUser, findUser, getUserById };
