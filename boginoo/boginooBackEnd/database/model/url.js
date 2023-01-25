const mongoose = require(`mongoose`);
const shortid = require("shortid");
const Url = new mongoose.Schema({
  // userid: { type: String, required: true },
  url: { type: String, required: true },
  shortid: { type: String, default: shortid.generate },
  createdAt: { type: Date, default: Date.now() },
});
const UrlModel = mongoose.model("Url", Url);
module.exports = UrlModel;
