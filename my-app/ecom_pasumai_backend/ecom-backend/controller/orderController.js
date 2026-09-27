const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const {
      products,
      totalAmount,
      deliveryAddress,
      phone,
    } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({ message: "No products in order" });
    }

    const order = new Order({
      userId: req.user.id,
      products,
      totalAmount,
      deliveryAddress,
      phone,
      paymentMethod: "UPI",
    });

    await order.save();

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
