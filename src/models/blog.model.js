const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title:String,
  body:String
});

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel;
