import express from "express";

const route = express.Router();

route.post("/", () => console.log("Cria"));

export default route;
