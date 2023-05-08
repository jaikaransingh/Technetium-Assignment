const { default: mongoose } = require("mongoose");
const userModel = require("../models/userModel");
const productModel = require("../models/productModel");

const auth1 = function (req, res, next) {
  const isFreeAppUser = req.headers.isfreeappuser;
  // console.log(isFreeAppUser)
  if (!isFreeAppUser) {
    res.send("Please log in or Register user");
  } else {
    req.body.isFreeAppUser = isFreeAppUser;
    next();
  }
};

const auth2 = function (req, res, next) {
  const body = req.body;
  const userid = body["userId"];
  const productid = body["productId"];
  if (!mongoose.isValidObjectId(userid)) {
    res.send({ error: "Invalid user Id" });
  } else if (!mongoose.isValidObjectId(productid)) {
    res.send({ error: "Invalid product Id" });
  } else {
    next();
  }
};

const auth3 = async function (req, res, next) {
  const userid = req.body.userId;
  const productid = req.body.productId;
  const checkUser = await userModel.findById(userid);
  const checkProduct = await productModel.findById(productid);

  if (!checkUser || !checkProduct) {
    if (!checkUser) {
      res.send({ error: "user with this Id doesn't exist" });
    } else if (!checkProduct) {
      res.send({ error: "product with this Id doesn't exist" });
    }
  } else {
    next();
  }
};

module.exports.auth1 = auth1;
module.exports.auth2 = auth2;
module.exports.auth3 = auth3;