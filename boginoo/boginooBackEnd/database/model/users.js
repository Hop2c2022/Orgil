const mongoose = require(`mongoose`);

const User = new mongoose.Schema({
  password: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const UserModel = mongoose.model("User", User);
module.exports = UserModel;
