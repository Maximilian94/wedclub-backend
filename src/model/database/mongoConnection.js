const { MongoClient } = require("mongodb");

const OPTIONS = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const MONGO_DB_URL =
	"mongodb+srv://Maximilian94:Alemanha.,2@cluster0.1rgn2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

let db = null;

const connection = () => {
	return db
		? Promise.resolve(db)
		: MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => {
				db = conn.db("wedclub");
				return db;
		  });
};

module.exports = connection;
