const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const productController = require("../controllers/productController");
const orderController = require("../controllers/orderController");

router.post("/createProduct", productController.createProduct);
router.post("/createUser", authMiddleware.auth1, userController.createUser);
router.post(
  "/createOrder",
  authMiddleware.auth1,
  authMiddleware.auth2,
  authMiddleware.auth3,
  orderController.createOrder
);
module.exports = router;
