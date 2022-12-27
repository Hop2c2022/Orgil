const mongoose = require(`mongoose`);

const User = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const UserModel = mongoose.model("User", User);
module.exports = UserModel;

// [
//   {
//     _id: 123,
//     name: "jvk"
//   }
// ]

// [
//   {
//     _id: "post123",
//     posts: "hi",
//     userId: 123
//   }
// ]

// [
//   {
//     _id: "comment123",
//     comment: "ohh hi hi",
//     postId: "post123",
//     userId: 123
//   }
// ]

// "hi" --> "jvk" -->
// "ohh hi hi" --> "jvk"

// "hiasjdhaikseaw" --> "jvk"
