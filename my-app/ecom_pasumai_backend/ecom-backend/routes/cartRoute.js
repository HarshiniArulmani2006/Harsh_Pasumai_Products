const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, cartController.addToCart);
router.get("/", auth, cartController.getCart);
router.delete("/:id", auth, cartController.removeFromCart);

module.exports = router;
