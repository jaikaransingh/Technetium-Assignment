const express = require("express");
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const AuthorController = require("../controllers/authorController")
const BookController = require("../controllers/bookController");

// router.get("/test-me", function (req, res) {
//   res.send("My first ever api!");
// });
router.post("/createAuthor",AuthorController.createAuthor)
router.post("/createBook",BookController.createBook)
router.get("/getBooksData", BookController.getBooksData);
router.post("/updateBooks", BookController.updateBooks);
router.get("/priceBooks", BookController.priceBooks);

module.exports = router;
