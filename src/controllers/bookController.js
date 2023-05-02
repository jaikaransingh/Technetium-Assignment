const { count } = require("console");
const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/authorModel");
const createBook = async function (req, res) {
  let data = req.body;
  let savedData = await BookModel.create(data);
  res.send({ msg: savedData });
};

const getBooksData = async function (req, res) {
  let name = req.body.authorName;
  let id = await AuthorModel.findOne({ authorName: name }).select({
    author_id: 1,
    _id: 0,
  });
  let allBooks = await BookModel.find({ author_id: id.author_id }).select({
    name: 1,
    _id: 0,
  });
    // console.log(id.author_id)
  if (allBooks.length > 0) res.send({ msg: allBooks });
  else res.send({ msg: "No Match found" });
};

const updateBooks = async function (req, res) {
  let Name = req.body.name;
  let id = await BookModel.findOne({ name: Name }).select({
    author_id: 1,
    _id: 0,
  });
  let authorName = await AuthorModel.find({ author_id: id.author_id }).select({
    authorName: 1,
    _id: 0,
  });
  let allBooks = await BookModel.findOneAndUpdate(
    { name: Name }, //condition
    { $set: { price: 100 } }, //update in data
    { new: true, upsert: true } // new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
  );

  res.send(allBooks + authorName);
};

const priceBooks = async function (req, res) {
  let authors = await AuthorModel.find();
  let data = [];
  let books = await BookModel.find({ prices: { $gte: 50, $lte: 100 } }).select({
    author_id: 1,
    _id: 0,
  });
  for (i of books) {
    authors = await AuthorModel.find({ author_id: i.author_id }).select({
      authorName: 1,
      _id: 0,
    });
    data.push(authors);
  }
  return res.send(data);
};
module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.updateBooks = updateBooks;
module.exports.priceBooks = priceBooks;
