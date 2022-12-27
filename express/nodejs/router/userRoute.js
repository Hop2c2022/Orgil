const express = require("express");
const {
  userPostController,
  userUpdateController,
  userDeleteController,
  postPostController,
} = require("../controller/userController");

const UserRouter = express.Router();

UserRouter.post("/users", userPostController);
UserRouter.delete("/user/:id", userDeleteController);
UserRouter.put("/user/:id", userUpdateController);
UserRouter.post("/post", postPostController);

module.exports = UserRouter;
