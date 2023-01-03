const mongoose = require("mongoose");

const connectionstring = `mongodb+srv://orgil:94566399ub@cluster0.ppbsxka.mongodb.net/hop2c`;

exports.connectDatabase = async () => {
  try {
    await mongoose.connect(connectionstring);
    return "mongoose connected";
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};
