const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const { createOrder } = require("../controller/orderController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createOrder);

// BUY NOW – single product
router.get("/buynow/:productId", async (req, res) => {
  const product = await Product.findById(req.params.productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json([
    {
      product,
      qty: 1
    }
  ]);
});

module.exports = router;
