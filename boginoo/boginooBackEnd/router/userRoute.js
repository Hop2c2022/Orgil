const express = require(`express`);
const {
  signUp,
  UserGetId,
  userGet,
  userLogin,
  userLog,
} = require("../controller/userController");
const { urlCreater } = require("../controller/urlController");
const UserRouter = express.Router();
UserRouter.post("/user", signUp);
UserRouter.get("/user/:id", UserGetId);
UserRouter.get("/user", userGet);
UserRouter.post("/login", userLogin);
UserRouter.post("/users", userLog);
UserRouter.post("/url", urlCreater);
module.exports = UserRouter;
