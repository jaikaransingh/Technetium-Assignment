const mongoose = require("mongoose");

const authorSchema2 = new mongoose.Schema(
  {
    authorName: String,
    age: Number,
    address: String,
    rating: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("LibraryAuthor", authorSchema2);
