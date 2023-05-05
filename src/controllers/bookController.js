const AuthorModel = require("../models/authormodel");
const BookModel = require("../models/bookModel");
const PublisherModel = require("../models/publisherModel");
const mongoose = require("mongoose");

const getBooksData = async function (req, res) {
  let books = await BookModel.find()
    .populate("author_id")
    .populate("publisher_id");
  res.send({ data: books });
};

const getBooksWithAuthorDetails = async function (req, res) {
  let specificBook = await BookModel.find().populate("author_id");
  res.send({ data: specificBook });
};

const createBook = async function (req, res) {
  let data = req.body;
  if (
    mongoose.isValidObjectId(data.publisher) &&
    mongoose.isValidObjectId(data.author)
  ) {
    if (
      (await AuthorModel.findById(data.author)) &&
      (await PublisherModel.findById(data.publisher))
    ) {
      let CreatedBook = await BookModel.create(req.body);
      return res.send({ book: CreatedBook });
    } else {
      return res.send("Author/publisher is not Present");
    }
  } else {
    return res.send("error find in Book data");
  }
};

const hardCoverStatus = async (req, res) => {
     let pubname = await PublisherModel
       .findOne({ name: { $in: ["Penguin", "HarperCollins"] } })
       .select({ _id: 1 });
     let authname = await AuthorModel
       .find({ rating: { $gt: 3.5 } })
       .select({ _id: 1 });
     let books = await BookModel.updateMany(
       { publisher_id: pubname._id },
       { $set: { isHardCover: "true" } },
       { new: true }
     );
     let updateprice = null;
     for (i of authname) {
       updateprice = await BookModel.updateMany(
         { author_id: i._id },
         { $inc: { price: 10 } },
         { new: true }
       );
     }
     res.send({ data: books, updateprice });
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails;
module.exports.hardCoverStatus = hardCoverStatus;
