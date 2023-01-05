const express = require("express");
const { userCreate } = require("../controller/userController");
const UserRouter = express.Router();
UserRouter.post("/user", userCreate);
module.exports = UserRouter;
