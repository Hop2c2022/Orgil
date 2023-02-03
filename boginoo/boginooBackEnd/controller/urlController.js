const mongoose = require(`mongoose`);
const Url = require("../database/model/url");

exports.urlCreater = async (req, res) => {
  try {
    const { url, userid } = await req.body;
    const result = await Url.findOne({ url: url });
    if (result == null) {
      const newresult = await new Url({
        url: url,
        userid: userid,
      }).save();
      res.send(newresult);
      // res.status(201).send("success");
    } else {
      res.send(result);
    }
  } catch (err) {
    res.send(err.message);
  }
};
exports.urlGuigch = async (req, res) => {
  try {
    const { shortid } = req.params;
    const result = await Url.findOne({ shortid: shortid });
    if (result == null) {
      res.status(404).send();
    } else {
      res.redirect(`${result.url}`);
    }
  } catch (err) {
    res.send(err.message);
  }
};
exports.history = async (req, res) => {
  try {
    const { userid } = req.params;
    const result = await Url.find({ userid: userid });

    if (result == null) {
      res.send("psda url generate hiilde ala");
    } else {
      res.send(result);
    }
  } catch (err) {
    err.message;
  }
};
exports.deleteAllUrl = async (req, res) => {
  const result = await Url.deleteMany({});
  res.send("delete all");
};
