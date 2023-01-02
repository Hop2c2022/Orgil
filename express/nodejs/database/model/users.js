const mongoose = require(`mongoose`);

const User = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [8, "Username lenght must be at least 8 characters"],
    maxlength: [20, "Username lenght must be 8 to 20 characters"],
  },
  password: { type: String, required: true },
  email: { type: String, required: true },
  gender: {
    type: String,
    // enum: { values: ["male, female"], message: "{value} is not supported" },
  },
  createdAt: { type: Date, default: Date.now() },
});

const UserModel = mongoose.model("User", User);
module.exports = UserModel;
