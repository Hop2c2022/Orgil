const mongoose = require("mongoose");

const connectionstring = `mongodb+srv://orgil:94566399ub@cluster0.ppbsxka.mongodb.net/one`;
exports.connectDatabase = async () => {
  try {
    await mongoose.connect(connectionstring);
    console.log("success");
    return "mongoose connected ";
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};
