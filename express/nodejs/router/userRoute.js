const express = require("express");
const { userPostController } = require("../controller/userController");

const UserRouter = express.Router();

UserRouter.post("/user", userPostController);

module.exports = UserRouter;
