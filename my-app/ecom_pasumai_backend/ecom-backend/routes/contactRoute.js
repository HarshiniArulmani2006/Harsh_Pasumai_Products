const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required" });
    }

    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ message: "Message sent successfully", contact });
  } catch (error) {
    console.error("Contact message error:", error);
    res.status(500).json({ message: "Unable to send message" });
  }
});

module.exports = router;
