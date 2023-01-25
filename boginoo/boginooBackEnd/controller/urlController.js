const mongoose = require(`mongoose`);
const Url = require("../database/model/url");

exports.urlCreater = async (req, res) => {
  try {
    const { url } = await req.body;
    const result = await new Url({
      url: url,
    }).save();
    // const shortUrl = res.result.shortid;
    // return shortUrl;
    res.send(result.shortid);
  } catch (err) {
    res.send(err.message);
  }
};
