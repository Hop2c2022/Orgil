const express = require(`express`);
const { signUp } = require("../controller/userController");
const { TokenCheckerMiddleware } = require("../middleware");
const UserRouter = express.Router();
UserRouter.post("/user", TokenCheckerMiddleware, signUp);
UserRouter.get("/user", Login);
module.exports = UserRouter;
