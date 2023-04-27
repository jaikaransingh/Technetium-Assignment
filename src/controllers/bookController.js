const BookModel = require("../models/bookModel");

const addBook = async function (req, res) {
  let data = req.body;
  let savedData = await Bookodel.create(data);
  res.send({ msg: savedData });
};
const getBook = async function (req, res) {
  let allUsers = await BookModel.find();
  res.send({ msg: allUsers });
};

module.exports.addBook = addBook;
module.exports.getBook = getBook;
