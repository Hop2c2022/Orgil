const express = require("express");
const {
  userCreate,
  userUpdate,
  userDelete,
} = require("../controller/userController");
const { postCreate, postDelete } = require("../controller/postController");
const { commentCreate } = require("../controller/commentController");
const UserRouter = express.Router();
UserRouter.post("/users", userCreate);
UserRouter.delete("/user/:id", userDelete);
UserRouter.delete("/user/:id/post/:id", postDelete);
UserRouter.put("/user/:id", userUpdate);
UserRouter.post("/user/:id/post", postCreate);
UserRouter.post("/user/:id/post/:id/comment", commentCreate);

module.exports = UserRouter;
