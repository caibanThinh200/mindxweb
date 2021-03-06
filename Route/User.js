const express = require("express");
const route = express.Router();
const UserController = require("../Controller/UserController");
route.post("/",UserController.createUserController);
route.post("/login",UserController.loginController);
route.get("/:idUser",UserController.getUserInfoController);
route.get("/s/userprofile",UserController.getUsernameController);
module.exports = route;