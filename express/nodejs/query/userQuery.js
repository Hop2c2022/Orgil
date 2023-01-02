const User = require("../database/model/users");

exports.createUserQuery = async (req) => {
  const { username, password, email, gender } = req.body;
  const result = await new User({
    username: username,
    password: password,
    email: email,
    gender: gender,
  }).save();
  return result;
};

exports.deleteUserQuery = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await User.findByIdAndDelete({ _id: objId }, { new: true });
  return result;
};

exports.updateUsernameQuery = async (req) => {
  const { id } = req.params;
  const { username } = req.body;
  const objId = new mongoose.Types.ObjectId(id);
  const resultLast = await User.findById({ _id: objId });
  const result = await User.findOneAndUpdate(
    { _id: objId },
    { username: username },
    { new: true }
  );
  return result;
};
