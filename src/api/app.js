const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const { Login } = require("../routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
	console.log("Aoba");
});

app.use("/login", Login);

module.exports = app;
