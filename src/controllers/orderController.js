const orderModel = require("../models/orderModel");
const userModel = require("../models/userModel");
const productModel = require("../models/productModel");

const createOrder = async function (req, res) {
  const head = req.headers.isfreeappuser;
  const userid = req.body.userId;
  const productid = req.body.productId;
  const user = await userModel.findById(userid);
  const product = await productModel.findById(productid);
  const updateBalance = user.balance - product.price;

  if (head == "false") {
    if (updateBalance > 0) {
      const balanceUpdate = await userModel.findByIdAndUpdate(
        userid,
        { $set: { balance: updateBalance } },
        { new: true }
      );

      req.body.amount = product.price;
      const orderData = req.body;
      const orderFinal = await orderModel.create(orderData);
      res.send({
        msg: "order is created successfully",
        orderDetails: orderFinal,
      });
    } else if (updateBalance < 0) {
      res.send({ error: "insuffcient balance" });
    }
  } else {
    req.body.amount = 0;
    const orderData = req.body;
    const orderFinal = await orderModel.create(orderData);
    const populated = await orderModel.find().populate("userId");
    // console.log(populated);
    // console.log(req.body);
    res.send({ msg: populated });
  }
}
module.exports.createOrder = createOrder;
