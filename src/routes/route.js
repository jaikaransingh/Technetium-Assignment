const express = require("express");
const router = express.Router();
const UserModel = require("../models/userModel.js");
const UserController = require("../controllers/userController");
const BookController = require("../controllers/bookController.js");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.post("/createUser", UserController.createUser);
router.post("/addBook", BookController.addBook);

router.get("/getUsersData", UserController.getUsersData);
router.get("/getBook", BookController.getBook);

module.exports = router;
