const express = require("express");
const {
  userCreate,
  userUpdate,
  userDelete,
  users,
} = require("../controller/userController");
const {
  postCreate,
  postDelete,
  postUptade,
} = require("../controller/postController");
const {
  commentCreate,
  commentDelete,
} = require("../controller/commentController");
const { authorizer } = require("../autorizer/autorzation");
const UserRouter = express.Router();
UserRouter.post("/users", userCreate);
UserRouter.get("/users", users);
UserRouter.delete("/user/:id", userDelete);
UserRouter.put("/user/:id", userUpdate);
UserRouter.post("/user/:id/post", postCreate);
UserRouter.delete("/user/:id/post/:id", postDelete);
UserRouter.put("/user/:id/post/:id", postUptade);
UserRouter.post("/comment", commentCreate);
UserRouter.delete("/comment/:id", commentDelete);
module.exports = UserRouter;
