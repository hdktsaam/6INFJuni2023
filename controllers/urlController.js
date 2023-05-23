const mongoose = require("mongoose");

const Url = require("../models/url_foto");

const alleUrls = (req, res) => {
  Url.find().then((resultaat) => res.json({ resultaat }));
};

module.exports = {
  alleUrls,
};
