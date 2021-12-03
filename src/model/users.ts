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
	const response = await connection().then((db: any) =>
		db
			.collection("users")
			.findOne({ _id: objId }, { projection: { password: 0 } })
	);
	return response;
};

const findUserByEmail = async (email: string) => {
	const response = await connection().then((db: any) =>
		db
			.collection("users")
			.findOne({ email: email }, { projection: { password: 0 } })
	);
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
		if (response.acknowledged) return true;
		else if (!response.acknowledged) return false;
	} catch (error) {
		console.log(error);
		return false;
	}
};

const updateUserById = async (id: string, updateData: object) => {
	console.log("Aoba");
	console.log(id);
	try {
		const response = await connection().then((db: any) =>
			db
				.collection("users")
				.findOneAndUpdate(
					{ _id: new ObjectID(id) },
					{ $set: updateData },
					{ new: true, upsert: true }
				)
		);
		return response;
	} catch (error) {
		return { error: error };
	}
};

const deleteUserByIdi = async (id: string) => {
	const { role } = await getUserById(id);
	if (role !== "costumer") {
		return { status: 401 };
	}
	const response = await connection().then((db: any) =>
		db.collection("users").findOneAndDelete({ _id: new ObjectID(id) })
	);

	return response.value;
};

module.exports = {
	getAllUsers,
	createUser,
	findUser,
	getUserById,
	updateUserById,
	deleteUserByIdi,
	findUserByEmail,
};
