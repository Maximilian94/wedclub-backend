const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const { login, user } = require("../routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
	console.log("Aoba");
});

app.use("/login", login);
app.use("/user", user);

module.exports = app;
