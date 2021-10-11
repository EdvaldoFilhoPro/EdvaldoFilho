const { Router } = require("express");
const routes = new Router();

const Home = require("../app/controllers/Home");


routes.get("/", Home.index)
routes.post("/savesMessage", Home.story)


module.exports = routes;