const mongoose = require("mongoose");

const article = new mongoose.Schema({
  title: String,
  description: String,
  imageURL: String,
});

module.exports = mongoose.model("Article", article);
