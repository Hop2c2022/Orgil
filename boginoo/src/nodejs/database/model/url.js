const mongoose = require(`mongoose`);

const Url = new mongoose.Schema({
  LongUrl: {
    type: String,
    required: true,
  },
  ShortUrl: {
    type: String,
    required: true,
  },
});
const UrlModel = mongoose.Model("Url", Url);
module.exports = UrlModel;
