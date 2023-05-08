const productModel = require("../models/productModel");

const createProduct = async function (req, res) {
  const data = await productModel.create(req.body);
  res.send({ msg: data });
};

module.exports.createProduct = createProduct;
